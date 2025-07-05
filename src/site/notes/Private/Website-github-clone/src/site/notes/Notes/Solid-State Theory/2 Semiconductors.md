---
{"dg-publish":true,"permalink":"/private/website-github-clone/src/site/notes/notes/solid-state-theory/2-semiconductors/","updated":"2025-07-03T20:20:02.066+02:00"}
---


Jump back to ==[[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Solid-State Theory/2 Semiconductors#2.1 The Band Structure of the Elements in Group IV\|2.1 The Band Structure of the Elements in Group IV]]
[[Notes/Solid-State Theory/2 Semiconductors#2.2 Elementary Excitations in Semiconductors\|2.2 Elementary Excitations in Semiconductors]]
[[Notes/Solid-State Theory/2 Semiconductors#2.3 Doping Semiconductors\|2.3 Doping Semiconductors]]
[[Notes/Solid-State Theory/2 Semiconductors#2.4 Semiconductor Devices\|2.4 Semiconductor Devices]]

---
# 2 Semiconductors
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=40&selection=2,0,2,14| ]]

The technological relevance of semiconductors can hardly be overstated. In this chapter, we review some of their basic properties. Regarding the electric conductivity, semiconductors are placed in between metals and insulators. Normal metals are good conductors at all temperatures, and the conductivity usually increases with decreasing temperature. On the other hand, for semiconductors and insulators the conductivity decreases upon cooling.

![Attachments/Script 12.webp|700](/img/user/Attachments/Script%2012.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=40&rect=157,340,443,501| ]]

We will see that the conductivity may be written in the Drude form as
$$
\begin{aligned}
\sigma=\frac{n e^{2} \tau}{m}
\end{aligned}
$$
where $n$ is the density of mobile electrons, $\tau$ is the average time between two scattering events of the electrons (transport life time of electrons) and $m$ and $e$ are the electronic mass and charge, respectively. In metals, $n$ is essentially independent of temperature, whereas the scattering time $\tau$ decreases with increasing temperature. Thus, $\tau$ determines mainly the temperature dependence of the conductivity in metals. On the other hand, insulators and semiconductors have no mobile charges at $T=0$. At finite temperature, charges are induced by thermal excitations which have to overcome the band gap $E_{g}$ between the valence and the conduction band, yielding
$$
\begin{aligned}
n \sim n_{0}\left(\frac{T}{T_{0}}\right)^{3 / 2} e^{-E_{g} / 2 k_{B} T}
\end{aligned}
$$
where $T_{0}=300\,\mathrm{K}$ and the electron density in the material $n_{0}$ is typically $10^{20}\,\mathrm{cm}^{-3}$. Actually, one has to count both the excited electrons in the conduction band and the resulting holes in the valence band, as both contribute to the current,
$$
\begin{aligned}
\mathbf{j}=\left(\sigma_{+}+\sigma_{-}\right) \mathbf{E}, \quad \text{ with } \quad \sigma_{\pm}=\frac{n_{\pm} e^{2} \tau_{\pm}}{m_{\pm}}
\end{aligned}
$$
where + and - stand for holes and electrons, respectively, and $n_{+}=n_{-}$holds for thermal excitation. Note that, in general, the effective masses and scattering times are not the same for the valence and conduction bands.

For insulators, the energy gap is huge, for example, $5.5\,\mathrm{eV}$ for diamond. Consequently, the charge carrier density at room temperature $T=300\,\mathrm{K}$ is around $n \sim 10^{-27}\,\mathrm{cm}^{-3}$. For a higher charge carrier density $n \sim 10^{3}-10^{11}\,\mathrm{cm}^{-3}$, smaller gaps $E_{g} \sim 0.5-1\,\mathrm{eV}$ are necessary. Materials with a band gap in this regime are not fully isolating and, therefore, are termed semiconductors. However, the carrier densities of both insulators and semiconductors are dwarfed by the electron density in metals contributing to current transport ($n_{\mathrm{metal}} \sim 10^{23}-10^{24}\,\mathrm{cm}^{-3}$). Adding a small amount of impurities in semiconductors, a process called doping with acceptors or donors, their conductivity can be engineered in various ways, rendering them useful as components in innumerable applications.

---
## 2.1 The Band Structure of the Elements in Group IV
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=41&selection=131,0,133,46| ]]

### 2.1.1 Crystal and Band Structure

The most important semiconductor for technological applications is silicon (Si) that - like carbon (C), germanium (Ge) and tin (Sn) - belongs to the group IV of the periodic table. These elements have four electrons in their outermost shell in the configuration $(ns)^{2}(np)^{2}$ ($n=2$ for C, $n=3$ for Si, $n=4$ for Ge, and $n=5$ for Sn). All four elements form crystals with a diamond structure, that is, a face-centred cubic lattice with a unit cell containing two atoms located at $(0,0,0)$ and $\left(\frac{1}{4}, \frac{1}{4}, \frac{1}{4}\right)$ (for Sn this is called $\alpha-\mathrm{Sn}$). The crystal structure is stabilised by hybridisation of the four valence electrons, leading to covalent bonding of oriented orbitals,
$$
\begin{aligned}
\left|\psi_{1}\right\rangle&=|ns\rangle+|np_{x}\rangle+|np_{y}\rangle+|np_{z}\rangle, \\
\left|\psi_{2}\right\rangle&=|ns\rangle+|np_{x}\rangle-|np_{y}\rangle-|np_{z}\rangle, \\
\left|\psi_{3}\right\rangle&=|ns\rangle-|np_{x}\rangle+|np_{y}\rangle-|np_{z}\rangle, \\
\left|\psi_{4}\right\rangle&=|ns\rangle-|np_{x}\rangle-|np_{y}\rangle+|np_{z}\rangle .
\end{aligned}
$$

Locally, the nearest neighbours of each atom form a tetrahedron around it, which leads to the diamond structure of the lattice:

![Attachments/Script 13.webp|700](/img/user/Attachments/Script%2013.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=41&rect=183,159,405,308| ]]

Let us look now at the electron count. The two atoms per unit cell provide together eight valence electrons per unit cell. With these we can fill four bands completely (see [[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1.6 Band-Filling and Materials Properties\|Section 1.6]]). Thus, in the ground state the lowest four bands constitute the completely filled valence bands, while all the upper ones are empty and represent conduction bands. The energy gap between the valence and conduction bands (top of valence band at $\mathbf{k}=0$ and bottom of conduction bands at $\mathbf{k}_{0} \neq 0$) is smallest for a non-vanishing connecting $\mathbf{k}$-vector. We call this an indirect gap. This is the case for both C and Si. A typical example for a direct gap semiconductor is GaAs where the two sublattices of the crystal structure in diamond are occupied by an atom of the group III and V, respectively, in the periodic table.

![Attachments/Script 14.webp|700](/img/user/Attachments/Script%2014.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=42&rect=80,116,518,305| ]]

Note that generally energy gaps in semiconductors and insulators are classified to be direct if the wave-vector connecting the maximum of the valence band and the minimum of the conduction band vanishes. Otherwise a gap is called indirect:

![Attachments/Script 15.webp|700](/img/user/Attachments/Script%2015.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=43&rect=111,554,489,720| ]]

List of some facts about these materials of the group IV and compounds combining group III and V:

- Carbon has an energy gap of around $5.5\,\mathrm{eV}$ in the diamond structure. Thus, in this configuration it is not a semiconductor but an insulator. The large energy gap causes the transparency of diamond in the visible range ($1.5-3.5\,\mathrm{eV}$), as the electromagnetic energy in this range cannot be absorbed by the electrons.
- The energy gap of silicon is $1.12\,\mathrm{eV}$ and thus much smaller; furthermore, it is indirect.
- Germanium has an indirect gap of $0.67\,\mathrm{eV}$.
- GaAs and GaN have a direct energy gap of $1.43\,\mathrm{eV}$ and $3.5\,\mathrm{eV}$, respectively.

---
## 2.2 Elementary Excitations in Semiconductors
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=43&selection=59,0,61,40| ]]

We consider a simple two-band model to illustrate the most basic properties of the excitation spectrum of a semiconductor. The Hamiltonian is given by
$$
\begin{aligned}
\mathcal{H}=\sum_{\mathbf{k}, s} \epsilon_{V, \mathbf{k}} \hat{c}_{V, \mathbf{k}, s}^{\dagger} \hat{c}_{V, \mathbf{k}, s}+\sum_{\mathbf{k}, s} \epsilon_{C, \mathbf{k}} \hat{c}_{C, \mathbf{k}, s}^{\dagger} \hat{c}_{C, \mathbf{k}, s},
\end{aligned}
$$
where $\epsilon_{V, \mathbf{k}}$ and $\epsilon_{C, \mathbf{k}}$ are the band energies of the valence band and conduction band, respectively. The figure shows the schematic band structure of a direct-gap semiconductor with a $\mathbf{k} \cdot \mathbf{p}$-approximation around the top of the valence and the bottom of the conduction band:

![Attachments/Script 16.webp|700](/img/user/Attachments/Script%2016.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=44&rect=164,591,435,744| ]]

The operator $c_{n \mathbf{k} s}^{\dagger}\left(c_{n \mathbf{k} s}\right)$ creates (annihilates) an electron with (lattice) momentum $\mathbf{k}$ and spin $s$ in the band $n, n \in\{V, C\}$. In the ground state $\left|\Phi_{0}\right\rangle$,
$$
\begin{aligned}
\left|\Phi_{0}\right\rangle=\prod_{\mathbf{k}, s} \hat{c}_{V, \mathbf{k}, s}^{\dagger}|0\rangle,
\end{aligned}
$$
the valence band is completely filled, whereas the conduction band is empty. The product on the right-hand side runs over all wave vectors in the first Brillouin zone. The ground state energy is given by
$$
\begin{aligned}
E_{0}=2 \sum_{\mathbf{k}} \epsilon_{V, \mathbf{k}}.
\end{aligned}
$$
The total momentum and spin of the ground state vanish. We next consider single electron excitations from that ground state.
Where is the chemical potential? We assume a simple band structure for a direct-gap semiconductor based on the $\mathbf{k} \cdot \mathbf{p}$ approximation:
$$
\begin{aligned}
\epsilon_{V, \mathbf{k}}=-\frac{\hbar^{2} |\mathbf{k}|^{2}}{2 m_{V}} \quad \text{ and } \quad \epsilon_{C, \mathbf{k}}=E_{g}+\frac{\hbar^{2} |\mathbf{k}|^{2}}{2 m_{C}}
\end{aligned}
$$

Now we calculate the electron distribution. The overall electron density is $n$:
$$
\begin{aligned}
n=\sum_{\mathbf{k} \in \mathrm{BZ}} \sum_{s} 1=2 \int_{\mathrm{BZ}} \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}} 1 .
\end{aligned}
$$

The density of electrons in the conduction and valence band for small finite temperature are given by
$$
\begin{aligned}
n_{C}&=2 \int_{\mathrm{BZ}} \frac{d^{3}\mathbf{k}}{(2 \pi)^{3}} n_{F}\left(\epsilon_{C, \mathbf{k}}\right)=\int_{\mathrm{BZ}} \frac{d^{3}\mathbf{k}}{4 \pi^{3}} \frac{1}{e^{\beta\left(\epsilon_{C, \mathbf{k}}-\mu\right)}+1} \\
&\approx \int_{\mathrm{BZ}} \frac{d^{3}\mathbf{k}}{4 \pi^{3}} e^{-\beta\left(\epsilon_{C, \mathbf{k}}-\mu\right)}=\frac{e^{\beta\left(\mu-E_{g}\right)}}{4 \pi^{3}}\left(\frac{2 \pi m_{C} k_{B} T}{\hbar^{2}}\right)^{3 / 2},
\end{aligned}
$$
and
$$
\begin{aligned}
n-n_{V}&=\int_{\mathrm{BZ}} \frac{d^{3}\mathbf{k}}{4 \pi^{3}}\left(1-n_{F}\left(\epsilon_{V, \mathbf{k}}\right)\right)=\int_{\mathrm{BZ}} \frac{d^{3}\mathbf{k}}{4 \pi^{3}} \frac{1}{e^{-\beta\left(\epsilon_{V, \mathbf{k}}-\mu\right)}+1} \\
&\approx \int_{\mathrm{BZ}} \frac{d^{3}\mathbf{k}}{4 \pi^{3}} e^{\beta\left(\epsilon_{V, \mathbf{k}}-\mu\right)}=\frac{e^{-\beta \mu}}{4 \pi^{3}}\left(\frac{2 \pi m_{V} k_{B} T}{\hbar^{2}}\right)^{3 / 2}
\end{aligned}
$$

Here we assumed that both $\mu$ and $E_{g}-\mu$ are much larger than $k_{B} T (\beta=1 / k_{B} T)$. Now we see that electron count gives $n_{C}+n_{V}=n$ such that we can set the two lines of the above equation equal to obtain for the chemical potential,
$$
\begin{aligned}
\mu=\frac{E_{g}}{2}+\frac{3}{4} k_{B} T \ln \left(\frac{m_{V}}{m_{C}}\right) .
\end{aligned}
$$

At $T=0$ the chemical potential is exactly in the centre of the band gap and then moves with increasing $T$, if the effective masses are different. Note also that for small temperatures the thermally activated carriers, electrons and holes, are well described by the classical Maxwell-Boltzmann distribution, as was used in the approximation of the integrals.

### 2.2.1 Electron-Hole Excitations

A simple excitation of the system consists of removing an electron (that is, creating a hole) from the valence band and inserting it into the conduction band. We write such an excitation as
$$
\begin{aligned}
\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle=\hat{c}_{C, \mathbf{k}+\mathbf{q}, s}^{\dagger} \hat{c}_{V, \mathbf{k}, s^{\prime}}\left|\Phi_{0}\right\rangle=\widehat{\rho}_{\mathbf{k}, \mathbf{q}, s s^{\prime}}\left|\Phi_{0}\right\rangle
\end{aligned}
$$
where we remove an electron with lattice momentum $\mathbf{k}$ and spin $s^{\prime}$ in the valence band and replace it by an electron with $\mathbf{k}+\mathbf{q}$ and $s$ in the conduction band. The possibility of changing the spin from $s^{\prime}$ to $s$ and of shifting the wave vector of conduction electrons by $\mathbf{q}$ is included.

Furthermore $\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle$ is assumed to be normalised. The electron-hole pair may either be in a spin-singlet (pure charge excitation $s=s^{\prime}$) or a spin-triplet state (spin excitation $s \neq s^{\prime}$). Apart from spin, the state is characterised by the wave vectors $\mathbf{k}$ and $\mathbf{q}$.

To define the excitation energy: if we consider the eigenenergy of a state with an electron-hole excitation we obtain
$$
\begin{aligned}
\mathcal{H} \widehat{\rho}_{\mathbf{k}, \mathbf{q}, s s^{\prime}}\left|\Phi_{0}\right\rangle=\mathcal{H}\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle=E\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle
\end{aligned}
$$
which includes in $E$ also the ground state energy $E_{0}$. Thus, with
$$
\begin{aligned}
\widehat{\rho}_{\mathbf{k}, \mathbf{q}, s s^{\prime}} \mathcal{H}\left|\Phi_{0}\right\rangle=E_{0} \widehat{\rho}_{\mathbf{k}, \mathbf{q}, s s^{\prime}}\left|\Phi_{0}\right\rangle=E_{0}\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle
\end{aligned}
$$
we may combine these relations to obtain the excitation energy only, $E_{\mathbf{k}, \mathbf{q}, s s^{\prime}}=E-E_{0}$ through the commutator. The excitation energy can be obtained by
$$
\begin{aligned}
E_{\mathbf{k}, \mathbf{q}, s s^{\prime}}\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle & =\left[\mathcal{H}, \widehat{\rho}_{\mathbf{k}, \mathbf{q}, s s^{\prime}}\right]\left|\Phi_{0}\right\rangle\\
&=\mathcal{H}\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle-\underbrace{\widehat{\rho}_{\mathbf{k}, \mathbf{q}, s s^{\prime}} \mathcal{H}\left|\Phi_{0}\right\rangle}_{E_{0}\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle},
\end{aligned}
$$
such that,
$$
\begin{aligned}
E_{\mathbf{k}, \mathbf{q}, s s^{\prime}}=\epsilon_{C, \mathbf{k}+\mathbf{q}}-\epsilon_{V, \mathbf{k}} .
\end{aligned}
$$
The spectrum of the electron-hole excitations with fixed $\mathbf{q}$ is determined by the spectral function
$$
\begin{aligned}
I(\mathbf{q}, E)=\sum_{n}\left|\langle\Phi_{n}| \widehat{\rho}_{\mathbf{k}, \mathbf{q}, s s^{\prime}}| \Phi_{0}\rangle\right|^{2} \delta[E-(E_{n}-E_{0})]
\end{aligned}
$$
where $\left|\Phi_{n}\right\rangle$ is energy eigenstate of $\mathcal{H}$ with energy $E_{n}$. Since $\widehat{\rho}_{\mathbf{k}, \mathbf{q}, s s^{\prime}}\left|\Phi_{0}\right\rangle$ corresponds to an electron-hole excitation which is an eigenstate of $\mathcal{H}$ only $\left|\Phi_{n}\right\rangle$ being such excitations will give a non-vanishing matrix element. Consequently, we find
$$
\begin{aligned}
I(\mathbf{q}, E)=\sum_{\mathbf{k}, s, s^{\prime}} \underbrace{\left|\left\langle\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}| \hat{c}_{C, \mathbf{k}+\mathbf{q}, s^{\prime}}^{\dagger} \hat{c}_{V, \mathbf{k}, s^{\prime}}| \Phi_{0}\right\rangle\right|^{2}}_{=1} \delta\left(E-\epsilon_{C, \mathbf{k}+\mathbf{q}}+\epsilon_{V, \mathbf{k}}\right).
\end{aligned}
$$
Excitations exist for all pairs $E$ and $\mathbf{q}$ for which $I(\mathbf{q}, E)$ does not vanish, thus, only above a $\mathbf{q}$-dependent threshold, which is minimal for $\mathbf{q}=\mathbf{k}_{0}$, where $\mathbf{k}_{0}=0 (\mathbf{k}_{0} \neq 0)$ for a direct (indirect) energy gap. As $\mathbf{k}$ is arbitrary, there is a continuum of excited states above the threshold for each $\mathbf{q}$ (as illustrated in the conceptual depiction of excitation spectra). The magnitude of $I(\mathbf{q}, E)$ (not depicted here) is the density of excitations with (momentum $\mathbf{q}$, energy $E$). Note that the matrix elements are only exactly 1 if $\left|\mathbf{k}+\mathbf{q}, s ; \mathbf{k}, s^{\prime}\right\rangle$ is an exact eigenstate of $\mathcal{H}$ which is not true when we take electron-electron interactions into account as below.
For the electron-hole excitations considered here, interactions among them were assumed to be irrelevant, and the electrons involved are treated as non-interacting particles. Note the analogy with the Dirac-sea in relativistic quantum mechanics: The electron-hole excitations of a semiconductor correspond to electron-positron pair creation in the Dirac theory.

### 2.2.2 Excitons

Taking into account the Coulomb interaction between the electrons, there is another class of excitations called excitons. In order to discuss them, we extend the previously defined two-band Hamiltonian by the Coulomb interaction,
$$
\begin{aligned}
\widehat{V}=\sum_{s, s^{\prime}} \int d^{3}\mathbf{r} d^{3}\mathbf{r}^{\prime} \widehat{\Psi}_{s}^{\dagger}(\mathbf{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\mathbf{r}^{\prime}\right) \frac{e^{2}}{\left|\mathbf{r}-\mathbf{r}^{\prime}\right|} \widehat{\Psi}_{s^{\prime}}\left(\mathbf{r}^{\prime}\right) \widehat{\Psi}_{s}(\mathbf{r}),
\end{aligned}
$$

![Attachments/Script 17.webp|700](/img/user/Attachments/Script%2017.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=46&rect=104,607,476,746| ]]
The figure shows the electron-hole excitation spectrum for direct and indirect gap semiconductors, excitation energy $E$ versus momentum transfer $\mathbf{q}$. Excitations exist in the shaded region, where $I(\mathbf{q}, E) \neq 0$.
where the field operators are defined by
$$
\begin{aligned}
\widehat{\Psi}_{s}(\mathbf{r})=\frac{1}{\sqrt{\Omega}} \sum_{n=V, C} \sum_{\mathbf{k}} u_{n, \mathbf{k}}(\mathbf{r}) e^{i \mathbf{k} \cdot \mathbf{r}} \hat{c}_{n, \mathbf{k} s},
\end{aligned}
$$
where $u_{n, \mathbf{k}}(\mathbf{r})$ are the Bloch functions of the band $n=C, V$. Now, we consider a general particle-hole state,
$$
\begin{aligned}
\left|\Phi_{\mathbf{q}}\right\rangle=\sum_{\mathbf{k}^{\prime}} A\left(\mathbf{k}^{\prime}\right) \hat{c}_{C, \mathbf{k}^{\prime}+\frac{\mathbf{q}}{2}, s^{\prime}}^{\dagger} \hat{c}_{V, \mathbf{k}^{\prime}-\frac{\mathbf{q}}{2}, s^{\prime}}\left|\Phi_{0}\right\rangle=\sum_{\mathbf{k}^{\prime}} A\left(\mathbf{k}^{\prime}\right)\left|\mathbf{k}^{\prime}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}^{\prime}-\frac{\mathbf{q}}{2}, s^{\prime}\right\rangle,
\end{aligned}
$$
and demand that it satisfies the stationary Schrödinger equation $(\mathcal{H}+\widehat{V})\left|\Phi_{\mathbf{q}}\right\rangle=\left(E_{0}+E_{\mathbf{q}}\right)\left|\Phi_{\mathbf{q}}\right\rangle$. Note that compared to before, we introduce the momentum transfer $\hbar \mathbf{q}$ in a "symmetrised" way. This two-body problem can be expressed as
$$
\begin{aligned}
\sum_{\mathbf{k}^{\prime}}\left\langle\mathbf{k}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}-\frac{\mathbf{q}}{2}, s^{\prime}\right| \mathcal{H}+\widehat{V}\left|\mathbf{k}^{\prime}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}^{\prime}-\frac{\mathbf{q}}{2}, s^{\prime}\right\rangle A\left(\mathbf{k}^{\prime}\right)=\left(E_{0}+E_{\mathbf{q}}\right) A(\mathbf{k}) .
\end{aligned}
$$

The matrix elements are given by
$$
\begin{aligned}
\left\langle\mathbf{k}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}-\frac{\mathbf{q}}{2}, s^{\prime}\right| \mathcal{H}\left|\mathbf{k}^{\prime}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}^{\prime}-\frac{\mathbf{q}}{2}, s^{\prime}\right\rangle=\delta_{\mathbf{k}, \mathbf{k}^{\prime}}\left\{E_{0}+\epsilon_{C, \mathbf{k}+\frac{\mathbf{q}}{2}}-\epsilon_{V, \mathbf{k}-\frac{\mathbf{q}}{2}}\right\}
\end{aligned}
$$
and
$$
\begin{aligned}
\left\langle\mathbf{k}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}-\frac{\mathbf{q}}{2}, s^{\prime}|\widehat{V}| \mathbf{k}^{\prime}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}^{\prime}-\frac{\mathbf{q}}{2}, s^{\prime}\right\rangle &= \\
& \frac{2 \delta_{s s^{\prime}}}{\Omega^{2}} \int d^{3}\mathbf{r} d^{3}\mathbf{r}^{\prime} u_{C, \mathbf{k}+\frac{\mathbf{q}}{2}}^{*}(\mathbf{r}) u_{V, \mathbf{k}-\frac{\mathbf{q}}{2}}(\mathbf{r}) u_{C, \mathbf{k}^{\prime}+\frac{\mathbf{q}}{2}}\left(\mathbf{r}^{\prime}\right) u_{V, \mathbf{k}^{\prime}-\frac{\mathbf{q}}{2}}^{*}\left(\mathbf{r}^{\prime}\right) e^{-i \mathbf{q} \cdot\left(\mathbf{r}-\mathbf{r}^{\prime}\right)} \frac{e^{2}}{\left|\mathbf{r}-\mathbf{r}^{\prime}\right|} \\
- & \frac{1}{\Omega^{2}} \int d^{3}\mathbf{r} d^{3}\mathbf{r}^{\prime} u_{C, \mathbf{k}+\frac{\mathbf{q}}{2}}^{*}(\mathbf{r}) u_{V, \mathbf{k}-\frac{\mathbf{q}}{2}}\left(\mathbf{r}^{\prime}\right) u_{C, \mathbf{k}^{\prime}+\frac{\mathbf{q}}{2}}(\mathbf{r}) u_{V, \mathbf{k}^{\prime}-\frac{\mathbf{q}}{2}}^{*}\left(\mathbf{r}^{\prime}\right) e^{i\left(\mathbf{k}^{\prime}-\mathbf{k}\right) \cdot\left(\mathbf{r}-\mathbf{r}^{\prime}\right)} \frac{e^{2}}{\left|\mathbf{r}-\mathbf{r}^{\prime}\right|},
\end{aligned}
$$

The first term is the exchange term, and the second term the direct term of the Coulomb interaction. Now we consider a semiconductor with a direct energy gap at the $\Gamma$-point and also focus on small momentum transfers $\hbar \mathbf{q}$. Thus, the most important wave vectors are those around $\mathbf{k}=0$. We approximate
$$
\begin{aligned}
u_{n, \mathbf{k}^{\prime}}^{*}(\mathbf{r}) u_{n, \mathbf{k}}(\mathbf{r}) \approx \frac{1}{\Omega} \int d^{3}\mathbf{r} u_{n, \mathbf{k}^{\prime}}^{*}(\mathbf{r}) u_{n, \mathbf{k}}(\mathbf{r})=\frac{1}{\Omega}\left\langle u_{n, \mathbf{k}^{\prime}} \mid u_{n, \mathbf{k}}\right\rangle \approx 1,
\end{aligned}
$$
which is reasonable for $\mathbf{k} \approx \mathbf{k}^{\prime}$. In the same manner, we see that
$$
\begin{aligned}
u_{C, \mathbf{k}+\frac{\mathbf{q}}{2}}^{*}(\mathbf{r}) u_{V, \mathbf{k}-\frac{\mathbf{q}}{2}}(\mathbf{r}) \approx \frac{1}{\Omega}\left\langle u_{C, \mathbf{k}+\frac{\mathbf{q}}{2}} \mid u_{V, \mathbf{k}-\frac{\mathbf{q}}{2}}\right\rangle \approx \frac{1}{\Omega}\left\langle u_{C, \mathbf{k}} \mid u_{V, \mathbf{k}}\right\rangle=0 .
\end{aligned}
$$

Note that the semiconductor is a dielectric medium with a dielectric constant $\varepsilon (\mathbf{D}=\varepsilon \mathbf{E})$. Classical electrodynamics states that
$$
\begin{aligned}
\mathbf{\nabla} \cdot \mathbf{E}=\frac{4 \pi \rho}{\varepsilon}
\end{aligned}
$$
that is, the Coulomb potential is partially screened due to dielectric polarisation. Including this effect in the Schrödinger equation phenomenologically, the matrix element for $\widehat{V}$ takes on the form
$$
\begin{aligned}
\left\langle\mathbf{k}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}-\frac{\mathbf{q}}{2}, s^{\prime}\right| \widehat{V}\left|\mathbf{k}^{\prime}+\frac{\mathbf{q}}{2}, s ; \mathbf{k}^{\prime}-\frac{\mathbf{q}}{2}, s^{\prime}\right\rangle=-\frac{4 \pi e^{2}}{\Omega \varepsilon\left|\mathbf{k}-\mathbf{k}^{\prime}\right|^{2}} .
\end{aligned}
$$

Thus, we can write the stationary Schrödinger equation derived earlier as
$$
\begin{aligned}
\left(\epsilon_{C, \mathbf{k}+\frac{\mathbf{q}}{2}}-\epsilon_{V, \mathbf{k}-\frac{\mathbf{q}}{2}}-E\right) A(\mathbf{k})-\frac{1}{\Omega} \sum_{\mathbf{k}^{\prime}} \frac{4 \pi e^{2}}{\varepsilon\left|\mathbf{k}-\mathbf{k}^{\prime}\right|^{2}} A\left(\mathbf{k}^{\prime}\right)=0 .
\end{aligned}
$$

We include the band structure using the $\mathbf{k} \cdot \mathbf{p}$ - approximation which, for a direct energy gap, leads to
$$
\begin{aligned}
\epsilon_{C, \mathbf{k}}=\frac{\hbar^{2} |\mathbf{k}|^{2}}{2 m_{C}}+E_{g} \quad \text{ and } \quad \epsilon_{V, \mathbf{k}}=-\frac{\hbar^{2} |\mathbf{k}|^{2}}{2 m_{V}}.
\end{aligned}
$$

For simplicity we assume now that $m_{V}=m_{C}=m^{*}$. We define a so-called envelope function $F(\mathbf{r})$ by
$$
\begin{aligned}
F(\mathbf{r})=\frac{1}{\sqrt{\Omega}} \sum_{\mathbf{k}} A(\mathbf{k}) e^{i \mathbf{k} \cdot \mathbf{r}}
\end{aligned}
$$

This function satisfies the differential equation
$$
\begin{aligned}
\left[-\frac{\hbar^{2} \mathbf{\nabla}^{2}}{2 \mu_{\mathrm{ex}}}-\frac{e^{2}}{\varepsilon|\mathbf{r}|}\right] F(\mathbf{r})=\left\{E-E_{g}-\frac{\hbar^{2} |\mathbf{q}|^{2}}{2 M_{\mathrm{ex}}}\right\} F(\mathbf{r}),
\end{aligned}
$$
where $\mu_{\mathrm{ex}}$ is the reduced mass, that is, $\mu_{\mathrm{ex}}^{-1}=2 / m^{*}$ and total mass $M_{\mathrm{ex}}=2 m^{*}$.
The stationary equation is equivalent to the Schrödinger equation of a hydrogen atom. The energy levels then are given by
$$
\begin{aligned}
E_{\mathbf{q}}=E_{g}-\frac{\mu_{\mathrm{ex}} e^{4}}{2 \varepsilon^{2} \hbar^{2} n^{2}}+\frac{\hbar^{2} |\mathbf{q}|^{2}}{2 M_{\mathrm{ex}}},
\end{aligned}
$$
which implies that there are excitations below the particle-hole continuum, corresponding to particle-hole bound states. This excitation spectrum is discrete and there is a well-defined relation between energy and momentum $\mathbf{q}$, which is the wave vector corresponding to the centre of mass of the particle-hole pair. This non-trivial quasi-particle is called exciton. In the present approximation it takes on the form of a simple two-particle state. In fact, however, it may be viewed as a collective excitation, as the dielectric constant includes the polarisation by all electrons. When the screening is neglected, the excitonic states would not make sense as their energies would not be within the band gap but much below. For the case of weak binding considered above, the excitation is called a Wannier exciton. The typical binding energy is
$$
\begin{aligned}
E_{b} \sim \frac{\mu_{\mathrm{ex}}}{m \varepsilon^{2}} R_y
\end{aligned}
$$

Typical values of the constants on the right-hand side are $\varepsilon \sim 10$ and $\mu_{\mathrm{ex}} \sim m / 10$, so that the binding energy is in the meV range. This energy is much smaller than the energy gap, such that the excitons are inside the gap:

![Attachments/Script 18.webp|700](/img/user/Attachments/Script%2018.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=48&rect=164,612,429,750| ]]

The exciton levels are dispersive and their spectrum becomes increasingly dense with increasing energy, similar to the hydrogen atom. When they merge with the particle-hole continuum the bound state is 'ionised', that is, the electron and the hole dissociate and behave like independent particles.
Strongly bound excitons are called Frenkel excitons. In the limit of strong binding, the pair is almost local, so that the excitation is restricted to a single atom rather than involving the whole semiconductor band structure.
Excitons are mobile, but they carry no charge, as they consist of an electron and a hole with opposite charges. Their spin quantum number depends on $s$ and $s^{\prime}$. If $s=s^{\prime}$ the exciton is a spin singlet, while for $s \neq s^{\prime}$ it has spin triplet character, both corresponding to integer spin quasi-particles. For small densities they approximately obey Bose-Einstein statistics, as they are made from two Fermions. In special cases, Bose-Einstein condensation of excitons can be observed experimentally.

### 2.2.3 Optical Properties

Excitation in semiconductors can occur via the absorption of electromagnetic radiation. The energy and momentum transferred by a photon is $\hbar \omega$ and $\hbar \mathbf{q}$, respectively. With the linear light dispersion relation $\omega=c|\mathbf{q}|$ and the approximation $E_{g} \sim 1\,\mathrm{eV} \sim e^{2} / a$, we can estimate this momentum transfer in a semiconductor
$$
\begin{aligned}
q=\frac{\omega}{c}=\frac{\hbar \omega}{h c} 2 \pi \sim \frac{e^{2}}{h c} \frac{2 \pi}{a}=\alpha \frac{2 \pi}{a} \ll \frac{2 \pi}{a},
\end{aligned}
$$
where $c$ denotes the speed of light, $a$ the lattice constant, and $\alpha \approx 1 / 137$ the fine structure constant. With this, the momentum transfer from a photon to the excited electron can be ignored. In other words, pure electromagnetic excitations lead only to 'direct' excitations. For semiconductors with a direct energy gap (for example, GaAs) the photo-induced electron-hole excitation is most easy and yields absorption rates with the characteristics
$$
\begin{aligned}
\Gamma_{\mathrm{abs}}(\omega) \sim \begin{cases}\left(\hbar \omega-E_{g}\right)^{1 / 2}, & \text{ dipole-allowed, } \\ \left(\hbar \omega-E_{g}\right)^{3 / 2}, & \text{ dipole-forbidden }\end{cases}
\end{aligned}
$$

Here, the terms "dipole-allowed" and "dipole-forbidden" have a similar meaning as in the excitation of atoms regarding whether matrix elements of the type $\left\langle u_{V, \mathbf{k}}\right| \mathbf{r}\left|u_{C, \mathbf{k}}\right\rangle$ are finite or vanish, respectively. Obviously, dipole-allowed transitions occur at a higher rate for photon energies immediately above the energy gap $E_{g}$, than for dipole-forbidden transitions.

For semiconductors with indirect energy gap (for example, Si and Ge), the lowest energy transition connecting the top of the valence band to the bottom of the conduction band is not allowed without the help of phonons (lattice vibrations), which contribute little energy but much momentum transfer, as $\hbar \omega_{\mathbf{Q}} \ll \hbar \omega$ with $\omega_{\mathbf{Q}}=c_{s}|\mathbf{Q}|$ and the sound velocity $c_{s} \ll c$. The requirement of a phonon assisting in the transition reduces the transition rate to
$$
\begin{aligned}
\Gamma_{\mathrm{abs}}(\omega) \sim c_{+}\left(\hbar \omega+\hbar \omega_{\mathbf{Q}}-E_{g}\right)^{2}+c_{-}\left(\hbar \omega-\hbar \omega_{\mathbf{Q}}-E_{g}\right)^{2}
\end{aligned}
$$
where $c_{\pm}$are constants and $\mathbf{Q}$ corresponds to the wave vector of the phonon connecting the top of the valence band and the bottom of the conduction band. There are two relevant processes: either the phonon is absorbed ($c_{+}$-process) or it is emitted ($c_{-}$-process). The next figure shows the phonon-assisted photon absorption in a semiconductor with indirect gap: phonon absorption (left panel) and phonon emission (right panel).

![Attachments/Script 19.webp|700](/img/user/Attachments/Script%2019.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=49&rect=161,445,435,605| ]]

In addition to the absorption into the particle-hole spectrum, absorption processes inducing exciton states exist. They lead to discrete absorption peaks below the absorption continuum. This is the situation in a direct-gap semiconductor:

![Attachments/Script 20.webp|700](/img/user/Attachments/Script%2020.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=49&rect=183,162,411,342| ]]

Naturally, the recombination of electrons and holes is important as well; in particular, if it is a radiative recombination, that is, leads to the emission of a photon. Additionally, other recombination channels such as recombination at impurities, interfaces and through Auger processes are possible. The radiative recombination for the direct-gap semiconductors is most relevant for applications. The photon emission rate follows the approximate law
$$
\begin{aligned}
\Gamma_{\mathrm{em}}(\omega) \sim\left[N_{\gamma}(\omega)+1\right]\left(\hbar \omega-E_{g}\right)^{1 / 2} e^{-\hbar \omega / k_{B} T},
\end{aligned}
$$
with the photon density $N_{\gamma}(\omega)$. This yields the dominant rate for $\hbar \omega$ very close to $E_{g}$.

---
## 2.3 Doping Semiconductors
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=50&selection=57,0,59,21| ]]

Let us replace a Si atom in a Si semiconductor by aluminium (Al) from group III or phosphorus (P) from group V, which then act as impurities in the crystal lattice. Both Al and P are in the same row of the periodic table. Aluminium has one valence electron less than Si, while phosphorus has one more. Their electron configurations are given by
$$
\begin{aligned}
\mathrm{Al}&: {\left[(1s)^{2}(2s)^{2}(2p)^{6}\right] \underline{(3s)^{2}(3p)},} \\
\mathrm{P}&: {\left[(1s)^{2}(2s)^{2}(2p)^{6}\right](3s)^{2}(3p)^{3}.}
\end{aligned}
$$

### 2.3.1 Impurity State

We consider the case of a P-impurity contributing an additional electron whose dynamics is governed by the conduction band of the semiconductor. For simplicity, we describe the conduction band by a single isotropic band with effective mass $m_{C}$,
$$
\begin{aligned}
\epsilon_{\mathbf{k}}=\frac{\hbar^{2} |\mathbf{k}|^{2}}{2 m_{C}}+E_{g}.
\end{aligned}
$$

In the neutral Si background, the phosphorus (P) ion represents a positively charged centre, which attracts its additional electron. In the simplest model, this situation is described by the so-called Wannier equation
$$
\begin{aligned}
\left\{-\frac{\hbar^{2} \mathbf{\nabla}^{2}}{2 m_{C}}-\frac{e^{2}}{\varepsilon|\mathbf{r}|}\right\} F(\mathbf{r})=E F(\mathbf{r}),
\end{aligned}
$$
which is nothing else than the static Schrödinger equation for the hydrogen atom, where the dielectric constant $\varepsilon$ measures the screening of the ionic potential by the surrounding electrons. Analogous to the discussion of the exciton states, $F(\mathbf{r})$ is an envelope wave function of the electron. Therefore, the low energy states of the additional electron are bound states around the P ion. The electron may become mobile when this "reduced hydrogen atom" is ionised. The binding energy relative to the minimum of the conduction band given by
$$
\begin{aligned}
E_{n}-E_{g}=-\frac{m_{C} e^{4}}{2 \hbar^{2} \varepsilon^{2} n^{2}}=-\frac{m_{C}}{m \varepsilon^{2} n^{2}} R_y
\end{aligned}
$$
for $n \in \mathbb{N}$ and the effective radius (corresponding to the renormalised Bohr radius in the material) of the lowest bound state reads
$$
\begin{aligned}
r_{1}=\frac{\hbar^{2} \varepsilon}{m_{C} e^{2}}=\frac{\varepsilon m}{m_{C}} a_{B},
\end{aligned}
$$
where $a_{B}=0.53\,\mathrm{Å}$ is the Bohr radius for the hydrogen atom. For Si we find $m_{C} \approx 0.2 m$ and $\varepsilon \approx 12$, such that
$$
\begin{aligned}
E_{1} \approx-20\,\mathrm{meV}
\end{aligned}
$$
$$
\begin{aligned}
r_{1} \approx 30\,\mathrm{Å}.
\end{aligned}
$$

Thus, the resulting states are weakly bound, with energies inside the band gap. We conclude that the net effect of the P-impurities is to introduce additional electrons into the crystal, whose energies lie just below the conduction band ($E_{g} \sim 1\,\mathrm{eV}$ while $E_{g}-E_{1} \sim 10\,\mathrm{meV}$). Therefore, they can easily be transferred to the conduction band by thermal excitation (ionisation). One speaks of an n-doped semiconductor (n: negative charge). In full analogy one can consider Al-impurities, thereby replacing electrons with holes: An Al-atom introduces an additional hole into the lattice which is weakly bound to the Al-ion (its energy is slightly above the band edge of the valence band) and may dissociate from the impurity by thermal excitation. This case is called p-doping (p: positive charge). In both cases, the chemical potential is tied to the dopant levels, that is, it lies between the dopant level and the valence band for p-doping and between the dopant level and the conduction band in case of n-doping:

![Attachments/Script 21.webp|700](/img/user/Attachments/Script%2021.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=51&rect=102,414,491,547| ]]

The electric conductivity of semiconductors (in particular at room temperature) can be tuned strongly by doping with so-called donors (n-doping) and acceptors (p-doping). Practically all dopant atoms are ionised, with the electrons/holes becoming mobile. Combining differently doped semiconductors, the possibility to engineer electronic properties is enhanced even more. This is the basic reason for the semiconductors being ubiquitous in modern electronics.

### 2.3.2 Carrier Concentration

Let us briefly compare the carrier concentration in doped and undoped semiconductors at room temperature. Carriers are always created in form of electron-hole pairs, following the "reaction formula"
$$
\begin{aligned}
e+h \leftrightarrow \gamma,
\end{aligned}
$$
where $\gamma$ denotes a photon which is absorbed ($e-h$-creation) or emitted ($e-h$-recombination) and accounts for the energy balance. The carrier concentration is described by a mass action law of the form,
$$
\begin{aligned}
n_{e} n_{h}=n_{0}^{2}\left(\frac{T}{T_{0}}\right)^{3} e^{-E_{g} / k_{B} T}=n^{2}(T),
\end{aligned}
$$
where $T_{0}, n_{0}$ and $E_{g}$ are parameters specific to the semiconductor. In the case of undoped silicon at $T=300\,\mathrm{K}, n_{e} n_{h} \approx 10^{20}\,(\mathrm{cm}^{-3})^{2}$. Thus, for the undoped semiconductor we find $n_{e}=n_{h} \approx 10^{10}\,\mathrm{cm}^{-3}$. On the other hand, for n-doped Si with a typical donor concentration of $n_{D} \approx 10^{17}\,\mathrm{cm}^{-3}$ we can assume that most of the donors are ionised at room temperature such that
$$
\begin{aligned}
n_{e} \approx n_{D} \approx 10^{17}\,\mathrm{cm}^{-3}
\end{aligned}
$$
and
$$
\begin{aligned}
n_{h}=\frac{n^{2}(T)}{n_{e}} \approx 10^{3}\,\mathrm{cm}^{-3}.
\end{aligned}
$$

We conclude, that in n-doped semiconductors the vast majority of mobile carriers are electrons, while the hole carriers are negligible. The opposite is true for p-doped Si.

---
## 2.4 Semiconductor Devices
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=52&selection=61,0,63,21| ]]

Semiconductors are among the most important components of current high-technology. In this section, we consider a few basic examples of semiconductor devices.

---
### 2.4.1 pn-Contacts
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=52&selection=185,207,416,361| ]]
The so-called pn-junctions (made by bringing a p-doped and an n-doped version of the same semiconductor into contact) are used as rectifiers. When contacting the two types of doped semiconductors the chemical potential, which is pinned by the dopant (impurity) levels, determines the behaviour of the electrons at the interface. In electrostatic equilibrium, the chemical potential is constant across the interface. This is accompanied by a "band bending" leading to the ionisation of the impurity levels in the interface region, as depicted conceptually. Consequently, these ions produce an electric dipole layer which induces an electrostatic potential shift across the interface. Additionally, the carrier concentration is strongly reduced in the interface region (depletion layer).

![Attachments/Script 22.webp|700](/img/user/Attachments/Script%2022.webp)

In the absence of a voltage $U$ over the junction, the net current flow vanishes because the dipole is in electrostatic equilibrium. This can also be interpreted as the equilibrium of two oppositely directed currents, called the drift current $J_{\mathrm{drift}}$ and the diffusion current $J_{\mathrm{diff}}$. From the point of view of the electrons, the dipole field exerts a force pulling the electrons from the p-side to the n-side. This leads to the drift current $J_{\mathrm{drift}}$. On the other hand, the electron concentration gradient leads to the diffusion current $J_{\mathrm{diff}}$ from the n-side to the p-side. The diffusion current is directed against the potential gradient, so that the diffusing electrons have to overcome a potential step. The equilibrium condition for $U=0$ is given by
$$
\begin{aligned}
0=J_{\mathrm{tot}}(U=0)=J_{\mathrm{diff}}+J_{\mathrm{drift}} \sim C_{1}(T) e^{-E_{g} / k_{B} T}-C_{2}(T) e^{-E_{g} / k_{B} T}=0,
\end{aligned}
$$
where $C_{1}=C_{2}=C$. Both currents are essentially determined by the factor $C(T) e^{-E_{g} / k_{B} T}$. For the drift current, the exponential behaviour $e^{-E_{g} / k_{B} T}$ stems from the dependence of the current on the concentration of mobile charge carriers (electrons and holes on the p-side and n-side, respectively), which are created by thermal excitation (Boltzmann factor). Applying a voltage does not change this contribution significantly. For the diffusion current however, the factor $C(T) e^{-E_{g} / k_{B} T}$ describes the thermal activation over the dipole barrier, which in turn strongly depends on the applied voltage $U$. For zero voltage, the height of the barrier $E_{b}$ is essentially given by the energy gap $E_{b} \approx E_{g}$. With an applied voltage, this is modified according to $E_{b} \approx E_{g}-e U$, where $e U=\mu_{n}-\mu_{p}$ is the difference of the chemical potentials between the n-side and the p-side. From these considerations, the well-known current-voltage characteristic of the pn-junctions follows directly as
$$
\begin{aligned}
J_{\mathrm{tot}}(U)=C(T) e^{-E_{g} / k_{B} T}\left(e^{e U / k_{B} T}-1\right) .
\end{aligned}
$$

For $U>0$, the current is rapidly enhanced with increasing voltage. This is called forward bias. By contrast, charge transport is suppressed for $U<0$ (reverse bias), leading to small currents only. The current-voltage characteristic $J(U)$ shows a clearly asymmetric behaviour, which can be used to rectify ac-currents. Rectifiers (or diodes) are an important component of many integrated circuits.

![Attachments/Script 23.webp|700](/img/user/Attachments/Script%2023.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=53&rect=70,338,524,424| ]]

### 2.4.2 Semiconductor Diodes

#### 2.4.2.1 Light Emitting Diode

As mentioned above, the recombination of electrons and holes can lead to the emission of photons (radiative recombination) with a rather well-defined frequency essentially corresponding to the energy gap $E_{g}$. An excess of electron-hole pairs can be produced in pn-diodes by running a current in forward direction. Using different semiconductors with different energy gaps allows to tune the colour of the emitted light. Direct-gap semiconductors are most suitable for this kind of devices. Well-known are the semiconductors of the GaAs-GaN series. These techniques are commonly used in LED (Light Emitting Diode) lamps.

There appear efficiency problems concerning the emission of light by semiconductors. In particular, the difference in refractive indices inside $n_{\mathrm{sc}} \approx 3$ and outside $n_{\mathrm{air}} \approx 1$ the device leads to large reflective losses. Thus, the efficacy of diode light sources, defined as the number of photons emitted per created particle-hole pair, is small, but still larger than the efficiency of conventional dissipative light bulbs.

#### 2.4.2.2 Solar Cell

Inversely to the previous consideration, the population of charge carriers can be changed by the absorption of light. Suppose that the n-side of a diode is exposed to irradiation by light, which leads to an excess of hole carriers (minority charge carriers). Some of these holes will diffuse towards the pn-interface and will be drawn to the p-side by the dipole field. In this way, they induce an additional current $J_{L}$ modifying the current-voltage characteristics to
$$
\begin{aligned}
J_{\mathrm{tot}}=J_{pn}-J_{L}=J_{s}\left(e^{e U / k_{B} T}-1\right)-J_{L} .
\end{aligned}
$$

It is important for the successful migration of the holes to the interface dipole that they do not recombine too quickly. When $J_{\mathrm{tot}}=0$, the voltage drop across the diode is
$$
\begin{aligned}
U_{L}=\frac{k_{B} T}{e} \ln \left(\frac{J_{L}}{J_{s}}+1\right) .
\end{aligned}
$$

The maximum efficiency is reached by applying an external voltage $U_{c}<U_{L}$ such that the product $J_{c} U_{c}$ is maximised, where $J_{c}=J_{\mathrm{tot}}\left(U=U_{c}\right)$:

![Attachments/Script 24.webp|700](/img/user/Attachments/Script%2024.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=54&rect=80,327,517,463| ]]

#### 2.4.2.3 MOSFET

The arguably most important application of semiconductors is the transistor, an element existing with different architectures. Here we briefly introduce the MOSFET (Metal-Oxide-Semiconductor-Field-Effect-Transistor). A transistor is a switch allowing to control the current through the device by switching a small control voltage. In the MOSFET, this is achieved by changing the charge carrier concentration in a p-doped semiconductor using a metallic gate. The basic design of a MOSFET is as follows: A thin layer of $\mathrm{SiO}_{2}$ is deposited on the surface of a p-type semiconductor. $\mathrm{SiO}_{2}$ is a good insulator that is compatible with the lattice structure of Si. Next, a metallic layer, used as a gate electrode, is deposited on top of the insulating layer.

![Attachments/Script 25.webp|700](/img/user/Attachments/Script%2025.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=55&rect=164,675,431,759| ]]

The voltage between the Si semiconductor and the metal electrode is called gate voltage $U_{G}$. The insulating $\mathrm{SiO}_{2}$ layer ensures that no currents flow between the electrode and the semiconductor when a gate voltage is applied. The switchable currents in the MOSFET flow between the source and the drain which are heavily n-doped semiconductor regions. Depending on the applied gate voltage $U_{G}$ three different regimes can be realised:

-   $U_{G}=0$
    Essentially no current flows, as the conduction band of the p-doped semiconductor is empty. The doping states (acceptor levels) are occupied by thermal excitations.
-   $0<\frac{e U_{G}}{E_{g}}<1$
    In this case, the energy of the Si bands is lowered, such that in a narrow region within the p-doped Si the acceptor levels drops below the chemical potential and the states are filled with electrons (or, equivalently, holes are removed). This depletion layer has the extension $d$ measured from the $\mathrm{Si}-\mathrm{SiO}_{2}$ interface. The negative charge of the acceptors leads to a position-dependent potential $\Phi(z)$, where $z$ is the distance from the boundary between $\mathrm{SiO}_{2}$ and Si. This potential $\Phi(z)$ satisfies the simple one-dimensional Poisson equation
    $$
    \begin{aligned}
    \frac{d^{2}}{d z^{2}} \Phi(z)=\frac{4 \pi \rho(z)}{\varepsilon}
    \end{aligned}
    $$
    where the charge density originates in the occupied acceptor levels,
    $$
    \begin{aligned}
    \rho(z)=\left\{\begin{aligned} -e n_{A}, & z<d, \\ 0, & z>d, \end{aligned}\right.
    \end{aligned}
    $$
    and $n_{A}$ is the density of acceptors. The boundary conditions are given by
    $$
    \begin{aligned}
    \Phi(z=0)=U_{G} \quad \text{ and } \quad \Phi(z=d)=0 .
    \end{aligned}
    $$
    The solution for $0 \leq z \leq d$ then reads
    $$
    \begin{aligned}
    \Phi(z)=\frac{2 \pi e n_{A}}{\varepsilon}(z-d)^{2}, \quad \text{ with } \quad d^{2}=\frac{\varepsilon U_{G}}{2 \pi e n_{A}} .
    \end{aligned}
    $$
    The thickness of the depletion layer increases with increasing gate voltage $d^{2} \sim U_{G}$.
-   $1<\frac{e U_{G}}{E_{g}}$
    When the applied gate voltage is sufficiently large, a so-called inversion layer is created:

    ![Attachments/Script 26.webp|700](/img/user/Attachments/Script%2026.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=55&rect=81,480,515,642| ]]

    Close to the boundary, the conduction band is bent down so that its lower edge lies below the chemical potential. The electrons accumulating in this inversion layer providing carriers connecting the n-type source and drain electrodes and producing a large, nearly metallic, current between source and drain. Conduction band electrons accumulating in the inversion layer behave like a two-dimensional electron gas. In such a system, the quantum Hall effect (QHE), which is characterised by highly unusual charge transport properties in the presence of a large magnetic field, can occur.

---