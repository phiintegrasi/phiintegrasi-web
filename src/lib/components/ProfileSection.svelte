<script>
  let { brand, profile } = $props();
</script>

<section id="tentang-kami" class="section-block section-block-alt" aria-labelledby="tentang-kami-title">
  <div class="container">
    <div class="section-index-row" data-aos="fade-up">
      <span class="section-code">{profile.sectionCode}</span>
      <h2 class="section-title" id="tentang-kami-title">{profile.title}</h2>
    </div>

    <div class="profile-grid">
      <div data-aos="fade-up" data-aos-delay="80">
        <p class="profile-lead">{profile.lead}</p>
        <p class="profile-body">{profile.body}</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="140">
        <table class="legal-dossier-table" aria-label="Data Identitas dan Rekam Jejak Perusahaan">
          <tbody>
            <tr>
              <th scope="row">Nama Entitas</th>
              <td>{brand.companyName}</td>
            </tr>
            <tr>
              <th scope="row">Badan Hukum / Unit</th>
              <td><span class="placeholder-tag">{brand.legalEntity}</span></td>
            </tr>
            <tr>
              <th scope="row">HAKI &amp; Registrasi</th>
              <td><span class="placeholder-tag">{brand.registrationNumber}</span></td>
            </tr>
            <tr>
              <th scope="row">Inisiasi Rekayasa</th>
              <td>{brand.foundedYear}</td>
            </tr>
            <tr>
              <th scope="row">Basis Operasional</th>
              <td>{brand.city}</td>
            </tr>
            {#if brand.githubProfileUrl}
              <tr>
                <th scope="row">Repositori Kode</th>
                <td>
                  <a href={brand.githubProfileUrl} target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">
                    github.com/harrynurbudyana
                  </a>
                  {#if brand.secondGithubProfileUrl}
                    <span> &amp; </span>
                    <a href={brand.secondGithubProfileUrl} target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">
                      github.com/ivantans
                    </a>
                  {/if}
                  {#if brand.secondPortfolioUrl}
                    <span> (</span>
                    <a href={brand.secondPortfolioUrl} target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">
                      ivantans.id
                    </a>
                    <span>)</span>
                  {/if}
                </td>
              </tr>
            {/if}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Grid 2x2 Prinsip & Fondasi Rekayasa -->
    <div class="principles-2x2-grid" aria-label="Prinsip Rekayasa">
      {#each profile.principles as p, idx}
        <article
          class="principle-block"
          data-aos="fade-up"
          data-aos-delay={80 + idx * 80}
        >
          <div class="principle-icon-badge transition-transform duration-300 ease-out hover:scale-105" aria-hidden="true">
            {#if idx === 0}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            {:else if idx === 1}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="6" cy="6" r="2.5" />
                <circle cx="18" cy="18" r="2.5" />
                <path d="M6 8.5v7a2.5 2.5 0 0 0 2.5 2.5h4" />
                <path d="m10.5 15.5 2.5 2.5-2.5 2.5" />
                <path d="M18 15.5v-7A2.5 2.5 0 0 0 15.5 6h-4" />
              </svg>
            {:else if idx === 2}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3v18" />
                <path d="M5 7h14" />
                <path d="m5 7-3 7h6L5 7Z" />
                <path d="m19 7-3 7h6l-3-7Z" />
                <path d="M8 21h8" />
              </svg>
            {:else}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2 4 6v6c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V6l-8-4Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            {/if}
          </div>
          <h3 class="principle-heading">{p.title}</h3>
          <p class="principle-text">{p.text}</p>
        </article>
      {/each}
    </div>

    {#if profile.hakiAndResearch && profile.hakiAndResearch.length > 0}
      <h3 class="section-title" style="font-size: 1.45rem; margin-bottom: 1.25rem;" data-aos="fade-up">
        Hak Kekayaan Intelektual (HAKI) &amp; Publikasi Riset Terdaftar
      </h3>
      <div class="team-grid" style="margin-bottom: 3rem;">
        {#each profile.hakiAndResearch as item, idx}
          <article
            class="team-member-row transition-all duration-300 ease-out hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={80 + idx * 80}
          >
            <div>
              <span class="placeholder-tag" style="margin-bottom: 0.6rem;">{item.badge}</span>
              <h4 class="team-name">{item.title}</h4>
              <p class="team-role" style="margin-bottom: 0.5rem;">{item.meta}</p>
              <p class="team-bio">{item.desc}</p>
            </div>
          </article>
        {/each}
      </div>
    {/if}

    <h3 class="section-title" style="font-size: 1.45rem; margin-bottom: 1.25rem;" data-aos="fade-up">
      Kepemimpinan &amp; Arsitek Utama
    </h3>
    <div class="team-grid">
      {#each profile.team as member, idx}
        <article
          class="team-member-row transition-all duration-300 ease-out hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay={80 + idx * 90}
        >
          <div class="avatar-placeholder" aria-hidden="true">{member.initials}</div>
          <div>
            <p class="team-role">{member.role}</p>
            <h4 class="team-name">{member.name}</h4>
            <p class="team-bio">{member.bio}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
