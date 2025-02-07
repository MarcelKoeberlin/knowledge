---
{"dg-publish":true,"permalink":"/notes/solid-state-theory/7-magnetism-in-metals/","hide":"true","updated":"2025-02-07T10:57:49.000+01:00"}
---

Jump back to ==[[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Solid-State Theory/7 Magnetism in Metals#7.1 Stoner Instability\|7.1 Stoner Instability]]
- [[Notes/Solid-State Theory/7 Magnetism in Metals#7.2 General Spin Susceptibility and Magnetic Instabilities\|7.2 General Spin Susceptibility and Magnetic Instabilities]]
- [[Notes/Solid-State Theory/7 Magnetism in Metals#7.3 Stoner Excitations\|7.3 Stoner Excitations]]

---
# 7 Magnetism in Metals
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=155&selection=2,0,2,19|•]]

Magnetic ordering in metals can be viewed as an instability of the Fermi liquid state. We introduce this new phase of metals through the description of the Stoner ferromagnetism. The discussion of antiferromagnetism and spin density wave phases will be only brief in this chapter. In Stoner ferromagnets the magnetic moment is provided by the spin of itinerant electrons. Magnetism due to localised magnetic moments will be considered in the context of Mott insulators which are subject of the next chapter.
Well-known examples of elemental ferromagnetic metals are iron (Fe), cobalt (Co) and nickel $(\mathrm{Ni})$ belonging to the $3 d$ transition metals, where the $3 d$-orbital character is dominant for the conduction electrons at the Fermi energy. These orbitals are rather tightly bound to the atomic cores such that the electron mobility is reduced, enhancing the effect of interaction which is essential for the formation of a magnetic state. Other forms of magnetism, such as antiferromagnetism and the spin density wave state are found in the $3 d$ transition metals Cr and Mn . Note, $4 d$ and $5 d$ transition metals within the same columns of the periodic system are not magnetic. Their $d$-orbitals are more extended, leading to a higher mobility of the electrons, such that the mutual interaction is insufficient to trigger magnetism. It is, however, possible to find ferromagnetism in $\mathrm{ZrZn}_{2}$ where zink $(\mathrm{Zn})$ may act as a spacer reducing the mobility of the $4 d$-electrons of zirconium ( Zr ). The $4 d$-elements Pd and Rh and the $5 d$-element Pt are, however, nearly ferromagnetic. Going further in the periodic table, the $4 f$-orbitals appearing in the lanthanides are nearly localised and can lead to ferromagnetism, as illustrated by the elements going from Gd through Tm in the periodic system.
Magnetism appears through a phase transition, meaning that the metal is non-magnetic at temperatures above a critical temperature $T_{c}$, the Curie-temperature. In many cases, magnetism appears at $T_{c}$ as a continuous, second order phase transition involving the spontaneous violation of symmetry. This transition is lacking latent heat (no discontinuity in entropy and volume) but instead features a discontinuity in the specific heat.

---
## 7.1 Stoner Instability
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=156&selection=0,0,2,18|•]]

In the following section, we study the emergence of the metallic ferromagnetism originating from the Stoner mechanism. In close analogy to the first Hund's rule, the exchange interaction among the electrons plays a crucial role here. The alignment of the electronic spins in a favoured direction allows the system to reduce the energy contribution due to Coulomb repulsion. According to Landau's theory of Fermi liquids, the interaction between electrons renormalises the spin susceptibility $\chi_{0}$ to
$$
\begin{align*}
\chi=\frac{m^{*}}{m} \frac{\chi_{0}}{1+F_{0}^{a}},
\end{align*}
$$
which obviously diverges for $F_{0}^{a} \rightarrow-1$ and leads to a ferromagnetic instability of the Fermi liquid. Then, $F_{0}^{a} \approx-U N\left(\epsilon_{F}\right) / 2$ provides a critical value for the interaction $U_{c}=2 / N\left(\epsilon_{F}\right)$ such that $F_{0}^{a}=-1$ and $\chi$ diverges. We will see below that this corresponds to a value we will derive also by a mean field theory.

### 7.1.1 Stoner Model Within the Mean Field Approximation

Consider the following model for conduction electrons with a repulsive contact interaction,
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{c} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}+U \int d^{3} r d^{3} r^{\prime} \widehat{\rho}_{\uparrow}(\boldsymbol{r}) \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \widehat{\rho}_{\downarrow}\left(\boldsymbol{r}^{\prime}\right),
\end{align*}
$$
where we use the electron density $\widehat{\rho}_{s}(\boldsymbol{r})=\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r})$ and the field operator $\widehat{\Psi}_{s}^{\dagger}\left(\widehat{\Psi}_{s}\right)$ follows from the definition (3.28) [(3.29)]. The contact interaction is an approximation of the screened Coulomb interaction. Due to the Pauli exclusion principle, the contact interaction is only active between electrons with opposite spins. This is a consequence of the exchange hole in the two-particle correlation between electrons of identical spin (cf. Figure 3.1). We obtain a useful insight into mechanisms leading to ferromagnetism by means of a mean field approximation. Note that the following mean field calculation is equivalent to a variational approach using simple many-body wave-function (Slater determinant) with different concentrations of up and down spins. We rewrite,
$$
\begin{align*}
\widehat{\rho}_{s}(\boldsymbol{r})=n_{s}+\left[\widehat{\rho}_{s}(\boldsymbol{r})-n_{s}\right],
\end{align*}
$$
where
$$
\begin{align*}
n_{s}=\left\langle\widehat{\rho}_{s}(\boldsymbol{r})\right\rangle,
\end{align*}
$$
and $\left\langle{ }^{\circ}\right\rangle$ represents the thermal average. We stipulate that the deviation from the mean value $n_{s}$ is small in the sense that
$$
\begin{align*}
\left\langle\left[\widehat{\rho}_{\uparrow}(\boldsymbol{r})-n_{\uparrow}\right]\left[\widehat{\rho}_{\downarrow}(\boldsymbol{r})-n_{\downarrow}\right]\right\rangle \ll n_{\uparrow} n_{\downarrow} .
\end{align*}
$$

Inserting equation (7.3) into the Hamiltonian (7.2), we obtain
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{\mathrm{mf}} & =\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}+U \int d^{3} r\left[\widehat{\rho}_{\uparrow}(\boldsymbol{r}) n_{\downarrow}+\widehat{\rho}_{\downarrow}(\boldsymbol{r}) n_{\uparrow}-n_{\uparrow} n_{\downarrow}\right] \\
& =\sum_{\boldsymbol{k}, s}\left(\epsilon_{\boldsymbol{k}}+U n_{\bar{s}}\right) \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}-U \Omega n_{\uparrow} n_{\downarrow}
\end{aligned}
\end{align*}
$$
the mean field Hamiltonian, describing electrons which move in the uniform background of electrons of opposite spin coupling via the spin dependent exchange interaction ($\bar{s}$ denotes to opposite spin $s$ ). Fluctuations of the form $\left\langle\left[\widehat{\rho}_{\uparrow}(\boldsymbol{r})-n_{\uparrow} \backslash\left[\widehat{\rho}_{\downarrow}(\boldsymbol{r})-n_{\downarrow} \downarrow\right\rangle\right.\right.$ are neglected here. The advantage of this approximation is, that the many-body problem is now reduced to an effective one-particle problem, where only the mean electron interaction is taken into account. This is equivalent to a generalised Hartree-Fock approximation and enables us to calculate certain expectation values, such as the density of one spin species, e.g.;

$$
\begin{align*}
\begin{aligned}
n_{\uparrow} & =\frac{1}{\Omega} \sum_{\boldsymbol{k}}\left\langle\widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}\right\rangle=\frac{1}{\Omega} \sum_{\boldsymbol{k}} f\left(\epsilon_{\boldsymbol{k}}+U n_{\downarrow}\right) \\
& =\int d \epsilon \frac{1}{\Omega} \sum_{\boldsymbol{k}} \delta\left(\epsilon-\epsilon_{\boldsymbol{k}}-U n_{\downarrow}\right) f(\epsilon) \\
& =\int d \epsilon \frac{1}{2} N\left(\epsilon-U n_{\downarrow}\right) f(\epsilon)
\end{aligned}
\end{align*}
$$
where $f(\epsilon)$ is the Fermi-Dirac distribution function. An analogous result is found for the opposite spin direction. These mean densities are determined self-consistently, namely such that the insertion of $n_{s}$ in into the mean field Hamiltonian (7.7) provides the correct output according to the expectation values given in equation (7.8). Furthermore, the constraint that the total number of electrons is conserved, must be implemented. The real magnetisation $M=\mu_{B} m$ is proportional to $m$ which is defined via
$$
\begin{align*}
n_{s}=\frac{1}{2}\left[\left(n_{\uparrow}+n_{\downarrow}\right)+s\left(n_{\uparrow}-n_{\downarrow}\right)\right]=\frac{n_{0}+s m}{2}
\end{align*}
$$
where $n_{0}$ is the total particle density. This leads to the two coupled equations
$$
\begin{align*}
\begin{aligned}
n_{0} & =\frac{1}{2} \int d \epsilon\left(N\left(\epsilon-U n_{\downarrow}\right)+N\left(\epsilon-U n_{\uparrow}\right)\right) f(\epsilon) \\
m & =\frac{1}{2} \int d \epsilon\left(N\left(\epsilon-U n_{\downarrow}\right)-N\left(\epsilon-U n_{\uparrow}\right)\right) f(\epsilon)
\end{aligned}
\end{align*}
$$
or equivalently
$$
\begin{align*}
\begin{aligned}
n_{0} & =\frac{1}{2} \sum_{s} \int d \epsilon N\left(\epsilon-\frac{U n_{0}}{2}-s \frac{U m}{2}\right) f(\epsilon) \\
m & =-\frac{1}{2} \sum_{s} s \int d \epsilon N\left(\epsilon-\frac{U n_{0}}{2}-s \frac{U m}{2}\right) f(\epsilon)
\end{aligned}
\end{align*}
$$
which usually can not be solved analytically and must be treated numerically.

### 7.1.2 Stoner Criterion

An approximate solution can be found if $m \ll n_{0}$. The two equations are solved by adapting the chemical potential $\mu$. For low temperatures and small magnetisation we can expand $\mu$ as
$$
\begin{align*}
\mu(m, T)=\epsilon_{F}+\Delta \mu(m, T)
\end{align*}
$$

The constant energy shift $-U n_{0} / 2$ appearing can be absorbed into $\epsilon_{F}$. The Fermi-Dirac distribution takes the form
$$
\begin{align*}
f(\epsilon)=\frac{1}{e^{\beta[\epsilon-\mu(m, T)]}+1}
\end{align*}
$$
where $\beta=\left(k_{B} T\right)^{-1}$. After expanding for small $m$, one obtains using the Sommerfeld expansion,
$$
\begin{align*}
\begin{aligned}
n_{0} & \approx \int d \epsilon f(\epsilon)\left[N(\epsilon)+\frac{1}{2}\left(\frac{U m}{2}\right)^{2} N^{\prime \prime}(\epsilon)\right] \\
& \approx \int_{0}^{\epsilon_{F}} d \epsilon[N(\epsilon)]+N\left(\epsilon_{F}\right) \Delta \mu+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime}\left(\epsilon_{F}\right)+\frac{1}{2}\left(\frac{U m}{2}\right)^{2} N^{\prime}\left(\epsilon_{F}\right)
\end{aligned}
\end{align*}
$$
where we introduced the abbreviations $N^{\prime}(\epsilon)=d N(\epsilon) / d \epsilon$ and $N^{\prime \prime}(\epsilon)=d^{2} N(\epsilon) / d \epsilon^{2}$. Since the first term on the right side is identical to $n_{0}, \Delta \mu(m, T)$ is immediately found to be given by
$$
\begin{align*}
\Delta \mu(m, T) \approx-\frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\left[\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2}+\frac{1}{2}\left(\frac{U m}{2}\right)^{2}\right]
\end{align*}
$$

Analogously, the expansion of this equation in $m$ and $T$, results in
$$
\begin{align*}
\begin{aligned}
m & \approx \int d \epsilon f(\epsilon)\left[N^{\prime}(\epsilon) \frac{U m}{2}+\frac{1}{3!} N^{\prime \prime \prime}(\epsilon)\left(\frac{U m}{2}\right)^{3}\right] \\
& \approx\left[N\left(\epsilon_{F}\right)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime \prime}\left(\epsilon_{F}\right)+\frac{1}{3!}\left(\frac{U m}{2}\right)^{2} N^{\prime \prime}\left(\epsilon_{F}\right)+\Delta \mu N^{\prime}\left(\epsilon_{F}\right)\right]\left(\frac{U m}{2}\right)
\end{aligned}
\end{align*}
$$
and, finally, inserting the result for $\Delta \mu$, we find
$$
\begin{align*}
m=N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \Lambda_{1}^{2}\left(\epsilon_{F}\right)\right]\left(\frac{U m}{2}\right)-N\left(\epsilon_{F}\right) \Lambda_{2}^{2}\left(\epsilon_{F}\right)\left(\frac{U m}{2}\right)^{3}
\end{align*}
$$
where
$$
\begin{align*}
\Lambda_{1}^{2}\left(\epsilon_{F}\right)=\left(\frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right)^{2}-\frac{N^{\prime \prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}, \quad \text { and } \quad \Lambda_{2}^{2}\left(\epsilon_{F}\right)=\frac{1}{2}\left(\frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right)^{2}-\frac{N^{\prime \prime}\left(\epsilon_{F}\right)}{3!N\left(\epsilon_{F}\right)}
\end{align*}
$$

The structure is $m=a m+b m^{3}$, where $b$ is assumed to be negative. Thus, two types of solutions emerge
$$
\begin{align*}
m^{2}= \begin{cases}0, & a<1 \\ \frac{1-a}{b}, & a \geq 1\end{cases}
\end{align*}
$$

With this, $a=1$ corresponds to a critical value.

![Attachments/Script 69.webp|700](/img/user/Attachments/Script%2069.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=158&rect=122,189,470,341|•]]

Here, this condition corresponds to
$$
\begin{align*}
1=\frac{1}{2} U N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T_{C}\right)^{2} \Lambda_{1}^{2}\left(\epsilon_{F}\right)\right]
\end{align*}
$$
yielding
$$
\begin{align*}
k_{B} T_{C}=\frac{\sqrt{6}}{\pi \Lambda_{1}\left(\epsilon_{F}\right)} \sqrt{1-\frac{2}{U N\left(\epsilon_{F}\right)}} \propto \sqrt{1-\frac{U_{c}}{U}}
\end{align*}
$$
for $U>U_{c}=2 / N\left(\epsilon_{F}\right)$. This is an instability condition for the paramagnetic Fermi liquid state with $m=0$, and $T_{C}$ is the Curie temperature, below which the ferromagnetic state appears (see Figure 7.1). The temperature dependence of the magnetisation $M$ of the ferromagnetic state ( $T<T_{C}$ ) is given by
$$
\begin{align*}
M(T)=\mu_{B} m(T) \propto \sqrt{T_{C}-T}
\end{align*}
$$
close to the phase transition $\left(T_{C}-T \ll T_{C}\right)$. Note that the Curie temperature $T_{C}$ is nonzero for $U N\left(\epsilon_{F}\right)>2$, and $T_{C} \rightarrow 0$ in the limit $U N\left(\epsilon_{F}\right) \rightarrow 2_{+}$. For $U N\left(\epsilon_{F}\right)<2$ no phase transition occurs. This condition for a finite transition temperature $T_{C}$ is known as the Stoner criterion. This simple model also describes a so-called quantum phase transition, i.e., a phase transition that appears at $T=0$ as a function of system parameters, which in our case are the density of states $N\left(\epsilon_{F}\right)$ and the Coulomb repulsion $U$. While thermal fluctuations destroy the ordered state at finite temperature via entropy increase, entropy is irrelevant at $T=0$. Here, the order is suppressed by quantum fluctuations (Heisenberg's uncertainty principle). At zero temperature we find for $m$ the following dependence on $U$:
$$
\begin{align*}
m(U)=\frac{1}{\Lambda_{2}\left(\epsilon_{F}\right)}\left(\frac{U_{c}}{U}\right)^{3 / 2}\left(\frac{U}{U_{c}}-1\right)^{1 / 2}
\end{align*}
$$
for $U>U_{c}$ and $m=0$ for $U<U_{c}$. The density of states as an internal parameter can, for example, be changed by applying a pressure. By reducing the lattice constant, pressure may facilitate the motion of the conduction electrons and increase the Fermi velocity. Consequently, the density of states is reduced:

![Attachments/Script 70.webp|700](/img/user/Attachments/Script%2070.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=159&rect=120,253,466,397|•]]
Indeed, pressure is able to destroy ferromagnetism in weakly ferromagnetic materials as $\mathrm{ZrZn}_{2}, \mathrm{MnSi}$, and $\mathrm{UGe}_{2}$. In other materials, the Curie temperature is high enough, such that the technologically applicable pressure is insufficient to suppress magnetism. It is, however, possible, that pressure leads to other transitions, such as structural phase transitions, that eventually destroy magnetism. This is seen in iron (Fe), where a pressure of about 12 GPa induces a transition from magnetic iron with body-centred crystal (bcc) structure to a nonmagnetic, hexagonal close packed (hcp) structure:

![Attachments/Script 71.webp|700](/img/user/Attachments/Script%2071.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=160&rect=101,601,485,750|•]]

While this structural transition is a quantum phase transition as well, it appears as a discontinuous, first order transition. Note that the Stoner instability is a simplification of the quantum phase transition. In most cases, a discontinuous phase transition originates in the band structure or in fluctuation effects, which were ignored here. In some cases, pressure can also induce an increase in $N\left(\epsilon_{F}\right)$, for example in metals with multiple bands, where compression leads to a redistribution of charge. One example is the ruthenate $\mathrm{Sr}_{3} \mathrm{Ru}_{2} \mathrm{O}_{7}$ for which uniaxial pressure along the $z$-axis leads to magnetism. Finally, let us turn to the question, why Cu , being a direct neighbour of Ni in the 3d-row of the periodic table, is not ferromagnetic, even though both elemental metals share the same fcc crystal structure. The answer is given by the Stoner criterion $U N\left(\epsilon_{F}\right)=2$. While the conduction electrons at the Fermi level of Ni have 3d-character and belong to a narrow band with a large density of states, the Fermi energy of Cu is situated in the broad 4 s -band and constitutes a much smaller density of states:

![Attachments/Script 72.webp|700](/img/user/Attachments/Script%2072.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=160&rect=189,260,403,430|•]]

With this, the Cu conduction electrons are much less localised and feature a weaker tendency towards ferromagnetic order.

### 7.1.3 Spin Susceptibility for $T>T_{C}$

Next we study the response of the metallic system in the paramagnetic state when we apply a small magnetic field $H$ along the $z$-axis, which induces a spin polarisation due to the Zeeman coupling,
$$
\begin{align*}
H_{Z}=-g \mu_{B} \int d^{3} r H \frac{1}{2}\left\{\widehat{\rho}_{\uparrow}(\boldsymbol{r})-\widehat{\rho}_{\downarrow}(\boldsymbol{r})\right\} .
\end{align*}
$$

From the self-consistency equations (7.14) and (7.15) we obtain
$$
\begin{align*}
\begin{aligned}
m & =-\frac{1}{2} \int d \epsilon f(\epsilon) \sum_{s} s N\left(\epsilon-\mu_{B} s H-s \frac{U m}{2}\right) \\
& \approx \int d \epsilon f(\epsilon) N^{\prime}(\epsilon)\left(\frac{U m}{2}+\mu_{B} H\right) \\
& =N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \Lambda_{1}\left(\epsilon_{F}\right)^{2}\right]\left(\frac{U m}{2}+\mu_{B} H\right)
\end{aligned}
\end{align*}
$$
to lowest order in $m$ and $H$. Solving this equation for $m$ yields
$$
\begin{align*}
M=\mu_{B} m=\frac{\chi_{0}(T)}{1-U \chi_{0}(T) / 2 \mu_{B}^{2}} H,
\end{align*}
$$
and, consequently, the magnetic susceptibility $\chi$ reads
$$
\begin{align*}
\chi=\frac{M}{H}=\frac{\chi_{0}(T)}{1-U \chi_{0}(T) / 2 \mu_{B}^{2}},
\end{align*}
$$
where the bare susceptibility $\chi_{0}$ is given by
$$
\begin{align*}
\chi_{0}(T)=\mu_{B}^{2} N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \Lambda_{1}\left(\epsilon_{F}\right)^{2}\right] .
\end{align*}
$$

We see, that the denominator of the susceptibility $\chi(T)$ vanishes exactly when the Stoner instability criterion for finite temperatures is fulfilled. Thus, for $U N\left(\epsilon_{F}\right)>2$ the susceptibility
$$
\begin{align*}
\chi(T) \approx \frac{\chi_{0}\left(T_{C}\right)}{\left(\frac{U N\left(\epsilon_{F}\right)}{2}-1\right)\left(\frac{T^{2}}{T_{C}^{2}}-1\right)}=\frac{\chi_{0}\left(T_{C}\right)}{\frac{U N\left(\epsilon_{F}\right) \pi^{2}}{12} \Lambda_{1}^{2}\left(\epsilon_{F}\right) k_{B}^{2}\left(T^{2}-T_{C}^{2}\right)}
\end{align*}
$$
diverging at $T_{c}$  indicates the instability. Note that for $T \rightarrow T_{C}$ from the paramagnetic side, the susceptibility diverges as $\chi(T) \propto\left|T_{C}-T\right|^{-1}$ corresponding to the mean field behaviour, since the mean field critical exponent $\gamma$ for the susceptibility takes the value $\gamma=1$.
For the case of $U N\left(\epsilon_{F}\right)<2$ there is no instability down to $T=0$. In the zero-temperature limit we obtain
$$
\begin{align*}
\chi(0)=\frac{\chi_{0}(0)}{1-\frac{U N\left(\epsilon_{F}\right)}{2}}=\frac{\mu_{B}^{2} N\left(\epsilon_{F}\right)}{1+F_{0}^{a}},
\end{align*}
$$
corresponding to the form found in the Landau Fermi liquid theory with $F_{0}^{a}>-1$. Note that $\chi_{0}(0)=\mu_{B}^{2} N\left(\epsilon_{F}\right)$ is the Pauli spin susceptibility.

---
## 7.2 General Spin Susceptibility and Magnetic Instabilities
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=161&selection=600,0,602,54|•]]

The ferromagnetic state is characterised by a uniform magnetisation. There are, however, magnetically ordered states which do not feature a nonzero net magnetisation but specially modulated magnetic moments.. Examples are spin density wave (SDW) states, antiferromagnets and spin spiral states. In this section, we analyse general instability conditions for metallic systems to some magnetically ordering.

### 7.2.1 General Dynamic Spin Susceptibility

We consider a magnetic field, oscillating in time and with spacial modulation
$$
\begin{align*}
\boldsymbol{H}(\boldsymbol{r}, t)=\boldsymbol{H}_{0} e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t}
\end{align*}
$$
where $\eta \rightarrow 0_{+}$yields an adiabatic switching on the field. We calculate the resulting magnetisation, for the corresponding Fourier component. For that, we proceed analogous to the discussion in Chapter 3 and define the spin density operator $\widehat{\boldsymbol{S}}(\boldsymbol{r})$ in real space,
$$
\begin{align*}
\widehat{\boldsymbol{S}}(\boldsymbol{r})=\frac{\hbar}{2} \sum_{s, s^{\prime}} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \boldsymbol{\sigma}_{s s^{s^{\prime}}} \widehat{\Psi}_{s^{\prime}}(\boldsymbol{r})=\frac{\hbar}{2}\left(\begin{array}{c}
\widehat{\Psi}_{\uparrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\downarrow}(\boldsymbol{r})+\widehat{\Psi}_{\downarrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\uparrow}(\boldsymbol{r}) \\
-i \widehat{\Psi}_{\uparrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\downarrow}(\boldsymbol{r})+i \widehat{\Psi}_{\downarrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\uparrow}(\boldsymbol{r}) \\
\widehat{\Psi}_{\uparrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\uparrow}(\boldsymbol{r})-\widehat{\Psi}_{\downarrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\downarrow}(\boldsymbol{r})
\end{array}\right)
\end{align*}
$$
with momentum space representation
$$
\begin{align*}
\widehat{\boldsymbol{S}}_{\boldsymbol{q}}=\int d^{3} r \widehat{\boldsymbol{S}}(\boldsymbol{r}) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}=\frac{\hbar}{2} \sum_{\boldsymbol{k}, s, s^{\prime}} c_{\boldsymbol{k}, s}^{\dagger} \boldsymbol{\sigma}_{s s^{\prime}} c_{\boldsymbol{k}+\boldsymbol{q}, s^{\prime}}=\sum_{\boldsymbol{k}} \widehat{\boldsymbol{S}}_{\boldsymbol{k}, \boldsymbol{q}}
\end{align*}
$$
where $\widehat{\boldsymbol{S}}_{\boldsymbol{k}, \boldsymbol{q}}=\sum_{s, s^{\prime}}(\hbar / 2) c_{\boldsymbol{k}, s}^{\dagger} \boldsymbol{\sigma}_{s s^{\prime}} \boldsymbol{c}_{\boldsymbol{k}+\boldsymbol{q}, \boldsymbol{s}^{\prime}}$. The Hamiltonian of the electronic system with contact interaction is given by
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{0}+\mathcal{H}_{z}+\mathcal{H}_{\mathrm{int}},
\end{align*}
$$
where
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{0} & =\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}, \\
\mathcal{H}_{Z} & =-\frac{g \mu_{B}}{\hbar} \int d^{3} r \boldsymbol{H}(\boldsymbol{r}, t) \cdot \widehat{\boldsymbol{S}}(\boldsymbol{r}), \\
\mathcal{H}_{\mathrm{int}} & =U \int d^{3} r \widehat{\rho}_{\uparrow}(\boldsymbol{r}) \widehat{\rho}_{\downarrow}(\boldsymbol{r}) .
\end{aligned}
\end{align*}
$$

The operator $\mathcal{H}_{z}$ describes the Zeeman coupling between the electrons of the metal and the perturbing field. We investigate a magnetic field
$$
\begin{align*}
\boldsymbol{H}=H^{+}(\boldsymbol{q}, \omega) e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t}\left(\begin{array}{c}
1 \\
-i \\
0
\end{array}\right)+\text { h.c. }
\end{align*}
$$
in the $x-y$-plane. The Zeeman term then simplifies to
$$
\begin{align*}
\mathcal{H}_{z}=-\frac{g \mu_{B}}{\hbar} H^{+}(\boldsymbol{q}, \omega) \widehat{S}_{-\boldsymbol{q}}^{-} e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t}+\text { h.c. }
\end{align*}
$$
where $\widehat{S}_{-\boldsymbol{q}}^{ \pm}=\widehat{S}_{-q}^{x} \pm i \widehat{S}_{-q}^{y}$. In the following the Hermitian conjugate (h.c.) part will be ignored. We use
$$
\begin{align*}
\widehat{S}_{-\boldsymbol{q}}^{-}=\hbar \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}-\boldsymbol{q} \uparrow},
\end{align*}
$$
in the $c$-operator representation. In the framework of linear response theory, this coupling will induce a magnetisation $M_{\text {ind }}^{+}(\boldsymbol{q}, t)=\left(\mu_{B} / \hbar \Omega\right)\left\langle\widehat{S}_{\boldsymbol{q}}^{+}(t)\right\rangle \propto e^{-i \omega t+\eta t}$. Using the same equations of motion as in Section 3.2,
$$
\begin{align*}
i \hbar \frac{\partial}{\partial t} \widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}=\left[\widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}, \mathcal{H}\right]
\end{align*}
$$
with $\widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}=\hbar \widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}$, we can determine this induced magnetisation, first without the interaction term $(\mathrm{U}=0)$. We obtain for the given Fourier component,
$$
\begin{align*}
i \hbar \frac{\partial}{\partial t} \widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}(t)=\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right) \widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}(t)-g \hbar \mu_{B}\left(\widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \downarrow}-\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \uparrow}\right) H^{+}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t}
\end{align*}
$$

Using the monochromatic time dependence of the field and the response $\left(e^{-i \omega t+\eta t}\right)$ and applying the thermal average we obtain,
$$
\begin{align*}
\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta\right)\left\langle S_{\boldsymbol{k}, \boldsymbol{q}}^{+}(t)\right\rangle=-g \hbar \mu_{B}\left(n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}-n_{\boldsymbol{k} \downarrow}\right) H^{+}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t}
\end{align*}
$$
which then leads to the induced spin density-magnetisation,
$$
\begin{align*}
\begin{aligned}
\frac{\hbar}{\mu_{B}} M_{\mathrm{ind}}^{+}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t} & =\frac{1}{\Omega}\left\langle S_{\text {ind }}^{+}(\boldsymbol{q}, \omega)\right\rangle e^{-i \omega t+\eta t}=\frac{1}{\Omega} \sum_{\boldsymbol{k}}\left\langle S_{\boldsymbol{k}, \boldsymbol{q}}^{+}(t)\right\rangle \\
& =\frac{\hbar}{\mu_{B}} \chi_{0}(\boldsymbol{q}, \omega) H^{+}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t}
\end{aligned}
\end{align*}
$$
with
$$
\begin{align*}
\chi_{0}(\boldsymbol{q}, \omega)=-\frac{g \mu_{B}^{2}}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}-n_{\boldsymbol{k} \downarrow}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta}
\end{align*}
$$

Note that the form of the bare susceptibility $\chi_{0}(\boldsymbol{q}, \omega)$ is similar to the Lindhard function (3.63), actually identical, if there is no spin polarisation. The result (7.52) describes the induced spin density within linear response approximation.
In a next step, we want to include the effects of the interaction. Analogously to the induce charge modulation found in Section 3.2 , the induced spin density generates an effective field on the spin of the electrons ("mean field"). The induced spin polarisation may be represented as an effective magnetic field through the exchange interaction. To implement this feature let us rewrite the contact interaction term in the form
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{\mathrm{int}} & =\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}^{\prime}} \widehat{c}_{\boldsymbol{k}+\boldsymbol{\boldsymbol { q } ^ { \prime } \uparrow}}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow} \\
& =-\frac{U}{2 \Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}^{\prime}}\left\{\widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}^{\prime} \downarrow} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \uparrow}+\widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}\right\}+\frac{U}{\Omega} \sum_{\boldsymbol{k}}\left(\widehat{n}_{\boldsymbol{k} \uparrow}+\widehat{n}_{\boldsymbol{k} \uparrow}\right) \\
& =-\frac{U}{2 \Omega \hbar^{2}} \sum_{\boldsymbol{q}^{\prime}}\left\{\widehat{S}_{\boldsymbol{q}^{\prime}}^{+} \widehat{S}_{-\boldsymbol{q}^{\prime}}^{-}+\widehat{S}_{\boldsymbol{q}^{\prime}}^{-} \widehat{S}_{-\boldsymbol{q}^{\prime}}^{+}\right\}+\frac{U}{\Omega} \sum_{\boldsymbol{k}} \widehat{n}_{\boldsymbol{k}} .
\end{aligned}
\end{align*}
$$

The last term proportional to $\widehat{n}_{\boldsymbol{k}}=\widehat{n}_{\boldsymbol{k} \uparrow}+\widehat{n}_{\boldsymbol{k} \uparrow}$ can be absorbed into the term of the chemical potential. The induced spin polarisation $\left\langle S_{\text {ind }}^{+}(\boldsymbol{q}, \omega)\right\rangle$ acts through the exchange interaction as an effective (local) field, as can be seen by replacing $\widehat{S}_{\boldsymbol{q}^{\prime}}^{+} \rightarrow\left\langle S_{\text {ind }}^{+}(\boldsymbol{q}, \omega)\right\rangle \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}}$,
$$
\begin{align*}
-\frac{U}{2 \Omega \hbar^{2}} \sum_{\boldsymbol{q}^{\prime}}\left\{\widehat{S}_{\boldsymbol{q}^{\prime}}^{+} \widehat{S}_{-\boldsymbol{q}^{\prime}}^{-}+\widehat{S}_{\boldsymbol{q}^{\prime}}^{-} \widehat{S}_{-\boldsymbol{q}^{\prime}}^{+}\right\} \rightarrow-\frac{U}{\Omega \hbar^{2}}\left\langle S^{+}(\boldsymbol{q}, \omega)\right\rangle \widehat{S}_{-\boldsymbol{q}}^{-}=-\frac{g \mu_{B}}{\Omega \hbar} H_{\mathrm{ind}}^{+}(\boldsymbol{q}, \omega) \widehat{S}_{-\boldsymbol{q}}^{-}
\end{align*}
$$
where the effective magnetic field $H_{\text {ind }}^{+}(\boldsymbol{q}, \omega)$ finally reads
$$
\begin{align*}
H_{\mathrm{ind}}^{+}(\boldsymbol{q}, \omega)=\frac{U}{\Omega g \mu_{B} \hbar}\left\langle S^{+}(\boldsymbol{q}, \omega)\right\rangle .
\end{align*}
$$
with the same monochromatic time dependence as above. This induced field acts on the spins as well, such that the total response of the spin density on the external field becomes
$$
\begin{align*}
\begin{aligned}
M^{+}(\boldsymbol{q}, \omega) & =\frac{\mu_{B}}{\Omega \hbar}\left\langle S^{+}(\boldsymbol{q}, \omega)\right\rangle \\
& =\chi_{0}(\boldsymbol{q}, \omega)\left[H^{+}(\boldsymbol{q}, \omega)+H_{\mathrm{ind}}^{+}(\boldsymbol{q}, \omega)\right] \\
& =\chi_{0}(\boldsymbol{q}, \omega) H^{+}(\boldsymbol{q}, \omega)+\chi_{0}(\boldsymbol{q}, \omega) \frac{U}{\Omega g \mu_{B} \hbar}\left\langle S^{+}(\boldsymbol{q}, \omega)\right\rangle \\
& =\chi_{0}(\boldsymbol{q}, \omega) H^{+}(\boldsymbol{q}, \omega)+\chi_{0}(\boldsymbol{q}, \omega) \frac{U}{g \mu_{B}^{2}} M^{+}(\boldsymbol{q}, \omega) .
\end{aligned}
\end{align*}
$$

In the last step we introduce self-consistency taking the induced magnetisation as the real magnetisation. With the definition
$$
\begin{align*}
M^{+}(\boldsymbol{q}, \omega)=\chi(\boldsymbol{q}, \omega) H^{+}(\boldsymbol{q}, \omega)
\end{align*}
$$
of the susceptibility we find
$$
\begin{align*}
\chi(\boldsymbol{q}, \omega)=\frac{\chi_{0}(\boldsymbol{q}, \omega)}{1-\frac{U}{2 \mu_{B}^{2}} \chi_{0}(\boldsymbol{q}, \omega)} .
\end{align*}
$$
which corresponds to the random phase approximation (RPA) (see Section 3.2). This form of the susceptibility is found to be valid for all field directions, as long as spin-orbit coupling is neglected. Within the random phase approximation, the generalisation of the Stoner criterion for the appearance of an instability of the system at finite temperature reads
$$
\begin{align*}
1=\frac{U}{2 \mu_{B}^{2}} \chi_{0}(\boldsymbol{q}, \omega) .
\end{align*}
$$

For the limiting case $(\boldsymbol{q}, \omega) \rightarrow(\mathbf{0}, 0)$ corresponding to a uniform, static external field, we obtain for the bare susceptibility
$$
\begin{align*}
\begin{aligned}
& \chi_{0}(\boldsymbol{q}, 0)=-\frac{2 \mu_{B}^{2}}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}-n_{\boldsymbol{k} \downarrow}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}} \\
& \xrightarrow{\boldsymbol{q} \rightarrow 0}-\frac{2 \mu_{B}^{2}}{\Omega} \sum_{\boldsymbol{k}} \frac{\partial f\left(\epsilon_{\boldsymbol{k}}\right)}{\partial \epsilon_{\boldsymbol{k}}}=\chi_{0}(T),
\end{aligned}
\end{align*}
$$
which corresponds to the Pauli susceptibility $(g=2)$. Then, $\chi(T)$ from equation (7.59) is again cast into the form (7.35) and describes the instability of the metal with respect to ferromagnetic spin polarisation, when the denominator vanishes. Similar to the charge density wave, the isotropic deformation for $\boldsymbol{q}=\mathbf{0}$ is not the leading instability, when $\chi_{0}(\boldsymbol{Q}, 0)>\chi_{0}(\mathbf{0}, 0)$ for a finite $\boldsymbol{Q}$. Then, another form of magnetic order is more favored.

### 7.2.2 Instability with Finite Wave Vector $Q$

In order to show that, indeed, the Stoner instability does not always prevail among all possible magnetic instabilities, we first go through a simple argument based on the local susceptibility. For that, we define the local magnetic moment along the $z$-axis, $M(\boldsymbol{r})=\mu_{B}\left\langle\widehat{\rho}_{\uparrow}(\boldsymbol{r})-\widehat{\rho}_{\downarrow}(\boldsymbol{r})\right\rangle$, and consider the nonlocal relation
$$
\begin{align*}
M(\boldsymbol{r})=\int d^{3} r^{\prime} \tilde{\chi}_{0}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) H_{z}\left(\boldsymbol{r}^{\prime}\right)
\end{align*}
$$
within the linear response approximation. In Fourier space, the same relation reads
$$
\begin{align*}
M_{\boldsymbol{q}}=\chi_{0}(\boldsymbol{q}) H_{\boldsymbol{q}},
\end{align*}
$$
with
$$
\begin{align*}
\chi_{0}(\boldsymbol{q})=\int d^{3} r \tilde{\chi}_{0}(\boldsymbol{r}) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}
\end{align*}
$$

Now, compare $\chi_{0}(\boldsymbol{q}=0)$ with $\overline{\chi_{0}(\boldsymbol{q})}$ defined as
$$
\begin{align*}
\overline{\chi_{0}(\boldsymbol{q})}=\frac{1}{\Omega} \sum_{\boldsymbol{q}} \chi_{0}(\boldsymbol{q})=\frac{1}{\Omega} \sum_{\boldsymbol{q}} \int d^{3} r \tilde{\chi}_{0}(\boldsymbol{r}) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}=\int d^{3} r \tilde{\chi}_{0}(\boldsymbol{r}) \delta(\boldsymbol{r})=\tilde{\chi}_{0}(\boldsymbol{r}=0)
\end{align*}
$$

This $\boldsymbol{q}$-averaged susceptibility corresponds to the local susceptibility. For a paramagnetic metal at $T=0$ we may write
$$
\begin{align*}
\overline{\chi_{0}(\boldsymbol{q})}=\frac{2 \mu_{B}^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}, \boldsymbol{q}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}-n_{\boldsymbol{k} \downarrow}}{\epsilon_{\boldsymbol{k}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}}=\frac{\mu_{B}^{2}}{2} \int d \epsilon N(\epsilon) \int d \epsilon^{\prime} N\left(\epsilon^{\prime}\right) \frac{f(\epsilon)-f\left(\epsilon^{\prime}\right)}{\epsilon^{\prime}-\epsilon},
\end{align*}
$$
and must be compared to $\chi_{0}(\boldsymbol{q}=0)=\mu_{B}^{2} N\left(\epsilon_{F}\right)\left(f(\epsilon)=\Theta\left(\epsilon_{F}-\epsilon\right)\right)$. The local susceptibility depends on the density of states and the Fermi energy of the system. A very good qualitative understanding can be obtained by a very simple form
$$
\begin{align*}
N(\epsilon)=\left\{\begin{array}{lr}
\frac{1}{D}, & -D \leq \epsilon \leq D \\
0, & |\epsilon|>D
\end{array}\right.
\end{align*}
$$
for the density of states which does not correspond to particular band structure but mimics a band of width $2 D$. With this rough approximation, the integral in equation (7.66) is easily evaluated. The ratio between $\overline{\chi(\boldsymbol{q})}$ and $\chi_{0}(\boldsymbol{q}=0)$ is then found to be
$$
\begin{align*}
R_{0}=\frac{\overline{\chi_{0}(\boldsymbol{q})}}{\chi_{0}(\boldsymbol{q}=0)}=\ln \left(\frac{4}{1-\eta^{2}}\right)+\eta \ln \left(\frac{1-\eta}{1+\eta}\right)
\end{align*}
$$
with $\eta=\epsilon_{F} / D$ where $-D<\epsilon_{F}<+D$. For both small and large band fillings $\left(\epsilon_{F}\right.$ close to the band edges), the tendency towards ferromagnetism dominates, whereas when $\epsilon_{F}$ lies in the centre of the band, the susceptibility $\chi_{0}(\boldsymbol{q})$ is not maximal at $\boldsymbol{q}=0$ anymore, and magnetic ordering with a well-defined finite $\boldsymbol{q}=\boldsymbol{Q}$ becomes more probable.

![Attachments/Script 73.webp|700](/img/user/Attachments/Script%2073.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=165&rect=191,597,399,756|•]]

### 7.2.3 Influence of the Band Structure

Whether magnetic order arises at finite $\boldsymbol{q}$ or not depends strongly on the details of the band structure. The argument given above, comparing the local $(\boldsymbol{r}=0)$ to the uniform $(\boldsymbol{q}=0)$ susceptibility is nothing more than a vague indicator for a possible instability at nonzero $\boldsymbol{q}$. A crucial ingredient for the appearance of magnetic order at a given $\boldsymbol{q}=\boldsymbol{Q}$ is the so-called nesting of the Fermi surface. Within extended areas of the Fermi surface the energy dispersion satisfies the nesting condition,
$$
\begin{align*}
\xi_{k+Q}=-\xi_{k}
\end{align*}
$$
where $\xi_{\boldsymbol{k}}=\epsilon_{\boldsymbol{k}}-\epsilon_{F}$ and $\boldsymbol{Q}$ is some fixed vector. The nesting conditions connects for given $\boldsymbol{k}$ an electron- and hole-like band states (at $T=0$ filled and empty states, respectively). If the Fermi surface of a material features such a nesting trait, the susceptibility will be dominated by the contribution from this vector $\boldsymbol{Q}$. In order to see this, let us investigate the static susceptibility $\chi_{0}(\boldsymbol{q})$ for $\boldsymbol{q}=\boldsymbol{Q}$ under the assumption, that equation (7.69) holds for all $\boldsymbol{k}$ (see tight-binding example below). Thus,
$$
\begin{align*}
\chi_{0}(\boldsymbol{Q} ; T)=\frac{2 \mu_{B}^{2}}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{Q}}-n_{\boldsymbol{k}}}{\xi_{\boldsymbol{k}}-\xi_{\boldsymbol{k}+\boldsymbol{Q}}}=\mu_{B}^{2} \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{\tilde{f}\left(-\xi_{\boldsymbol{k}}\right)-\tilde{f}\left(\xi_{\boldsymbol{k}}\right)}{\xi_{\boldsymbol{k}}},
\end{align*}
$$
where $\tilde{f}(\xi)=f\left(\xi+\epsilon_{F}\right)=f(\epsilon)=\left[\exp \left(\xi / k_{B} T\right)+1\right]^{-1}$ and $f$ is the Fermi-Dirac distribution. Under the further assumption that $\xi_{k}$ is weakly angle dependent, we find
$$
\begin{align*}
\chi_{0}(\boldsymbol{Q} ; T)=\mu_{B}^{2} \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{\tanh \left(\xi_{\boldsymbol{k}} / 2 k_{B} T\right)}{\xi_{k}}=\frac{\mu_{B}^{2}}{2} \int d \xi N\left(\xi+\epsilon_{F}\right) \frac{\tanh \left(\xi / 2 k_{B} T\right)}{\xi} .
\end{align*}
$$

In order to approximate this integral properly, we notice that the integral has a logarithmic divergence a infinite energies $\xi$. The band width gives a natural cutoff. Let us, therefore, take the density of stateswith $\epsilon_{F}=0$,
$$
\begin{align*}
\begin{aligned}
\chi_{0}(\boldsymbol{Q} ; T) & \approx \mu_{B}^{2} N\left(\epsilon_{F}\right) \int_{0}^{\epsilon_{0}} d \xi \frac{\tanh \left(\xi / 2 k_{B} T\right)}{\xi} \\
& =\mu_{B}^{2} N\left(\epsilon_{F}\right)\left(\ln \left(\frac{\epsilon_{0}}{2 k_{B} T}\right)+\ln \left(\frac{4 e^{\gamma}}{\pi}\right)\right) \approx \mu_{B}^{2} N\left(\epsilon_{F}\right) \ln \left(\frac{1.14 \epsilon_{0}}{2 k_{B} T}\right),
\end{aligned}
\end{align*}
$$
where we assumed $\epsilon_{0} \gg k_{B} T$, cutoff energy of the order of the band width, and where $\gamma \approx 0.57721$ is the Euler constant. The bare susceptibility $\chi_{0}$ diverges logarithmically at zero temperatures. Inserting the result (7.73) into the generalised Stoner relation (7.60), results in
$$
\begin{align*}
0=1-\frac{U N\left(\epsilon_{F}\right)}{2} \ln \left(\frac{1.14 \epsilon_{0}}{2 k_{B} T_{c}}\right),
\end{align*}
$$
with the critical temperature
$$
\begin{align*}
k_{B} T_{c}=1.14 \epsilon_{0} e^{-2 / U N\left(\epsilon_{F}\right)} .
\end{align*}
$$

A finite critical temperature persists for arbitrarily small positive values of $U N\left(\epsilon_{F}\right)$. The nesting condition for a given $\boldsymbol{Q}$ leads to a maximum of $\chi_{0}(\boldsymbol{q}, 0 ; T)$ at $\boldsymbol{q}=\boldsymbol{Q}$ and triggers the relevant instability in the system. The latter finally stabilises in a magnetic ordered phase with wave vector $\boldsymbol{Q}$, the so-called spin density wave. The spin density distribution takes, for example, the form
$$
\begin{align*}
\boldsymbol{S}(\boldsymbol{r})=\hat{z} S \cos (\boldsymbol{Q} \cdot \boldsymbol{r}),
\end{align*}
$$
without a uniform component. In comparison, the charge density wave was a modulation of the charge density with a much smaller amplitude than the height of the uniform density, i.e.,
$$
\begin{align*}
\rho(\boldsymbol{r})=\rho_{0}+\delta \rho \cos (\boldsymbol{Q} \cdot \boldsymbol{r}),
\end{align*}
$$
with $\delta \rho \ll \rho_{0}$. The spin density state frequently appear in low-dimensional systems like organic conductors, or in transition metals such as chromium (Cr) for example. In all cases, nesting plays an important role:

![Attachments/Script 74.webp|700](/img/user/Attachments/Script%2074.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=167&rect=113,507,483,638|•]]

In quasi-one-dimensional electron systems, a main direction of motion dominates over two other directions with weak dispersion. In this case, the nesting condition is very probable to be fulfilled, as it is schematically shown in the centre panel of the figure above. Chromium is a three-dimensional metal, where nesting occurs between a electron-like Fermi surface around the $\Gamma$-point and a hole-like Fermi surface at the Brillouin zone boundary ($H$-point). These Fermi surfaces originate in different bands (right panel in Figure 7.6). Chromium has a cubic body centred crystal structure, where the $H$-point at ( $\pi / a, 0,0$ ) leads to the nesting vector $\boldsymbol{Q}_{x} \|(1,0,0)$ and equivalent vectors in $y$ - and $z$-direction, which are incommensurable with the lattice.

The textbook example of nesting is found in a tight-binding model of a simple cubic lattice with nearest-neighbour hopping at half filling. The band structure is given by
$$
\begin{align*}
\epsilon_{\boldsymbol{k}}=-2 t\left[\cos \left(k_{x} a\right)+\cos \left(k_{y} a\right)+\cos \left(k_{z} a\right)\right],
\end{align*}
$$
where $a$ is the lattice constant and $t$ the hopping term. Because of half filling, the chemical potential $\mu=\epsilon_{F}$ lies at $\mu=0$ such that $\xi_{\boldsymbol{k}}=\epsilon_{\boldsymbol{k}}$. Obviously, $\epsilon_{\boldsymbol{k}+\boldsymbol{Q}}=-\epsilon_{\boldsymbol{k}}$ holds for all $\boldsymbol{k}$, for the nesting vector $\boldsymbol{Q}=(\pi / a)(1,1,1)$. This full nesting trait is a signature of the total particle-hole symmetry, i.e. in the ground state there are as many occupied as empty states. Analogously to the Peierls instability, the spin density wave induces the opening of a gap at the Fermi surface. This is another example of a Fermi surface instability. In this situation, the gap is confined to the areas of the Fermi surface obeying the nesting condition. Contrarily to the ferromagnetic order, the material can become insulating when forming the spin density wave state.

---
## 7.3 Stoner Excitations
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=167&selection=230,0,232,18|•]]

In this last section, we discuss the elementary excitations of the ferromagnetic ground state with $n_{\uparrow}>n_{\downarrow}$, including both particle-hole excitations and collective modes. For this purpose we use the Stoner model Hamiltonian (7.2) which we write here entirely in momentum space operators,
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} \boldsymbol{k}}+\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}^{\prime}} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}^{\prime} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow} .
\end{align*}
$$

The spin polarised ground state $\left|\psi_{g}\right\rangle$ can be written on the mean field level as
$$
\begin{align*}
\left|\psi_{g}\right\rangle=\prod_{|\boldsymbol{k}| \leq k_{F \downarrow}} \hat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \prod_{|\boldsymbol{k}| \leq k_{F \uparrow}} \hat{c}_{\boldsymbol{k} \uparrow}^{\dagger}|o\rangle
\end{align*}
$$
with $k_{F s}=\left(6 \pi^{2} n_{s}\right)^{1 / 3}$.
We now consider spin excitations, for which we make the Ansatz
$$
\begin{align*}
\left|\psi_{\boldsymbol{q}}\right\rangle=\sum_{\boldsymbol{k}} f_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}\left|\psi_{g}\right\rangle=\sum_{\boldsymbol{k}} f_{\boldsymbol{k}}\left|\psi_{\boldsymbol{k}, \boldsymbol{q}}\right\rangle .
\end{align*}
$$

This is a superposition of states where an spin up electron is removed from the ground state $\left|\psi_{g}\right\rangle$ and placed back with opposite spin and a fixed momentum transfer $\boldsymbol{q}$. The simple electron-hole excitation with such a spin flip corresponds to the state $\left|\psi_{\boldsymbol{k}, \boldsymbol{q}}\right\rangle=\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}\left|\psi_{g}\right\rangle$ and has the energy
$$
\begin{align*}
E_{\boldsymbol{k}, \boldsymbol{q}}=\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-\epsilon_{\boldsymbol{k} \uparrow}=\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+U\left(n_{\uparrow}-n_{\downarrow}\right)=\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+\Delta .
\end{align*}
$$

We have to ensures that an electron with $(\boldsymbol{k}, \uparrow)$ is available to be removed, and that the state $(\boldsymbol{k}+\boldsymbol{q}, \downarrow)$ is unoccupied. The independent electron-hole part of the spectrum constitutes a continuum of excitations and is depicted by the shaded region:

![Attachments/Script 75.webp|700](/img/user/Attachments/Script%2075.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=170&rect=186,390,407,548|•]]

Note that the spin splitting of the spectrum opens a window in the low-energy low-momentum transfer sector of the excitations.
The excitation energy of $\left|\psi_{\boldsymbol{q}}\right\rangle$ can be obtained by solving the following Schrödinger equation
$$
\begin{align*}
\mathcal{H}\left|\psi_{\boldsymbol{q}}\right\rangle=\left(E_{g}+\hbar \omega_{\boldsymbol{q}}\right)\left|\psi_{\boldsymbol{q}}\right\rangle,
\end{align*}
$$
with $E_{g}$ as the ground state energy $\left(\mathcal{H}\left|\psi_{g}\right\rangle=E_{g}\left|\psi_{g}\right\rangle\right)$. Actually it is more convenient to rearrange this equation into the following form to eliminate $E_{g}$,
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}}\left|\psi_{\boldsymbol{q}}\right\rangle=\sum_{\boldsymbol{k}} f_{\boldsymbol{k}}\left[\mathcal{H}, \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}\right]\left|\psi_{g}\right\rangle .
\end{align*}
$$

Evaluating the commutator we obtain
$$
\begin{align*}
\begin{aligned}
\hbar \omega_{\boldsymbol{q}}\left|\psi_{\boldsymbol{q}}\right\rangle=\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\right. & \left.\epsilon_{\boldsymbol{k}}\right)\left|\psi_{\boldsymbol{q}}\right\rangle \\
& +\frac{U}{\Omega} \sum_{\boldsymbol{k}} f_{\boldsymbol{k}} \sum_{\boldsymbol{k}^{\prime}, \boldsymbol{q}^{\prime}}\left\{\widehat{c}_{\boldsymbol{k}^{\prime}+\boldsymbol{q}^{\prime} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}-\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow}\right\}\left|\psi_{g}\right\rangle .
\end{aligned}
\end{align*}
$$

The four- $\widehat{c}$-operator terms are not so easy to handle. Therefore we adopt a mean field point of view in the analogous way as before and decouple these terms through the following approximation,
$$
\begin{align*}
\begin{aligned}
& \widehat{c}_{\boldsymbol{k}^{\prime}+\boldsymbol{q}^{\prime} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{\boldsymbol{k}} \boldsymbol{\boldsymbol { k } \uparrow}-\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger}{\widehat{\boldsymbol{k}^{\prime} \downarrow}} \\
& \quad \longrightarrow \quad \delta_{\boldsymbol{q}^{\prime}, 0}\left(n_{\boldsymbol{k}^{\prime} \uparrow}-n_{\boldsymbol{k}^{\prime} \downarrow}\right) \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}+\left(n_{\boldsymbol{k}+\boldsymbol{q} \downarrow} \delta_{\boldsymbol{k}^{\prime}, \boldsymbol{k}+\boldsymbol{q}}-n_{\boldsymbol{k} \uparrow} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}+\boldsymbol{q}^{\prime}}\right) \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}^{\prime}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}^{\prime} \uparrow}
\end{aligned}
\end{align*}
$$

The basic scheme is to combine $\widehat{c}$-operators in the four-operator expression so as to obtain a density-operator-like expression $\widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}$ (this introduces some constraints on the momenta implemented) which then is replace by the mean value $n_{k s}$. In this process it turns out that the remaining two operators combine to $\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{\boldsymbol{c}} \boldsymbol{\boldsymbol { k }}$ - $^{\text {like }}$ factors to construct $\left|\psi_{\boldsymbol{q}}\right\rangle$. This helps then to "close" the Schrödinger equation for the wave function $f_{\boldsymbol{k}}$. We replace $n_{\boldsymbol{k} s}$ the Fermi-Dirac distribution for electrons of spin $s$ with the energy $\epsilon_{\boldsymbol{k} s}$.
We insert the approximation (7.86) into the Schrödingier equation (7.84) and multiply from the left with $\left\langle\psi_{\tilde{\boldsymbol{k}}, \boldsymbol{q}}\right|=\left.\left\langle\psi_{g}\right|\right|_{\tilde{\boldsymbol{k}} \uparrow} ^{\dagger} \widehat{\tilde{\boldsymbol{k}}} \boldsymbol{\tilde { \boldsymbol { q } } \downarrow}$ to obtain the projected equation,
$$
\begin{align*}
f_{\tilde{\boldsymbol{k}}}\left\{\hbar \omega_{\boldsymbol{q}}-\epsilon_{\tilde{\boldsymbol{k}}+\boldsymbol{q}}+\epsilon_{\tilde{\boldsymbol{k}}}-U\left(n_{\uparrow}-n_{\downarrow}\right)\right\}=\frac{U}{\Omega} \sum_{\boldsymbol{k}} f_{\boldsymbol{k}}\left(n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}\right)=R_{\boldsymbol{q}}
\end{align*}
$$
where we used that the density of electrons of $\operatorname{spin} s$ is given by
$$
\begin{align*}
n_{s}=\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}} n_{\boldsymbol{k}^{\prime} s} .
\end{align*}
$$
and we defined $R_{\boldsymbol{q}}$. We solve now the equation for the wave function $f_{\boldsymbol{k}}$ and obtain
$$
\begin{align*}
f_{\boldsymbol{k}}=\frac{R_{\boldsymbol{q}}}{\hbar \omega_{\boldsymbol{q}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}+\epsilon_{\boldsymbol{k} \uparrow}}
\end{align*}
$$
with $\epsilon_{\boldsymbol{k} s}=\epsilon_{\boldsymbol{k}}+U n_{\bar{s}}$. We use now $f_{\boldsymbol{k}}$ to reexpress $R_{\boldsymbol{q}}$ which yields the equation,
$$
\begin{align*}
R_{\boldsymbol{q}}=U R_{\boldsymbol{q}} \frac{1}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\hbar \omega_{\boldsymbol{q}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}+\epsilon_{\boldsymbol{k} \uparrow}}
\end{align*}
$$
which can be used to determine $\hbar \omega_{\boldsymbol{q}}$ for $R_{\boldsymbol{q}} \neq 0$. The solutions contain, in principle, also the continuum of the electron-hole excitations discussed above. We focus, however, now on the non-trivial collective mode. It is easy to see that in the $\boldsymbol{q} \rightarrow 0$ limit we find
$$
\begin{align*}
1=\frac{U\left(n_{\downarrow}-n_{\uparrow}\right)}{\hbar \omega_{0}-U\left(n_{\uparrow}-n_{\downarrow}\right)} \quad \Rightarrow \quad \hbar \omega_{0}=0
\end{align*}
$$
indicating that there are excitations for small $\boldsymbol{q}$. Note that for $\boldsymbol{q}=0$ we find $f_{\boldsymbol{k}}=$ const. independent of $\boldsymbol{k}$ which we will use later.
We calculate now the dispersion for small $\boldsymbol{q}\left(\ll k_{F}\right)$. For the concrete calculation we will assume that $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$ to obtain analytical results. Using the fact that $\hbar \omega_{\boldsymbol{q}} \ll \Delta$ we can expand the equation leading to
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}} \approx\left[1+\frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-\epsilon_{\boldsymbol{k} \uparrow}}\right]\left[-\frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-\epsilon_{\boldsymbol{k} \uparrow}\right)^{2}}\right]^{-1} .
\end{align*}
$$

For small $q$ we expand up order $q^{2}$ (actually $q$-linear contributions cancel),
$$
\begin{align*}
\begin{aligned}
\frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+\Delta} & \approx \frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\Delta}\left\{1-\frac{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}}{\Delta}+\left(\frac{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}}{\Delta}\right)^{2}\right\} \\
& \approx-1+\frac{U}{\Omega} \sum_{\boldsymbol{k}}\left\{\frac{n_{\boldsymbol{k} \uparrow}+n_{\boldsymbol{k} \downarrow}}{\Delta^{2}} \frac{\hbar^{2} q^{2}}{2 m}-\frac{n_{\boldsymbol{k} \uparrow}-n_{\boldsymbol{k} \downarrow}}{\Delta^{2}} \frac{\left(2 \hbar^{2} \boldsymbol{k} \cdot \boldsymbol{q}\right)^{2}}{4 m^{2} \Delta}\right\} \\
& \approx-1+\frac{\hbar^{2} q^{2}}{2 m \Delta^{2}}\left(U n_{0}-\frac{4 \epsilon_{F}}{3}\right)
\end{aligned}
\end{align*}
$$
and analogously
$$
\begin{align*}
\frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+\Delta\right)^{2}} \approx-\frac{1}{\Delta}
\end{align*}
$$
such that we obtain
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}} \approx \frac{\hbar^{2} q^{2}}{2 m \Delta} \frac{2 \epsilon_{F}}{3}\left(U N\left(\epsilon_{F}\right)-2\right) \propto \frac{\hbar^{2} q^{2}}{2 m}\left(\frac{U}{U_{c}}-1\right)^{1 / 2} .
\end{align*}
$$

Were we use that $\Delta \propto\left(U-U_{c}\right)^{1 / 2}$ for $U \rightarrow U_{c}$. Hence, if $U>U_{c}=2 / N\left(\epsilon_{F}\right)$ we find $\hbar \omega_{q}>0$. Since the elementary excitations have an energy gap of the order of $\Delta$ at small $\boldsymbol{q}$, the collective excitations, which are termed magnons, are well-defined quasi-particles describing propagating spin waves. When these modes enter the electron-hole continuum, they are damped in the same way as plasmons decay into electrons and holes continuum.

Being a bound state composed of an electron and a hole, magnons are bosonic quasi-particles. This collective excitation features a $q^{2}$-dependent dispersion with a vanishing excitation energy in the limit $\boldsymbol{q} \rightarrow 0$. This property represents a case of the so-called Goldstone theorem which states that there is a gapless $\boldsymbol{q}=0$ excitation in every ordered phases which originates from the spontaneous breaking of a continuous symmetry. Remark: It is important that the symmetry is broken spontaneously and not by an external field, because we need a continuous set of groundstate, here through spin rotation. With an external field we would have only one groundstate and all other orientations of the magnetisation would have higher energy. Then the $\boldsymbol{q}=0$ mode would have a finite energy. In our case the continuous symmetry is spin rotation and the ferromagnetic state breaks this symmetry by choosing spontaneously the direction of magnetisation. We defined this direction as the $z$-axis such that the total spin quantum is given $S_{\text {tot }}=S_{\text {tot }}^{z}=\frac{1}{2}\left(N_{\uparrow}-N_{\downarrow}\right)$. Any of the $2 S_{\text {tot }}+1$ degenerate groundstates can be reached by continued application of the spin lowering operator $\widehat{S}_{\text {tot }}^{-}$which lowers $S_{\text {tot }}^{z}$ by 1 ,
$$
\begin{align*}
\left.\begin{array}{l}
\widehat{S}_{\mathrm{tot}}^{z}\left|\psi_{g}\right\rangle=\hbar S_{\mathrm{tot}}^{z}\left|\psi_{g}\right\rangle \\
\widehat{\boldsymbol{S}}_{\mathrm{tot}}^{2}\left|\psi_{g}\right\rangle=\hbar^{2} S_{\mathrm{tot}}\left(S_{\mathrm{tot}}+1\right)\left|\psi_{g}\right\rangle
\end{array}\right\} \Rightarrow\left\{\begin{array}{l}
{\left[\widehat{\boldsymbol{S}}_{\mathrm{tot}}^{2}, \widehat{S}_{\mathrm{tot}}^{-}\right]=0,\left|\psi_{g}^{\prime}\right\rangle=\widehat{S}_{\mathrm{tot}}^{-}\left|\psi_{g}\right\rangle} \\
\widehat{\boldsymbol{S}}_{\mathrm{tot}}^{2}\left|\psi_{g}^{\prime}\right\rangle=\hbar^{2} S_{\mathrm{tot}}\left(S_{\mathrm{tot}}+1\right)\left|\psi_{g}^{\prime}\right\rangle
\end{array}\right.
\end{align*}
$$

The spin lowering operator can be written as
$$
\begin{align*}
\widehat{S}_{\text {tot }}^{-}=\frac{\hbar}{\Omega} \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}
\end{align*}
$$
which notably is the operator generating $\left|\psi_{\textbf{q}=0}\right\rangle$, where, as mentioned, $f_{\boldsymbol{k}}=1 / \Omega$ is independent of $\boldsymbol{k}$. From the equation before, we understand that $\left|\psi_{\boldsymbol{q}=0}\right\rangle$ is simply another groundstate $\left|\psi_{g}^{\prime}\right\rangle$ and has, thus, the same energy as $\left|\psi_{g}\right\rangle$. We conclude, therefore, that $\hbar \omega_{\boldsymbol{q}=0}=0$.

---