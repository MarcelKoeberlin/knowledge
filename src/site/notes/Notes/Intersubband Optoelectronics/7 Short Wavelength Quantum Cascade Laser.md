---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/7-short-wavelength-quantum-cascade-laser/","hide":"true","updated":"2025-01-28T22:37:57.070+01:00"}
---

Jump back to [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/7 Short Wavelength Quantum Cascade Laser#7 Short Wavelength Quantum Cascade Laser\|7 Short Wavelength Quantum Cascade Laser]]
	- [[Notes/Intersubband Optoelectronics/7 Short Wavelength Quantum Cascade Laser#7 Short Wavelength Quantum Cascade Laser\|7.1 High-Energy Tuning Requirements]]
	- [[Notes/Intersubband Optoelectronics/7 Short Wavelength Quantum Cascade Laser#7 Short Wavelength Quantum Cascade Laser\|7.2 Strain]]
	- [[Notes/Intersubband Optoelectronics/7 Short Wavelength Quantum Cascade Laser#7 Short Wavelength Quantum Cascade Laser\|7.3 Summary]]

---
# 7 Short Wavelength Quantum Cascade Laser

To tune the photon energy toward shorter wavelengths (higher energy), the design is limited by the conduction band discontinuity . 

 Challenges :
- Thermal excitation : At high temperatures, electrons can be thermally excited to continuum states, degrading performance.

>[!info] Image

The escape time to the continuum is estimated as:

$$
\tau_{\text{esc}}^{-1} = \tau_{\text{cont}}^{-1} \cdot \exp\left(-\frac{E_{\text{act}}}{k_B T}\right),
$$

where $\tau_{\text{cont}}$ is typically on the order of 100 fs. 

To minimize escape rates, a larger conduction band discontinuity is required, which can be achieved by increasing the Al content in AlGaAs barriers:

>[!info] Image

---
## 7.1 High-Energy Tuning Requirements

To operate at shorter wavelengths:
1. Large conduction band discontinuity : Achieved by using high-Al-content materials or strained layers.
2. Prevent current leakage : The upper state of the laser transition must stay well below the lateral valleys , as these have:
   - A higher effective mass.
   - A larger density of states.
   - Increased likelihood of performance degradation if leakage occurs.

---
## 7.2 Strain

 Strained layers allow operation at shorter wavelengths without compromising material quality. Strain increases the conduction band discontinuity, enabling better carrier confinement.

### 7.2.1 Key Properties of Strained Layers
- Lattice mismatch creates strain, but the strain is limited by the critical thickness of the layer.
- Effective mass changes : Strain modifies the gap in both the valence and conduction bands, making the effective mass $m^*$ a tensor that is generally heavier:
  $$
  \frac{m^0}{m^*} = 1 + \frac{E_p}{E_a}.
  $$
- Oscillator strength : Strain affects the sum rule, impacting the oscillator strength $f$ and, consequently, the optical gain ($\sim |z|^2 \sim f$).

However, the strain cannot be increased indefinitely due to material limitations (e.g., reduced critical thickness with increased strain).

---
## 7.3 Summary

For short-wavelength QCLs:
- A large conduction band discontinuity is essential to prevent thermal leakage and ensure efficient operation.
- Strain is a powerful tool to tune the conduction band gap, but it must be carefully balanced against material limits.
- Maintaining the upper laser state below lateral valleys prevents current leakage and ensures optimal device performance.

---