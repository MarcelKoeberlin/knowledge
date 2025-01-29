---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/9-mode-control/","hide":"true","updated":"2025-01-29T20:55:13.801+01:00"}
---

Jump back to [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.1 Single Mode: Distributed Feedback (DFB) Cavity\|9.1 Single Mode: Distributed Feedback (DFB) Cavity]]
- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.2 Fabrication Geometries\|9.2 Fabrication Geometries]]
- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.3 THz Mode Control\|9.3 THz Mode Control]]
- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.4 Third-Order Gratings\|9.4 Third-Order Gratings]]
- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.5 Microcavities and Lasers\|9.5 Microcavities and Lasers]]
- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.6 Metamaterials\|9.6 Metamaterials]]
- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.7 Sub-Wavelength Laser Oscillator\|9.7 Sub-Wavelength Laser Oscillator]]
- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.8 External Cavity\|9.8 External Cavity]]
- [[Notes/Intersubband Optoelectronics/9 Mode Control#9.9 Summary\|9.9 Summary]]

---
# 9 Mode Control

In a Fabry-Perot (FP) cavity , stationary modes satisfy the condition that they close on themselves after one round trip. The mirror loss is:

$$
\alpha_m = \frac{1}{2L} \ln(R_1 R_2),
$$

where $R_1 = |r_n|^2$. The mode spacing is given by:

$$
\Delta \lambda = \frac{\lambda^2}{2L n_g},
$$

where $n_g$ is the group index. Modes are visible below threshold, and mode competition ensures that the mode closest to the gain maximum dominates. The transmission of an FP cavity diverges when the gain equals the loss.

For a typical FP cavity, the mode spacing is much narrower than the gain bandwidth, making the lasing mode position unpredictable.

---
## 9.1 Single Mode: Distributed Feedback (DFB) Cavity

In DFB cavities, periodic modulation of the waveguide's refractive index creates a Bragg grating. The Bragg condition is:

$$
n \lambda = 2d \sin\theta \quad \text{or} \quad \lambda_B = \frac{2n_{\text{eff}}\Lambda}{N},
$$

where $\Lambda$ is the grating period, $n_{\text{eff}}$ is the effective refractive index, and $N$ is the grating order. 

- First-order gratings : Allow only backscattering.
- Second-order gratings : Enable both frequency selection and surface emission.

>[!info] Image

At the Bragg condition:
- A frequency gap forms, preventing propagation due to Bragg reflection.
- The gap width is:

  $$
  \Delta \omega \approx \omega \frac{2}{n} \cdot \frac{\Delta n}{n}.
  $$

  Modes propagate only at the gap edges where group velocity $v_g = \frac{\partial \omega}{\partial k} \approx 0$, allowing confinement.

 Coupled Mode Description :
- The refractive index and losses are sinusoidally modulated.
- The field inside the cavity is a superposition of left- and right-traveling waves.
- Two coupling types:
  - Index coupling : Produces a stop band with no lasing at the Bragg frequency.
  - Gain/loss coupling : Supports lasing at the Bragg frequency.

The key parameter is $KL$, where $K$ is the coupling constant and $L$ is the laser length.

---
## 9.2 Fabrication Geometries

- Surface gratings : Etched directly onto the surface but cause optical losses due to metallization.
- Regrown gratings : Placed within the active region for better performance.
- Thermal tuning : The Bragg wavelength $\lambda_B$ shifts to higher wavelengths with increased temperature. In pulsed operation, temperature variations cause chirping, which can be exploited for spectroscopy.

---
## 9.3 THz Mode Control

 Photonic crystals are ideal for THz operation due to their ease of fabrication for $\lambda \sim 100 \, \mu\mathrm{m}$. 

Metal-metal waveguides:
- Emulate 2D systems due to unity overlap.
- Require improved out-coupling mechanisms for efficient THz mode control.

---
## 9.4 Third-Order Gratings

 Third-order gratings emit in-plane due to odd-order diffraction. The Bragg condition remains equivalent to momentum matching.

- Efficient extraction is achieved by tuning the grating periodicity.
- Benefits:
  - High slope efficiency.
  - Good far-field properties.
- Challenges:
  - Fabrication involves deep dry etching.
  - Continuous-wave (CW) operation is difficult due to inefficient electrical transport.

Sub-wavelength dimensions introduce a diffraction limit, increasing beam divergence. However, the high surface-to-volume ratio improves thermal performance, supporting CW and pulsed operation above 100 K. Plasmonic collimators enhance the far-field.

---
## 9.5 Microcavities and Lasers

Microcavities offer:
- Strong quantum electrodynamic (QED) coupling.
- Spontaneous emission control.

Electrically pumped microcavities:
- Achieve $Q$-factors of approximately 80.
- Feature very small cavity sizes.

---
## 9.6 Metamaterials

Metamaterials consist of artificial structural elements smaller than the controlled wavelength, described as an effective medium using Maxwell's equations.

Example: Cutting a bulk material into a metal ring induces a weak magnetic response. Adding a gap creates a magnetic resonance, inducing currents where $\text{Re}(\mu) < 0$. The resonance behaves like an LCR circuit with:

$$
\omega_0 = \frac{1}{\sqrt{LC}}.
$$

>[!info] Image

---
## 9.7 Sub-Wavelength Laser Oscillator

>[!info] Image

In sub-wavelength oscillators:
- The electric field is confined in two half-disks.
- Injecting more current narrows the linewidth below FTIR resolution.
- Applying a magnetic field increases contrast and introduces discontinuities in differential resistance.

The Purcell factor (~17) reduces the spontaneous lifetime to the microsecond range, though this is far from the non-radiative limit.

---
## 9.8 External Cavity

DFB QCL tuning is limited by changes in the effective mode index, typically achieved thermally. For wide tuning ranges, external cavities with tunable wavelength filters are used:

- Littrow configuration :
  - Tuned by rotating the grating.
  - Maximizes back-coupling into the active region.
  - Most commonly used for QCLs.

- Littman configuration :
  - Tuned by rotating the mirror.
  - Offers stronger wavelength selectivity.

>[!info] Image

To ensure lasing in the external cavity (EC) mode before FP modes, the following condition must hold:

$$
\frac{g(\lambda)}{\alpha_{EC}} \geq 1 > \frac{g(\lambda_{\max})}{\alpha_{FP}},
$$

where $\alpha_{FP}$ can be increased with anti-reflection (AR) coatings. The AR coating also shifts the lasing mode.

>[!info] Image

---
## 9.9 Summary

Mode control in QCLs is achieved through various techniques:
1. Fabry-Perot cavities : Simple but unpredictable lasing modes.
2. DFB gratings : Enable single-mode operation with precise wavelength control.
3. External cavities : Provide wide tuning ranges for spectroscopy.
4. Microcavities and metamaterials : Enhance QED coupling and spontaneous emission control.
5. Plasmonic designs : Improve far-field performance and thermal stability.

---