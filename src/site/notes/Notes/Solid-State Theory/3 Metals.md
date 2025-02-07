---
{"dg-publish":true,"permalink":"/notes/solid-state-theory/3-metals/","hide":"true","updated":"2025-02-07T10:57:49.000+01:00"}
---

Jump back to ==[[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Solid-State Theory/3 Metals#3.1 The Jellium Model of the Metallic State\|3.1 The Jellium Model of the Metallic State]]
- [[Notes/Solid-State Theory/3 Metals#3.2 Charge Excitations and the Dielectric Function\|3.2 Charge Excitations and the Dielectric Function]]
- [[Notes/Solid-State Theory/3 Metals#3.3 Lattice Vibrations - Phonons\|3.3 Lattice Vibrations - Phonons]]
- [[Notes/Solid-State Theory/3 Metals#3.4 Appendix: Linear Response Theory\|3.4 Appendix: Linear Response Theory]]

---
# 3 Metals 
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=57&selection=2,0,2,6|•]]

The electronic states in a periodic atomic lattice are extended and have an energy spectrum forming energy bands. In the ground state these energy states are filled successively starting at the bottom of the electronic spectrum until the number of electrons is exhausted. Metallic behaviour occurs whenever in this way a band is only partially filled. The fundamental difference that distinguishes metals from insulators and semiconductors is the absence of a gap for electron-hole excitations. In metals, the ground state can be excited at arbitrarily small energies which has profound phenomenological consequences.
We will consider a basic model suitable for the description of simple metals like the Alkali metals $\mathrm{Li}, \mathrm{Na}$, or K , where the (atomic) electron configuration consists of closed shell cores and one single valence electron in an ns-orbital. Neglecting the core electrons (completely filled bands), we consider the valence electrons only and apply the approximation of nearly free electrons. The lowest band around the $\Gamma$-point is then half-filled. First, we will also neglect the influence of the periodic lattice potential and consider the problem of a free electron gas subject to mutual (repulsive) Coulomb interaction.

## 3.1 The Jellium Model of the Metallic State
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=57&selection=23,0,25,39|•]]

The Jellium model is the probably simplest possible model of a metal that is able to describe qualitative and to some extend even quantitative aspects of simple metals. The main simplification made is to replace the ionic lattice by a homogeneous positively charged background (Jellium). The uniform charge density $e n_{\text {ion }}$ is chosen such that the whole system - electrons and ionic background - is charge neutral, i.e. $n_{\text {ion }}=n$, where $n$ is the electron density. In this fully translational invariant system, the plane waves
$$
\begin{align*}
\psi_{\boldsymbol{k}, s}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}
\end{align*}
$$
represent the single-particle wave functions of the free electrons. Here $\Omega$ is the volume of the system, $\boldsymbol{k}$ and $s \in\{\uparrow, \downarrow\}$ denote the wave vector and spin, respectively. Assuming a cubic system of side length $L$ and volume $\Omega=L^{3}$ we impose periodic boundary conditions for the wave function
$$
\begin{align*}
\psi_{\boldsymbol{k}, s}(\boldsymbol{r}+(L, 0,0))=\psi_{\boldsymbol{k}, s}(\boldsymbol{r}+(0, L, 0))=\psi_{\boldsymbol{k}, s}(\boldsymbol{r}+(0,0, L))=\psi_{\boldsymbol{k}, s}(\boldsymbol{r})
\end{align*}
$$
such that the reciprocal space is discretised as
$$
\begin{align*}
\boldsymbol{k}=\frac{2 \pi}{L}\left(n_{x}, n_{y}, n_{z}\right)
\end{align*}
$$

where $\left(n_{x}, n_{y}, n_{z}\right) \in \mathbb{Z}^{3}$. The energy of a single-electron state is given by $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$ (free particle). The ground state of non-interacting electrons is obtained by filling all single particle states up to the Fermi energy with two electrons. In the language of second quantisation the ground state is, thus, given by

$$
\begin{align*}
\left|\Psi_{0}\right\rangle=\prod_{|\boldsymbol{k}| \leq k_{F}} \prod_{s} \widehat{c}_{\boldsymbol{k}, s}^{\dagger}|0\rangle
\end{align*}
$$
where the operators $\widehat{c}_{\boldsymbol{k}, s}^{\dagger}\left(\widehat{c}_{\boldsymbol{k}, s}\right)$ create (annihilate) an electron with wave vector $\boldsymbol{k}$ and spin $s$. We call this state also a filled Fermi sea. The Fermi wave vector $k_{F}$ with the corresponding Fermi energy $\epsilon_{F}=\hbar^{2} k_{F}^{2} / 2 m$ is determined by equating the filled electronic states with the electron density $n$. We have
$$
\begin{align*}
n=\frac{1}{\Omega} \sum_{|\boldsymbol{k}| \leq k_{F}, s} 1=2 \int \frac{d^{3} k}{(2 \pi)^{3}} 1=2 \frac{4 \pi}{3} \frac{k_{F}^{3}}{(2 \pi)^{3}}
\end{align*}
$$
which results in
$$
\begin{align*}
k_{F}=\left(3 \pi^{2} n\right)^{1 / 3}
\end{align*}
$$

Note $k_{F}$ is the radius of the Fermi sphere in $k$-space around $\boldsymbol{k}=0.$

### 3.1.1 Theory of Metals - Sommerfeld and Pauli

In a first step we neglect the interaction among the electrons and consider the electrons in the metal simply as a Fermi gas. Then thermodynamic properties can be described by using the Fermi-Dirac distribution function,
$$
\begin{align*}
f\left(\epsilon_{\boldsymbol{k}}\right)=\frac{1}{e^{\left(\epsilon_{\boldsymbol{k}}-\mu\right) / k_{B} T}+1}
\end{align*}
$$
and the density of states
$$
\begin{align*}
\begin{aligned}
N(E) & =\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \delta\left(E-\epsilon_{\boldsymbol{k}}\right)=2 \int \frac{d^{3} k}{(2 \pi)^{3}} \delta\left(E-\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m}\right)=\frac{1}{4 \pi^{3}} \int d \Omega_{\boldsymbol{k}} d k k^{2} \frac{m}{\hbar^{2} k} \delta\left(k-\frac{\sqrt{2 m E}}{\hbar}\right) \\
& =\frac{1}{2 \pi^{2}}\left(\frac{2 m}{\hbar^{2}}\right)^{3 / 2} E^{1 / 2}=\frac{3}{2} \frac{n}{\epsilon_{F}}\left(\frac{E}{\epsilon_{F}}\right)^{1 / 2}
\end{aligned}
\end{align*}
$$
for $E>0$. We first address the temperature dependence of the chemical potential up second power in $T$ for fixed electron density $n$, by using the equation
$$
\begin{align*}
n=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} f\left(\epsilon_{\boldsymbol{k}}\right)=\int_{0}^{+\infty} d E f(E) N(E)=\int_{0}^{\mu} d E N(E)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime}(\mu)+\cdots
\end{align*}
$$
where we used the Sommerfeld expansion (see next paragraph) assuming $T \ll T_{F}=\epsilon_{F} / k_{B}.$

**Sommerfeld expansion**: In the limit $k_{B} T \ll \epsilon_{F}$ the derivative $\partial f(E) / \partial E$ is well concentrated around $E=\mu$. We consider

$$
\begin{aligned}
\int_{-\infty}^{+\infty} d E \, g(E) \left( -\frac{\partial f(E)}{\partial E} \right) 
&= \int_{-\infty}^{+\infty} d E \, \left\{ g(\mu) + (E - \mu) g^{\prime}(\mu) + \frac{(E - \mu)^{2}}{2} g^{\prime \prime}(\mu) + \cdots \right\} \left( -\frac{\partial f(E)}{\partial E} \right) \\
&= g(\mu) + \frac{g^{\prime \prime}(\mu)}{2} \int_{-\infty}^{+\infty} d E \, (E - \mu)^{2} \left( -\frac{\partial f(E)}{\partial E} \right) + \cdots \\
&= g(\mu) + \frac{\pi^{2}}{6} g^{\prime \prime}(\mu) \left( k_{B} T \right)^{2} + \cdots.
\end{aligned}
$$

and analogous
$$
\begin{align*}
\int_{-\infty}^{+\infty} d E\left(\frac{\partial g(E)}{\partial E}\right) f(E)=g(\mu)+\frac{\pi^{2}}{6} g^{\prime \prime}(\mu)\left(k_{B} T\right)^{2}+\cdots .
\end{align*}
$$

With the definition
$$
\begin{align*}
g(E)=\int_{-\infty}^{E} d E^{\prime} \Gamma\left(E^{\prime}\right) \Rightarrow \int_{-\infty}^{+\infty} d E \Gamma(E) f(E)=\int_{-\infty}^{\mu} d E \Gamma(E)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \Gamma^{\prime}(\mu)+\cdots
\end{align*}
$$

Note that
$$
\begin{align*}
\int_{-\infty}^{+\infty} d x \frac{\beta x^{2} e^{\beta x}}{\left(e^{\beta x}+1\right)^{2}}=\frac{\pi^{2}}{3 \beta^{2}}.
\end{align*}
$$


We now use
$$
\begin{align*}
\int_{0}^{\mu} d E N(E) \approx \int_{0}^{\epsilon_{F}} d E N(E)+\left(\mu-\epsilon_{F}\right) N\left(\epsilon_{F}\right)=n+\left(\mu-\epsilon_{F}\right) N\left(\epsilon_{F}\right)
\end{align*}
$$

leading to

$$
\begin{align*}
n \approx n+\left(\mu-\epsilon_{F}\right) N\left(\epsilon_{F}\right)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime}\left(\epsilon_{F}\right) \quad \Rightarrow \quad \mu(T)=\epsilon_{F}-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}+\cdots
\end{align*}
$$
with $N^{\prime}\left(\epsilon_{F}\right) / N\left(\epsilon_{F}\right)=1 / 2 \epsilon_{F}$. Now we also determine the internal energy density,
$$
\begin{align*}
\begin{aligned}
u(T) & =\frac{U(T)}{\Omega}=\int_{0}^{\infty} d E E N(E) f(E) \approx \int_{0}^{\mu} d E E N(E)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2}\left\{\mu N^{\prime}(\mu)+N(\mu)\right\} \\
& \approx \int_{0}^{\epsilon_{F}} d E E N(E)+\epsilon_{F} \underbrace{\left\{\left(\mu-\epsilon_{F}\right) N\left(\epsilon_{F}\right)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime}\left(\epsilon_{F}\right)\right\}}_{=0}+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N\left(\epsilon_{F}\right) \\
& =u_{0}+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N\left(\epsilon_{F}\right).
\end{aligned}
\end{align*}
$$
The specific heat is then given by
$$
\begin{align*}
C=\frac{\partial u}{\partial T}=\frac{\pi^{2}}{3 \Omega} k_{B}^{2} T N\left(\epsilon_{F}\right)=\gamma T
\end{align*}
$$
and shows a $T$-linear behaviour where $\gamma$ is the Sommerfeld coefficient, proportional to the density of states at the Fermi energy.
Next we consider the effect of a magnetic field coupling to the electron spin, so that $\epsilon_{\boldsymbol{k}} \rightarrow \epsilon_{\boldsymbol{k}, s}=$ $\epsilon_{k}-\mu_{B} s H$ with $\mu_{B}$ the Bohr magneton and $s= \pm 1$. We consider the magnetisation due to the spin polarisation of the electrons,
$$
\begin{align*}
\begin{aligned}
M & =\mu_{B}\left(n_{+}-n_{-}\right)=\frac{\mu_{B}}{2}\left\{\int_{0}^{\infty} d E N(E) f\left(E-\mu_{B} H\right)-\int_{0}^{\infty} d E N(E) f\left(E+\mu_{B} H\right)\right\} \\
& \approx \frac{\mu_{B}}{2} \int_{0}^{\infty} d E N(E)\left(-\frac{\partial f(E)}{\partial E}\right) 2 \mu_{B} H \approx \mu_{B}^{2} H N\left(\epsilon_{F}\right) \int_{0}^{\infty} d E\left(-\frac{\partial f(E)}{\partial E}\right)=\mu_{B}^{2} H N\left(\epsilon_{F}\right) .
\end{aligned}
\end{align*}
$$

By taking the derivative with respect to $H$ we find for the susceptibility,
$$
\begin{align*}
\chi_{p}=\frac{\partial M}{\partial H}=\mu_{B}^{2} N\left(\epsilon_{F}\right) .
\end{align*}
$$

This is the Pauli paramagnetic susceptibility which is to lowest order temperature independent and proportional to the density of states at the Fermi energy, like $\gamma^{4}$.
The temperature dependence of the $\chi_{p}$ can be found by going beyond the lowest order approximation:
$$
\begin{align*}
M \approx \mu_{B}^{2} H \int_{0}^{\infty} d E N(E)\left(-\frac{\partial f(E)}{\partial E}\right)=\mu_{B}^{2} H\left\{N(\mu)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime \prime}(\mu)\right\}
\end{align*}
$$
We then write
$$
\begin{align*}
N(\mu) \approx N\left(\epsilon_{F}-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right) \approx N\left(\epsilon_{F}\right)-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \frac{N^{\prime}\left(\epsilon_{F}\right)^{2}}{N\left(\epsilon_{F}\right)},
\end{align*}
$$
which leads to
$$
\begin{align*}
M \approx \mu_{B}^{2} H N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2}\left\{\left(\frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right)^{2}-\frac{N^{\prime \prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right\}\right]=\chi_{p}(T) H,
\end{align*}
$$
and defines the temperature dependent spin susceptibility, which depends on details of the density of states.

### 3.1.2 Stability of Metals - a Hartree-Fock Approach

Now we would like to examine the stability of the Jelium model. For this purpose, we compute the ground state energy of the Jellium system variationally, using the density $n$ as a variational parameter, which is equivalent to the variation of the lattice constant. In this way, we will obtain an understanding of the stability of a metal, i.e. the cohesion of the ion lattice through the itinerant electrons (in contrast to semiconductors where the stability was due to covalent chemical bonding). The variational ground state shall be $\left|\Psi_{0}\right\rangle$  for given $k_{F}$. The Hamiltonian splits into four terms
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{\text {kin }}+\mathcal{H}_{e e}+\mathcal{H}_{e i}+\mathcal{H}_{i i}
\end{align*}
$$
with
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{\mathrm{kin}} & =\sum_{\boldsymbol{k}, \boldsymbol{s}} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{\boldsymbol{k}} \boldsymbol{k} \boldsymbol{s} \\
\mathcal{H}_{\mathrm{ee}} & =\frac{1}{2} \sum_{s, s^{\prime}} \int d^{3} r d^{3} r^{\prime} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r}) \\
\mathcal{H}_{\mathrm{ei}} & =-\sum_{s} \int d^{3} r d^{3} r^{\prime} \frac{n e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r}) \\
\mathcal{H}_{\mathrm{ii}} & =\frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{n^{2} e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|},
\end{aligned}
\end{align*}
$$
where we have used in second quantisation language the electron field operators
$$
\begin{align*}
\begin{aligned}
& \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k}, s}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}} \\
& \widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k}, s} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}
\end{aligned}
\end{align*}
$$

The variational energy - which we want to minimise with respect to $n$ - can be computed from $E_{g}=\left\langle\Psi_{0}\right| \mathcal{H}\left|\Psi_{0}\right\rangle$ and consists of four different contributions:
First we have the kinetic energy
$$
\begin{align*}
\begin{aligned}
E_{\text {kin }} & =\left\langle\Psi_{0}\right| \mathcal{H}_{\text {kin }}\left|\Psi_{0}\right\rangle=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \underbrace{\left\langle\Psi_{0}\right| \hat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}\left|\Psi_{0}\right\rangle}_{=n_{\boldsymbol{k} s}} \\
& =2 \Omega \int \frac{d^{3} k}{(2 \pi)^{3}} \epsilon_{\boldsymbol{k}} n_{\boldsymbol{k} s}=N \frac{3}{5} \epsilon_{F}
\end{aligned}
\end{align*}
$$
where we used $N=\Omega n$ the number of valence electrons and
$$
\begin{align*}
n_{\boldsymbol{k} s}=\left\{\begin{array}{cc}
1 & |\boldsymbol{k}| \leq k_{F} \\
0 & |\boldsymbol{k}|>k_{F}
\end{array}\right.
\end{align*}
$$


Secondly, there is the energy resulting from the Coulomb repulsion between the electrons,
$$
\begin{align*}
\begin{aligned}
E_{\mathrm{ee}} & =\frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \sum_{s, s^{\prime}}\left\langle\Psi_{0}\right| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})\left|\Psi_{0}\right\rangle \\
& =\frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|}\left(n^{2}-G\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)\right)=E_{\text {Hartree }}+E_{\text {Fock }} .
\end{aligned}
\end{align*}
$$

For this contribution we used the fact, that the two-particle correlation function may be expressed as
$$
\begin{align*}
\sum_{s, s^{\prime}}\left\langle\Psi_{0}\right| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})\left|\Psi_{0}\right\rangle=n^{2}-G\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)
\end{align*}
$$
where
$$
\begin{align*}
G(\boldsymbol{r})=\frac{9 n^{2}}{2}\left(\frac{k_{F}|\boldsymbol{r}| \cos k_{F}|\boldsymbol{r}|-\sin k_{F}|\boldsymbol{r}|}{\left(k_{F}|\boldsymbol{r}|\right)^{3}}\right)^{2} .
\end{align*}
$$

The Coulomb repulsion $\mathcal{H}_{\mathrm{ee}}$ between the electrons leads to two terms, called the direct or Hartree term describing the Coulomb energy of a uniformly spread charge distribution, and the exchange or Fock term resulting from the exchange hole that follows from the Fermi-Dirac statistics (Pauli exclusion principle).
The third contribution originates in the attractive interaction between the (uniform) ionic background and the electrons,
$$
\begin{align*}
\begin{aligned}
E_{\mathrm{ei}} & =-\int d^{3} r d^{3} r^{\prime} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} n \sum_{s}\left\langle\Psi_{0}\right| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r})\left|\Psi_{0}\right\rangle \\
& =-\int d^{3} r d^{3} r^{\prime} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} n^{2} .
\end{aligned}
\end{align*}
$$

where the expectation value $\left\langle\Psi_{0}\right| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \Psi_{s}(\boldsymbol{r})\left|\Psi_{0}\right\rangle$ corresponds to the uniform density $n$, as is easily calculated.
Finally we have the repulsive ion-ion interaction
$$
\begin{align*}
E_{\mathrm{ii}}=\left\langle\Psi_{0}\right| \mathcal{H}_{\mathrm{ii}}\left|\Psi_{0}\right\rangle=\frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{n^{2} e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} .
\end{align*}
$$

![Attachments/Script 27.webp|700](/img/user/Attachments/Script%2027.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=62&rect=188,496,405,650|•]]

It is easy to verify that the three contributions $E_{\text {Hartree }}, E_{\mathrm{ei}}$, and $E_{\mathrm{ii}}$ compensate each other to exactly zero. Note that these three terms are the only ones that would arise in a classical electrostatic calculation, implying that the stability of metals relies purely on quantum effect. The remaining terms are the kinetic energy and the Fock term. The latter is negative and reads
$$
\begin{align*}
E_{\mathrm{Fock}}=-\Omega \frac{9 n^{2}}{4} \int d^{3} r \frac{e^{2}}{|\boldsymbol{r}|}\left(\frac{\sin k_{F}|\boldsymbol{r}|-k_{F}|\boldsymbol{r}| \cos k_{F}|\boldsymbol{r}|}{\left(k_{F}|\boldsymbol{r}|\right)^{3}}\right)^{2}=-N \frac{3 e^{2}}{4 \pi} k_{F} .
\end{align*}
$$

Eventually, the total energy per electron is given by
$$
\begin{align*}
\frac{E_{g}}{N}=\frac{3}{5} \frac{\hbar^{2} k_{F}^{2}}{2 m}-\frac{3 e^{2}}{4 \pi} k_{F}=\left(\frac{2.21}{r_{s}^{2}}-\frac{0.916}{r_{s}}\right) \mathrm{Ry}
\end{align*}
$$
where $1 \mathrm{Ry}=e^{2} / 2 a_{B}$ and the dimensionless quantity $r_{s}$ is defined via
$$
\begin{align*}
n=\frac{3}{4 \pi d^{3}}
\end{align*}
$$
and
$$
\begin{align*}
r_{s}=\frac{d}{a_{B}}=\left(\frac{9 \pi}{4}\right)^{1 / 3} \frac{m e^{2}}{\hbar^{2} k_{F}} .
\end{align*}
$$

The length $d$ is the average radius of the volume occupied by one electron. Minimising the energy per electron with respect to $n$ is equivalent to minimise it with respect to $r_{s}$, yielding $r_{s, \text { min }}=4.83, d \approx 2.5 \text{ }\pu{Å}$ and a density of $n_{0} \approx 1.5 \times 10^{24} \mathrm{~cm}^{-3}$. This corresponds to a lattice constant of $a=(4 \pi / 3)^{1 / 3} d \approx 4 \text{ }\pu{Å}$. This estimate is roughly in agreement with the lattice constants of the Alkali metals: $r_{s, \mathrm{Li}}=3.22, r_{s, \mathrm{Na}}=3.96, r_{s, \mathrm{~K}}=4.86$. Note that in metals the delocalised electrons are responsible for the cohesion of the positive background yielding a stable solid.

![Attachments/Script 28.webp|700](/img/user/Attachments/Script%2028.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=63&rect=186,616,406,752|•]]

The good agreement of this simple estimate with the experimental values is due to the fact that the Alkali metals have only one valence electron in an s-orbital that is delocalised, whereas the the core electrons are in a noble gas configuration and, thus, relatively inert. In the variational approach outlined above correlation effects among the electrons due to the Coulomb repulsion have been neglected. In particular, electrons can be expected to 'avoid' each other not just because of the Pauli principle, but also as a result of the repulsive interaction. However, for the problem under consideration the correlation corrections turn out to be small for $r_{s} \sim r_{s, \min }$ :
$$
\begin{align*}
\frac{E_{\mathrm{tot}}}{N}=\left(\frac{2.21}{r_{s}^{2}}-\frac{0.916}{r_{s}}+0.062 \ln r_{s}-0.096+\ldots\right) \mathrm{Ry}
\end{align*}
$$
which can be obtained from a more sophisticated quantum field theoretical analysis.

---
## 3.2 Charge Excitations and the Dielectric Function
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=63&selection=120,0,122,46|•]]

In analogy to semiconductors, the elementary excitations of metallic systems are the electron-hole excitations, which for metals, however, can have arbitrarily small energies. One particularly drastic consequence of this behaviour is the strong screening of the long-ranged Coulomb potential. As we will see, a negative test charge in a metal reduces the electron density in its vicinity, and the induced cloud of positive charges, relative to the uniform charge density, weaken the Coulomb potential as,
$$
\begin{align*}
V(r) \propto \frac{1}{r} \quad \longrightarrow \quad V^{\prime}(r) \propto \frac{e^{-r / l}}{r}
\end{align*}
$$
i.e. the Coulomb potential is modified into the short-ranged Yukawa potential with screening length $l$. In contrast to metals, the finite energy gap for electron-hole excitations the charge distribution in semiconductors reduces the adaption of the system to perturbations, so that the screened Coulomb potential remains long-ranged,
$$
\begin{align*}
V(r) \propto \frac{1}{r} \quad \longrightarrow \quad V^{\prime}(r) \propto \frac{1}{\varepsilon r}
\end{align*}
$$

As mentioned earlier, the semiconductor acts as a dielectric medium and its screening effects are accounted for by the polarisation of localised electric dipoles, i.e., the Coulomb potential inside a semiconductor is renormalised by the dielectric constant $\varepsilon$.

### 3.2.1 Dielectric Response and Lindhard Function

We will now investigate the response of an electron gas to a time- and position-dependent weak external potential $V_{a}(\boldsymbol{r}, t)$ in more detail based on the equation of motion. We introduce the Hamiltonian
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{\text {kin }}+\mathcal{H}_{V}=\mathcal{H}_{0}+\mathcal{H}_{V} \sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}+\sum_{s} \int d^{3} r V_{a}(\boldsymbol{r}, t) \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r})
\end{align*}
$$
where the second term is considered as a small perturbation to our system described by a timeindependent Hamiltonian, $\mathcal{H}_{0}=\mathcal{H}_{\text {kin }}$ whose properties we know exactly. In a first step we consider the linear response of the system to the external potential. On this level we restrict ourself to one Fourier component in the spatial and time dependence of the potential,
$$
\begin{align*}
V_{a}(\boldsymbol{r}, t)=V_{a}(\boldsymbol{q}, \omega) e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t}
\end{align*}
$$
where $\eta \rightarrow 0_{+}$includes the adiabatic switching on of the potential. To linear response this potential induces a small modulation of the electron density of the form $n_{\text {ind }}(\boldsymbol{r}, t)=n_{0}+$ $\delta n_{\text {ind }}(\boldsymbol{r}, t)$ with
$$
\begin{align*}
\delta n_{\mathrm{ind}}(\boldsymbol{r}, t)=\delta n_{\mathrm{ind}}(\boldsymbol{q}, \omega) e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t} .
\end{align*}
$$

Using equations (3.28) and (3.29) we obtain for the density operator in momentum space,
$$
\begin{align*}
\widehat{\rho}_{\boldsymbol{q}}=\sum_{s} \int d^{3} r \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r}) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}=\sum_{\boldsymbol{k}, s} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}=\sum_{\boldsymbol{k}, s} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s},
\end{align*}
$$
where we define $\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}=\widehat{c}_{\boldsymbol{k} s} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}$. The perturbation term $\mathcal{H}_{V}$ now reads
$$
\begin{align*}
\mathcal{H}_{V}=\sum_{s} \int d^{3} r V_{a}(\boldsymbol{r}, t) \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r})=\widehat{\rho}_{\boldsymbol{q}}^{\dagger} V_{a}(\boldsymbol{q}, \omega) e^{-i \omega t} e^{\eta t}=\sum_{\boldsymbol{k}, s} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}^{\dagger} V_{a}(\boldsymbol{q}, \omega) e^{-i \omega t} e^{\eta t} .
\end{align*}
$$

The density operator $\widehat{\rho}_{\boldsymbol{q}}(t)$ in Heisenberg representation is the relevant quantity needed to describe the electron density in the metal.

**Linear response**

We introduce the equation of motion for $\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}(t)$ :
$$
\begin{align*}
\begin{aligned}
i \hbar \frac{d}{d t} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s} & =\left[\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}, \mathcal{H}\right]=\left[\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}, \mathcal{H}_{\mathrm{kin}}+\mathcal{H}_{V}\right] \\
& =\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right) \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}+\left(\widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}-\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}\right) V_{a}(\boldsymbol{q}, \omega) e^{-i \omega t} e^{\eta t}
\end{aligned}
\end{align*}
$$

We now take the thermal average $\langle\widehat{A}\rangle_{0}=\operatorname{Tr}\left[\widehat{A} e^{-\beta \mathcal{H}_{0}}\right] / \operatorname{Tr}\left[e^{-\beta \mathcal{H}_{0}}\right]$ with respect to the unperturbed Hamiltonian and follow the linear response scheme by assuming the same time dependence for $\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}(t)\right\rangle_{0}=\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}(\omega) e^{-i \omega t+\eta t} \propto V_{a}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t}$ as for the potential, so that the equation of motion reads,
$$
\begin{align*}
(\hbar \omega+i \hbar \eta)\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}(\omega)=\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right)\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}(\omega)+\left(n_{0 \boldsymbol{k}, s}-n_{0 \boldsymbol{k}+\boldsymbol{q}, s}\right) V_{a}(\boldsymbol{q}, \omega)
\end{align*}
$$
where $n_{0 \boldsymbol{k}, s}=\left\langle\widehat{c}_{\boldsymbol{k} s} \widehat{c}_{\boldsymbol{c} s}\right\rangle_{0}$. Note that we take here the approximation that for the limit $V_{a} \rightarrow 0$ we keep only terms linear $V_{a}$, such that $n_{0 k, s}$ is independent of $V_{a}$ and thus of time, while $\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}$ is proportional to $V_{a}$. This leads then consistently to
$$
\begin{align*}
\delta n_{\text {ind }}(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s}\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}(\omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \frac{n_{0 \boldsymbol{k}+\boldsymbol{q}, s}-n_{0 \boldsymbol{k}, s}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta} V_{a}(\boldsymbol{q}, \omega) .
\end{align*}
$$
With this, we define the dynamical linear response function as
$$
\begin{align*}
\chi_{0}(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{s}} \frac{n_{0 \boldsymbol{k}+\boldsymbol{q}, s}-n_{0 \boldsymbol{k}, \boldsymbol{s}}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta}
\end{align*}
$$
such that $\delta n_{\text {ind }}(\boldsymbol{q}, \omega)=\chi_{0}(\boldsymbol{q}, \omega) V_{a}(\boldsymbol{q}, \omega)$, where $\chi_{0}(\boldsymbol{q}, \omega)$ is known to be the Lindhard function. Note the Fourier transform in real space and time yields the relation,
$$
\begin{align*}
\delta n_{i n d}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right)=\int d^{3} r^{\prime} d t \chi_{0}\left(\boldsymbol{r}-\boldsymbol{r}, t-t^{\prime}\right) V_{a}\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)
\end{align*}
$$

The adiabatic switching on of the perturbation has mathematically the nice regularisation feature that $\chi_{0}(\boldsymbol{r}, t)$ is causal, i.e. $\chi_{0}(\boldsymbol{r}, t)=0$ for $t<0$. The potential $V_{a}$ can only influence the response into the future.Note, that for $n_{0 k, s}$ we can use the Fermi-Dirac distribution function $f\left(\epsilon_{\boldsymbol{k}}\right)$ for spin-independent densities.

As a simple example we consider here a metal at $T=0$ exposed to a uniform static potential, which corresponds simply to a shift of the chemical potential: $V_{a}(\boldsymbol{r}, t)=-\delta \mu$. Thus, we use $\omega=0$ and take in the Lindhard function the limit $\boldsymbol{q} \rightarrow 0$. Using Bernoulli-l'Hôpital for the $\boldsymbol{q}$-limit we find
$$
\begin{align*}
\chi_{0}(\boldsymbol{q} \rightarrow 0,0) \rightarrow \frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \frac{\boldsymbol{q} \cdot \boldsymbol{\nabla}_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}} \frac{\partial n_{0}(\epsilon)}{\partial \epsilon}}{\boldsymbol{q} \cdot \nabla_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}}=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \frac{\partial f\left(\epsilon_{\boldsymbol{k}}\right)}{\partial \epsilon_{\boldsymbol{k}}}=-\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \delta\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)=-\frac{N\left(\epsilon_{F}\right)}{\Omega} .
\end{align*}
$$

The electron density shift is then given by
$$
\begin{align*}
\delta n_{\mathrm{ind}}=-\frac{N\left(\epsilon_{F}\right)}{\Omega} V_{a}=\frac{N\left(\epsilon_{F}\right)}{\Omega} \delta \mu
\end{align*}
$$
which agrees with the Sommerfeld approximation,
$$
\begin{align*}
\delta n=\frac{1}{\Omega} \int_{\epsilon_{F}}^{\epsilon_{F}+\delta \mu} d E N(E) \approx \frac{N\left(\epsilon_{F}\right)}{\Omega} \delta \mu .
\end{align*}
$$

This expression is in linear order exact. Note that this is connected with the compressibility $\kappa$ of the electrons,
$$
\begin{align*}
\kappa=\frac{1}{n^{2}} \frac{\partial n}{\partial \mu}=\frac{\chi_{0}(0,0)}{n^{2}}=\frac{1}{n^{2} \Omega} N\left(\epsilon_{F}\right)=\frac{3}{2 n \epsilon_{F}}
\end{align*}
$$
where the last equality is the expression for free electrons.

**Coulomb interaction - Random phase approximation**

So far we treated the linear response of the system to an external perturbation without considering "feedback effects" due to the interaction among electrons. In fact, the density fluctuation $\delta n(\boldsymbol{r}, t)$ can be thought as a source for an additional Coulomb potential $V_{\delta n}$ which can be determined by means of the Poisson equation,
$$
\begin{align*}
\boldsymbol{\nabla}^{2} V_{\delta n}(\boldsymbol{r}, t)=-4 \pi e^{2} \delta n(\boldsymbol{r}, t)
\end{align*}
$$
or in Fourier space
$$
\begin{align*}
V_{\delta n}(\boldsymbol{q}, \omega)=\frac{4 \pi e^{2}}{q^{2}} \delta n(\boldsymbol{q}, \omega) .
\end{align*}
$$

If we allow feedback effects in our system with external perturbation $V_{a}(\boldsymbol{q}, \omega)$, the effective potential $V$ felt by the electrons is determined self-consistently via
$$
\begin{align*}
\begin{aligned}
V(\boldsymbol{q}, \omega) & =V_{a}(\boldsymbol{q}, \omega)+V_{\delta n}(\boldsymbol{q}, \omega) \\
& =V_{a}(\boldsymbol{q}, \omega)+\frac{4 \pi e^{2}}{q^{2}} \delta n(\boldsymbol{q}, \omega),
\end{aligned}
\end{align*}
$$

where

$$
\begin{align*}
\delta n(\boldsymbol{q}, \omega)=\chi_{0}(\boldsymbol{q}, \omega) V(\boldsymbol{q}, \omega) .
\end{align*}
$$

The relation between $V$ and $V_{a}$ may then be written as
$$
\begin{align*}
V(\boldsymbol{q}, \omega)=\frac{V_{a}(\boldsymbol{q}, \omega)}{\varepsilon(\boldsymbol{q}, \omega)}
\end{align*}
$$
with
$$
\begin{align*}
\varepsilon(\boldsymbol{q}, \omega)=1-\frac{4 \pi e^{2}}{q^{2}} \chi_{0}(\boldsymbol{q}, \omega)
\end{align*}
$$
where $\varepsilon(\boldsymbol{q}, \omega)$ is termed the dynamical dielectric function and describes the renormalisation of the external potential due to the dynamical response of the electrons in the metal. Extending
$$
\begin{align*}
\delta n(\boldsymbol{q}, \omega)=\chi_{0}(\boldsymbol{q}, \omega) V(\boldsymbol{q}, \omega)=\chi(\boldsymbol{q}, \omega) V_{a}(\boldsymbol{q}, \omega),
\end{align*}
$$
we define the response function $\chi(\boldsymbol{q}, \omega)$ within "random phase approximation" to be
$$
\begin{align*}
\chi(\boldsymbol{q}, \omega)=\frac{\chi_{0}(\boldsymbol{q}, \omega)}{\varepsilon(\boldsymbol{q}, \omega)}=\frac{\chi_{0}(\boldsymbol{q}, \omega)}{1-\frac{4 \pi e^{2}}{q^{2}} \chi_{0}(\boldsymbol{q}, \omega)} .
\end{align*}
$$

This response function $\chi(\boldsymbol{q}, \omega)$ contains also effects of electron-electron interaction and comprises information not only about the renormalisation of potentials, but also on the excitation spectrum of the metal.

### 3.2.2 Electron-Hole Excitation

The most simple excitation in a metal is the electron-hole excitation which resembles in some way the one discussed for the semiconductor. Neglecting the Coulomb interaction we remove an electron from an occupied state and place it into a state which is unoccupied:

![Attachments/Script 29.webp|700](/img/user/Attachments/Script%2029.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=67&rect=162,205,433,309|•]]

Since the ground-state $\left|\Psi_{0}\right\rangle$ is the filled Fermi sea, we remove the electron with an energy $\epsilon_{k} \leq \epsilon_{F}$ $\left(|\boldsymbol{k}| \leq k_{F}\right)$ and place into an energy state outside the Fermi sea, $\epsilon_{\boldsymbol{k}+\boldsymbol{q}}>\epsilon_{F}$. Thus, the excited state is given by
$$
\begin{align*}
|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s\rangle=\widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \widehat{c}_{\boldsymbol{k}, s}\left|\Psi_{0}\right\rangle=\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}^{\dagger}\left|\Psi_{0}\right\rangle
\end{align*}
$$
with the constraint that $n_{0, \boldsymbol{k}}\left(1-n_{0, \boldsymbol{k}+\boldsymbol{q}}\right)=1$ (we assume that the spin $s$ remains unchanged in the excitation, what we call a pure charge excitation). Note that $n_{0, \boldsymbol{k}}=\Theta\left(\epsilon_{F}-\epsilon_{\boldsymbol{k}}\right)$ at zero temperature. Analogous to the semiconductors he excitation energy is given by
$$
\begin{align*}
E_{k, q}=\epsilon_{k+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}>0
\end{align*}
$$

Also here we find a continuum of electron-hole excitation spectrum in the energy-momentum plane - sketched in Figure 3.4. In contrast to semiconductors electron-hole excitations are possible to arbitrarily low energies. The possible momentum transfer is dictated by the geometry of the Fermi sea. For $E_{\boldsymbol{k}, \boldsymbol{q}} \rightarrow 0$ the momentum transfer ranges from $q \approx 0$ to $q \approx 2 k_{F}$ as the electron has to be removed just below and be place just above the Fermi energy. For increasing the excitation energy this momentum range is gradually shift as depicted as the blue area:

![Attachments/Script 30.webp|700](/img/user/Attachments/Script%2030.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=68&rect=191,610,406,752|•]]

Interestingly $|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s\rangle$ can be generated through the operator $\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}^{\dagger}$ which also couples to the external potential which we used the derive the linear response theory. The linear response function is actually built upon the properties of electron-hole excitation. Indeed $\chi(\boldsymbol{q}, \omega)$ contains information about the excitation spectrum. Without Coulomb it is sufficient to consider $\chi_{0}(\boldsymbol{q}, \omega)$, the Lindhard function.
We may separate $\chi_{0}$ into its real and imaginary part, $\chi_{0}(\boldsymbol{q}, \omega)=\chi_{0}^{\prime}(\boldsymbol{q}, \omega)+i \chi_{0}^{\prime \prime}(\boldsymbol{q}, \omega)$. Using the relation
$$
\begin{align*}
\lim _{\eta \rightarrow 0_{+}} \frac{1}{z-i \eta}=\mathcal{P}\left(\frac{1}{z}\right)+i \pi \delta(z)
\end{align*}
$$
where the Cauchy principal value $\mathcal{P}$ of the first term has to be taken, we separate the Lindhard function (3.63) into
$$
\begin{align*}
\begin{aligned}
\chi_{0}^{\prime}(\boldsymbol{q}, \omega) & =\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \mathcal{P}\left(\frac{n_{0, \boldsymbol{k}+\boldsymbol{q}}-n_{0, \boldsymbol{k}}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega}\right) \\
\chi_{0}^{\prime \prime}(\boldsymbol{q}, \omega) & =\frac{\pi}{\Omega} \sum_{\boldsymbol{k}, s}\left(n_{0, \boldsymbol{k}+\boldsymbol{q}}-n_{0, \boldsymbol{k}}\right) \delta\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega\right)
\end{aligned}
\end{align*}
$$

The real part will be important later in the context of instabilities of metals. The excitation spectrum is visible in the imaginary part which relates to the absorption of energy by the electrons subject to a time-dependent external perturbation (see Appendix 3.4). Note that $\chi_{0}^{\prime \prime}(\boldsymbol{q}, \omega)$ corresponds to Fermi's golden rule of time-dependent perturbation theory, i.e. the transition rate from the ground state to an excited state of energy $\hbar \omega$ and momentum $\boldsymbol{q}$ for a perturbation. The sum over $\boldsymbol{k}$ yields the density of possible electron-hole excitations with the given excitation energy.

### 3.2.3 Collective Excitation

Similar to semiconductor also for metals the Coulomb interaction yields a further type of excitation which, however, cannot be described by a simple superposition of electron-hole excitations, unlike in the case of excitons. Here the renormalised response function $\chi(\boldsymbol{q}, \omega),$ including the Coulomb interaction, serves as a means to uncover collective excitations beyond the level of independent electrons. It is the long-range nature of the Coulomb interaction which is responsible for the so-called plasma resonance which appears at rather high energies for small momenta $\boldsymbol{q}$. We analyze $\chi(\boldsymbol{q}, \omega)$ in the small $\boldsymbol{q}$-limit, i.e. $|\boldsymbol{q}| \ll k_{F}$ where we expand $\chi_{0}(\boldsymbol{q}, \omega)$ in $\boldsymbol{q}$, starting with
$$
\begin{align*}
\begin{aligned}
\epsilon_{\boldsymbol{k}+\boldsymbol{q}} & =\epsilon_{\boldsymbol{k}}+\boldsymbol{q} \cdot \boldsymbol{\nabla}_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}+\cdots \\
n_{0, \boldsymbol{k}+\boldsymbol{q}} & =n_{0, \boldsymbol{k}}+\frac{\partial n_{0}}{\partial \epsilon} \boldsymbol{q} \cdot \boldsymbol{\nabla}_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}+\cdots
\end{aligned}
\end{align*}
$$

Note that $\partial n_{0} / \partial \epsilon_{\boldsymbol{k}}=-\delta\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)$ at $T=0$ and $\boldsymbol{\nabla}_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}=\hbar \boldsymbol{v}_{\boldsymbol{k}}$ gives the velocity. Since only states located at the Fermi energy are relevant here, $\boldsymbol{v}_{\boldsymbol{k}}=v_{F} \boldsymbol{k} /|\boldsymbol{k}|$ is the Fermi velocity. This leads to the approximation
$$
\begin{align*}
\begin{aligned}
\chi_{0}(\boldsymbol{q}, \omega) & \approx-2 \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{\boldsymbol{q} \cdot \boldsymbol{v}_{F} \delta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}{\boldsymbol{q} \cdot \boldsymbol{v}_{F}-\omega-i \eta} \\
& =\frac{2}{(2 \pi)^{2}} \int_{-1}^{+1} d \cos \theta \frac{k_{F}^{2}}{\hbar v_{F}}\left[\frac{q v_{F} \cos \theta}{\omega+i \eta}+\left(\frac{q v_{F} \cos \theta}{\omega+i \eta}\right)^{2}+\left(\frac{q v_{F} \cos \theta}{\omega+i \eta}\right)^{3}+\cdots\right] \\
& \approx \frac{k_{F}^{3} q^{2}}{3 \pi^{2} m(\omega+i \eta)^{2}}\left(1+\frac{3}{5} \frac{v_{F}^{2} q^{2}}{(\omega+i \eta)^{2}}\right) \\
& =\frac{n_{0} q^{2}}{m(\omega+i \eta)^{2}}\left(1+\frac{3}{5} \frac{v_{F}^{2} q^{2}}{(\omega+i \eta)^{2}}\right) .
\end{aligned}
\end{align*}
$$

First we consider the limit $\boldsymbol{q} \rightarrow 0$ for the dielectric function,
$$
\begin{align*}
\varepsilon(\boldsymbol{q} \rightarrow 0, \omega)=1-\frac{4 \pi e^{2}}{q^{2}} \frac{n q^{2}}{m \omega^{2}}=1-\frac{\omega_{p}^{2}}{\omega^{2}}
\end{align*}
$$
with the plasma frequency defined as
$$
\begin{align*}
\omega_{p}^{2}=\frac{4 \pi e^{2} n_{0}}{m}
\end{align*}
$$

Note that the long-range nature of the Coulomb interaction (manifest in $4 \pi e^{2} / q^{2}$ ) yields a finite plasma frequency, as this cancels the $q^{2}$-dependence of $\chi_{0}$.

We now approximate $\chi(\boldsymbol{q}, \omega)$,
$$
\begin{align*}
\begin{aligned}
\chi(\boldsymbol{q}, \omega) & \approx \frac{n_{0} q^{2} R(q, \omega)^{2}}{m(\omega+i \eta)^{2}-4 \pi e^{2} n_{0} R(q, \omega)^{2}} \\
& =\frac{n_{0} q^{2} R(q, \omega)}{2 m \omega_{p}}\left\{\frac{1}{\omega+i \eta-\omega_{p} R(q, \omega)}-\frac{1}{\omega+i \eta+\omega_{p} R(q, \omega)}\right\}
\end{aligned}
\end{align*}
$$
where we introduced
$$
\begin{align*}
R(q, \omega)^{2}=\left(1+\frac{3 v_{F}^{2} q^{2}}{5 \omega^{2}}\right) .
\end{align*}
$$

Note that we keep $\eta$ only in lowest order and ignore it where ever it would appear in higher than linear power. Thus, $\eta$ is dropped. We obtain for the imaginary part of $\chi(\boldsymbol{q}, \omega)$,
$$
\begin{align*}
\chi^{\prime \prime}(\boldsymbol{q}, \omega) \approx \frac{\pi n_{0} q^{2} R\left(q, \omega_{p}\right)}{2 m \omega_{p}}\left[\delta\left(\omega-\omega_{p} R\left(q, \omega_{p}\right)\right)-\delta\left(\omega+\omega_{p} R\left(q, \omega_{p}\right)\right)\right]
\end{align*}
$$
which yields a sharp excitation mode,
$$
\begin{align*}
\omega(\boldsymbol{q})=\omega_{p} R\left(q, \omega_{p}\right)=\omega_{p}\left\{1+\frac{3 v_{F}^{2} q^{2}}{10 \omega_{p}^{2}}+\cdots\right\},
\end{align*}
$$
which is called plasma resonance with $\omega_{p}$ as the plasma frequency. Similar to the exciton, the plasma excitation has a well-defined energy-momentum relation and may consequently be viewed as a quasi-particle (plasmon) which has bosonic character. When the plasmon dispersion merges with the electron-hole continuum it is damped (Landau damping) because of the allowed decay into electron-hole excitations. This results in a finite life-time of the plasmons within the electron-hole continuum corresponding to a finite width of the resonance of the collective excitation.

It is possible to understand the plasma excitation in a classical picture. Consider negatively charged electrons in a positively charged ionic background. When the electrons are shifted uniformly by $\boldsymbol{r}$ with respect to the ions, a polarisation $\boldsymbol{P}=-n_{0} e \boldsymbol{r}$ results. The polarisation causes an electric field $\boldsymbol{E}=-4 \pi \boldsymbol{P}$ which acts as a restoring force. The equation of motion for an individual electron describes harmonic oscillations
$$
\begin{align*}
m \frac{d^{2}}{d t^{2}} \boldsymbol{r}=-e \boldsymbol{E}=-4 \pi e^{2} n_{0} \boldsymbol{r}
\end{align*}
$$
with the same oscillation frequency as the plasma frequency,
$$
\begin{align*}
\omega_{p}^{2}=\frac{4 \pi e^{2} n_{0}}{m} .
\end{align*}
$$

Classically, the plasma resonance can therefore be thought as an oscillation of the whole electron gas cloud on top of a positively charged background.

![Attachments/Script 31.webp|700](/img/user/Attachments/Script%2031.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=70&rect=183,552,412,662|•]]

### 3.2.4 Screening

**Thomas-Fermi screening**

Next, we analyze the potential $V$ felt by the electrons exposed to a static field ( $\omega \rightarrow 0$ ). Using the expansion of Eqs. $(3.84,3.85)$ we obtain
$$
\begin{align*}
\chi_{0}(\boldsymbol{q}, 0)=-\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \delta\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)=-\frac{1}{\pi^{2}} \frac{k_{F}^{2}}{\hbar v_{F}}=-\frac{3 n_{0}}{2 \epsilon_{F}}
\end{align*}
$$
and thus
$$
\begin{align*}
\varepsilon(\boldsymbol{q}, 0)=1+\frac{k_{T F}^{2}}{q^{2}}
\end{align*}
$$
with the so-called Thomas-Fermi wave vector $k_{T F}^{2}=6 \pi e^{2} n_{0} / \epsilon_{F}$. The effect of the renormalised $q$-dependence of the dielectric function can best be understood by considering a bare point charge $V_{a}(\boldsymbol{r})=e^{2} / r\left(\right.$ or $\left.V_{a}(\boldsymbol{q})=4 \pi e^{2} / q^{2}\right)$ and its renormalisation in momentum space
$$
\begin{align*}
V(\boldsymbol{q})=\frac{V_{a}(\boldsymbol{q})}{\epsilon(\boldsymbol{q}, 0)}=\frac{4 \pi e^{2}}{q^{2}+k_{T F}^{2}}
\end{align*}
$$
or in real space
$$
\begin{align*}
V(\boldsymbol{r})=\frac{e^{2}}{r} e^{-k_{T F} r}
\end{align*}
$$

The potential is screened by a rearrangement of the electrons and this turns the long-ranged Coulomb potential into a Yukawa potential with exponential decay. The new length scale is $k_{T F}^{-1}$, the so-called Thomas-Fermi screening length. In ordinary metals $k_{T F}$ is typically of the same order of magnitude as $k_{F}$, i.e. the screening length is of order $5 \text{ }\pu{Å}$ comparable to the distance between neighboring atoms. As a consequence also external electric fields cannot penetrate a metal, but are screened on this length $1 / k_{T F}$. This legitimates one of the basic assumptions used in electrostatics with metals.

**Friedel oscillations**

The static dielectric function can be evaluated exactly for a system of free electrons, resulting for 3 dimensions in
$$
\begin{align*}
\varepsilon(\boldsymbol{q}, 0)=1+\frac{4 e^{2} m k_{F}}{\pi \hbar^{2} q^{2}}\left\{\frac{1}{2}+\frac{4 k_{F}^{2}-q^{2}}{8 k_{F} q} \ln \left|\frac{2 k_{F}+q}{2 k_{F}-q}\right|\right\} .
\end{align*}
$$

Noticeably the dielectric function varies little for small $\boldsymbol{q} \ll k_{F}$. At $q= \pm 2 k_{F}$ there is, however, a logarithmic singularity. This is a consequence of the sharpness of the Fermi surface in $k$-space. Consider the induced charge of a point charge at the origin: $e n_{a}(r)=e n_{a 0} \delta(\boldsymbol{r})$ which is Fourier transformed is $n_{a}(\boldsymbol{q})=n_{a 0} .{ }^{10}$
$$
\begin{align*}
\delta n(\boldsymbol{r})=\int \frac{d^{3} q}{(2 \pi)^{3}}\left\{\frac{1}{\varepsilon(q)}-1\right\} n_{a}(\boldsymbol{q}) e^{i \boldsymbol{q} \cdot \boldsymbol{r}}=-\frac{1}{r} \int_{0}^{\infty} g(q) n_{a}(\boldsymbol{q}) \sin q r d q
\end{align*}
$$
with
$$
\begin{align*}
g(q)=\frac{q}{2 \pi^{2}} \frac{\varepsilon(q)-1}{\varepsilon(q)} .
\end{align*}
$$

Note that $g(q)$ vanishes for both $q \rightarrow 0$ and $q \rightarrow \infty$. Using partial integration twice, we find
$$
\begin{align*}
\delta n(\boldsymbol{r})=\frac{n_{a 0}}{r^{3}} \int_{0}^{\infty} g^{\prime \prime}(q) \sin q r d q
\end{align*}
$$
where
$$
\begin{align*}
g^{\prime}(q) \approx A \ln \left|q-2 k_{F}\right|
\end{align*}
$$
and
$$
\begin{align*}
g^{\prime \prime}(q) \approx \frac{A}{q-2 k_{F}}
\end{align*}
$$
dominate around $q \sim 2 k_{F}$. Hence, for $k_{F} r \gg 1$,
$$
\begin{align*}
\begin{aligned}
\delta n(r) & \approx \frac{A n_{a 0}}{r^{3}} \int_{2 k_{F}-\Lambda}^{2 k_{F}+\Lambda} \frac{\sin \left[\left(q-2 k_{F}\right) r\right] \cos 2 k_{F} r+\cos \left[\left(q-2 k_{F}\right) r\right] \sin 2 k_{F} r}{q-2 k_{F}} d q \\
& \longrightarrow \pi A n_{a 0} \frac{\cos 2 k_{F} r}{r^{3}}
\end{aligned}
\end{align*}
$$
with a cutoff $\Lambda \rightarrow \infty$. The induced charge distribution exhibits so-called Friedel oscillations. Finally we may ask what is the total electron charge displaced around the point charge en $n_{a 0} \delta(\boldsymbol{r})$. We integrate over $\boldsymbol{r}$:
$$
\begin{align*}
\delta Q=e \delta n=e \int d^{3} r \delta n(\boldsymbol{r})=\lim _{\boldsymbol{q} \rightarrow 0}\left\{\frac{1}{\varepsilon(q)}-1\right\} n_{a}(\boldsymbol{q})=-e n_{a 0}
\end{align*}
$$
where we used $1 / \epsilon(\boldsymbol{q}) \rightarrow 0$ for $\boldsymbol{q} \rightarrow 0$. The charge displacement corresponds to the exact opposite amount of charge of of the point charge. Thus we find a perfect compensation which corresponds to perfect screening.

![Attachments/Script 32.webp|700](/img/user/Attachments/Script%2032.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=72&rect=179,222,415,403|•]]

**Dielectric function in various dimensions**

Above we have treated the dielectric function for a three-dimensional parabolic band. Similar calculations can be performed for one- and two-dimensional systems. In general, the static susceptibility is given by
$$
\begin{align*}
\chi_{0}(q, \omega=0)= \begin{cases}-\frac{1}{2 \pi q} \ln \left|\frac{s+2}{s-2}\right|, & \text { 1D } \\ -\frac{1}{2 \pi}\left\{1-\left(1-\frac{4}{s^{2}}\right)^{1 / 2} \theta(s-2)\right\}, & \text { 2D } \\ -\frac{k_{F}}{2 \pi^{2}}\left\{1-\frac{s}{4}\left(1-\frac{4}{s^{2}}\right) \ln \left|\frac{s+2}{s-2}\right|\right\}, & \text { 3D }\end{cases}
\end{align*}
$$
where $s=q / k_{F}$. Interestingly $\chi_{0}(q, 0)$ has a singularity at $q=2 k_{F}$ in all dimensions:

![Attachments/Script 33.webp|700](/img/user/Attachments/Script%2033.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=73&rect=159,561,431,750|•]]

The singularity becomes weaker as the dimensionality is increased. In one dimension, there is a logarithmic divergence, in two dimensions there is a kink, and in three dimensions only the derivative diverges. Later we will see that these singularities may lead to instabilities of the metallic state, in particular for the one-dimensional case.

---
## 3.3 Lattice Vibrations - Phonons
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=73&selection=236,0,238,28|•]]

The atoms in a lattice of a solid are not immobile but vibrate around their equilibrium positions. We will describe this new degree of freedom by treating the lattice as a continuous elastic medium (Jellium with elastic modulus $\lambda$ ). This approximation is sufficient to obtain some essential features of the interaction between lattice vibrations and electrons. In particular, renormalised screening effects will be found. Our approach here is, however, limited to mono-atomic unit cells because the internal structure of a unit cell is neglected.

### 3.3.1 Vibration of an Isotropic Continuous Medium

The deformation of an elastic medium can be described by the displacement of the infinitesimal volume element $d^{3} r$ around a point $\boldsymbol{r}$ to a different point $\boldsymbol{r}^{\prime}(\boldsymbol{r})$. We can introduce here the so-called displacement field $\boldsymbol{u}(\boldsymbol{r})=\boldsymbol{r}^{\prime}(\boldsymbol{r})-\boldsymbol{r}$ as function of $\boldsymbol{r}$. In general, $\boldsymbol{u}$ is also a function of time. In the simplest form of an isotropic medium the elastic energy for small deformations is given by
$$
\begin{align*}
E_{\text {el }}=\frac{\lambda}{2} \int d^{3} r(\boldsymbol{\nabla} \cdot \boldsymbol{u}(\boldsymbol{r}, t))^{2}
\end{align*}
$$
where $\lambda$ is the elastic modulus (note that there is no deformation energy, if the medium is just shifted uniformly). This energy term produces a restoring force trying to bring the system back to the undeformed state. In this model we are neglecting the shear contributions. The continuum form above is valid for deformation wavelengths that are much longer than the lattice constant, so that details of the arrangement of atoms in the lattice can be neglected. The kinetic energy of the motion of the medium is given by
$$
\begin{align*}
E_{\text {kin }}=\frac{\rho_{0}}{2} \int d^{3} r\left(\frac{\partial \boldsymbol{u}(\boldsymbol{r}, t)}{\partial t}\right)^{2}
\end{align*}
$$
where $\rho_{0}=M_{i} n_{i}$ is the mass density with the ionic mass $M_{i}$ and the ionic density $n_{i}$. Variation of the Lagrangian functional $L[\boldsymbol{u}]=E_{\text {kin }}-E_{\text {el }}$ with respect to $\boldsymbol{u}(\boldsymbol{r}, t)$ leads to the equation of motion
$$
\begin{align*}
\frac{1}{c_{s}^{2}} \frac{\partial^{2}}{\partial t^{2}} \boldsymbol{u}(\boldsymbol{r}, t)-\boldsymbol{\nabla}(\boldsymbol{\nabla} \cdot \boldsymbol{u}(\boldsymbol{r}, t))=0
\end{align*}
$$
which is a wave equation with sound velocity $c_{s}^{2}=\lambda / \rho_{0}$. The resulting displacement field can be expanded into normal modes,
$$
\begin{align*}
\boldsymbol{u}(\boldsymbol{r}, t)=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} \boldsymbol{e}_{\boldsymbol{k}}\left(q_{\boldsymbol{k}}(t) e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+q_{\boldsymbol{k}}(t)^{*} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right)
\end{align*}
$$
where every $q_{\boldsymbol{k}}(t)$ satisfies the equation
$$
\begin{align*}
\frac{d^{2}}{d t^{2}} q_{k}+\omega_{k}^{2} q_{k}=0
\end{align*}
$$
with the frequency $\omega_{\boldsymbol{k}}=c_{s}|\boldsymbol{k}|=c_{s} k$ and the polarisation vector $\boldsymbol{e}_{\boldsymbol{k}}$ has unit length. Note that within our simplification for the elastic energy (3.120), all modes correspond to longitudinal waves, i.e. $\boldsymbol{\nabla} \times \boldsymbol{u}(\boldsymbol{r}, t)=0$ and $\boldsymbol{e}_{\boldsymbol{k}} \| \boldsymbol{k}$. The total energy expressed in terms of the normal modes reads
$$
\begin{align*}
E=\sum_{\boldsymbol{k}} \rho_{0} \omega_{\boldsymbol{k}}^{2}\left[q_{\boldsymbol{k}}(t) q_{\boldsymbol{k}}^{*}(t)+q_{\boldsymbol{k}}^{*}(t) q_{\boldsymbol{k}}(t)\right] .
\end{align*}
$$

Next, we switch from a Lagrangian to a Hamiltonian description by defining the new variables
$$
\begin{align*}
\begin{aligned}
Q_{\boldsymbol{k}} & =\sqrt{\rho_{0}}\left(q_{\boldsymbol{k}}+q_{\boldsymbol{k}}^{*}\right) \\
P_{\boldsymbol{k}} & =\frac{d}{d t} Q_{\boldsymbol{k}}=-i \omega_{\boldsymbol{k}} \sqrt{\rho_{0}}\left(q_{\boldsymbol{k}}-q_{\boldsymbol{k}}^{*}\right)
\end{aligned}
\end{align*}
$$
in terms of which the energy is given by
$$
\begin{align*}
E=\frac{1}{2} \sum_{k}\left(P_{k}^{2}+\omega_{k}^{2} Q_{k}^{2}\right) .
\end{align*}
$$

Thus, the system is equivalent to an ensemble of independent harmonic oscillators, one for each normal mode $\boldsymbol{k}$. Consequently, the system may be quantised by defining the canonical conjugate operators $P_{k} \rightarrow \widehat{P}_{k}$ and $Q_{k} \rightarrow \widehat{Q}_{k}$ which obey, by definition, the commutation relation,
$$
\begin{align*}
\left[\widehat{Q}_{\boldsymbol{k}}, \widehat{P}_{\boldsymbol{k}^{\prime}}\right]=i \hbar \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}
\end{align*}
$$

As it is usually done for quantum harmonic oscillators, we define the raising and lowering operators
$$
\begin{align*}
\begin{aligned}
& \widehat{b}_{k}=\frac{1}{\sqrt{2 \hbar \omega_{k}}}\left(\omega_{k} \widehat{Q}_{k}+i \widehat{P}_{k}\right) \\
& \widehat{b}_{k}^{\dagger}=\frac{1}{\sqrt{2 \hbar \omega_{k}}}\left(\omega_{k} \widehat{Q}_{k}-i \widehat{P}_{k}\right),
\end{aligned}
\end{align*}
$$
satisfying the commutation relations
$$
\begin{align*}
\begin{aligned}
{\left[\widehat{b}_{\boldsymbol{k}}, \widehat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right.} & =\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \\
{\left[\widehat{b}_{\boldsymbol{k}}, \widehat{b}_{\boldsymbol{k}^{\prime}}\right] } & =0, \\
{\left[\widehat{b}_{\boldsymbol{k}}^{\dagger}, \widehat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right] } & =0 .
\end{aligned}
\end{align*}
$$

These relations can be interpreted in a way that these operators create and annihilate quasi-particles following the Bose-Einstein statistics. According to the correspondence principle, the quantum mechanical Hamiltonian corresponding to the energy (3.128) is
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}} \hbar \omega_{\boldsymbol{k}}\left(\widehat{b}_{\boldsymbol{k}}^{\dagger} \widehat{b}_{\boldsymbol{k}}+\frac{1}{2}\right) .
\end{align*}
$$

In analogy to the treatment of the electrons in second quantisation we say that the operators $\widehat{b}_{\boldsymbol{k}}^{\dagger}$ $\left(\widehat{b}_{k}\right)$ create (annihilate) a phonon, a quasi-particle with well-defined energy-momentum relation, $\omega_{\boldsymbol{k}}=c_{s}|\boldsymbol{k}|$. Using Eqs.(3.124, 3.127, and 3.131) the displacement field operator $\widehat{\boldsymbol{u}}(\boldsymbol{r})$ can now be defined as
$$
\begin{align*}
\widehat{\boldsymbol{u}}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} e_{\boldsymbol{k}} \sqrt{\frac{\hbar}{2 \rho_{0} \omega_{\boldsymbol{k}}}}\left[\widehat{b}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+\widehat{b}_{\boldsymbol{k}}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right] .
\end{align*}
$$

As mentioned above, the continuum approximation is valid for long wavelengths (small $\boldsymbol{k}$ ) only. For wavevectors with $\boldsymbol{k} \approx \pi / a$ the discreteness of the lattice appears in the form of corrections to the linear dispersion $\omega_{\boldsymbol{k}} \propto|\boldsymbol{k}|$. Since the number of degrees of freedom is limited to $3 N_{i}\left(N_{i}\right.$ number of atoms), there is a maximal wave vector called the Debye wavevector $k_{D}$. We can now define the corresponding Debye frequency $\omega_{D}=c_{s} k_{D}$ and the Debye temperature $\Theta_{D}=\hbar \omega_{D} / k_{B}$. In the continuous medium approximation there are only acoustic phonons. For the inclusion of optical phonons, the arrangement of the atoms within a unit cell has to be considered, which goes beyond this simple picture.

### 3.3.2 Phonons in Metals

The consideration above is certainly valid for semiconductors, where ionic interactions are mediated via covalent chemical bonds and oscillations around the equilibrium position may be approximated by a harmonic potential, so that the form of the elastic energy above is well motivated. The situation is more subtle for metals, where the ions interact through the long-ranged Coulomb interaction and are held to together through an intricate interplay with the mobile conduction electrons.

First, neglecting the gluey effect of the electrons, the positively charged background can itself be treated as an ionic gas. Similar to the electronic gas (3.90), the background exhibits a well-defined collective plasma excitation at the ionic plasma frequency
$$
\begin{align*}
\Omega_{p}^{2}=\frac{4 \pi n_{i}\left(Z_{i} e\right)^{2}}{M_{i}},
\end{align*}
$$

For equation (3.137) we used the formula (3.90) with $n_{0} \rightarrow n_{i}=n_{0} / Z_{i}$ the density of ions with charge number $Z_{i}$, e $\rightarrow Z_{i} e$, and $m \rightarrow M_{i}$ the atomic mass. Apparently the excitation energy does not vanish as $\boldsymbol{k} \rightarrow 0$. So far, the background of the metallic system can not be described as an elastic medium where the excitation spectrum is expected to be linear in $k, \omega_{\boldsymbol{k}} \propto|\boldsymbol{k}|$.

The shortcoming in this discussion is that we neglected the feedback effects of the electrons that react nearly instantaneously to the slow ionic motion, due to their much smaller mass. The finite plasma frequency is a consequence of the long-range nature of the Coulomb potential (as mentioned earlier), but as we have seen above the electrons tend to screen these potentials, in particular for small wavevectors $\boldsymbol{k}$. The "bare" ionic plasma frequency $\Omega_{p}$ is thus renormalised to
$$
\begin{align*}
\omega_{\boldsymbol{k}}^{2}=\frac{\Omega_{p}^{2}}{\varepsilon(\boldsymbol{k}, 0)}=\frac{k^{2} \Omega_{p}^{2}}{k^{2}+k_{T F}^{2}} \approx\left(c_{s} k\right)^{2},
\end{align*}
$$
where the presence of the electrons leads to a renormalisation of the Coulomb potential by a factor $1 / \varepsilon(\boldsymbol{k}, \omega)$. Having included the back-reaction of the electrons, a linear dispersion of a sound wave $\left(\omega_{\boldsymbol{k}}=c_{s}|\boldsymbol{k}|\right)$ is finally recovered, and the renormalised velocity of sound $c_{s}$ reads
$$
\begin{align*}
c_{s}^{2} \approx \frac{\Omega_{p}^{2}}{k_{T F}^{2}}=\frac{Z m \omega_{p}^{2}}{M_{i} k_{T F}^{2}}=\frac{1}{3} Z \frac{m}{M_{i}} v_{F}^{2} .
\end{align*}
$$

For the comparison of the energy scales we find,
$$
\begin{align*}
\frac{\Theta_{D}}{T_{F}} \sim \frac{c_{s}}{v_{F}}=\sqrt{\frac{1}{3} Z \frac{m}{M_{i}}} \ll 1,
\end{align*}
$$
where we used $k_{B} T_{F}=\epsilon_{F}$ and $k_{D} \approx k_{F}$.

**Kohn anomaly**

Notice that phonon frequencies are much smaller than the (electronic) plasma frequency, so that the approximation
$$
\begin{align*}
\omega_{\boldsymbol{k}}^{2}=\frac{\Omega_{p}^{2}}{\varepsilon(\boldsymbol{k}, 0)}
\end{align*}
$$
is valid even for larger wavevectors. Employing the Lindhard form of $\varepsilon(\boldsymbol{k}, 0)$, we deduce that the phonon frequency is singular at $|\boldsymbol{k}|=2 k_{F}$. More explicitly we find
$$
\begin{align*}
\frac{\partial \omega_{\boldsymbol{k}}}{\partial \boldsymbol{k}} \rightarrow \infty
\end{align*}
$$
in the limit $k \rightarrow 2 k_{F}$. This behaviour is called the Kohn anomaly and results from the interaction between electrons and phonons. This effect is not contained in the previous elastic medium model that neglected ion-electron interactions.

![Attachments/Script 34.webp|700](/img/user/Attachments/Script%2034.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=78&rect=176,213,422,396|•]]

### 3.3.3 Peierls Instability in one Dimension

The Kohn anomaly has particularly drastic effects in (quasi) one-dimensional electron systems, where the electron-phonon coupling leads to an instability of the metallic state. We consider a one-dimensional Jellium model where the ionic background is treated as an elastic medium with a displacement field $u$ along the extended direction ( $x$-axis). We neglect both the electron-electron interaction and the slow time evolution of the background modulation so that the Hamiltonian reads,
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{\text {isol }}+\mathcal{H}_{\text {int }}
\end{align*}
$$
where contributions of the isolated electronic and ionic systems are included in
$$
\begin{align*}
\mathcal{H}_{\text {isol }}=\sum_{k, s} \frac{\hbar^{2} k^{2}}{2 m} c_{k s}^{\dagger} c_{k s}+\frac{\lambda}{2} \int d x\left(\frac{d u}{d x}(x)\right)^{2}
\end{align*}
$$
whereas the interactions between the system comes in via the coupling
$$
\begin{align*}
\mathcal{H}_{\mathrm{int}}=-n_{0} \sum_{s} \int d x \int d x^{\prime} V\left(x-x^{\prime}\right) \frac{d}{d x} u(x) \widehat{\Psi}_{s}^{\dagger}\left(x^{\prime}\right) \widehat{\Psi}_{s}\left(x^{\prime}\right)
\end{align*}
$$

In the general theory of elastic media $\boldsymbol{\nabla} \cdot \boldsymbol{u}=-\delta n / n_{0}$ describes density modulations, so that the second term in (3.143) models the coupling of the electrons to charge density fluctuations of the positively charged background mediated by the screened Coulomb interaction $V\left(x-x^{\prime}\right)$ (contact interaction). Note that only phonon modes with a finite value of $\boldsymbol{\nabla} \cdot \boldsymbol{u}$ couple in lowest order to the electrons. This is only possible of longitudinal modes. Transverse modes are defined by the condition $\boldsymbol{\nabla} \cdot \boldsymbol{u}=0$ and do not couple to electrons in lowest order.

Consider the ground state of $N$ electrons in a system of length $L$, leading to an electronic density $n_{0}=N / L$. For a uniform background $u(x)=$ const, the Fermi wavevector of free electrons is readily determined to be
$$
\begin{align*}
N=\sum_{s} \frac{L}{2 \pi} \int_{-k_{F}}^{+k_{F}} d k 1=2 \frac{L}{2 \pi} 2 k_{F}
\end{align*}
$$
leading to
$$
\begin{align*}
k_{F}=\frac{\pi}{2} n_{0} .
\end{align*}
$$

**Perturbative approach - instability**

Now we consider the Kohn anomaly of this one-dimensional system. Note that here we calculated concretely in one-dimension. In real quasi-one-dimensional systems only the electron dispersion would be one-dimensional - no perpendicular motion - while the overall calculations would done in three dimensions. For a small background modulation $u(x) \neq$ const, the interaction term $\mathcal{H}_{\text {int }}$ can be treated perturbatively and will lead to a renormalisation of the elastic modulus $\lambda$ in (3.143). For that it will be useful to express the full Hamiltonian in momentum space,
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{\text {isol }} & =\sum_{k, s} \frac{\hbar^{2} k^{2}}{2 m} c_{k s}^{\dagger} c_{k s}+\frac{\rho_{0}}{2} \sum_{q} \omega_{q}^{2} u_{q} u_{-q} \\
\mathcal{H}_{\text {int }} & =\frac{i n_{0}}{2 \sqrt{L}} \sum_{k, q, s} q\left[\tilde{V}_{-q} u_{q} \widehat{c}_{k+q, s}^{\dagger} \widehat{c}_{k, s}-\tilde{V}_{q} u_{-q} \widehat{c}_{k, s}^{\dagger} \widehat{c}_{k+q, s}\right]
\end{aligned}
\end{align*}
$$

where we used from previous considerations $\lambda q^{2}=\rho_{0} \omega_{q}^{2}$. Furthermore we defined

$$
\begin{align*}
\begin{aligned}
u(x) & =\frac{1}{\sqrt{L}} \sum_{q} u_{q} e^{i q x} \\
V(x) & =\frac{1}{L} \sum_{q} \tilde{V}_{q} e^{i q x}
\end{aligned}
\end{align*}
$$
with $\tilde{V}_{q}=4 \pi e^{2} / q^{2} \epsilon(q, 0) \approx$ const. - we consider an effectively short-ranged potential. We compute the second order correction to the ground state energy using Rayleigh-Schrödinger perturbation theory (note that the linear energy shift vanishes)
$$
\begin{align*}
\begin{aligned}
& \Delta E^{(2)}=\frac{n_{0}^{2}}{4 L} \sum_{k, q, s} q^{2}\left|\tilde{V}_{q}\right|^{2} u_{q} u_{-q} \sum_{n} \frac{\left.\left|\left\langle\Psi_{0}\right|\right|_{c_{k, s}}^{\dagger} \widehat{c}_{k+q, s}|n\rangle\right|^{2}+\mid\left.\left\langle\Psi_{0}\right|\right|_{c} ^{\dagger}}{\left.{ }_{k+q, s} \widehat{c}_{k, s}|n\rangle\right|^{2}} \\
& E_{0}-E_{n} \\
&=\frac{n_{0}^{2}}{4} \sum_{q} q^{2}\left|\tilde{V}_{q}\right|^{2} u_{q} u_{-q} \frac{1}{L} \sum_{k, s} \frac{n_{k+q}-n_{k}}{\epsilon_{k+q}-\epsilon_{k}} \\
&=\frac{n_{0}^{2}}{4} \sum_{q}\left|\tilde{V}_{q}\right|^{2} q^{2} \chi_{0}(q, 0) u_{q} u_{-q}
\end{aligned}
\end{align*}
$$
where the virtual states $|n\rangle$ are electron-hole excitations of the filled Fermi sea. This term gives a correction to the elastic term in (3.148). In other words, the elastic modulus $\lambda$ and, thus, the phonon frequency $\omega_{q}{ }^{2}=q^{2} \lambda / \rho_{0}=c_{s}^{2} q^{2}$ is renormalised according to
$$
\begin{align*}
\left(\omega_{q}^{\mathrm{ren}}\right)^{2} \approx \omega_{q}^{2}+\frac{n_{0}^{2}\left|\tilde{V}_{q}\right|^{2} q^{2}}{4 \rho_{0}} \chi_{0}(q, 0)=\omega_{q}^{2}-\frac{n_{0}^{2}\left|\tilde{V}_{q}\right|^{2} m q}{4 \pi \rho_{0} \hbar^{2}} \ln \left|\frac{q+2 k_{F}}{q-2 k_{F}}\right|
\end{align*}
$$
From the behaviour for $q \rightarrow 0$ we infer that the velocity of sound is renormalised. However, a much more drastic modification occurs at $q=2 k_{F}$. Here the phonon spectrum is 'softened', i.e. the frequency vanishes and even becomes negative. The latter effect is an artifact of the perturbation theory. This hints at an instability triggered by the Bose-Einstein condensation of phonons with a wave vector of . This coherent superposition  of many phonons corresponds classically to a static periodic deformation of the ionic background with wave vector . The unphysical behaviour of the frequency  indicates that in the vicinity of , the current problem can not be treated with the help of perturbation theory around the uniform state.

**Peierls instability at $\mathrm{Q}=\mathbf{2} \mathrm{k}_{\mathrm{F}}$**

Instead of the perturbative approach, we assume that the background shows a periodic density modulation (coherent phonon state)
$$
\begin{align*}
u(x)=u_{0} \cos (Q x)
\end{align*}
$$
where $Q=2 k_{F}$ and $u_{0}$ remains to be determined variationally. We investigate the effect of this modulation on the electron-phonon system. To this end we show that such a modulation lowers the energy of the electrons. Assuming that $u_{0}$ is small we can evaluate the electronic energy using the approximation of nearly free electrons, where $Q$ appears as a reciprocal lattice vector. The electronic spectrum for $0 \leq k \leq Q$ is then approximately determined by the secular equation
$$
\begin{align*}
\operatorname{det}\left(\begin{array}{cc}
\frac{\hbar^{2} k^{2}}{2 m}-E & \Delta \\
\Delta^{*} & \frac{\hbar^{2}(k-Q)^{2}}{2 m}-E
\end{array}\right)=0
\end{align*}
$$
where $\Delta$ derives from the Fourier transform of the potential $V(x)$,
$$
\begin{align*}
\Delta=-i Q u_{0} n \tilde{V}_{Q}
\end{align*}
$$
with
$$
\begin{align*}
\tilde{V}_{Q}=\int d x e^{i Q x} V(x)
\end{align*}
$$

The equation (3.161) leads to the energy eigenstates
$$
\begin{align*}
E_{k}^{ \pm}=\frac{\hbar^{2}}{4 m}\left[(k-Q)^{2}+k^{2} \pm \sqrt{\left\{(k-Q)^{2}-k^{2}\right\}^{2}+16 m^{2}|\Delta|^{2} / \hbar^{4}}\right] .
\end{align*}
$$

The total energy of the electronic and ionic system is then given by
$$
\begin{align*}
E_{\text {tot }}\left(u_{0}\right)=2 \sum_{0 \leq k<Q} E_{k-}+\frac{\lambda L Q^{2}}{4} u_{0}^{2}
\end{align*}
$$

where all electronic states of the lower band ( $E_{k-}$ ) are occupied and all states of the upper band $\left(E_{k+}\right)$ are empty. The amplitude $u_{0}$ of the modulation is found by minimising $E_{\text {tot }}$ with respect to $u_{0}$ :
$$
\begin{align*}
\begin{aligned}
0 & =\frac{1}{L} \frac{d E_{\text {tot }}}{d u_{0}} \\
& =-\frac{\hbar^{2}}{2 m} \frac{16 Q^{2} m^{2} n^{2} \tilde{V}_{Q}^{2}}{\hbar^{4}} u_{0} \int_{0}^{Q} \frac{d k}{2 \pi} \frac{1}{\sqrt{\left\{(k-Q)^{2}-k^{2}\right\}^{2}+16 m^{2} Q^{2} n^{2} \tilde{V}_{Q}^{2} u_{0}^{2} / \hbar^{4}}}+\frac{\lambda}{2} Q^{2} u_{0} \\
& =-u_{0} \frac{2 Q m n^{2} \tilde{V}_{Q}^{2}}{\hbar^{2} \pi} \int_{-k_{F}}^{+k_{F}} d q \frac{1}{\sqrt{q^{2}+4 m^{2} n^{2} \tilde{V}_{Q}^{2} u_{0}^{2} / \hbar^{4}}}+\frac{\lambda}{2} Q^{2} u_{0} \\
& =-u_{0} \frac{4 Q m n^{2} \tilde{V}_{Q}^{2}}{\hbar^{2} \pi} \operatorname{arsinh}\left(\frac{\hbar^{2} k_{F}}{2 m n \tilde{V}_{Q} u_{0}}\right)+\frac{\lambda}{2} Q^{2} u_{0} .
\end{aligned}
\end{align*}
$$

We solve this equation for $u_{0}$ using $\operatorname{arsinh}(x) \approx \ln (2 x)$ when $x \gg 1$.
$$
\begin{align*}
u_{0}=\frac{\hbar^{2} k_{F}}{m n \tilde{V}_{Q}} \exp \left[-\frac{\hbar^{2} k_{F} \pi \lambda}{4 m n^{2} \tilde{V}_{Q}^{2}}\right]=\frac{2}{k_{F}} \frac{\epsilon_{F}}{n \tilde{V}_{Q}} e^{-1 / N\left(\epsilon_{F}\right) g}
\end{align*}
$$
where $\epsilon_{F}=\hbar^{2} k_{F}^{2} / 2 m$ is the Fermi energy and $N\left(\epsilon_{F}\right)=2 m / \pi \hbar^{2} k_{F}$ is the density of states at the Fermi energy in the one-dimensional system. We introduced the coupling constant $g=2 n^{2} \tilde{V}_{Q}^{2} / \lambda$ that describes the phonon-induced effective electron-electron interaction. The coupling is the stronger the more polarizable (softer) ionic background, i.e. when the elastic modulus $\lambda$ is small. Note that the static displacement $u_{0}$ depends exponentially on the coupling and on the density of states. The underlying reason for this so-called Peierls instability to happen lies in the opening of an energy gap,
$$
\begin{align*}
\Delta E=E_{k_{F}}^{+}-E_{k_{F}}^{-}=2|\Delta|=8 \epsilon_{F} \exp \left(-\frac{1}{N\left(\epsilon_{F}\right) g}\right)
\end{align*}
$$
at $k= \pm k_{F}$, i.e. at the Fermi energy. The gap is associated with a lowering of the energy of the electron states in the lower band in the vicinity of the Fermi energy. For this reason this kind of instability is called a Fermi surface instability. Due to the gap the metal has turned into a semiconductor with a finite energy gap for all electron-hole excitations. 

![Attachments/Script 35.webp|700](/img/user/Attachments/Script%2035.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=80&rect=168,167,430,290|•]]

The modulation of the electron density follows the charge modulation due to the ionic lattice deformation, which can be seen by expressing the wave function of the electronic states,
$$
\begin{align*}
\psi_{k}^{\prime}(x)=\frac{1}{\sqrt{L}} \frac{\Delta e^{i k x}+\left(E_{k}-\epsilon_{k}\right) e^{i(k-Q) x}}{\sqrt{\left(E_{k}-\epsilon_{k}\right)^{2}+|\Delta|^{2}}}
\end{align*}
$$
which is a superposition of two plane waves with wave vectors $k$ and $k-Q$, respectively. Hence the charge density reads
$$
\begin{align*}
\rho_{k}(x)=-e\left|\psi_{k}^{\prime}(x)\right|^{2}=-\frac{e}{L}\left[1-\frac{2\left(\epsilon_{k}-E_{k}\right)|\Delta|}{\left(E_{k}-\epsilon_{k}\right)^{2}+|\Delta|^{2}} \sin Q x\right]
\end{align*}
$$
and its modulation from the homogeneous distribution -en is given by
$$
\begin{align*}
\begin{aligned}
\delta \rho(x) & =2 \sum_{k} \rho_{k}(x)-(-e n)=2 e \int_{0}^{k_{F}} \frac{d k^{\prime}}{2 \pi} \frac{m|\Delta| \sin Q x}{\sqrt{\hbar^{4} k_{F}^{2} k^{\prime 2}+m^{2}|\Delta|^{2}}} \\
& =\frac{e n|\Delta|}{4 \epsilon_{F}} \ln \left|\frac{4 \epsilon_{F}}{|\Delta|}\right| \sin \left(2 k_{F} x\right) .
\end{aligned}
\end{align*}
$$

Such a state, with a spatially modulated electronic charge density, is called a charge density wave (CDW) state. This instability is important in quasi-one-dimensional metals which are for example realised in organic conductors such as TTF.TCNQ (tetrathiafulvalene tetracyanoquinomethane). In higher dimensions the effect of the Kohn anomaly is generally less pronounced, so that in this case spontaneous deformations rarely occur. As we will see later, a charge density wave instability can nevertheless be observed in multi-dimensional ( $d>1$ ) systems with a socalled nested Fermi surface. These systems resemble in some respects one-dimensional systems. Finally, notice that the electron-phonon interaction strongly contributes to another kind of Fermi surface instability, when metals exhibit superconductivity.

### 3.3.4 Dynamics of Phonons and the Dielectric Function

We have seen that an external potential $V_{a}$ is screened by the polarisation of the electrons. As the positively charged ionic background is also polarisable, it should be included in the renormalisation of the external potential. In general, the fully renormalised potential $V_{\text {ren }}$ may be expressed via
$$
\begin{align*}
\varepsilon V_{\text {ren }}=V_{a}
\end{align*}
$$
with the full dielectric function $\varepsilon$. In order to determine $V_{\text {ren }}$ and $\varepsilon$, we define the 'bare' (unrenormalised) electronic (ionic) dielectric function $\varepsilon^{\mathrm{el}}\left(\varepsilon^{\mathrm{ion}}\right)$. The renormalised potential in (3.176) can be expressed considering three other points of view. First, if the ionic potential $V_{\text {ion }}$ is added to the external potential $V_{a}$, the remaining screening is due to the electrons only, i.e.,
$$
\begin{align*}
\varepsilon^{\mathrm{el}} V_{\text {ren }}=V_{a}+V_{\mathrm{ion}} .
\end{align*}
$$

Secondly, the electronic potential $V_{\text {el }}$ may be added to the external potential $V_{a}$, so that the ions exclusively renormalise the new potential $V_{\mathrm{el}}+V_{a}$, resulting in
$$
\begin{align*}
\varepsilon^{\mathrm{ion}} V_{\mathrm{ren}}=V_{a}+V_{\mathrm{el}} .
\end{align*}
$$

Note that all effects of electron polarisation are included in $V_{\mathrm{el}}$, so that the dielectric function results from the 'bare' ions. Finally we use the fact that $V_{\text {ren }}$ may be expressed as
$$
\begin{align*}
V_{\mathrm{ren}}=V_{a}+V_{\mathrm{el}}+V_{\mathrm{ion}} .
\end{align*}
$$

We obtain
$$
\begin{align*}
\left(\varepsilon^{\mathrm{el}}+\varepsilon^{\mathrm{ion}}-\varepsilon\right) V_{\mathrm{ren}}=V_{a}+V_{\mathrm{el}}+V_{\mathrm{ion}}
\end{align*}
$$
which simplifies with (3.179) to
$$
\begin{align*}
\varepsilon=\varepsilon^{\mathrm{el}}+\varepsilon^{\mathrm{ion}}-1
\end{align*}
$$

In order to find an alternative expression relating the renormalised potential $V_{\text {ren }}$ to the external potential $V_{a}$, we make the Ansatz
$$
\begin{align*}
V_{\mathrm{ren}}=\frac{1}{\varepsilon} V_{a}=\frac{1}{\varepsilon_{\mathrm{eff}}^{\text {ion }}} \frac{1}{\varepsilon^{\mathrm{el}}} V_{a}
\end{align*}
$$
i.e. the potential $V_{a} / \varepsilon^{\mathrm{el}}$ that results from bare screening of the polarisable electrons is additionally screened by an effective ionic dielectric function $\varepsilon_{\text {eff }}^{\text {ion }}$ which includes electron-phonon interactions. Using equation (3.181) and the definition of $\varepsilon_{\text {eff }}^{\text {ion }}$ we obtain
$$
\begin{align*}
\varepsilon_{\mathrm{eff}}^{\mathrm{ion}}=1+\frac{1}{\varepsilon^{\mathrm{el}}}\left(\varepsilon^{\mathrm{ion}}-1\right),
\end{align*}
$$
or using the definition (3.75)
$$
\begin{align*}
\chi_{0, \mathrm{eff}}^{\mathrm{ion}}=\frac{\chi_{0}^{\mathrm{ion}}}{\varepsilon^{\mathrm{el}}}
\end{align*}
$$

Taking into account the discussion of the plasma excitation of the bare ions, and considering the long wave-length excitations ( $\boldsymbol{k} \rightarrow 0$ ), we approximate
$$
\begin{align*}
\begin{aligned}
\varepsilon^{\mathrm{ion}} & =1-\frac{\Omega_{p}^{2}}{\omega^{2}} \\
\varepsilon^{\mathrm{el}} & =1+\frac{k_{T F}^{2}}{k^{2}} .
\end{aligned}
\end{align*}
$$

For the electrons we used the result from the quasi-static limit in (3.99). The full dielectric function now reads
$$
\begin{align*}
\varepsilon=1+\frac{k_{T F}^{2}}{k^{2}}-\frac{\Omega_{p}^{2}}{\omega^{2}}=\left(1+\frac{k_{T F}^{2}}{k^{2}}\right)\left(1-\frac{\omega_{\boldsymbol{k}}^{2}}{\omega^{2}}\right) .
\end{align*}
$$
The time-independent Coulomb interaction
$$
\begin{align*}
V_{a}=\frac{4 \pi e^{2}}{q^{2}}
\end{align*}
$$
between the electrons is replaced in a metal by an effective interaction
$$
\begin{align*}
\begin{aligned}
V_{\text {ren }}(\boldsymbol{q}, \omega) & =\frac{4 \pi e^{2}}{q^{2} \varepsilon(\boldsymbol{q}, \omega)} \\
& =\frac{4 \pi e^{2}}{k_{T F}^{2}+q^{2}}\left(\frac{\omega^{2}}{\omega^{2}-\omega_{\boldsymbol{q}}^{2}}\right) .
\end{aligned}
\end{align*}
$$

This interaction corresponds to the matrix element for a scattering process of two electrons with momentum exchange $\boldsymbol{q}$ and energy exchange $\omega$. The phonon frequency $\omega_{\boldsymbol{q}}$ is always less than the Debye frequency $\omega_{D}$. Hence the effect of the phonons is almost irrelevant for energy exchanges $\omega$ that are much larger than $\omega_{D}$. The time scale for such energies would be too short for the slow ions to move and influence the interaction. Interestingly, the repulsive bare Coulomb potential is renormalised to an interaction with an attractive channel for $\omega<\omega_{D}$ because of overcompensation by the ions. This aspect of the electron-phonon interaction is most important for superconductivity.

![Attachments/Script 36.webp|700](/img/user/Attachments/Script%2036.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=82&rect=210,258,388,384|•]]

---
## 3.4 Appendix: Linear Response Theory
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=83&selection=40,0,42,32|•]]

Much information about a macroscopic system can be gained through the observation of its response to a small external perturbation. If the perturbation is sufficiently small we can consider the response of the system in lowest order, linear in the perturbing field. This is the approach pursued by the linear response theory.
If we knew all stationary states of a macroscopic quantum system with many degrees of freedom we could calculate essentially any desired quantity. However, the full information of such system is hard to store and is also unnecessary in view of our real experimental interests. The linear response functions are an efficient way to provide in a condensed form some of the most important and relevant informations accessible in an experiment. The linear response function is one element of quantum field theory of solid state physics. We will introduce it here on an elementary level.

### 3.4.1 Linear Response Function

In this chapter we have analysed the influence of an external potential on the distribution of electrons. The position- and time-dependent potential $V(\boldsymbol{r}, t)$ induces the density modulation $\delta n(\boldsymbol{r}, t)$ which would be measured as a response to the potential. In real space and time the connection between the two is given by the linear relation,
$$
\begin{align*}
\delta n(\boldsymbol{r}, t)=\int d^{3} r^{\prime} \int d t^{\prime} \chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right) V\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)
\end{align*}
$$
where we assume that the system is homogeneous and isotropic. The response function $\chi(\boldsymbol{r}-$ $\boldsymbol{r}^{\prime}, t-t^{\prime}$ ) describes how the potential at a position $\boldsymbol{r}^{\prime}$ and time $t^{\prime}$ influences the behaviour of the system at the position $\boldsymbol{r}$ and at a later time $t$ (causality). Causality actually requires that $\chi(\boldsymbol{r}, t)=0$ for $t<0$. The response functions are non-local in space and time. The convolution can be converted into a simple product by going to momentum-frequency space,
$$
\begin{align*}
\delta n(\boldsymbol{q}, \omega)=\chi(\boldsymbol{q}, \omega) V(\boldsymbol{q}, \omega)
\end{align*}
$$
where the Fourier transformation is performed as follows,
$$
\begin{align*}
f(\boldsymbol{r}, t)=\frac{1}{\Omega} \sum_{\boldsymbol{q}} \int_{-\infty}^{+\infty} \frac{d \omega}{2 \pi} f(\boldsymbol{q}, \omega) e^{-i(\omega t-\boldsymbol{q} \cdot \boldsymbol{r})} .
\end{align*}
$$

We now determine the response function for a general external field and response quantity.

**Kubo formula - retarded Green's function**

We consider a quantum system described by the Hamiltonian $\mathcal{H}_{0}$ and analyze its response to an external field $\phi(\boldsymbol{r}, t)$ which couples to the field operator $\widehat{A}(\boldsymbol{r})$,
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{0}+\mathcal{H}^{\prime}(t)=\mathcal{H}_{0}+\int d^{3} r \widehat{A}(\boldsymbol{r}) \phi(\boldsymbol{r}, t) e^{\eta t}
\end{align*}
$$
where $\eta=0_{+}$is a small positive parameter allowing to switch the perturbation adiabatically on, i.e. at time $t \rightarrow-\infty$ there is no perturbation. The behaviour of the system can be determined by the density matrix $\widehat{\rho}(t)$. Knowing $\widehat{\rho}$ we can calculate interesting mean values of operators, $\langle\widehat{B}(t)\rangle=\operatorname{tr}(\widehat{\rho}(t) \widehat{B})$. A way to find the density matrix goes via the equation of motion,
$$
\begin{align*}
i \hbar \frac{\partial \widehat{\rho}}{\partial t}=-[\widehat{\rho}, \mathcal{H}]=-\left[\widehat{\rho}, \mathcal{H}_{0}+\mathcal{H}^{\prime}\right]
\end{align*}
$$

We proceed using the concept of time-dependent perturbation theory, $\widehat{\rho}=\widehat{\rho}_{0}+\delta \widehat{\rho}(t)$, with
$$
\begin{align*}
\widehat{\rho}_{0}=\frac{1}{Z} e^{-\beta \mathcal{H}_{0}} \quad \text { with } \quad Z=\operatorname{tr} e^{-\beta \mathcal{H}_{0}}
\end{align*}
$$
as the partition function and insert this form into the equation of motion, which we then truncate at linear order in $\mathcal{H}^{\prime}$,
$$
\begin{align*}
i \hbar \frac{\partial}{\partial t} \delta \widehat{\rho}=-\left[\delta \widehat{\rho}, \mathcal{H}_{0}\right]-\left[\widehat{\rho}_{0}, \mathcal{H}^{\prime}\right]+\cdots
\end{align*}
$$

We turn to the interaction representation (time-dependent perturbation theory),
$$
\begin{align*}
\delta \widehat{\rho}(t)=e^{-i \mathcal{H} 0 t / \hbar} \widehat{y}(t) e^{i \mathcal{H}_{0} t / \hbar} \quad \Rightarrow \quad i \hbar \frac{\partial}{\partial t} \delta \widehat{\rho}=-\left[\delta \widehat{\rho}, \mathcal{H}_{0}\right]+e^{-i \mathcal{H}_{0} t / \hbar}\left\{i \hbar \frac{\partial \widehat{y}(t)}{\partial t}\right\} e^{i \mathcal{H}_{0} t / \hbar}
\end{align*}
$$

Comparing Eqs. (3.197) and (3.198) and using (3.195) we arrive at the equation for $\widehat{y}$,
$$
\begin{align*}
i \hbar \frac{\partial \widehat{y}(t)}{\partial t}=-\left[\widehat{\rho}_{0}, \mathcal{H}_{i n t}^{\prime}(t)\right] \quad \text { with } \quad \mathcal{H}_{i n t}^{\prime}(t)=e^{i \mathcal{H}_{0} t / \hbar} \mathcal{H}^{\prime} e^{-i \mathcal{H}_{0} t / \hbar}
\end{align*}
$$
which is formally solved by
$$
\begin{align*}
\widehat{y}(t)=\frac{i}{\hbar} \int_{-\infty}^{t} d t^{\prime}\left[\widehat{\rho}_{0}, \mathcal{H}_{i n t}^{\prime}\left(t^{\prime}\right)\right]
\end{align*}
$$

We now look at the mean value of the observable $\widehat{B}(\boldsymbol{r})$. For simplicity we assume that the expectation value of $\widehat{B}$ vanishes, if there is no perturbation, i.e. $\langle\widehat{B}\rangle_{0}=\operatorname{tr}\left\{\widehat{\rho}_{0} \widehat{B}\right\}=0$. We determine
$$
\begin{align*}
\begin{aligned}
\langle\widehat{B}(\boldsymbol{r})\rangle(t) & =\operatorname{tr}\{\delta \widehat{\rho}(\boldsymbol{r}, t) \widehat{B}(\boldsymbol{r})\} \\
& =\operatorname{tr}\left\{\frac{i}{\hbar} e^{-i \mathcal{H}_{0} t / \hbar} \int_{-\infty}^{t} d t^{\prime}\left[\widehat{\rho}_{0}, \mathcal{H}_{i n t}^{\prime}\left(t^{\prime}\right)\right] e^{i \mathcal{H}} t / \hbar \widehat{B}(\boldsymbol{r})\right\}
\end{aligned}
\end{align*}
$$

By means of cyclic permutation of the operators in $\{\ldots\}$, which does not affect the trace, we arrive at the form
$$
\begin{align*}
\begin{aligned}
\langle\widehat{B}(\boldsymbol{r})\rangle(t) & =-\frac{i}{\hbar} \int_{-\infty}^{t} d t^{\prime} \int d^{3} r^{\prime} \operatorname{tr}\left\{\widehat{\rho}_{0}\left[\widehat{B}_{i n t}(\boldsymbol{r}, t), \widehat{A}_{i n t}\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)\right]\right\} \phi\left(\boldsymbol{r}^{\prime}, t^{\prime}\right) e^{\eta t^{\prime}} \\
& =\int d t^{\prime} \int d^{3} r^{\prime} \chi_{B A}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right) \phi\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)
\end{aligned}
\end{align*}
$$
which defines the response function $\chi_{B A}$. Notably, it is entirely determined by the properties of the unperturbed system.

**Kubo-Formula - Recipe for the linear response function:** We arrive at the following recipe to obtain a general linear response function: We denote the Hamiltonian of the (unperturbed) system as $\mathcal{H}_{0}$. Then the linear response function of the pair of field operators $\widehat{A}(\boldsymbol{r}), \widehat{B}(\boldsymbol{r})$ (they are often in practice conjugate operators, $\widehat{A}=\widehat{B}^{\dagger}$ ) is given by
$$
\begin{align*}
\chi_{B A}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right)=-\frac{i}{\hbar} \Theta\left(t-t^{\prime}\right)\left\langle\left[\widehat{B}_{H}(\boldsymbol{r}, t), \widehat{A}_{H}\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)\right]\right\rangle_{\mathcal{H}}
\end{align*}
$$
where $\langle\ldots\rangle_{\mathcal{H}_{0}}$ is the thermal mean value with respect to the Hamiltonian $\mathcal{H}_{0}$,
$$
\begin{align*}
\langle\widehat{C}\rangle_{\mathcal{H}_{0}}=\frac{\operatorname{tr}\left\{\widehat{C} e^{-\beta \mathcal{H}_{0}}\right\}}{\operatorname{tr}\left\{e^{-\beta \mathcal{H}_{0}}\right\}}=\frac{\operatorname{tr}\left\{\widehat{C} e^{-\beta \mathcal{H}_{0}}\right\}}{Z},
\end{align*}
$$
$\widehat{A}_{H}(t)=e^{i \mathcal{H}}{ }_{0} t / \hbar \widehat{A} e^{-i \mathcal{H}_{0} t / \hbar}$ is the Heisenberg representation of the operator $\widehat{A}$ (analogous for $\widehat{B}$ ). Note that the temporal step function $\Theta\left(t-t^{\prime}\right)$ ensures the causality, i.e. there is no response for the system before there is a perturbation. The form (3.203) is often called Kubo formula or retarded Green's function.

### 3.4.2 Information in the Response Function

The information stored in the response function can be most easily visualised by assuming that we know the complete set of stationary states of the system Hamiltonian $\mathcal{H}_{0}: \mathcal{H}_{0}|n\rangle=\epsilon_{n}|n\rangle$. For simplicity we will from now on assume that $\widehat{A}=\widehat{B}^{\dagger}$ which is the case in many practical examples, and will simplify our notation. We can then rewrite the response function $\chi$ as
$$
\begin{align*}
\begin{aligned}
\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right)=-\frac{i}{\hbar} \Theta\left(t-t^{\prime}\right) \sum_{n} \frac{e^{-\beta \epsilon_{n}}}{Z}\{ & \langle n| e^{i \mathcal{H} 0 t / \hbar} \widehat{B}(\boldsymbol{r}) e^{-i \mathcal{H} \mathcal{H}_{0} t / \hbar} e^{i \mathcal{H} t_{0} t^{\prime} / \hbar} \widehat{B}\left(\boldsymbol{r}^{\prime}\right)^{\dagger} e^{-i \mathcal{H}_{0} t^{\prime} / \hbar}|n\rangle \\
& \left.-\langle n| e^{i \mathcal{H} t_{0} t^{\prime} / \hbar} \widehat{B}\left(\boldsymbol{r}^{\prime}\right)^{\dagger} e^{-i \mathcal{H}_{0} t^{\prime} / \hbar} e^{i \mathcal{H}_{0} t / \hbar} \widehat{B}(\boldsymbol{r}) e^{-i \mathcal{H}_{0} t / \hbar}|n\rangle\right\} \\
=-\frac{i}{\hbar} \Theta\left(t-t^{\prime}\right) \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\{ & \langle n| \widehat{B}(\boldsymbol{r})\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right| \widehat{B}\left(\boldsymbol{r}^{\prime}\right)^{\dagger}|n\rangle e^{i\left(\epsilon_{n}-\epsilon_{n^{\prime}}\right)\left(t-t^{\prime}\right) / \hbar} \\
& \left.-\langle n| \widehat{B}\left(\boldsymbol{r}^{\prime}\right)^{\dagger}\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right| \widehat{B}(\boldsymbol{r})|n\rangle e^{i\left(\epsilon_{n^{\prime}}-\epsilon_{n}\right)\left(t-t^{\prime}\right) / \hbar}\right\},
\end{aligned}
\end{align*}
$$
where we inserted $1=\sum_{n^{\prime}}\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right|$. It is convenient to work in $\boldsymbol{q}$ - and $\omega$-space, reached via Fourier transformation,
$$
\begin{align*}
\begin{aligned}
\chi(\boldsymbol{q}, \omega) & =\int d^{3} \tilde{r} \int_{-\infty}^{+\infty} d \tilde{t} \chi(\tilde{\boldsymbol{r}}, \tilde{t}) e^{i \omega \tilde{t}-i \boldsymbol{q} \cdot \tilde{\boldsymbol{r}}} \\
& \left.=-\frac{i}{\hbar \Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2} \int_{0}^{\infty} d \tilde{t}\left\{e^{i\left(\epsilon_{n}-\epsilon_{n^{\prime}}+\hbar \omega\right) \tilde{t} / \hbar}-e^{i\left(\epsilon_{n^{\prime}}-\epsilon_{n}+\hbar \omega\right) \tilde{t} / \hbar}\right\} e^{-\eta \tilde{t}}
\end{aligned}
\end{align*}
$$
where we introduce
$$
\begin{align*}
\widehat{B}_{\boldsymbol{q}}=\int d^{3} \tilde{r} \widehat{B}(\tilde{\boldsymbol{r}}) e^{-i \boldsymbol{q} \cdot \tilde{\boldsymbol{r}}} \quad \text { and } \quad \widehat{B}_{\boldsymbol{q}}^{\dagger}=\int d^{3} \tilde{r} \widehat{B}(\tilde{\boldsymbol{r}})^{\dagger} e^{i \boldsymbol{q} \cdot \tilde{\boldsymbol{r}}} .
\end{align*}
$$

After the integration over time in (3.206) we obtain
$$
\begin{align*}
\begin{aligned}
\chi(\boldsymbol{q}, \omega) & \left.=\frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2}\left\{\frac{1}{\hbar \omega-\epsilon_{n^{\prime}}+\epsilon_{n}+i \hbar \eta}-\frac{1}{\hbar \omega-\epsilon_{n}+\epsilon_{n^{\prime}}+i \hbar \eta}\right\} \\
& =\int_{0}^{\infty} d \omega^{\prime} S\left(\boldsymbol{q}, \omega^{\prime}\right)\left\{\frac{1}{\omega-\omega^{\prime}+i \eta}-\frac{1}{\omega+\omega^{\prime}+i \eta}\right\} .
\end{aligned}
\end{align*}
$$

In the last line we write the response function in a spectral form with $S(\boldsymbol{q}, \omega)$ as the spectral function,
$$
\begin{align*}
\left.S(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2} \delta\left(\hbar \omega-\epsilon_{n^{\prime}}+\epsilon_{n}\right)
\end{align*}
$$

We call $S(\boldsymbol{q}, \omega)$ also dynamical structure factor which comprises information about the excitation spectrum associated with $\widehat{B}$. It represents a correlation function,
$$
\begin{align*}
S\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right)=\frac{1}{h}\left\langle\widehat{B}_{H}(\boldsymbol{r}, t) \widehat{B}_{H}\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)^{\dagger}\right\rangle_{\mathcal{H}_{0}},
\end{align*}
$$
and contains the spectrum of the excitations which can be coupled to by the external perturbation.

**Lindhard function**

We show now how the Lindhard function is derived, where we restrict to independent electrons. Thus, we choose, $\widehat{B}(\boldsymbol{r})=\sum_{s} \widehat{\Psi}_{s}(\boldsymbol{r})^{\dagger} \widehat{\Psi}_{s}(\boldsymbol{r})$ which leads to
$$
\begin{align*}
\widehat{B}_{\boldsymbol{q}}=\widehat{\rho}_{\boldsymbol{q}}=\sum_{\boldsymbol{k}, s} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}=\sum_{\boldsymbol{k}, s} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s} .
\end{align*}
$$

Now consider the matrix elements in
$$
\begin{align*}
\sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\langle n| \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right| \widehat{c}_{\boldsymbol{k}^{\prime}+\boldsymbol{q} s}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} s}|n\rangle=n_{0 \boldsymbol{k}}\left(1-n_{0 \boldsymbol{k}+\boldsymbol{q}}\right) \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}
\end{align*}
$$
for which
$$
\begin{align*}
\epsilon_{n^{\prime}}=\epsilon_{n}-\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}+\boldsymbol{q}} \quad \Rightarrow \quad \epsilon_{n^{\prime}}-\epsilon_{n}=\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}} .
\end{align*}
$$

The matrix element probes probability of whether the electron state with momentum $\boldsymbol{k}$ is occupied, by $n_{\boldsymbol{k}}$, and the state $\boldsymbol{k}+\boldsymbol{q}$, by $1-n_{\boldsymbol{k}+\boldsymbol{q}}$, is empty. Thus we obtain,
$$
\begin{align*}
\chi(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}} n_{0 \boldsymbol{k}}\left(1-n_{0 \boldsymbol{k}+\boldsymbol{q}}\right)\left\{\frac{1}{\hbar \omega-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}+\epsilon_{\boldsymbol{k}}+i \hbar \eta}-\frac{1}{\hbar \omega+\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+i \hbar \eta}\right\} .
\end{align*}
$$

The second term can be rewritten by substitution $\boldsymbol{k} \rightarrow \boldsymbol{k}-\boldsymbol{q}$ and in a next step switch the sign of $\boldsymbol{q}$ which leaves the result invariant, as our system has inversion symmetry. This leas then to
$$
\begin{align*}
\chi(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{0 \boldsymbol{k}}\left(1-n_{0 \boldsymbol{k}+\boldsymbol{q}}\right)-n_{0 \boldsymbol{k}+\boldsymbol{q}}\left(1-n_{0 \boldsymbol{k}}\right)}{\hbar \omega-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}+\epsilon_{\boldsymbol{k}}+i \hbar \eta}=\frac{1}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{0 \boldsymbol{k}+\boldsymbol{q}}-n_{0 \boldsymbol{k}}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta},
\end{align*}
$$
which is the Lindhard function up to a factor $1 / \Omega$. Note that the response functions we formulated by the Kubo formula are extensive, while the definition we have used for the Lindhard function previously.

### 3.4.3 Analytical Properties

The representation of the linear response function in (3.208) shows that $\chi_{B A}(\boldsymbol{q}, \omega)$ has poles only in the lower half of the complex $\omega$-plane. This property reflects causality ( $\chi(\boldsymbol{r}, t)=0$ for $t<0)$. We separate now $\chi=\chi^{\prime}+i \chi^{\prime \prime}$ in real and imaginary part and use the relation
$$
\begin{align*}
\lim _{\eta \rightarrow 0_{+}} \frac{1}{x+i \eta}=\mathcal{P} \frac{1}{x}-i \pi \delta(x) .
\end{align*}
$$
with $\mathcal{P}$ denoting the principal part. This relation leads to
$$
\begin{align*}
\begin{aligned}
& \chi^{\prime}(\boldsymbol{q}, \omega)=\int_{0}^{\infty} d \omega^{\prime} S\left(\boldsymbol{q}, \omega^{\prime}\right)\left\{\mathcal{P} \frac{1}{\omega-\omega^{\prime}}-\mathcal{P} \frac{1}{\omega+\omega^{\prime}}\right\}, \\
& \chi^{\prime \prime}(\boldsymbol{q}, \omega)=-\pi\{S(\boldsymbol{q}, \omega)-S(\boldsymbol{q},-\omega)\} .
\end{aligned}
\end{align*}
$$

Therefore the imaginary part of $\chi$ corresponds to the excitation spectrum of the system. Finally, it has to be noted that $\chi(\boldsymbol{q}, \omega)$ follows the Kramers-Kronig relations:
$$
\begin{align*}
\begin{aligned}
& \chi^{\prime}(\boldsymbol{q}, \omega)=-\frac{1}{\pi} \int_{-\infty}^{+\infty} d \omega^{\prime} \mathcal{P} \frac{\chi^{\prime \prime}\left(\boldsymbol{q}, \omega^{\prime}\right)}{\omega-\omega^{\prime}} \\
& \chi^{\prime \prime}(\boldsymbol{q}, \omega)=\frac{1}{\pi} \int_{-\infty}^{+\infty} d \omega^{\prime} \mathcal{P} \frac{\chi^{\prime}\left(\boldsymbol{q}, \omega^{\prime}\right)}{\omega-\omega^{\prime}} .
\end{aligned}
\end{align*}
$$

Note to the Kramers-Kronig relation: This relation results from the analytic structure of $\chi$. Consider a contour in the upper half-plane of $\omega^{\prime}$ where $\chi\left(\boldsymbol{q}, \omega^{\prime}\right)$ has no poles due to causality.
$$
\begin{align*}
\begin{aligned}
& \oint_{C} d \omega^{\prime} \frac{\chi\left(\boldsymbol{q}, \omega^{\prime}\right)}{\omega-\omega^{\prime}-i \eta^{\prime}}=0 \\
& \quad \Rightarrow \quad \int_{-\infty}^{+\infty} d \omega^{\prime} \chi\left(\boldsymbol{q}, \omega^{\prime}\right) \mathcal{P} \frac{1}{\omega-\omega^{\prime}}+i \pi \chi(\boldsymbol{q}, \omega)=0 .
\end{aligned}
\end{align*}
$$
Separating this equation into real and imaginary part yields the Kramers-Kronig relation.

![Attachments/Script 37.webp|700](/img/user/Attachments/Script%2037.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=87&rect=216,190,387,295|•]]

### 3.4.4 Fluctuation-Dissipation Theorem

First we consider the aspect of dissipation incorporated in the response function. For this purpose we ignore for simplicity the spatial dependence and consider a perturbative part of the Hamiltonian which only depends on time.
$$
\begin{align*}
\mathcal{H}^{\prime}=\int d^{3} r \widehat{B}(\boldsymbol{r}) \phi(\boldsymbol{r}, t) \quad \Rightarrow \quad\langle\widehat{B}(\boldsymbol{r})\rangle(t)=\int_{0}^{\infty} d t^{\prime} \int d^{3} r^{\prime} \chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right) \phi\left(\boldsymbol{r}, t^{\prime}\right)
\end{align*}
$$
with $\widehat{B}=\widehat{B}^{\dagger}$. We assume now a monochromatic external field,
$$
\begin{align*}
\begin{aligned}
\phi(\boldsymbol{r}, t)=\frac{1}{2}\left(\phi_{0}(\boldsymbol{r}) e^{-i \omega t}\right. & \left.+\phi_{0}(\boldsymbol{r})^{*} e^{i \omega t}\right) \\
\Rightarrow \quad\langle\widehat{B}(\boldsymbol{r})\rangle(t) & =\int_{0}^{\infty} d t^{\prime} \int d^{3} r^{\prime} \chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right) \frac{1}{2}\left(\phi_{0}\left(\boldsymbol{r}^{\prime}\right) e^{-i \omega t^{\prime}}+\phi_{0}\left(\boldsymbol{r}^{\prime}\right)^{*} e^{i \omega t^{\prime}}\right) \\
& =\frac{1}{2} \int d^{3} r^{\prime}\left\{\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right)^{*} \phi_{0} e^{-i \omega t}+\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right) \phi_{0}^{*} e^{i \omega t}\right\} .
\end{aligned}
\end{align*}
$$


The energy dissipation rate is determined by
$$
\begin{align*}
\begin{aligned}
\frac{d E}{d t}= & \left\langle\frac{\partial}{\partial t} \mathcal{H}\right\rangle=\int d^{r}\langle\widehat{B}(\boldsymbol{r})\rangle(t) \frac{\partial \phi(\boldsymbol{r}, t)}{\partial t} \\
= & \frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{\partial \phi(\boldsymbol{r}, t)}{\partial t}\left\{\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right)^{*} \phi_{0} e^{-i \omega t}+\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right) \phi_{0}^{*} e^{i \omega t}\right\} \\
= & \frac{1}{2} \int d^{3} r d^{3} r^{\prime} i \omega\left\{\phi_{0}(\boldsymbol{r}) e^{-i \omega t}+\phi_{0}(\boldsymbol{r})^{*} e^{i \omega t}\right\}\left\{\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right)^{*} \phi_{0} e^{-i \omega t}+\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right) \phi_{0}^{*} e^{i \omega t}\right\} \\
& \Rightarrow \frac{\overline{d E}}{d t}=\frac{\omega}{2} \iint d^{3} r d^{3} r^{\prime} \phi_{0}(\boldsymbol{r})^{*} \chi^{\prime \prime}(\boldsymbol{r}-\boldsymbol{r}, \omega) \phi_{0}\left(\boldsymbol{r}^{\prime}\right)=\sum_{\boldsymbol{q}} \frac{\omega}{2} \chi^{\prime \prime}(\boldsymbol{q}, \omega)|\phi(\boldsymbol{q}, \omega)|^{2}<0
\end{aligned}
\end{align*}
$$
where for the time averaged rate we drop oscillating terms with the time dependence $e^{ \pm i 2 \omega t}.$
The result before used the following: The time-derivative of the Hamiltonian is given by
$$
\begin{align*}
\frac{d \mathcal{H}}{d t}=\frac{\partial \mathcal{H}}{\partial t}+\frac{i}{\hbar}[\mathcal{H}, \mathcal{H}]=\frac{\partial \mathcal{H}}{\partial t}
\end{align*}
$$
for a quantum mechanical problem. The analogous relation is obtained for classical systems.

The imaginary part of the dynamical susceptibility describes the dissipation of the system and gives information about the spectrum and the density of excitations for given $\boldsymbol{q}$ and $\omega$. From the definition of the dynamical structure factor it follows that
$$
\begin{align*}
S(\boldsymbol{q},-\omega)=e^{-\beta \hbar \omega} S(\boldsymbol{q}, \omega)
\end{align*}
$$
because
$$
\begin{align*}
\begin{aligned}
S(\boldsymbol{q},-\omega) & \left.=\frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2} \delta\left(-\hbar \omega-\epsilon_{n^{\prime}}+\epsilon_{n}\right) \\
& \left.=\frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n^{\prime}}-\beta \hbar \omega}}{Z}\left|\left\langle n^{\prime}\right| \widehat{B}_{-\boldsymbol{q}}\right| n\right\rangle\left.\right|^{2} \delta\left(\hbar \omega-\epsilon_{n}+\epsilon_{n^{\prime}}\right)=e^{-\beta \hbar \omega} S(\boldsymbol{q}, \omega) .
\end{aligned}
\end{align*}
$$

This is a statement of detailed balance. The transition matrix element between two states is the same whether the energy is absorbed or emitted. For emitting, however, the thermal occupation of the initial state has to be taken into account.
Using (3.217) we can derive the following relation
$$
\begin{align*}
\chi^{\prime \prime}(\boldsymbol{q}, \omega)=-\pi[S(\boldsymbol{q}, \omega)-S(\boldsymbol{q},-\omega)]=-\pi\left[1-e^{-\beta \hbar \omega}\right] S(\boldsymbol{q}, \omega)
\end{align*}
$$
which is known as the fluctuation-dissipation theorem. Let us consider here some consequences and find the relation to our earlier simplified formulations.
$$
\begin{align*}
\begin{aligned}
\int_{-\infty}^{+\infty} d \omega S(\boldsymbol{q}, \omega) & \left.=\int_{-\infty}^{+\infty} d \omega \frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2} \delta\left(\hbar \omega-\epsilon_{n^{\prime}}+\epsilon_{n}\right) \\
& =\frac{1}{\hbar \Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\langle n| \widehat{B}_{\boldsymbol{q}}\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right| \widehat{B}_{\boldsymbol{q}}^{\dagger}|n\rangle \\
& =\frac{1}{\hbar}\left\langle\widehat{B}_{\boldsymbol{q}}(0) \widehat{B}_{\boldsymbol{q}}^{\dagger}(0)\right\rangle=-\frac{1}{\pi} \int_{-\infty}^{+\infty} d \omega \frac{\chi^{\prime \prime}(\boldsymbol{q}, \omega)}{1-e^{-\beta \hbar \omega}}
\end{aligned}
\end{align*}
$$

This corresponds to the equal-time correlation function (assuming $\langle\widehat{B}\rangle=0$ ).

Now we turn to the classical case of the fluctuation-dissipation theorem and consider the the limit $k_{B} T \gg \hbar \omega$. Then we may approximate this equation by
$$
\begin{align*}
\langle |  \widehat{B}_{\boldsymbol{q}}|^{2}\rangle \approx-\frac{k_{B} T}{\pi} \int_{-\infty}^{+\infty} d \omega \frac{\chi^{\prime \prime}(\boldsymbol{q}, \omega)}{\omega}=-k_{B} T \chi^{\prime}(\boldsymbol{q}, 0)=-k_{B} T \chi(\boldsymbol{q}, 0)
\end{align*}
$$

This is valid, if $\chi^{\prime \prime}(\boldsymbol{q}, \omega)$ essentially vanishes for frequencies comparable and larger than the temperature. 
**Static response function**: We consider a system with
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{0}+\mathcal{H}^{\prime}=\mathcal{H}_{0}+\int d^{3} r h(\boldsymbol{r}) \widehat{B}(\boldsymbol{r})=\mathcal{H}_{0}+\frac{1}{V} \sum_{\boldsymbol{q}} h_{-q} \widehat{B}_{\boldsymbol{q}}=\mathcal{H}_{0}+\sum_{\boldsymbol{q}} H_{-\boldsymbol{q}} \widehat{B}_{\boldsymbol{q}}
\end{align*}
$$

where we assume for the following $\widehat{B}_{-q}=\widehat{B}_{q}^{\dagger}$. The mean value

$$
\begin{align*}
\left\langle\widehat{B}_{\boldsymbol{q}}\right\rangle=\frac{\partial F}{\partial H_{-\boldsymbol{q}}}=-\frac{\partial}{\partial H_{-\boldsymbol{q}}} k_{B} T \ln Z=\operatorname{tr}\left(\widehat{\rho} \widehat{B}_{\boldsymbol{q}}\right)
\end{align*}
$$
with $\widehat{\rho}=\exp [\beta(F-\mathcal{H})]$ and $\left\langle\widehat{B}_{\boldsymbol{q}}\right\rangle=0$ for $H_{\boldsymbol{q}}=0$. The static response function is obtain from
$$
\begin{align*}
\chi(\boldsymbol{q})=\left.\frac{\partial\left\langle\widehat{B}_{\boldsymbol{q}}\right\rangle}{\partial H_{\boldsymbol{q}}}\right|_{H_{\boldsymbol{q}}=0}=\left.\operatorname{tr}\left\{\widehat{B}_{\boldsymbol{q}} \frac{\partial}{\partial H_{\boldsymbol{q}}} e^{\beta(F-\mathcal{H})}\right\}\right|_{H_{\boldsymbol{q}}=0}=\left.\operatorname{tr}\left\{\widehat{B}_{\boldsymbol{q}} \beta\left(\left\langle\widehat{B}_{-\boldsymbol{q}}\right\rangle-\widehat{B}_{-\boldsymbol{q}}\right) \widehat{\rho}\right\}\right|_{H_{\boldsymbol{q}}=0}=-\beta\left\langle\widehat{B}_{\boldsymbol{q}} \widehat{B}_{\boldsymbol{q}}^{\dagger}\right\rangle
\end{align*}
$$
which is the classical form of the fluctuation dissipation theorem for spatially modulated perturbative fields.
For a uniform field we find
$$
\begin{align*}
\int d^{3} r d^{3} r^{\prime}\left\langle\widehat{B}(\boldsymbol{r}, t=0) \widehat{B}^{\dagger}\left(\boldsymbol{r}^{\prime}, t=0\right)\right\rangle=\left\langle\widehat{B}_{\boldsymbol{q}=0} \widehat{B}_{\boldsymbol{q}}^{\dagger}\right\rangle=-k_{B} T \chi(\boldsymbol{q}=0)=-k_{B} T \chi
\end{align*}
$$
i.e. the static uniform susceptibility is related to the integration of the equal-time correlation function as we had used previously several times. Note the minus sign results from the sign of coupling to the external field.

---