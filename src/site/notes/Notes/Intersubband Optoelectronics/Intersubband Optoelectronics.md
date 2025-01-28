---
{"dg-publish":true,"dg-path":"Notes/Intersubband Optoelectronics","permalink":"/notes/intersubband-optoelectronics/","updated":"2025-01-28T21:21:43.357+01:00"}
---

This is by far my least favourite course that I ever took, so I only converted it to markdown, fixed the headers, and pasted images back in (still needs to be done). ChatGPT did the rest.. Seriously what the hell is this course...

 Table of Contents 

- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#1 Intersubband Transitions\|1 Intersubband Transitions]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#2 K.P Formalism in Bulk Semiconductors\|2 K.P Formalism in Bulk Semiconductors]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#3 Intersubband Absorption\|3 Intersubband Absorption]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#4 Intersubband Processes\|4 Intersubband Processes]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#5 Detectors\|5 Detectors]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#6 Active Region\|6 Active Region]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#7 Short Wavelength Quantum Cascade Laser\|7 Short Wavelength Quantum Cascade Laser]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#8 Waveguides in QCLs\|8 Waveguides in QCLs]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#9 Mode Control\|9 Mode Control]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#10 THz Quantum Cascade Laser\|10 THz Quantum Cascade Laser]]
- [[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#11 Frequency Combs\|11 Frequency Combs]]

---
# 1 Intersubband Transitions

In interband transitions , the photon energy is limited by the gap, with lifetimes of approximately $\sim 1 \, \text{ns}$. Since the bands are not parallel, interactions occur with many frequencies.

In contrast, intersubband transitions can provide photons with terahertz (THz) energy. Because the bands are parallel, interaction occurs at only one frequency, resulting in simplified behavior.

---
## 1.1 Semi-classical Approach and Effective Mass Approximation

We consider the force equation:

$$
F = \frac{d \vec{p}}{dt} \quad \Leftrightarrow \quad \hbar \frac{d \vec{k}}{dt} = q(\vec{E} + \vec{v} \times \vec{B}),
$$

where quantum mechanics is contained in the momentum $\vec{p} = \hbar \vec{k}$. Near a band extremum, we expand the energy:

$$
\epsilon(k) = \epsilon_0 + \sum_{i=1}^{3} \frac{\partial^2 \epsilon}{\partial k^2} \left(k_i - k_0\right)^2.
$$

Here, the effective mass is defined as:

$$
\frac{1}{m^*} = \frac{1}{\hbar^2} \frac{\partial^2 \epsilon}{\partial k^2}.
$$

This leads to a dispersion relationship similar to a free electron with mass $m^*$. The electron velocity is:

$$
v_g = \frac{\partial \omega}{\partial k} = \frac{1}{\hbar} \frac{\partial E}{\partial k}.
$$

Negative curvature implies a negative $m^*$. A hole , however, has $m^* > 0$ and $q > 0$, behaving like an electron. This allows the computation of most transport properties.

---
## 1.2 Bloch Theorem

Any periodic potential can be expanded as:

$$
V(r) = \sum_{G} V_G e^{i G r},
$$

where $G$ is a reciprocal lattice vector. The Fourier coefficients $V_G$ are:

$$
V_G \sim \int d^3r \, V(r) e^{-i G r}.
$$

The first Brillouin zone is the primitive Wigner-Seitz cell. For a periodic Hamiltonian $H(r) = H(r + R)$, the wavefunction satisfies:

$$
\psi_{n k}(r) = e^{i k r} u_{n k}(r),
$$

where $u_{n k}(r)$ is a periodic Bloch function with $u_{n k}(r + R) = u_{n k}(r)$. The periodic lattice creates energy gaps, which appear at the Fermi energy in semiconductors.

---
## 1.3 Phonons

The crystal lattice behaves like a chain of atoms connected by springs. The solutions to the equations of motion describe acoustic waves traveling at $v \approx v_{\text{sound}}$ for small $k$.

>[!info] Image

If the lattice contains ions of two different masses, two branches emerge:
- Acoustic branch : Represents lattice vibrations.
- Optical branch : Couples to electromagnetic radiation through dipole interactions.

Phonon excitation energy is approximately $E \sim 20 \, \mathrm{meV}$, and $v_{\text{sound}} \approx 300 \, \mathrm{m/s}$. The dominant loss mechanism in semiconductors is electron-phonon scattering , with interaction times of $\sim 200 \, \mathrm{fs}$. For comparison, light (photon) interactions occur at $\sim 1 \, \mathrm{ns}$, which is also the lifetime of interband transitions.

---
## 1.4 Quantum Well

For an infinitely high potential barrier, the energy levels are:

$$
E_n = \frac{\hbar^2}{2 m^*} k_n^2 = \frac{\hbar^2}{2 m^*} \left(n \frac{\pi}{L}\right)^2.
$$

For a finite barrier, tunneling modifies the wavevector to:

$$
k = \frac{\sqrt{2 m^*(E - V)}}{\hbar}.
$$

In the case of two quantum wells, using the tight-binding approximation, we describe the Hamiltonian as:

$$
\mathcal{H} = \frac{P_2^2}{2 m^*} + V_b(z - z_1) + V_b(z - z_2).
$$

Assuming solutions for a single well $\chi_1(z - z_1)$ and $\chi_2(z - z_2)$, we use the Ansatz $\psi = a \chi_1 + b \chi_2$. Solving the eigenvalue problem gives the coupled equations:

$$
\begin{pmatrix}
E_1 + s - \epsilon & (E_1 - \epsilon)r + t \\
(E_1 - s)r + t & E_1 + s - \epsilon
\end{pmatrix}
\begin{pmatrix}
a \\
b
\end{pmatrix}
= 0,
$$

where:
- $r = \langle \chi_1 | \chi_2 \rangle$ (overlap),
- $s = \langle \chi_1 | V_b | \chi_2 \rangle$ (shift),
- $t = \langle \chi_1 | V_b | \chi_2 \rangle$ (transfer).

The coupling lifts degeneracy and shifts states downward. The energy difference is approximately:

$$
\Delta E \approx 2t.
$$

---
## 1.5 Artificial Superlattice

>[!info] Image

For thick barriers , minibands are thin. For thin barriers , the system behaves like a quasi-alloy. The potential is described as:

$$
V_b = \sum_n V_d(z - n d),
$$

where $V_d = -V_0$ for $|z - n d| \leq \frac{L}{2}$. Assuming periodicity, the Bloch theorem applies:

$$
\chi_q(z + nd) = e^{i q n d} \chi_q(z).
$$

The first miniband can often be approximated with a sinusoidal function, especially for thin minibands.

---
## 1.6 Bloch Oscillation

In the weak-coupling limit , the miniband dispersion is:

$$
\epsilon(q) = \epsilon_0 + s_j + 2t_j \cos(qd).
$$

Using semi-classical equations, we find:

$$
-eE = \frac{dp}{dt} = \hbar \frac{dq}{dt}, \quad q(t) = -\frac{e}{\hbar} Et.
$$

The velocity becomes:

$$
v(q) = \frac{1}{\hbar} \frac{d\epsilon}{dq} = -2 \frac{t_j d}{\hbar} \sin(qd).
$$

This results in oscillations at frequency:

$$
\omega_b = \frac{eEd}{\hbar}.
$$

These oscillations are due to Bragg reflections at Brillouin zone boundaries but are realistically damped by scattering effects.

---
# 2 K.P Formalism in Bulk Semiconductors

Spin-orbit coupling is neglected for simplicity. The crystal Hamiltonian is:

$$
\left(\frac{p^2}{2m} + V(r) + \frac{\hbar}{4m_0^2 e^2} (\sigma \times \nabla V) \cdot p \right) \psi = E \psi.
$$

Using Bloch's theorem, where $\Psi_{n k}(r) = e^{i k r} u_{n k}(r)$ and $p \Psi_{n k}(r) = e^{i k r} (p + \hbar k) u_{n k}(r)$, we rewrite the equation as:

$$
\left(\frac{(p + \hbar k)^2}{2m_0} + V(r)\right) u_{n k}(r) = \left(\frac{p^2}{2m_0} + \frac{\hbar}{m_0} k \cdot p + \frac{\hbar^2 k^2}{2m_0} + V(r)\right) u_{n k}(r) = E_{n k} u_{n k}(r).
$$

Splitting the Hamiltonian into $H = H_0 + W(k)$, we consider solutions at the $\Gamma$-point ($k = 0$), such that $H_0 u_{n 0}(r) = E_{n_0} u_{n 0}(r)$. Using second-order perturbation theory, the conduction energy becomes:

$$
E_c(k) = \underbrace{E_c(0)}_{=E_g} + \frac{\hbar^2 k^2}{2m_0} + \frac{\hbar^2 k^2}{m_0^2} \sum_{v \neq c} \frac{\left|\langle u_{c0} | p | u_{v0} \rangle \right|^2}{E_c - E_v}.
$$

The first-order term drops out because $\langle u_{c0} | p | u_{c0} \rangle = 0$ by symmetry, as conduction and valence bands have opposite symmetry. Simplifying for the lowest order (considering only the valence band):

$$
E_c(k) = E_g + \frac{\hbar^2 k^2}{2m_0} + \frac{\hbar^2 k^2}{m_0^2} \frac{|p_{cv}|^2}{E_g},
$$

where $p_{cv} = \langle u_{c0} | p | u_{v0} \rangle$. Defining the Kane energy $E_p = \frac{2}{m_0} |p_{cv}|^2$, we find:

$$
E_c(k) = E_g + \frac{\hbar^2 k^2}{2m_0} \left(1 + \frac{E_p}{E_g}\right).
$$

The effective mass is:

$$
\frac{m_0}{m^*} = 1 + \frac{E_p}{E_g}.
$$

Since $E_b \gg E_g$, we conclude $m^* < m_0$. For II-VI semiconductors, $E_p$ is almost constant due to similar orbital structures. Effective mass $m^*$ can be measured experimentally, for instance, through the cyclotron frequency:

$$
\omega_c = \frac{eB}{m^*},
$$

or via Haas-van Alphen oscillations.

---
## 2.1 General Kane Perturbation

For the $n^{\text{th}}$ band, expand $u_{n k}(r) = \sum_m c_m^{(n)} u_{m 0}(r)$. For simplicity, in a two-band model:

$$
u_{n k}(r) = a_c u_{c0} + a_v u_{v0},
$$

where only conduction band effects on the valence band are considered. Solving the matrix equation gives:

$$
E(k) = \frac{\hbar^2 k^2}{2m} \frac{E_p + E_g + 2E}{E + E_g}.
$$

The effective mass becomes energy-dependent:

$$
\frac{m^*(E)}{m^*(0)} = 1 + \frac{E}{E_g}.
$$

The energy dispersion is:

$$
E(k) = \frac{\hbar^2 k^2}{2m^*(0)} \left(1 - \gamma k^2\right),
$$

where $\gamma = \frac{\hbar^2}{2m^*(0)E_g}$ is the non-parabolicity coefficient . This model works well for small $k$. For ternary alloys $AB_{1-x}C_x$, using the virtual crystal approximation , the average potential is:

$$
V_{\text{avg}} = V_A + (1-x)V_B + xV_C.
$$

This restores translational invariance, allowing Bloch's theorem to apply.

---
## 2.2 Envelope Function Approximation

For a periodic potential with a slowly-varying impurity potential, we write the wavefunction as:

$$
\Psi(r) = \sum_l \Psi_l(r) = \sum_l f_l^{A,B}(r) u_{l, k_0}^{A,B}(r),
$$

where $f_l^{A,B}(r)$ are slowly-varying envelope functions . "Slowly-varying" implies:

$$
\left|\partial_z^2 f_l^{A,B}(z)\right| \ll \left|\partial_z u_{l k_0}^{A,B}(z)\right|.
$$

Assuming identical Bloch functions in materials $A$ and $B$ ($u_{n, k_0}^A = u_{n, k_0}^B$), this approximation is justified as Kane energy $E_p$ is similar in both.

---
## 2.3 One-Band Model: Ben-Daniel Duke

Focusing on one band, we neglect the kinetic energy and enforce Bastard's boundary conditions :

- Continuity of $\Psi$,
- Continuity of $\frac{1}{m(z)} \partial_z \Psi$.

These conditions ensure conservation of probability current. The resulting Schrödinger-like equation is:

$$
\left(-\frac{\hbar^2}{2} \partial_z \frac{1}{m(z)} \partial_z + V_c(z)\right) \chi(z) = \epsilon \chi(z).
$$

This model works well for isolated bands, like the heavy-hole band. Material effects are condensed into $m^*(\epsilon, z)$, $P_{cv}$, and band offsets.

---
## 2.4 Two-Band Model

Including one effective valence band and one conduction band, the equation becomes:

$$
\left(-\frac{\hbar^2}{2} \partial_z \frac{1}{m(E, z)} \partial_z + V_c(z)\right) f_c(z) = \epsilon f_c(z),
$$

where $m(E, z)$ accounts for non-parabolicity. Assuming $V_c(z)$ is constant over a distance $L$, solutions are plane waves with wavevector $k(E, z)$.

>[!info] Image

At higher energies, the single-band model breaks down as non-parabolicity dominates.

---
## 2.5 The Full Model

For nonzero in-plane momentum ($k_\parallel \neq 0$), the wavevector couples states across different bands, requiring at least a 6 × 6 matrix for valence bands. Confinement potential lifts degeneracy between light and heavy holes due to different masses, leading to distinct confinement energies. The in-plane dispersion is highly non-parabolic.

---
## 2.6 Temperature Dependence of the Band Gap

The conduction and valence bands shift with temperature due to:

1. Lattice dilation : Temperature-dependent changes in lattice constants.
2. Electron-lattice interaction : Affects the bandgap directly.

The bandgap decreases with temperature approximately as:

$$
E_g(T) \sim
\begin{cases}
T^2 & \text{for } T \ll \theta, \\
T & \text{for } T \gg \theta,
\end{cases}
$$

where $\theta$ is the Debye temperature.

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
# 5 Detectors

Detectors measure the response to incoming radiation, characterized by metrics like responsivity and detectivity .

- Responsivity ($R$): Measures how much current or voltage is produced per unit power hitting the detector:
  $$
  R = \frac{e}{\hbar \omega} \eta_{\text{phot}},
  $$
  in units of $\frac{\text{A}}{\text{W}}$ or $\frac{\text{V}}{\text{W}}$, where $\eta_{\text{phot}}$ is the quantum efficiency.

- Detectivity ($D^*$): Indicates the sensitivity of a detector, normalized for area $A$ and bandwidth $\Delta f$:
  $$
  D^* = \frac{\sqrt{A \cdot \Delta f}}{\text{NEP}},
  $$
  where NEP (Noise Equivalent Power) represents the optical power required to achieve a signal-to-noise ratio (SNR) of 1.

---
## 5.1 Noise

The signal-to-noise ratio (SNR) is:

$$
\frac{S}{N} = \frac{i_s}{i_N},
$$

where $i_s$ is the signal current and $i_N$ is the noise current. 

Types of noise:
1. Shot noise : Due to the fundamental randomness of photocurrent.
2. Photon noise : Related to the photon source's nature.
3. Background noise : Primarily from black-body radiation.
4. Detector noise : Includes all other sources.

- Dark current : Current present without photoexcitation, caused by thermal excitation.
- Noise-equivalent-temperature-difference (NETD): The temperature difference required for the background to produce the measured RMS signal.

---
## 5.2 Black-Body Radiation

Black-body radiation is the primary source of background noise:

>[!info] Image

At room temperature, it peaks in the mid-infrared (MIR) range.

---
## 5.3 Bolometer

A bolometer absorbs incoming radiation, causing a temperature rise in the absorber above the thermal reservoir:

$$
T_{\text{bolo}} = T_0 + \frac{P_{\text{opt}}}{G} \left(1 - e^{-t \frac{G}{C}}\right),
$$

where:
- $G$: Thermal conductivity.
- $C$: Heat capacity.

Smaller $G$ and $C$ improve sensitivity. For a harmonic signal, the response is:

$$
|\Delta T(\omega)| = \frac{P}{\sqrt{G^2 + \omega^2 C^2}}.
$$

>[!info] Image

Bolometers work best at low temperatures, where background radiation is minimal. Hot-electron bolometers (HEBs) :
- Operate at cryogenic temperatures.
- Achieve high sensitivity due to changes in resistance from absorbed power.
- Cover a wide range of frequencies and respond rapidly.

---
## 5.4 Photoconductors

Photons generate a current by exciting charge carriers. 

- Operate below 4 K to suppress thermal excitations.
- For short wavelengths , intrinsic semiconductors are used.
- For long wavelengths (THz) , extrinsic semiconductors with donor states are utilized to match the photon energy.

---

## 5.5 Pneumatic Detector: Golay Cell

The Golay cell uses acoustic readout. Absorption heats a gas, causing expansion:

>[!info] Image

The expansion deforms a reflective membrane, altering the signal. 
- Advantages : Room-temperature operation, high sensitivity, and flat response.
- Disadvantages : Slow response.

---
## 5.6 Electro-Optic Sampling

This method measures time-dependent amplitudes using:
- An ultrafast laser.
- The Pockels effect , where the refractive index depends on voltage.
- A nonlinear crystal for pump-probe experiments.

---
## 5.7 Grating Spectrometer

>[!info] Image

A grating spectrometer separates light into its constituent wavelengths. 

- Limited sensitivity due to slit-based operation.
- High resolution requires narrow slits, as $\Delta \lambda / \lambda \sim 1/N$ for $N$ grating lines.

---
## 5.8 FTIR (Fourier Transform Infrared)

FTIR spectrometers analyze spectra using interferometric techniques:

>[!info] Image

---
## 5.9 Lock-In Amplifier

A lock-in amplifier extracts weak signals in noisy environments by mixing the signal:

$$
V(t) \cdot V_R(t) = \frac{V_0}{2} \left(\cos\phi - \cos(2\omega_R t + \phi)\right).
$$

A low-pass filter removes high-frequency components, leaving a DC signal.

---
## 5.10 Quantum Well Infrared Photodetector (QWIP)

A QWIP is an artificial photoconductor with $N_w$ quantum wells. Using the slowly-varying envelope approximation, the energy levels are designed to match low-energy photons:

$$
\hbar \omega = E_2 - E_1 \quad (3-20 \, \mu\text{m}).
$$

Design features:
- Thick barriers eliminate tunnel coupling.
- Bias applied for probabilistic trapping and emission.
- Responsivity depends on escape efficiency , not absorption.

Responsivity:

$$
R = \frac{q_0}{\hbar \omega} \eta g_{\text{photo}} \sim \frac{1}{N_w},
$$

where $g_{\text{photo}}$ is the photoconductive gain:

$$
g_{\text{photo}} = \frac{p_e}{p_c N_w}.
$$

- High absorption does not guarantee high responsivity; efficient escape is key.
- Experiments show absorption increases with $N_w$, but photocurrent remains independent.

---
## 5.11 The Blip Condition

The BLIP temperature is when the dark current equals background photon noise. Maximizing $T_{\text{Blip}}$ without significantly reducing $D^*$ is desirable.

Key points:
- Total current: $I_{\text{tot}} = I_{\text{dark}} + I_{\text{phot}}$.
- $T_{\text{Blip}}$ decreases with increasing detection wavelength due to lower photon energy.

---
## 5.12 Two-Photon QWIP

Two-photon processes involve a non-linear response :

>[!info] Image

Applications include interferometric autocorrelation of ultrashort pulses. The non-linear response enables detection at low powers.

---
## 5.13 Quantum Cascade Detector (QCD)

QCDs are photovoltaic detectors:
- Operate without applied bias, resulting in low dark current.
- Chirping creates an effective electric field for cascading.

Transport occurs via tunneling. 

Challenges:
- Johnson noise is high at room temperature due to low resistance:
  $$
  i_{\text{Johnson}} \sim \frac{1}{\sqrt{R}}.
  $$

Solution:
- Diagonal transitions improve resistance and reduce noise, but lower overlap.
- Deeper wells (e.g., using different semiconductors) allow higher frequencies.

QCDs are fast and tunable for various wavelengths.

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
<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="200" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1" id="svg6" sodipodi:docname="tree-svgrepo-com.svg" inkscape:version="1.2.2 (b0a8486541, 2022-12-01)">  <defs id="defs10">    <linearGradient inkscape:collect="always" id="linearGradient1672">      <stop style="stop-color:#824522;stop-opacity:1;" offset="0" id="stop1668"/>      <stop style="stop-color:#c46d00;stop-opacity:1;" offset="1" id="stop1670"/>    </linearGradient>    <linearGradient inkscape:collect="always" id="linearGradient882">      <stop style="stop-color:#ffe400;stop-opacity:1;" offset="0" id="stop878"/>      <stop style="stop-color:#ff6d00;stop-opacity:1;" offset="1" id="stop880"/>    </linearGradient>    <linearGradient inkscape:collect="always" xlink:href="#linearGradient882" id="linearGradient884" x1="128.59801" y1="205.97394" x2="869.52509" y2="404.38843" gradientUnits="userSpaceOnUse"/>    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1672" id="linearGradient1674" x1="536.1637" y1="568.41846" x2="536.1637" y2="978.35699" gradientUnits="userSpaceOnUse"/>  </defs>  <sodipodi:namedview id="namedview8" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="false" inkscape:zoom="1.07" inkscape:cx="400.46729" inkscape:cy="400" inkscape:window-width="1920" inkscape:window-height="1052" inkscape:window-x="960" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="svg6"/>  <path d="M220.046 177.591c3.094 12.374 3.094 17.015 12.374 27.069 4.64 5.414 10.054 10.054 23.975 14.694 20.108 6.187 27.069-5.414 30.162-9.281l7.734 1.547c3.094 1.547 5.414 3.094 5.414 3.094l0.773-3.867-5.414-0.773c-3.867-1.547-6.96-3.094-6.96-3.094s4.64-15.468-6.187-27.842c-26.295-29.389-68.832-12.374-69.605-10.827l5.414 3.094 2.32 6.187zM564.203 285.866c-1.547 0.773 2.32 4.64 0 10.827-0.773 3.094-4.64 6.96-6.96 9.281-16.241 14.694-23.975 19.335-30.936 42.536-3.867 12.374-6.96 23.975-1.547 48.723 7.734 35.576 31.709 37.123 40.216 37.896 1.547 0 3.867 6.96 4.64 12.374 0.773 6.187 0 11.601 0 11.601s3.094 3.867 6.187-2.32c0-0.773-2.32-6.187-3.094-9.281-0.773-6.96-0.773-13.148-0.773-13.148s27.069-6.187 36.349-33.256c22.428-64.965-40.216-116.782-44.083-115.235zM461.343 171.404c1.547 0 3.867 6.96 4.64 12.374 0.773 6.187 0 11.601 0 11.601s3.094 3.867 6.187-2.32c0-0.773-2.32-6.187-3.094-9.281-0.773-6.96-0.773-13.148-0.773-13.148s27.069-5.414 37.123-33.256c21.655-65.738-40.99-117.555-44.083-116.008-1.547 0.773 2.32 4.64 0 10.827-0.773 3.094-4.64 6.96-6.96 9.281-16.241 14.694-23.975 19.335-30.936 42.536-3.867 12.374-6.96 23.975-1.547 48.723 6.96 36.349 30.936 37.123 39.443 38.669zM868.145 361.658c-0.773-0.773-3.094 3.867-8.507 4.64l-10.054-1.547c-18.561-6.187-25.522-10.054-46.403-5.414-10.827 2.32-21.655 5.414-37.896 19.335-24.748 20.881-14.694 40.216-12.374 47.177 0.773 1.547-3.867 6.187-7.734 8.507-4.64 3.867-8.507 4.64-8.507 4.64s-1.547 4.64 3.867 3.867l6.187-6.187c4.64-3.867 10.054-6.187 10.054-6.187s16.241 18.561 40.99 13.921c60.324-10.827 73.472-80.432 70.378-82.753zM495.372 175.271c-3.867 7.734-6.96 16.241-6.187 33.256 1.547 25.522 18.561 28.615 23.975 30.162 0.773 0 1.547 5.414 1.547 9.281 0 4.64-1.547 7.734-1.547 7.734s1.547 3.094 4.64-0.773l-1.547-6.96c0-4.64 0.773-9.281 0.773-9.281s19.335-1.547 28.615-19.335c21.655-43.31-16.241-84.299-18.561-84.299-0.773 0 0.773 3.094-0.773 7.734l-6.187 5.414c-12.374 9.281-17.788 12.374-24.748 27.069zM640.769 226.315l-3.867 7.734c1.547 5.414 4.64 2.32 4.64 2.32s0-4.64 1.547-10.054c1.547-4.64 3.867-10.054 5.414-10.054 6.96 0 28.615 2.32 40.216-27.842 7.734-20.881 6.187-31.709 4.64-42.536-3.094-20.881-9.281-26.295-21.655-40.99l-4.64-8.507c-0.773-6.187 3.094-9.281 1.547-10.054-3.094-1.547-64.191 34.802-53.364 94.353 4.64 25.522 27.842 34.029 27.842 34.029s-0.773 5.414-2.32 11.601zM381.684 553.458c-4.64-2.32-9.281-6.187-9.281-7.734 1.547-6.96 8.507-27.842-19.335-44.857-18.561-11.601-29.389-13.148-40.216-13.921-20.881-1.547-27.069 3.094-44.857 12.374l-10.054 3.094c-6.187-0.773-8.507-4.64-9.281-3.867-2.32 2.32 20.881 69.605 81.206 71.925 25.522 0.773 38.669-20.108 38.669-20.108s5.414 1.547 10.827 4.64l6.96 5.414c6.187 0 3.867-3.867 3.867-3.867s-3.867-0.773-8.507-3.094zM783.846 337.683c14.694-11.601 19.335-19.335 23.202-28.615 6.96-16.241 5.414-22.428 3.094-39.443v-8.507c2.32-4.64 6.187-5.414 5.414-6.187-1.547-2.32-61.871-3.867-81.206 44.083-8.507 20.108 4.64 37.123 4.64 37.123s-3.094 3.867-6.96 6.96l-6.187 3.867c-1.547 4.64 2.32 3.867 2.32 3.867s2.32-3.094 5.414-6.187l8.507-4.64c5.414 2.32 20.108 13.921 41.763-2.32zM497.692 459.878s1.547 3.094 3.094 7.734l0.773 6.187 3.867-0.773s-1.547-2.32-3.094-6.187l-0.773-7.734c3.867-2.32 17.015-9.281 11.601-30.936-3.867-14.694-8.507-20.108-13.921-25.522-10.054-10.054-14.694-10.827-27.842-14.694l-6.187-3.094-3.094-6.187c-2.32 0-22.428 44.083 6.96 72.699 12.374 12.374 28.615 8.507 28.615 8.507zM210.765 302.88c16.241 6.96 29.389-3.094 29.389-3.094l5.414 5.414 3.094 5.414c3.867 1.547 3.094-1.547 3.094-1.547l-5.414-4.64-3.867-6.96c2.32-3.867 11.601-15.468-0.773-32.482-8.507-11.601-15.468-15.468-22.428-18.561-13.148-6.187-17.788-4.64-30.936-3.094l-6.96-0.773c-2.32-1.547-3.094-4.64-3.867-4.64-2.32 1.547-3.867 49.497 33.256 64.965zM260.262 464.518s4.64 1.547 8.507 3.867l5.414 4.64c4.64 0 3.094-3.094 3.094-3.094s-3.867-0.773-7.734-2.32c-3.867-1.547-7.734-4.64-6.96-6.187 0.773-5.414 6.187-22.428-15.468-35.576-14.694-9.281-23.975-10.054-32.482-10.827-17.015-0.773-21.655 3.094-36.349 10.054l-7.734 2.32c-4.64 0-6.96-3.867-7.734-3.094-1.547 2.32 17.015 56.457 66.511 57.231 20.881-0.773 30.936-17.015 30.936-17.015zM373.176 195.379c-12.374-7.734-17.015-6.96-30.162-6.96l-6.96-1.547c-3.094-2.32-3.094-5.414-4.64-5.414-2.32 0.773-10.054 47.95 25.522 68.832 14.694 8.507 29.389 0.773 29.389 0.773s3.094 3.094 4.64 6.187l2.32 5.414c3.867 1.547 3.094-1.547 3.094-1.547l-3.867-4.64-3.094-7.734c3.094-3.867 13.921-13.921 3.094-32.482-6.96-13.148-13.148-17.015-19.335-20.881zM511.613 502.414l-5.414-4.64c-1.547-3.867 0-6.187-1.547-6.187-2.32 0-32.482 37.123-11.601 71.925 8.507 14.694 25.522 14.694 25.522 14.694l1.547 7.734-0.773 6.187c2.32 3.094 3.867 0.773 3.867 0.773l-1.547-6.187c0-3.094 0-7.734 0.773-7.734 4.64-1.547 18.561-5.414 18.561-27.069 0-14.694-3.094-21.655-6.96-27.842-6.187-13.148-10.827-15.468-22.428-21.655zM568.844 263.437s-0.773 3.867-2.32 7.734l-3.867 4.64c0.773 3.867 3.094 2.32 3.094 2.32s0-3.094 1.547-6.187l4.64-6.187c4.64 0.773 18.561 3.867 29.389-15.468 6.96-13.148 6.96-20.108 6.96-27.842 0-13.921-3.867-18.561-10.827-29.389l-2.32-6.187c0-3.867 2.32-5.414 1.547-6.187-1.547-1.547-45.63 17.788-43.31 58.778 0.773 16.241 15.468 23.975 15.468 23.975zM647.729 354.697s-0.773 3.867-3.094 7.734l-3.867 4.64c0 3.867 3.094 2.32 3.094 2.32s0.773-3.094 2.32-6.187l4.64-6.187c4.64 0.773 18.561 4.64 29.389-14.694 6.96-13.148 7.734-20.108 7.734-27.842 0-13.921-3.094-18.561-10.054-29.389l-2.32-6.187c0-3.867 3.094-5.414 2.32-6.187-1.547-1.547-46.403 16.241-45.63 57.231 1.547 16.241 15.468 24.748 15.468 24.748zM378.59 309.067l-3.094-6.187c-2.32 0-19.335 44.857 11.601 71.925 13.148 11.601 28.615 6.187 28.615 6.187s2.32 3.094 3.867 6.96l1.547 6.187 3.867-0.773s-2.32-2.32-3.094-6.187l-1.547-7.734c3.867-3.094 16.241-10.827 9.281-31.709-4.64-13.921-10.054-19.335-15.468-24.748-10.054-10.054-15.468-10.054-28.615-13.148l-6.96-0.773zM266.449 411.928c5.414 11.601 11.601 22.428 32.482 36.349 30.162 20.881 48.723 4.64 54.911 0 1.547-0.773 7.734 2.32 11.601 6.187 4.64 3.867 7.734 8.507 7.734 8.507s5.414 0.773 3.094-5.414l-8.507-4.64c-5.414-3.867-10.054-9.281-10.054-9.281s15.468-23.202 3.094-49.497c-28.615-62.644-109.048-56.457-111.368-53.364-0.773 1.547 4.64 2.32 7.734 7.734 1.547 3.094 1.547 7.734 1.547 11.601-1.547 21.655-3.094 30.162 7.734 51.817zM340.694 280.452c-14.694-44.083-70.378-45.63-71.925-43.31-0.773 0.773 3.094 1.547 4.64 6.187v7.734c-2.32 14.694-4.64 20.108 0.773 35.576 3.094 7.734 6.187 15.468 19.335 27.069 18.561 16.241 32.482 6.96 37.123 3.867l7.734 4.64 4.64 6.187s3.867 0.773 2.32-3.867l-5.414-3.867c-3.094-3.094-6.187-6.96-6.187-6.96s13.148-14.694 6.96-33.256zM761.417 170.631c-0.773 0-0.773 3.094-3.867 6.187l-7.734 2.32c-14.694 2.32-20.881 2.32-33.256 12.374-6.96 5.414-13.148 10.827-19.335 27.069-9.281 23.202 3.867 32.482 8.507 36.349 0.773 0.773-0.773 5.414-2.32 8.507-1.547 3.867-4.64 6.187-4.64 6.187s0 3.867 3.867 0.773l1.547-6.187c2.32-4.64 4.64-7.734 4.64-7.734s18.561 7.734 34.029-4.64c38.669-27.842 21.655-80.432 18.561-81.206zM324.453 127.321c2.32 8.507 4.64 16.241 16.241 28.615 17.015 17.788 31.709 9.281 36.349 7.734l6.96 5.414 3.867 6.187s3.094 1.547 2.32-3.094l-5.414-4.64c-3.094-3.867-5.414-7.734-5.414-7.734s14.694-13.921 10.054-33.256c-10.827-45.63-65.738-51.817-67.285-49.497-0.773 0.773 3.094 2.32 3.867 6.187l-0.773 7.734c-2.32 15.468-4.64 20.881-0.773 36.349zM213.085 388.726c0.773-0.773 5.414 0.773 8.507 2.32 3.867 1.547 6.187 4.64 6.187 4.64s3.867 0 0.773-3.867l-6.187-2.32-7.734-4.64s7.734-18.561-3.867-34.029c-27.842-37.896-80.432-22.428-81.206-19.335 0 0.773 3.094 0.773 6.187 3.867l2.32 7.734c1.547 14.694 1.547 20.881 11.601 33.256 5.414 6.96 10.827 13.148 26.295 19.335 23.202 10.054 33.256-3.094 37.123-6.96zM501.559 305.2c-1.547-17.015-6.187-23.975-10.827-30.936-9.281-13.148-14.694-15.468-28.615-21.655l-6.187-4.64c-2.32-3.867-0.773-6.96-2.32-6.96-2.32 0-34.029 45.63-6.187 83.526 11.601 16.241 31.709 13.921 31.709 13.921s1.547 3.867 2.32 8.507v6.96c3.094 3.867 3.867 0 3.867 0s-1.547-3.094-2.32-6.96c-0.773-3.867-0.773-8.507 0.773-9.281 4.64-2.32 20.108-7.734 17.788-32.482zM405.659 420.435c-0.773 0.773 2.32 3.094 1.547 7.734l-3.094 6.96c-8.507 12.374-13.148 16.241-13.921 32.482-0.773 8.507-0.773 17.015 6.187 32.482 10.054 22.428 26.295 19.335 31.709 19.335 0.773 0 3.867 3.867 4.64 7.734 1.547 3.867 1.547 7.734 1.547 7.734s3.094 2.32 3.867-2.32l-3.094-6.187c-1.547-4.64-2.32-8.507-2.32-8.507s17.788-7.734 20.108-27.842c5.414-47.177-44.857-71.152-47.177-69.605zM694.906 370.165l-3.867 6.96-6.96 3.094c-14.694 3.094-20.108 3.867-32.482 15.468-6.187 6.187-11.601 12.374-17.015 27.842-6.96 23.975 6.96 32.482 11.601 35.576 0.773 0.773 0 5.414-1.547 9.281s-3.867 6.96-3.867 6.96 0.773 3.867 3.867 0.773l1.547-6.96c1.547-4.64 3.867-8.507 3.867-8.507s19.335 6.187 33.256-7.734c35.576-31.709 14.694-82.753 11.601-82.753zM575.804 133.508c0.773 0 1.547 5.414 1.547 9.281s-1.547 7.734-1.547 7.734 1.547 3.094 3.867-0.773l-0.773-6.96c0-4.64 1.547-9.281 1.547-9.281s20.108 0 30.162-17.015c23.975-40.216-10.827-82.753-13.921-82.753-0.773 0 0.773 3.094-1.547 7.734l-6.187 4.64c-13.148 7.734-18.561 10.054-26.295 23.975-3.867 7.734-7.734 14.694-7.734 31.709 0 26.295 15.468 30.162 20.881 31.709z" fill="#148d13" id="path2" style="fill-opacity:1;fill:url(#linearGradient884);stroke:#fffefe;stroke-opacity:1;stroke-width:1.92;stroke-dasharray:none"/>  <path d="M650.050 620.743c-155.451 192.574-73.472 341.838-46.403 352.665 3.094 1.547-122.969 4.64-121.422 3.867 58.778-35.576-64.191-318.636-87.393-367.36-9.281-19.335 9.281 2.32 43.31-10.827 27.069-10.827 19.335-40.99 35.576-34.029 12.374 5.414-3.867 50.27 21.655 91.26 4.64 7.734 71.925 9.281 73.472-129.156 0.773-62.644 28.615 6.96 55.684 17.788s35.576 6.96 91.26-69.605c5.414-9.281 47.177 5.414-65.738 145.397z" fill="#824522" id="path4" style="stroke-width:1.92;stroke-dasharray:none;stroke:#ffffff;stroke-opacity:1;fill-opacity:1;fill:url(#linearGradient1674)"/></svg>