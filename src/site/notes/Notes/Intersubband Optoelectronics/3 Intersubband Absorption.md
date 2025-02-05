---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/3-intersubband-absorption/","hide":"true","updated":"2025-02-02T13:45:59.000+01:00"}
---

Jump back to [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/3 Intersubband Absorption#3.1 Selection Rules\|3.1 Selection Rules]]
- [[Notes/Intersubband Optoelectronics/3 Intersubband Absorption#3.2 Sum Rule\|3.2 Sum Rule]]
- [[Notes/Intersubband Optoelectronics/3 Intersubband Absorption#3.3 Depolarization Shift\|3.3 Depolarization Shift]]
- [[Notes/Intersubband Optoelectronics/3 Intersubband Absorption#3.4 Absorption Linewidth\|3.4 Absorption Linewidth]]

---
# 3 Intersubband Absorption

Intersubband absorption can be described using two Hamiltonians:
1. Dipole Hamiltonian : 
   $$
   H_{\text{dip}} = -\vec{d} \cdot \vec{E} = -q \vec{R} \cdot \vec{E}_0 \sin(\omega t),
   $$
   where $\vec{d}$ is the dipole moment.
   
2. Gauge Hamiltonian :
   $$
   H = \frac{(P - eA)^2}{2m}.
   $$

For low intensities, we neglect the $A^2$ term, leading to the interaction Hamiltonian:
$$
H_{\text{int}} = -\frac{q}{m_0} \vec{A} \cdot \vec{P}.
$$

Using the dipole approximation, where $A(r, t) = A_0 e^{i\left(\frac{\omega}{c}z - \omega t\right)} \approx A_0 e^{-i \omega t}$ (valid when $z \ll \lambda$), we find:

$$
\langle \Psi_i | H_{\text{int}} | \Psi_f \rangle = -q \frac{A(r)}{m} \langle \Psi_i | P | \Psi_f \rangle.
$$

It follows that:

$$
\langle \phi_n | p | \phi_m \rangle = i m_0 \omega_{nm} \langle \phi_n | z | \phi_m \rangle,
$$

allowing the use of both Hamiltonians equivalently. 

Let $\phi_{ij} = f_{ij}(r) \cdot u_{nm}(r)$, where $f_{ij}$ is the envelope and $u_{nm}$ is the Bloch part. Then:

$$
\langle \phi_i | p | \phi_j \rangle = \underbrace{\langle f_i | p | f_j \rangle \cdot \langle u_n | u_m \rangle}_{\text{Intersubband (ISB)}} + \underbrace{\langle f_i | f_j \rangle \cdot \langle u_n | p | u_m \rangle}_{\text{Interband (IB)}}.
$$

ISB transitions have a large dipole moment.

>[!info] Image

Using Fermi's golden rule, the scattering rate is:

$$
R = \frac{1}{\tau} = \frac{2 \pi}{\hbar} \sum_k \left| \langle i | H_{\text{int}} | j \rangle \right|^2 \delta\left(E_F - (E_i + \hbar \omega)\right).
$$

The absorbed energy per area is related to the absorbed fraction $\alpha$ of the system by:

$$
\frac{P}{s} = I \alpha.
$$

Balancing the energy loss of the EM field with the system's energy gain relates $\alpha$ to $R$. For a one-band model with parallel subbands, $k$-dependence vanishes, resulting in discrete optical transitions. However, interface roughness and electron-phonon scattering broaden the absorption line, replacing:

$$
\delta\left(E_F - (E_i + \hbar \omega)\right)
$$

with a Lorentzian:

$$
\frac{\gamma / \pi}{(E_F - (E_i + \hbar \omega))^2 + \gamma^2}.
$$

The absorption coefficient is:

$$
\alpha(\omega) = \frac{2 \pi e^2 z_{if}^2 (n_i - n_f)}{\epsilon_0 n_{\text{refl}} \lambda L_p} \cdot \frac{\gamma}{(E_F - (E_i + \hbar \omega))^2 + \gamma^2}.
$$

A parity change is required for $z_{ij} \neq 0$.

The peak gain cross-section is:

$$
g_c = \frac{g}{n_f - n_i} = \frac{2 \pi e^2 z_{if}^2}{\epsilon_0 U_{\text{ref}} \lambda \gamma L_p}.
$$

---
## 3.1 Selection Rules

The transition dipole matrix element is:

$$
\langle f_i | \hat{e} \cdot \vec{p} | f_f \rangle = \int dV \, f_i^* (e_x p_x + e_y p_y + e_z p_z) f_f.
$$

For $f_i = \frac{1}{\sqrt{5}} e^{i k_\perp r_\perp} X_i(z)$, only the $z$-component couples to ISB transitions:

$$
H_{\text{dip}} = -q E_z z, \quad \text{where } E_z = -\frac{\partial A_z}{\partial t}.
$$

This rules out absorption at normal incidence (TE polarization). Instead, TM-polarized geometries (e.g., multi-pass setups) are used to measure absorption. A parity change is required for $z_{ij} \neq 0$. When bands are mixed, the distinction between IB and ISB transitions blurs.

---
## 3.2 Sum Rule

Using the completeness relation:

$$
\sum_n |\phi_n \rangle \langle \phi_n | = 1,
$$

and $\langle \phi_n | p | \phi_m \rangle = i m_0 \omega_{nm} \langle \phi_n | z | \phi_m \rangle$, the oscillator strength is:

$$
f_{ij} = \frac{2m}{\hbar^2} |z_{ij}|^2 (E_j - E_i),
$$

representing the probability of absorption or emission between levels $i$ and $j$. The sum rule is:

$$
\sum_n f_{ne} = \frac{1}{m^*}.
$$

A narrow gap increases ISB transition strength, as $\sum_n f_{ne} \sim \frac{\partial^2 \epsilon}{\partial k^2}$. In an electric field or excited initial states, the sum rule still holds.

---
## 3.3 Depolarization Shift

Electron-electron Coulomb interaction affects ISB absorption. A quantum well behaves as a plasma sheet, with an effective dielectric function:

$$
\epsilon_{2z}(\omega) = 1 + i \frac{4 \pi}{\epsilon_x \omega} \frac{\sigma_{zz}(\omega)}{d_{\text{eff}}}.
$$

The conductivity $\sigma_{zz}(\omega)$ includes Drude damping, causing a blue shift of the absorption peak:

$$
\tilde{\omega}_{12}^2 = \omega_{12}^2 + \tilde{\omega}_p^2,
$$

where $\tilde{\omega}_p \sim n_s \frac{f_{12}}{m_0 d_{\text{eff}}}$ is the effective plasma frequency. The shift is significant for high electron densities and low frequencies (e.g., THz range), due to field screening.

---
## 3.4 Absorption Linewidth

The absorption peak is broadened from delta functions to Lorentzian profiles due to finite upper-state lifetimes and inhomogeneities:

1. Homogeneous broadening : Independent of pump frequency, caused by lifetime effects and interface roughness.
2. Inhomogeneous broadening : Creates absorption holes at the pump signal.

The gain is inversely proportional to linewidth:

$$
g \sim \frac{1}{\gamma}.
$$

Broadening contributions add up:

$$
\gamma = \sum \gamma_i,
$$

with interface roughness being the largest contributor. Narrow wells increase wavefunction overlap with rough surfaces, worsening broadening effects.

---