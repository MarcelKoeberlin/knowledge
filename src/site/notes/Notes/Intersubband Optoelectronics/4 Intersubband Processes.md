---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/4-intersubband-processes/","hide":"true","updated":"2025-01-28T22:38:44.140+01:00"}
---

Jump back to [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/4 Intersubband Processes#4 Intersubband Processes\|4 Intersubband Processes]]
	- [[Notes/Intersubband Optoelectronics/4 Intersubband Processes#4 Intersubband Processes\|4.2 Measuring the Lifetime]]

---
# 4 Intersubband Processes

The key process governing intersubband transitions is scattering :

>[!info] Image

The optical linewidth is given by:

$$
\Gamma_{\text{opt}}^{v \rightarrow \mu}(K) = \frac{1}{2} \left(\Gamma_{\text{intra}}^{(\mu, v)} + \Gamma_{\text{inter}}^{\mu \rightarrow \nu} + \Gamma_{\text{intra}}^{v \rightarrow \mu}\right).
$$

The spontaneous emission rate is:

$$
\omega_{\text{sp}} \sim n_{\text{refl.}} f_{if} \cdot E_{fi}^2.
$$

This makes an intersubband LED highly inefficient:

>[!info] Image

The optical phonon exhibits very little dispersion, which allows us to approximate:

$$
\omega_{\text{opt}}(k) \approx \text{constant}.
$$

>[!info] Image

At resonance, the lifetime due to optical phonon scattering is approximately 100 fs, which is much shorter than the radiative lifetime. The lifetime depends weakly on lattice temperature, decreasing by only a factor of 2 over a 400 K range.

The total scattering rate includes spontaneous emission, stimulated emission, and absorption processes:

$$
w_{\text{tot}} = \left(1 + n_{L_0}\right) w_{L_0}^{\text{(em)}} + u_{L_0} w_{L_0}^{\text{(abs)}},
$$

where:

$$
u_{L_0} = \frac{1}{e^{\beta \hbar \omega_{L_0}} - 1}
$$

is the Bose-Einstein distribution.

In a quantum cascade laser (QCL) , the lifetime is primarily regulated by optical phonons. The threshold current is only weakly temperature dependent.

---
### 4.1.1 Other (Quasi-)Elastic Processes

- Acoustic phonons : Long lifetime (~80 ps), relevant only for extremely low densities or ultra-clean systems.
- Impurity scattering : Doping causes significant broadening. To mitigate this, only the injector region is doped ("setback").
- Electron-electron scattering : Conserves total energy and momentum; mainly thermalizes the system. Relevant for clean samples at low temperatures.
- Alloy scattering : Ternary compounds introduce disorder, dominating at low temperatures.
- Interface roughness scattering : The dominant broadening mechanism, especially at high energies. Narrow wells exacerbate the effect due to increased wavefunction overlap with rough surfaces.

---
## 4.2 Measuring the Lifetime

### 4.2.1 Interband Pump-Probe
- A pump pulse creates an electron density.
- Holes are created, affecting the lifetime.
- Non-selective , but offers time resolution.
- The intersubband luminescence intensity reveals the upper state lifetime. This method does not require a strong pump.

>[!info] Image

### 4.2.2 Intersubband Pump-Probe
- The pump photon excites an electron, and the upper state decay is measured via absorption.
- Selective , but the pump is non-trivial to implement.

>[!info] Image

The decay rate as a function of carrier density in an intersubband pump-probe experiment is shown here:

>[!info] Image

### 4.2.3 Cooling an Electron Gas
Elastic scattering cannot cool the electron gas. Phonons , primarily optical phonons, are responsible for cooling via spontaneous emission.

---