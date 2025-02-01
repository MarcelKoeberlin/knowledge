---
{"dg-publish":true,"permalink":"/notes/solid-state-theory/9-identical-quantum-particles-formalism-of-second-quantisation/","hide":"true","updated":"2025-02-01T21:15:26.865+01:00"}
---

Jump back to [[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation#9.1 Many-Body Wave Functions and Particle Statistics\|9.1 Many-Body Wave Functions and Particle Statistics]]
- [[Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation#9.2 Independent, Indistinguishable Particles\|9.2 Independent, Indistinguishable Particles]]
- [[Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation#9.3 Second Quantisation Formalism\|9.3 Second Quantisation Formalism]]
- [[Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation#9.4 Observables in Second Quantisation\|9.4 Observables in Second Quantisation]]
- [[Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation#9.5 Equation of Motion\|9.5 Equation of Motion]]
- [[Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation#9.6 Correlation Functions\|9.6 Correlation Functions]]
- [[Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation#9.7 Selected Applications\|9.7 Selected Applications]]

---
# 9 Identical Quantum Particles - Formalism of Second Quantisation
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=185&selection=2,0,4,12|•]]

This chapter gives an introduction to the formalism of second quantisation which is a convenient technical tool discussing many-body quantum systems. It is indispensable in quantum field theory as well as in solid state physics. We distinguish between Fermions (half-integer spins) and Bosons (integer spins) which behave quite differently, as we have seen in the previous chapter. This behaviour is implemented in their many-body wave functions. While in the previous chapter we could circumvent to deal with this aspect as we considered independent indistinguishable quantum particles, it is unavoidable to implement a more careful analysis once interactions between the particles appear.

---
## 9.1 Many-Body Wave Functions and Particle Statistics
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=185&selection=19,0,21,48|•]]

The Hamiltonian describing the dynamics of a systems of many identical quantum particles must be invariant under exchange (permutation) of particle degrees of freedom (coordinate, momentum, spin etc). The identical quantum particles are indistinguishable, since in quantum mechanics it is impossible to follow the trajectories of particles under general conditions, unlike in classical mechanics. Permutations play indeed an important role in characterising quantum particles. We introduce the many-body wave function of $N$ particles,
$$
\begin{align*}
\psi\left(\boldsymbol{r}_{1}, s_{1} ; \boldsymbol{r}_{2}, s_{2} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right)
\end{align*}
$$
where each particle is labeled by the coordinate $\boldsymbol{r}$ and spin $s$. In the following we will use for this the short-hand notation $\psi(1, \ldots, N)$. Analogously we define many-body operators,
$$
\begin{align*}
\hat{A}(1, \ldots, N)=A\left(\hat{\boldsymbol{r}}_{1}, \hat{\boldsymbol{p}}_{1}, \hat{\boldsymbol{S}}_{1} ; \ldots ; \hat{\boldsymbol{r}}_{N}, \hat{\boldsymbol{p}}_{N}, \hat{\boldsymbol{S}}_{N}\right)
\end{align*}
$$
with $\hat{\boldsymbol{r}}_{j}, \hat{\boldsymbol{p}}_{j}$ and $\hat{\boldsymbol{S}}_{j}$ being the operators for position, momentum and spin of particle $j$. Note that the Hamiltonian $\mathcal{H}$ belongs to these operators too.
We introduce the transposition (exchange) operator $\hat{P}_{i j}$ which is an element of the permutation group of $N$ elements and exchanges the particles $i$ and $j(1 \leq i, j \leq N)$,
$$
\begin{align*}
\begin{aligned}
& \hat{P}_{i j} \psi(1, \ldots, i, \ldots, j, \ldots, N)=\psi(1, \ldots, j, \ldots, i, \ldots, N) \\
& \hat{P}_{i j} \hat{A}(1, \ldots, i, \ldots, j, \ldots, N)=\hat{A}(1, \ldots, j, \ldots, i, \ldots, N)
\end{aligned}
\end{align*}
$$

Note that $\left(\hat{P}_{i j}\right)^{-1}=\hat{P}_{i j}$. As it is invariant under particle exchange, the Hamiltonian commutes with $\hat{P}_{i j}$,
$$
\begin{align*}
\left[\mathcal{H}, \hat{P}_{i j}\right]=0
\end{align*}
$$
and, consequently, any combination of several transpositions, i.e. all elements of the permutation group $S_{N}$, commute with $\mathcal{H}$. Hence, eigenstates of $\mathcal{H}$ have the property
$$
\begin{align*}
\mathcal{H}|\psi\rangle=E|\psi\rangle \quad \Rightarrow \quad \mathcal{H} \hat{P}_{i j}|\psi\rangle=\hat{P}_{i j} \mathcal{H}|\psi\rangle=E \hat{P}_{i j}|\psi\rangle,
\end{align*}
$$
where we define the wave function as
$$
\begin{align*}
\psi(1, \ldots, N)=\langle 1, \ldots, N \mid \psi\rangle .
\end{align*}
$$

We distinguish now between Fermions and Bosons through their behaviour under transpositions $\hat{P}_{i j}$,
$$
\begin{align*}
\psi(1, \ldots, i, \ldots, j, \ldots, N)= \begin{cases}+\psi(1, \ldots, j, \ldots, i, \ldots, N) & \text { Bosons } \\ -\psi(1, \ldots, j, \ldots, i, \ldots, N) & \text { Fermions }\end{cases}
\end{align*}
$$

This means that bosonic wave functions are completely symmetric under exchange of particles, while Fermionic wave functions are completely antisymmetric. Note that this property is valid also for composite particles. Any particle composed of an even number of particles would be a Boson, e.g. ${ }^{4} \mathrm{He}$ which contains 2 protons +2 neutrons +2 electrons $=6$ Fermions, as exchange two such particles leaves the sign of wave function unchanged. In the same way a particle with an odd number of Fermions is a Fermions, e.g. ${ }^{3}$He with 2 protons +1 neutron +2 electrons $=5$ Fermions. Note that the antisymmetric wave functions prevents two Fermions from having the same quantum numbers. If ( $\boldsymbol{r}_{i}, s_{i}$ ) and $\left(\boldsymbol{r}_{j}, s_{j}\right)$ are identical, then we find
$$
\begin{align*}
\psi(1, \ldots, i, \ldots, i, \ldots, N)=-\psi(1, \ldots, i, \ldots, i, \ldots, N)=0
\end{align*}
$$
which implies the Pauli exclusion principle.

---
## 9.2 Independent, Indistinguishable Particles
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=186&selection=160,0,162,40|•]]

We consider $N$ identical particles in a potential $V$ which are not interacting among each other. The Hamiltonian is then given by
$$
\begin{align*}
\mathcal{H}=\sum_{i=1}^{N} \mathcal{H}_{i} \quad \text { with } \quad \mathcal{H}_{i}=\frac{\hat{\boldsymbol{p}}_{i}^{2}}{2 m}+V\left(\hat{\boldsymbol{r}}_{i}\right) .
\end{align*}
$$

The states of each particle form an independent Hilbert space $\left\{\psi_{\nu}\right\}$ and we can find the stationary states
$$
\begin{align*}
\mathcal{H}_{i} \psi_{\nu}\left(\boldsymbol{r}_{i}, s_{i}\right)=\epsilon_{\nu} \psi_{\nu}\left(\boldsymbol{r}_{i}, s_{i}\right) .
\end{align*}
$$

These single-particle wave functions are renormalised, i.e.
$$
\begin{align*}
\sum_{s} \int d^{3} r\left|\psi_{\nu}(\boldsymbol{r}, s)\right|^{2}=1
\end{align*}
$$

We may now construct a many-body wave function as a product wave function with the corresponding exchange property.
For Bosons we write
$$
\begin{align*}
\left\langle\boldsymbol{r}_{1}, s_{1} ; \ldots, \boldsymbol{r}_{N}, s_{N} \mid \Psi_{B}\right\rangle=\Psi_{B}(1, \ldots, N)=\sum_{\hat{P} \in S_{N}} \hat{P} \psi_{\nu_{1}}\left(\boldsymbol{r}_{1}, s_{1}\right) \cdots \psi_{\nu_{N}}\left(\boldsymbol{r}_{N}, s_{N}\right)
\end{align*}
$$
and for Fermions
$$
\begin{align*}
\left\langle\boldsymbol{r}_{1}, s_{1} ; \ldots, \boldsymbol{r}_{N}, s_{N} \mid \Psi_{F}\right\rangle=\Psi_{F}(1, \ldots, N)=\sum_{\hat{P} \in S_{N}} \operatorname{sgn}(\hat{P}) \hat{P} \psi_{\nu_{1}}\left(\boldsymbol{r}_{1}, s_{1}\right) \cdots, \psi_{\nu_{N}}\left(\boldsymbol{r}_{N}, s_{N}\right)
\end{align*}
$$

where the operator $\hat{P}$ permutes the state indices $\nu_{i}$ of the wave functions and $\operatorname{sgn}(\hat{P})$ is the sign of the permutation $\hat{P}$ which is $+1(-1)$ if $\hat{P}$ is composed of an even (odd) number of transpositions. Interestingly the Fermionic wave function can be represented as a determinant, the so-called Slater determinant,

$$
\begin{align*}
\Psi_{F}(1, \ldots, N)=\operatorname{Det}\left[\begin{array}{ccc}
\psi_{\mu_{1}}(1) & \cdots & \psi_{\mu_{1}}(N) \\
\vdots & & \vdots \\
\psi_{\mu_{N}}(1) & \cdots & \psi_{\mu_{N}}(N)
\end{array}\right]
\end{align*}
$$

Obviously the determinant vanishes if two rows or columns are identical, enforcing the Pauli principle. These wave functions are not renormalised so that
$$
\begin{align*}
\begin{aligned}
& \left\langle\Psi_{B} \mid \Psi_{B}\right\rangle=N!n_{\nu_{1}}!\cdots n_{\nu_{N}}!, \\
& \left\langle\Psi_{F} \mid \Psi_{F}\right\rangle=N!,
\end{aligned}
\end{align*}
$$
where $n_{\nu_{j}}$ denotes the number of particles in the stationary single particle state labeled by $\nu_{j}$. For Fermions it is $n_{\nu_{j}}=0,1$ only.

---
## 9.3 Second Quantisation Formalism
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=187&selection=169,0,171,29|•]]

It is in principle possible to investigate many-body states using many-body wave functions. However, we will introduce here a formalism which is in many respects much more convenient and efficient. It is based on the operators which "create" or "annihilate" particles and act on states in the Fock space $\mathcal{F}$ which is an extended space of states combining Hilbert space $\mathcal{Q}_{n}$ of different particle numbers $n$,
$$
\begin{align*}
\mathcal{F}=\bigoplus_{n=0}^{\infty} \mathcal{Q}_{n} .
\end{align*}
$$

Note that the name "second quantisation" does not imply a new quantum mechanics.
We can express a many-body state of independent particles in the particle occupation number representations,
$$
\begin{align*}
\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots\right\rangle
\end{align*}
$$
which is a state in $\mathcal{F}$ whose particle number is given by $N=n_{\nu_{1}}+n_{\nu_{2}}+\cdots$.

### 9.3.1 Creation- and Annihilation Operators

We define operators $\hat{a}_{\nu}$ and $\hat{a}_{\nu}^{\dagger}$ which connect Hilbertspaces of different particle number,
$$
\begin{align*}
\hat{a}_{\nu}: \mathcal{Q}_{n} \rightarrow \mathcal{Q}_{n-1} \quad \text { and } \quad \hat{a}_{\nu}^{\dagger}: \mathcal{Q}_{n} \rightarrow \mathcal{Q}_{n+1} .
\end{align*}
$$

The first we call annihilation and the second creation operator whose action is best understood in the particle number or occupation representation.

Bosons: Let us first consider Bosons which, for simplicity, do not possess a spin. The two operators have the following property,
$$
\begin{align*}
\begin{aligned}
& \hat{a}_{\nu}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=\sqrt{n_{\nu}}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}-1, \ldots\right\rangle, \\
& \hat{a}_{\nu}^{\dagger}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=\sqrt{n_{\nu}+1}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}+1, \ldots\right\rangle,
\end{aligned}
\end{align*}
$$
and
$$
\begin{align*}
\begin{aligned}
& \left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right| \hat{a}_{\nu}^{\dagger}=\sqrt{n_{\nu}}\left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}-1, \ldots\right|, \\
& \left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right| \hat{a}_{\nu}=\sqrt{n_{\nu}+1}\left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}+1, \ldots\right| .
\end{aligned}
\end{align*}
$$

It is obvious that
$$
\begin{align*}
\hat{a}_{\nu}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}=0, \ldots\right\rangle=0 \quad \text { and } \quad\left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}=0, \ldots\right| \hat{a}_{\nu}^{\dagger}=0
\end{align*}
$$

The operators satisfy the following commutation relations,
$$
\begin{align*}
\left[\hat{a}_{\nu}, \hat{a}_{\nu^{\prime}}^{\dagger}\right]=\delta_{\nu \nu^{\prime}} \quad \text { and } \quad\left[\hat{a}_{\nu}, \hat{a}_{\nu^{\prime}}\right]=\left[\hat{a}_{\nu}^{\dagger}, \hat{a}_{\nu^{\prime}}^{\dagger}\right]=0
\end{align*}
$$

Note that these relations correspond to those of the lowering and raising operators of a harmonic oscillator. Indeed we have seen previously that the excitation spectrum of a harmonic oscillator obeys bosonic statistics.
The creation operators can also be used to construct a state from the vacuum, denoted as $|0\rangle$, where there are no particles, such that $\hat{a}_{\nu}|0\rangle=0$. A general state in occupation number representation can be written as,
$$
\begin{align*}
\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=\frac{\cdots\left(\hat{a}_{\nu}^{\dagger}\right)^{n_{\nu}} \cdots\left(\hat{a}_{\nu_{2}}^{\dagger}\right)^{n_{\nu_{2}}}\left(\hat{a}_{\nu_{1}}^{\dagger}\right)^{n_{\nu_{1}}}}{\sqrt{n_{\nu_{1}}!n_{\nu_{2}}!\cdots}}|0\rangle
\end{align*}
$$

The number operator is defined as
$$
\begin{align*}
\hat{n}_{\nu}=\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu} \quad \text { with } \quad \hat{n}_{\nu}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=n_{\nu}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle
\end{align*}
$$
and the total number of particles is obtained through the operator
$$
\begin{align*}
\widehat{N}=\sum_{i} \hat{n}_{\nu_{i}}
\end{align*}
$$

Knowing the spectrum of the Hamiltonian of independent particles, we may express the Hamiltonian as
$$
\begin{align*}
\mathcal{H}=\sum_{\nu} \epsilon_{\nu} \hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}=\sum_{\nu} \epsilon_{\nu} \hat{n}_{\nu}
\end{align*}
$$

Fermions: Now we turn to Fermions with spin $1 / 2$ (half-integer spin). Again the single-particle state shall be labelled by $\nu$ including the spin index for $\uparrow$ and $\downarrow$. Analogously to the case of Bosons we introduce operators $\hat{a}_{\nu}^{\dagger}$ and $\hat{a}_{\nu}$ which obey anti-commutation rules,
$$
\begin{align*}
\left\{\hat{a}_{\nu}, \hat{a}_{\nu^{\prime}}^{\dagger}\right\}=\delta_{\nu \nu^{\prime}} \quad \text { and } \quad\left\{\hat{a}_{\nu}, \hat{a}_{\nu^{\prime}}\right\}=\left\{\hat{a}_{\nu}^{\dagger}, \hat{a}_{\nu^{\prime}}^{\dagger}\right\}=0
\end{align*}
$$
where $\{\ldots\}$ is defined as $\{\hat{A}, \hat{B}\}=\hat{A} \hat{B}+\hat{B} \hat{A}$. In particular this implies that
$$
\begin{align*}
\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}^{\dagger}=0 \quad \text { and } \quad \hat{a}_{\nu} \hat{a}_{\nu}=0
\end{align*}
$$
such that $n_{\nu}=0,1$, i.e. each single-particle state labelled by $\nu$ can be occupied by at most one particle, because
$$
\begin{align*}
\hat{a}_{\nu}^{\dagger}\left|\ldots, n_{\nu}=1, \ldots\right\rangle=\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}^{\dagger}\left|\ldots, n_{\nu}=0, \ldots\right\rangle=0
\end{align*}
$$

A general state may be written as
$$
\begin{align*}
\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=\cdots\left(\hat{a}_{\nu}^{\dagger}\right)^{n_{\nu}} \cdots\left(\hat{a}_{\nu_{2}}^{\dagger}\right)^{n_{\nu_{2}}}\left(\hat{a}_{\nu_{1}}^{\dagger}\right)^{n_{\nu_{1}}} \quad|0\rangle
\end{align*}
$$
which restricts $n_{\nu}$ to 0 or 1 . The order of the creation operators plays an important role as the exchange of two operators yields a minus sign. We consider an example here,
$$
\begin{align*}
\left|n_{1}, n_{2}, n_{3}, n_{4}\right\rangle=|1,1,1,1\rangle=\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle
\end{align*}
$$

Removing now one particle yields
$$
\begin{align*}
\begin{aligned}
\hat{a}_{2}|1,1,1,1\rangle & =\hat{a}_{2}\left[\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}\right]|0\rangle=\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{2} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle=\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger}\left(1-\hat{a}_{2}^{\dagger} \hat{a}_{2}\right) \hat{a}_{1}^{\dagger}|0\rangle \\
& =\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle=|1,0,1,1\rangle
\end{aligned}
\end{align*}
$$
and now analogously
$$
\begin{align*}
\begin{aligned}
\hat{a}_{3}|1,1,1,1\rangle & =\hat{a}_{3}\left[\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}\right]|0\rangle=-\hat{a}_{4}^{\dagger} \hat{a}_{3} \hat{a}_{3}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle=-\hat{a}_{4}^{\dagger}\left(1-\hat{a}_{3}^{\dagger} \hat{a}_{3}\right) \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle \\
& =-\hat{a}_{4}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle=-|1,1,0,1\rangle
\end{aligned}
\end{align*}
$$

Obviously, the order of the operators is important and should not be ignored when dealing with Fermions.

### 9.3.2 Field Operators

We consider now independent free particles whose states are characterised by momentum $\boldsymbol{p}=\hbar \boldsymbol{k}$ and spin $s$ with an energy $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$. The wave function has a plane wave shape,
$$
\begin{align*}
\psi_{\boldsymbol{k}}(\boldsymbol{r})=\frac{1}{\sqrt{V}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}} \quad \text { with } \quad \boldsymbol{k}=\frac{2 \pi}{L}\left(n_{x}, n_{y}, n_{z}\right)
\end{align*}
$$
where we used periodic boundary conditions in a cube of edge length $L$ (volume $V=L^{3}$ ). On this basis we write field operators
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}} \hat{a}_{\boldsymbol{k} s} \quad \text { and } \quad \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}} \hat{a}_{\boldsymbol{k} s}^{\dagger}
\end{align*}
$$
and the inverse,
$$
\begin{align*}
\hat{a}_{\boldsymbol{k}}^{\dagger}=\int d^{3} r \frac{e^{i \boldsymbol{k} \cdot \boldsymbol{r}}}{\sqrt{V}} \widehat{\Psi}^{\dagger}(\boldsymbol{r}) \quad \text { und } \quad \hat{a}_{\boldsymbol{k}}=\int d^{3} r \frac{e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}}{\sqrt{V}} \widehat{\Psi}(\boldsymbol{r})
\end{align*}
$$

Also these operators $\widehat{\Psi}_{s}(\boldsymbol{r})$ and $\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})$ act as annihilation or creation operators, respectively, in the sense,
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r})^{\dagger}|0\rangle=|\boldsymbol{r}, s\rangle \quad \text { and } \quad \phi_{s}(\boldsymbol{r})=\langle\boldsymbol{r}, s \mid \phi\rangle=\langle 0| \widehat{\Psi}_{s}(\boldsymbol{r})|\phi\rangle
\end{align*}
$$

Moreover we have the condition
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r})|0\rangle=0 \quad \text { and } \quad\langle 0| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})=0
\end{align*}
$$

The field operators also satisfy (anti-)commuation relations,
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \mp \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}-i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}} \underbrace{\left(\hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \mp \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right)}_{=\delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{s s^{\prime}}}=\delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \delta_{s s^{\prime}}
\end{align*}
$$
and analogously
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \mp \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})=0 \quad \text { and } \quad \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \mp \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})=0
\end{align*}
$$
for Bosons ( - ) and Fermions ( + ). Taking these relations it becomes also clear that
$$
\begin{align*}
\begin{aligned}
\left\langle\boldsymbol{r}^{\prime}, s^{\prime} \mid \boldsymbol{r}, s\right\rangle & =\langle 0| \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})^{\dagger}|0\rangle \\
& =\langle 0| \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \delta_{s s^{\prime}}|0\rangle \mp \underbrace{\langle 0| \widehat{\Psi}_{s}(\boldsymbol{r})^{\dagger} \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right)|0\rangle}_{=0}=\delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \delta_{s s^{\prime}}
\end{aligned}
\end{align*}
$$

Applying a field-operator to a $N$-particle state yields,
$$
\begin{align*}
\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})\left|\boldsymbol{r}_{1}, s_{1} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right\rangle=\sqrt{N+1}\left|\boldsymbol{r}_{1}, s_{1} ; \ldots ; \boldsymbol{r}_{N}, s_{N} ; \boldsymbol{r}, s\right\rangle
\end{align*}
$$
such that
$$
\begin{align*}
\left|\boldsymbol{r}_{1}, s_{1} ; \boldsymbol{r}_{2}, s_{2} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right\rangle=\frac{1}{\sqrt{N!}} \widehat{\Psi}_{s_{N}}^{\dagger}\left(\boldsymbol{r}_{N}\right) \cdots \widehat{\Psi}_{s_{1}}^{\dagger}\left(\boldsymbol{r}_{1}\right)|0\rangle
\end{align*}
$$

Note that particle statistics leads to the following relation under particle exchange,
$$
\begin{align*}
\left|\boldsymbol{r}_{1}, s_{1} ; \boldsymbol{r}_{2}, s_{2} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right\rangle= \pm\left|\boldsymbol{r}_{2}, s_{2} ; \boldsymbol{r}_{1}, s_{1} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right\rangle
\end{align*}
$$
where + is for Bosons and - is for Fermions. The renormalisation of the real space states have to be understood within the projection to occupation number states, yielding many-body wave functions analogous to those introduced Eqs. (9.12, 9.13),
$$
\begin{align*}
\Phi(1, \ldots, N)=\left\langle\boldsymbol{r}_{1}, s_{1} ; \ldots, \boldsymbol{r}_{N}, s_{N} \mid n_{\boldsymbol{k}_{1}, s_{1}^{\prime}}, n_{\boldsymbol{k}_{2}, s_{2}^{\prime}}, \ldots\right\rangle .
\end{align*}
$$

Note that $N=\sum_{\boldsymbol{k}, s} n_{\boldsymbol{k}, s^{\prime}}$. Taking care of the symmetry / antisymmetry of the many-body wave function we recover the renormalisation behaviour in Eqs.(9.42, 9.43).

---
## 9.4 Observables in Second Quantisation
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=190&selection=191,0,193,34|•]]

It is possible to express Hermitian operators in the second quantisation language. We will show this explicitly for the density operator by calculating matrix elements. The particle density operator is given by
$$
\begin{align*}
\widehat{\rho}(\boldsymbol{r})=\sum_{i=1}^{N} \delta\left(\boldsymbol{r}-\widehat{\boldsymbol{r}}_{i}\right) .
\end{align*}
$$

Now we take two states $|\phi\rangle,\left|\phi^{\prime}\right\rangle \in \mathcal{Q}_{N}$ with the fixed particle number $N$ and examine the matrix element
$$
\begin{align*}
\begin{aligned}
\left\langle\phi^{\prime}\right| \widehat{\rho}(\boldsymbol{r})|\phi\rangle & =\int d^{3} r_{1} \cdots d^{3} r_{N}\left\langle\phi^{\prime} \mid \boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N}\right| \sum_{i} \delta\left(\boldsymbol{r}-\widehat{\boldsymbol{r}}_{i}\right)|\phi\rangle \\
& =\int d^{3} r_{1} \cdots d^{3} r_{N} \sum_{i} \delta\left(\boldsymbol{r}-\boldsymbol{r}_{i}\right)\left\langle\phi^{\prime} \mid \boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N} \mid \phi\right\rangle \\
& =N \int d^{3} r_{1} \cdots d^{3} r_{N-1}\left\langle\phi^{\prime} \mid \boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}, \boldsymbol{r}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}, \boldsymbol{r} \mid \phi\right\rangle,
\end{aligned}
\end{align*}
$$
where we suppress spin indices for the time being. Here we used in the last equality that we can relabel the coordinate variables and permute the particles. Since we have the product of two states under the same perturbation, Fermion sign changes do not appear and $N$ identical integrals follow. We claim now that the density operator can also be written as
$$
\begin{align*}
\widehat{\rho}(\boldsymbol{r})=\widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}(\boldsymbol{r})
\end{align*}
$$
which leads to
$$
\begin{align*}
\begin{aligned}
\left\langle\phi^{\prime}\right| \widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}(\boldsymbol{r})|\phi\rangle & =\int d^{3} r_{1} \cdots d^{3} r_{N-1}\left\langle\phi^{\prime}\right| \widehat{\Psi}^{\dagger}(\boldsymbol{r})\left|\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}\right| \widehat{\Psi}(\boldsymbol{r})|\phi\rangle \\
& =N \int d^{3} r_{1} \cdots d^{3} r_{N-1}\left\langle\phi^{\prime} \mid \boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}, \boldsymbol{r}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}, \boldsymbol{r} \mid \phi\right\rangle
\end{aligned}
\end{align*}
$$
which is obviously identical to before.
The kinetic energy can be expressed as
$$
\begin{align*}
\mathcal{H}_{\text {kin }}=\sum_{\boldsymbol{k}} \frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}=\sum_{\boldsymbol{k}} \frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m} \hat{n}_{\boldsymbol{k}}
\end{align*}
$$
which, may also be expressed in field operator language as
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{k i n} & =\frac{1}{2 m V} \sum_{\boldsymbol{k}} \int d^{3} r d^{3} r^{\prime}\left(\hbar \boldsymbol{\nabla} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}\right)\left(\hbar \boldsymbol{\nabla}^{\prime} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}^{\prime}}\right) \widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}\left(\boldsymbol{r}^{\prime}\right) \\
& =\frac{\hbar^{2}}{2 m} \int d^{3} r\left(\boldsymbol{\nabla} \widehat{\Psi}^{\dagger}(\boldsymbol{r})\right) \cdot(\boldsymbol{\nabla} \widehat{\Psi}(\boldsymbol{r}))
\end{aligned}
\end{align*}
$$

Note the formal similarity with the expectation value of the kinetic energy using single-particle wave functions, $\frac{\hbar^{2}}{2 m} \int d^{3} r \boldsymbol{\nabla} \varphi^{*}(\boldsymbol{r}) \cdot \nabla \varphi(\boldsymbol{r})$. In an analogous way we represent the potential energy,
$$
\begin{align*}
\widehat{H}_{p o t}=\int d^{3} r U(\boldsymbol{r}) \widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}(\boldsymbol{r})=\int d^{3} r U(\boldsymbol{r}) \widehat{\rho}(\boldsymbol{r}) .
\end{align*}
$$

Beside the particle density operator $\hat{\rho}(\boldsymbol{r})$ also the current density operators can be expressed by field operators,
$$
\begin{align*}
\widehat{\boldsymbol{J}}(\boldsymbol{r})=\frac{\hbar}{2 m i}\left(\widehat{\Psi}^{\dagger}(\boldsymbol{r})(\boldsymbol{\nabla} \widehat{\Psi}(\boldsymbol{r}))-\left(\boldsymbol{\nabla} \widehat{\Psi}^{\dagger}(\boldsymbol{r})\right) \widehat{\Psi}(\boldsymbol{r})\right)
\end{align*}
$$
and the spin density operator for spin- $1 / 2$ Fermions (writing spin indices again),
$$
\begin{align*}
\widehat{\boldsymbol{S}}(\boldsymbol{r})=\frac{\hbar}{2} \sum_{s s^{\prime}} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \boldsymbol{\sigma}_{s s^{\prime}} \widehat{\Psi}_{s^{\prime}}(\boldsymbol{r})
\end{align*}
$$
where $\boldsymbol{\sigma}_{s s^{\prime}}$ are the Pauli matrices. In momentum space the operators read,
$$
\begin{align*}
\begin{aligned}
\hat{\rho}_{\boldsymbol{q}} & =\int d^{3} r e^{-i \boldsymbol{q} \cdot \boldsymbol{r}} \widehat{\rho}(\boldsymbol{r})=\sum_{\boldsymbol{k}, s} \hat{a}_{\boldsymbol{k}, s}^{\dagger} \hat{a}_{\boldsymbol{k}+\boldsymbol{q}, s} \\
\widehat{\boldsymbol{S}}_{\boldsymbol{q}} & =\frac{\hbar}{2} \sum_{\boldsymbol{k}, s, s^{\prime}} \hat{a}_{\boldsymbol{k}, s}^{\dagger} \boldsymbol{\sigma}_{s s^{\prime}} \hat{a}_{\boldsymbol{k}+\boldsymbol{q}, s^{\prime}} \\
\widehat{\boldsymbol{J}}_{\boldsymbol{q}} & =\frac{\hbar}{m} \sum_{\boldsymbol{k}, s}\left(\boldsymbol{k}+\frac{\boldsymbol{q}}{2}\right) \hat{a}_{\boldsymbol{k}, s}^{\dagger} \hat{a}_{\boldsymbol{k}+\boldsymbol{q}, s}
\end{aligned}
\end{align*}
$$

Finally we turn to the genuine many-body feature of particle-particle interaction,
$$
\begin{align*}
\widehat{H}_{\text {int }}=\frac{1}{2} \sum_{s, s^{\prime}} \int d^{3} r d^{3} r^{\prime} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) V\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{2 V} \sum_{\boldsymbol{k}, \boldsymbol{k} \boldsymbol{k}^{\prime} \boldsymbol{q}, s^{\prime}} \sum_{\boldsymbol{q}} \hat{a}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}, s^{\prime}}^{\dagger} \hat{\boldsymbol{a}}_{\boldsymbol{k}^{\prime}, s^{\prime}} \hat{\boldsymbol{a}}_{\boldsymbol{k}, s},
\end{align*}
$$
where the factor $1 / 2$ corrects for double counting and
$$
\begin{align*}
V(\boldsymbol{r})=\frac{1}{V} \sum_{\boldsymbol{q}} V_{\boldsymbol{q}} e^{i \boldsymbol{q} \cdot \boldsymbol{r}}
\end{align*}
$$

Note that the momentum space representation has the simple straightforward interpretation that two particles with momentum $\hbar \boldsymbol{k}$ and $\hbar \boldsymbol{k}^{\prime}$ are scattered into states with momentum $\hbar(\boldsymbol{k}+\boldsymbol{q})$ and $\hbar\left(\boldsymbol{k}^{\prime}-\boldsymbol{q}\right)$, respectively, by transferring the momentum $\hbar \boldsymbol{q}$.

---
## 9.5 Equation of Motion
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=191&selection=594,0,596,18|•]]

For simplicity we discuss here a system of independent free quantum particles described by the Hamiltonian
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}
\end{align*}
$$
where we suppress the spin index. We turn now to the Heisenberg representation of time dependent operators,
$$
\begin{align*}
\hat{a}_{\boldsymbol{k}}(t)=e^{i \mathcal{H} t / \hbar} \hat{a}_{\boldsymbol{k}} e^{-i \mathcal{H} t / \hbar} .
\end{align*}
$$

Thus, we formulate the equation of motion for this operator,
$$
\begin{align*}
\begin{aligned}
i \hbar \frac{d}{d t} \hat{a}_{\boldsymbol{k}} & =-\left[\mathcal{H}, \hat{a}_{\boldsymbol{k}}\right]=-\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}}\left[\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime}}, \hat{a}_{\boldsymbol{k}}\right] \\
& =-\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}}\left\{\begin{array}{l}
\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger} \underbrace{\left[\hat{a}_{\boldsymbol{k}^{\prime}}, \hat{a}_{\boldsymbol{k}}\right]}_{=0}+\underbrace{\left[\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger}, \hat{a}_{\boldsymbol{k}}\right]}_{=-\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}} \hat{a}_{\boldsymbol{k}^{\prime}} \quad \text { for Bosons } \\
\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger} \underbrace{\left\{\hat{a}_{\boldsymbol{k}^{\prime}}, \hat{a}_{\boldsymbol{k}}\right\}}_{=0}-\underbrace{\left\{\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger}, \hat{a}_{\boldsymbol{k}}\right\}}_{=\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}} \hat{a}_{\boldsymbol{k}^{\prime}} \text { for Fermions } \\
\end{array}\right. \\
& =\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}} \hat{a}_{\boldsymbol{k}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}=\epsilon_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}},
\end{aligned}
\end{align*}
$$
and analogously
$$
\begin{align*}
i \hbar \frac{d}{d t} \hat{a}_{\boldsymbol{k}}^{\dagger}=-\left[\mathcal{H}, \hat{a}_{\boldsymbol{k}}^{\dagger}\right]=-\epsilon_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}}^{\dagger}
\end{align*}
$$

A further important relation in the context of statistical physics is
$$
\begin{align*}
e^{-\beta \mathcal{H}} \hat{a}_{\boldsymbol{k}}^{\dagger} e^{\beta \mathcal{H}}=e^{-\beta \epsilon_{\boldsymbol{k}}} \hat{a}_{\boldsymbol{k}}^{\dagger}
\end{align*}
$$

Analogously we find for the number operator $\widehat{N}=\sum_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}$,
$$
\begin{align*}
e^{\beta \mu \widehat{N}} \hat{a}_{\boldsymbol{k}}^{\dagger} e^{-\beta \mu \widehat{N}}=e^{\beta \mu} \hat{a}_{\boldsymbol{k}}^{\dagger}
\end{align*}
$$

Both relations are easily proven by examining the action of this operator on a eigenstate of the Hamiltonian $|\Phi\rangle=\left|n_{\boldsymbol{k}_{1}}, \ldots, n_{\boldsymbol{k}}, \ldots\right\rangle$,
$$
\begin{align*}
\begin{aligned}
e^{-\beta \mathcal{H}} \hat{a}_{\boldsymbol{k}}^{\dagger} e^{\beta \mathcal{H}}|\Phi\rangle & =e^{\beta E} e^{-\beta \mathcal{H}} \hat{a}_{\boldsymbol{k}}^{\dagger}|\Phi\rangle=\sqrt{n_{\boldsymbol{k}}+1} e^{\beta E} e^{-\beta \mathcal{H}}\left|n_{\boldsymbol{k}_{1}}, \ldots, n_{\boldsymbol{k}}+1, \ldots\right\rangle \\
& =\sqrt{n_{\boldsymbol{k}}+1} e^{\beta\left(E-E^{\prime}\right)}\left|n_{\boldsymbol{k}_{1}}, \ldots, n_{\boldsymbol{k}}+1, \ldots\right\rangle=e^{\beta\left(E-E^{\prime}\right)} \hat{a}_{\boldsymbol{k}}^{\dagger}|\Phi\rangle
\end{aligned}
\end{align*}
$$
where $E=\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}} n_{\boldsymbol{k}^{\prime}}$ and $E^{\prime}=\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}} n_{\boldsymbol{k}^{\prime}}+\epsilon_{\boldsymbol{k}}$ such that $E-E^{\prime}=-\epsilon_{\boldsymbol{k}}$. Note that for Fermions the operation of $\hat{a}_{\boldsymbol{k}}^{\dagger}$ on $|\Phi\rangle$ is only finite, if $n_{\boldsymbol{k}}=0$ otherwise we have a zero. Still the relation remains true for both types of quantum particles. 

**Fermi-Dirac and Bose-Einstein distribution**: Let us look at the thermal average,
$$
\begin{align*}
\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle=\left\langle\hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}\right\rangle=\frac{\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}\right\}}{\operatorname{tre} e^{-\beta \mathcal{H}^{\prime}}},
\end{align*}
$$
where we use the Hamiltonian $\mathcal{H}^{\prime}=\mathcal{H}-\mu \widehat{N}$. We can rearrange the numerator of (9.67) using Eqs.(9.64) and (9.65),
$$
\begin{align*}
\begin{aligned}
\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}\right\} & =\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}^{\dagger} e^{\beta \mathcal{H}^{\prime}} e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}\right\}=e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)} \operatorname{tr}\left\{\hat{a}_{\boldsymbol{k}}^{\dagger} e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}\right\} \\
& =e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)} \operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}}^{\dagger}\right\}=e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)} \operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}}\left[1 \pm \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}\right]\right\}
\end{aligned}
\end{align*}
$$
where ' + ' and ' - ' stand for Bosons and Fermions, respectively. Inserting this, we find,
$$
\begin{align*}
\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle=e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left(1 \pm\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle\right) \quad \Rightarrow \quad\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle= \begin{cases}\frac{1}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}-1} & \text { Bosons } \\ \frac{1}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}+1} & \text { Fermions }\end{cases}
\end{align*}
$$
which corresponds to the standard Bose-Einstein and Fermi-Dirac distribution.

---
## 9.6 Correlation Functions
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=193&selection=84,0,86,21|•]]

Independent classical particles do not have any correlation among each other. This is different for quantum particles. The second quantisation language is very suitable for the formulation of correlation functions and to show that Fermion and bose gases behave rather differently.

### 9.6.1 Fermions

First let us write the ground state of a free Fermi gas of spin- $1 / 2$ Fermions. Starting from the vacuum $|0\rangle$ we fill successively all low lying states with a Fermion of both spins $s$ until all Fermions are placed. This defines the Fermi sphere in $k$-space with the radius $k_{F}$, the Fermi wave vector. The ground state is then,
$$
\begin{align*}
\left|\Phi_{0}\right\rangle=\prod_{\boldsymbol{k}}^{|\boldsymbol{k}| \leq k_{F}} \prod_{s=\uparrow, \downarrow} \hat{a}_{\boldsymbol{k} s}^{\dagger}|0\rangle
\end{align*}
$$
and $n_{\boldsymbol{k}}=\left\langle\Phi_{0}\right| \hat{n}_{\boldsymbol{k}}\left|\Phi_{0}\right\rangle=\Theta\left(k_{F}-|\boldsymbol{k}|\right)$ is a step function with $\hat{n}_{\boldsymbol{k}}=\sum_{s} \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}$.
First we formulate the one-particle correlation function in real space using field operators, 
$$
\begin{align*}
\frac{n}{2} g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\left\langle\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}\left(\boldsymbol{r}^{\prime}\right)\right\rangle
\end{align*}
$$
which measure the probability amplitude to be able to insert a Fermion at place $\boldsymbol{r}$ after having removed one at $\boldsymbol{r}^{\prime}$ with the same spin $s$. We evaluate this expression by going to $k$-space,
$$
\begin{align*}
\frac{n}{2} g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}+i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}} \underbrace{\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle}_{=\left\langle\hat{n}_{\boldsymbol{k} s}\right\rangle \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}} .
\end{align*}
$$

At $T=0$ we obtain
$$
\begin{align*}
\begin{aligned}
\frac{n}{2} g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) & =\int_{|\boldsymbol{k}| \leq k_{F}} \frac{d^{3} k}{(2 \pi)^{3}} e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}=\frac{1}{(2 \pi)^{2}} \int_{0}^{k_{F}} d k k^{2} \int_{-1}^{+1} d \cos \theta e^{i k\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right| \cos \theta} \\
& =\frac{1}{2 \pi^{2}\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \int_{0}^{k_{F}} d k k \sin \left(k\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|\right)=\left.\frac{3 n}{2} \frac{\sin x-x \cos x}{x^{3}}\right|_{x=k_{F}\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|}
\end{aligned}
\end{align*}
$$

Note the limits: $g_{s}(\boldsymbol{r} \rightarrow 0)=1$ and $g_{s}(\boldsymbol{r} \rightarrow \infty)=0$ where $g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)$ corresponds to the overlap of the two states
$$
\begin{align*}
\sqrt{\frac{2}{n}} \widehat{\Psi}_{s}(\boldsymbol{r})\left|\Phi_{0}\right\rangle \quad \text { and } \quad \sqrt{\frac{2}{n}} \widehat{\Psi}_{s}\left(\boldsymbol{r}^{\prime}\right)\left|\Phi_{0}\right\rangle
\end{align*}
$$
Analogous results can be calculated for finite temperatures (here $T \gg T_{F}$ ), where for the "classical" limit an analytical result can be found based on the Maxwell-Boltzmann distribution:
$$
\begin{align*}
\left\langle\hat{n}_{\boldsymbol{k} s}\right\rangle=\frac{n}{2} \frac{(2 \pi)^{3}}{(\sqrt{\pi} A)^{3}} e^{-k^{2} / A^{2}} \quad \text { with } \quad A^{2}=\frac{2 m k_{B} T}{\hbar^{2}}=\frac{4 \pi}{\lambda^{2}}
\end{align*}
$$
leading to
$$
\begin{align*}
\frac{n}{2} g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{n}{2 \pi^{3 / 2} A^{3}} \int d^{3} k e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)} e^{-k^{2} / A^{2}}=\frac{n}{2} e^{-A^{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2} / 4}=\frac{n}{2} e^{-\pi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2} / \lambda^{2}}
\end{align*}
$$

Next we turn to the pair correlation function which we define as
$$
\begin{align*}
\left(\frac{n}{2}\right)^{2} g_{s s^{\prime}}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\left\langle\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})\right\rangle
\end{align*}
$$
being the probability to be able to pick two Fermions at the different places, $\boldsymbol{r}$ and $\boldsymbol{r}^{\prime}$, with the spins $s$ and $s^{\prime}$, respectively. Again we switch to the more convenient $k$-space,
$$
\begin{align*}
\left(\frac{n}{2}\right)^{2} g_{s s^{\prime}}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{1}{V^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}, \boldsymbol{q}^{\prime}} e^{-i\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{r}} e^{-i\left(\boldsymbol{q}-\boldsymbol{q}^{\prime}\right) \cdot \boldsymbol{r}^{\prime}}\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle
\end{align*}
$$

In order to evaluate the mean value $\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s^{\prime}}^{\dagger} \widehat{\boldsymbol{q}}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle$ we use the same technique as presented as earlier. Evaluation of $\left\langle\widehat{a}_{\boldsymbol{k s}}^{\dagger} \widehat{\boldsymbol{q}}_{s^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{\boldsymbol{k}}_{\boldsymbol{k}^{\prime} s}\right\rangle$: We separate the task into two cases:
- $s=s\prime$ 

$$
\begin{align*}
\begin{aligned}
\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle 
&= \frac{1}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{\boldsymbol{q}}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right] \\
&= \frac{1}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{k} s}^{\dagger} e^{\beta \mathcal{H}^{\prime}} e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right] \\
&= \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s} \widehat{a}_{\boldsymbol{k} s}^{\dagger}\right] \\
&= \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s}\left(\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}-\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right)\right] \\
&= \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s}\right] \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \\
&\quad - \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right] \\
&= e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \\
&\quad - \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger}\left(\delta_{\boldsymbol{q}^{\prime}, \boldsymbol{k}}-\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s}\right) \widehat{a}_{\boldsymbol{k}^{\prime} s}\right] \\
&= e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle\left(\delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}-\delta_{\boldsymbol{q}^{\prime}, \boldsymbol{k}} \delta_{\boldsymbol{q}, \boldsymbol{k}^{\prime}}\right) \\
&\quad + e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle.
\end{aligned}
\end{align*}
$$
From this we find
$$
\begin{align*}
\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle=\frac{1}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}+1}\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle\left(\delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}-\delta_{\boldsymbol{q}^{\prime}, \boldsymbol{k}} \delta_{\boldsymbol{q}, \boldsymbol{k}^{\prime}}\right)=\left\langle\widehat{n}_{\boldsymbol{k}, s}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle\left(\delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}-\delta_{\boldsymbol{q}^{\prime}, \boldsymbol{k}} \delta_{\boldsymbol{q}, \boldsymbol{k}^{\prime}}\right) .
\end{align*}
$$
- $s \neq s^{\prime}$ :
$$
\begin{align*}
\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle=e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\{\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}+\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle\right\}
\end{align*}
$$
analogous to case (1), such that
$$
\begin{align*}
\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle=\left\langle\widehat{n}_{\boldsymbol{k}, s}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}.
\end{align*}
$$

From this it follows straightforwardly for $s=s^{\prime}$,
$$
\begin{align*}
\left(\frac{n}{2}\right)^{2} g_{s s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{1}{V^{2}} \sum_{\boldsymbol{k}, \boldsymbol{q}}\left(1-e^{-i(\boldsymbol{k}-\boldsymbol{q}) \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}\right)\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q} s}\right\rangle=\left(\frac{n}{2}\right)^{2}\left[1-g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2}\right]
\end{align*}
$$
and we can write,
$$
\begin{align*}
g_{s s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)= \begin{cases}1-\left.\frac{9(\sin x-x \cos x)^{2}}{x^{6}}\right|_{x=k_{F}\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} & T=0 \\ 1-e^{-2 \pi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2} / \lambda^{2}} & T \gg T_{F}.\end{cases}
\end{align*}
$$

![Attachments/Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation/IMG-0201211526697.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/9%20Identical%20Quantum%20Particles%20-%20Formalism%20of%20Second%20Quantisation/IMG-0201211526697.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=195&rect=90,606,503,754|•]]

The case of $s \neq s^{\prime}$ leads to $g_{s s^{\prime}}(\boldsymbol{r})=1$, i.e. there is no correlation between $s=1 / 2$-Fermions of opposite spin. The probability to find another Fermion around the position of a Fermion at $\boldsymbol{r}$ corresponds to
$$
\begin{align*}
g(\boldsymbol{r})=\frac{1}{2}\left[g_{\uparrow \uparrow}(\boldsymbol{r})+g_{\uparrow \downarrow}(\boldsymbol{r})\right] .
\end{align*}
$$

The density depletion around such a Fermion is then,
$$
\begin{align*}
\begin{aligned}
n \int d^{3} r(g(\boldsymbol{r})-1) & =-\frac{n}{2} \int d^{3} r\left\{g_{s}(\boldsymbol{r})\right\}^{2}=-\frac{2}{n} \int d^{3} r \frac{1}{V^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle\left\langle\widehat{n}_{\boldsymbol{k}^{\prime} s}\right\rangle e^{i\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{r}} \\
& =-\frac{2}{n V} \sum_{\boldsymbol{k}}\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle^{2}= \begin{cases}-1 & T=0, \\
-\frac{\lambda^{3} n}{2^{5 / 2}} & T \gg T_{F} .\end{cases}
\end{aligned}
\end{align*}
$$
which means that the exchange hole expels one Fermion such that each Fermion "defends" a given volume against other Fermions of the same spin for $T=0$, while the exchange hole shrinks like $\lambda n^{3}$ for $T \gg T_{F}$.

### 9.6.2 Bosons

Analogous to the Fermions we consider first the single-particle correlation function for $s=0$ Bosons,
$$
\begin{align*}
g_{1}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\left\langle\widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}\left(\boldsymbol{r}^{\prime}\right)\right\rangle=\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}+i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}}\left\langle\widehat{a}_{\boldsymbol{k}}^{\dagger} \widehat{a}_{\boldsymbol{k}^{\prime}}\right\rangle=\frac{1}{V} \sum_{\boldsymbol{k}}\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)},
\end{align*}
$$
which in the limit $\boldsymbol{r}^{\prime} \rightarrow \boldsymbol{r}$ approaches the constant density $n$ and vanishes at very large distances. For $T=0$ we consider the groundstate, the Bose-Einstein condenstate, $\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle=N \delta_{\boldsymbol{k}, 0}$ and for $T \gg T_{c}$ we use the classical distribution where $T_{c}$ is the critical temperature for Bose-Einstein condensation.
$$
\begin{align*}
g_{1}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)= \begin{cases}n & T=0, \\ n e^{-\pi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) / \lambda^{2}} & T \gg T_{c} .\end{cases}
\end{align*}
$$

The pair correlation functions reads,
$$
\begin{align*}
\begin{aligned}
g_{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) & =\left\langle\widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}(\boldsymbol{r})\right\rangle \\
& =\frac{1}{V^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}, \boldsymbol{q}^{\prime}} e^{-i\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{r}-i\left(\boldsymbol{q}-\boldsymbol{q}^{\prime}\right) \cdot \boldsymbol{r}^{\prime}}\left\langle\widehat{a}_{\boldsymbol{k}}^{\dagger} \widehat{a}_{\boldsymbol{q}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime}}\right\rangle
\end{aligned}
\end{align*}
$$

Analogous to the Fermions we evaluate ${ }^{4}$
$$
\begin{align*}
\left\langle\widehat{a}_{\boldsymbol{k}}^{\dagger} \widehat{a}_{\boldsymbol{q}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime}}\right\rangle=\left(1-\delta_{\boldsymbol{k} \boldsymbol{q}}\right)\left\{\delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{\boldsymbol{q} \boldsymbol{q}^{\prime}}+\delta_{\boldsymbol{k} \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{q} \boldsymbol{k}^{\prime}}\right\}\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}}\right\rangle+\delta_{\boldsymbol{k} \boldsymbol{q}} \delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{\boldsymbol{q} \boldsymbol{q}^{\prime}}\left(\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\right)
\end{align*}
$$

This leads to
$$
\begin{align*}
\begin{aligned}
g_{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) & =\frac{1}{V^{2}}\left[\sum_{\boldsymbol{k}, \boldsymbol{q}}\left(1-\delta_{\boldsymbol{k} \boldsymbol{q}}\right)\left(1+e^{-i(\boldsymbol{k}-\boldsymbol{q}) \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}\right)\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}}\right\rangle+\sum_{\boldsymbol{k}}\left(\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\right)\right] \\
& \left.=\frac{1}{V^{2}}\left[\sum_{\boldsymbol{k}, \boldsymbol{q}}\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}}\right\rangle+\sum_{\boldsymbol{k}}\left\{\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle^{2}-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left(\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle+1\right)\right\}+\left|\sum_{\boldsymbol{k}} e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\right|^{2}\right]\right] \\
& =n^{2}+g_{1}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2}+\frac{1}{V^{2}} \sum_{\boldsymbol{k}}\left\{\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle^{2}-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left(\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle+1\right)\right\}
\end{aligned}
\end{align*}
$$

For $T=0$ with $\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle=N \delta_{\boldsymbol{k}, 0}\left(\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle=N^{2} \delta_{\boldsymbol{k}, 0}\right)$ we obtain
$$
\begin{align*}
g_{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=2 n^{2}-\frac{1}{V^{2}} N(N+1)=\frac{N(N-1)}{V^{2}},
\end{align*}
$$
so no correlation is observed. The probability to pick the first particle is $n=N / V$ and a second one $(N-1) / V(\approx n$ for large $N)$. For the high-temperature limit, $T \gg T_{c}$, the correlation function is given
$$
\begin{align*}
g_{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=n^{2}+g_{1}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2}=n^{2}\left(1+e^{-2 \pi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2} / \lambda^{2}}\right) .
\end{align*}
$$

The probability of finding two Bosons at the same position is twice as large as for long distances:

![Attachments/Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation/IMG-0201211526751.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/9%20Identical%20Quantum%20Particles%20-%20Formalism%20of%20Second%20Quantisation/IMG-0201211526751.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=197&rect=178,579,403,749|•]]

Thus, in contrast to Fermions, Bosons like to cluster together.
The radius of bunching of the Bosons in the limit $T \gg T_{c}$ is of order $\lambda$ and shrinks with increasing $T$ (classical limit).

---
## 9.7 Selected Applications
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=196&selection=699,0,701,21|•]]

We consider here three examples applying second quantisation to statistical physics systems.

### 9.7.1 Spin Susceptibility

We calculate the spin susceptibility of spin- $1 / 2$ Fermions using the fluctuation-dissipation relation.
$$
\begin{align*}
\chi=\frac{1}{V k_{B} T}\left\{\left\langle\hat{M}_{z}^{2}\right\rangle-\left\langle\hat{M}_{z}\right\rangle^{2}\right\}
\end{align*}
$$
where
$$
\begin{align*}
\hat{M}_{z}=\frac{g \mu_{B}}{\hbar} \int d^{3} r \widehat{S}_{z}(\boldsymbol{r})=\mu_{B} \sum_{\boldsymbol{k}} \sum_{s s^{\prime}} \hat{a}_{\boldsymbol{k} s}^{\dagger} \sigma_{s s^{\prime}}^{z} \hat{\boldsymbol{a}}_{\boldsymbol{k} s^{\prime}}=\mu_{B} \sum_{\boldsymbol{k}, \boldsymbol{s}} s \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}
\end{align*}
$$
using Sect.9.4. Moreover, $g=2$ and $s= \pm 1$. First we calculate the magnetisation in zero magnetic field,
$$
\begin{align*}
\left\langle\hat{M}_{z}\right\rangle=\mu_{B} \sum_{\boldsymbol{k}, \boldsymbol{s}} s\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle=\mu_{B} \sum_{\boldsymbol{k}, s} s n_{\boldsymbol{k}}=0 .
\end{align*}
$$

Now we turn to
$$
\begin{align*}
\left\langle\hat{M}_{z}^{2}\right\rangle=\mu_{B}^{2} \sum_{\boldsymbol{k}, s} \sum_{\boldsymbol{k}^{\prime}, s^{\prime}} s s^{\prime}\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{\boldsymbol{k}}^{\prime} s^{\prime}\right\rangle,
\end{align*}
$$
which we determine like in Sect.9.6.1,
$$
\begin{align*}
\begin{aligned}
& \left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}\right\rangle=\frac{1}{Z} \operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}\right\}=\frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}} \hat{a}_{\boldsymbol{k} s}^{\dagger}\right\} \\
& =\frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z}\left[\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k} \boldsymbol{s}} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger}\right\} \delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{s s^{\prime}}+\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k} \boldsymbol{s}} \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}^{\dagger} \hat{\boldsymbol{k}}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}\right\}\right] \\
& =e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\{\left(1-\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle\right) \delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{s s^{\prime}}+\left\langle\hat{a}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}\right\rangle\right\}-e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}^{\dagger} \hat{\boldsymbol{k}}_{\boldsymbol{\boldsymbol { k } ^ { \prime } \boldsymbol { s } ^ { \prime }}}\right\rangle
\end{aligned}
\end{align*}
$$
which leads straightforwardly to
$$
\begin{align*}
\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{\boldsymbol{k}}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{\boldsymbol{k}}^{\prime} \boldsymbol{s}^{\prime}\right\rangle=\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle\left(1-\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle\right) \delta_{\boldsymbol{k} \boldsymbol{k}}, \delta_{s s^{\prime}}+\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle\left\langle\hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{\boldsymbol{k}}^{\prime} \boldsymbol{s}^{\prime}\right\rangle .
\end{align*}
$$

We now insert this result and obtain
$$
\begin{align*}
\left\langle\hat{M}_{z}^{2}\right\rangle=2 \mu_{B}^{2} \sum_{\boldsymbol{k}}\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle\left(1-\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle\right)=2 \mu_{B}^{2} \sum_{\boldsymbol{k}} \frac{1}{4 \cosh ^{2}\left(\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right) / 2\right)},
\end{align*}
$$
where the second term cancels due to the spin summation. In the low-temperature limit this is confined to a narrow region $\left(\sim k_{B} T\right)$ around the Fermi energy, such that we approximate
$$
\begin{align*}
\left\langle\hat{M}_{z}^{2}\right\rangle \approx \mu_{B}^{2} V \int_{-\infty}^{+\infty} d \epsilon N\left(\epsilon_{F}\right) \frac{1}{4 \cosh ^{2}(\beta \epsilon / 2)}=V \mu_{B}^{2} k_{B} T N\left(\epsilon_{F}\right),
\end{align*}
$$
where the density of states is defined as
$$
\begin{align*}
N(\epsilon)=\frac{1}{V} \sum_{\boldsymbol{k}, s} \delta\left(\epsilon-\epsilon_{\boldsymbol{k}}\right)
\end{align*}
$$

Then the spin susceptibility is given as the Pauli susceptibility,
$$
\begin{align*}
\chi=\mu_{B}^{2} N\left(\epsilon_{F}\right)=\mu_{B}^{2} \frac{3 n}{2 \epsilon_{F}},
\end{align*}
$$
where the expression with the density of states at $\epsilon_{F}$ is general and the second equality is valid for free Fermions. The Pauli susceptibility is independent of temperature, because only $N\left(\epsilon_{F}\right) k_{B} T$ Fermions can be spin polarised (thermal softening of the Fermi sea). Thus, the factor $\left(k_{B} T\right)^{-1}$ is compensated by the shrinking density of polarisable spins as temperature decreases. 
The classical limit can be discussed using the Maxwell-Boltzmann distribution function,
$$
\begin{align*}
n_{\boldsymbol{k} s}=\frac{n \lambda^{3}}{2} e^{-k^{2} \lambda^{2} / 4 \pi}
\end{align*}
$$
with $\lambda$ as the thermal wavelength. Inserting, we obtain
$\left\langle\hat{M}_{z}^{2}\right\rangle=2 \mu_{B}^{2} V \int \frac{d^{3} k}{(2 \pi)^{3}} n_{\boldsymbol{k} s}\left(1-n_{\boldsymbol{k} s}\right)=2 \mu_{B}^{2} V \int \frac{d^{3} k}{(2 \pi)^{3}}\left\{\frac{n \lambda^{3}}{2} e^{-k^{2} \lambda^{2} / 4 \pi}-\frac{n^{2} \lambda^{6}}{4} e^{-k^{2} \lambda^{2} / 2 \pi}\right\}=\mu_{B}^{2} V n\left(1-\frac{\lambda^{3} n}{2^{5 / 2}}\right),$
which leads to the susceptibility found earlier.
$$
\begin{align*}
\chi=\frac{\mu_{B}^{2} n}{k_{B} T}\left(1-\frac{\lambda^{3} n}{2^{5 / 2}}\right)
\end{align*}
$$

The factor $1-n_{\boldsymbol{k} s}$ introduces the quantum correction in the second term.

### 9.7.2 Bose-Einstein Condensate and Coherent States

Our aim here is to characterise the Bose-Einstein condensate further beyond what we did in the last chapter. Here, we consider the concepts of both the off-diagonal long-range order and the order parameter for the condensate. We start with the discussion of the single-particle correlation function for a homogeneous gas of spin-0 Bosons in more detail than in Sect.9.6.2,
$$
\begin{align*}
g\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\left\langle\widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}\left(\boldsymbol{r}^{\prime}\right)\right\rangle=\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}\left\langle\hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime}}\right\rangle e^{i\left(\boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}-\boldsymbol{k} \cdot \boldsymbol{r}\right)}=\frac{1}{V} \sum_{\boldsymbol{k}}\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)},
\end{align*}
$$
where $\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle$ is the Bose-Einstein distribution. For independent free Bosons we may write
$$
\begin{align*}
g(\boldsymbol{R})=\frac{1}{V} \sum_{k} \frac{e^{-i \boldsymbol{k} \cdot \boldsymbol{R}}}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}-1},
\end{align*}
$$
with $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$ and $\boldsymbol{R}=\boldsymbol{r}-\boldsymbol{r}^{\prime}$. Let us look at the two limits $\boldsymbol{R} \rightarrow 0$ and $\boldsymbol{R} \rightarrow \infty$. For the first limit we may expand
$$
\begin{align*}
g(\boldsymbol{R})=\frac{1}{V} \sum_{\boldsymbol{k}} \frac{1-i \boldsymbol{k} \cdot \boldsymbol{R}-(\boldsymbol{k} \cdot \boldsymbol{R})^{2} / 2+\cdots}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}-1}=n-\frac{\boldsymbol{R}^{2}}{6}\left\langle\boldsymbol{k}^{2}\right\rangle+\cdots,
\end{align*}
$$
where $n=N / V$ is the particle density and
$$
\begin{align*}
\left\langle\boldsymbol{k}^{2}\right\rangle=\frac{2 m}{\hbar^{2}} \frac{U}{V}= \begin{cases}6 \pi n \lambda^{-2} & T \gg T_{c} \\ 3.08 \pi n \lambda^{-2}\left(T / T_{c}\right)^{3 / 2} & T<T_{c}\end{cases}
\end{align*}
$$

where $U$ is the internal energy of the Bose gas. We used the average for an isotropic momentum distribution function $\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle$ :
$$
\begin{align*}
\left\langle(\boldsymbol{R} \cdot \boldsymbol{k})^{2}\right\rangle=\sum_{j=x, y, z} R_{j}^{2}\left\langle k_{j}^{2}\right\rangle=\frac{\left\langle\boldsymbol{k}^{2}\right\rangle}{3}\left(R_{x}^{2}+R_{y}^{2}+R_{z}^{2}\right)=\frac{\left\langle\boldsymbol{k}^{2}\right\rangle}{3} \boldsymbol{R}^{2}
\end{align*}
$$
because $\left\langle k_{x}^{2}\right\rangle=\left\langle k_{y}^{2}\right\rangle=\left\langle k_{z}^{2}\right\rangle=\left\langle\boldsymbol{k}^{2}\right\rangle / 3$ and $\left\langle k_{x} k_{y}\right\rangle=\left\langle k_{y} k_{z}\right\rangle=\left\langle k_{z} k_{x}\right\rangle=0$.

The correlation falls off quadratically for finite, but small $\boldsymbol{R}(|\boldsymbol{R}| \ll \lambda)$. Note that the in the $T \rightarrow 0$ limit the correlation function does not drop in agreement. For the long-distance limit we note that only the small wave vectors contribute to the $\boldsymbol{k}$-sum so that we may expand the integrand in the following way $\left(\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right) \ll 1\right)$,
$$
\begin{align*}
g(\boldsymbol{R}) \approx \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{e^{-i \boldsymbol{k} \cdot \boldsymbol{R}}}{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}=\frac{2 m k_{B} T}{\hbar^{2}} \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{e^{-i \boldsymbol{k} \cdot \boldsymbol{R}}}{\boldsymbol{k}^{2}+k_{0}^{2}}
\end{align*}
$$
where $k_{0}^{2}=-\frac{2 m \mu}{\hbar^{2}}>0$. This form we know from the Yukawa potential,
$$
\begin{align*}
g(\boldsymbol{R}) \approx \frac{m k_{B} T}{(2 \pi)^{4} \hbar^{2}} \frac{e^{-k_{0}|\boldsymbol{R}|}}{|\boldsymbol{R}|}=\frac{e^{-k_{0}|\boldsymbol{R}|}}{(2 \pi)^{3} \lambda^{2}|\boldsymbol{R}|}
\end{align*}
$$

The single-particle correlation function decays exponentially for large distances:

![Attachments/Notes/Solid-State Theory/9 Identical Quantum Particles - Formalism of Second Quantisation/IMG-0201211526806.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/9%20Identical%20Quantum%20Particles%20-%20Formalism%20of%20Second%20Quantisation/IMG-0201211526806.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=199&rect=186,393,410,532|•]]

This behaviour is valid for $T>T_{c}$ where $\mu<0$. For $T<T_{c}$ the chemical potential lies at the lowest single-particle state, i.e. $\mu=0$ for free Bosons, such that $k_{0}=0$. For the long-distance behaviour we conclude that the correlation function goes to zero like $|\boldsymbol{R}|^{-1}$. However, this is not true, since our integral approach neglects the macroscopic occupation of the $\boldsymbol{k}=0$ state. Thus, we should use
$$
\begin{align*}
\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle=n_{0} \delta(\boldsymbol{k})+\frac{1}{(2 \pi)^{3}} \frac{1}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}-1}
\end{align*}
$$
such that for $|\boldsymbol{R}| \rightarrow \infty$,
$$
\begin{align*}
g(\boldsymbol{R})=n_{0}+\frac{1}{(2 \pi)^{3} \lambda^{2}|\boldsymbol{R}|}
\end{align*}
$$

The correlation function approaches a finite value on long distances in the presence of a BoseEinstein condensate.

**Bogolyubov Approximation:**

We consider this now from the view point of the field operator for free Bosons,
$$
\begin{align*}
\widehat{\Psi}(\boldsymbol{r})=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}=\frac{\hat{a}_{0}}{\sqrt{V}}+\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k} \neq 0} \hat{a}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}
\end{align*}
$$

The correlation function suggests the following approximation: $\hat{a}_{0} \rightarrow a_{0}=\sqrt{N_{0}}$. For a Bose-Einstein condensate we may replace the operator $\hat{a}_{0}$ simply by a complex number, such that
$$
\begin{align*}
\widehat{\Psi}(\boldsymbol{r}) \rightarrow \widehat{\Psi}(\boldsymbol{r})=\psi_{0}(\boldsymbol{r})+\delta \widehat{\Psi}(\boldsymbol{r}),
\end{align*}
$$
with $\psi_{0}(\boldsymbol{r})=\sqrt{n_{0}} e^{i \phi}$, where $\phi$ is an arbitrary phase and $n_{0}=N_{0} / V$. In a uniform system this phase does not affect the physical properties. This so-called Bogolyubov approximation is, of course, incompatible with the occupation number representation. On the other hand, it is possible for a condensate state whose particle number is not fixed. Indeed a state incorporating this property is a coherent state.

**Coherent State:**

We introduce a coherent state as an eigenstate of the annihilation operator $\hat{a}_{\nu}$ of a Bosonic state of energy $\epsilon_{\nu}$. Let us call this state $\left|\Psi_{\alpha}\right\rangle$ with the property,
$$
\begin{align*}
\hat{a}_{\nu}\left|\Psi_{\alpha}\right\rangle=\alpha\left|\Psi_{\alpha}\right\rangle
\end{align*}
$$
where $\alpha$ is a complex number. Such a state is given by
$$
\begin{align*}
\left|\Psi_{\alpha}\right\rangle=e^{-|\alpha|^{2} / 2} \sum_{N_{\nu}} \frac{\alpha^{N_{\nu}}}{\sqrt{N_{\nu}!}}\left|N_{\nu}\right\rangle ;
\end{align*}
$$
with $\hat{a}_{\nu}\left|N_{\nu}\right\rangle=\sqrt{N_{\nu}}\left|N_{\nu}-1\right\rangle$. The expectation value for $\hat{n}_{\nu}=\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}$ is
$$
\begin{align*}
\left\langle\hat{n}_{\nu}\right\rangle=\left\langle\Psi_{\alpha}\right| \hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}\left|\Psi_{\alpha}\right\rangle=\left\langle\Psi_{\alpha}\right| \alpha^{*} \alpha\left|\Psi_{\alpha}\right\rangle=\alpha^{*} \alpha=|\alpha|^{2}
\end{align*}
$$
and the variance is
$$
\begin{align*}
\left\langle\hat{n}_{\nu}^{2}\right\rangle-\left\langle\hat{n}_{\nu}\right\rangle^{2}=\left\langle\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu} \hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}\right\rangle-|\alpha|^{4}=\left\langle\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}\right\rangle+\left\langle\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}^{\dagger} \hat{a}_{\nu} \hat{a}_{\nu}\right\rangle-|\alpha|^{4}=|\alpha|^{2}+|\alpha|^{4}-|\alpha|^{4}=|\alpha|^{2}
\end{align*}
$$
such that
$$
\begin{align*}
\frac{\left\langle\hat{n}_{\nu}^{2}\right\rangle-\left\langle\hat{n}_{\nu}\right\rangle^{2}}{\left\langle\hat{n}_{\nu}\right\rangle^{2}}=\frac{1}{|\alpha|^{2}}=\frac{1}{\left\langle\hat{n}_{\nu}\right\rangle} .
\end{align*}
$$

Taking now the $\boldsymbol{k}=0$ state as coherent we identify
$$
\begin{align*}
\hat{a}_{0}|\Psi\rangle=\alpha_{0}|\Psi\rangle=\sqrt{N_{0}} e^{i \phi}|\Psi\rangle .
\end{align*}
$$

In this spirit we find that the mean value is
$$
\begin{align*}
\langle\widehat{\Psi}(\boldsymbol{r})\rangle=\psi_{0}(\boldsymbol{r}),
\end{align*}
$$
which does not vanish for the condensed state. Note, however, $\left\langle\hat{a}_{\boldsymbol{k}}\right\rangle=0$, if $\boldsymbol{k} \neq 0$. The finite value of $\left\langle\hat{a}_{0}\right\rangle$ requires states of different number of particles in the $\boldsymbol{k}=0$ state for the matrix elements making up this mean value. This is an element of spontaneous symmetry breaking. The condensate can be considered as a reservoir with on average $N_{0}$ particles ( $N_{0} \gg 1$ ), to which we can add or from which we can remove particles without changing the properties of the system. The coherent state satisfies this condition. We also can define an order parameter characterising the condensate, the condensate wavefunction,
$$
\begin{align*}
\psi_{0}(\boldsymbol{r})=\left|\psi_{0}(\boldsymbol{r})\right| e^{i \phi(\boldsymbol{r})}=\sqrt{n_{0}} e^{i \phi} .
\end{align*}
$$

Spontaneous symmetry breaking occurs via the (arbitrary) choice of the phase of the condensate wave function.
The number of particles and the phase $\phi$ are conjugate in the sense that a state with fixed particle number has no definite phase and a state with
fixed phase has no definite particle number. 
**Phase and number operator eigenstates**: The define the number operator and the phase operator and their corresponding eigenstates.
$$
\begin{align*}
\widehat{N}|N\rangle=N|N\rangle \quad \text { and } \quad e^{i \widehat{\phi}}|\phi\rangle=e^{i \phi}|\phi\rangle
\end{align*}
$$
where the two states are connected by the Fourier transform
$$
\begin{align*}
|\phi\rangle=\frac{1}{\sqrt{2 \pi}} \sum_{N=0}^{\infty} e^{i N \phi}|N\rangle \quad \text { with } \quad\langle N \mid \phi\rangle=\frac{e^{i N \phi}}{\sqrt{2 \pi}}
\end{align*}
$$
analogous to the relation between real and momentum space states. In this context care has to be taken to ensure that the states $|\phi\rangle$ form an orthogonal complete set of the Hilbert space. A way to construct this is to start with an finite Hilbert space $\{|N\rangle\}$ assuming that $0 \leq N \leq L-1 \gg 1$. Then we can restrict ourselves to a discrete set of phases $\phi=\phi_{k}=2 \pi k / L$ with $k=0, \ldots, L-1$ (analog to wave vectors in a finite system with periodic boundary conditions). Now it is easy to see that
$$
\begin{align*}
\left\langle\phi_{k} \mid \phi_{k^{\prime}}\right\rangle=\delta_{k, k^{\prime}} .
\end{align*}
$$

Keeping this in mind we take the limit $L \rightarrow \infty$.
Based on this above operators can be represented as
$$
\begin{align*}
\widehat{N}=\sum_{N=0}^{\infty} N|N\rangle\langle N| \quad \text { and } \quad e^{i \widehat{\phi}}=\sum_{N=0}^{\infty}|N\rangle\langle N+1| ;
\end{align*}
$$

Thus for both $\widehat{N}$ and $e^{i \widehat{\phi}}$ the coherent state does not represent an eigenstate, but rather the best localised in either basis.

First we consider the wave function of the coherent state in the number representation,
$$
\begin{align*}
\Psi_{N}=\left\langle N \mid \Psi_{\alpha}\right\rangle=e^{-|\alpha|^{2} / 2} \frac{\alpha^{N}}{\sqrt{N!}}
\end{align*}
$$
with $\alpha=\sqrt{N_{0}} e^{i \phi_{0}}$. Thus, the probability for the particle number $N$ is given by
$$
\begin{align*}
P_{N}=\left|\Psi_{N}\right|^{2}=e^{N_{0}} \frac{N_{0}^{N}}{N!} \approx \frac{1}{\sqrt{2 \pi N_{0}}} e^{-\left(N-N_{0}\right)^{2} / 2 N_{0}}
\end{align*}
$$
for large $N_{0}$. On the other hand, projecting into the phase representation,
$$
\begin{align*}
\begin{aligned}
\Psi_{\phi} & =\left\langle\phi \mid \Psi_{\alpha}\right\rangle=\sum_{N=0}^{\infty}\langle\phi \mid N\rangle\left\langle N \mid \Psi_{\alpha}\right\rangle=\frac{e^{-|\alpha|^{2} / 2}}{\sqrt{2 \pi}} \sum_{N=0}^{\infty} \frac{\alpha^{N} e^{-i \phi N}}{\sqrt{N!}} \\
& \approx \frac{1}{\sqrt{2 \pi}} \int_{0}^{\infty} d N \frac{e^{-\left(N-N_{0}\right)^{2} / 4 N_{0}}}{\left(2 \pi N_{0}\right)^{1 / 4}} e^{-i N\left(\phi-\phi_{0}\right)}=\left(\frac{N_{0}}{2 \pi}\right)^{1 / 4} e^{-\left(\phi-\phi_{0}\right)^{2} N_{0} / 4}
\end{aligned}
\end{align*}
$$
such that
$$
\begin{align*}
P_{\phi}=\left|\left\langle\phi \mid \Psi_{\alpha}\right\rangle\right|^{2} \approx \sqrt{\frac{N_{0}}{2 \pi}} e^{-\left(\phi-\phi_{0}\right)^{2} N_{0} / 2} .
\end{align*}
$$

The Gaussian approximation is in both representations only valid, if $N_{0} \gg 1$. The coherent state is neither an eigenstate of $\widehat{N}$ nor $e^{i \hat{\phi}}$. But for both the distributions are well localised around the corresponding mean values, $N_{0}$ and $\phi_{0}$. The uncertainty relation is obtained by considering the deviations from the mean values,
$$
\begin{align*}
\left.\begin{array}{l}
\Delta \phi^{2}=\left\langle\Psi_{\alpha}\right|\left(\widehat{\phi}-\phi_{0}\right)^{2}\left|\Psi_{\alpha}\right\rangle=\frac{1}{N_{0}} \\
\Delta N^{2}=\left\langle\Psi_{\alpha}\right|\left(\widehat{N}-N_{0}\right)^{2}\left|\Psi_{\alpha}\right\rangle=N_{0}
\end{array}\right\} \quad \Rightarrow \quad \Delta N \Delta \phi=1
\end{align*}
$$
compatible with a commutation relation of the form $[\widehat{N}, \widehat{\phi}]=i$.

### 9.7.3 Phonons in an Elastic Medium

We consider here vibrations of an elastic media using a simplified model of longitudinal waves only. As in Sect.?? we describe deformation of the elastic medium by means of the displacement field $\boldsymbol{u}(\boldsymbol{r}, t)$. The kinetic and elastic energy are then given by
$$
\begin{align*}
E_{\text {kin }}=\frac{\rho_{m}}{2} \int d^{3} r\left(\frac{\partial \boldsymbol{u}(\boldsymbol{r}, t)}{\partial t}\right)^{2} \quad \text { and } \quad E_{\text {el }}=\frac{\lambda_{e}}{2} \int d^{3} r(\boldsymbol{\nabla} \cdot \boldsymbol{u}(\boldsymbol{r}, t))^{2},
\end{align*}
$$
where $\rho_{m}$ is the mass density of the medium and $\lambda_{e}$ denotes the elastic modulus. Note that we use a simplified elastic term which involves density fluctuations only, corresponding to $\boldsymbol{\nabla} \cdot \boldsymbol{u}$, and ignores the contributions of shear distortion. This two energies are now combined to the Lagrange functional $L[\boldsymbol{u}]=E_{\text {kin }}-E_{\text {el }}$, whose variation with respect to $\boldsymbol{u}(\boldsymbol{r}, t)$ yields the wave equation,
$$
\begin{align*}
\frac{1}{c_{l}^{2}} \frac{\partial^{2}}{\partial t^{2}} \boldsymbol{u}-\boldsymbol{\nabla}(\boldsymbol{\nabla} \cdot \boldsymbol{u})=0
\end{align*}
$$
for longitudinal waves with the sound velocity $c_{l}=\sqrt{\lambda_{e} / \rho_{m}}$ . The general solution can be represented as a superposition of plane waves,
$$
\begin{align*}
\boldsymbol{u}(\boldsymbol{r}, t)=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} \boldsymbol{e}_{\boldsymbol{k}}\left(q_{\boldsymbol{k}}(t) e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+q_{\boldsymbol{k}}(t)^{*} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right)
\end{align*}
$$
with polarisation vector $\boldsymbol{e}_{\boldsymbol{k}}=\boldsymbol{k} /|\boldsymbol{k}|$ and the amplitudes $q_{\boldsymbol{k}}(t)$ satisfy the equation,
$$
\begin{align*}
\frac{d^{2}}{d t^{2}} q_{k}+\omega_{k}^{2} q_{k}=0
\end{align*}
$$
with the frequency $\omega_{\boldsymbol{k}}=c_{l}|\boldsymbol{k}|=c_{l} k$. We may rewrite the energy, $E=E_{\text {kin }}+E_{\text {el }}$, in terms of $q_{\boldsymbol{k}}$,
$$
\begin{align*}
E=\sum_{\boldsymbol{k}} \rho_{m} \omega_{\boldsymbol{k}}^{2}\left[q_{\boldsymbol{k}}(t) q_{\boldsymbol{k}}^{*}(t)+q_{\boldsymbol{k}}(t)^{*} q_{\boldsymbol{k}}(t)\right] .
\end{align*}
$$
which we express in a symmetrised form, for future convenience. Now we introduce new variables
$$
\begin{align*}
Q_{k}=\sqrt{\rho_{m}}\left(q_{k}+q_{k}^{*}\right) \quad \text { and } \quad P_{k}=\frac{d}{d t} Q_{k}=-i \omega_{k} \sqrt{\rho_{m}}\left(q_{k}-q_{k}^{*}\right)
\end{align*}
$$
leading to the energy
$$
\begin{align*}
E=\frac{1}{2} \sum_{k}\left(P_{\boldsymbol{k}}^{2}+\omega_{\boldsymbol{k}}^{2} Q_{\boldsymbol{k}}^{2}\right) .
\end{align*}
$$

This corresponds to a set of independent harmonic oscillators labelled by the wave vectors $\boldsymbol{k}$, as we have seen in Sect.??. We now turn to the step of canonical quantisation replacing the variables $\left(P_{k}, Q_{k}\right) \rightarrow\left(\widehat{P}_{\boldsymbol{k}}, \widehat{Q}_{k}\right)$ which satisfy the standard commutation relation,
$$
\begin{align*}
\left[\widehat{Q}_{\boldsymbol{k}}, \widehat{P}_{\boldsymbol{k}^{\prime}}\right]=i \hbar \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}
\end{align*}
$$

This can be reexpressed in terms of lowering and raising operators,
$$
\begin{align*}
\hat{b}_{k}=\frac{1}{\sqrt{2 \hbar \omega_{k}}}\left(\omega_{k} \widehat{Q}_{k}+i \widehat{P}_{k}\right), \quad \hat{b}_{k}^{\dagger}=\frac{1}{\sqrt{2 \hbar \omega_{k}}}\left(\omega_{k} \widehat{Q}_{k}-i \widehat{P}_{k}\right)
\end{align*}
$$
which obey the following commutation relations,
$$
\begin{align*}
\left[\hat{b}_{\boldsymbol{k}}, \hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right]=\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}, \quad\left[\hat{b}_{\boldsymbol{k}}, \hat{b}_{\boldsymbol{k}^{\prime}}\right]=\left[\hat{b}_{\boldsymbol{k}}^{\dagger}, \hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right]=0 .
\end{align*}
$$

Therefore $\hat{b}_{\boldsymbol{k}}^{\dagger}$ and $\hat{b}_{\boldsymbol{k}}$ can be viewed as creation and annihilation operators, respectively, for bosonic particles, called phonons. The Hamiltonian can be now written as
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}} \hbar \omega_{\boldsymbol{k}}\left(\hat{b}_{\boldsymbol{k}}^{\dagger} \hat{b}_{\boldsymbol{k}}+\frac{1}{2}\right)=\sum_{\boldsymbol{k}} \hbar \omega_{\boldsymbol{k}}\left(\hat{n}_{\boldsymbol{k}}+\frac{1}{2}\right)
\end{align*}
$$
whose eigenstates are given in the occupation number representation, $\left|n_{\boldsymbol{k}_{1}}, n_{\boldsymbol{k}_{2}}, \ldots\right\rangle$.
We can now also introduce the corresponding field operator,
$$
\begin{align*}
\widehat{\boldsymbol{u}}(\boldsymbol{r})=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} \boldsymbol{e}_{\boldsymbol{k}} \sqrt{\frac{\hbar}{2 \rho_{m} \omega_{\boldsymbol{k}}}}\left[\hat{b}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+\hat{b}_{\boldsymbol{k}}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right]
\end{align*}
$$
which is not an eigen operator for the occupation number states. Actually the thermal mean value of the field vanishes $\langle\widehat{\boldsymbol{u}}(\boldsymbol{r})\rangle=0$.

**Correlation Function:**

The correlation function is given by
$$
\begin{align*}
\begin{aligned}
g\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) & =\left\langle\widehat{\boldsymbol{u}}(\boldsymbol{r}) \cdot \widehat{\boldsymbol{u}}\left(\boldsymbol{r}^{\prime}\right)\right\rangle-\langle\widehat{\boldsymbol{u}}(\boldsymbol{r})\rangle \cdot\left\langle\widehat{\boldsymbol{u}}\left(\boldsymbol{r}^{\prime}\right)\right\rangle=\left\langle\boldsymbol{u}(\boldsymbol{r}) \cdot \boldsymbol{u}\left(\boldsymbol{r}^{\prime}\right)\right\rangle \\
& =\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \frac{\hbar \boldsymbol{e}_{\boldsymbol{k}} \cdot \boldsymbol{e}_{\boldsymbol{k}^{\prime}}}{2 \rho_{m} \sqrt{\omega_{\boldsymbol{k}^{\prime} \omega_{\boldsymbol{k}^{\prime}}}}}\left\langle\left[\hat{b}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+\hat{b}_{\boldsymbol{k}}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right]\left[\hat{b}_{\boldsymbol{k}^{\prime}} e^{i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}}+\hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger} e^{-i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}}\right]\right\rangle
\end{aligned}
\end{align*}
$$

Note that
$$
\begin{align*}
\left\langle\hat{b}_{\boldsymbol{k}}^{\dagger} \hat{b}_{\boldsymbol{k}^{\prime}}\right\rangle=\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}, \quad\left\langle\hat{b}_{\boldsymbol{k}^{\prime}} \hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right\rangle=\left\{1+\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle\right\} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}},\left\langle\hat{b}_{\boldsymbol{k}}^{\dagger} \hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right\rangle=\left\langle\hat{b}_{\boldsymbol{k}} \hat{b}_{\boldsymbol{k}^{\prime}}\right\rangle=0,
\end{align*}
$$
such that
$$
\begin{align*}
g\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{\hbar}{2 \rho_{m} V} \sum_{\boldsymbol{k}} \frac{1}{\omega_{\boldsymbol{k}}}\left\{\left(1+\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle\right) e^{i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}+\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}\right\}
\end{align*}
$$

**Melting:**

Instead of calculating the correlation function $\boldsymbol{r} \neq \boldsymbol{r}^{\prime}$ we now analyze the local (onsite) fluctuation, i.e $\boldsymbol{r}=\boldsymbol{r}^{\prime}$,
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar}{2 \rho_{m} V} \sum_{\boldsymbol{k}} \frac{1}{\omega_{\boldsymbol{k}}}\left\{\left(1+2\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle\right)\right\}=\frac{\hbar}{2 \rho_{m} V} \sum_{\boldsymbol{k}} \frac{1}{\omega_{\boldsymbol{k}}} \operatorname{coth}\left(\frac{\beta \hbar \omega_{\boldsymbol{k}}}{2}\right)
\end{align*}
$$

With $\omega_{\boldsymbol{k}}=c_{l} k$ and the fact the number of degrees of freedom are limited, as described in Sect.?? $\left(k \leq k_{D}\right)$, we find
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar}{(2 \pi)^{2} \rho_{m} c_{l}} \int_{0}^{k_{D}} d k k \operatorname{coth}\left(\frac{\beta \hbar c_{l} k}{2}\right)= \begin{cases}\frac{k_{D} k_{B} T}{2 \pi^{2} \lambda_{e}} & T \gg \Theta_{D} \\ \frac{k_{D} k_{B} \Theta_{D}}{8 \pi^{2} \lambda_{e}} & T \ll \Theta_{D}\end{cases}
\end{align*}
$$
which are at high (low) temperature thermal (quantum) fluctuations. As $\boldsymbol{u}$ denotes the deviation of the position of an atom from its equilibrium position, we can apply Lindemann's criterion for melting of the systems. We introduce the lattice constant $a$ with $k_{D} \approx \pi / a$. If $\left\langle\boldsymbol{u}^{2}\right\rangle$ is a sizeable fraction of $a^{2}$ then a crystal would melt. Thus we define the Lindemann number $L_{m}$ with the
condition that the lattice is stable for $\left\langle\boldsymbol{u}^{2}\right\rangle<L_{m}^{2} a^{2}$. Thus we obtain a melting temperture $T_{m}$ with
$$
\begin{align*}
L_{m}^{2}=\frac{\left\langle\boldsymbol{u}^{2}\right\rangle}{a^{2}}=\frac{k_{B} T_{m}}{2 \pi \lambda_{e} a^{3}} \quad \Rightarrow \quad k_{B} T_{m}=2 \pi \lambda_{e} a^{3} L_{m}^{2}=2 \pi \rho_{m} a^{3} c_{l}^{2} L_{m}^{2}=2 \pi M_{i} c_{l}^{2} L_{m}^{2}
\end{align*}
$$
where $M_{i}=\rho_{m} a^{3}$ is the atomic mass per unit cell. Note that usually $L_{m} \approx 0.1$ give a reasonable estimate for $T_{m}$.
At sufficiently low temperature we can also observe quantum melting which occurs due to quantum fluctuations, the zero-point motion of the atoms in a lattice. We consider $T \ll \Theta_{D}$ and fix the temperature,
$$
\begin{align*}
L_{m}^{2}=\frac{k_{B} \Theta_{D}}{8 \pi a^{3} \lambda_{e}}=\frac{\hbar}{8 a^{4} \rho_{m} a^{4} c_{l}} \quad \Rightarrow \quad c_{l m}=\frac{\hbar}{8 \rho_{m} a^{4} L_{m}^{2}}
\end{align*}
$$
which defines a critical value for the sound velocity, $c_{l m}$, which here is temperature independent. For $c_{l}>c_{l m}$ the fluctuations are small enough that lattice stable, because it stiff enough, while for $c_{l}<c_{l m}$ the lattice is "soft" such that the zero-point motion destroys the lattice. We will see in Chapt.?? that the ${ }^{4}$ He shows such a quantum melting transition at very low temperature under pressure (pressure increases elastic constant and sound velocity), where the solid phase is stable at high pressure and turns into a liquid under decreasing the pressure.

**Lower Dimensions:**

We consider the elastic medium at lower dimensions. For two dimensions, we rewrite the equation as,
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar}{4 \pi c_{l} \rho_{m}} \int_{0}^{k_{D}} d k \operatorname{coth}\left(\frac{\beta \hbar c_{l} k}{2}\right)
\end{align*}
$$
and find that for all temperatures $T>0$ the integral diverges at lower integral boundary ("infrared divergence"). Only at $T=0$ we find
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar k_{D}}{4 \pi c_{l} \rho_{m}}=\frac{k_{B} \Theta_{D}}{4 \pi c_{l}^{2} \rho_{m}}=\frac{k_{B} \Theta_{D}}{4 \pi \lambda_{e}}
\end{align*}
$$
finite. Thus in two dimension the lattice forming an elastic medium is only stable at zero temperature. But still we can have quantum melting, if the lattice becomes sufficiently soft. In one dimension, the equation turns into
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar}{2 \pi c_{l} \rho_{m}} \int_{0}^{k_{D}} d k \frac{1}{k} \operatorname{coth}\left(\frac{\beta \hbar c_{l} k}{2}\right),
\end{align*}
$$
which (infrared) diverges at all temperatures including $T=0$. Quantum and thermal fluctuations are strong enough in one dimension to destabilise any lattice.

---