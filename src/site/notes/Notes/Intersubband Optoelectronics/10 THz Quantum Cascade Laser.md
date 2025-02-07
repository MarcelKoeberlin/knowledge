---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/10-t-hz-quantum-cascade-laser/","hide":"true","updated":"2025-02-07T10:57:49.197+01:00"}
---

Jump back to ==[[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.1 Resonant Tunneling Extraction\|10.1 Resonant Tunneling Extraction]]
- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.2 Double Resonance\|10.2 Double Resonance]]
- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.3 Principal Design Strategies\|10.3 Principal Design Strategies]]
- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.4 Two Quantum Well Design\|10.4 Two Quantum Well Design]]
- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.5 Long Wavelength QCL\|10.5 Long Wavelength QCL]]
- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.6 Linewidth\|10.6 Linewidth]]
- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.7 Difference Frequency Generation (DFG)\|10.7 Difference Frequency Generation (DFG)]]
- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.8 Magnetic Confinement / Magneto-Spectroscopy\|10.8 Magnetic Confinement / Magneto-Spectroscopy]]
- [[Notes/Intersubband Optoelectronics/10 THz Quantum Cascade Laser#10.9 Summary\|10.9 Summary]]

---
# 10 THz Quantum Cascade Laser

In the THz regime ($\hbar\omega < \hbar\omega_L$), temperature dependence is strong, and optical phonons dominate at high temperatures. The scattering processes and their typical timescales are:

- Optical phonon emission by thermal electrons (~0.5 ps).
- Optical phonon absorption (2–5 ps).
- Electron-electron scattering (5–40 ps).
- Impurity scattering/interface roughness (10–30 ps).
- Acoustic phonons (~300 ps).
- Photons (~10 µs).

>[!info] Image

The bound-to-continuum approach achieves high slope efficiency and power at low temperatures but is limited to ~100 K due to the miniband width $\Delta \sim \hbar \omega$, considering:
- Thermal effects ($k_B T$).
- Level broadening ($\Gamma$).

For efficient operation:
- $\Delta \gg \Gamma$.
- $\Delta > k_B T$.

This holds for mid-IR at room temperature but only for THz at cryogenic temperatures. As $k_B T \sim \hbar \omega_L$, the upper state lifetime decreases significantly.

---
## 10.1 Resonant Tunneling Extraction

To address lower state lifetimes:
- Couple the lower state of the laser transition to a short-lived upper state, reducing its lifetime while keeping the upper state lifetime long.

>[!info] Image

Another approach:
- Combine a bound-to-continuum active region with a miniband coupled to an extractor quantum well . This relaxes alignment requirements.

>[!info] Image

---
## 10.2 Double Resonance

In this design, no optical phonons are used, so there is no high-temperature support. Two resonances at one wavelength are challenging to achieve.

Key features:
- Vertical transitions are narrower, improving gain ($g \sim \frac{1}{\gamma}$).
- The laser roll-over is a signature behavior:
  1. Resistive phase : No lasing.
  2. Population inversion phase : Lasing begins due to extraction resonance.
  3. Inversion quenching phase : Population inversion drops, quenching lasing.

>[!info] Image

---
## 10.3 Principal Design Strategies

Designs can focus on:
1. Low-current density designs :
   - No optical phonons.
   - Low applied bias.
   - Longer lower-state lifetimes (elastic scattering, tunneling).
   - Limited to cryogenic temperatures (~100 K).
2. High-current density designs :
   - Use optical phonons.
   - Higher applied bias.
   - Shorter lower-state lifetimes.
   - Achieve higher maximum temperatures.

The trend is toward using fewer quantum wells.

---
## 10.4 Two Quantum Well Design

This design features:
- Level splitting : $E_{32} \approx 2.7 \, \mathrm{THz}$.
- Strongly diagonal transitions : Enhance upper-state lifetimes.

For low electric fields:
- Inversion occurs between $1'$ and $2$, with a strongly diagonal transition.

For high electric fields:
- Inversion shifts to $3 \rightarrow 2$.

There is direct phonon injection and phonon depopulation , with resonant tunneling injection only at high bias.

>[!info] Image

Since $|1'\rangle$ and $|3\rangle$ coexist in an anticrossed state, a spectral hole appears.

Efficiency:

$$
\eta = \frac{J_{\text{rad}}}{J_{\text{tot}}} \approx 55\%.
$$

---
## 10.5 Long Wavelength QCL

For wavelengths below ~1.5 THz:
- Phonon extraction becomes inefficient.
- Injection selectivity is lost as lasing states broaden and overlap.

Applications:
- Spectroscopy in astronomy , as many gases have transitions in this range.

To avoid reabsorption:
- Minibands are split to separate lasing states.

>[!info] Image

At ~1.7 THz (~6 meV), injector reabsorption has a minimum, supporting laser operation. Contributions from the doublet decrease with increasing temperature as the splitting becomes smaller than $k_B T$.

---
## 10.6 Linewidth

The linewidth of a laser has a fundamental limit, typically in the Hz range for QCLs, requiring excellent temperature stability.

 Measurement :
- Heterodyne detection:
  - Mix the laser signal with two known oscillators.
  - Down-convert to GHz, where a spectrum analyzer measures the linewidth.

---
## 10.7 Difference Frequency Generation (DFG)

Using two QCLs operating at $\omega_1$ and $\omega_2$, a nonlinear crystal inside the cavity produces an output at:

$$
\omega_\text{THz} = \omega_2 - \omega_1.
$$

This enables room-temperature sources of 1–5 THz. External coupling allows wide-range frequency tuning.

- QCLs exhibit large $X^{(2)}$ non-linearity, but the DFG process is inefficient.

---
## 10.8 Magnetic Confinement / Magneto-Spectroscopy

To study scattering mechanisms, a magnetic field is applied perpendicular to the QCL layers, quantizing energy levels into Landau levels . 

Key points:
- Energy level spacing depends on magnetic field strength.
- Scattering mechanisms (e.g., optical phonon emission) are strongly constrained due to fixed energy exchanges.

At specific resonances:
- Optical phonon emission : $\Delta E = N\hbar \omega_c + \hbar \omega_\text{LO}$.
- Elastic resonances : $\Delta E = N\hbar \omega_c$.

Resonances enhance scattering, increasing current while reducing light output. Measurements of current and light output provide insights into scattering mechanisms.

>[!info] Image

For strong confinement ($\hbar \omega_c > \Delta E$), scattering is suppressed, and lifetimes increase significantly. Large magnetic fields also make current density ($J_\text{th} \sim \frac{1}{\tau(B)}$) temperature-dependent.

---
## 10.9 Summary

THz QCLs operate under challenging conditions with strong temperature dependencies. Key design strategies focus on:
1. Resonant tunneling for efficient population inversion.
2. Two-well designs to optimize transitions and lifetimes.
3. Magneto-spectroscopy to probe scattering mechanisms.
4. DFG for room-temperature THz sources.
5. Minimizing linewidths for stable, high-precision applications.

Applications include spectroscopy, astronomy, and fundamental studies of THz physics.

---