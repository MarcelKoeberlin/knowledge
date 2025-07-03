---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/5-nonlinear-optics/","hide":"true","updated":"2025-06-04T15:33:55.624+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#5.1 Microscopy for Nonlinear Optics|5.1 Microscopy for Nonlinear Optics]]
[[#5.2 Wave Equation in Nonlinear Optics|5.2 Wave Equation in Nonlinear Optics]]
[[#5.3 Magnetic SHG in Chromium(III)-Oxide ($\ce{Cr2O3}$)|5.3 Magnetic SHG in Chromium(III)-Oxide]]
[[#5.4 Microscopic Mechanisms of Nonlinear Magneto-optical Processes|5.4 Microscopic Mechanisms of Nonlinear Magneto-optical Processes]]

---
# 5 Nonlinear Optics
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Notes.pdf#page=39| ]] [[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=67&selection=0,0,0,18| ]]

Up so far, we have only treated linear effects. The term linear is with regards to the polarisation of the material depending linearly on the external electric field
$$
P_{i}(\omega)=\varepsilon_{0} \chi_{i j}^{(1)}(\omega) E_{j}(\omega).
$$
However, generally higher order terms are allowed in the above equation, such that the polarisation can be expanded:
$$
\begin{aligned}
P_{i}(\omega) & =\varepsilon_{0} \chi_{i j}^{(1)}(\omega) E_{j}(\omega)+\varepsilon_{0} \chi_{i j k}^{(2)} E_{j} E_{k}+\ldots \\
& =P_{i}^{(1)}(\omega)+P_{i}^{(2)}\left(\omega^{\prime}\right)+\ldots
\end{aligned}
$$

This expansion occurs in the susceptibility tensor, such that higher powers of the electric respectively magnetic field occur. It is important not to confuse this with the $\mathbf{A}^2$ term in the chapter on [[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction\|light-matter interaction]]. The interactions discussed in nonlinear optics still originate from the electric and magnetic dipoles, and from the electric quadrupole, all of which were discussed [[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.2 Multipole Expansion of the Light Field\|here]]. 

When considering $E_{j}=E_{k}$ in the second term of equation of the general polarisation, doubling the electric field leads to four times the polarization, e.g. $2 \mathbf{E} \rightarrow 4 \mathbf{P}$, which is a strictly nonlinear relation. Usually though, these terms are negligible as $P^{(2)}$ is often many orders of magnitude smaller than $P^{(1)}.$ However, in intense light fields such as those of pulsed lasers, this term becomes relevant. For the strongest exciting lasers, we have that $P^{(n)} \simeq P^{(n+1)}$ for high orders. Therefore, in these cases, the expansion becomes obsolete and requires a wholly different theory. Although $P^{(2)}$ may be small in size, it oscillates at a different frequency that the incident ('fundamental') light. Therefore, separation from the background radiation is not necessary. 

Many linear effects have a nonlinear counterpart. As an example, consider the [[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3.1.3 magneto-optic Kerr Effect\|magneto-optic Kerr effect]]: The rotation angle of the polarisation in reflection $\phi_K$  is related to the polarisation of the material $P_K$ (which itself depends on the susceptibility), the magnetic field $H$ and the electric field $E$ by 
$$
\phi_{\mathrm{K}} \sim P_{\mathrm{K}}(\omega) \sim \chi_{\mathrm{K}} H(0) E(\omega) .
$$
The nonlinear complement of MOKE is NOMOKE, where the same effect depends quadratically on the oscillating electric field
$$
\phi_{\mathrm{K}}^{\mathrm{NL}} \sim P_{\mathrm{K}}^{\mathrm{NL}}\left(\omega^{\prime}\right) \sim \chi_{\mathrm{K}}^{\mathrm{NL}} H(0) E(\omega) E(\omega).
$$
Note here that $\phi_{\mathrm{K}}^{\mathrm{NL}}$ is not a real rotation, but instead corresponds to a frequency change.

Another kind of nonlinearity is the quadratic dependence on a static field
$$
\phi_{\mathrm{K}}^{\mathrm{NL}} \sim P_{\mathrm{K}}^{\prime}(\omega) \sim \chi_{\mathrm{K}}^{\prime \mathrm{NL}} H(0) H(0) E(\omega).
$$
Often however, the term 'nonlinear optics' refers to optical nonlinearities, so depending on the oscillating electric field.

---
## 5.1 Microscopy for Nonlinear Optics
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=68&selection=47,0,47,35| ]] 

When discussing [[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.3.1 Microscopy for Linear Optics\|microscopy for linear optics]], we derived an expression for the linear susceptibility $\chi_{ij}(\omega),$ derived from perturbation theory and the density matrix formalism. Most importantly, it includes resonances with quantum harmonic oscillators. A similar equation may be derived for $\chi_{ijk}^{(2)}$ when including higher order terms in the perturbation theory. 

As we have seen, $\chi_{ijk}^{(2)}$ related the electric field to the higher order polarisation $P_{i}^{(2)}\left(\omega_{s}\right)$ via
$$
P_{i}^{(2)}\left(\omega_{s}\right)=\varepsilon_{0} \chi_{i j k}^{(2)}\left(\omega_{s} \equiv \omega_{1}+\omega_{2}\right) E_{j}\left(\omega_{1}\right) E_{k}\left(\omega_{2}\right).
$$
Fortunately, the equation describing the microscopic nonlinear behavior is almost in the same way _intuitive and self explanatory_ (quote: Prof. Fiebig) as the equation for $\chi_{ij}$ was:
$$
\begin{aligned}
\chi_{i j k}^{(2)}\left(\omega_{s}\right)=\frac{\varepsilon_{0} N e^{3}}{\hbar^{2}} \sum_{g \neq n \neq n^{\prime}} & {\left[\frac{\left(r_{i}\right)_{g n}\left(r_{j}\right)_{n n^{\prime}}\left(r_{k}\right)_{n^{\prime} g}}{\left(\omega-\omega_{n g}+i \Gamma_{n g}\right)\left(\omega_{2}-\omega_{n^{\prime} g}+i \Gamma_{n^{\prime} g}\right)}\right.} \\
& +\frac{\left(r_{j}\right)_{g n}\left(r_{k}\right)_{n n^{\prime}}\left(r_{i}\right)_{n^{\prime} g}}{\left(\omega-\omega_{n g}+i \Gamma_{n g}\right)\left(\omega_{1}-\omega_{n^{\prime} g}+i \Gamma_{n^{\prime} g}\right)} \\
& \left.+\frac{\left(r_{k}\right)_{g n^{\prime}}\left(r_{j}\right)_{n^{\prime} n}\left(r_{i}\right)_{n g}}{\left(\omega+\omega_{n g}+i \Gamma_{n g}\right)\left(\omega_{2}+\omega_{n^{\prime} g}+i \Gamma_{n^{\prime} g}\right)}+\text{5 more}\right]\cdot\rho_g^{(0)}.
\end{aligned}
$$
The **first two terms** describe _two photon sum-frequency generation_ (2P-SFG), which can be understood as the simultaneous absorption of two photons from the light fields $E_{j}\left(\omega_{1}\right)$ and $E_{k}\left(\omega_{2}\right),$ that generate a polarisation at the sum frequency (hence the name) $\omega_{s}=\omega_{1}+\omega_{2}$. This polarisation leads to the emission of a photon as $E_{i}\left(\omega_{s}\right)$. These two processes are shown in the following figure:

![Attachments/Script (Unofficial) 6.webp|700](/img/user/Attachments/Script%20(Unofficial)%206.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=69&rect=88,664,307,759| ]]

The process makes use of an intermediate state with which $\omega_{1}$ respectively $\omega_{2}$ resonate. Although it is called an intermediate state and commonly drawn in between the ground and the excited state, the intermediate state is not restricted to lie in between these two. A special case of 2P-SFG is the configuration when $\omega_{1}=\omega_{2} \equiv \omega$. In this case, the two absorbed photons may originate from the same light field $E(\omega)$ and the emitted photon corresponds to the second harmonic of the incident frequency. This special configuration is referred to as second harmonic generation (SHG).

A closer look at the first two terms in the above expression reveals that these contributions are enhanced if
- $\omega_{s}-\omega_{n g} \simeq 0:$ This corresponds to a resonant transition between the states $|n\rangle$ and $|g\rangle$. 
- $\omega_{1}-\omega=\Delta$ for small $\Delta:$ The system is near resonance between the intermediate state $\left|n^{\prime}\right\rangle$ and $|g\rangle$.

Note, that it is obsolete to also include the $\omega_{2}$ resonance with the intermediate state $\left|n^{\prime}\right\rangle$ in the denominator as $\omega_{1}-\omega=\Delta$ implies $\omega_{2}-\omega=-\Delta$. Thus only two denominators denoting resonance are present.

The **third term** as well as the five further terms denote a similar process to 2P-SFG.  Explicitly, these terms describe a two fold emission with a preceding absorption as depicted in the following figure. These terms are highly non resonant and therefore of smaller order of magnitude, than the first two terms.

![Attachments/Script (Unofficial) 7.webp|700](/img/user/Attachments/Script%20(Unofficial)%207.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=69&rect=357,684,439,757| ]]

The equation for $\chi_{i j k}^{(2)}\left(\omega_{s}\right)$ contains even more terms, including large terms, if the conjugate waves $E^{*}(\omega) \sim e^{+i \omega t}$ are taken into account. An example is optical parametric oscillation with $\omega_{p} \rightarrow \omega_{s}+\omega_{i}$.

Higher order terms in the perturbation theory lead to the presence of **third order processes**, where three photons take part in the absorption and emission transitions. A common process which is also experimentally used is the _three photon sum frequency generation_ (3P-SFG). Its theory is similar to  2P-SFG, and quite intuitively understandable: It is mostly used in the configurations where $\omega_{1}=\omega_{2}=\omega_{3} \equiv \omega:$ 

![Attachments/Script (Unofficial) 8.webp|700](/img/user/Attachments/Script%20(Unofficial)%208.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=70&rect=189,680,275,756| ]]

This leads to the generation of a photon at the third harmonic of the incident light wave
$$
P_{i}(3 \omega)=\chi_{i j k l} E_{j}(\omega) E_{k}(\omega) E_{l}(\omega)
$$
It is therefore also referred to as third harmonic generation (THG).

Another allowed process is called three photon difference-frequency generation (3P-DFG):

![Attachments/Script (Unofficial) 9.webp|700](/img/user/Attachments/Script%20(Unofficial)%209.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=70&rect=363,678,460,760| ]]

The emitted photon is generated by the simultaneous absorption and emission, which in sum and difference leads to the correct resonance. Mathematically and for the special case, where the two absorbed photons are of the same frequency, this is expressed by
$$
P_{i}\left(2 \omega_{1}-\omega_{2}\right)=\chi_{i j k l} E_{j}^{*}\left(-\omega_{2}\right) E_{k}\left(\omega_{1}\right) E_{l}\left(\omega_{1}\right) .
$$

For the rest of this course, focus lies on SHG. By the time a theory was derived, the chances of experimentally verification seemed remote. The first experimental demonstration was realised in 1961. About three years after the invention of the laser, a ruby laser was used to observe SHG in quartz. Strangely the actual result - a spot at the second harmonic frequency on a photograph from a spectrometer - was erased by the editor of the paper as he believed to look at photographic noise.

The typical unit for the second order susceptibility is the unit of an inverse electric field pm/V, which is easy to understand when looking at the equations: As the dielectric tensor is dimensionless, the product of second order susceptibility and the electric field has to be dimensionless too:
$$
P=\varepsilon_{0} \cdot\underbrace{\varepsilon}_{\text{dimensionless}} \cdot E \implies P^{(2)}=\varepsilon_{0} \cdot\underbrace{\chi^{(2)} E}_{\text {dimensionless }} \cdot E .
$$

Typical values for $\chi^{(2)}$ lie around 1 to 100 pm/V. In linear optics, often we have $\chi\sim1.$ Note that the electric field can range from $10^6$ V/m (CW HeNe) up to $10^{12}$ V/m (pulsed Ti:Sa).

---
## 5.2 Wave Equation in Nonlinear Optics
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=70&selection=180,0,180,37| ]]

For the further discussion on SHG, we derive the wave equation in a nonlinear medium from the [[Notes/2025 Quantum Electronics/1 Electromagnetic Theory of Light#1.3 The Material Equations\|Maxwell's equations]]:

$$
\begin{aligned}
& 1)&\nabla \times \mathbf{H}=\mathbf{j}_f+\frac{\partial \mathbf{D}}{\partial t}=\mathbf{j}_f+\frac{\partial}{\partial t}\left(\varepsilon_{0} \mathbf{E}+\mathbf{P}-\nabla Q\right), \\
& 2)& \nabla \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}=\mu_{0} \frac{\partial}{\partial t}(\mathbf{H}+\mathbf{M}).
\end{aligned}
$$
Here, the expressions for the displacement field $\mathbf{D}$ and the magnetic flux $\mathbf{B}$ have been replaced by the extended expressions, that include terms for the electric dipole and quadrupole, and magnetic dipole contributions. We will consider electrically neutral insulators, such that we set $\rho \simeq 0, \sigma \simeq 0$. This implies that $\nabla \mathbf{E}=\rho=0$ and $\mathbf{j}=\sigma \mathbf{E}, \sigma=0.$ Therefore, using the second equation, we find
$$
\nabla \times \nabla \times \mathbf{E}=\underbrace{\nabla(\nabla \mathbf{E})}_{=0}-\Delta \mathbf{E}=-\mu_{0} \frac{\partial}{\partial t} \nabla \times(\mathbf{H}+\mathbf{M}).
$$
Then, we may replace $\nabla \times \mathbf{H}$ will be replaced with the first equation, where we will assume for the polarisation (electric dipole moment)
$$
\mathbf{P}  =\mathbf{P}_{\mathrm{L}}+\mathbf{P}_{\mathrm{NL}}=\varepsilon_{0} \chi_{\mathrm{L}}^{e} \mathbf{E}+\varepsilon_{0} \chi_{\mathrm{NL}}^{e} \mathbf{E} \mathbf{E},
$$
the magnetisation (magnetic dipole moment)
$$
\mathbf{M} =\mathbf{M}_{\mathrm{L}}+\mathbf{M}_{\mathrm{NL}}=0+\frac{\varepsilon_{0} c}{n(\omega)} \chi_{\mathrm{NL}}^{m} \mathbf{E} \mathbf{E},
$$
and the electric quadrupole moment $\nabla Q:$
$$
Q  =Q_{\mathrm{L}}+Q_{\mathrm{NL}}=0+\frac{-i c \varepsilon_{0}}{2 \omega n(\omega)} \chi_{\mathrm{NL}}^{q} \mathbf{E} \mathbf{E}.
$$
These forms assume no ferromagnetism ($\mathbf{M}_{\mathrm{L}}=0$), and a negligibly small linear quadrupole contribution ($Q_{\mathrm{L}}=0$). Note that $Q=\hat{Q}_{ij}$ is a rank-2 tensor. Furthermore, for dielectric media in the optical range, it shall be assumed, that $\varepsilon>1$ and $\mu \approx 1$. Then, $\nabla Q$ points along the wavevector $\mathbf{k}.$ 

With this, we arrive at the wave equation:
$$
\Delta \mathbf{E}-\frac{\varepsilon}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \mathbf{E}=\underbrace{\mu_0 \frac{\partial^{2} \mathbf{P}_{\mathrm{NL}}}{\partial t^{2}}}_\text{ED}+\underbrace{\mu_0 \nabla \times \frac{\partial \mathbf{M}_{\mathrm{NL}}}{\partial t}}_\text{MD}-\underbrace{\mu_{0} \frac{\partial^{2}(\nabla Q)}{\partial t^{2}}}_\text{EQ}\equiv \mathbf{S},
$$
which is an inhomogeneous second order differential wave equation with source term
$$
\mathbf{S}=\mu_{0} \frac{\partial^{2} P_{\mathrm{NL}}}{\partial t^{2}}+\mu_{0} \nabla \times \frac{\partial M_{\mathrm{NL}}}{\partial t}-\mu_{0} \frac{\partial^{2}(\nabla Q)}{\partial t^{2}}.
$$
Normally we have that $\mathbf{S}_\text{ED}\gg\mathbf{S}_\text{MD},\mathbf{S}_\text{EQ}.$ However, if $\mathbf{S}_\text{ED}$ is created by magnetic order, we may get that $\mathbf{S}_\text{ED}\text{(mag. induced)}\simeq\mathbf{S}_\text{MD},\mathbf{S}_\text{EQ}\text{(crystallog. induced)}.$ Here, magnetically induced could come from the spin-orbit that couples for coupling light to spins. 

---
## 5.3 Magnetic SHG in Chromium(III)-Oxide ($\ce{Cr2O3}$)
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=72&selection=2,0,3,19| ]]

This chapter will give a detailed analysis of the magnetically introduced second harmonic generation in $\ce{Cr2O3},$ based on the discussion on
- R. R. Birss. Symmetry and Magnetism. North-Holland Pub. Co.. 2nd edition, 1964,
- P. S. Pershan. Phys. Rev., 130,919, (1963), and 
- M. Fiebig et al., Phys. Rev. Lett., 73,2127, (1994).

### 5.3.1 Structure and Symmetry

Chromium(III)-oxide is a compound of a dark green colour with the chemical formula $\mathrm{Cr}_{2} \mathrm{O}_{3}$ which is widely used as a pigment in paints, inks or glasses having the same crystalline structure as corundum. It has a hexagonally close packed structure of oxide anions, with 2 out of 3 of the octahedral holes occupied by chromium. The optical axis of $\mathrm{Cr}_{2} \mathrm{O}_{3}$ corresponds to the trigonal axis. It is a classical antiferromagnet with the Neel temperature of $307.6$ K. Above the Néel temperature, antiferromagnetic media become paramagnetic. The temperature is high enough to destroy the macroscopic magnetic ordering. The spin structure is based on alternate up and down spins of the chromium ions, making two spin configurations possible:

![Attachments/Script (Unofficial) 10.webp|700](/img/user/Attachments/Script%20(Unofficial)%2010.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=73&rect=281,587,426,732| ]]

We call the left configuration the 'plus domain', and the right the 'minus domain'. It is famous for the discovery of the magneto-electric effect, and therefore behaves as

$$
\mathbf{P}=\frac{1}{c} \alpha \mathbf{H} \quad\text{and}\quad \mathbf{M}=\frac{1}{\mu_{0} c} \alpha \mathbf{E} .
$$
We want to know how we can find out which antiferromagnetic structure a certain crystal consists of, and how to visualise domains of either one of the spin configurations. Nonlinear optics, especially second harmonic generation, present a significantly simpler method. An explicit expression for the source term in the wave equation for nonlinear optics will be derived in the upcoming paragraphs.

The whole process of analysing the magnetically introduced SHG in $\mathrm{Cr}_{2} \mathrm{O}_{3}$ begins with symmetry considerations:
- Above the Néel temperature $=$  Paramagnetic phase: $\mathrm{Cr}_{2} \mathrm{O}_{3}$ belongs to the symmetry group $\overline{3} m$ (or $\overline{3}m\underline{1}$ where $\underline{1} \equiv1^\prime$). Due to the inversion symmetry, there is no ED-SHG, but MD/EQ-SHG.
- Below the Néel temperature $=$ Antiferromagnetic phase: Symmetry group $\underline{\overline{3} m}$. The four spins in the unit cell align along the optical axis in a non-centrosymmetric antiferromagnetic structure. Due to the breaking of the inversion symmetry by spin order, magnetically induced ED-SHG is possible.

Space and time reversal symmetry is broken but the combined operation of space and time reversal remains a symmetry operation.

![Attachments/Pasted image 20250527105339.png|700](/img/user/Attachments/Pasted%20image%2020250527105339.png)
_I am not sure about the field with '?'..._

The source term contains electric and magnetic dipole and quadrupole contributions. As discussed, the tensors $\chi_{\mathrm{NL}}^{e}, \chi_{\mathrm{NL}}^{m}$ and $\chi_{\mathrm{NL}}^{q}$ relate the dipole and quadrupole moments to the incident fields. Using Birss symmetry and magnetism, the number of independent tensor components can be easily determined. The symmetry group of antiferromagnetic $\mathrm{Cr}_{2} \mathrm{O}_{3}$ ($\underline{\overline{3} m}$) allows polar c-type and axial i-type contributions of odd rank as well as polar i-type and axial c-type contributions of even rank. 



### 5.3.2 Calculation of Multipole and Source Terms

In the following the source terms for electric dipole, magnetic dipole and electric quadrupole contributions will be calculated for light aligned along the optical axis $\mathbf{k} \| \mathbf{z}.$ Electric field components in the $z$-direction are therefore set to zero, and tensor components denoting a $z$-contribution are not of interest (they may be nonzero, but as the electric field in $z$-direction is zero, they have no influence on the final phenomenology). Furthermore the incident wave is assumed to be monochromatic
$$
\mathbf{E}(\omega) \sim E_{x,y}\sim e^{i(k z-\omega t)}.
$$
Linear effects are ignored, only second harmonic generation is investigated
$$
\mathbf{S}=\mathbf{S}(2 \omega) \sim e^{2 i(k z-\omega t)}.
$$

**Electric Dipole** 
The nonlinear electric dipole contribution to SHG is given from earlier as
$$
\mathbf{P}_{\mathrm{NL}}=\varepsilon_{0} \chi_{\mathrm{NL}}^{e} \mathbf{E} \mathbf{E}
$$
The electric dipole moment as well as the electric field are $\left(\mathrm{1},\mathrm{p},\mathrm{i}\right),$ such the tensor $\chi_{\mathrm{NL}}^{e}$ must be $\left(\mathrm{u},\mathrm{p},\mathrm{i}\right).$ The equation above in general allows both i- and c-type contribution. However, below the Néel temperature (symmetry $\underline{\overline{3} m}$), only c-type polar tensors of odd rank are allowed, as the table above shows. The only nonzero tensor components for this combination are
$$
y y y=-x x y=-x y x=-y x x,
$$
where tensor components including $z$-contributions have been ignored. Therefore the nonlinear electric dipole moment states as
$$
\begin{aligned}
\mathbf{P}_{\mathrm{NL}} =\varepsilon_{0} \chi_{\mathrm{NL}}^{e} \mathbf{E} \mathbf{E}&=\varepsilon_{0}\left(\begin{array}{c}
\chi_{x x y}^{e} E_{x} E_{y}+\chi_{x y x}^{e} E_{y} E_{x} \\
\chi_{y x x}^{e} E_{x} E_{x}+\chi_{y y y}^{e} E_{y} E_{y} \\
0
\end{array}\right) \\
& =\varepsilon_{0}\left(\begin{array}{c}
-2 \chi_{e} E_{x} E_{y} \\
-\chi_{e}\left(E_{x}^{2}-E_{y}^{2}\right) \\
0
\end{array}\right),
\end{aligned}
$$
with $\chi_{e}=\chi_{y y y}^{e}$. The corresponding source term contribution is
$$
\begin{aligned}
S_{\mathrm{ED}}=\mu_{0} \frac{\partial^{2} \mathbf{P}_{\mathrm{NL}}}{\partial t^{2}} & \stackrel{\mathcal{F}}{=}\varepsilon_{0} \mu_{0}(-2 i \omega)^{2}\left(\begin{array}{c}
-2 \chi_{e} E_{x} E_{y} \\
-\chi_{e}\left(E_{x}^{2}-E_{y}^{2}\right) \\
0
\end{array}\right) \\
& =4 \frac{\omega^{2}}{c^{2}}\left(\begin{array}{c}
2 \chi_{e} E_{x} E_{y} \\
\chi_{e}\left(E_{x}^{2}-E_{y}^{2}\right) \\
0
\end{array}\right).
\end{aligned}
$$

**Magnetic Dipole** 
The nonlinear magnetic dipole moment if governed by
$$
\mathbf{M}_{\mathrm{NL}}=\frac{\varepsilon_{0} c}{n(\omega)} \chi_{\mathrm{NL}}^{m} \mathbf{E} \mathbf{E}.
$$

Since the magnetisation is $\left(\mathrm{1},\mathrm{a},\mathrm{c}\right),$ the tensor $\chi_{\mathrm{NL}}^{m}$ has to be an odd rank axial tensor $\left(\mathrm{u},\mathrm{a},\mathrm{i}\right).$ As we can see from the table, only such tensors of i-type are allowed, which leads to the same nonzero tensor components as for the electric dipole. The magnetic dipole moment therefore is
$$
M_{\mathrm{NL}}=\frac{\varepsilon_{0} c}{n(\omega)} \chi_{\mathrm{NL}}^{m} \mathbf{E} \mathbf{E}=\frac{\varepsilon_{0} c}{n(\omega)}\left(\begin{array}{c}
-2 \chi_{m} E_{x} E_{y} \\
-\chi_{m}\left(E_{x}^{2}-E_{y}^{2}\right) \\
0
\end{array}\right),
$$
with $\chi_{m}=\chi_{y y y}^{m} \neq \chi_{y y y}^{e}$. The corresponding source term derives as
$$
\begin{aligned}
S_{\mathrm{MD}}=\mu_{0} \mathbf{\nabla} \times \frac{\partial \mathbf{M}_{\mathrm{NL}}}{\partial t} & \stackrel{\mathcal{F}}{=}\frac{\mu_{0} \varepsilon_{0} c}{n(\omega)}(-2 i \omega)\left(\begin{array}{c}
\frac{\partial}{\partial x} \\
\frac{\partial}{\partial y} \\
\frac{\partial}{\partial z}
\end{array}\right) \times\left(\begin{array}{c}
-2 \chi_{m} E_{x} E_{y} \\
-\chi_{m}\left(E_{x}^{2}-E_{y}^{2}\right) \\
0
\end{array}\right) \\
& =4 \frac{\omega^{2}}{c^{2}}\left(\begin{array}{c}
\chi_{m}\left(E_{x}^{2}-E_{y}^{2}\right) \\
-2 \chi_{m} E_{x} E_{y} \\
0
\end{array}\right).
\end{aligned}
$$

**Electric Quadrupole**
The nonlinear electric quadrupole contribution to SHG is
$$
\mathbf{\nabla} Q_{\mathrm{NL}}=\frac{-i c \varepsilon_{0}}{2 \omega n(\omega)} \underbrace{\left(\nabla\hat{\mathbf{k}}\right)}_{\nabla_z} \chi_{\mathrm{NL}}^{q} \mathbf{E} \mathbf{E}.
$$
Since the quadrupole moment $Q_{\mathrm{NL}}$ is $\left(\mathrm{2},\mathrm{p},\mathrm{?}\right),$ the relevant tensor $\chi_{\mathrm{NL}}^{q}$ has to be $\left(\mathrm{4},\mathrm{p},\mathrm{c}\right),$ since ranks add in multiplication. Only i-type contributions are allowed, such that 
$$
\mathbf{\nabla} Q_{\mathrm{NL}}=\frac{-i c \varepsilon_{0}}{2 \omega n(\omega)}\left(\begin{array}{c}
\chi_{q}\left(E_{x}^{2}-E_{y}^{2}\right) \\
-2 \chi_{q} E_{x} E_{y} \\
\chi_{q}^{\prime}\left(E_{x}^{2}+E_{y}^{2}\right)
\end{array}\right),
$$
where $\chi_{q}$ and $\chi_{q}^{\prime}$ are the only independent nonzero components of the tensor. Note, that in this case, tensor component with $z$ contributions may not be ignored. The partial derivative with respect to $z$ from the $\mathbf{\nabla}$-operator may yield a nonzero term. The electric quadrupole source term contributes as
$$
S_{\mathrm{EQ}}=-\mu_{0} \frac{\partial^{2} \mathbf{\nabla} Q_{\mathrm{NL}}}{\partial t^{2}}\stackrel{\mathcal{F}}{=}4 \frac{\omega^{2}}{c^{2}}\left(\begin{array}{c}
\chi_{q}\left(E_{x}^{2}-E_{y}^{2}\right) \\
-2 \chi_{q} E_{x} E_{y} \\
\chi_{q}^{\prime}\left(E_{x}^{2}+E_{y}^{2}\right)
\end{array}\right).
$$


**Complete Source Term** 
The combination of the derivations above lead to the complete source term
$$
\begin{aligned}
S & =S_{\mathrm{ED}}+S_{\mathrm{MD}}+S_{\mathrm{EQ}} \\
& =\mu_{0} \frac{\partial^{2} \mathbf{P}_{\mathrm{NL}}}{\partial t^{2}}+\mu_{0} \mathbf{\nabla} \times \frac{\partial \mathbf{M}_{\mathrm{NL}}}{\partial t}-\mu_{0} \frac{\partial^{2} \mathbf{\nabla} Q_{\mathrm{NL}}}{\partial t^{2}} \\
& =4 \frac{\omega^{2}}{c^{2}}\left(\begin{array}{c}
2 \chi_{e} E_{x} E_{y}+\left(\chi_{m}+\chi_{q}\right)\left(E_{x}^{2}-E_{y}^{2}\right) \\
\chi_{e}\left(E_{x}^{2}-E_{y}^{2}\right)-2\left(\chi_{m}+\chi_{q}\right) E_{x} E_{y} \\
\chi_{q}^{\prime}\left(E_{x}^{2}+E_{y}^{2}\right)
\end{array}\right).
\end{aligned}
$$

The $z$-component of light introduced by this source term is essentially invisible, as the wave vector is chosen to point in this direction. Furthermore, there is no possibility to separate the magnetic dipole contribution from the electric quadrupole contribution: It is impossible to tell whether the electric quadrupole or the magnetic dipole has a higher influence on SHG.

### 5.3.3 Intensity of SHG Light

When omitting the $z$-component in the source term above, only the perpendicular components are left
$$
S_{\perp}=4 \frac{\omega^{2}}{c^{2}}\left(\begin{array}{c}
2 \chi_{e} E_{x} E_{y}+\chi_{m q}\left(E_{x}^{2}-E_{y}^{2}\right) \\
\chi_{e}\left(E_{x}^{2}-E_{y}^{2}\right)-2 \chi_{m q} E_{x} E_{y} \\
0
\end{array}\right),
$$
where $\chi_{m q}=\left(\chi_{m}+\chi_{q}\right)$. The intensity of the SHG light is proportional to the absolute square of this source term $I_{\mathrm{SHG}}=\left|S_{\perp}\right|^{2}$. A transformation to a circular polarised basis (eigenstates) simplifies the analysis


$$
\begin{aligned}
&\hat{e}_{\pm}=\mp\frac{1}{\sqrt{2}}\left(\hat{e}_x\pm i \hat{e}_y\right) &\implies& E_{\pm}=\frac{1}{\sqrt{2}}\left(\mp E_x+i E_y\right),\\
&\hat{e}_0=\hat{e}_z&\implies& E_0=E_z.
\end{aligned}
$$
Then, we have
$$
E=E_x \hat{e}_x+E_y \hat{e}_y+E_z \hat{e}_z=E_x \hat{e}_x+E_{-} \hat{e}_{-}+E_0 \hat{e}_0.
$$
With this, we can calculate (in the $+-0$ basis)
$$
\begin{aligned}
\quad S_{\perp}=4 \sqrt{2} \frac{\omega^{2}}{c^{2}}\left(\begin{array}{c}
\left(-\chi_{m q}+i \chi_{e}\right) E_{-} E_{-} \\
\left(\chi_{m q}+i \chi_{e}\right) E_{+} E_{+} \\
0
\end{array}\right).
\end{aligned}
$$
Continuing, the SHG  intensity scales as
$$
\begin{aligned}
\left|I_{\mathrm{SHG}}\right| \sim & \frac{\left|S_{\perp}\right|^{2}}{32 \frac{\omega^{4}}{c^{4}}} \\
= & \left|\left(-\chi_{m q}+i \chi_{e}\right) E_{-} E_{-}\right|^{2}+\left|\left(\chi_{m q}+i \chi_{e}\right) E_{+} E_{+}\right|^{2} \\
= & \left|E_{-}\right|^{4}\left(\left|\chi_{m q}\right|^{2}+\left|\chi_{e}\right|^{2}-2 \mathfrak{Re}\left(i \chi_{m q} \chi_{e}^{*}\right)\right) \\
& +\left|E_{+}\right|^{4}\left(\left|\chi_{m q}\right|^{2}+\left|\chi_{e}\right|^{2}+2 \mathfrak{Re}\left(i \chi_{m q} \chi_{e}^{*}\right)\right) \\
= & \left(\left|\chi_{m q}\right|^{2}+\left|\chi_{e}\right|^{2}\right)\left(\left|E_{-}\right|^{4}+\left|E_{+}\right|^{4}\right) \\
& +2\left(\chi_{m q}^{\prime} \chi_{e}^{\prime \prime}-\chi_{m q}^{\prime \prime} \chi_{e}^{\prime}\right)\left(\left|E_{-}\right|^{4}-\left|E_{+}\right|^{4}\right).
\end{aligned}
$$
with $\chi=\chi^{\prime}+i \chi^{\prime \prime}.$ This expression governs SHG light intensity which is to be expected from $\mathrm{Cr}_{2} \mathrm{O}_{3}$.

We have seen that below the Néel temperature, $\mathrm{Cr}_{2} \mathrm{O}_{3}$ exists in two different antiferromagnetic phases which form domains in the crystal: Let these domains be denoted by $l_{ \pm}= \pm 1$. From the figure showing the spin configuration, it is obvious that the time reversal operations transfers from the $l_{+}$to the $l_{-}$domain and vice versa. To understand the behaviour of light in either one of these domains, one has to analyse the behaviour of $|I_\text{SHG}|$ under temporal inversion.

By definition, the i-type susceptibility tensors for the magnetic dipole and electric quadrupole contributions are unaffected by time reversal. However, the electric dipole susceptibility though $\chi_{e}$ is of c-type and inverts the sign. As time reversal corresponds to changing to the other antiferromagnetic domain, one may write
$$
\chi_{e}\left(l_{+}\right)=\underline{1} \chi_{e}\left(l_{-}\right)=-\chi_{e}\left(l_{+}\right) .
$$
We will consider purely circularly polarised light, such that $E_\pm=E$ and $E_\mp=0.$ Let the circular polarization state of light be denoted by $\sigma_{ \pm}= \pm 1$. We can then rewrite the SHG intensity into a form depending on the circular polarization state $\sigma_{ \pm}$and the domain $l_{ \pm}:$
$$
\frac{I_{\mathrm{SHG}}}{I_{0}}  =C-\operatorname{sgn}(\sigma) \operatorname{sgn}(l) \Delta, 
$$
with 
- Incoherent term: 
	$$C  =\left|\chi_{m q}\right|^{2}+\left|\chi_{e}\right|^{2}.$$
	Always positive and domain-independent.
- Interference term:
	$$\Delta  =2\left(\chi_{m q}^{\prime} \chi_{e}^{\prime \prime}-\chi_{m q}^{\prime \prime} \chi_{e}^{\prime}\right)$$
	This term is positive or negative depending on the domain.

From the last equation it becomes clear that the SHG light intensity changes either on domain change, or on changing the circular polarisation state. We expect no change upon changing both domain and polarisation. The two types of domains should therefore reveal the same SHG spectra, but with a reversed dependence on the circular polarisation.

### 5.3.4 Experiment

The experiment to investigate the antiferromagnetic domains in $\mathrm{Cr}_{2} \mathrm{O}_{3}$ with SHG light was first realised in 1995: An infrared beam generated by a frequency-tripled Nd:YAG laser and an optical parametric oscillator is pointed onto the sample. The state of polarization is set with a quarter waveplate. The second harmonic light of the sample is captured by a nitrogen cooled CCD camera. As the Néel temperature of $\mathrm{Cr}_{2} \mathrm{O}_{3}$ is above room temperature, there is no need to control the temperature of the sample.

The following figure shows the sample with the polarisation altered from right circular polarised (a) to left circular polarised (b). The derived intensity relation is verified: There is a clear contrast between the domains, and altering the polarisation inverts the image.

![Attachments/Script (Unofficial) 11.webp|700](/img/user/Attachments/Script%20(Unofficial)%2011.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=78&rect=201,342,454,629| ]]

---
## 5.4 Microscopic Mechanisms of Nonlinear Magneto-optical Processes
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=79&selection=2,0,3,9| ]]

The observations of SHG in $\mathrm{Cr}_{2} \mathrm{O}_{3}$ discussed in the [[#5.3 Magnetic SHG in Chromium(III)-Oxide ($ ce{Cr2O3}$)|previous section]] require coupling of the light field and magnetism at a microscopic level. Explaining the nonreciprocal optical effects in $\mathrm{Cr}_{2} \mathrm{O}_{3}$ on a microscopic level is not trivial and requires the interplay of spin-orbit coupling and a trigonal distortion in the crystal lattice, leading to a ligand field contribution.

The outermost electrons of the $\mathrm{Cr}^{3+}$ ion occupy the $3d$ orbitals. The crystal field due to the surrounding oxygen ions splits this five-fold degenerate $3d$ orbital into two sets of levels: the triply degenerate lower $t_{2g}$ levels (typically $d_{xy}, d_{yz}, d_{zx}$) and the doubly degenerate upper $e_g$ levels (typically $d_{x^2-y^2}, d_{z^2}$). In the ground state of $\mathrm{Cr}^{3+}$ in an octahedral environment, the $t_{2g}$ states are occupied by three electrons, and the $e_g$ states are empty. SHG in $\mathrm{Cr}_{2} \mathrm{O}_{3}$ can be triggered by the absorption of two photons by the $\mathrm{Cr}^{3+}$ ion. The ion can be excited, for instance, to a configuration like $(t_{2g})^2 e_g$ by two consecutive electric dipole transitions, corresponding to an $\mathbf{r} \cdot \mathbf{E}$ term in the interaction Hamiltonian. A contribution to the electric susceptibility $\chi_{e}^{(2)}$ results from an electric dipole relaxation process. Accordingly, a contribution to the magnetic susceptibility $\chi_{m}^{(2)}$ results from a magnetic dipole relaxation process, which corresponds to an $\mathbf{L} \cdot \mathbf{B}$ term in the Hamiltonian.

Previously, the microscopic expression for the second-order susceptibility tensor $\chi^{(2)}$, responsible for the electric dipole contribution to SHG, has been presented. The resonant contributions, for instance to the electric susceptibility, may be written as:
$$
\chi_{e}^{(2)} \sim \sum_{f,i} \frac{\langle g| e\mathbf{r}|f\rangle\langle f| e\mathbf{r}|i\rangle\langle i| e\mathbf{r}|g\rangle}{\left(E_{f}-E_{g}-2\hbar\omega\right)\left(E_{i}-E_{g}-\hbar\omega\right)} + \text{other permutations}
$$
where $\langle n| e\mathbf{r}|m\rangle$ describes an electric dipole transition matrix element between state $|m\rangle$ and state $|n\rangle$ with energies $E_m$ and $E_n$ respectively. The sum is over all possible excited states $|f\rangle$ and intermediate states $|i\rangle$. Resonance occurs when the denominators approach zero, for example, $E_{f}-E_{g} \approx 2\hbar\omega$ or $E_{i}-E_{g} \approx \hbar\omega$. In the further analysis, the sum and the resonance denominators will often be omitted for clarity, and the electric field $\mathbf{E}$ and magnetic field $\mathbf{B}$ vectors may be implicitly assumed.

For understanding the origin of the electric dipole transition, consider a simplified model involving specific $d$ orbitals of a $\mathrm{Cr}^{3+}$ ion. For instance, let the ground state $|g\rangle$ be related to $d_{xy}$ orbitals and an excited state $|f\rangle$ be related to $d_{x^2-y^2}$ orbitals. The SHG polarisation would then involve terms like:
$$
\mathbf{P}(2\omega) \sim \langle g | e\mathbf{r} | f \rangle \langle f | e\mathbf{r} | i \rangle \langle i | e\mathbf{r} | g \rangle.
$$

Two crucial perturbations enable and modify these SHG processes:

1.  **Spin-orbit coupling** allows the light to couple to the magnetic state of the material. The contribution to the interaction Hamiltonian is usually written as:
    $$H_{SO}=\tilde{\lambda} \mathbf{L} \cdot \mathbf{S}$$
    where $\tilde{\lambda}$ is a proportionality factor (the spin-orbit coupling constant). This interaction mixes electronic states, for example, different $d$-orbitals like $t_{2g}$ and $e_g$ states. A matrix element for this mixing could be $\tilde{\lambda}\left\langle d_{xy}\right| \mathbf{L} \cdot \mathbf{S}\left|d_{x^{2}-y^{2}}\right\rangle \sim \lambda_{SO}\left\langle S_{z}\right\rangle$, where $\lambda_{SO}$ is related to $\tilde{\lambda}$ and $\langle S_z \rangle$ is the expectation value of the spin component along the quantisation axis (the $c$-axis in $\mathrm{Cr_2O_3}$, so $\mathbf{S} = S_z \mathbf{e}_z$).

2.  **Ligand field contribution (trigonal distortion)**: The local environment of the $\mathrm{Cr}^{3+}$ ions in $\mathrm{Cr_2O_3}$ is not perfectly octahedral but exhibits a trigonal distortion. This distortion provides an additional term in the crystal field Hamiltonian, $H_{CF}$. This trigonal crystal field distortion breaks inversion symmetry locally and can mix orbitals of different parity, for instance, $3d$ and $4p$ orbitals of the $\mathrm{Cr}^{3+}$ ion. A matrix element for this mixing might be represented as $\left\langle p_{x}+p_{y}\right| H_{CF} \left|d_{x y}\right\rangle \sim \eta_{CF}$, where $\eta_{CF}$ characterises the strength of this parity-mixing interaction.

The spin-orbit interaction and the trigonal distortion in the ligand field are treated as perturbations to the $3d$ states of the $\mathrm{Cr}^{3+}$ ion. The local eigenstates of the chromium ion may then be written in first-order perturbation theory. For example, a nominal $d_{xy}$ state becomes:
$$
\left|\tilde{d}_{x y}\right\rangle \approx \left|d_{x y}\right\rangle + c_1 \lambda_{SO}\left\langle S_{z}\right\rangle\left|d_{x^{2}-y^{2}}\right\rangle + c_2 \eta_{CF}\left|p_{x}+p_{y}\right\rangle + \ldots
$$
and similarly for $\left|\tilde{d}_{x^{2}-y^{2}}\right\rangle$:
$$
\left|\tilde{d}_{x^{2}-y^{2}}\right\rangle \approx \left|d_{x^{2}-y^{2}}\right\rangle - c_1 \lambda_{SO}\left\langle S_{z}\right\rangle\left|d_{x y}\right\rangle + c_3 \eta_{CF}\left|p_{x}+p_{y}\right\rangle + \ldots
$$
where $c_1, c_2, c_3$ are coefficients derived from perturbation theory (involving energy denominators). For simplicity in the following, we will use generic coefficients $\lambda$ and $\eta$ to represent the effective strengths of these mixed-in components.

These perturbed $d$-eigenfunctions are then used in the expression for the SHG polarisation, which, omitting the energy denominators and summation for brevity, is proportional to:
$$
\mathbf{P}(2 \omega) \sim \left\langle\tilde{g}\right| e\mathbf{r}\left|\tilde{f}\right\rangle\left\langle\tilde{f}\right| e\mathbf{r}\left|\tilde{i}\right\rangle\langle \tilde{i}| e\mathbf{r}\left|\tilde{g}\right\rangle
$$
Expansion of $\mathbf{P}(2\omega)$ in powers of the perturbation strengths (represented by $\lambda$ for spin-orbit effects and $\eta$ for trigonal distortion/parity-mixing effects) yields several terms. The key contributions are:

-   The $\sim \lambda^{0} \eta^{0}$ contribution (unperturbed system): This term vanishes. If $|g\rangle, |f\rangle, |i\rangle$ are all pure $d$-orbitals, they have the same (even) parity. Electric dipole transitions $e\mathbf{r}$ require a change in parity. Thus, matrix elements like $\langle d|e\mathbf{r}|d \rangle$ are zero, making the entire three-product term zero.
-   The $\sim \lambda^{1} \eta^{0}$ term (only spin-orbit interaction): Spin-orbit coupling primarily mixes states of the same parity (like $d$-orbitals with other $d$-orbitals). Therefore, even with spin-orbit mixing among $d$-states, the states retain definite (even) parity, and the electric dipole SHG process remains forbidden for the same reason as above. This term vanishes.
-   The $\sim \lambda^{0} \eta^{1}$ term (only trigonal distortion): This term is proportional to $\eta$. The trigonal distortion mixes $p$-orbitals (odd parity) into the $d$-orbitals (even parity). This allows for non-zero electric dipole matrix elements like $\langle d|e\mathbf{r}|p\rangle$. A possible SHG contribution could be schematically:
    $$
    \mathbf{P}_{01}(2 \omega) \sim \eta \left\langle d_{xy}\right| e\mathbf{r}\left|p_{x}+p_{y}\right\rangle \left\langle d_{x^{2}-y^{2}}\right| e\mathbf{r}\left|i\right\rangle \langle i| e\mathbf{r}\left|d_{xy}\right\rangle
    $$
    This term can be locally non-zero at each $\mathrm{Cr}^{3+}$ site. However, in $\mathrm{Cr_2O_3}$, there are four $\mathrm{Cr}^{3+}$ ions per crystallographic unit cell, arranged in an antiferromagnetic structure with spins pointing along $\pm c$. The trigonal distortion (and thus the sign of the admixed $p$-orbitals) can have opposite signs for ions on different sublattices (related by inversion symmetry). If the contributions from these sites have opposite signs and equal magnitude, they cancel when summed over the unit cell: $\sum_{\mathrm{unit~cell}} \mathbf{P}_{01}(2 \omega) \approx 0$.
-   The $\sim \lambda^{1} \eta^{1}$ contribution (interplay of spin-orbit coupling and trigonal distortion): This term is proportional to $\lambda\eta$. The corresponding mathematical expression involves both the spin-dependent mixing ($\lambda \langle S_z \rangle$) and the parity-breaking mixing ($\eta |p\rangle$):
    $$
    \mathbf{P}_{11}(2 \omega) \sim \eta \lambda \left\langle S_{z}\right\rangle \left\langle d_{x^{2}-y^{2}}\right| e\mathbf{r}\left|p_{x}+p_{y}\right\rangle \left\langle d_{x^{2}-y^{2}}\right| e\mathbf{r}\left|i\right\rangle \langle i| e\mathbf{r}\left|d_{xy}\right\rangle
    $$
    Crucially, $\langle S_z \rangle$ changes sign for ions on time-reversed sublattices (spin $\uparrow$ vs. spin $\downarrow$). If the effective sign of the $\eta$-related matrix elements also changes sign appropriately between these sublattices, the product $\langle S_z \rangle \times (\eta\text{-part})$ can have the *same* sign for all magnetic sublattices. Summing over the unit cell then leads to a net non-zero polarisation that is proportional to the antiferromagnetic order parameter $L_z = (S_1 - S_2 + S_3 - S_4)_z$:
    $$
    \mathbf{P}(2 \omega) \sim \lambda \eta \langle L_z \rangle \tilde{\chi}_{e, \text{eff}}^{(2)} \mathbf{E}(\omega) \mathbf{E}(\omega)
    $$
    where the electric field has been reintroduced, and $\tilde{\chi}_{e, \text{eff}}^{(2)}$ represents the purely electronic part of the susceptibility composed of the relevant matrix elements like $\left\langle d_{x^{2}-y^{2}}\right| e\mathbf{r}\left|p_{x}+p_{y}\right\rangle \ldots$.

It is clear that the interplay between spin-orbit interaction (coupling to magnetism) and local symmetry breaking due to the trigonal field distortion (allowing ED transitions) is required to explain this type of SHG in $\mathrm{Cr_2O_3}$. The observed effect generates an electric dipole polarisation $\mathbf{P}(2\omega)$, but because its existence is tied to the antiferromagnetic order parameter $\langle L_z \rangle$ (which is time-odd), this contribution to $\chi_e^{(2)}$ is c-type (it changes sign under time reversal). Although electric dipole contributions are typically much larger than magnetic dipole contributions, in this specific case, the c-type electric dipole SHG and i-type magnetic dipole SHG can be of comparable magnitude. An estimate for the ratio of the effective electric to magnetic susceptibilities is given by:
$$
\frac{\chi_{e}^{(2)}(\text{c-type})}{\chi_{m}^{(2)}(\text{i-type})} \simeq 4 \frac{\lambda_{light}}{a_{0}} \frac{\lambda_{SO}}{\hbar\left(\omega_{e_g}-\omega_{t_{2g}}\right)} \frac{\eta_{CF}}{\hbar\left(\omega_{p}-\omega_{d}\right)} \Delta(T) \simeq 1.6
$$
The factor of 4 accounts for the four $\mathrm{Cr}^{3+}$ ions per unit cell. The meanings of the other terms and their approximate values are stated below:

| Symbol                      | Description                                   | Value                                      |
| :-------------------------- | :-------------------------------------------- | :----------------------------------------- |
| $\lambda_{light}$           | Wavelength of emitted light                   | $5000 \mathrm{~Å}$                         |
| $a_0$                       | Ionic radius of $\mathrm{Cr}^{3+}$            | $0.69 \mathrm{~Å}$                         |
| $\lambda_{SO}$              | Spin-orbit interaction energy                 | $100 \mathrm{~cm}^{-1}$                    |
| $\eta_{CF}$                 | Trigonal crystal field interaction energy     | $350 \mathrm{~cm}^{-1}$                    |
| $\omega_{e_g}-\omega_{t_{2g}}$ | Octahedral $3d$ orbital energy splitting   | $17^{\prime}000-20^{\prime}000 \mathrm{~cm}^{-1}$ (typical range for $10Dq$) |
| $\omega_p-\omega_d$         | Energy difference between $4p$ and $3d$ states | $\sim 80^{\prime}000 \mathrm{~cm}^{-1}$    |
| $\Delta(T)$                 | Normalised antiferromagnetic order parameter  | $\approx 1$ (for $T \ll T_N$)              |

---