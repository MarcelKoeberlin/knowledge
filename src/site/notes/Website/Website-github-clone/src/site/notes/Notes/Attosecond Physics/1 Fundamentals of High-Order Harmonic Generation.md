---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/attosecond-physics/1-fundamentals-of-high-order-harmonic-generation/","updated":"2025-07-03T20:20:02.048+02:00"}
---


Jump back to ==[[Notes/Attosecond Physics/Attosecond Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.1 Simple Man's Model\|1.1 Simple Man's Model]]
[[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.2 Phase Matching and Propagation of HHG in the Gas Medium\|1.2 Phase Matching and Propagation of HHG in the Gas Medium]]
[[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.3 Dependence of HHG Spectra on Macroscopic Conditions\|1.3 Dependence of HHG Spectra on Macroscopic Conditions]]

---
# 1 Fundamentals of High-Order Harmonic Generation
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=212&selection=2,0,3,10| ]]

Harmonic generation is an important nonlinear process in optics. If incoming electromagnetic radiation oscillates at frequency $\omega$, its second harmonic has the frequency $2\omega$. Generalising, the $n$-th harmonic will then oscillate at $n\omega$, which is $n$ times the frequency of the _fundamental_ signal $\omega$. One simplified way to think about this is that $n$ photons, each of energy $\hbar\omega$, are absorbed in some nonlinear material, leading to the generation of a single photon of energy $n\hbar\omega$. This chapter focuses on high-order harmonic generation (HHG), which usually considers harmonics of order $n \gtrsim 20$.

The fundamental principle of HHG is straightforward: an intense laser beam is focused into a gas jet or a gas cell, typically containing a noble gas at pressures ranging from a few millibars to a few bar. The peak intensities of the laser in the interaction region are on the order of $10^{14} \, \text{W/cm}^2$. This intensity is sufficiently high for HHG to occur, generating coherent radiation collinearly with the driving laser beam. A filter, often a thin metallic foil, is typically used after the generation medium to block the co-propagating, intense infrared driving laser. This is necessary to protect sensitive detectors (such as CCD cameras or XUV spectrometers) from the strong fundamental radiation, as HHG is a very inefficient process, with typical conversion efficiencies around $10^{-7}$ or lower. The following figure shows a schematic setup:

![Attachments/Attosecond and Strong-Field Physics Principles and Applications.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=213&rect=151,538,288,635| ]]

The recorded harmonic spectrum schematically resembles the following:

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 1.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%201.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=213&rect=302,543,431,635| ]]

At low harmonic orders, the yield (intensity) of the harmonics decreases rapidly with increasing order. Beyond this initial drop, the spectrum forms a broad plateau where the intensity of successive harmonics remains relatively constant. This plateau extends to a characteristic cutoff energy, approximately given by:
$$
E_{\text{cut}} \approx I_p + 3.17 U_p,
$$
where $U_p = \frac{e^2 E_0^2}{4m_e\omega_0^2}$ is the ponderomotive energy (the average kinetic energy of a free electron oscillating in the laser field $E_0\cos(\omega_0 t)$), $e$ is the elementary charge, $m_e$ is the electron mass, and $I_p$ is the ionisation potential of the target gas atom.

---
## 1.1 Simple Man's Model
[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=580&selection=29,0,31,5| ]]

Surprisingly, the complex process of HHG can be largely understood using a simple, semi-classical three-step model, often called the "simple man's model" or "three-step model." The only explicitly non-classical aspect in this description is the initial ionisation step, which often involves quantum tunnelling:

![Attachments/Lecture.webp|700](/img/user/Attachments/Lecture.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=581&rect=359,67,500,517| ]]

1.  **Ionisation:** An intense laser field significantly distorts the atomic Coulomb potential, lowering the potential barrier such that an outer-shell electron can escape the atom via tunnel-ionisation (or above-barrier ionisation if the field is strong enough). This step typically occurs near the peaks of the laser field.
2.  **Acceleration:** The freed electron is then accelerated by the oscillating electric field of the laser, moving away from its parent ion and gaining kinetic energy. Its motion is treated classically.
3.  **Recombination:** As the laser field reverses direction in the subsequent half-cycle, the electron can be driven back towards its parent ion. If it recombines with the ion, the excess energy (its kinetic energy gained from the field plus the ionisation potential $I_p$) is released as a high-energy photon.

This model usually assumes a single active electron and neglects the Coulomb force from the parent ion on the electron once it has tunnelled out (strong-field approximation). The classical equation of motion for the electron in the laser field $E(t) = E_0 \cos(\omega_0 t)$ after ionisation (at time $t_i$ with initial velocity $v(t_i) \approx 0$) is:
$$
\frac{dv(t)}{dt}=-\frac{eE_0}{m_e} \cos(\omega_0 t).
$$
Solving for $v(t)$ and then position $x(t)$, one can find the kinetic energy of the electron upon returning to the ion at time $t_r$. The maximum kinetic energy upon return corresponds to the $3.17 U_p$ term in the cutoff formula. The emitted photon energy is $\hbar\omega_{\text{harmonic}} = I_p + E_k(t_r)$. This model predicts that for a given harmonic energy, there are generally two main classes of electron trajectories—referred to as "long" and "short" trajectories—that yield the same recombination energy but differ in the electron's excursion time in the continuum and the phase of the emitted harmonic:

![Attachments/Lecture 1.webp|700](/img/user/Attachments/Lecture%201.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=580&rect=142,44,486,414| ]]

The black and red curves represent these long and short trajectories, respectively. The lower figure illustrates the electron's displacement or velocity amplitude as a function of ionisation and recombination times.

### 1.1.1 Odd-Harmonic Spectrum
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=218&selection=54,0,54,25| ]]

The discrete nature of the HHG spectrum, specifically the appearance of only odd harmonics when driven by a laser field with inversion symmetry (like a single-colour sinusoidal field) and generated in a medium with inversion symmetry (like a noble gas atom), arises from the overall symmetry of the process.

Consider the interaction of a single atom with a laser pulse consisting of many optical cycles. The time-dependent dipole moment $d(t)$ induced by the laser field is responsible for the emission. Due to the symmetry of the interaction potential ($V(\mathbf{r}) = V(-\mathbf{r})$ for an atom) and the driving field $E(t+T/2) = -E(t)$ (where $T=2\pi/\omega_0$ is the laser period), the dipole moment induced in one half-cycle is mirrored with an opposite sign in the next half-cycle: $d(t+T/2) \approx -d(t)$.
Let $d_1(t')$ represent the dipole moment evolution following an ionisation event in one specific half-cycle, where $t'$ is time relative to the start of that event. The total dipole moment can be thought of as a sum of contributions from each half-cycle. If we consider a train of $N+1$ laser cycles, where $d_i(t)$ is the dipole response from the $i$-th re-collision event, and assuming all events are similar but shifted in time and possibly sign, one can write the total dipole moment over many cycles.
A more direct way to see the odd harmonics is to note that if $d(t+T/2) = -d(t)$, then the Fourier series of $d(t)$ (which is periodic with period $T$) will only contain odd multiples of the fundamental frequency $\omega_0$.
The text's formulation:
$$
d(t) = \sum_{k=-N / 2}^{N / 2} \left\{ d_1(t-k T) - d_1\left(t-(k-1/2)T\right) \right\},
$$
represents $d_1(t)$ as the dipole response initiated in the first half of a cycle, and $-d_1(t-T/2)$ as the response initiated in the second half-cycle, summed over $N$ full cycles. Taking the Fourier transform of the dipole acceleration $\ddot{d}(t)$ (since radiated power is proportional to $|\ddot{d}(\omega)|^2$) gives:
$$
\tilde{\ddot{d}}(\omega) \approx -\omega^2 \tilde{d}_1(\omega)\left[1 - e^{-i \omega T / 2}\right] \sum_{k=-N / 2}^{N / 2} e^{-i k \omega T}.
$$
(Assuming FT of $f(t-a)$ is $F(\omega)e^{-i\omega a}$).
For $N \to \infty$, the sum $\sum_{k=-\infty}^{\infty} e^{-i k \omega T}$ becomes proportional to a train of Dirac delta functions: $\frac{2\pi}{T} \sum_{m=-\infty}^{\infty} \delta(\omega - m \frac{2\pi}{T}) = \omega_0 \sum_{m=-\infty}^{\infty} \delta(\omega - m \omega_0)$.
The prefactor $[1 - e^{-i \omega T / 2}]$ is zero for even harmonics, since 
$$
\omega = 2p\omega_0 \implies e^{-i2p\omega_0 T/2} = e^{-i2p\pi}=1,
$$
and non-zero ($1-(-1)=2$) for odd harmonics
$$
\omega = (2p+1)\omega_0 \implies e^{-i(2p+1)\omega_0 T/2} = e^{-i(2p+1)\pi}=-1.
$$
Thus, HHG driven by a monochromatic laser field in an centrosymmetric medium produces predominantly odd harmonics of the fundamental frequency.

### 1.1.2 Wavelength Scaling of HHG
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=221&selection=8,0,8,25| ]]

The HHG cutoff energy $E_{\text{cut}} \approx I_p + 3.17 U_p$ scales with the ponderomotive energy $U_p$. Since $U_p \sim E_0^2/\omega_0^2 \sim I_L \lambda_0^2$ (where $I_L$ is the laser intensity and $\lambda_0$ its wavelength), using longer wavelength driving lasers can significantly extend the harmonic spectrum to higher photon energies. Mid-infrared lasers, for instance, can push the harmonic spectrum to hundreds of electronvolts (soft X-rays, potentially covering the "water window" between carbon and oxygen K-edges) or even approach the kiloelectronvolt regime.

The single-atom yield for a specific harmonic photon energy, however, also depends on the driving wavelength. For long ($L_1$) and short ($S_1$) electron quantum trajectories contributing to a given harmonic, theoretical models often predict scaling laws for the harmonic power $P(\omega)$ such as:
$$
P_{L1}(\omega) \sim \lambda_0^{-x} \quad\text{and} \quad P_{S1}(\omega) \sim \lambda_0^{-y},
$$
where typical theoretical values for $x$ and $y$ are around $5-6$ or higher. The exact scaling can be complex and depends on the details of the model and conditions.
However, harmonics from long trajectories often suffer from poorer phase-matching conditions at the macroscopic level. This can make the overall HHG yield scale very unfavourably with increasing wavelength (for instance, as $\lambda_0^{-5}$ to $\lambda_0^{-6}$ or worse under typical experimental conditions focusing on total yield integrated over the plateau).

---
## 1.2 Phase Matching and Propagation of HHG in the Gas Medium
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=225&selection=14,0,14,59| ]]

Since HHG is a coherent nonlinear optical process, achieving constructive interference of the harmonic fields generated by different atoms throughout the interaction volume is crucial for efficient emission. This is known as phase matching. If phase matching is achieved (i.e., the generated harmonic fields add up in phase along the propagation direction), the harmonic intensity can grow quadratically with the number of coherently contributing atoms, or with the length of the interaction medium $L$ (for $L < L_{\text{abs}}, L_{\text{coh}}$): $I_q \sim N_{\text{atom}}^2 \sim L^2$.

![Attachments/Lecture 2.webp|700](/img/user/Attachments/Lecture%202.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=583&rect=377,76,502,367| ]]

The generated harmonic electric field $E_q(r, z, t)$ and the nonlinear polarisation $P_q(r, z, t)$ at the harmonic frequency $\omega_q = q\omega_0$ can be expressed as:
$$
E_q(r, z, t) = \mathfrak{Re}\left[A_q(r, z) e^{i(k_q z-\omega_q t)}\right]
$$
$$
P_q(r, z, t) = \mathfrak{Re}\left[p_q(r, z) e^{i(k'_q z-\omega_q t)}\right]
$$
where $A_q$ and $p_q$ are complex envelopes. The wavevector $k_q = n(\omega_q)\omega_q/c$ describes the propagation of the free harmonic wave, while $k'_q \approx q k_0$ (where $k_0$ is the wavevector of the fundamental laser) describes the phase of the $q$-th order nonlinear polarisation driving the harmonic emission. The phase mismatch is $\Delta k_q = k'_q - k_q = q k_0 - k_q$.
For a focused Gaussian driving beam and harmonic generation over an effective length $L$ of the medium, the generated harmonic power often includes a phase-matching factor proportional to:
$$
\left|J_q(\Delta k_q, z_0, z)\right|^2 \sim L_{\text{eff}}^2 \operatorname{sinc}^2\left(\frac{\Delta k_q L_{\text{eff}}}{2}\right),
$$
where $L_{\text{eff}}$ is an effective interaction length (related to medium length $L$, absorption length $L_{\text{abs}}$, or coherence length $L_{\text{coh}}$).
Optimal harmonic yield occurs when $\Delta k_q \approx 0$. The coherence length is defined as $L_{\text{coh}} = \pi/|\Delta k_q|$. For efficient generation, one typically desires $L_{\text{eff}} \sim L_{\text{coh}}$. Some empirical conditions for good yield are $L > 3 L_{\text{abs}}$ (medium length should be several absorption lengths if coherence length is long enough) and $L_{\text{coh}} > 5 L_{\text{abs}}$ (coherence length should exceed absorption length).
While increasing the gas medium length $L$ might seem to enhance yield, the generated XUV and soft X-ray harmonics are strongly reabsorbed by the gas medium, limiting the effective interaction length $L_{\text{eff}}$ to roughly $L_{\text{abs}}$.

---
## 1.3 Dependence of HHG Spectra on Macroscopic Conditions
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=235&selection=4,0,4,55| ]]

High-order harmonic generation has become a valuable tool not only as a light source but also for extracting structural and dynamical information about the generating atoms and molecules (HHG spectroscopy). It is often assumed in such analyses that the experimental HHG spectra are generated under conditions close to perfect phase matching for all relevant harmonics. This would allow the modulus square of the single-atom (photo-)recombination transition dipole moment $|d(\omega)|^2$ to be retrieved from the measured harmonic spectral intensity $S_h(\omega)$. After propagation through the gas medium, the HHG spectral intensity can be expressed as:
$$
S_h(\omega) \sim \omega^4 \cdot \left|W^{\prime}(\omega)\right|^2 \cdot |d(\omega)|^2,
$$
where $W^{\prime}(\omega)$ is the "macroscopic wave packet" (MWP) factor, which accounts for propagation and phase-matching effects, distinguishing the macroscopic yield from the single-atom response $d(\omega)$. The $\omega^4$ factor arises from the relationship between dipole acceleration and radiated power. This factorisation assumes that $W'(\omega)$ can be determined or cancels out in relative measurements.

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 2.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%202.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=236&rect=124,365,487,638| ]]

The MWP is primarily determined by the driving laser parameters (wavelength, pulse duration, intensity, chirp) and focusing conditions (beam size, confocal parameter, focus position relative to gas jet). It is often considered to be largely independent of the target gas type under certain conditions. The figure panels (a) and (b) show that reducing the peak laser intensity does not significantly alter the agreement between the extracted $|d(\omega)|^2$ and theoretical calculations if the MWP is correctly accounted for or cancels. Furthermore, even in cases with imperfect phase matching, as perhaps illustrated in (c), the structural information in $|d(\omega)|^2$ might still be retrievable. Panels (d) and (e) showing similar results for different target gases like Xe and Ne would reinforce the idea that if the factorisation is valid and the MWP mainly depends on the laser and geometry, then the species-specific atomic transition dipole information can be extracted.

However, this simplifying assumption can break down. If the fundamental laser pulse undergoes severe distortion (such as self-phase modulation, self-focusing, or plasma defocusing) during its propagation through the gas medium, the MWP method is expected to fail. Significant distortions in the laser field inherently depend on the properties of the gas medium (its dispersion, non-linearity, ionisation rate), meaning that the assumption of an independent, gas-species-agnostic MWP may no longer hold under such conditions.

---