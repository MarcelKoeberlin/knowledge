---
{"dg-publish":true,"permalink":"/notes/attosecond-physics/1-fundamentals-of-high-order-harmonic-generation/","hide":"true","updated":"2025-05-26T11:11:02.000+02:00"}
---

Jump back to ==[[Notes/Attosecond Physics/Attosecond Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.1 Simple Man's Model\|1.1 Simple Man's Model]]
- [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.2 Phase Matching and Propagation of HHG in the Gas Medium\|1.2 Phase Matching and Propagation of HHG in the Gas Medium]]
- [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.3 Dependence of HHG Spectra on Macroscopic Conditions\|1.3 Dependence of HHG Spectra on Macroscopic Conditions]]

---
# 1 Fundamentals of High-Order Harmonic Generation
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=212&selection=2,0,3,10|•]]

Harmonic generation is an important [[Notes/Crystal Optics in Intense Light Fields/5 Nonlinear Optics#5 Nonlinear Optics\|nonlinear process]] in optics. The second harmonic of some incoming electromagnetic radiation oscillating at frequency $\omega$ has the frequency $2\omega.$ Generalised, the _n-th_ harmonic will then oscillate at $n\omega$ the frequency of the _fundamental_ signal $\omega.$ One simplified way to think about this is that $n$ photons of energy $\omega$ are absorbed in some nonlinear material, generating a single photon of energy $n\omega.$ This is the field of high-harmonic generation, that usually considers harmonics higher than $\sim 20.$ 

The fundamental principle of high-harmonic generation (HHG) is straightforward: An intense laser beam is focused into a gas jet or gas cell, typically at pressures ranging from a few millibars to a few bar, with peak intensities on the order of $10^{14}$ W/cm$^2$. This intensity is then sufficiently high for HHG to occur along the beam propagation axis. A filter is used to block the co-propagating, intense infrared driving laser. This is needed to protect the CCD camera from the strong IR radiation, as HHG is very inefficient ($10^{-7}$ conversion rate). The following figure shows the schematic setup:

![Attachments/Attosecond and Strong-Field Physics Principles and Applications.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=213&rect=151,538,288,635|•]]

The recorded harmonic spectrum schematically resembles the following:

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 1.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%201.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=213&rect=302,543,431,635|•]]

At low harmonics, the yield decreases rapidly. Beyond this, the spectrum forms a broad plateau, extending to a cutoff energy approximately 

$$
E_{\text{cut}} \approx I_p + 3.17 U_p,
$$

where $U_p = \frac{e^2 E_0^2}{4m_e\omega_0^2}$ is the ponderomotive energy, and $I_p$ is the ionisation potential of the target.

---
## 1.1 Simple Man's Model
[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=580&selection=29,0,31,5|•]]

Surprisingly, HHG can be understood using a simple, semi-classical three-step model, where the only non-classical aspect is the tunnelling ionisation:

![Attachments/Lecture.webp|700](/img/user/Attachments/Lecture.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=581&rect=359,67,500,517|•]]

1. An intense laser field distorts the atomic potential, allowing an electron to tunnel ionise.
2. The freed electron is accelerated by the oscillating laser field, gaining kinetic energy.
3. As the field reverses direction, the electron may recombine with its parent ion, emitting a high-energy photon.

This model assumes a single active electron, allowing us to derive the equation of motion:

$$
\frac{d v}{d t}=-\frac{e E_0}{m_e} \cos(\omega_0 t).
$$

Assuming $\hbar\omega = I_p + E_k$, this model predicts two distinct classes of trajectories—long and short. These trajectories yield the same recombination energy but have different excursion times:

![Attachments/Lecture 1.webp|700](/img/user/Attachments/Lecture%201.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=580&rect=142,44,486,414|•]]

The black and red curves represent long and short trajectories, respectively, while the lower figure illustrates the motion amplitude.

### 1.1.1 Odd-Harmonic Spectrum
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=218&selection=54,0,54,25|•]]

The discrete nature of the HHG spectrum arises from atomic symmetry. 

Consider the interaction of a single atom with $N+1$ cycles of the laser field, where $d_i(t)$ is the dipole response of the $i^{\text{th}}$ re-collision event. Assuming all events are identical, we can write:

$$
d(t) = \sum_{k=-N / 2}^{N / 2} \left\{ d_1(t-k T) - d_1\left(t-(2 k-1) \frac{T}{2}\right) \right\},  
$$
where $T = \frac{2 \pi}{\omega_0}.$ Taking the Fourier transform of the dipole acceleration gives:

$$
\tilde{d}(\omega) = \tilde{d}_1(\omega)\omega^2\left[1 - e^{-i \omega T / 2}\right] \sum_{k=-N / 2}^{N / 2} e^{i k \omega T}.
$$

For $N \to \infty$, the sum becomes a series of Dirac deltas, and the prefactor removes even harmonics:

$$
\tilde{d}(\omega) \propto \tilde{d}_1(\omega) \omega^2 \left[1 - e^{-i \omega T / 2}\right] \sum_{k=-\infty}^{\infty} \delta(\omega - k \omega_0).
$$

Thus, HHG driven by a monochromatic laser field produces only odd harmonics.

### 1.1.2 Wavelength Scaling of HHG
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=221&selection=8,0,8,25|•]]

The HHG cutoff energy scales with $U_p$, which is proportional to $\lambda^2$. Using mid-infrared lasers extends the harmonic spectrum to hundreds of electron volts, potentially covering the water window or reaching the kiloelectron-volt regime.

For long ($L_1$) and short ($S_1$) electron trajectories, HHG follows the scaling laws:

$$
P_{L 1}(\omega) \propto \lambda^{-4.6}\quad\text{and} \quad P_{S 1}(\omega) \propto \lambda^{-10.4}.
$$

However, harmonics from long trajectories generally suffer from poor phase matching, making HHG wavelength scaling highly unfavorable ($\lambda^{-10}$ under typical conditions).

---
## 1.2 Phase Matching and Propagation of HHG in the Gas Medium
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=225&selection=14,0,14,59|•]]

Since HHG is a coherent nonlinear process, phase matching is essential for efficient harmonic emission. If phase matching is achieved, harmonic intensity grows quadratically with the number of atoms:

![Attachments/Lecture 2.webp|700](/img/user/Attachments/Lecture%202.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=583&rect=377,76,502,367|•]]

The harmonic field $E_q(r, z, t)$ and polarisation $P_q(r, z, t)$ can be expressed as:

$$
E_q(r, z, t) = A_q(r, z) e^{i\left(k_q z-\omega_q t\right)} + c.c.
$$

$$
P_q(r, z, t) = p_q(r, z) e^{i\left(k_q^{\prime} z-\omega_q t\right)} + c.c.
$$

The Gaussian field is proportional to:

$$
|J_q(\Delta k_q, z_0, z)|^2 = L^2 \operatorname{sinc}^2\left(\frac{\Delta k_q L}{2}\right).
$$

Optimal harmonic yield occurs when:

$$
L > 3 L_{\text{abs}}\quad\text{and} \quad L_{\text{coh}} > 5 L_{\text{abs}}.
$$

where $L_{\text{coh}} = \pi / \Delta k_q$ is the coherence length. While increasing the gas medium length $L$ might seem to enhance yield, XUV and soft X-ray harmonics are reabsorbed, limiting the effective interaction length.

---
## 1.3 Dependence of HHG Spectra on Macroscopic Conditions
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=235&selection=4,0,4,55|•]]

High-harmonic generation has become a valuable tool for extracting structural information about atoms and molecules. It is often assumed that experimental HHG spectra are perfectly phase-matched, allowing the modulus square of the single-photon atomic transition dipole to be retrieved from experimental data. After propagation through the gas medium, the HHG spectra can be expressed as:

$$
S_h(\omega) \propto \omega^4\cdot\left|W^{\prime}(\omega)\right|^2 \cdot|d(\omega)|^2,
$$

where $W^{\prime}(\omega)$ is the macroscopic wave packet (MWP), distinguishing it from the single-atom response, and $d(\omega)$ is the photo-recombination transition dipole moment of a single atom. This assumption has been tested, for example, by evaluating the MWP in a hydrogen-like system.

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 2.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%202.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=236&rect=124,365,487,638|•]]

The MWP is primarily determined by the laser parameters and focusing conditions, and it is generally considered independent of the target gas. This is evident in (a) and (b), where reducing the peak intensity does not significantly alter the agreement. Furthermore, even in cases with poor phase matching, as seen in (c), the agreement holds. Panels (d) and (e) show similar results for Xe and Ne targets, reinforcing that if the equation is valid and the MWP depends only on the laser, the modulus square of the atomic transition dipole can be extracted.

However, if the fundamental laser pulse undergoes severe distortion during propagation, this method is expected to fail. Significant distortions in the laser field depend on the properties of the gas medium, meaning that the assumption of an independent MWP may no longer hold under such conditions.

---