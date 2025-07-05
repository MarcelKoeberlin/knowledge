---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/plasmonics/5-localised-surface-plasmons/","updated":"2025-07-03T20:20:02.060+02:00"}
---


Jump back to ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Plasmonics/5 Localised Surface Plasmons#5.1 Normal Modes of Sub-Wavelength Metal Particles\|5.1 Normal Modes of Sub-Wavelength Metal Particles]]
[[Notes/Plasmonics/5 Localised Surface Plasmons#5.2 Beyond the Quasi-Static Approximation and Plasmon Lifetime\|5.2 Beyond the Quasi-Static Approximation and Plasmon Lifetime]]
[[Notes/Plasmonics/5 Localised Surface Plasmons#5.3 Coupling Between Localised Plasmons\|5.3 Coupling Between Localised Plasmons]]
[[Notes/Plasmonics/5 Localised Surface Plasmons#5.4 Void Plasmons and Metallic Nanoshells\|5.4 Void Plasmons and Metallic Nanoshells]]
[[Notes/Plasmonics/5 Localised Surface Plasmons#5.5 Localised Plasmons and Gain media\|5.5 Localised Plasmons and Gain media]]

---
# 5 Localised Surface Plasmons
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=82&selection=2,0,2,26| ]]

The second fundamental excitation in plasmonics is the so-called localised surface plasmon. In contrast to the propagating SPPs already discussed, these are non-propagating excitations of the conduction electrons coupled to the electromagnetic field, typically occurring in metallic nanoparticles or nanostructures significantly smaller than the wavelength of incident light.

---
## 5.1 Normal Modes of Sub-Wavelength Metal Particles
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=83&selection=10,0,12,46| ]]

The interaction of a particle of size $d$ with light of wavelength $\lambda$ can be analysed using the simple _quasi-static approximation_, provided that $d \ll \lambda$. In this case, the phase of the external electric field is practically constant over the particle volume, reducing the problem to the interaction of a particle with an essentially uniform electrostatic field. The harmonic time dependence can then be reintroduced to the solution once the spatial field distributions are known.

Consider the most convenient geometry for analytical treatment: a homogeneous, isotropic sphere of radius $a$ located at the origin in a uniform, static electric field $\mathbf{E}_{\text{applied}} = E_0\hat{\mathbf{z}}$. The surrounding medium is isotropic and non-absorbing with a real dielectric constant $\varepsilon_m$. For simplicity at first, we assume that the dielectric response of the sphere material is described by a simple complex dielectric function $\varepsilon(\omega)$.

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 21.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2021.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=83&rect=107,91,328,188| ]]

In this electrostatic approach, the interest lies in solving Laplace's equation for the electric potential $\Phi$:
$$
\nabla^2\Phi = 0.
$$
From this, the electric field can be calculated as $\mathbf{E} = -\nabla\Phi$. The general solution to Laplace's equation in spherical coordinates, assuming azimuthal symmetry due to the field direction, is of the form
$$
\Phi(r, \theta) = \sum_{l=0}^{\infty}\left[A_l r^l + B_l r^{-(l+1)}\right] P_l(\cos\theta),
$$
where $P_l(\cos\theta)$ are the Legendre polynomials of order $l$, and $\theta$ is the angle between the position vector $\mathbf{r}$ and the $z$-axis (direction of the applied field). Enforcing boundary conditions (continuity of $\Phi$ and the normal component of $\mathbf{D}$ at $r=a$), the solution for the potential inside ($r<a$) and outside ($r>a$) the sphere is obtained as:
$$
\begin{aligned}
\Phi_{\text{in}}(r,\theta) & = -\frac{3 \varepsilon_m}{\varepsilon(\omega) + 2 \varepsilon_m} E_0 r \cos\theta, \\
\Phi_{\text{out}}(r,\theta) & = -E_0 r \cos\theta + \frac{\varepsilon(\omega) - \varepsilon_m}{\varepsilon(\omega) + 2 \varepsilon_m} E_0 a^3 \frac{\cos\theta}{r^2}.
\end{aligned}
$$

The expression for $\Phi_{\text{out}}$ describes the superposition of the applied potential ($-E_0 r \cos\theta = -E_0 z$) and the potential of an electric dipole located at the particle centre. By introducing the induced dipole moment $\mathbf{p}$, the external potential can be rewritten as:
$$
\Phi_{\text{out}}(r,\theta)  = -E_0 r \cos\theta + \frac{\mathbf{p} \cdot \hat{\mathbf{r}}}{4 \pi \varepsilon_0 \varepsilon_m r^2},
$$
where
$$
\mathbf{p}  = 4 \pi \varepsilon_0 \varepsilon_m a^3 \frac{\varepsilon(\omega) - \varepsilon_m}{\varepsilon(\omega) + 2 \varepsilon_m} \mathbf{E}_{\text{applied}}.
$$
Note that $\mathbf{E}_{\text{applied}} = E_0 \hat{\mathbf{z}}$. The applied field induces a dipole moment inside the sphere with magnitude proportional to $|\mathbf{E}_{\text{applied}}|$. By defining the polarisability $\alpha$ through the relation $\mathbf{p} = \varepsilon_0 \varepsilon_m \alpha \mathbf{E}_{\text{applied}}$, the polarisability of the sphere becomes:
$$
\alpha(\omega) = 4 \pi a^3 \frac{\varepsilon(\omega) - \varepsilon_m}{\varepsilon(\omega) + 2 \varepsilon_m}.
$$

This expression for the complex polarisability of a small sphere is a central result. Assuming a Drude form for the dielectric response $\varepsilon(\omega)$ of a metal like silver, the magnitude and phase of $\alpha(\omega)$ exhibit resonant behaviour:

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 22.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2022.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=85&rect=47,109,391,223| ]]

The polarisability experiences a resonant enhancement when the denominator $|\varepsilon(\omega) + 2\varepsilon_m|$ is minimised. For a material with a slowly varying $\mathfrak{Im}\left[\varepsilon(\omega)\right]$ around the resonance, this condition approximately reduces to:
$$
\mathfrak{Re}\left[\varepsilon(\omega)\right] = -2\varepsilon_m.
$$
This is known as the **Fröhlich condition**, and the associated collective electron oscillation mode is the _dipole surface plasmon_ or _localised surface plasmon resonance (LSPR)_. For a simple Drude metal without damping, $\varepsilon(\omega) = 1 - \omega_p^2/\omega^2$, embedded in vacuum ($\varepsilon_m=1$), this criterion is met at a frequency $\omega_L = \omega_p / \sqrt{3}$. The resonance frequency strongly depends on the dielectric environment $\varepsilon_m$, with a red-shift (lower frequency) observed as $\varepsilon_m$ increases. By calculating the electric field as $\mathbf{E} = -\nabla\Phi$, the resonant behaviour of $\alpha$ implies a resonant enhancement of both the internal electric field within the sphere and the dipolar scattered field outside the sphere. This field enhancement is the foundation for many promising applications of plasmonics, such as surface-enhanced Raman scattering (SERS) and sensing.

For a small sphere ($a \ll \lambda$), its representation as an ideal dipole remains valid even for time-varying fields within the quasi-static approximation, neglecting spatial retardation effects over the particle volume. Under plane-wave illumination, where the incident electric field is $\mathbf{E}_{\text{inc}}(t) = \mathbf{E}_0 e^{-i\omega t}$, the fields induce an oscillating dipole moment:
$$
\mathbf{p}(t) = \varepsilon_0 \varepsilon_m \alpha(\omega) \mathbf{E}_0 e^{-i\omega t}.
$$
The radiation from this oscillating dipole leads to scattering of the incident plane wave by the sphere. Resonantly enhanced polarisability $\alpha(\omega)$ also increases the efficiency of light scattering and absorption by the nanoparticle. For particles much smaller than the wavelength, the cross-sections for scattering ($C_{\text{sca}}$) and absorption ($C_{\text{abs}}$) scale with particle radius $a$ as:
$$
\begin{aligned}
C_{\text{sca}} & \propto k_0^4 |\alpha|^2 \propto a^6, \\
C_{\text{abs}} & \propto k_0 \mathfrak{Im}\left[\alpha\right] \propto a^3,
\end{aligned}
$$
where $k_0 = \omega\sqrt{\varepsilon_m}/c$ is the wave number in the surrounding medium. Thus, absorption typically dominates over scattering for very small particles. The explicit expression for the extinction cross-section ($C_{\text{ext}} = C_{\text{abs}} + C_{\text{sca}}$) in the quasi-static limit for a sphere of volume $V = \frac{4}{3}\pi a^3$ is often given by the absorption cross-section, as it dominates for small particles, or by considering terms from $\alpha$:
$$
C_{\text{ext}} = k_0 \mathfrak{Im}\left[\alpha\right] + \frac{k_0^4}{6\pi}|\alpha|^2 = 9 \frac{\omega}{c} \varepsilon_m^{3/2} V \frac{\varepsilon_2(\omega)}{\left[\varepsilon_1(\omega) + 2\varepsilon_m\right]^2 + \varepsilon_2(\omega)^2} + \text{scattering term},
$$
where $\varepsilon(\omega) = \varepsilon_1(\omega) + i\varepsilon_2(\omega)$. Often, the absorption part is highlighted:
$$
C_{\text{abs}} = k_0 \mathfrak{Im}\left[\alpha\right] = 4\pi k_0 a^3 \mathfrak{Im}\left[\frac{\varepsilon(\omega) - \varepsilon_m}{\varepsilon(\omega) + 2 \varepsilon_m}\right] = 4\pi k_0 a^3 \frac{3\varepsilon_m \varepsilon_2(\omega)}{(\varepsilon_1(\omega)+2\varepsilon_m)^2 + \varepsilon_2(\omega)^2}.
$$

This is illustrated for a silver sphere:

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 23.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2023.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=88&rect=111,450,321,603| ]]

Despite assuming a spherical shape, this special case describes the basic physics of localised surface plasmon resonances well. For non-spherical particles, such as ellipsoids with semi-axes $a_x, a_y, a_z$, the depolarisation factors change, leading to different resonance conditions for electric fields aligned along different axes. For instance, spheroidal nanoparticles (two axes equal) exhibit two distinct plasmon resonances, corresponding to conduction electron oscillations along their major or minor axes. Oscillations along the longer axis typically exhibit significant red-shifts compared to a sphere of similar volume. A complete electrodynamic theory for the scattering and absorption of electromagnetic radiation by a sphere of arbitrary size relative to the wavelength is provided by _Mie Theory_.

---
## 5.2 Beyond the Quasi-Static Approximation and Plasmon Lifetime
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=90&selection=49,0,52,8| ]]

We now consider two regimes where the simple quasi-static approximation needs refinement:
1. Larger particles, where retardation effects across the particle volume become significant.
2. Very small particles (typically $a < 10$ nm), where particle dimensions become comparable to or smaller than intrinsic length scales of the electron gas, such as the electron mean free path.

**For larger particles**, the breakdown of the quasi-static approximation is primarily due to dynamic depolarisation and radiation damping. Retardation effects become important as the size parameter $x = k_0 a = 2\pi a \sqrt{\varepsilon_m} / \lambda_{vac}$ increases. Expanding the polarisability for the first Mie coefficient (dipole term) for a sphere of volume $V$ yields terms beyond the quasi-static result:
$$
\alpha_{\text{Sphere}} = \frac{4\pi a^3 (\varepsilon - \varepsilon_m)/(\varepsilon + 2\varepsilon_m)}{1 - \frac{(k_0 a)^2}{10} \frac{(\varepsilon-\varepsilon_m)(\varepsilon+2\varepsilon_m) - 10\varepsilon_m}{\varepsilon+2\varepsilon_m} - i \frac{(k_0 a)^3}{3} \frac{2\varepsilon_m^{3/2}(\varepsilon-\varepsilon_m)}{\varepsilon+2\varepsilon_m} + O((k_0a)^4)}.
$$
The terms quadratic in $x$ (or $k_0 a$) account for retardation effects and typically shift the plasmon resonance to lower energies (redshift). This redshift can be intuitively understood as the increasing phase variation of the field across the particle; the charges at different parts of the particle no longer oscillate perfectly in phase, effectively reducing the restoring force and lowering the resonance frequency. For noble metals, this redshift can also move the LSPR away from interband transition energies, potentially reducing damping from that channel.

The imaginary term in the denominator of more complete expressions for $\alpha$ represents **radiation damping**. This arises from the direct radiative decay of the coherently oscillating electron dipole into photons. Radiation damping becomes increasingly significant for larger particles and is a primary cause of broadening and weakening (reduced peak amplitude) of the dipole plasmon resonance as particle volume increases. Absorption within the particle is another decay pathway.

To summarise, the plasmon resonance beyond the strict quasi-static regime is damped by competing processes:
- **Non-radiative decay** due to absorption within the metal (Ohmic losses, creation of electron-hole pairs via intraband or interband excitations). This dominates for very small particles.
- **Radiative decay** into photons (scattering). This becomes more significant and can dominate for larger particles (typically when $a$ is a few tens of nanometres or more).

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 24.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2024.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=91&rect=108,520,329,618| ]]

The homogeneous linewidth $\Gamma$ of the plasmon resonance is related to the total dephasing rate of the coherent electron oscillation. This dephasing time $T_2$ is given by:
$$
\Gamma=\frac{2\hbar}{T_2}.
$$
The strength of a plasmon resonance can also be described by the quality factor $Q = \omega_{\text{res}} / \Gamma = E_{\text{res}} / \Gamma$ (using energy $E_{\text{res}}=\hbar\omega_{\text{res}}$).

Dephasing occurs due to both energy decay processes (lifetime $T_1$) and pure dephasing processes (elastic scattering events that alter electron momentum but not energy, characterised by $T_2^*$). The relationship is:
$$
\frac{1}{T_2}=\frac{1}{2T_1}+\frac{1}{T^*_2}.
$$
$T_1$ includes both radiative and non-radiative energy loss pathways. Generally, for plasmons in nanoparticles, pure dephasing $T_2^*$ can be significant. The overall dephasing time $T_2$ is typically on the order of 5 to 10 femtoseconds for silver and gold nanoparticles in the visible range.

**For very small particles** (for instance, $a < 10$ nm), an additional non-radiative damping mechanism, sometimes termed chemical interface damping or surface scattering, becomes important. As particle dimensions become comparable to or smaller than the bulk electron mean free path, electrons scatter more frequently from the particle surface. This increases the dephasing rate of the collective oscillation and leads to a broadening of the plasmon resonance, explaining the observed decrease in plasmon lifetime (and increase in $\Gamma$) for very small nanoparticles.

For nanoparticles smaller than about 1 nm, quantum mechanical effects (quantum confinement, discrete energy levels) become significant, and a purely classical treatment of the electron gas and its response becomes insufficient. The concept of a continuous dielectric function breaks down, and the notion of a plasmon as a purely classical coherent oscillation of a continuous electron gas is no longer fully appropriate.

---
## 5.3 Coupling Between Localised Plasmons
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=97&selection=164,0,166,35| ]]

The localised plasmon resonance of a single metallic nanoparticle can be tuned by changing its shape, size, and dielectric environment. When multiple plasmonic nanoparticles are brought into close proximity, their localised plasmon modes can interact electromagnetically, leading to additional shifts in resonance frequencies and modifications of the field distributions. For small particles (radius $a$) with interparticle spacing $d$, these interactions can often be treated as an ensemble of interacting dipoles, especially if $a \ll d$. We will consider these effects for _ordered_ arrays of metal nanoparticles.

Two main regimes of interaction based on the interparticle spacing $d$ relative to the wavelength of light $\lambda$ can be distinguished:

**Closely spaced particles ($d \ll \lambda$):** In this regime, **near-field interactions** dominate. These interactions are primarily electrostatic or magnetostatic in nature and typically exhibit a strong distance dependence, often scaling as $d^{-3}$ for dipole-dipole coupling. The particle array may be described as an array of point dipoles interacting via their non-radiative near fields. Radiative scattering from the array can be significantly modified (suppressed or enhanced depending on phasing) compared to isolated particles, and the electromagnetic fields can be highly localised in the gaps between particles ("hot spots").

We can intuitively understand why interparticle coupling leads to shifts in the spectral position of the plasmon resonance. Consider a linear chain of nanoparticles:

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 25.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2025.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=99&rect=116,464,312,620| ]]

Using the simple approximation of an array of interacting point dipoles, the direction of the resonance shifts for in-phase illumination (all dipoles oscillating with the same phase relative to the incident field) can be determined by considering the additional electric field experienced by each dipole due to the presence of its neighbours. This additional field modifies the restoring force acting on the oscillating electrons within each particle.
    - For incident light polarised transverse to the chain axis (upper part of figure), the dipoles are oriented side-by-side. The field from neighbouring dipoles tends to oppose the polarisation in a given particle, effectively increasing the restoring force and leading to a blue-shift of the collective plasmon resonance.
    - For incident light polarised longitudinally* along the chain axis (lower part of figure), the dipoles are oriented head-to-tail. The field from neighbouring dipoles tends to aid the polarisation in a given particle, effectively decreasing the restoring force and leading to a red-shift of the collective plasmon resonance.

The next figure shows the plasmon resonance peak for a chain of closely spaced gold nanoparticles as a function of the interparticle spacing, illustrating these shifts. The dotted lines would show the $d^{-3}$ dependence expected from a point-dipole near-field coupling model.

![Attachments/Plasmonics - Fundamentals and Applications 21.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2021.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=100&rect=227,489,363,601| ]]

**Larger particle separations** ($d \gtrsim \lambda$ or comparable to $\lambda$): In this regime, far-field radiative coupling becomes dominant. The interaction involves scattered fields from one particle influencing the others. This interaction typically has a distance dependence of $d^{-1}$ (for dipole fields) and can be phase-retarded. Far-field coupling strongly influences the plasmon lineshape, affecting not only the resonance frequency but also the spectral width (damping). The change in spectral width is due to the modification of the radiative damping rate of the ensemble compared to isolated particles. For periodic arrays (gratings of nanoparticles), collective resonances (surface lattice resonances) can emerge due to the coherent superposition of scattered fields, leading to very narrow linewidths when the individual particle resonance coincides with a Rayleigh anomaly (diffraction edge).

![Attachments/Plasmonics - Fundamentals and Applications 22.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2022.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=101&rect=44,134,196,247| ]]

---
## 5.4 Void Plasmons and Metallic Nanoshells
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=102&selection=10,0,12,37| ]]

Let us consider plasmon resonances in metallic structures containing dielectric inclusions (voids or cavities) of characteristic dimension $a \ll \lambda$. The simplest such structure is a spherical dielectric inclusion (void) of dielectric constant $\varepsilon_m$ embedded in a homogeneous metallic host described by the dielectric function $\varepsilon(\omega)$.

![Attachments/Plasmonics - Fundamentals and Applications 23.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2023.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=102&rect=146,87,298,170| ]]

Such a nanovoid can sustain an electromagnetic dipole resonance analogous to that in a metallic nanoparticle surrounded by a dielectric. The problem is mathematically equivalent to the nanoparticle case via a simple swap of $\varepsilon_m$ and $\varepsilon(\omega)$ in the polarisability formula, and an appropriate interpretation of the applied field and induced dipole. The effective polarisability describing the response of the void to an applied field $\mathbf{E}_{\text{applied}}$ (which would be uniform in the absence of the void) is:
$$
\alpha_{\text{void}} = 4 \pi a^3 \frac{\varepsilon_m - \varepsilon(\omega)}{\varepsilon_m + 2 \varepsilon(\omega)}.
$$
Note that the induced dipole moment inside the void is oriented antiparallel to the induced dipole moment of a metallic sphere of $\varepsilon(\omega)$ in $\varepsilon_m$ under the same external field if one considers the effective dipole representing the perturbation. The Fröhlich condition for resonance, found by minimising the denominator $|\varepsilon_m + 2\varepsilon(\omega)|$, becomes approximately:
$$
\mathfrak{Re}\left[\varepsilon(\omega)\right] = -\frac{1}{2} \varepsilon_m.
$$
This condition differs from that of a metallic nanoparticle in a dielectric medium ($\mathfrak{Re}\left[\varepsilon(\omega)\right] = -2\varepsilon_m$).

Metallic nanoshells, consisting of a dielectric core (for example silica, radius $r_1$) coated with a thin metallic shell (for example gold, outer radius $r_2$), offer more complex and tunable plasmon resonances. The interaction between the plasmon mode of the inner surface (void plasmon at the core/metal interface) and the outer surface (nanoparticle plasmon at the metal/surrounding medium interface) leads to hybridised plasmon modes. The resonance frequencies of these hybridised modes strongly depend on the ratio of the core radius to the shell thickness. This extra degree of freedom allows for significant tuning of the plasmon resonance, often into the near-infrared region of the spectrum, and can also lead to narrower plasmon linewidths compared to solid nanoparticles of similar overall size. These tunable properties make nanoshells promising for applications such as biomedical imaging, photothermal therapy, and refractive index sensing.

While the above examples are three-dimensional, essentially two-dimensional structures like holes or arrays of holes (nanovoids) in thin metallic films can also support localised plasmon modes, often related to Babinet's principle when compared to nanoparticle arrays.

---
## 5.5 Localised Plasmons and Gain Media
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=104&selection=21,0,23,33| ]]

Finally, let us briefly consider an emerging application area in plasmonics: the interaction of localised plasmon resonances with optical gain media. The primary motivations for combining plasmonic nanostructures with gain materials are twofold:
1.  The significant local field enhancement provided by metallic nanostructures upon resonant plasmon excitation can increase the interaction of light with the gain medium, potentially leading to a reduction in the pumping threshold required to achieve population inversion and lasing (as in "spasers" or plasmon lasers).
2.  The presence of optical gain in the surrounding medium can, in principle, compensate for the inherent Ohmic (absorption) losses in the metal, leading to sharper resonances or even net amplification of the localised plasmon mode.

In its simplest theoretical form, this problem can be analysed by considering a sub-wavelength metal nanosphere embedded in a homogeneous medium that exhibits optical gain. The quasi-static approach for the polarisability can be adapted. The presence of gain in the surrounding medium can be phenomenologically incorporated by describing the medium with a complex dielectric constant $\varepsilon_m(\omega)$, where an imaginary part $\mathfrak{Im}\left[\varepsilon_m(\omega)\right] < 0$ signifies gain (amplification) at frequency $\omega.$ Using such a complex $\varepsilon_m$ in the polarisability formula, it can be shown that the presence of sufficient gain can lead to a significant modification, and potentially a strengthening or narrowing, of the plasmon resonance, or even a pole in the polarisability indicative of self-oscillation if losses are fully compensated.

---