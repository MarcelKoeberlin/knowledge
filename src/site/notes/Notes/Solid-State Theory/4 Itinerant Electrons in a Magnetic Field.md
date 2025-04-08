---
{"dg-publish":true,"permalink":"/notes/solid-state-theory/4-itinerant-electrons-in-a-magnetic-field/","hide":"true","updated":"2025-04-05T17:25:08.000+02:00"}
---

Jump back to ==[[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Solid-State Theory/4 Itinerant Electrons in a Magnetic Field#4.1 The de Haas-van Alphen Effect\|4.1 The de Haas-van Alphen Effect]]
- [[Notes/Solid-State Theory/4 Itinerant Electrons in a Magnetic Field#4.2 Quantum Hall Effect\|4.2 Quantum Hall Effect]]

---
# 4 Itinerant Electrons in a Magnetic Field
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=90&selection=2,0,3,4|•]]

Electrons couple through their orbital motion and their spin to external magnetic fields. In this chapter we focus on the case of orbital coupling which can be also used as a diagnostic tool to observe the presence of a Fermi surface in a metallic system and to map out the Fermi surface topology. A further most intriguing feature of electrons moving in a magnetic field is the Quantum Hall effect of a two-dimensional electronic system. In both case the Landau levels with play an important role and will be introduced here in a first step.

## 4.1 The de Haas-van Alphen Effect
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=90&selection=16,0,18,28|•]]

The ground state of a metal is characterised by the existence of a discontinuity of the occupation number in momentum space - the Fermi surface. The de Haas-van Alphen experiment is one of the best methods to verify its existence and to determine the shape of a Fermi surface. It is based on the behaviour of electrons at low temperatures in a strong magnetic field.

### 4.1.1 Landau Levels

Consider a free electron gas subject to a uniform magnetic field $\boldsymbol{B}=(0,0, B)$. The one-particle Hamiltonian for an electron is given by
$$
\begin{align*}
\mathcal{H}=\frac{1}{2 m}\left(-i \hbar \boldsymbol{\nabla}+\frac{e}{c} \boldsymbol{A}\right)^{2}-\frac{g \mu_{B}}{\hbar} \widehat{S}_{z} B .
\end{align*}
$$
where $e$ is the absolute value of the electron charge. We fix the gauge freedom of the vector potential $\boldsymbol{A}$ by working in the Landau gauge, $\boldsymbol{A}=(-B y, 0,0)$, satisfying $\boldsymbol{B}=\boldsymbol{\nabla} \times \boldsymbol{A}$. Hence the Hamiltonian (4.1) simplifies to
$$
\begin{align*}
\mathcal{H}=\frac{1}{2 m}\left[-\hbar^{2} \frac{\partial^{2}}{\partial y^{2}}+\left(-i \hbar \frac{\partial}{\partial x}-\frac{e}{c} B y\right)^{2}-\hbar^{2} \frac{\partial^{2}}{\partial z^{2}}\right]-\frac{g \mu_{B}}{\hbar} \widehat{S}_{z} B .
\end{align*}
$$

In this gauge, the vector potential acts like a confining harmonic potential along the $y$-axis. As translational invariance in the $x$ - and $z$-directions is preserved, the eigenfunctions separate in the three spacial components and take the form
$$
\begin{align*}
\psi(\boldsymbol{r})=e^{i k_{z} z} e^{i k_{x} x} \phi(y) \xi_{s}
\end{align*}
$$
where $\xi_{s}$ is the spin wave function. The states $\phi(y)$ are found to be the eigenstates of the harmonic oscillator problem, so that we have
$$
\begin{align*}
\phi_{n, k_{x}}(y)=\frac{1}{\sqrt{2^{n} n!2 \pi \ell^{2}}} H_{n}\left[\left(y-y_{0}\right) / \ell\right] e^{-\left(y-y_{0}\right)^{2} / 2 \ell^{2}}
\end{align*}
$$
where $H_{n}(y)$ are the Hermite polynomials and $\ell$ denotes the magnetic length defined via $\ell^{2}=$ $\hbar c /|e B|$. The wave vector $k_{x}$ determines the position of the centre $y_{0}=k_{x} \ell^{2}$ of the harmonic oscillator. The eigenenergies of the Hamiltonian (4.2) read
$$
\begin{align*}
E_{n, k_{z}, s}=\frac{\hbar^{2} k_{z}^{2}}{2 m}+\hbar \omega_{c}\left(n+\frac{1}{2}\right)-\frac{g \mu_{B}}{\hbar} B s
\end{align*}
$$
where $s= \pm \hbar / 2, n \in \mathbb{N}_{0}$ and we have introduced the cyclotron frequency $\omega_{c}=|e B| / m c$. Note that the energy (4.5) does not depend on $k_{x}$. The apparent differences in the spatial dependence of the wave functions for the $x$ - and $y$-directions are merely a consequence of the chosen gauge.
Like the vector potential, the wave function is a gauge dependent quantity. To see this, observe that under a gauge transformation
$$
\begin{align*}
\boldsymbol{A}(\boldsymbol{r}, t) \rightarrow \boldsymbol{A}^{\prime}(\boldsymbol{r}, t)=\boldsymbol{A}(\boldsymbol{r}, t)+\boldsymbol{\nabla} \chi(\boldsymbol{r}, t)
\end{align*}
$$
the wave function undergoes a position dependent phase shift
$$
\begin{align*}
\psi(\boldsymbol{r}, t) \rightarrow \psi^{\prime}(\boldsymbol{r}, t)=\psi(\boldsymbol{r}, t) e^{-i e \chi(\boldsymbol{r}, t) / \hbar c}=\psi(\boldsymbol{r}, t) e^{-i 2 \pi \chi / \Phi_{0}}.
\end{align*}
$$

The fact that the energy does not depend on $k_{x}$ in the chosen gauge indicates a huge degeneracy of the eigenstates. To obtain the number of degenerate states we concentrate for simplicity on $k_{z}=0$ and neglect the electron spin. We take the electrons to be confined to a cube of volume $L^{3}$ with periodic boundary conditions, i.e., $k_{x}=2 \pi n_{x} / L$ with $n_{x} \in \mathbb{Z}$. As the wave function $\phi_{n, k_{x}}(y)$ is centred around $y_{0}=k_{x} \ell^{2}$, the condition
$$
\begin{align*}
0<y_{0}=k_{x} \ell^{2}<L
\end{align*}
$$
fixes the maximal number $N_{\text {deg }}$ of degenerate states
$$
\begin{align*}
0<n_{x}<N_{\mathrm{deg}}=\frac{L^{2}}{2 \pi \ell^{2}}=\frac{L^{2} B}{h c / e}=\frac{\Phi}{\Phi_{0}} .
\end{align*}
$$
where $\Phi_{0}=h c / e$ is the magnetic flux quantum (e.g. Aharonov-Bohm interference effect), $\Phi_{0}=4.14 \times 10^{-7}$ Gauss $\mathrm{cm}^{2}$. Thus the degeneracy $N_{\mathrm{deg}}$ corresponds to the number of flux quanta included in the total magnetic flux $\Phi$ threading the system.
The energies correspond to a discrete set of one-dimensional systems, so that the density of states is determined by the structure of the one-dimensional dispersion (with square root singularities at the band edges) along the $z$-direction:
$$
\begin{align*}
\begin{aligned}
N_{0}(E, n, s) & =\frac{N_{\operatorname{deg}}}{\Omega} \sum_{k_{z}} \delta\left(E-E_{n, k_{z}, s}\right) \\
& =\frac{1}{2 \pi \ell^{2}} \int \frac{d k_{z}}{2 \pi} \delta(E-\frac{\hbar^{2} k_{z}^{2}}{2 m}-\underbrace{\hbar \omega_{c}\left(n+\frac{1}{2}\right)+\frac{g \mu_{B}}{\hbar} B s}_{\epsilon_{n, s}}) \\
& =\frac{(2 m)^{3 / 2} \omega_{c}}{8 \pi^{2} \hbar^{2}} \frac{1}{\sqrt{E-\epsilon_{n, s}}}=\frac{3}{8} \frac{n}{\epsilon_{F}} \frac{\hbar \omega_{c}}{\sqrt{\epsilon_{F}}} \frac{1}{\sqrt{E-\epsilon_{n, s}}}
\end{aligned}
\end{align*}
$$

The total density of states $N_{0}(E)$ for a given energy $E$ is obtained by summing over $n \in \mathbb{N}_{0}$ and $s= \pm \hbar / 2$. This should be compared to the density of states without the magnetic field,
$$
\begin{align*}
N_{0}(E, B=0)=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \delta\left(E-\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m}\right)=\frac{(2 m)^{3 / 2}}{2 \pi^{2} \hbar^{3}} \sqrt{E} .
\end{align*}
$$

The density of states for finite applied field is shown for one spin-component:

![Attachments/Script 38.webp|700](/img/user/Attachments/Script%2038.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=92&rect=173,584,425,754|•]]

### 4.1.2 Oscillatory Behaviour of the Magnetisation

In the presence of a magnetic field, the smooth density of states of the three-dimensional metal is replaced by a discontinuous form dominated by square root singularities. The position of the singularities depends on the strength of the magnetic field. In order to understand the resulting effect on the magnetisation, we consider the free energy,
$$
\begin{align*}
F(N, T)=N \mu-\Omega(T, \mu, B)=N \mu-k_{B} T \sum_{k_{z}, k_{y}, n, s} \ln \left(1+e^{-\left(E_{n, k_{z}, s}-\mu\right) / k_{B} T}\right)
\end{align*}
$$
with $\Omega(T, \mu, B)$ denoting the grand canonical potential and use the general thermodynamic relation $M=-\partial F(N, T) / \partial B$. For the details of the somewhat tedious calculation, we refer to J. M. Ziman, Principles of the Theory of Solids and merely present the result
$$
\begin{align*}
M=\chi_{P} B\left[1+\frac{\chi_{L}}{\chi_{P}}+\frac{\pi k_{B} T}{\mu_{B} B} \sqrt{\frac{\epsilon_{F}}{\mu_{B} B}} \sum_{\nu=1}^{\infty} \frac{1}{\sqrt{\nu}} \frac{\sin \left(\frac{\pi}{4}-\frac{\pi \nu_{F}}{\mu_{B} B}\right)}{\sinh \left(\frac{\pi^{2} \nu k_{B} T}{\mu_{B} B}\right)}\right] .
\end{align*}
$$

Here $\chi_{P}$ is the Pauli-spin susceptibility originating from the Zeeman-term and the second term $\chi_{L}=-\chi_{P} / 3$ is the diamagnetic Landau susceptibility which is due to induced orbital currents (the Landau levels). For sufficiently low temperatures, $k_{B} T<\mu_{B} B \sim \hbar \omega_{c}$, the magnetisation as a function of the applied field exhibits oscillatory behaviour:

![Attachments/Script 39.webp|700](/img/user/Attachments/Script%2039.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=93&rect=74,592,503,742|•]]

The dominant contribution comes from the summation with $\nu=1$. The oscillations are a consequence of the singularities in the density of states that influence the magnetic moment upon successively passing through the Fermi energy as the magnetic field is varied. The period in $1 / B$ of the oscillations of the term $\nu=1$ is easily found to be
$$
\begin{align*}
\frac{\pi \epsilon_{F}}{\mu_{B}} \Delta\left(\frac{1}{B}\right)=2 \pi
\end{align*}
$$
or
$$
\begin{align*}
\Delta\left(\frac{1}{B}\right)=\frac{2 \pi e}{\hbar c} \frac{1}{A\left(k_{F}\right)}
\end{align*}
$$

where we used that $\mu_{B}=\hbar e / 2 m c$ and defined the cross sectional area $A\left(k_{F}\right)=\pi k_{F}^{2}$ of the Fermi sphere perpendicular to the magnetic field. Experimental data are often analyzed in terms of the de Haas-van Alphen frequency $F$,
$$
\begin{align*}
F=A\left(k_{F}\right) \frac{\hbar c}{2 \pi e}=\frac{A\left(k_{F}\right) \Phi_{0}}{4 \pi^{2}}
\end{align*}
$$

### 4.1.3 Onsager Equation

The behaviour we have found above for a free electron gas, generalises to systems with arbitrary band structures. In these cases there are usually no exact solutions available. Instead of generalising the above treatment to such band systems, we discuss the behaviour of electrons within the semi-classical approximation, as introduced in Section 1.7, and consider the closed orbits of a wave packet subject to a magnetic field. The semi-classical equations of motion for the centre of mass of the wave packet, Eqs. (1.111) and (1.112), simplify in the absence of an electric field to
$$
\begin{align*}
\begin{aligned}
\dot{\boldsymbol{r}} & =\boldsymbol{v}_{\boldsymbol{k}}=\frac{\partial \epsilon_{\boldsymbol{k}}}{\partial \hbar \boldsymbol{k}} \\
\hbar \dot{\boldsymbol{k}} & =-\frac{e}{c} \boldsymbol{v}_{\boldsymbol{k}} \times \boldsymbol{B}
\end{aligned}
\end{align*}
$$

This defines a closed path in a plane perpendicular to the applied uniform magnetic field. The velocity $\boldsymbol{v}_{\boldsymbol{k}}$ stands perpendicular to lines of equal energy $\epsilon_{\boldsymbol{k}}$. The electron follows in reciprocal space a path along such a line perpendicular to $\boldsymbol{B}$. The motion parallel to the magnetic field is independent with a constant $\boldsymbol{k}_{\|}$. Separating the motion parallel to $\boldsymbol{B}$ the electrons move on a closed path in the perpendicular plane. Hence, we can apply the Bohr-Sommerfeld quantisation scheme yielding quarantined closed paths $P_{n}$ (neglecting any uniform motion along the field direction),
$$
\begin{align*}
\oint_{P_{n}} \boldsymbol{p} \cdot d \boldsymbol{r}=h(n+\gamma)
\end{align*}
$$
with $n$ being an integer and $\gamma$ a system specific shift, irrelevant for the final result and $h=2 \pi \hbar$. The canonical momentum within the semi-classical approach is expressed as
$$
\begin{align*}
\boldsymbol{p}=\hbar \boldsymbol{k}-\frac{e}{c} \boldsymbol{A}=-\frac{e}{c}(\boldsymbol{r} \times \boldsymbol{B}+\boldsymbol{A}),
\end{align*}
$$
where integrated over time. Thus, we find
$$
\begin{align*}
\oint_{P_{n}} \boldsymbol{p} \cdot d \boldsymbol{r}&=-\frac{e}{c} \oint_{P_{n}}\{\boldsymbol{r} \times \boldsymbol{B}+\boldsymbol{A}\} \cdot d \boldsymbol{r}\\&=-\frac{e}{c} \Phi_{n}+\underbrace{\frac{e}{c} \boldsymbol{B} \cdot \oint_{P_{n}}}_{=2 e B_{\perp} S_{n} / c=2 e \Phi_{n} / c} \boldsymbol{r} \times d \boldsymbol{r}=h(n+\gamma),
\end{align*}
$$
where $S_{n}$ is the area encircled by the path $P_{n}$ and $\Phi_{n}=B_{\perp} S_{n}$ the magnetic flux threading. With this we find
$$
\begin{align*}
\Phi_{n}=(n+\gamma) \Phi_{0}
\end{align*}
$$

Analogous to the real space also in reciprocal space the path of the electron encircles an area, $A_{n}$. The relation between $S_{n}$ can be derived from $\hbar \boldsymbol{k}=e(\boldsymbol{r} \times \boldsymbol{B}) / c$ using
$$
\begin{align*}
|d \boldsymbol{r}|=\frac{\Phi_{0}}{2 \pi B_{\perp}}|d \boldsymbol{k}| \implies S_{n}=\left(\frac{\Phi_{0}}{2 \pi B_{\perp}}\right)^{2} A_{n}
\end{align*}
$$

With the flux quantisation we obtain for a given magnetic field the area $A_{n}$,
$$
\begin{align*}
A_{n}=(n+\gamma) 4 \pi^{2} \frac{B_{\perp}}{\Phi_{0}}
\end{align*}
$$

All the possible paths if given quantum number $n$ form cylinder-like surfaces parallel to $\boldsymbol{k}_{\|}$in reciprocal space, with energies $E_{n, k_{\|}}$:

![Attachments/Script 40.webp|700](/img/user/Attachments/Script%2040.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=95&rect=75,443,522,669|•]]

Concentric tubes represent the quantised orbits in the reciprocal space corresponding to the areas $A_{n}$ embedded in the original Fermi surface which limits the height of the tubes, occupation along the $k_{\|}$-direction $\left(\boldsymbol{k}_{\|} \| \boldsymbol{B}\right)$. Left panel: 3-dimensional view of system with a simple Fermi surface. Right panel: cross section including $\boldsymbol{k}_{z}$. Extremal areas represent the band edges for the motion along $k_{\|}$(bottom: maximal $A$; and top: minimal $A$ ).

The range of $k_{\|}$for which this surface lies inside the filled Fermi sea is, thus, defined by $E_{n, k_{\|}} \leq \epsilon_{F}$. Different $n$ label different such concentric cylinders. The area between neighbouring paths depends linearly on $B_{\perp}$,
$$
\begin{align*}
A_{n+1}-A_{n}=\frac{4 \pi^{2} B_{\perp}}{\Phi_{0}}
\end{align*}
$$
such that the densities of the cylinders decreases with increasing $B_{\perp}$ and the number of cylinders within the Fermi sea shrinks. Important are extremal cross sections of the Fermi sea perpendicular to $\boldsymbol{k}_{\|}$where a cylinder passes the Fermi surface. Such an extremal cross section corresponds to the top, bottom or saddle point of $\epsilon_{\boldsymbol{k}_{\|}}$where the density of states has a singularities, analogous to the case of the band bottom of $\epsilon_{\boldsymbol{k}_{\|}}=\hbar^{2} k_{\|}^{2} / 2 m$. If a cylinder hits such an extremal cross section a singularity of the density of states lies at the Fermi surface yielding a spike in the magnetisation.
For the extremal cross sectional area $A$ we ask what is the period between crossings of the cylinder. Thus, for different quantum numbers we find
$$
\begin{align*}
A=(n+\gamma) 4 \pi^{2} \frac{B_{n}}{\Phi_{0}}=\left(n^{\prime}+\gamma\right) \frac{4 \pi^{2}}{\Phi_{0}} B_{n^{\prime}} .
\end{align*}
$$

Thus changing the field $B$ from $B_{n}$ to $B_{n+1}$ leads to two consecutive crossings. We observe that there is a regular oscillation as a function of $1 / B$ with the period,
$$
\begin{align*}
\Delta\left(\frac{1}{B}\right)=\frac{1}{B_{n+1}}-\frac{1}{B_{n}}=\frac{4 \pi^{2}}{A \Phi_{0}} .
\end{align*}
$$

We see in the left panel a Fermi surface with one extremal cross section. In the right panel there are three such cross sections. Such a vase-shaped Fermi surface may result from a band structure like,
$$
\begin{align*}
\epsilon_{\boldsymbol{k}}=\frac{\hbar^{2}}{2 m}\left(k_{x}^{2}+k_{y}^{2}\right)-2 t \cos \left(k_{z} c\right)
\end{align*}
$$
with $c$ the lattice constant along $z$-axis. With $\boldsymbol{k}_{\|}$along the $z$-axis. The cross sections are all circular parallel to $k_{x}-k_{y}$-plane with a radius $\tilde{k}_{F}\left(k_{z}\right)$ defined through
$$
\begin{align*}
\tilde{k}_{F}=\sqrt{\frac{2 m}{\hbar^{2}}\left(\epsilon_{F}+2 t \cos \left(k_{z} c\right)\right)}
\end{align*}
$$

This yields a singularity in the density of states at the band top and bottom, such that
$$
\begin{align*}
N_{0}(E)=\frac{1}{4 \pi^{2} \ell^{2} t} \sum_{n=0}^{\infty} \frac{1}{\sqrt{1-\left(E-\epsilon_{n, s}\right)^{2} / 4 t^{2}}} .
\end{align*}
$$

The oscillations in the magnetisation, thus, allow to measure the cross sectional area of the Fermi 'sphere'. By varying the orientation of the field the topology and shape of the Fermi surface can be mapped. As an alternative to the measurement of magnetisation oscillations one can also measure resistivity oscillations known under the name Schubnikov-de Haas effect. For both methods it is crucial that the Landau levels are sufficiently clearly recognisable. Apart from a low temperature this type of measurement requires sufficiently clean samples. In this context, "sufficiently clean" means that the average life-time $\tau$ (average time between two scattering events) has to be much larger than the period of the cyclotron orbits, i.e. $\omega_{c} \tau \gg 1$. This condition follows from the uncertainty relation
$$
\begin{align*}
\Delta \epsilon \sim \frac{\hbar}{\tau} \ll \hbar \omega_{c} .
\end{align*}
$$

This means that one can improve the situation by going to high magnetic fields.

---
## 4.2 Quantum Hall Effect
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=95&selection=164,0,166,18|•]]

**Classical Hall Effect**

The Hall effect, discovered by Edwin Hall in 1879, originates from the Lorentz force exerted by a magnetic field on a moving charge. This force is perpendicular both to the velocity of the charged particle and to the magnetic field. In the presence of an electrical current, a Lorentz force produces a transverse voltage, whenever the applied magnetic field points in a direction
non-collinear to the current in the conductor. This so-called Hall effect can be used to investigate some properties of the charge carriers. Before treating the quantum version, we briefly review the original Hall effect. To this end we consider the classical equation of motion of an electron, subject to an electric and a magnetic field
$$
\begin{align*}
m^{*} \frac{d \boldsymbol{v}}{d t}=-e\left(\boldsymbol{E}+\frac{\boldsymbol{v}}{c} \times \boldsymbol{B}\right)
\end{align*}
$$
where $m^{*}$ is the effective electron mass. For this classical system, the steady state equation reads
$$
\begin{align*}
\boldsymbol{E}+\frac{\boldsymbol{v}}{c} \times \boldsymbol{B}=0
\end{align*}
$$

Consider the Hall geometry here:

![Attachments/Script 41.webp|700](/img/user/Attachments/Script%2041.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=96&rect=171,222,416,367|•]]

Further, consider the fixed current $\boldsymbol{j}=\left(j_{x}, 0,0\right)=\left(-n_{0} e v, 0,0\right)$ and magnetic field $\boldsymbol{B}=B_{z}$, the steady state condition (4.35) simplifies to
$$
\begin{align*}
E_{y}-\frac{v_{x} B_{z}}{c}=0
\end{align*}
$$

The solution $E_{y}=v_{x} B_{z} / c$ yields the Hall voltage that compensates the Lorentz force. The Hall conductivity $\sigma_{H}$ is defined as the ratio between the longitudinal current $j_{x}$ and the transverse electric field $E_{y}\left(j_{x}=\sigma_{x y} E_{y}\right)$, leading to
$$
\begin{align*}
\sigma_{H}=\sigma_{x y}=\frac{j_{x}}{E_{y}}=-\frac{n_{0} e c}{B_{z}}=\nu \frac{e^{2}}{h}
\end{align*}
$$
where $\nu=-n_{0} h c / B e .$ We infer that the measurements of the Hall conductivity can be used to determine both the charge density $n_{0}$ and the sign of the charge carriers, i.e. whether the Fermi surfaces encloses the $\Gamma$-point for electron-like, negative charges or a point on the boundary of the Brillouin zone for hole-like, positive charges.

**Discovery of the Quantum Hall Effects**

When measuring the Hall effect in a special two-dimensional electron system, Klaus von Klitzing and his collaborators made 1980 an astonishing discovery. ${ }^{4}$ The system was the inversion layer of GaAs-MOSFET device with a sufficiently high gate voltage (see Section 2.4.3) which behaves like a two-dimensional electron gas with a high mobility $e \tau / m^{*}$ due to the mean free path $l \sim 10 \text{ }\pu{Å}$ and low density $\left(n_{0} \sim 10^{11} \mathrm{~cm}^{-2}\right)$. The two extended dimensions correspond to the interface of the MOSFET, whereas the electrons are confined in the third dimension like in a potential well (cf. Section 2.4.3). In high magnetic fields between $1 \mathrm{~T}-30 \mathrm{~T}$ and at sufficiently low temperatures ( $T<4 \mathrm{~K}$ ), von Klitzing and coworkers observed a quantisation of the Hall conductivity corresponding to exact integer multiples of $e^{2} / h$
$$
\begin{align*}
\sigma_{H}=\nu_{n} \frac{e^{2}}{h}
\end{align*}
$$
where $\nu_{n} \in \mathbb{Z}$. By now, the integer quantisation is so widely verified, that the von Klitzing constant (resistance quantum named after the discoverer of the Quantum Hall effect) $R_{K}=$ $h / e^{2}=25812.807 \Omega$ is used in resistance calibrations. In the field range where the transverse conductivity shows integer plateaus in $\nu \propto 1 / B$, the longitudinal conductivity $\sigma_{x x}$ vanishes and takes finite values only when $\sigma_{H}$ crossed over from one quantised value to the next:

![Attachments/Script 42.webp|700](/img/user/Attachments/Script%2042.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=97&rect=174,225,418,472|•]]

In 1982, Tsui, Störmer, and Gossard discovered an additional quantisation of $\sigma_{H}$, corresponding to certain rational multiples of $e^{2} / h$. Correspondingly, one now distinguishes between the integer quantum Hall effect (short: **IQHE**) and the fractional quantum Hall effect (short: **FQHE**). These discoveries marked the beginning of a whole new field in solid state physics that continues to produce interesting results.

### 4.2.1 Hall Effect of the Two-Dimensional Electron Gas

Here we first discuss the Hall effect in the quantum mechanical treatment. For this purpose we start with the Hamilton operator and neglect the electron spin. Working again in the Landau gauge, $\boldsymbol{A}=(-B y, 0,0)$, and confining the electronic system to two dimensions, the Hamiltonian reduces to
$$
\begin{align*}
\mathcal{H}=\frac{1}{2 m}\left[-\hbar^{2} \frac{\partial^{2}}{\partial y^{2}}+\left(-i \hbar \frac{\partial}{\partial x}-\frac{e}{c} B y\right)^{2}\right] .
\end{align*}
$$

For the two-dimensional gas there is no motion in the $z$-direction, so that the highly degenerate energy eigenvalues are given by the spectrum of a one-dimensional harmonic oscillator $E_{n}=$ $\hbar \omega_{c}(n+1 / 2)$, where again $\omega_{c}=|e B| / m c$. Here, we will concentrate on the lowest Landau level ( $n=0$ ) with the wave function
$$
\begin{align*}
\phi_{0, k_{x}}(x, y)=\frac{1}{\sqrt{2 \pi \ell^{2}}} e^{-\left(y-y_{0}\right)^{2} / 2 \ell^{2}} e^{i k_{x} x} .
\end{align*}
$$
where the magnetic length $\ell=\sqrt{\hbar c /|e B|}$ gives the extension of the wave function in the presence of the magnetic field. In $x$-direction, the wave function is localised around $y_{0}=k_{x} \ell^{2}$, whereas it takes the form of a plane wave in $x$-direction. As discussed previously, the energy does not depend on $k_{x}$.
We now introduce an electric field $E_{y}$ along the $x$-direction. The Hamilton operator (4.40) is then modified by an additional potential $U(\boldsymbol{r})=e E_{y} y$. This term can easily be absorbed into the harmonic potential and leads to a shift of the centre of the wave function,
$$
\begin{align*}
y_{0}\left(k_{x}\right) \rightarrow y_{0}^{\prime}\left(k_{x}\right)=k_{x} \ell^{2}-\frac{e E_{y}}{m \omega_{c}^{2}} .
\end{align*}
$$

Moreover the degeneracy of the Landau level is lifted since the energy becomes $k_{x}$-dependent and (after completing the square) takes the form
$$
\begin{align*}
E_{n=0}\left(k_{x}\right)=\frac{\hbar \omega_{c}}{2}+e E_{y} y_{0}^{\prime}\left(k_{x}\right)+\frac{m}{2}\left(\frac{c E_{y}}{B}\right)^{2} .
\end{align*}
$$

The energy (4.43) corresponds to the wave function $\phi_{0 k_{y}}$ from (4.41) where $y_{0}$ is replaced by $y_{0}^{\prime}$. The velocity of the electrons is then given by
$$
\begin{align*}
v_{x}\left(k_{x}\right)=\frac{1}{\hbar} \frac{d E_{n=0}\left(k_{x}\right)}{d k_{x}}=\frac{e E_{y} \ell^{2}}{\hbar}=\frac{c E_{y}}{B},
\end{align*}
$$
and from this, we determine the current density,
$$
\begin{align*}
j_{x}&=-e n_{0} v_{x}\left(k_{x}\right)=-e n_{0} \frac{c E_{y}}{B}=\frac{e \nu}{2 \pi \ell^{2}} \frac{c E_{y}}{B}\\&=\nu \frac{e^{2}}{h} E_{y}=\sigma_{H} E_{y}
\end{align*}
$$
where $-\nu=n_{0} 2 \pi \ell^{2}=N_{0} / N_{\text {deg }}$ corresponds to the filling of the (lowest) Landau level (maximally $N_{\text {deg }}$ electrons can be placed into each Landau level per spin). Note that $\nu^{-1}=B / n_{0} \Phi_{0}$ where $\Phi_{0}=h c / e$ represents the flux quantum, i.e. $\nu^{-1} \propto B$ is the number of flux quanta $\Phi_{0}$ per electron. The Hall conductivity is then identical to the result (4.37) derived previously based on the quasi-classical approximation. There is a linear relation between the Hall conductivity $\sigma_{H}$ and the index $\nu \propto B^{-1}$.

### 4.2.2 Integer Quantum Hall Effect

The plateaus observed by von Klitzing in the Hall conductivity $\sigma_{H}$ of the two-dimensional electron gas as a function of the magnetic field correspond to the values $\sigma_{H}=\nu_{n} e^{2} / h$, as if $\nu=\nu_{n} \in \mathbb{Z}$ was restricted to be an integer. Meanwhile, the longitudinal conductivity of the electron gas vanishes when a plateau of $\sigma_{H}$ is realised
$$
\begin{align*}
\sigma_{x x}=\frac{j_{x}}{E_{x}}=0
\end{align*}
$$
and only becomes finite at the transition points of $\sigma_{H}$ between two plateaus. This fact seems to be in contradiction with the results from the consideration above. The solution to this mysterious behaviour lies in the fact that disorder, which is always present in a real inversion layer, plays a crucial role and should not be neglected. In fact, due to the disorder, the electrons move in a randomly modulated potential landscape $U(x, y)$. As we will find out, even small amounts of disorder lead to the localisation of electronic states in this two-dimensional system. To illustrate this new aspect we focus on the lowest Landau level in the symmetric gauge $\boldsymbol{A}=(-y, x, 0) B / 2(B>0)$. The Schrödinger equation in polar coordinates is given by
$$
\begin{align*}
\frac{\hbar^{2}}{2 m^{*}}\left[-\frac{1}{r} \frac{\partial}{\partial r} r \frac{\partial}{\partial r}-\left(\frac{1}{r} \frac{\partial}{\partial \varphi}+i \frac{e}{2 \hbar c} B r\right)^{2}\right] \psi(r, \varphi)+U(x, y) \psi(r, \varphi)=E \psi(r, \varphi) .
\end{align*}
$$

Without the external potential $U(x, y)$ we find the ground state solutions
$$
\begin{align*}
\psi_{n=0, m}(r, \varphi)=\frac{1}{\sqrt{2 \pi \ell^{2} 2^{m} m!}}\left(\frac{r}{\ell}\right)^{m} e^{-i m \varphi} e^{-r^{2} / 4 \ell^{2}}
\end{align*}
$$
where all values of $m \in \mathbb{N}_{0}$ correspond to the same energy $E_{n=0}=\hbar \omega_{c} / 2$. One easily verifies, that the wave functions $\left|\psi_{n=0, m}(r, \varphi)\right|$ are peaked on circles of radius $r_{m}=\sqrt{2 m} \ell$:

![Attachments/Script 43.webp|700](/img/user/Attachments/Script%2043.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=99&rect=196,170,390,303|•]]

Note that the magnetic flux threading such a circle is given by
$$
\begin{align*}
\pi B r_{m}^{2}=\pi B 2 m \ell^{2}=2 \pi m B \frac{\hbar c}{e B}=m \frac{h c}{e}=m \Phi_{0}
\end{align*}
$$
which is an integer multiple of the flux quantum $\Phi_{0}=h c / e$.

Now we consider the effect of the disorder potential. The gauge can be adjusted to the potential landscape. If, for simplicity, we assume the potential to be rotationally invariant around the origin, the symmetric gauge is already optimal. For the potential
$$
\begin{align*}
U(x, y)=U(r)=\frac{C_{1}}{r^{2}}+C_{2} r^{2}+C_{3}
\end{align*}
$$
the exact expression of all eigenstates of equation (4.47) in the lowest Landau level is obtained using the Ansatz
$$
\begin{align*}
\tilde{\psi}_{0, m}(r, \varphi)=\frac{1}{\sqrt{2 \pi \ell^{* 2} 2^{\alpha} \Gamma(\alpha+1)}}\left(\frac{r}{\ell^{*}}\right)^{\alpha} e^{-i m \varphi} e^{-r^{2} / 4 \ell^{* 2}} .
\end{align*}
$$

After introducing the dimensionless parameters $C_{1}^{*}=2 m^{*} C_{1} / \hbar^{2}$ and $C_{2}^{*}=8 \ell^{4} m^{*} C_{2} / \hbar^{2}$, the quantities $\alpha$ and $\ell^{*}$ from equation (4.51) can be expressed via
$$
\begin{align*}
\begin{aligned}
\alpha^{2} & =m^{2}+C_{1}^{*}, \\
\left(\ell^{*}\right)^{-2} & =(\ell)^{-2} \sqrt{1+C_{2}^{*}} .
\end{aligned}
\end{align*}
$$

Indeed, the Ansatz (4.51) describes eigenstates of the disordered problem (4.47). The degeneracy of the ground state energy (the lowest Landau level) is now lifted,
$$
\begin{align*}
E_{0, m}=\frac{\hbar \omega_{c}}{2}\left[\frac{\ell^{2}}{\ell^{* 2}}(\alpha+1)-m\right]+C_{3} .
\end{align*}
$$

The wave functions are concentrated around the radii $r_{m}=\sqrt{2 \alpha} \ell^{*}$. For weak potentials $C_{1}^{*}, C_{2}^{*} \ll 1$ and $m \gg 1$ the energy is approximatively given by
$$
\begin{align*}
E_{0, m} \approx \frac{\hbar \omega_{c}}{2}+\frac{C_{1}}{r_{m}^{2}}+C_{2} r_{m}^{2}+C_{3}+\ldots
\end{align*}
$$
i.e. the wave function adjusts itself to the potential landscape. It turns out that the same is true for arbitrarily structured weak potential landscapes. The wave function describes electrons on quasi-classical trajectories that trace the equipotential lines of the underlying disorder potential. Consequently the states described here are localised in the sense that they are attached to the structure of the potential. The application of an electric field cannot set the electrons in the concentric rings in motion. Therefore, the electrons are localised and do not contribute to electric transport.

**Picture of the potential landscape**

When the magnetic field is varied the filling $\nu=-n_{0} 2 \pi \ell^{2}$ of the Landau level is adjusted accordingly. While all states of a given level are degenerate in the transitionally invariant case, now, these states are spread over a certain energy range due to the disorder. In the quasi-classical approximation, these states correspond to equipotential trajectories that are either filled or empty depending on the strength of the magnetic field, i.e. they are either below or above the chemical potential. These considerations lead to an intuitive picture on localised (closed trajectories) and extended (percolating trajectories) states. We may consider the potential landscape like a real landscape where the the trajectories are contour lines. Assume that we fill now water into such a landscape. The trajectories of the particles is restricted to the shore line. For small filling, we find lakes whose shores are closed and correspond to contour lines. They correspond to closed electron trajectories and represent localised electronic states. At very high water level, only the large mountains of the potential landscape would reach out of the water, forming islands in the sea. The coastlines again represent closed trajectories corresponding to localised electronic states. At some intermediate filling, a boundary between the lake and the island topology, there is a water level at which the coast lines become arbitrarily long and percolate through the whole landscape. Only these contour lines correspond to extended (non-localised) electron states. From this picture we conclude that when a Landau level of a system subject to a random potential is gradually filled, first all occupied state are localised (low filling). At some special intermediate filling level, the extended states are filled and contribute to the current transport. At higher chemical potential (filling) the states would be localised again. In the following argument, going back to Robert B. Laughlin, the presence of filled extended states plays an important role.

![Attachments/Script 44.webp|700](/img/user/Attachments/Script%2044.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=101&rect=212,583,386,757|•]]

**Laughlin's gauge argument**

We consider a long rectangular Hall element that is deformed into a so-called Corbino disc, i.e. a circular disc with a hole in the middle as shown here:

![Attachments/Script 45.webp|700](/img/user/Attachments/Script%2045.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=102&rect=185,573,407,755|•]]

The Hall element is threaded by a constant and uniform magnetic field $B$ along the $z$-axis. In addition we can introduce an arbitrary flux $\Phi$ through the hole without influencing the uniform field in the disc. This flux is irrelevant for all localised electron trajectories since only extended (percolating) trajectories wind around the hole of the disc and by doing so receive an Aharonov-Bohm phase. When the flux is increased adiabatically by $\delta \Phi$, the vector potential is changed according to
$$
\begin{align*}
\boldsymbol{A} \rightarrow \boldsymbol{A}+\delta \boldsymbol{A}=\boldsymbol{A}+\nabla \chi
\end{align*}
$$
which in our case means
$$
\begin{align*}
(\delta A)_{\varphi}=\frac{\delta \Phi}{2 \pi r}
\end{align*}
$$

At the same time, the wave function acquires a phase factor
$$
\begin{align*}
\psi \rightarrow \psi e^{-i e \chi / \hbar c}=\psi e^{-i\left(\delta \Phi / \Phi_{0}\right) \varphi}
\end{align*}
$$

If the disc was translationally invariant, meaning that disorder is neglected and only extended states exist, we could use the wave functions $\psi_{0, m}$ from (4.48), so that $B \pi r_{m}^{2}=m \Phi_{0}+\delta \Phi$. The single-valuedness of the wave function implies that $m$ has to be adjusted, $m \rightarrow m-\delta \Phi / \Phi_{0}$. This guarantees, that increasing $\Phi$ by one flux quantum leads to a decrease of $m$ by 1 . Hence, gauge invariance implies that the wave functions are shifted in their radius. This argument is also applicable to higher Landau levels.
Since this argument is topological in nature, it will not break down for independent electrons when disorder is introduced. The transfer of one electron between neighbouring extended states due to the change of $\Phi$ by $\Phi_{0}$ leads to a net shift of one electron from the outer to the inner boundary. If an electric field $E_{y}$ is applied in the radial direction (here denoted by $y$-direction), the transfer of this electron results in the energy change
$$
\begin{align*}
\Delta \epsilon_{V}=e E_{y} L
\end{align*}
$$
where $L$ is the distance between the inner and the outer boundary of the Corbino disc. A further change in the electromagnetic energy
$$
\begin{align*}
\Delta \epsilon_{I}=\frac{I_{x} \delta \Phi}{c}
\end{align*}
$$
is caused by the constant current $I_{x}$ (here the angular component is denoted by $x$) in the disc when the magnetic flux is increased by $\delta \Phi$. Following the Aharonov-Bohm argument that the energy of the system is invariant under a flux change by integer multiples of $\Phi_{0}$, the two energies should compensate each other. Thus, setting $\delta \Phi=\Phi_{0}$ and demanding that $\Delta \epsilon_{V}+\Delta \epsilon_{I}=0$ leads to
$$
\begin{align*}
\sigma_{H}=\frac{j_{x}}{E_{y}}=\frac{I_{x}}{L E_{y}}=-\frac{e^{2}}{h}
\end{align*}
$$

We conclude from this argument, that each filled Landau level containing percolating states will contribute $e^{2} / h$ to the total Hall conductivity.
_Alternative view point_: We assume that the flux $\delta \Phi$ changes linearly in time, $\delta \Phi(t)=t \Phi_{0} / T_{0}$ introducing in the time $T_{0}$ one flux quantum $\left(T_{0} \omega_{c} \gg 1\right)$. Looking at a concentric circle of radius $R$ on the Corbino disc, we can define an azimutal electric field due to the Faraday effect,
$$
\begin{align*}
2 \pi R E_{\phi}=-\frac{1}{c} \frac{\partial \delta \Phi}{\partial t}=-\frac{\Phi_{0}}{c T_{0}} .
\end{align*}
$$

At the same time one electron (per filled Landau level) is moved inwards, such that we define the mean current density $j_{r}$ as
$$
\begin{align*}
I_{r}=2 \pi R j_{r}=-\frac{e}{T_{0}}
\end{align*}
$$

This allows us to define the Hall conductance,
$$
\begin{align*}
\sigma_{x y}=\frac{j_{y}}{E_{x}}=\frac{j_{r}}{E_{\phi}}=\frac{c e}{\Phi_{0}}=\frac{e^{2}}{h}
\end{align*}
$$
for each filled Landau level.
Hence, for $\nu_{n} \in \mathbb{N}_{0}$ filled levels the Hall conductivity is given by $\sigma_{H}=\nu_{n} e^{2} / h$. Note the importance of the topological nature of the Hall conductivity ensuring the universal character of the quantisation.


**Localised and extended states**

The density of states of the two-dimensional electron gas (2DEG) in absence of an external magnetic field is given by
$$
\begin{align*}
N_{2 \mathrm{DEG}}(E)=2 \sum_{k_{x}, k_{y}} \delta\left(E-\frac{\hbar^{2}\left(k_{x}^{2}+k_{y}^{2}\right)}{2 m}\right)=\frac{L_{x} L_{y} m}{\pi \hbar^{2}}
\end{align*}
$$
with twice degenerate energy states for the spins, whereas for the Landau levels in a clean sample, we have
$$
\begin{align*}
N_{L}(E)=\frac{L_{x} L_{y}}{2 \pi \ell^{2}} \sum_{n, s} \delta\left(E-E_{n, s}\right) .
\end{align*}
$$

Here the prefactor is given by the large degeneracy of each Landau level.

![Attachments/Script 46.webp|700](/img/user/Attachments/Script%2046.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=103&rect=105,325,489,548|•]]

The figure shows in (a) the density of states for the two-dimensional electron gas in a magnetic field. The Landau levels are infinitely sharp and have all identical degeneracy. In (b), with disorder the previously sharp Landau levels broaden in energy. Many states form in the random potential landscape closed semi classical orbits which are, thus, localised. On the other hand, in the centre there are a few percolating extended semi classical orbitals. Note that the number of states in each broadened Landau level is still the same as the original degeneracy. With varying magnetic field the chemical potential (here green bar with finite width $k_{B} T$ indicating broadened Fermi-Dirac distribution) moves, such that states below are filled and states above are empty. If the green bare is in the localised region all $n$ lower Landau levels are completely filled and contribute $n e^{2} / h$ to the Hall conductance $\sigma_{x y}$ which is in a plateau. All extended states are either completely filled or empty such that the system is insulating, i.e. $\sigma_{x x}=0$. If the chemical potential lies at the extended states of a Landau level these are partially filled and act metallic. Because the Landau level is only partially filled, the $\sigma_{x y}$ lies between two plateaus. Note that the width of the step between to plateaus of $\sigma_{x y}$ depends on temperature and shrinks with lowering temperature.

According to our previous discussion, the main effect of a potential is to lift the degeneracy of the states comprising a Landau level. This remains true for random potential landscapes. Most of the states are then localised and do not contribute to electric transport. Only the few extended states contribute to the transport if they are filled. For partially filled extended states the Hall conductivity $\sigma_{H}$ is not an integer multiple of $e^{2} / h$, since not all percolating states - necessary for transferring one electron from one edge to the other, when the flux is changed by $\Phi_{0}$ (in Laughlin's argument) - are occupied. Thus, the charge transferred does not amount to a complete $-e$. The appearance of partially filled extended states marks the transition from one plateau to the next and is accompanied by a finite longitudinal conductivity $\sigma_{x x}$. When all extended states of a Landau level are occupied, the contribution to the longitudinal transport stops, i.e., in the range of a plateau $\sigma_{x x}$ vanishes. Because of thermal occupation, the plateaus quickly shrink when the temperature of the system is increased. This is the reason why the Quantum Hall Effect is only observable for sufficiently low temperatures ( $T<4 \mathrm{~K}$ ).

**Edge states and Büttiker's argument**

A confining potential prevents the electrons from leaving the metal. This potential at the edges of the sample has also to be considered in the potential landscape. Interestingly, equi-potential trajectories of states close to the edge are always extended and percolate along the edge. The corresponding wave functions have already been discussed in Section 4.2.1. We find that the energy is not symmetric in $k_{y}$, the wave vector along the edge, i.e. $E\left(k_{y}\right) \neq E\left(-k_{y}\right)$. This implies that the states are chiral and can move in one direction only for a given energy. The edge states on the opposing edges move in opposite directions, a fact that can be readily verified by inspection of (4.43) based on the figure below.
The total current flowing along an edge for a given Landau level is
$$
\begin{align*}
I=-\sum_{k_{x}}^{\text {occ. }} \frac{e}{L_{x}} v_{x}
\end{align*}
$$
where we sum over all occupied states and each state labelled by $k_{x}$ (determining the corresponding centre $y_{0}$ ) extends over the whole length $L_{x}$ of the Hall element. Thus, the density is given by $1 / L_{x}$. The wave vector is quantised according to the periodic boundary conditions; $k_{x}=2 \pi n_{x} / L_{x}$ with $n_{x} \in \mathbb{Z}$. The velocity $v_{x}$ is given by equation (4.44). Thus, we have
$$
\begin{align*}
I&=-\frac{e}{2 \pi \hbar} \int_{\text {occupied }} d k_{x} \frac{d E_{n}\left(k_{x}\right)}{d k_{x}}\\&=-\frac{e}{h} \int_{\text {occupied }} d y_{0} \frac{d E_{n}}{d y_{0}}=-\frac{e}{h}\left(\mu-E_{n}^{(0)}\right)
\end{align*}
$$
where $y_{0}=k_{x} \ell^{2}$ is the transversal position of the wave function and $\mu$ is the chemical potential. Sufficiently far away from the boundary $E_{n}$ is independent of $y_{0}$ and approaches the value $E_{n}^{(0)}=\hbar \omega_{c}(1 / 2+n)$ of a translationally invariant electron gas.
Now we consider the geometry of the Hall bar with two edges:

![Attachments/Script 47.webp|700](/img/user/Attachments/Script%2047.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=105&rect=106,561,494,755|•]]

The potential difference between the two opposing edges leads to a net current along the edge direction of the Hall bar,
$$
\begin{align*}
I_{x}=-\frac{e}{h} \int_{b}^{a} d y_{0} \frac{d E_{n}}{d y_{0}}=-\frac{e}{h}\left(\mu_{a}-\mu_{b}\right)=-\frac{e^{2}}{h} E_{y} L_{y}
\end{align*}
$$
and with that
$$
\begin{align*}
\sigma_{H}=\frac{I_{x}}{E_{y} L_{y}}=\frac{j_{x}}{E_{y}}=-\frac{e^{2}}{h},
\end{align*}
$$
where for $\mu_{a}=\mu_{b}$ we have $I_{a}=-I_{b}$. Note that $I_{x}=I_{a}+I_{b}$ is only valid when no currents are present in the bulk of the system. The latter condition is ensured by the localisation of the states at the chemical potential. This argument by Büttiker leads to the same quantisation as derived before, namely every Landau level contributes one edge state and thus $\sigma_{H}=\nu_{n} e^{2} / h$ ( $-\nu_{n}$ is the number of occupied Landau levels). Note that this argument is independent of the precise shape of the confining edge potential.
Within this argument we are able to understand why the longitudinal conductivity has to vanish at the Hall plateaus. For that we express Ohm's law However it is simpler to discuss the resistivity. Like the conductivity $\widehat{\sigma}$ the resistivity $\widehat{\rho}$ is a tensor:
$$
\begin{align*}
\begin{aligned}
\boldsymbol{j} & =\widehat{\sigma} \boldsymbol{E} \\
\boldsymbol{E} & =\widehat{\rho} \boldsymbol{j}
\end{aligned}
\end{align*}
$$
where the conductivity $\widehat{\sigma}$ and the resistivity $\widehat{\rho}$ are both $2 \times 2$ tensors with $\sigma_{x x}=\sigma_{y y}\left(\rho_{x x}=\rho_{y y}\right)$ and $\sigma_{x y}=-\sigma_{y x}\left(\rho_{x y}=-\rho_{y x}\right)$. Therefore, we find
$$
\begin{align*}
\begin{aligned}
\sigma_{x x} & =\frac{\rho_{x x}}{\rho_{x x}^{2}+\rho_{x y}^{2}}, \\
\sigma_{x y} & =\frac{-\rho_{x y}}{\rho_{x x}^{2}+\rho_{x y}^{2}} .
\end{aligned}
\end{align*}
$$

In the following argument, we explain why the longitudinal resistivity $\rho_{x x}$ in two dimensions has to vanish in the presence of a finite Hall resistivity $\rho_{x y}$. Since the edge state electrons with a given energy can only move in one direction, there is no backward scattering by obstacles as long as the edges are far apart from each other. No scattering between the two edges implies $\rho_{x x}=0$ and hence $\sigma_{x x}=0$. A finite resistivity can only occur when extended states are present in the bulk, such that the edge states on opposite edges are no longer spatially separated from each other.

### 4.2.3 Fractional Quantum Hall Effect

Only two years after the discovery of the Integer Quantum Hall Effect, Störmer, Tsui and Gossard observed further series of plateaus of the Hall resistivity in a 2DEG with very high quality MOSFET inversion layers at low temperatures:

![Attachments/Script 48.webp|700](/img/user/Attachments/Script%2048.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=106&rect=217,414,379,639|•]]

The most pronounced of these plateaus is observed at a filling of $\nu=1 / 3\left(\sigma_{x y}=\nu e^{2} / h\right)$. Later, an entire hierarchy of plateaus at fractional values $\nu=\nu_{p, m}=p / m$ with $p, m \in \mathbb{N}$ has been discovered,
$$
\begin{align*}
\nu_{p, m} \in\left\{\frac{1}{3}, \frac{2}{3}, \frac{2}{5}, \frac{3}{5}, \frac{3}{7}, \ldots\right\} .
\end{align*}
$$

The emergence of these new plateaus is a clear evidence of the so-called Fractional Quantum Hall Effect (FQHE). It was again Laughlin who found the key concept to explain the FQHE. Unlike the IQHE, this new quantisation feature can not be understood from a single-electron picture, but is based on the Coulomb repulsion among the electrons and the accompanying correlation effects. Laughlin specially investigated the case $\nu_{p, m}=1 / 3$ and made the Ansatz
$$
\begin{align*}
\Psi_{1 / m}\left(z_{1}, \ldots, z_{N}\right) \propto \prod_{i<j}\left(z_{i}-z_{j}\right)^{m} \exp \left(-\sum_{i} \frac{\left|z_{i}\right|^{2}}{4 \ell^{2}}\right)
\end{align*}
$$
for the $N$-body wave function, where $z=x-i y$ is a complex number representing the coordinates of the two-dimensional system. Limiting ourselves to the consideration of the lowest Landau level, this state gives a stable plateau with $\sigma_{H}=(1 / 3) e^{2} / h$, when $m=3$.
A heuristic interpretation of the Laughlin state was proposed by J. K. Jain and it is based on the concept of so-called composite Fermions. In fact, Laughlin's state (4.75) can be written as
$$
\begin{align*}
\Psi_{1 / m}=\prod_{i<j}\left(z_{i}-z_{j}\right)^{m-1} \Psi_{S}
\end{align*}
$$
where $\Psi_{S}$ is the Slater determinant describing the completely filled lowest Landau level. We see that the prefactor of $\Psi_{S}$ in equation (4.76) acts as a so-called Jastrow factor that introduces correlation effects into the wave function, since only the correlations due to the Pauli exclusion principle are contained in $\Psi_{S}$. The Jastrow factor treats the Coulomb repulsion among the electrons and consequently leads to an additional suppression of the wave function whenever two electrons approach each other. In the form introduced above, it produces an phase factor for the electrons encircling each other. In particular, exchanging two electrons leads to a phase
$$
\begin{align*}
\exp (i(m-1) \pi)=\exp \left(i \frac{e}{\hbar c} \frac{m-1}{2} \Phi_{0}\right),
\end{align*}
$$
since $\Phi_{0}=2 \pi \hbar c / e$. This phase has to be unity since the Slater state $\Psi_{S}$ is odd under exchange of two electrons. 

![Attachments/Script 49.webp|700](/img/user/Attachments/Script%2049.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=107&rect=190,651,434,741|•]]

Therefore $m$ is restricted to odd integer values. This guarantees that the total wave function $\Psi_{1 / m}$ still changes sign when two electrons are exchanged.
According to the Footnote 6 (see equation (4.45)), the case $\nu_{p, m}=1 / 3$ implies that there are three flux quanta $\Phi_{0}$ per electron. In order to understand the FQHE, one constructs so-called composite Fermions which do not interact with each other. Here, a composite Fermion consists of an electron that has two (in fact $m-1$ ) negative flux quanta attached to it. These objects may be considered as independent Fermions since the attached flux quanta compensate the Jastrow factor in equation 4.76 through factors of the type $\left(z_{i}-z_{j}\right)^{-(m-1)}$. The exchange of two such composite Fermions in two dimensions leads to an Aharanov-Bohm phase that is just opposed to that in equation (4.81). Due to the presence of the flux $-2 \Phi_{0}$ per electron, the composite Fermions are subject to an effective field composed of the external field and the attached flux quanta:
$$
\begin{align*}
\begin{aligned}
B_{\text {eff }} & =B-\sum_{i} 2 \Phi_{0}\left(z_{i}\right) \\
& =\frac{1}{3} B-\left(\sum_{i} 2 \Phi_{0}\left(z_{i}\right)-\frac{2}{3} B\right)
\end{aligned}
\end{align*}
$$

For an external field $B=3 n_{0} \Phi_{0}$, the expression in the brackets of equation (4.83) vanishes and the composite Fermions feel an effective field $B_{\text {eff }}=n_{0} \Phi_{0}$:

![Attachments/Script 50.webp|700](/img/user/Attachments/Script%2050.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=108&rect=152,638,446,767|•]]

Thus, these Fermions form an Integer Quantum Hall state with $\nu=1$ (for $B=3 n_{0} \Phi_{0}$ ), as discussed previously. This way of interpretation is applicable to other Fractional Quantum Hall states, too, since for $n$ filled Landau levels with composite Fermions consisting of an electron with an attached flux of $-2 k \Phi_{0}$, the effective field reads
$$
\begin{align*}
B_{\mathrm{eff}}=n_{0} \frac{\Phi_{0}}{\nu_{p, m}}-2 k n_{0} \Phi_{0}=n_{0} \frac{\Phi_{0}}{n} .
\end{align*}
$$

From this we infer, that
$$
\begin{align*}
\frac{1}{n}+2 k=\frac{1}{\nu_{p, m}}
\end{align*}
$$
or equivalently
$$
\begin{align*}
\nu_{p, m}=\frac{p}{m}=\frac{n}{2 k n+1} .
\end{align*}
$$

Despite the apparent simplicity of the treatment in terms of independent composite Fermions, one should keep in mind that one is dealing with a strongly correlated electron system. The structure of the composite Fermions is a manifestation of the fact that the Fermions are not independent electrons. No composite Fermions can exist in the vacuum, they can only arise within a certain many-body state. The Fractional Quantum Hall state also exhibits unconventional excitations with fractional charges. For example in the case $\nu_{p, m}=1 / 3$, there are excitations with effective charge $e^{*}=e / 3$. These are so-called 'topological' excitations, that can only exist in correlated systems. The Fractional Quantum Hall system is a very peculiar 'ordered' state of a two-dimensional electron system that has many interesting and complex properties. 

---