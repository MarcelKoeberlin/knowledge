---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/11-frequency-combs/","hide":"true","updated":"2025-01-28T22:37:01.754+01:00"}
---

Jump back to [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/11 Frequency Combs#11 Frequency Combs\|11 Frequency Combs]]
	- [[Notes/Intersubband Optoelectronics/11 Frequency Combs#11 Frequency Combs\|11.2 Mode-Locking]]
	- [[Notes/Intersubband Optoelectronics/11 Frequency Combs#11 Frequency Combs\|11.3 Dual-Comb Spectroscopy]]
	- [[Notes/Intersubband Optoelectronics/11 Frequency Combs#11 Frequency Combs\|11.4 Summary]]

---
# 11 Frequency Combs

A frequency comb is defined as:

$$
f_n = f_{\text{CEO}} + n \cdot f_{\text{rep}},
$$

where:
- $f_{\text{CEO}}$: Carrier-envelope offset frequency.
- $f_{\text{rep}}$: Repetition rate.
- $n$: Mode index.

The carrier-envelope offset frequency is:

$$
f_{\text{CEO}} = f_{\text{rep}} \cdot \frac{\Delta \phi_0}{2\pi} = \frac{\Delta \phi_0}{2\pi T_R},
$$

and $f_{\text{CEO}} = 0$ when the phase and group velocities are equal ($v_p = v_g$).

Both $f_{\text{CEO}}$ and $f_{\text{rep}}$ can be measured in the GHz regime using an RF counter and a wavemeter, linking optical transition accuracy to a microwave signal.

### 11.1.1 Comb Behavior
- Independent comb lines : When lines are not phase-locked, line-to-line noise is uncorrelated.
- Phase-locked comb : Line-to-line noise is correlated, satisfying $\delta(\omega_i - \omega_j) \ll \omega_i$. 
- Non-linearity requirement : A non-linearity is required to lock modes together, achieved via:# 11 Frequency Combs

A frequency comb is defined as:

$$
f_n = f_{\text{CEO}} + n \cdot f_{\text{rep}},
$$

where:
- $f_{\text{CEO}}$: Carrier-envelope offset frequency.
- $f_{\text{rep}}$: Repetition rate.
- $n$: Mode index.

The carrier-envelope offset frequency is:

$$
f_{\text{CEO}} = f_{\text{rep}} \cdot \frac{\Delta \phi_0}{2\pi} = \frac{\Delta \phi_0}{2\pi T_R},
$$

and $f_{\text{CEO}} = 0$ when the phase and group velocities are equal ($v_p = v_g$).

Both $f_{\text{CEO}}$ and $f_{\text{rep}}$ can be measured in the GHz regime using an RF counter and a wavemeter, linking optical transition accuracy to a microwave signal.

### 11.1.1 Comb Behavior
- Independent comb lines : When lines are not phase-locked, line-to-line noise is uncorrelated.
- Phase-locked comb : Line-to-line noise is correlated, satisfying $\delta(\omega_i - \omega_j) \ll \omega_i$. 
- Non-linearity requirement : A non-linearity is required to lock modes together, achieved via:
  - Medium-induced non-linearity (e.g., four-wave mixing, FWM).
  - Saturable absorbers (SA) : Absorption decreases with intensity, introducing non-linearity.

In two-level systems , inversion is not possible, but a third-order non-linearity (e.g., FWM) enables frequency mixing.

---
## 11.2 Mode-Locking

 Mode-locking produces short pulses in time by phase-locking multiple modes. The pulse duration decreases as the number of locked modes increases.

### 11.2.1 Active vs Passive Mode-Locking
1. Active mode-locking :
   - Achieved by modulating the gain medium at the cavity round-trip time.
   - Pulse duration depends on:

     $$
     \tau_p \sim \sqrt[4]{\frac{g}{M}} \sqrt{\frac{1}{\Delta f_g f_m}} \sim 1 \, \text{ps},
     $$

     where $\Delta f_g$ is the gain bandwidth and $f_m$ is the modulation frequency.

2. Passive mode-locking :
   - Requires slow gain and a fast saturable absorber (SA).
   - Not suitable for QCLs due to their short upper-state lifetimes, preventing energy storage and high-energy pulse emission.

### 11.2.2 Methods to Improve Mode-Locking in QCLs
- Diagonal transitions : Spatially separate wavefunctions to achieve longer lifetimes.
- RF injection : Stabilizes $f_{\text{rep}}$ and $f_{\text{CEO}}$.
- Injection locking or FM locking : Synchronizes the modes:

  >[!info] Image

### 11.2.3 Testing Comb Behavior
1. Spectral resolution : Measuring the spectrum with high resolution shows the mode structure but not phase relationships.
2. Coherence testing :
   - Detect RF content by shining the comb onto a QWIP (Quantum Well Infrared Photodetector) connected to a spectrum analyzer.
   - Adding an FTIR before the QWIP enables intermode beat analysis.

 SWIFT Spectroscopy (Spectral Wavelength Interferometric Fourier Transform):
- Incorporates a reference to demodulate the signal into amplitude and phase components.

---
## 11.3 Dual-Comb Spectroscopy

 Dual-comb spectroscopy uses two combs with slightly different repetition rates:

$$
\Delta f = f_2 - f_1.
$$

When the two combs are mixed, the difference frequency $\Delta f$ appears in the RF domain. Adding a sample before mixing causes its absorption spectrum to be mapped to the RF domain.

### 11.3.1 Requirements
- Both combs must be phase-locked for this technique to work.

---
## 11.4 Summary

 Frequency combs are powerful tools linking optical transitions to microwave signals, enabling precise spectroscopy and metrology. Key features include:
1. Mode-locking :
   - Active mode-locking: Modulation-based.
   - Passive mode-locking: Requires saturable absorbers but limited in QCLs due to short upper-state lifetimes.
2. Testing comb coherence : Analyzing RF content and intermode beats reveals phase relationships.
3. Dual-comb spectroscopy :
   - Maps absorption spectra to the RF domain.
   - Requires phase-locking between combs for accurate measurements.

These advancements make frequency combs invaluable for high-resolution spectroscopy and optical frequency metrology.

---