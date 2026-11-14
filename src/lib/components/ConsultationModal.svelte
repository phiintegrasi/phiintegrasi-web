<script>
  import { fade, fly } from "svelte/transition";
  let { isOpen = false, contact, onClose } = $props();

  let name = $state("");
  let workEmail = $state("");
  let projectBrief = $state("");
  let statusMsg = $state("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !workEmail.trim() || !projectBrief.trim()) {
      statusMsg = "Mohon lengkapi nama, email perusahaan, dan kebutuhan proyek Anda.";
      return;
    }
    const subject = encodeURIComponent(`[Konsultasi PHI Integrasi] ${name} - ${projectBrief.slice(0, 40)}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${workEmail}\n\nKebutuhan Proyek:\n${projectBrief}`
    );
    statusMsg = "Membuka aplikasi email dengan draf konsultasi terstruktur...";
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }
</script>

{#if isOpen}
  <div
    class="modal-backdrop-wn"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label="Jadwalkan Konsultasi dan Demo"
    transition:fade={{ duration: 150 }}
    onkeydown={(e) => {
      if (e.key === "Escape") onClose();
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <div
      class="w-full max-w-lg rounded-3xl bg-white p-7 sm:p-9 text-[#0f172a] shadow-2xl border border-slate-200"
      transition:fly={{ y: 20, duration: 220 }}
    >
      <div class="flex items-center justify-between gap-4">
        <div class="text-lg font-bold tracking-tight text-[#0f172a]">
          PHI Integrasi<span class="text-[#1d5bff]">.com</span>
        </div>
        <button
          type="button"
          class="w-10 h-10 rounded-xl bg-[#f4f7fb] text-[#0f172a] hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer font-bold"
          aria-label="Tutup modal konsultasi"
          onclick={onClose}
        >
          ✕
        </button>
      </div>

      <h3 class="mt-6 text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight">
        Jadwalkan Konsultasi &amp; Demo
      </h3>
      <p class="mt-2 text-sm text-[#475569] leading-relaxed">
        Tim solution architect kami akan menghubungi Anda maksimal dalam 1x24 jam kerja.
      </p>

      <form onsubmit={handleSubmit} class="mt-6 space-y-4">
        <div>
          <label for="consult-name" class="sr-only">Nama Lengkap</label>
          <input
            id="consult-name"
            type="text"
            bind:value={name}
            placeholder="Nama Lengkap"
            class="w-full rounded-xl bg-[#f4f7fb] border border-slate-200/80 px-4 py-3.5 text-sm text-[#0f172a] placeholder-[#475569] focus:border-[#1d5bff] focus:outline-none"
          />
        </div>

        <div>
          <label for="consult-email" class="sr-only">Email Perusahaan</label>
          <input
            id="consult-email"
            type="email"
            bind:value={workEmail}
            placeholder="Email Perusahaan"
            class="w-full rounded-xl bg-[#f4f7fb] border border-slate-200/80 px-4 py-3.5 text-sm text-[#0f172a] placeholder-[#475569] focus:border-[#1d5bff] focus:outline-none"
          />
        </div>

        <div>
          <label for="consult-brief" class="sr-only">Kebutuhan Proyek</label>
          <textarea
            id="consult-brief"
            rows="3"
            bind:value={projectBrief}
            placeholder="Kebutuhan Projek (AI Lokal, Custom App/Rust, OCPP EV, Jaringan)"
            class="w-full rounded-xl bg-[#f4f7fb] border border-slate-200/80 px-4 py-3.5 text-sm text-[#0f172a] placeholder-[#475569] focus:border-[#1d5bff] focus:outline-none resize-none"
          ></textarea>
        </div>

        {#if statusMsg}
          <p class="text-xs font-semibold text-[#1d5bff]">{statusMsg}</p>
        {/if}

        <button type="submit" class="w-full btn-blue py-4">
          <span>KIRIM PERMINTAAN</span>
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  </div>
{/if}
