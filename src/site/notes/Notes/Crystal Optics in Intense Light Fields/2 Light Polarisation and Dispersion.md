---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/2-light-polarisation-and-dispersion/","hide":"true","updated":"2025-05-14T20:59:04.914+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Crystal Optics in Intense Light Fields/2 Light Polarisation and Dispersion#2.1 Jones Vector Formalism\|2.1 Jones Vector Formalism]]
- [[Notes/Crystal Optics in Intense Light Fields/2 Light Polarisation and Dispersion#2.2 Dispersion of Light in Matter\|2.2 Dispersion of Light in Matter]]
- [[Notes/Crystal Optics in Intense Light Fields/2 Light Polarisation and Dispersion#2.3 Classes of Electronic Transitions\|2.3 Classes of Electronic Transitions]]

---
# 2 Light Polarisation and Dispersion
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=19&selection=0,20,0,20|•]]

Light is an electromagnetic wave. Unlike sound waves, which are longitudinal waves, light is therefore a transverse wave. This means that the direction of the field is perpendicular to the direction of propagation (the wavevector). This is covered in more detail in my notes on [[Notes/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1 Electromagnetic Theory of Light\|quantum electronics]]. We start by treating the simplest electromagnetic wave, the plane wave:
$$
\mathbf{E}(\mathbf{r}, t)=\mathbf{E}_{0} e^{i(\omega t-\mathbf{k} \mathbf{r})}
$$
where $\mathbf{E}_{0}$ is orthogonal to $\mathbf{k},$ assuming propagation in an isotropic medium. The magnetic field is not relevant for now, since it is much weaker than the electric field in the medium that we consider. A very fundamental property of transverse waves is polarisation which here refers to the direction of oscillation of the electric field. There are several different ways how to describe the polarisation of light. First we will discuss the very fundamental Jones vector formalism. Later we will proceed to the more advanced Poincaré sphere formalism. This is also treated in [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9 Polarisation Optics\|polarisation optics]]. 

For a plane wave propagating along the $z$-axis, the wave equation in vector form is
$$
\mathbf{E}(\mathbf{r}, t)=\binom{a_{x} e^{i \phi_{x}}}{a_{y} e^{i \phi_{y}}} e^{i(\omega t-\mathbf{k} \mathbf{r})},
$$
where the $z$-component is equal to zero, and has therefore been omitted. The part of the wave oscillating along $x$ - and $y$-direction have individual amplitudes and phase factors. Defining the complex as phase $\varphi,$ and writing in terms of a phase delay $\delta=\phi_y-\phi_x,$ we may also write the individual components as
$$
\begin{aligned}
& E_x=a_x \exp [i \varphi(\bar{v}, t)]\quad\text{and} \\
& E_y=a_y \exp [i(\varphi(\bar{v}, t)-\delta)].
\end{aligned}
$$

---
## 2.1 Jones Vector Formalism
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=19&selection=51,0,51,26|•]]

In the Jones vector formalism, the Jones vector (or polarisation) is defined as
$$
\mathbf{E}_{0} \sim=\binom{a_x e^{i \phi_x}}{a_y e^{i \phi_y}}=e^{i \phi_x}\binom{a_x}{a_y e^{i \delta}} \equiv \mathbf{J},
$$
such that it becomes clear that the polarisation only depends on the phase delay, not on the phases absolute value. This vector completely specifies the polarisation state of the light field at a particular point in space. 

Two states of polarisation are orthogonal if, and only if there Jones vectors are orthogonal
$$
\left\langle\mathbf{J}_{1}, \mathbf{J}_{2}\right\rangle=\left(a_{1 x} e^{i \phi_{1 x}}\right)^*\left(a_{2 x} e^{i \phi_{2 x}}\right)+\left(a_{1 y} e^{i \phi_{1 y}}\right)^*\left(a_{2 y} e^{i \phi_{2 y}}\right)=0.
$$

Two orthogonal Jones vectors form a basis for the polarisation space, such that any polarisation state can be described as a superposition of the two base vectors.

Some common base vectors and examples of orthonormal Jones vectors are:


- Linearly polarised light along the $x$ - and $y$-axis:
	$$\mathbf{J}_{x}=\binom{1}{0} \quad \text{and}\quad\mathbf{J}_{y}=\binom{0}{1}.$$
- Left- and right circular polarisation:
	$$\mathbf{J}_{\sigma^{-}}=\frac{1}{\sqrt{2}}\binom{1}{-i} \quad \text{and}\quad\mathbf{J}_{\sigma^{+}}=\frac{1}{\sqrt{2}}\binom{1}{i}.$$

The Jones vector formalism is fairly useful because actions of devices or materials that alter polarisation may be described by $2 \times 2$ matrices. If $\mathbf{J}_{1}$ is the input polarisation state, then the output state $\mathbf{J_{2}}$ can be written as
$$
\mathbf{J}_{2}=M \mathbf{J}_{1} \quad \text { with } \quad M=\left(\begin{array}{ll}
M_{11} & M_{12} \\
M_{21} & M_{22}
\end{array}\right),
$$
where $M$ is a Jones Matrix. Each optical element is represented by its own Jones matrix. Some examples are:

**Linear polarisers** (here in $x$-direction):
$$
M_{\mathrm{L}}^0=\left(\begin{array}{ll}
1 & 0 \\
0 & 0
\end{array}\right)_x.
$$
**Polarisation rotators** rotate the polarisation of light by an angle $\varphi:$ 
$$
M_\mathrm{L}^\varphi=R(\varphi)M_\mathrm{L}^0R^{-1}(\varphi)\quad\text{with}\quad R(\varphi)=\left(\begin{array}{cc}
\cos \varphi & -\sin \varphi \\
\sin \varphi& \cos \varphi
\end{array}\right).
$$

Then, explicitly, we have a linear polariser under an angle $\varphi:$
$$
\begin{aligned}
M_\mathrm{L}^{\varphi} & =R(\varphi) M_\mathrm{L}^0 R^{-1}(\varphi) \\
& =\left(\begin{array}{cc}
\cos \varphi & -\sin \varphi \\
\sin \varphi & \cos \varphi
\end{array}\right)\left(\begin{array}{ll}
1 & 0 \\
0 & 0
\end{array}\right)\left(\begin{array}{cc}
\cos \varphi & \sin \varphi \\
-\sin \varphi & \cos \varphi
\end{array}\right) \\
& =\left(\begin{array}{cc}
\cos
{ #2}
 \varphi & \sin \varphi \cos \varphi \\
\sin \varphi \cos \varphi & \sin
{ #2}
 \varphi
\end{array}\right)=\frac{1}{2}\left(\begin{array}{cc}
1+\cos 2 \varphi & \sin 2 \varphi \\
\sin 2 \varphi & 1-\cos 2 \varphi
\end{array}\right).
\end{aligned}
$$

This is general, using the rotation matrices, any element can be rotated. The effect of a rotated element on the light may differ significantly with the angle of rotation. 

**Wave plate/retarders** delay one polarisation with respect to the other by a phase $\alpha.$ Consider that the x direction is the fast direction, and that the y-direction obtains a phase shift of $\alpha=\pi.$ This is called a half-wave plate ($\lambda/2$ wave plate). We then find that 
$$
M_{\lambda, 2}^0=\left(\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}\right),
$$

such that a half wave plate introduces a phase shift of $180^{\circ}(\pi)$ between the two polarisations along its two principle axes. Similarly, if $\alpha=\pi/2,$ we call it a quarter-wave plate, and the phase shift introduced is $90^\circ(\pi/2):$ 
$$
M_{\lambda / 4}^0=\left(\begin{array}{cc}
1 & 0 \\
0 & -i
\end{array}\right).
$$

If the wave plate is aligned to the $x$-axis, the light experiences no shift in polarisation:
$$
\implies \mathbf{J}_{2}=T \mathbf{J}_{1}=\left(\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}\right)\binom{1}{0}=\binom{1}{0}.
$$
However, if the wave plate is rotated by an angle of $45^{\circ}$, then the polarisation state is flipped to $y$-polarised light:
$$
\begin{aligned}
T^{\prime} & =R^{-1}\left(45^{\circ}\right) T R\left(45^{\circ}\right)=\left(\begin{array}{ll}
0 & 1 \\
1 & 0
\end{array}\right) \\
\implies \mathbf{J}_{2} & =T^{\prime} \mathbf{J}_{1}=\left(\begin{array}{ll}
0 & 1 \\
1 & 0
\end{array}\right)\binom{1}{0}=\binom{0}{1}
\end{aligned}
$$

A key property of a half-wave plate is the following: If the input is linearly polarised, and the half-wave plate's fast axis is at an angle $\varphi$ to this input polarisation, the output polarisation is rotated by $2\varphi.$ Then, the half-wave plate evidently also acts as a linear polarisation rotator. The general form of a wave retarder, where $x$ is the faster direction, is 
$$
T_{\mathrm{WR}}=\left(\begin{array}{cc}
1 & 0 \\
0 & e^{-i \alpha}
\end{array}\right)_x.
$$
---
## 2.2 Dispersion of Light in Matter
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=35&selection=33,0,33,14|•]]

We now slightly shift the topic to dispersion of light in matter. The amplitude and phase of an electromagnetic wave in a material is generally described as a function of wavelength. In the following, we will treat a crystal lattice as a collection of harmonic oscillators. This is called the **Lorentz model**. For more details on this approach, see this [[Notes/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.1 Origin of Dispersion\|chapter]]. Charge oscillations lead to a polarisation $P(\omega).$ The driving force in the following model is the electromagnetic light wave:

$$
\frac{\partial^2 P}{\partial t^2}+\Gamma \frac{\partial P}{\partial t}+\omega_0^2 P=\frac{N e^2}{m} E,
$$
where the $\Gamma-$term describes dampening, $\omega_0$ is the eigenfrequency of the (unperturbed) system, and $E$ is the driving light field. By Fourier transforming the equation to frequency space, introducing the electric dipole moment $p=qx,$ and rewriting the polarisation as $P=Nqx,$ we will immediately try the solution 
$$
P(\omega)=\varepsilon_0\chi E(\omega)\sim e^{i \omega t}\quad\text{with}\quad\chi=\varepsilon_r-1.
$$
Then, we can show that 
$$
P(\omega)=\frac{N q^2}{m} \frac{1}{\omega_0^2-\omega^2-i \Gamma \omega} E(\omega),\quad\text{such that}\quad\varepsilon(\omega)=1+\underbrace{\frac{N q^2}{\varepsilon_0 m} \frac{1}{\omega_0^2-\omega^2-i \Gamma \omega}}_{\chi(\omega)} .
$$
We call $\chi$ the complex susceptibility. In the case of more than just one optical excitation with eigenfrequencies $\omega_0^i\gg\omega_0$, we must adjust the dispersion relation:
$$
\varepsilon(\omega)=\varepsilon_b+\frac{N q^2}{\varepsilon_0 m} \frac{1}{\omega_0^2-\omega^2-i \Gamma \omega},
$$
where $\varepsilon_b$ takes into account contributions of other resonances far from $\omega_0.$ Introducing the plasma frequency $\omega_p^2=\frac{N q^2}{\varepsilon_0 m},$ and neglecting dampening $\Gamma\approx 0,$ we may also write 
$$
\varepsilon(\omega)=\underbrace{\varepsilon_b+\frac{\omega_p^2}{\omega_0^2-\omega^2}}_{\text {Sellmeyer}}=\underbrace{\frac{\omega_L^2-\omega^2}{\omega_0^2-\omega^2}}_{\text {Kurosawa}}\quad\text{with}\quad \omega_L^2=\omega_0^2+\frac{\omega_p^2}{\varepsilon_b} .
$$
This relation is shown in the following figure:

![Attachments/Script (Unofficial) 1.webp|700](/img/user/Attachments/Script%20(Unofficial)%201.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=37&rect=272,394,433,649|•]]

For $\omega\longrightarrow\omega_0$ there are resonances with $\varepsilon(\omega)\longrightarrow\infty$ and thus also the complex refractive index goes to infinity. The blue curve shows both the transversal (lower) and longitudinal (upper) mode. curve is $\varepsilon(\omega)$. The frequencies $\omega_\perp=\omega_0$ (where $\varepsilon \rightarrow \infty$ if $\Gamma=0$ ) and $\omega_\parallel$ (where $\varepsilon=0$ ) are characteristic frequencies of the transverse and longitudinal optical modes, respectively.The wavevector has the form 
$$
k^2=\frac{\omega^2}{c^2}\varepsilon_b(\omega)\quad\text{and}\quad k^2=\frac{\omega^2}{c^2}\varepsilon_b^\prime(\omega),
$$
for the two dotted lines showing the uncoupled dispersion for photon in the medium. The steeper line corresponds to the first equation, while the less steep curve is the second relation of $k.$ The Lyddane-Sachs-Teller relation allows to calculate the value of $\varepsilon_b^\prime:$ 
$$
\frac{\varepsilon_b}{\varepsilon_b^{\prime}}=\frac{\omega_e^2}{\omega_0^2}.
$$
When light interacts with matter, it induces a polarisation which allows the electromagnetic wave to interact with lattice excitations. Note that longitudinal polarisation is allowed in matter. Longitudinal and transversal polarisation are energetically separated and interact individually with the lattice excitation. We call this the **polariton**, a quasiparticle defined by the continuous conversion between light and matter excitation. In the figure, the horizontal line at $\omega_\parallel$ corresponds to an uncoupled longitudinal excitation, while $\omega_\perp=\omega_0$ corresponds to the uncoupled transversal excitation.

---
## 2.3 Classes of Electronic Transitions 
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=38&selection=2,0,2,39|•]]

To understand matter excitation and their corresponding energies, we introduce three major classes of electronic transitions relevant for crystal optics. All excitations lead to a splitting of the electronic states, thus allowing interactions with electromagnetic waves:
- In **ionic crystals** (or semiconductors) with occupied p and s states, charge excitations between ions happen at energies of 1-10 eV. These crystal possess extended wave functions, such that the global field of crystal atoms splits the ionic wave functions. One such example is the charge transfer $\mathrm{O}^{2-}(2 \mathrm{p}) \rightarrow Z n^{2+}(4 s),$ which splits the $2 \mathrm{p}_{\mathrm{n}}$ and $2 \mathrm{p}_{\mathrm{x}, \mathrm{y}}$ levels.
- **Transition metals** with $3\mathrm{d}^{0<\mathrm{n}<10}$ orbitals are the most common type of material of magnetic order. Their d-d transitions at $\leq$ 10 eV are the lowest. The wave functions are spatially confined, and the local field exerted by the nearest neighbours ('ligands') splits the d-states of the transition metal ion. One example is $\ce{Cr2O3}$ or $\ce{LaMnO3}.$ Note that the local symmetry of $\ce{Cr^3+}$ and $\ce{Mn^3+}$ is octahedral, hence different than the global crystal symmetry. This leads to a splitting of the ten (there are 5 d-orbitals, and we include electron spin) d-orbitals into 4 energetically higher $E_g$ states (high electron density, these orbitals point towards ligands), and 6 lower $T_{2g}$ states (low electron density, the orbitals point between ligands).  
- In **rare earth compounds** with $4\mathrm{f}^{0<n<14}$ orbitals, the orbitals are so close to the nucleus that the atomic wave functions are only weakly perturbed by the ligand and crystal fields. There are groups of narrow lines all across the spectrum. 

---
