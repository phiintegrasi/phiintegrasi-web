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
      statusMsg = "Mohon lengkapi nama, email kerja, dan ringkasan proyek Anda.";
      return;
    }
    const subject = encodeURIComponent(`[Konsultasi PHI Integrasi] ${name} - ${projectBrief.slice(0, 40)}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${workEmail}\n\nRingkasan Kebutuhan:\n${projectBrief}`
    );
    statusMsg = "Membuka aplikasi email dengan draf konsultasi terstruktur...";
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }
</script>

{#if isOpen}
  <div
    class="modal-backdrop-fc"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label="Konsultasi Gratis IT PHI Integrasi"
    transition:fade={{ duration: 160 }}
    onkeydown={(e) => {
      if (e.key === "Escape") onClose();
    }}
    onclick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <div
      class="w-full max-w-lg rounded-3xl bg-[#1b1a32] border border-white/15 p-7 sm:p-9 text-white shadow-2xl"
      transition:fly={{ y: 20, duration: 220 }}
    >
      <div class="flex items-center justify-between gap-4">
        <div class="brand-wordmark text-lg">
          <span class="brand-wordmark-accent">PHI</span><span class="brand-wordmark-base">INTEGRASI</span>
        </div>
        <button
          type="button"
          class="w-10 h-10 rounded-xl bg-[#141326] border border-white/10 text-white hover:border-[#7ed6e8] hover:text-[#7ed6e8] transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Tutup modal konsultasi"
          onclick={onClose}
        >
          ✕
        </button>
      </div>

      <h3 class="mt-7 text-2xl sm:text-3xl font-bold text-white leading-tight">
        Dapatkan Konsultasi IT Gratis
      </h3>
      <p class="mt-2.5 text-sm text-[#b4b7c9] leading-relaxed">
        Ceritakan gambaran proyek Anda dan tim arsitek solusi kami akan merespons dalam 24 jam kerja.
      </p>

      <form onsubmit={handleSubmit} class="mt-6 space-y-4">
        <div>
          <label for="consult-name" class="sr-only">Nama Anda</label>
          <input
            id="consult-name"
            type="text"
            bind:value={name}
            placeholder="Nama Lengkap / Perusahaan"
            class="w-full rounded-xl bg-[#141326] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#7d819a] focus:border-[#7ed6e8] focus:outline-none"
          />
        </div>

        <div>
          <label for="consult-email" class="sr-only">Email Kerja</label>
          <input
            id="consult-email"
            type="email"
            bind:value={workEmail}
            placeholder="Email Kerja"
            class="w-full rounded-xl bg-[#141326] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#7d819a] focus:border-[#7ed6e8] focus:outline-none"
          />
        </div>

        <div>
          <label for="consult-brief" class="sr-only">Ringkasan Proyek</label>
          <textarea
            id="consult-brief"
            rows="3"
            bind:value={projectBrief}
            placeholder="Ringkasan Proyek (misal: Jaringan Enterprise, Sistem OCPP, Web/Rust App)"
            class="w-full rounded-xl bg-[#141326] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#7d819a] focus:border-[#7ed6e8] focus:outline-none resize-none"
          ></textarea>
        </div>

        {#if statusMsg}
          <p class="text-xs text-[#7ed6e8]">{statusMsg}</p>
        {/if}

        <button type="submit" class="w-full btn-fc-solid-cyan py-4">
          <span>KIRIM PERMINTAAN</span>
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  </div>
{/if}
