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
    aria-label="Ceritakan Proyek Anda"
    transition:fade={{ duration: 120 }}
    onkeydown={(e) => {
      if (e.key === 'Escape') onClose();
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <div class="w-full max-w-lg rounded-md border border-[#dcd8cf] bg-white p-6 text-[#16181d] shadow-xl sm:p-8">
      <div class="flex items-center justify-between gap-4 border-b border-[#dcd8cf] pb-4">
        <h3 class="text-lg font-bold text-[#16181d]">Ceritakan proyek Anda</h3>
        <button
          type="button"
          onclick={onClose}
          class="rounded-md border border-[#dcd8cf] px-3 py-1.5 text-xs font-medium text-[#4a4f59] hover:bg-[#f5f3ee]"
        >
          Tutup
        </button>
      </div>

      <form onsubmit={handleSubmit} class="mt-5 space-y-4">
        <div>
          <label for="consult-name" class="block text-sm font-semibold text-[#16181d]">
            Nama & Perusahaan / Institusi
          </label>
          <input
            id="consult-name"
            type="text"
            bind:value={name}
            placeholder="Contoh: Budi Santoso - PT Maju Jaya"
            class="mt-1.5 w-full rounded-md border border-[#dcd8cf] bg-[#f5f3ee] px-3.5 py-2.5 text-sm text-[#16181d] focus:border-[#c2410c] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label for="consult-email" class="block text-sm font-semibold text-[#16181d]">
            Email Kerja
          </label>
          <input
            id="consult-email"
            type="email"
            bind:value={workEmail}
            placeholder="nama@perusahaan.co.id"
            class="mt-1.5 w-full rounded-md border border-[#dcd8cf] bg-[#f5f3ee] px-3.5 py-2.5 text-sm text-[#16181d] focus:border-[#c2410c] focus:bg-white focus:outline-none"
          />
        </div>

        <div>
          <label for="consult-brief" class="block text-sm font-semibold text-[#16181d]">
            Ringkasan Kebutuhan (Software, Hardware/IoT, AI, atau Jaringan)
          </label>
          <textarea
            id="consult-brief"
            rows="4"
            bind:value={projectBrief}
            placeholder="Apa yang ingin dibangun, apa yang sudah ada, dan kapan target mulainya..."
            class="mt-1.5 w-full rounded-md border border-[#dcd8cf] bg-[#f5f3ee] px-3.5 py-2.5 text-sm text-[#16181d] focus:border-[#c2410c] focus:bg-white focus:outline-none"
          ></textarea>
        </div>

        {#if statusMsg}
          <p class="rounded-md border border-[#dcd8cf] bg-[#f5f3ee] px-3.5 py-2.5 text-xs font-medium text-[#16181d]">
            {statusMsg}
          </p>
        {/if}

        <div class="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onclick={onClose}
            class="rounded-md border border-[#dcd8cf] px-4 py-2 text-sm font-semibold text-[#4a4f59] hover:bg-[#f5f3ee]"
          >
            Batal
          </button>
          <button type="submit" class="btn-primary px-5 py-2 text-sm">
            Buka Draf Email
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}
