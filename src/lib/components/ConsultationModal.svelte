<script>
  import { fade } from 'svelte/transition';
  let { isOpen = false, contact, onClose } = $props();

  let name = $state('');
  let workEmail = $state('');
  let projectBrief = $state('');
  let statusMsg = $state('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !workEmail.trim() || !projectBrief.trim()) {
      statusMsg = 'Mohon lengkapi nama, email perusahaan, dan kebutuhan proyek Anda.';
      return;
    }
    const subject = encodeURIComponent(`[Konsultasi PHI Integrasi] ${name} - ${projectBrief.slice(0, 40)}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${workEmail}\n\nKebutuhan Proyek:\n${projectBrief}`
    );
    statusMsg = 'Membuka aplikasi email dengan draf konsultasi terstruktur...';
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }
</script>

{#if isOpen}
  <div
    class="modal-backdrop-solid fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label="Jadwalkan Diskusi Teknis"
    transition:fade={{ duration: 120 }}
    onkeydown={(e) => {
      if (e.key === 'Escape') onClose();
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <div class="w-full max-w-lg rounded-lg border border-[#d0d7de] bg-white p-6 text-[#0b1220] shadow-xl sm:p-8">
      <div class="flex items-center justify-between gap-4 border-b border-[#d0d7de] pb-4">
        <div>
          <span class="font-mono-tech text-xs font-semibold uppercase text-[#1d5bff]">Diskusi Teknis</span>
          <h3 class="mt-0.5 text-lg font-bold text-[#0b1220]">Kirim Ringkasan Kebutuhan</h3>
        </div>
        <button
          type="button"
          onclick={onClose}
          class="rounded-md border border-[#d0d7de] px-3 py-1.5 font-mono-tech text-xs font-medium text-slate-700 hover:bg-slate-50"
        >
          Tutup [Esc]
        </button>
      </div>

      <form onsubmit={handleSubmit} class="mt-5 space-y-4">
        <div>
          <label for="consult-name" class="block text-xs font-semibold text-[#0b1220]">
            Nama & Perusahaan / Institusi
          </label>
          <input
            id="consult-name"
            type="text"
            bind:value={name}
            placeholder="Contoh: Budi Santoso - PT Maju Jaya"
            class="mt-1.5 w-full rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-3.5 py-2.5 text-sm text-[#0b1220] focus:border-[#1d5bff] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label for="consult-email" class="block text-xs font-semibold text-[#0b1220]">
            Email Kerja
          </label>
          <input
            id="consult-email"
            type="email"
            bind:value={workEmail}
            placeholder="nama@perusahaan.co.id"
            class="mt-1.5 w-full rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-3.5 py-2.5 text-sm text-[#0b1220] focus:border-[#1d5bff] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label for="consult-brief" class="block text-xs font-semibold text-[#0b1220]">
            Ruang Lingkup Teknis (Backend, Jaringan HA, EV/OCPP, atau IoT)
          </label>
          <textarea
            id="consult-brief"
            rows="4"
            bind:value={projectBrief}
            placeholder="Jelaskan target sistem, integrasi API, atau kendala infrastruktur yang ingin diselesaikan..."
            class="mt-1.5 w-full rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-3.5 py-2.5 text-sm text-[#0b1220] focus:border-[#1d5bff] focus:bg-white focus:outline-none"
          ></textarea>
        </div>

        {#if statusMsg}
          <p class="rounded-md border border-slate-200 bg-[#f6f8fa] px-3.5 py-2.5 text-xs font-medium text-slate-700">
            {statusMsg}
          </p>
        {/if}

        <div class="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onclick={onClose}
            class="rounded-md border border-[#d0d7de] px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Batal
          </button>
          <button type="submit" class="btn-primary px-5 py-2 text-xs sm:text-sm">
            Buka Draf Email
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}
