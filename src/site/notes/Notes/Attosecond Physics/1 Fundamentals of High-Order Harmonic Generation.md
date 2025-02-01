---
{"dg-publish":true,"permalink":"/notes/attosecond-physics/1-fundamentals-of-high-order-harmonic-generation/","hide":"true","updated":"2025-02-01T21:15:18.867+01:00"}
---

Jump back to [[Notes/Attosecond Physics/Attosecond Physics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.1 Simple Man's Model\|1.1 Simple Man's Model]]
- [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.2 Phase Matching and Propagation of HHG in the Gas Medium\|1.2 Phase Matching and Propagation of HHG in the Gas Medium]]
- [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.3 Dependence of HHG Spectra on Macroscopic Conditions\|1.3 Dependence of HHG Spectra on Macroscopic Conditions]]

---
# 1 Fundamentals of High-Order Harmonic Generation
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=212&selection=2,0,3,10|•]]

The fundamental principle of high-harmonic generation (**HHG**) is straightforward:

![Attachments/Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation/IMG-0201211518682.webp|700](/img/user/Attachments/Notes/Attosecond%20Physics/1%20Fundamentals%20of%20High-Order%20Harmonic%20Generation/IMG-0201211518682.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=213&rect=151,538,286,640|•]]

An intense laser beam is focused into a gas jet or gas cell, typically at pressures ranging from a few millibars to a few bar, with peak intensities on the order of $10^{14}$ W/cm$^2$. When this intensity is sufficiently high, HHG occurs along the beam propagation axis. A filter is used to block the co-propagating, intense infrared driving laser (as HHG is not very efficient). The recorded harmonic spectrum schematically resembles the following:

![Attachments/Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation/IMG-0201211518718.webp|700](/img/user/Attachments/Notes/Attosecond%20Physics/1%20Fundamentals%20of%20High-Order%20Harmonic%20Generation/IMG-0201211518718.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=213&rect=301,540,435,636|•]]

At low harmonics, the yield decreases rapidly. Beyond this, the spectrum forms a broad plateau, which extends to a cutoff energy approximately given by:

$$
E_{\text{cut}} \approx I_p + 3.17 U_p
$$

where $U_p = \frac{e^2 E_0^2}{4m_e\omega_0^2}$ is the ponderomotive energy, and $I_p$ is the ionisation potential of the target.

---
## 1.1 Simple Man's Model
[[Masters/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=580&selection=29,0,31,5|•]]

Surprisingly, HHG can be understood using a simple, semi-classical three-step model, where the only non-classical aspect is the tunneling ionisation:

![Attachments/Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation/IMG-0201211518748.webp|700](/img/user/Attachments/Notes/Attosecond%20Physics/1%20Fundamentals%20of%20High-Order%20Harmonic%20Generation/IMG-0201211518748.webp)[[Masters/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=581&rect=358,67,501,519|•]]

4. An intense laser field distorts the atomic potential, allowing an electron to tunnel ionise.
5. The freed electron is accelerated by the oscillating laser field, gaining kinetic energy.
6. As the field reverses direction, the electron may recombine with its parent ion, emitting a high-energy photon.

This model assumes a single active electron, allowing us to derive the equation of motion:

$$
\frac{d v}{d t}=-\frac{e E_0}{m_e} \cos(\omega_0 t).
$$

Assuming $\hbar\omega = I_p + E_k$, this model predicts two distinct classes of trajectories—long and short. These trajectories yield the same recombination energy but have different excursion times:

![Attachments/Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation/IMG-0201211518779.webp|700](/img/user/Attachments/Notes/Attosecond%20Physics/1%20Fundamentals%20of%20High-Order%20Harmonic%20Generation/IMG-0201211518779.webp)[[Masters/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=580&rect=147,48,480,410|•]]

The black and red curves represent long and short trajectories, respectively, while the lower figure illustrates the motion amplitude.

### 1.1.1 Odd-Harmonic Spectrum
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=218&selection=54,0,54,25|•]]

The discrete nature of the HHG spectrum arises from atomic symmetry. 

Consider the interaction of a single atom with $N+1$ cycles of the laser field, where $d_i(t)$ is the dipole response of the $i^{\text{th}}$ recollision event. Assuming all events are identical, we can write:

$$
d(t) = \sum_{k=-N / 2}^{N / 2} \left\{ d_1(t-k T) - d_1\left(t-(2 k-1) \frac{T}{2}\right) \right\}, \quad T = \frac{2 \pi}{\omega_0}.
$$

Taking the Fourier transform of the dipole acceleration gives:

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
P_{L 1}(\omega) \propto \lambda^{-4.6}, \quad P_{S 1}(\omega) \propto \lambda^{-10.4}.
$$

However, harmonics from long trajectories generally suffer from poor phase matching, making HHG wavelength scaling highly unfavorable ($\lambda^{-10}$ under typical conditions).

---
## 1.2 Phase Matching and Propagation of HHG in the Gas Medium
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=225&selection=14,0,14,59|•]]

Since HHG is a coherent nonlinear process, phase matching is essential for efficient harmonic emission. If phase matching is achieved, harmonic intensity grows quadratically with the number of atoms:

![Attachments/Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation/IMG-0201211518809.webp|700](/img/user/Attachments/Notes/Attosecond%20Physics/1%20Fundamentals%20of%20High-Order%20Harmonic%20Generation/IMG-0201211518809.webp)[[Masters/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=583&rect=379,78,504,381|•]]

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
L > 3 L_{\text{abs}}, \quad L_{\text{coh}} > 5 L_{\text{abs}}.
$$

where $L_{\text{coh}} = \pi / \Delta k_q$ is the coherence length. While increasing the gas medium length $L$ might seem to enhance yield, XUV and soft X-ray harmonics are reabsorbed, limiting the effective interaction length.

---
## 1.3 Dependence of HHG Spectra on Macroscopic Conditions
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=235&selection=4,0,4,55|•]]

High-harmonic generation has become a valuable tool for extracting structural information about atoms and molecules. It is often assumed that experimental HHG spectra are perfectly phase-matched, allowing the modulus square of the single-photon atomic transition dipole to be retrieved from experimental data. After propagation through the gas medium, the HHG spectra can be expressed as:

$$
S_h(\omega) \propto \omega^4\left|W^{\prime}(\omega)\right|^2 |d(\omega)|^2,
$$

where $W^{\prime}(\omega)$ is the **macroscopic wave packet** (**MWP**), distinguishing it from the single-atom response, and $d(\omega)$ is the photo-recombination transition dipole moment of a single atom. This assumption has been tested, for example, by evaluating the MWP in a hydrogen-like system.

![Attachments/Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation/IMG-0201211518840.webp|700](/img/user/Attachments/Notes/Attosecond%20Physics/1%20Fundamentals%20of%20High-Order%20Harmonic%20Generation/IMG-0201211518840.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=236&rect=122,367,484,640|•]]

The MWP is primarily determined by the laser parameters and focusing conditions, and it is generally considered independent of the target gas. This is evident in (a) and (b), where reducing the peak intensity does not significantly alter the agreement. Furthermore, even in cases with poor phase matching, as seen in (c), the agreement holds. Panels (d) and (e) show similar results for Xe and Ne targets, reinforcing that if the equation is valid and the MWP depends only on the laser, the modulus square of the atomic transition dipole can be extracted.

However, if the fundamental laser pulse undergoes severe distortion during propagation, this method is expected to fail. Significant distortions in the laser field depend on the properties of the gas medium, meaning that the assumption of an independent MWP may no longer hold under such conditions.

---