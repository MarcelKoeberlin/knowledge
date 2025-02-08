---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/8-waveguides-in-qc-ls/","hide":"true","updated":"2025-02-07T10:57:49.000+01:00"}
---

Jump back to ==[[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/8 Waveguides in QCLs#8.1 Dielectric Slab Waveguide\|8.1 Dielectric Slab Waveguide]]
- [[Notes/Intersubband Optoelectronics/8 Waveguides in QCLs#8.2 Interface Plasmons\|8.2 Interface Plasmons]]
- [[Notes/Intersubband Optoelectronics/8 Waveguides in QCLs#8.3 THz Waveguides: Surface Plasmons\|8.3 THz Waveguides: Surface Plasmons]]
- [[Notes/Intersubband Optoelectronics/8 Waveguides in QCLs#8.4 Double-Metal Waveguide\|8.4 Double-Metal Waveguide]]
- [[Notes/Intersubband Optoelectronics/8 Waveguides in QCLs#8.5 Summary\|8.5 Summary]]

---
# 8 Waveguides in QCLs

Quantum Cascade Lasers (QCLs) require waveguides to achieve optical gain, as the short upper state lifetime necessitates large power dissipation. 

Waveguides in QCLs:
- Dielectric confinement : Allows loss-free guiding.
- Metallic confinement : Enables sub-wavelength confinement but introduces losses.

In QCLs:
- Vertical confinement is provided by the epitaxial layers.
- Lateral confinement is achieved through the ridge structure.

The complex refractive index is:

$$
\tilde{n} = n + i k = \sqrt{\varepsilon},
$$

where $k$ is the extinction coefficient, related to attenuation:

$$
\alpha = \frac{1}{I} \frac{dI}{dz} = \frac{4\pi k}{\lambda}.
$$

This follows Beer-Lambert's law .

---
## 8.1 Dielectric Slab Waveguide

In dielectric slab waveguides, the layers satisfy $n_1 > n_2, n_3$, with $d$ (layer thickness) of the order of the wavelength:

>[!info] Image

Key properties:
- Polarization directions : Transverse Electric (TE) and Transverse Magnetic (TM). TE modes are generally more confined than TM modes.
- Symmetric waveguides : If $n_2 = n_3$, the effective refractive index is:

  $$
  n_{\text{eff}} = \beta \cdot \frac{c}{\omega},
  $$

  where $\beta$ is the propagation constant. For confined modes, $n_1 > n_{\text{eff}} > n_2$.

In QCLs:
- TM polarization is preferred due to the intersubband selection rule, as the electric field must have a component along the growth axis (quantum well plane).
- The lasing condition is:

  $$
  \Gamma \cdot g = \alpha_{\text{tot}} = \alpha_w + \alpha_m,
  $$

  where:
  - $\alpha_w$: Waveguide losses.
  - $\alpha_m$: Mirror losses, defined as:

    $$
    \alpha_m = -\frac{1}{2L} \ln(R_1 R_2).
    $$

Waveguide losses arise primarily from:
1. Free-carrier absorption.
2. Scattering due to imperfections and roughness.

---
## 8.2 Interface Plasmons

I highly recommend reading my notes on [[Notes/Plasmonics/Plasmonics\|Plasmonics]] instead, or for a more theoretical, clean introduction, the notes from [[Notes/Solid-State Theory/Solid-State Theory#3.2.3 Collective Excitation\|Solid-State Theory]] on collective excitations.

Interface plasmons arise due to the interaction of light with free electrons in a material. Using the classical electron model:

$$
m \ddot{x} + 2m \gamma \dot{x} + m \omega_0^2 x = -q E_0(t),
$$

the plasma frequency is:

$$
\omega_p^2 = \frac{N q^2}{\epsilon_0 m^*},
$$

where $N$ is the electron density. For metals, $\omega_p$ lies in the UV, but for semiconductors (lower $N$), $\omega_p$ lies in the IR.

Semiconductors behave as "low-density metals" below $\omega_p$, where they reflect light, and transmit above $\omega_p$.

>[!info] Image

Key considerations:
- Compared to dielectric waveguides, single-plasmon waveguides have higher overlap factors but higher optical losses.
- Overdoping increases free-carrier losses, reducing efficiency.

---
## 8.3 THz Waveguides: Surface Plasmons

For long wavelengths, heavily doped semiconductors behave like low-density metals, but they cannot replace metals due to high losses. Thick dielectric cladding layers are impractical for THz waveguides.

Surface plasmons require:

$$
\varepsilon_{\text{metal}} < 0, \quad \varepsilon_{\text{dielectric}} > 0,
$$

to satisfy boundary conditions:

$$
E_x = -\frac{i}{\omega \varepsilon} \frac{\partial H_y}{\partial z}, \quad H_y \text{ is continuous at the interface}.
$$

>[!info] Image

At the metal-dielectric interface:
- Electric fields are orthogonal to the metal.
- The penetration depth into the metal ($\delta_{\text{metal}}$) is much smaller than into the dielectric ($\delta_{\text{dielectric}}$).
- Losses scale as $\propto \frac{1}{\lambda}$.

---
## 8.4 Double-Metal Waveguide

In a double-metal waveguide , the active region is sandwiched between two metallic layers. This configuration:
- Achieves an overlap factor of $\Gamma \approx 1$.
- Introduces higher losses ($\alpha$), but the figure of merit $\frac{\Gamma}{\alpha}$ improves.

>[!info] Image

Advantages:
- Losses decrease with increasing wavelength, as metals behave more like perfect conductors.
- Suitable for long-wavelength operation.

Challenges:
- Impedance mismatch at the laser facet increases far-field divergence.
- Solutions include:
  - Horn antennas.
  - Planarization to reduce mismatch.

---
## 8.5 Summary

QCL waveguides enable efficient optical confinement and gain:
1. Dielectric waveguides :
   - Preferred for low-loss guiding.
   - TM polarization is essential for intersubband transitions in QCLs.
2. Plasmonic waveguides :
   - Allow sub-wavelength confinement but at the cost of higher losses.
   - Heavily doped semiconductors mimic metals but are limited by free-carrier losses.
3. Double-metal waveguides :
   - Offer high overlap factors and are ideal for THz applications, though they suffer from higher optical losses.

Waveguide designs must balance confinement, losses, and impedance matching to optimize QCL performance.

---