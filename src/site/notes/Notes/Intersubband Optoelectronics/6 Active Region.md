---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/6-active-region/","hide":"true","updated":"2025-02-02T13:45:59.110+01:00"}
---

Jump back to [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/6 Active Region#6.1 Optimization and Lifetime Engineering\|6.1 Optimization and Lifetime Engineering]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.2 Phase Space\|6.2 Phase Space]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.3 Escape Time, Bragg Reflection, and Upper Level Confinement\|6.3 Escape Time, Bragg Reflection, and Upper Level Confinement]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.4 Three Quantum Well Design\|6.4 Three Quantum Well Design]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.5 Double Phonon Resonance\|6.5 Double Phonon Resonance]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.6 Bound-to-Continuum Active Region: Chirped Superlattice\|6.6 Bound-to-Continuum Active Region: Chirped Superlattice]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.7 Dependence on $N_p$\|6.7 Dependence on $N_p$]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.8 Dependence on Temperature\|6.8 Dependence on Temperature]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.9 Backfilling\|6.9 Backfilling]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.10 Continuous Wave (CW) Operation\|6.10 Continuous Wave (CW) Operation]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.11 Doping\|6.11 Doping]]
- [[Notes/Intersubband Optoelectronics/6 Active Region#6.12 Wallplug Efficiency\|6.12 Wallplug Efficiency]]

---
# 6 Active Region

A quantum cascade laser (QCL) requires:
1. An optical transition.
2. Population inversion.
3. Sufficient gain to overcome losses.

The active region is designed to create and maintain inversion between states 2 and 3. An injection region enables resonant tunneling to the next period by increasing electron energy above the band edge.

>[!info] Image

 Population inversion requires $\tau_{32} > \tau_2$. The injection region is doped to supply electrons, preventing space-charge domains, and the electrons cool toward the lattice temperature. This increases the period and reduces the effective electric field.

- Slope efficiency ($\frac{dP}{dI}$): Grows with the number of periods $N_p$ since each electron can emit $N_p$ photons.
- Larger active regions reduce the required population density per period but increase the required bias.

The lifetime of state 3 is:

$$
\tau_3^{-1} = \tau_{32}^{-1} + \tau_{31}^{-1} + \tau_{\text{esc}}^{-1},
$$

where spontaneous emission is negligible ($\tau_{\text{sp}} \gg \tau_3$). This becomes relevant near the threshold current.

From the rate equations, we set gain equal to losses :

$$
g_c = \Gamma \cdot \frac{4 \pi q^2}{\epsilon_0 n_{\text{ref}} \lambda} \cdot \frac{z_{32}^2}{2 \gamma_{32} L_p},
$$

and the threshold current:

$$
J_{\text{th}} = \frac{q_0}{\tau_{\text{eff}}} \cdot \left(\frac{\alpha_{\text{tot}}}{g_c} + n_2^{\text{therm}}\right),
$$

where:
- $\tau_{\text{eff}} = \tau_3 \left(1 - \frac{\tau_2}{\tau_{32}}\right)$ is the effective lifetime.
- $n_2^{\text{therm}}$ accounts for thermally activated electrons.

Population inversion requires $\tau_{\text{eff}} > 0$ or $\tau_{32} > \tau_2$. A large number of periods ($N_p \sim 25-50$) helps lower the threshold.

>[!info] Image

---
## 6.1 Optimization and Lifetime Engineering

Key factors include:
- Tunneling rates : Thick barriers reduce scattering but decrease oscillator strength. The figure of merit $f \cdot \tau$ increases.
- Optical phonon emission : Lifetimes in the mid-IR are limited by optical phonon emission. Resonant processes reduce $\tau_2$ to ~200 fs.
- Wavefunction overlap : Diagonal transitions reduce overlap, decreasing the matrix element and thus the scattering rate.

---
## 6.2 Phase Space

Adjusting barrier thickness controls miniband and minigap widths in superlattices:
- Carriers are injected into the lower state of the upper miniband.
- Optical gain is achieved at the gap edges.
- Scattering rates decrease with the number of wells, enhancing population inversion.

Superlattices have higher oscillator strengths than single quantum wells. However, too many wells reduce injection efficiency as levels approach their broadening width.

---
## 6.3 Escape Time, Bragg Reflection, and Upper Level Confinement

Minigaps in the injection region align with the upper laser state for efficient confinement:

>[!info] Image

Simply increasing the barrier thickness affects escape rates. Instead, the Bragg condition is imposed to build the gap in the continuum, reducing escape values.

---
## 6.4 Three Quantum Well Design

Incorporating three wells achieves population inversion via resonant splitting. Two design options:
1. Diagonal transition : Lower overlap, longer $\tau_3$, suited for low-energy transitions.
2. Vertical transition : Higher overlap, improved injection efficiency.

>[!info] Image

- Diagonal designs have $\tau_3^{\text{diag}} \approx 2 \cdot \tau_3^{\text{vert}}$.
- Vertical designs are better for injection, while diagonal designs maintain $\tau_3 \gg \tau_2$.

---
## 6.5 Double Phonon Resonance

The three-well design faces challenges with extraction from the ground state. Electrons scatter back to state 2, hindering inversion.

Solution: Introduce three states separated by $\hbar \omega_{L_0}$, which reduces the lower-state population:

>[!info] Image

---
## 6.6 Bound-to-Continuum Active Region: Chirped Superlattice

A chirped superlattice compensates for electric fields that break minibands into delocalized states:

>[!info] Image

- The chirp maintains constant band edges.
- This approach enables:
  - High-temperature performance.
  - Long-wavelength operation.
  - Broadband gain, as one upper state links to multiple lower states.

---
## 6.7 Dependence on $N_p$

For a constant optical intensity over the active region, the overlap factor is $\Gamma = \Gamma_p N_p$. Performance metrics scale with $N_p$:
- Threshold current: $J_{\text{th}} \sim \frac{1}{N_p}$.
- Slope efficiency: $\frac{dP}{dI} \sim N_p$.
- Ohmic losses: Scale as $\left(\frac{1}{N_p}\right)^2$.

---
## 6.8 Dependence on Temperature

Temperature effects:
- Relative lifetimes change slowly with temperature (factor of 2).
- Threshold current weakly depends on temperature:
  $$
  J_{\text{th}}(T) \sim \exp\left(\frac{T}{T_0}\right),
  $$
  where $T_0$ is large, supporting operation up to $150^\circ$C.

Gain broadening is dominated by in-plane scattering mechanisms, so $\gamma_{32}$ is weakly temperature-dependent.

---
## 6.9 Backfilling

 Thermal backfilling occurs when carriers are thermally excited to the lower state in the injection region. This thermal population ($n_2^{\text{therm}}$) should be minimized:

>[!info] Image

---
## 6.10 Continuous Wave (CW) Operation

Maximum operating temperature for CW operation:

$$
T_{\text{sub}}^{\max} = T_0 \cdot \left(\ln\left(\frac{T_0 U_{\text{tn}}}{J_0 U_{\text{th}}}\right) - 1\right),
$$

where $T_0$, intrinsic threshold power, and thermal conductance $G$ must be optimized.

---
## 6.11 Doping

Doping ensures electrical neutrality and stability. However:
- Active region doping increases waveguide losses and linewidth broadening.
- To mitigate these effects, doping is applied far from the active region.

The maximum operating current scales with doping:

$$
J_{\max} \sim n_s.
$$

---
## 6.12 Wallplug Efficiency

The wallplug efficiency is:

$$
\eta_{\text{wp}} = \frac{P_{\text{opt}}}{UI} = \frac{J_{\max} - J_{\text{th}}}{J_{\max}} \cdot \frac{dP / dI}{U} \cdot \langle \eta_{\text{Lomax}} \sqrt{g^* \tau^*} \rangle,
$$

where $g^*$ and $\tau^*$ are reduced gain and lifetime.

Key considerations:
- If $g^* \tau^* < 1$, the device cannot reach threshold due to free carrier absorption.
- Fast injector transport and long upper-state lifetimes improve efficiency.

Wallplug efficiency decreases with lower photon energy.

---