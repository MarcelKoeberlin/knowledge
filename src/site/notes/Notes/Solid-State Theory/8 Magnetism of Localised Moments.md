---
{"dg-publish":true,"permalink":"/notes/solid-state-theory/8-magnetism-of-localised-moments/","hide":"true","updated":"2025-05-31T16:07:15.464+02:00"}
---

Jump back to ==[[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#8.1 Mott Transition|8.1 Mott Transition]]
[[#8.2 The Mott Insulator as a Quantum Spin System|8.2 The Mott Insulator as a Quantum Spin System]]
[[#8.3 Collective Modes - Spin Wave Excitations|8.3 Collective Modes - Spin Wave Excitations]]

---
# 8 Magnetism of Localised Moments
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=172&selection=2,0,2,30| ]]

Up to now, we have mostly assumed that the interaction between electrons leads to secondary effects. This was, essentially, the message of the Fermi liquid theory, the standard model of condensed matter physics. There, the interactions of course renormalise the properties of a metal, but their description is still possible by using a language of nearly independent fermionic quasiparticles with a few modifications. Even in connection with the magnetism of itinerant electrons, where interactions proved to be crucial, the description was in terms of extended Bloch states. Many properties were determined by the band structure of the electrons in the lattice; the electrons were preferably described in $k$-space.

However, in this chapter, we will consider situations where it is less clear whether we should describe the electrons in momentum or in real space. The problem becomes obvious with the following Gedanken experiment: We look at a regular lattice of H-atoms. The lattice constant should be large enough such that the atoms can be considered to be independent for now. In the ground state, each H-atom contains exactly one electron in the $1s$-state, which is the only atomic orbital we consider at the moment. The transfer of one electron to another atom would cost the relatively high energy of $E\left(H^{+}\right)+E\left(H^{-}\right)-2 E(H) \sim 15 \mathrm{eV}$, since it corresponds to an ionisation. Therefore, the electrons remain localised on the individual H-atoms and the description of the electron states is obviously best done in real space. The reduction of the lattice constant will gradually increase the overlap of the electron wave functions of neighbouring atoms. In analogy to the $\mathrm{H}_{2}$ molecule, the electrons can now extend over neighbouring atoms, but the cost in energy remains that of an "ionisation". Thus, transfer processes are only possible virtually; there are not yet itinerant electrons in the sense of a metal.

![Attachments/Script 76.webp|700](/img/user/Attachments/Script%2076.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=170&rect=188,391,406,546| ]]

On the other hand, we know the example of the alkali metals, which release their outermost ns-electron into an extended Bloch state and build a metallic (half-filled) band. This would actually work well for H-atoms for a sufficiently small lattice constant too. In nature, this can only be induced by enormous pressures – metallic hydrogen probably exists in the centres of the large gas planets Jupiter and Saturn due to the gravitational pressure. Obviously, a transition between the two limiting behaviours should exist. This metal-insulator transition occurs if the gain in kinetic energy surpasses the energy cost for charge transfer. The insulating side is known as a Mott insulator.
While the obviously metallic state is reliably described by the band picture and can be sufficiently well approximated by the previously discussed methods, this viewpoint becomes obsolete when approaching the metal-insulator transition. According to band theory, a half-filled band must produce a metal, which is definitely incorrect when entering the insulating side of the transition. Unfortunately, no well-controlled approximation for the description of this metal-insulator transition exists, since there are no small parameters for a perturbation theory.
Another important aspect is the fact that, in a standard Mott insulator, each atom features an electron in the outermost occupied orbital and, hence, a degree of freedom in the form of a localised spin $s=1/2$, in the simplest case. While charge degrees of freedom (motion of electrons) are frozen at low temperatures, the same does not apply to these spin degrees of freedom. Many interesting magnetic phenomena are produced by the coupling of these spins. Other, more general forms of Mott insulators exist as well, which include more complex forms of localised degrees of freedom, for instance, partially occupied degenerate orbital states.

---
## 8.1 Mott Transition
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=173&selection=33,0,35,15| ]]

First, we investigate the metal-insulator transition. Its description is difficult, since it does not constitute a transition between an ordered and a disordered state in the usual sense. We will, however, use some simple considerations which will allow us to gain some insight into the behaviour of such systems.

---
### 8.1.1 Hubbard Model

We introduce a model, which is based on the tight-binding approximation we have introduced in [[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal\|chapter 1]]. It is inevitable to go back to a description based on a lattice and give up a continuum description. The model describes the motion of electrons, if their wave functions on neighbouring lattice sites only weakly overlap. Furthermore, the Coulomb repulsion, leading to an increase in energy if a site is doubly occupied, is taken into account. We include this with the lattice analogue of the contact interaction. The model, called the Hubbard model, has the form
$$
\begin{align*}
\mathcal{H}=-t \sum_{\langle i, j\rangle, s}\left(\hat{c}_{i s}^{\dagger} \widehat{c}_{j s}+\text { h.c. }\right)+U \sum_{i} \widehat{n}_{i \uparrow} \widehat{n}_{i \downarrow},
\end{align*}
$$
where we consider hopping between nearest neighbours only, via the matrix element $-t$. Note that $\widehat{c}_{i s}^{(\dagger)}$ are real-space field operators on the lattice (site index $i$) and $\widehat{n}_{i s}=\widehat{c}_{i s}^{\dagger} \widehat{c}_{i s}$ is the density operator. We focus on half filling, $n=1$, one electron per site on average. There are two obvious limiting cases:

**Insulating atomic limit**: We put $t=0$. The ground state has exactly one electron on each lattice site. This state is, however, highly degenerate. In fact, the degeneracy is $2^{N}$ (number of sites $N$), since each electron has spin $1/2$, thus,
$$
\begin{align*}
\left|\Phi_{A 0}\left\{s_{i}\right\}\right\rangle=\prod_{i} \widehat{c}_{i, s_{i}}^{\dagger}|0\rangle,
\end{align*}
$$

where the spin configuration $\left\{s_{i}\right\}$ can be chosen arbitrarily. We will deal with the lifting of this degeneracy later. The first excited states feature one lattice site without an electron and one doubly occupied site. This state has energy $U$ and its degeneracy is even higher, namely $2^{N-2}N(N-1)$. Even higher excited states correspond to more empty and doubly occupied sites. The system is an insulator and the density of states is shown here:

![Attachments/Script 77.webp|700](/img/user/Attachments/Script%2077.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=174&rect=166,200,438,396| ]]

**Metallic band limit**: We set $U=0$. The electrons are independent and move freely via hopping processes. The band energy is found through a Fourier transform of the Hamiltonian. With
$$
\begin{align*}
\widehat{c}_{i s}=\frac{1}{\sqrt{N}} \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s} e^{i \boldsymbol{k} \cdot \boldsymbol{r}_{i}}
\end{align*}
$$
we can rewrite
$$
\begin{align*}
-t \sum_{\langle i, j\rangle, s}\left(\widehat{c}_{i s}^{\dagger} \widehat{c}_{j s}+\text { h.c. }\right)=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s},
\end{align*}
$$
where
$$
\begin{align*}
\epsilon_{\boldsymbol{k}}=-t \sum_{\boldsymbol{a}} e^{i \boldsymbol{k} \cdot \boldsymbol{a}}=-2 t\left(\cos k_{x} a+\cos k_{y} a+\cos k_{z} a\right),
\end{align*}
$$

and the sum runs over all vectors $\boldsymbol{a}$ connecting nearest neighbours. Obviously, this system is metallic, with a unique ground state
$$
\begin{align*}
\left|\Phi_{B 0}\right\rangle=\prod_{\boldsymbol{k} | \epsilon_{\boldsymbol{k}} < 0} \widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger}|0\rangle .
\end{align*}
$$
Note that $\epsilon_{F}=0$ at half filling, whereas the bandwidth $2D=12t$.

---
### 8.1.2 Insulating State

We consider the two lowest energy sectors for the case $t \ll U$. The ground state sector $\alpha$ has already been defined: one electron sits on each lattice site. The lowest excited states create the sector $\beta$ with one empty and one doubly occupied site (as depicted in the previous figure showing the atomic limit). With the finite hopping matrix element, the empty (holon) and the doubly occupied (doublon) site become "mobile". A
fraction of the degeneracy ($2^{N-2} N(N-1)$) is hereby lifted and the energy obtains a momentum dependence,
$$
\begin{align*}
E_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}=U+\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}>U-12 t .
\end{align*}
$$
Even though ignoring the spin configurations here is a daring approximation, we obtain a qualitatively good picture of the situation. Note that the motion of an empty site (holon) or doubly occupied site (doublon) is not independent of the spin configuration which is altered by moving these objects. As a consequence, the holon/doublon motion is not entirely free leading to a reduction of the bandwidth. Therefore the bandwidth seen in the next figure is smaller than $2D$, in general. One notices that, with increasing $|t|$, the two energy sectors approach each other, until they finally overlap. In the left panel the holon-doublon excitation spectrum is depicted by two bands, the lower and upper Hubbard bands, where the holon is a hole in the lower and the doublon a particle in the upper Hubbard band:

![Attachments/Script 78.webp|700](/img/user/Attachments/Script%2078.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=175&rect=161,503,438,551| ]]

The excitation gap is the gap between the two bands and we may interpret this system as an insulator, called a Mott insulator. (Note, however, that this band structure depends strongly on correlation effects, for instance, spin correlation, and is not rigid like the band structure of a semiconductor.) The band overlap (closing of the gap) indicates a transition, after which a perturbative treatment is definitely inapplicable. This is, in fact, the metal-insulator transition.

---
### 8.1.3 The Metallic State

On the metallic side, the initial state is better defined since the ground state is a filled Fermi sea without degeneracy. The treatment of the Coulomb repulsion $U$ turns out to become difficult, once we approach the Mott transition, where the electrons suffer a strong impediment in their mobility. In this region, there is no straightforward way of a perturbative treatment. The so-called Gutzwiller approximation, however, provides qualitative and very instructive insight into the properties of the strongly correlated electrons.
For this approximation we introduce the following important densities:

- $1$: electron density (average number of electrons per site, $n=1$ for half-filling)
- $s_{\uparrow}$ : density of the singly occupied lattice sites with spin $\uparrow$
- $s_{\downarrow}$ : density of the singly occupied lattice sites with spin $\downarrow$
- $d$ : density of the doubly occupied sites
- $h$ : density of the empty sites

It is easily seen that $h=d$ and $s_{\uparrow}=s_{\downarrow}=s/2$, as long as no uniform magnetisation is present. Note that $d$ determines the energy contribution of the interaction term to $Ud$, which we regard as the index of fixed interaction energy sectors. Furthermore, for half-filling ($n=1$),
$$
\begin{align*}
1=s+2 d
\end{align*}
$$

holds. The viewpoint of the Gutzwiller approximation is based on the renormalisation of the probability of the hopping process due to the correlation of the electrons, beyond the restrictions imposed by the Pauli principle on non-interacting electrons. With this, the importance of the spatial configuration of the electrons is enhanced. In the Gutzwiller approximation, the latter is taken into account statistically by simple probabilities for the occupation of lattice sites.
We fix the density of the doubly occupied sites $d$ and investigate the hopping processes which keep $d$ constant. First, we consider an electron hopping from a singly occupied to an empty site $(i \rightarrow j)$. Hopping probability depends on the availability of the initial configuration. We compare the probability to find this initial state for the correlated $(P)$ and the uncorrelated ($P_{0}$) case and write
$$
\begin{align*}
P(\uparrow 0)+P(\downarrow 0)=g_{t}\left[P_{0}(\uparrow 0)+P_{0}(\downarrow 0)\right] .
\end{align*}
$$
The factor $g_{t}$ will eventually appear as the renormalisation of the hopping probability and, thus, leads to an effective kinetic energy of the system due to correlations. We determine both sides statistically. In the correlated case (fixed $d$, so $h=d$ and $s=1-2d$), the joint probability for $i$ to be singly occupied and $j$ to be empty is obviously
$$
\begin{align*}
P(\uparrow 0)+P(\downarrow 0)=s h=s d=d(1-2 d) .
\end{align*}
$$

In the uncorrelated case (where $d$ is not fixed, and average occupancy per spin state is $1/2$), we have
$$
\begin{align*}
P_{0}(\uparrow 0)=&n_{i \uparrow}\left(1-n_{i \downarrow}\right)\left(1-n_{j \uparrow}\right)\left(1-n_{j \downarrow}\right)\\=&\left(\frac{1}{2}\cdot\frac{1}{2}\right) \cdot \left(\frac{1}{2}\cdot\frac{1}{2}\right) = \frac{1}{16} .
\end{align*}
$$
The case for $\downarrow$ follows accordingly ($P_0(\downarrow 0) = 1/16$). In order to collect the total result for hopping processes which keep $d$ constant, we have to do the same calculation for the hopping process $(\uparrow \downarrow, \uparrow) \rightarrow(\uparrow, \uparrow \downarrow)$, which leads to the same result. Processes of the type $(\uparrow \downarrow, 0) \rightarrow(\uparrow, \downarrow)$ change $d$ and are ignored for calculating $g_t$. With this, we obtain in all cases the same renormalisation factor for the kinetic energy,
$$
\begin{align*}
g_{t}=8 d(1-2 d),
\end{align*}
$$

meaning, $t \rightarrow g_{t} t$. We consider the correlations by treating the electrons as independent but with a renormalised matrix element $g_{t} t$. The energy in the sector $d$ becomes
$$
\begin{align*}
E(d)=g_{t} \epsilon_{\text {kin }}+U d=8 d(1-2 d) \epsilon_{\text {kin }}+U d, \quad \epsilon_{\text {kin }}=\frac{1}{N} \sum_{\boldsymbol{k} | \epsilon_{\boldsymbol{k}} < 0} \epsilon_{\boldsymbol{k}} = \int_{-D}^{0} d \epsilon N(\epsilon) \epsilon .
\end{align*}
$$
For fixed $U$ and $t$, we can minimise this with respect to $d$ (note that this is not a variational calculation in a strict sense, the resulting energy is not an upper bound to the ground state energy), and find
$$
\begin{align*}
d=\frac{1}{4}\left(1-\frac{U}{U_{c}}\right) \quad \text { and } \quad g_{t}=1-\left(\frac{U}{U_{c}}\right)^{2},
\end{align*}
$$
with the critical value
$$
\begin{align*}
U_{c}=8\left|\epsilon_{\text {kin }}\right| \approx 25 t \sim 4 D .
\end{align*}
$$
For $U \geq U_{c}$, double occupancy and, thus, hopping is completely suppressed; electrons become localised. This observation by Brinkman and Rice provides a qualitative description of the metal-insulator transition to a Mott insulator, but takes into account only local correlations, while correlations between different lattice sites are not considered. Moreover, correlations between the spin degrees of freedom are entirely neglected. The charge excitations contain contributions between different energy scales: (1) a metallic part, described via the renormalised effective Hamiltonian
$$
\begin{align*}
\mathcal{H}_{\text {ren }}=\sum_{\boldsymbol{k}, s} g_{t} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}+U d,
\end{align*}
$$

and (2) a part with higher energy, corresponding to charge excitations on the energy scale $U$, meaning to excitations raising the number of doubly occupied sites by one (or more).

We can estimate the contribution to the metallic conduction. Since in the tight-binding description the current operator contains the hopping matrix element and is thus subject to the same renormalisation as the kinetic energy, we obtain
$$
\begin{align*}
\sigma_{1}(\omega)=\frac{\omega_{p}^{* 2}}{4 \pi} \delta(\omega)+\sigma_{1}^{\text {high energy }}(\omega), 
\end{align*}
$$

where we have used the relation for a perfect conductor (no residual resistivity in a perfect lattice), as discussed in [[Notes/Solid-State Theory/6 Transport Properties of Metals\|Chapter 6]]. There is a high-energy part which we do not specify here. The plasma frequency is renormalised, $\omega_{p}^{* 2}=g_{t} \omega_{p}^{2}$, such that the $f$-sum rule, also from [[Notes/Solid-State Theory/6 Transport Properties of Metals\|Chapter 6]], yields
$$
\begin{align*}
I=\int_{0}^{\infty} d \omega \sigma_{1}(\omega)=\frac{\omega_{p}^{2}}{8\pi} g_{t}+I_{\text {high energy }}=\frac{\omega_{p}^{2}}{8\pi} . % Note: 8pi or 8 depends on units for I.
\end{align*}
$$
For $U \rightarrow U_{c}$, the coherent metallic part becomes weaker and weaker,
$$
\begin{align*}
\frac{\omega_{p}^{2}}{8\pi} g_{t}=\left(1-\left(\frac{U}{U_{c}}\right)^{2}\right) \frac{\omega_{p}^{2}}{8\pi}
\end{align*}
$$
According to the $f$-sum rule, the lost weight must gradually be transferred to the "high-energy" contribution.

---
### 8.1.4 Fermi Liquid Properties of the Metallic State

The just discussed approximation allows us to discuss a few Fermi liquid properties of the metallic state close to the metal-insulator transition in a simplified way. Let us investigate the momentum distribution. According to the above definition,
$$
\begin{align*}
\epsilon_{\mathrm{kin}}=\frac{1}{N} \sum_{\boldsymbol{k} \in \mathrm{FS}} \epsilon_{\boldsymbol{k}}
\end{align*}
$$

where the sum runs over all $\boldsymbol{k}$ in the Fermi sea (FS). One can show within the above approximation that the distribution is constant within ($n_{\mathrm{in}}$) and outside ($n_{\mathrm{out}}$) the Fermi surface for finite $U$, such that, for $\boldsymbol{k}$ in the first Brillouin zone,
$$
\begin{align*}
\frac{1}{2}=\frac{1}{N} \sum_{\boldsymbol{k} \in \mathrm{FS}} n_{\mathrm{in}}+\frac{1}{N} \sum_{\boldsymbol{k} \notin \mathrm{FS}} n_{\mathrm{out}}=\frac{1}{2}\left(n_{\mathrm{in}}+n_{\mathrm{out}}\right)
\end{align*}
$$
and
$$
\begin{align*}
g_{t} \epsilon_{\mathrm{kin}}=\frac{1}{N} \sum_{\boldsymbol{k} \in \mathrm{FS}} n_{\mathrm{in}} \epsilon_{\boldsymbol{k}}+\frac{1}{N} \sum_{\boldsymbol{k} \notin \mathrm{FS}} n_{\mathrm{out}} \epsilon_{\boldsymbol{k}} .
\end{align*}
$$
Taking into account particle-hole symmetry, which means
$$
\begin{align*}
\sum_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}=\sum_{\boldsymbol{k} \in \mathrm{FS}} \epsilon_{\boldsymbol{k}}+\sum_{\boldsymbol{k} \notin \mathrm{FS}} \epsilon_{\boldsymbol{k}}=0
\end{align*}
$$

we are able to determine $n_{\mathrm{in}}$ and $n_{\mathrm{out}}$,
$$
\begin{align*}
\left.\begin{array}{l}
n_{\text {in }}+n_{\text {out }}=1 \\
n_{\text {in }}-n_{\text {out }}=g_{t}
\end{array}\right\} \Rightarrow\left\{\begin{array}{r}
n_{\text {in }}=\left(1+g_{t}\right) / 2 \\
n_{\text {out }}=\left(1-g_{t}\right) / 2
\end{array} .\right.
\end{align*}
$$

With this, the jump in the distribution at the Fermi energy is equal to $g_{t}$, which corresponds to the quasiparticle weight $Z$:

![Attachments/Script 79.webp|700](/img/user/Attachments/Script%2079.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=178&rect=161,492,436,651| ]]
Quasiparticle weight $g_t$ as the jump in the momentum distribution.

For $U \rightarrow U_{c}$ it vanishes; the quasiparticles cease to exist for $U=U_{c}$. Without going into the details of the calculation, we provide a few Fermi liquid parameters. It is easy to see that the effective mass ratio is
$$
\begin{align*}
\frac{m}{m^{*}}=g_{t} \quad \text{so} \quad \frac{m^*}{m} = g_t^{-1}
\end{align*}
$$

and thus
$$
\begin{align*}
F_{1}^{s}=3\left(\frac{m^*}{m}-1\right) = 3\left(g_{t}^{-1}-1\right)=\frac{3 U^{2}}{U_{c}^{2}-U^{2}},
\end{align*}
$$

where $t$ is related to the bare electron mass $m$ (for instance, $t \sim \hbar^2/(2ma^2)$ for a simple lattice) and the density of states $N\left(\epsilon_{F}\right)^{*}=N\left(\epsilon_{F}\right) g_{t}^{-1}$. Furthermore,
$$
\begin{align*}
\begin{aligned}
& F_{0}^{a}=-\frac{U N\left(\epsilon_{F}\right)}{4} \frac{2 U_{c}+U}{\left(U+U_{c}\right)^{2}} U_{c} \implies \chi=\frac{\mu_{B}^{2} N\left(\epsilon_{F}\right)^{*}}{1+F_{0}^{a}} \\
& F_{0}^{s}=\frac{U N\left(\epsilon_{F}\right)}{4} \frac{2 U_{c}-U}{\left(U-U_{c}\right)^{2}} U_{c} \implies \kappa=\frac{N\left(\epsilon_{F}\right)^{*}}{n^{2}\left(1+F_{0}^{s}\right)} .
\end{aligned}
\end{align*}
$$

It follows that the compressibility $\kappa$ vanishes for $U \rightarrow U_{c}$ as expected, since it becomes more and more difficult to compress the electrons or to add more electrons, respectively. The insulator is, of course, incompressible. The spin susceptibility diverges because of the diverging density of states $N\left(\epsilon_{F}\right)^{*}$. This indicates that local spins form, which exist as completely independent degrees of freedom at $U=U_{c}$. Only the antiferromagnetic correlation between the spins would lead to a renormalisation, which turns $\chi$ finite. This correlation is, as mentioned above, neglected in the Gutzwiller approximation. The effective mass diverges and shows that the quasiparticles are more and more localised close to the transition, since the occupation of a lattice site is getting more rigidly fixed to $1$. This can be observed within the Gutzwiller approximation in the form of local fluctuations of the particle number. For this, we introduce the density matrix of the electron states on an arbitrary lattice site,
$$
\begin{align*}
\hat{\rho}=h|0\rangle\langle 0|+d|\uparrow \downarrow\rangle\langle\uparrow \downarrow|+\frac{s}{2}(|\uparrow\rangle\langle\uparrow|+|\downarrow\rangle\langle\downarrow|)
\end{align*}
$$

from which we deduce the variance of the occupation number,
$$
\begin{align*}
\left\langle n^{2}\right\rangle-\langle n\rangle^{2}=\left\langle n^{2}\right\rangle-1=\operatorname{tr}\left(\hat{\rho} \hat{n}^{2}\right)-1=4 d+s-1=2 d .
\end{align*}
$$

The deviation from single occupation vanishes with $d$, meaning with the approach of the metal-insulator transition. Note that the fluctuation-dissipation theorem connects $\left\langle n^{2}\right\rangle-\langle n\rangle^{2}$ to the compressibility. As a last remark, it turns out that the Gutzwiller approximation is well suited to describe the strongly correlated Fermi liquid ${ }^{3} \mathrm{He}$.

---
## 8.2 The Mott Insulator as a Quantum Spin System
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=179&selection=0,0,2,43| ]]

One of the most important characteristics of the Mott insulator is the presence of spin degrees of freedom after the freezing of the charge. This is one of the most profound features distinguishing a Mott insulator from a band insulator. In our simple discussion, we have seen that the atomic limit of the Mott insulator provides us with a highly degenerate ground state, where a spin-$1/2$ degree of freedom is present on each lattice site. We lift this degeneracy by taking into account the kinetic energy term $\mathcal{H}_{\text {kin }}$ (for $t \ll U$). In this way new physics appears on a low-energy scale, which can be described by an effective spin Hamiltonian. Prominent examples for such spin systems are transition-metal oxides like the cuprates $\mathrm{La}_{2} \mathrm{CuO}_{4}, \mathrm{SrCu}_{2} \mathrm{O}_{3}$ or vanadates $\mathrm{CaV}_{4} \mathrm{O}_{9}$, $\mathrm{NaV}_{2} \mathrm{O}_{5}$.

---
### 8.2.1 The Effective Hamiltonian

In order to employ our perturbative considerations, it is sufficient to observe the spins of two neighbouring lattice sites and to consider perturbation theory for discrete degenerate states. Here, this is preferably done in real space. There are 4 degenerate configurations, $\{|\uparrow, \uparrow\rangle,|\uparrow, \downarrow\rangle, |\downarrow, \uparrow \rangle,|\downarrow, \downarrow\rangle\}$. The application of $\mathcal{H}_{\text {kin }}$ yields
$$
\begin{align*}
\begin{aligned}
& \mathcal{H}_{\text {kin }}|\uparrow, \uparrow\rangle=\mathcal{H}_{\text {kin }}|\downarrow, \downarrow\rangle=0, \\
& \mathcal{H}_{\text {kin }}|\uparrow, \downarrow\rangle=-t\left(|(\uparrow \downarrow)_1, 0_2\rangle + |0_1, (\uparrow \downarrow)_2\rangle\right), \\
& \mathcal{H}_{\text {kin }}|\downarrow, \uparrow\rangle=-t\left(|(\downarrow \uparrow)_1, 0_2\rangle + |0_1, (\downarrow \uparrow)_2\rangle\right),
\end{aligned}
\end{align*}
$$

where, in the last two cases, the resulting states (such as $|(\uparrow\downarrow)_1,0_2\rangle$, denoting site 1 doubly occupied and site 2 empty) have an energy higher by $U$ and lie outside the ground state sector. Thus, it becomes clear that we have to proceed to second order perturbation, where the states of higher energy will appear only virtually:

![Attachments/Script 80.webp|700](/img/user/Attachments/Script%2080.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=179&rect=162,320,437,418| ]]

We obtain the matrix elements for the effective Hamiltonian in the degenerate subspace
$$
\begin{align*}
M_{s_{1}, s_{2} ; s_{1}^{\prime}, s_{2}^{\prime}}=-\sum_{n}\left\langle s_{1}, s_{2}\right| \mathcal{H}_{\text {kin }}|n\rangle \frac{1}{E_n - E_0}\langle n| \mathcal{H}_{\text {kin }}\left|s_{1}^{\prime}, s_{2}^{\prime}\right\rangle,
\end{align*}
$$

where $|n\rangle$ represents an intermediate state like $|(\uparrow \downarrow)_1, 0_2\rangle$ or $|0_1, (\uparrow \downarrow)_2\rangle$, such that the energy denominator $E_n - E_0$ is $U$. We end up with (for distinct initial and final states within the $\{|\uparrow, \downarrow\rangle, |\downarrow, \uparrow\rangle\}$ subspace)
$$
\begin{align*}
M_{\uparrow \downarrow ; \uparrow \downarrow}=M_{\downarrow \uparrow ; \downarrow \uparrow}=-\frac{2 t^{2}}{U} \quad \text{and} \quad M_{\uparrow \downarrow ; \downarrow \uparrow}=M_{\downarrow \uparrow ; \uparrow \downarrow}=-\frac{2 t^{2}}{U} .
\end{align*}
$$

Note that the signs originate from the anti-commutation properties of the Fermion operators during the specific evaluation of matrix elements of $\mathcal{H}_{\text{kin}}$. In the subspace $\{|\uparrow, \downarrow\rangle,|\downarrow, \uparrow\rangle\}$, the Hamiltonian matrix is $\begin{pmatrix} -2t^2/U & -2t^2/U \\ -2t^2/U & -2t^2/U \end{pmatrix}$. The eigenstates of the respective secular equations are,
$$
\begin{align*}
\begin{array}{ll}
\frac{1}{\sqrt{2}}(|\uparrow, \downarrow\rangle-|\downarrow, \uparrow\rangle), & E=0, \\
\frac{1}{\sqrt{2}}(|\uparrow, \downarrow\rangle+|\downarrow, \uparrow\rangle), \quad E=-\frac{4 t^{2}}{U} .
\end{array}
\end{align*}
$$
Since the states $|\uparrow, \uparrow\rangle$ and $|\downarrow, \downarrow\rangle$ have energy $E=0$ (no hopping possible in second order that returns to these states within the degenerate manifold without changing spins), the sector with total spin $S=1$ (triplet: $|\uparrow\uparrow\rangle, |\downarrow\downarrow\rangle, \frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)$ if we associate the $E=-4t^2/U$ state with the singlet and the other combinations form the triplet. This requires care: the states $|\uparrow\uparrow\rangle, |\downarrow\downarrow\rangle$ have energy $0$. The symmetric combination $\frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle)$ corresponds to $E=-4t^2/U$ (ground state, spin singlet $S=0$). The antisymmetric combination $\frac{1}{\sqrt{2}}(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)$ (part of spin triplet $S=1$) has energy $0$.
An effective Hamiltonian with the same energy spectrum for the spin configurations can be written with the help of the spin operators $\widehat{\mathbf{S}}_{1}$ and $\widehat{\mathbf{S}}_{2}$ on the two lattice sites (where $\mathbf{S}_i$ are spin angular momentum operators with eigenvalues $\pm \hbar/2$ for $S_z$, and $\mathbf{S}_i^2 = S(S+1)\hbar^2 = (3/4)\hbar^2$)
$$
\begin{align*}
\mathcal{H}_{\mathrm{eff}}=J\left(\widehat{\mathbf{S}}_{1} \cdot \widehat{\mathbf{S}}_{2}-\frac{1}{4}\hbar^2 S(S+1)\right) \quad \text{or more simply } \quad \mathcal{H}_{\mathrm{eff}}=J \widehat{\mathbf{S}}_{1} \cdot \widehat{\mathbf{S}}_{2} + \text{const.}
\end{align*}
$$

Using the common form $\mathcal{H}_{\mathrm{eff}}=J_{\text{exch}} \left( \widehat{\mathbf{S}}_{1} \cdot \widehat{\mathbf{S}}_{2} / \hbar^2 \right)$ where $J_{\text{exch}} = -4t^2/U$ would give eigenvalues $J_{\text{exch}}(1/4)$ for triplet and $J_{\text{exch}}(-3/4)$ for singlet.
The provided form is $\mathcal{H}_{\mathrm{eff}}=J\left(\widehat{\mathbf{S}}_{1} \cdot \widehat{\mathbf{S}}_{2}-\frac{\hbar^{2}}{4}\right), \quad J=\frac{4 t^{2}}{U \hbar^{2}}>0$.
For $S=1$ (triplet), $\mathbf{S}_1 \cdot \mathbf{S}_2 = \hbar^2/4$. $\mathcal{H}_{\mathrm{eff}} = J(\hbar^2/4 - \hbar^2/4) = 0$.
For $S=0$ (singlet), $\mathbf{S}_1 \cdot \mathbf{S}_2 = -3\hbar^2/4$. $\mathcal{H}_{\mathrm{eff}} = J(-3\hbar^2/4 - \hbar^2/4) = -J\hbar^2 = -(4t^2/U\hbar^2)\hbar^2 = -4t^2/U$. This matches the derived energies.

This mechanism of spin-spin coupling is called superexchange, a mechanism introduced by P.W. Anderson. Since this relation is valid between all neighbouring lattice sites, we can write the total Hamiltonian as
$$
\begin{align*}
\mathcal{H}_{H}=J \sum_{\langle i, j\rangle} \widehat{\mathbf{S}}_{i} \cdot \widehat{\mathbf{S}}_{j}+\text { const. }
\end{align*}
$$

This model, reduced to spins only, is called the Heisenberg model. The Hamiltonian is invariant under a global $SU(2)$ spin rotation, generated by $U_{s}(\boldsymbol{\theta})=e^{-i \widehat{\mathbf{S}}_{\text{tot}} \cdot \boldsymbol{\theta}/\hbar}$, where $\widehat{\mathbf{S}}_{\text{tot}}=\sum_{j} \widehat{\mathbf{S}}_{j}$.
Thus, the total spin is a good quantum number, as we have seen in the two-spin case. The coupling constant $J$ (as defined: $4t^2/(U\hbar^2)$) is positive and favors an antiparallel alignment of neighboring spins (since $\mathbf{S}_i \cdot \mathbf{S}_j$ is then minimized). The ground state is therefore not ferromagnetic.

---
### 8.2.2 Mean Field Approximation of the Antiferromagnet

There are a few exact results for the Heisenberg model, but not even the ground state energy can be calculated exactly (except in the case of the one-dimensional spin chain which can be solved by means of a Bethe Ansatz). The difficulty lies predominantly in the treatment of quantum fluctuations; the zero-point motion of coupled spins. It is easiest seen already with two spins, where the ground state is a singlet and maximally entangled. The ground state of all antiferromagnetic systems is a spin singlet ($S_{\text {tot }}=0$). In the so-called thermodynamic limit ($N \rightarrow \infty$) there is long-range antiferromagnetic order in the ground state for dimensions $D \geq 2$. Contrary, the fully polarised ferromagnetic state (ground state for a model with $J<0$) is known exactly, and as a state with maximal spin quantum number $\mathbf{S}_{\text{tot}}^{2}$ it features no quantum fluctuations.
In order to describe the antiferromagnetic state, we apply the mean field approximation again. We can characterise the equilibrium state of the classical Heisenberg model (spins as simple vectors without quantum properties) by splitting the lattice into two sublattices $A$ and $B$, where each $A$-site has only $B$-sites as neighbors, and vice-versa. Lattices which allow for such a separation are called bipartite. There are lattices where this is not possible, for instance, triangular or face-centred cubic lattices. There, frustration phenomena appear, a further complication of antiferromagnetically coupled systems. On the $A$- ($B$-) sublattice, the spins point up (down). This is unique up to a global spin rotation. Note that this spin configuration doubles the unit cell.
We introduce the respective mean field,
$$
\begin{align*}
\widehat{S}_{i}^{z} \rightarrow \langle \widehat{S}_{i}^{z} \rangle = m_i = \begin{cases} m & i \in A \\ -m & i \in B \end{cases}
\end{align*}
$$

and the mean-field Hamiltonian on a site $i$ interacting with its $z$ neighbours $j$ is approximated by replacing terms like $\widehat{\mathbf{S}}_i \cdot \widehat{\mathbf{S}}_j$ with $\widehat{\mathbf{S}}_i \cdot \langle\widehat{\mathbf{S}}_j\rangle + \langle\widehat{\mathbf{S}}_i\rangle \cdot \widehat{\mathbf{S}}_j - \langle\widehat{\mathbf{S}}_i\rangle \cdot \langle\widehat{\mathbf{S}}_j\rangle$.
This leads to the mean field Hamiltonian
$$
\begin{align*}
\mathcal{H}_{\mathrm{mf}}=\mathcal{H}_{A}+\mathcal{H}_{B}=-J z m \sum_{i \in A} \widehat{S}_{i}^{z}+J z m \sum_{i \in B} \widehat{S}_{i}^{z} - J z \frac{m^{2}}{2} N
\end{align*}
$$

with the coordination number $z$, the number of nearest neighbors ($z=6$ in a simple cubic lattice). Note the constant term has been adjusted for standard mean-field derivation. It is simple to calculate the partition sum of this Hamiltonian,
$$
\begin{align*}
Z=\operatorname{tr}\left(e^{-\beta \mathcal{H}_{\mathrm{mf}}}\right)=\left[\left(2\cosh(\beta J z m \hbar / 2)\right) e^{\beta J z m^{2} / 2}\right]^{N}
\end{align*}
$$

The free energy per spin is consequently given by
$$
\begin{align*}
F(m, T)&=-\frac{1}{N} k_{B} T \ln Z\\&=-J z \frac{m^{2}}{2}-k_{B} T \ln (2 \cosh (\beta J z m \hbar / 2))
\end{align*}
$$

At fixed temperature, we minimise the free energy with respect to $m$ to determine the thermal equilibrium state, meaning set $\partial F / \partial m=0$ and find
$$
\begin{align*}
m=\frac{\hbar}{2} \tanh \left(\frac{J z m \hbar}{2 k_{B} T}\right)
\end{align*}
$$

Actually, a staggered magnetic field would be another equilibrium variable (next to the temperature). We set it to zero. This is the self-consistency equation of the mean field theory. It provides a critical temperature $T_{N}$ (Néel temperature), below which the mean moment $m$ is finite. For $T \rightarrow T_{N-}, m$ approaches 0 continuously. Thus, $T_{N}$ can be found from a linearised self-consistency equation,
$$
\begin{align*}
m=\frac{J z m \hbar^{2}}{4 k_{B} T_N}
\end{align*}
$$

and thus (using $S=\hbar/2$)
$$
\begin{align*}
T_{N}=\frac{J z \hbar^{2}}{4 k_{B}} = \frac{J z (2S)^2}{4k_B} = \frac{J z S^2}{k_B}
\end{align*}
$$

This means that $T_{N}$ scales with the coupling constant and with $z$. The larger $J$ and the more neighbours are present, the more stable is the ordered state. At infinite $z$, the mean field approximation becomes exact. For $T$ close to $T_{N}$, we can expand the free energy in $m$,
$$
\begin{align*}
F(m, T) \approx F_{0}+\frac{J z}{2}\left[\left(1-\frac{T_{N}}{T}\right) m^{2}+\frac{2}{3 \hbar^{2}}\left(\frac{T_{N}}{T}\right)^{3} m^{4} \ldots\right]
\end{align*}
$$

This is a Landau theory for a phase transition of second order, where a symmetry is spontaneously broken. The breaking of the symmetry (from the high-temperature phase with high symmetry to the low-temperature phase with low symmetry) is described by the order parameter $m$. The minimisation of $F$ with respect to $m$ yields
$$
\begin{align*}
m(T) \approx \begin{cases}0, & T>T_{N} \\ \frac{\hbar\sqrt{3}}{2} \sqrt{\left(1-\frac{T}{T_N}\right)}, & T \lesssim T_{N}\end{cases}
\end{align*}
$$


![Attachments/Script 81.webp|700](/img/user/Attachments/Script%2081.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=182&rect=156,635,436,759| ]]

---
## 8.3 Collective Modes - Spin Wave Excitations
[[Courses/2. Semester/Solid State Theory/Script.pdf#page=182&selection=23,0,25,40| ]]

Besides its favourable properties, the mean field approximation also has a number of insufficiencies. Quantum and some part of thermal fluctuations are neglected, and the insight into the low-energy excitations remains vague. As a matter of fact, as in the case of the ferromagnet, collective excitations exist here. In order to investigate these, we write the Heisenberg model in its spin components,
$$
\begin{align*}
\mathcal{H}_{H}=J \sum_{\langle i, j\rangle}\left(\widehat{S}_{i}^{z} \widehat{S}_{j}^{z}+\frac{1}{2}\left(\widehat{S}_{i}^{+} \widehat{S}_{j}^{-}+\widehat{S}_{i}^{-} \widehat{S}_{j}^{+}\right)\right) .
\end{align*}
$$

In the ordered state, the moments shall be aligned along the $z$-axis.
To observe the dynamics of a flipped spin, we apply the operator $\widehat{W}=\sum_{l} f_{l} \widehat{S}_{l}^{-}$on the ground state $\left|\Phi_{0}\right\rangle$, and determine the spectrum by solving the resulting eigenvalue equation
$$
\begin{align*}
\left(\mathcal{H}_{H}-E_{0}\right) \widehat{W}\left|\Phi_{0}\right\rangle=\left[\mathcal{H}_{H}, \widehat{W}\right]\left|\Phi_{0}\right\rangle=\hbar \omega \widehat{W}\left|\Phi_{0}\right\rangle,
\end{align*}
$$

with the ground state energy $E_{0}$. Using the spin-commutation relations (for angular momentum operators $\mathbf{S}$ including $\hbar$)
$$
\begin{align*}
\begin{aligned}
& {\left[\widehat{S}_{i}^{+}, \widehat{S}_{j}^{-}\right]=2 \hbar \widehat{S}_{i}^{z} \delta_{i j},} \\
& {\left[\widehat{S}_{i}^{z}, \widehat{S}_{j}^{ \pm}\right]= \pm \hbar \widehat{S}_{j}^{ \pm} \delta_{i j},}
\end{aligned}
\end{align*}
$$

then yields the equation (after linearisation, replacing $\widehat{S}^z_j \to \langle \widehat{S}^z_j \rangle = m_j$)
$$
\begin{align*}
\sum_{l}\left[-J \sum_{j \text{ nn to } l} m_j \widehat{S}_{l}^{-}+J \sum_{j \text{ nn to } l} m_l \widehat{S}_{j}^{-}-\hbar \omega \widehat{S}_{l}^{-}\right] f_l \left|\Phi_{0}\right\rangle=0
\end{align*}
$$

where $m_j$ and $m_l$ are the mean-field values on sites $j$ and $l$. We decouple this complicated problem by replacing the operators $\widehat{S}^{z}$ by their mean fields. Therefore, we have to distinguish between $A$ and $B$ sublattices ($m_A = m, m_B = -m$), such that we end up with two equations,
$$
\begin{align*}
\begin{aligned}
\sum_{l \in A} f_{l}^{A}\left(J m z \widehat{S}_{l}^{-}+J m \sum_{\boldsymbol{a} \text{ to nn}} \widehat{S}_{l+\boldsymbol{a}}^{-}-\hbar \omega \widehat{S}_{l}^{-}\right)\left|\Phi_{0}\right\rangle=0, & l \in A, \\
\sum_{l^{\prime} \in B} f_{l^{\prime}}^{B}\left(-J m z \widehat{S}_{l^{\prime}}^{-}-J m \sum_{\boldsymbol{a} \text{ to nn}} \widehat{S}_{l^{\prime}+\boldsymbol{a}}^{-}-\hbar \omega \widehat{S}_{l^{\prime}}^{-}\right)\left|\Phi_{0}\right\rangle=0, & l^{\prime} \in B .
\end{aligned}
\end{align*}
$$

Choosing
$$
\begin{align*}
\begin{aligned}
& f_{l}^{A}=u_{\mathbf{q}} \sqrt{\frac{2}{N}} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l}} \quad l \in A \\
& f_{l^{\prime}}^{B}=v_{\mathbf{q}} \sqrt{\frac{2}{N}} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l^{\prime}}} \quad l^{\prime} \in B
\end{aligned}
\end{align*}
$$

we introduce the operators
$$
\begin{align*}
\begin{aligned}
& \widehat{a}_{\boldsymbol{q}}^{\dagger} = \sqrt{\frac{2}{N}} \sum_{l \in A} \widehat{S}_{l}^{-} e^{-i\boldsymbol{q}\cdot\boldsymbol{r}_l} / \sqrt{2m\hbar} \\ % For bosonic normalization
& \widehat{b}_{\boldsymbol{q}}^{\dagger} = \sqrt{\frac{2}{N}} \sum_{l' \in B} \widehat{S}_{l'}^{-} e^{-i\boldsymbol{q}\cdot\boldsymbol{r}_{l'}} / \sqrt{2m\hbar} % For bosonic normalization
\end{aligned}
\end{align*}
$$

Inserting $f_l^A$ and $f_{l'}^B$ into the equations of motion and using the definitions for $\widehat{a}_{\mathbf{q}}^\dagger$ and $\widehat{b}_{\mathbf{q}}^\dagger$ (as Fourier sums of $\widehat{S}^-$ operators) leads to:
$$
\begin{align*}
\begin{aligned}
& \left((J m z-\hbar \omega) u_{\mathbf{q}} +J m \gamma_{\boldsymbol{q}} v_{\mathbf{q}} \right) \widehat{A}_{\mathbf{q}}^\dagger \left|\Phi_{0}\right\rangle =0 \\
& \left(-J m \gamma_{\boldsymbol{q}} u_{\mathbf{q}} + (-J m z-\hbar \omega) v_{\mathbf{q}} \right) \widehat{B}_{\mathbf{q}}^\dagger \left|\Phi_{0}\right\rangle =0
\end{aligned}
\end{align*}
$$

where $\widehat{A}_{\mathbf{q}}^\dagger$ and $\widehat{B}_{\mathbf{q}}^\dagger$ represent the sums of spin operators for sublattices A and B respectively, and $\gamma_{\boldsymbol{q}}=\sum_{\boldsymbol{a}} e^{i \boldsymbol{q} \cdot \boldsymbol{a}}=2\left(\cos q_{x} a+\cos q_{y} a+\cos q_{z} a\right)$ for a simple cubic lattice. For a non-trivial solution $(u_{\mathbf{q}}, v_{\mathbf{q}})$, the determinant must vanish:
$$
\begin{vmatrix}
Jmz - \hbar\omega & Jm\gamma_{\mathbf{q}} \\
-Jm\gamma_{\mathbf{q}} & -Jmz - \hbar\omega
\end{vmatrix} = 0
$$
This eigenvalue equation is easily solved leading to the description of spin waves in the antiferromagnet. The energy spectrum is given by
$$
\begin{align*}
(\hbar \omega_{\boldsymbol{q}})^2 = (Jmz)^2 - (Jm\gamma_{\mathbf{q}})^2 \implies \hbar \omega_{\boldsymbol{q}}= J m \sqrt{z^{2}-\gamma_{\boldsymbol{q}}^{2}}
\end{align*}
$$

Note that only the positive energies make physical sense. It is interesting to investigate the limit of small $\boldsymbol{q}$, where $\gamma_{\mathbf{q}} \approx z - C q^2$ for some constant $C$.
Then $z^2 - \gamma_{\boldsymbol{q}}^2 \approx z^2 - (z-Cq^2)^2 \approx 2zCq^2$.
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}} \approx J m \sqrt{2zC}|\boldsymbol{q}|+\cdots
\end{align*}
$$

This means that, in contrast to the ferromagnet, the spin waves of the antiferromagnet have a linear low-energy spectrum (as shown in the figure below). The same applies here if we expand the spectrum around $\boldsymbol{Q}=(1,1,1) \pi / a$ (folding of the Brillouin zone due to the doubling of the unit cell). After a suitable normalisation, the operators $\widehat{a}_{\boldsymbol{q}}$ and $\widehat{b}_{\boldsymbol{q}}$ (or their Bogoliubov-transformed combinations) are of bosonic nature. This is an approximation where spin operators are treated as bosons, often via Holstein-Primakoff transformation, especially for small deviations from the ordered state. For instance, $\left[\widehat{S}_{l}^{+}, \widehat{S}_{j}^{-}\right]=2 \hbar \widehat{S}_{l}^{z} \delta_{l j} \approx \pm 2 \hbar m \delta_{l j}$ (constant for fixed $m$).
The zero-point fluctuations of these bosons yield quantum fluctuations, which reduce the moment $m$ from its mean field value. In a one-dimensional spin chain these fluctuations are strong enough to suppress antiferromagnetic order even for the ground state. The fact that the spectrum starting at zero energy has to do with the infinite degeneracy of the ground state (continuous symmetry of spin rotation). This property is known under the name Goldstone theorem, which states that each ordered state resulting from the spontaneous breaking of a continuous symmetry has collective excitations with arbitrarily small (positive) energies. The linear spectrum is normal for collective excitations of this kind; the quadratic spectrum of the ferromagnet is also a Goldstone mode but with different power due to conserved total magnetisation.

![Attachments/Script 82.webp|700](/img/user/Attachments/Script%2082.webp)[[Courses/2. Semester/Solid State Theory/Script.pdf#page=184&rect=211,626,389,759| ]]

These spin excitations show the difference between a band and a Mott insulator very clearly. While in the band insulator both charge and spin excitations have an energy gap and are inert, the Mott insulator has only gapped charge excitations. However, the spin degrees of freedom form a low-energy sector that can even form gapless excitations, as shown above.

---