---
{"dg-publish":true,"permalink":"/notes/intersubband-optoelectronics/1-intersubband-transitions/","hide":"true","updated":"2025-02-07T10:57:49.256+01:00"}
---

Jump back to ==[[Notes/Intersubband Optoelectronics/Intersubband Optoelectronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Intersubband Optoelectronics/1 Intersubband Transitions#1.1 Semi-classical Approach and Effective Mass Approximation\|1.1 Semi-classical Approach and Effective Mass Approximation]]
- [[Notes/Intersubband Optoelectronics/1 Intersubband Transitions#1.2 Bloch Theorem\|1.2 Bloch Theorem]]
- [[Notes/Intersubband Optoelectronics/1 Intersubband Transitions#1.3 Phonons\|1.3 Phonons]]
- [[Notes/Intersubband Optoelectronics/1 Intersubband Transitions#1.4 Quantum Well\|1.4 Quantum Well]]
- [[Notes/Intersubband Optoelectronics/1 Intersubband Transitions#1.5 Artificial Superlattice\|1.5 Artificial Superlattice]]
- [[Notes/Intersubband Optoelectronics/1 Intersubband Transitions#1.6 Bloch Oscillation\|1.6 Bloch Oscillation]]

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