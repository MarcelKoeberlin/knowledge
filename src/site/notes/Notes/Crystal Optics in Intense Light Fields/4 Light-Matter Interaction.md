---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/4-light-matter-interaction/","hide":"true","updated":"2025-05-27T15:30:22.000+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.1 Describing the Light Field\|4.1 Describing the Light Field]]
- [[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.2 Multipole Expansion of the Light Field\|4.2 Multipole Expansion of the Light Field]]
- [[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.3 Microscopic Approach to Magneto-Optics\|4.3 Microscopic Approach to Magneto-Optics]]

---
# 4 Light Matter Interaction
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=53&selection=157,0,157,28|•]]

To investigate light matter interaction properly, a quantum mechanical treatment is necessary. We describe the undisturbed physical system by a vector space of mutually orthogonal eigenstates $\Psi(\mathbf{r})\equiv|n\rangle.$ Then, their energy is 
$$
\hat{\mathrm{H}}_{0}|n\rangle=\epsilon_{n}|n\rangle.
$$
The probability distribution of the system follows
$$
\begin{aligned}
 \\
& \int \Psi_{n}^{*}(\mathbf{r}) \hat{\mathrm{H}}_{0} \Psi_{n^{\prime}}(\mathbf{r}) \mathrm{d}^{3} \mathbf{r} \equiv\langle n| \hat{\mathrm{H}}_{0}\left|n^{\prime}\right\rangle=\epsilon_{n^{\prime}} \delta_{n, n^{\prime}} . &
\end{aligned}
$$
The last equation indicates, that a transfer between a ground state $|g\rangle$ and a final state $|f\rangle$ is not possible in an unperturbed system due to energy conservation $\langle f \mid g\rangle=0$. However, if the system experiences a small perturbation providing energy, the transition becomes possible. This perturbation is added to the Hamiltonian as an interaction term $\hat{\mathrm{H}}_{\text {int }}:$
$$
\hat{\mathrm{H}}=\hat{\mathrm{H}}_{0}+\hat{\mathrm{H}}_\text{int}=\frac{\mathbf{p}^{2}}{2 m}+V(\mathbf{r})+\hat{\mathrm{H}}_\text{int}
$$
This interaction term mixes the $|n\rangle$ states, creating new eigenstates. This mixing, or energy correction, is parameterised by
$$
\int \Phi_{n}^{*}(\mathbf{r}) \hat{\mathrm{H}}_\text{int} \Phi_{n^{\prime}}(\mathbf{r}) \mathrm{d}^{3} \mathbf{r} \equiv\langle n| \hat{\mathrm{H}}_\text{int}\left|n^{\prime}\right\rangle \quad\text{generally non-diagonal}.
$$
Now, the transition $|g\rangle \implies|f\rangle$ becomes evidently possible. 

## 4.1 Describing the Light Field

So far, all the physics was treated classically, such that perturbations lead to forces, which lead to equations of motions.We will continue the description in terms of generalised space and momentum coordinates, so we use Lagrangian mechanics. This approach reflects the formal nature of classical mechanics, while anticipating quantum mechanics. The general formalism then allows to write without loss of generality
$$
\dot{r}_{i}=\frac{\partial \hat{\mathrm{H}}}{\partial p_{i}} \quad\text{and}\quad \dot{p}_{i}=-\frac{\partial \hat{\mathrm{H}}}{\partial r_{i}},
$$
for $i=x,y,z\ldots$ This then allows to derive the equation of motion seen earlier. Note that the potential term in $\hat{\mathrm{H}}=\hat{\mathrm{H}}_\text{kin}+\hat{\mathrm{V}}(\mathbf{r})$ is not universal, as a constant term may be added without changing the physics. The potential therefore requires a gauge, typically chosen with respect to the infinity limit, so $\lim\limits_{r \rightarrow \infty} V(\mathbf{r})=0 \implies V_{0}=0$. 

Let us consider now charged particles moving in an electromagnetic field. The _educated_ guess that we make (for a derivation without guessing, see [[Notes/Quantum Optics/Quantum Optics\|Quantum Optics]]) for the Hamiltonian is 
$$
\hat{\mathrm{H}}=\frac{(\mathbf{p}-e \mathbf{A})^{2}}{2 m}+e \Phi,
$$
where $\Phi$ describes the Coulomb potential of the medium, and $\mathbf{A}$ is the electromagnetic field potential accounting for the field. Generally, the potential is only a function of position and not of momentum. The relations between potentials and fields are 
$$
\begin{aligned}
 \mathbf{B}=&\mathbf{\nabla} \times \mathbf{A} &\text{and}\quad&
 \mathbf{E}&=&-\mathbf{\nabla} \Phi-\frac{\partial \mathbf{A}}{\partial t}, \\
 \implies  \mathbf{\nabla}\cdot \mathbf{B}=&\mathbf{\nabla}\cdot(\mathbf{\nabla} \times \mathbf{A})=0 &\text{and}\quad&\mathbf{\nabla} \times \mathbf{E}&=&-\frac{\partial}{\partial t} \mathbf{B}.
\end{aligned}
$$
As before, the potentials are defined up to a constant. A specific transformation that does not change the physics is 
$$
\mathbf{A} \longrightarrow \mathbf{A}+\mathbf{\nabla} \chi \quad\text{and}\quad \Phi \longrightarrow \Phi-\frac{\partial \chi}{\partial t}.
$$
The required gauge should be chosen as useful as possible. The equations of motion can then be derived as before:
$$
\begin{aligned}
\dot{r}_{i} & = \frac{\partial \hat{\mathrm{H}}}{\partial p_{i}} = \frac{1}{m}\left(p_{i}-e A_{i}\right), \\
\dot{p}_{i} & = -\frac{\partial \hat{\mathrm{H}}}{\partial r_{i}} = \frac{1}{m}(\mathbf{p}-e \mathbf{A}) e \frac{\partial \mathbf{A}}{\partial r_{i}} - e \frac{\partial \Phi}{\partial r_{i}} \\
   & = e \sum_{j} \dot{r}_{j} \frac{\partial A_{j}}{\partial r_{i}} - e \frac{\partial \Phi}{\partial r_{i}}.
\end{aligned}
$$
This leads to 
$$
\begin{aligned}
m \ddot{r}_{i} & =\dot{p}_{i}-e \frac{\partial A_{i}}{\partial t}-e \sum_{j} \dot{r}_{j} \frac{\partial A_{i}}{\partial r_{j}} \\
& =\sum_{j} \dot{r}_{j} e \frac{\partial A_{j}}{\partial r_{i}}-e \frac{\partial \Phi}{\partial r_{i}}-e \frac{\partial A_{i}}{\partial t}-e \sum_{j} \dot{r}_{j} \frac{\partial A_{i}}{\partial r_{j}} \\
& =-e\left(\frac{\partial \Phi}{\partial r_{i}}+\frac{\partial A_{i}}{\partial t}\right)+e \sum_{j} \dot{r}_{j}\left(\frac{\partial A_{j}}{\partial r_{i}}-\frac{\partial A_{i}}{\partial r_{j}}\right)
\end{aligned}
$$
Taking a careful look at this equation shows that we arrive at the equation of motion for a charged particle in an electromagnetic field, therefore being exposed to the Lorentz force:
$$
m \ddot{\mathbf{r}}=e \mathbf{E}+e(\dot{\mathbf{r}} \times \mathbf{B}).
$$
Therefore, the educated guess was legitimate. It gives rise to the so called 'minimal substitution':
$$
\mathbf{p} \longrightarrow \mathbf{p}-e \mathbf{A}=\mathbf{p}+q \mathbf{A}.
$$
Summation over all crystal electrons and adding the electromagnetic field energy of the light yields the complete Hamiltonian function:

$$
\begin{aligned}
 H &= \frac{1}{2 m} \sum_{\text{cryst. electrons}} (\mathbf{p} - e \mathbf{A})^{2} + e \Phi + \frac{\varepsilon_{0}}{2} \int \left( \mathbf{E}^{2} + c^{2} \mathbf{B}^{2} \right) \, \mathrm{d}^{3} r \\
   &= \sum_{\text{cryst. electrons}} 
      \left[
        \underbrace{\frac{\mathbf{p}^{2}}{2 m} + e \Phi}_{\text{matter}} +
        \underbrace{\frac{e^{2}}{2 m} \mathbf{A}^{2} - \frac{e}{m} \mathbf{A} \cdot \mathbf{p}}_{\text{light-matter interaction}}
      \right]
      + 
      \underbrace{\frac{\varepsilon_{0}}{2} \int \left( \mathbf{E}^{2} + c^{2} \mathbf{B}^{2} \right) \, \mathrm{d}^{3} r}_{\text{EM-field energy}}.
\end{aligned}
$$

## 4.2 Multipole Expansion of the Light Field

The complete analysis of the Hamiltonian is quite tedious, and there exist less complex approaches that still arrive at meaningful results. In this course, we are in any way only interested in the light-matter-interaction term. Furthermore, we will neglect any terms depending $\mathbf{A}^2,$ as generally $\mathcal{O}[A] \gg \mathcal{O}\left[A^{2}\right].$ Therefore, the term that we will be analysing is just
$$
\hat{\mathrm{H}}_{\text{int}}=-\frac{e}{m} \mathbf{p} \mathbf{A}.
$$
This is a decent approximation for 'reasonable' strengths of the electric and magnetic fields. We will describe the electromagnetic field potential by a plane wave in a single mode $\omega_\mathbf{k}.$ Without loss of generality, we will also omit the time dependence, such that we use

$$
\mathbf{A}=A_{0} \hat{\mathbf{e}} e^{i \mathbf{k} \mathbf{r}}.
$$
With these assumptions, the electronic transitions mediated by the light field are described by
$$
\begin{aligned}
\langle f| \hat{\mathrm{H}}_{\text {int }}|g\rangle & =\left(\hat{\mathrm{H}}_\text{int}\right)_{fg}=-\frac{e}{m} \langle f|\mathbf{p} A_{0} \hat{\mathbf{e}} e^{i \mathbf{k} \mathbf{r}}|g\rangle \\
& \sim\langle f| \hat{\mathbf{e}} \mathbf{p} e^{i \mathbf{k} \mathbf{r}}|g\rangle.
\end{aligned}
$$
Light matter interaction only occurs, if the wavelength under consideration is of the order of magnitude as the crystal lattice. Mathematically, this translates to 
$$
\mathbf{k} \mathbf{r} \simeq O\left[\frac{a}{\lambda}\right] \ll 1,
$$
where $a$ is the lattice constant and $\lambda$ the wavelength of the light. This implies that expanding the electromagnetic wave as a function of $\mathbf{k} \mathbf{r}$ will be useful. This is called the 'multipole expansion':
$$
e^{i \mathbf{k} \mathbf{r}}=1+i \mathbf{k} \mathbf{r}+\ldots.
$$
As starting point, we will only consider the **zeroth order** term, which is simply $e^{i \mathbf{k r}}\approx1.$ With this, the matrix element of the interaction Hamiltonian becomes

$$
\begin{aligned}
\langle f| \hat{\mathrm{H}}_{\text {int }}|g\rangle & \sim\langle f| \hat{\mathbf{e}} \mathbf{p}|g\rangle \\
& \sim\langle f|[\hat{\mathrm{H}}_0, \mathbf{r}| | g\rangle \hat{\mathbf{e}} \\
& \sim \underbrace{\langle f| \mathbf{r}|g\rangle}_{\text {electric dipole }} \hat{\mathbf{e}} \omega_{f g} .
\end{aligned}
$$
Therefore, the zeroth order term corresponds to the electric dipole. The unit vector $\hat{\mathbf{e}}$ points in the direction of the electric field , and $\omega_{f g}$ is the energy difference between the final and ground state. The electric dipole may be understood as an electron extended over $\mathbf{r}$ which leads to the electric dipole moment $e \mathbf{r}$.

Lets us now consider only the **first order** term. Then, we are interested in the $i\mathbf{k}\mathbf{r}$ term within the expansion of $e^{i \mathbf{k} \mathbf{r}}.$ Therefore, we find the matrix element to be 
$$
\begin{aligned}
\langle f| \hat{\mathrm{H}}_{\text {int }}|g\rangle & \sim\langle f|(\hat{\mathbf{e}}\cdot \mathbf{p})(i\mathbf{k} \cdot\mathbf{r})|g\rangle \\
& \sim \frac{1}{2}\langle f|(\mathbf{k} \times \hat{\mathbf{e}}) \underbrace{(\mathbf{r} \times \mathbf{p})}_{=\mathbf{L}}-m \omega(\mathbf{k} \cdot\mathbf{r})(\hat{\mathbf{e}}\cdot \mathbf{p})|g\rangle \\
& \sim \frac{1}{2} \underbrace{\langle f| \mathbf{L}|g\rangle \hat{\mathrm{h}}}_{\text {magn. dipole }}-\frac{1}{2} m \omega \hat{\mathbf{e}}_{j} k_{i} \underbrace{\langle f| r_{i} r_{j}|g\rangle}_{\text {el. quadrupole }}.
\end{aligned}
$$
Here, we introduced the angular momentum $\mathbf{L}.$ The unit vector $\hat{\mathrm{h}}$ points in the direction of the magnetic field $\mathbf{H}$. As we can see, this now includes the magnetic dipole (an orbiting electron causes a magnetisation $\mathbf{M}$), and the electric quadrupole. 

With the correct factors, and including spin, we find: 
- The electric dipole (ED) originates from the zeroth order of the multipole expansion with
	$$\hat{\mathrm{H}}_\text{int}^{(0)}=\hat{\mathrm{H}}_{\mathrm{ED}}=-e \mathbf{E}\cdot \mathbf{r}.$$
- The magnetic dipole (MD) originates from the first order of the multipole expansion. Including not only orbital angular momentum but also spin, its interaction Hamiltonian is
	$$\hat{\mathrm{H}}_\text{int}^{(1)}=\hat{\mathrm{H}}_{\mathrm{MD}}=\frac{e \hbar}{2 m}(\mathbf{L}+2\mathbf{S}) \cdot\mathbf{H}=-\boldsymbol{\mu}\cdot\mathbf{H}.$$
- The electric quadrupole (EQ) originates from the same order as the magnetic dipole. The interaction is governed by
	$$\hat{\mathrm{H}}_\text{int}^{(1)}=\hat{\mathrm{H}}_{\mathrm{EQ}}=-\frac{ie}{2}(\mathbf{k}\cdot \mathbf{r})(\mathbf{E} \cdot\mathbf{r}).$$

The 'light fields' in this treatment are then $\mathbf{E}$ and $\mathbf{H},$ while the matter fields are $\mathbf{P}$ (ED), $\mathbf{M}$ (MD) and $\mathbf{-\nabla Q}$ (EQ). Note that both electric quadrupole and magnetic dipole come from the same order in the expansion!

---
## 4.3 Microscopic Approach to Magneto-Optics
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=57&selection=305,0,305,41|•]]

In the [[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3.1 Survey of Magneto-Optic Effects\|earlier chapter]], we have already investigated magneto-optic effects based on the model of the harmonic oscillators. With this rather simple approach, we arrived at the dielectric tensor:
$$
\varepsilon(\omega)=\left(\begin{array}{ccc}
\varepsilon_{1} & 0 & 0 \\
0 & \varepsilon_{1} & 0 \\
0 & 0 & \varepsilon_{2}
\end{array}\right)+\left(\begin{array}{ccc}
0 & -i g & 0 \\
i g & 0 & 0 \\
0 & 0 & 0
\end{array}\right).
$$
However, we have not answered the question about the tensor components yet. Specifically, how do we determine $g?$ This is the part where a microscopic approach is required. The harmonic oscillator approach from earlier already allows guessing that resonances are the dominant factors in determining the factors. However, the microscopic mechanics are usually derived using quantum mechanical perturbation theory. An intuitive understanding is however possible, but we must separate three cases first:
1. For **small light intensities**, first order perturbation theory is used, such that only single light matter interactions are considered that give rise to linear optics. This approach is fairly similar to before, and allows writing the light matter interaction as 
	$$\sim\langle f| \hat{\mathrm{H}}_\text{int}|g\rangle.$$

2. **Intense light fields** require using higher order perturbation theory. Including the second and third order gives rise to multiple light matter interactions, with the result being nonlinear effects like frequency conversion or second harmonic generation (see later). Mathematically such an interaction takes the form of a sequence
	$$\sim\left\langle n_{1}\right| \hat{\mathrm{H}}_{\text {int }}\left|n_{2}\right\rangle\left\langle n_{2}\right| \hat{\mathrm{H}}_{\text {int }}\left|n_{3}\right\rangle\langle\ldots\rangle .$$
3. For **very intense light fields**, the perturbative expansion breaks down and gives rise to a new field of nonlinear optics, which includes for example [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1 Fundamentals of High-Order Harmonic Generation\|high harmonic generation]].

### 4.3.1 Microscopy for Linear Optics 

As already discussed, in linear optics, polarisation and electric field are linearly related via the electric susceptibility tensor
$$
P_{i}(\omega)=\varepsilon_{0} \chi_{i j}(\omega) E_{j}(\omega)\quad\text{with}\quad \varepsilon_{i j}=\delta_{i j}+\chi_{i j}.
$$
On the other side, nonlinear optics would further include quadratic and higher order terms of the electric field in the susceptibility tensor. The microscopic expression up to first order is 
$$
\chi_{i j}(\omega)=-\frac{N e^{2}}{\hbar} \sum_{n \neq g}\left[\frac{\left(r_{i}\right)_{g n}\left(r_{j}\right)_{n g}}{\omega-\omega_{n g}-i \Gamma_{n g}}-\frac{\left(r_{i}\right)_{g n}\left(r_{j}\right)_{n g}}{\omega+\omega_{n g}+i \Gamma_{n g}}\right] \rho_{g}^{(0)}
$$
We have not derived this equation, and yet its form is intuitive:
- $N$ is simply the number of contributing electrons.
- $\rho_{g}^{(0)}$ denotes the population density of the unperturbed ground state or states $|g\rangle$.
- $\Gamma_{n g}$ parameterises spontaneous relaxations from the excited to the ground state $|n\rangle \longrightarrow|g\rangle \sim H_{\text {relax }}$. These spontaneous relaxations correspond to an exponential decay.
- $\left(r_{i}\right)_{n g} \equiv\langle n| r_{i}|g\rangle$ are the contributions from first order perturbation theory and account for electric dipole-type excitations.
- $\left(r_{i}\right)_{g n} \equiv\langle g| r_{i}|n\rangle$ are the corresponding first order perturbation electric dipole-type relaxations. 
- $\omega_{n g}-\omega=\frac{1}{\hbar}\left|E_{n}-E_{g}\right|-\omega$ denotes the frequency mismatch, and thus the energy mismatch between the two states $|n\rangle$ and $|g\rangle$ and the light field providing the excitation.

For a real excitation with a certain population density at $|n\rangle$ after the excitation, energy conservation requires $\omega_{n g}-\omega=0,$ and thus prohibits such transitions. On the other hand a virtual excitation does not change the population density in $|n\rangle$. This can be understood as an electron getting excited into $|n\rangle$ for an unmeasurably short and immediately falling back into $|g\rangle$. This energy mismatch is allowed within the uncertainty principle $\Delta E \Delta t \leq \hbar.$

We can visually interpret both terms in the equation:

- The first term may be understood as an excitation with a subsequent relaxation which causes first the absorption and then the emission of a photon.

- The second term is of very quantum mechanical nature, and may be read as "emission before absorption". This term is highly nonresonant $\sim\left(\omega+\omega_{n g}\right)$.

### 4.3.2 Local Field Corrections

One problem in the analysis of nonlinear optics in crystals arises from the fact that the electric field at a single atom within the crystal lattice is not the same as the externally applied electric field
$$
\left. \mathbf{E}(\omega) \right|_{\text{external, applied}} 
\;\neq\; 
\left. \mathbf{E}(\omega) \right|_{\text{at atom location}}.
$$
This inequality is caused by depolarisation fields. We know that we can describe the polarisation macroscopically using the susceptibility tensor. Microscopically,  we can define an atomic polarisability $\alpha$ such that we can write
$$
\begin{array}{lll}
\text { macroscopically: } & \mathbf{P}=\varepsilon_{0} \chi \mathbf{E} \quad\text{with}\quad \varepsilon=1+\chi, \\
\text { microscopically: } & \mathbf{P}=\varepsilon_{0} N \alpha \mathbf{E}_{\mathrm{loc}} &
\end{array}
$$

We write the number of unit cells as $N.$ The question is how the local electric field relates to the macroscopic electric field. To answer this question, consider an ellipse-shaped sample of a cubic crystalline material in an external electric field:

![Attachments/Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction/Script (Unofficial) 4.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/4%20Light-Matter%20Interaction/Script%20(Unofficial)%204.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=60&rect=127,618,524,763|•]]

It is important to realise that the polarisation is **not** determined by the externally applied electric field, but rather by the matter field $\mathbf{E}$. To intuitively understand this, consider a metal: The polarisation $\mathbf{P}$ of a metal is zero, not because $\chi=0,$ but because the external field $\mathbf{E}_{\text {ext }}$ does not penetrate into the material and thus $\mathbf{E}=0$.

Referring to the prior figure, we may thus write the local field as 
$$
\mathbf{E}_{\text{loc}} 
= \underbrace{
    \mathbf{E}_{\text{ext}} + \mathbf{P}_{\text{sample surface}}
}_{\mathbf{E}} 
+ \mathbf{P}_{\substack{\text{test sphere} \\ \text{surface}}} 
+ \mathbf{P}_{\substack{\text{near field} \\ \text{contribution}}}.
$$
The surface polarisation of an ellipse or a sphere states is $\mathbf{P}_{\text {surface }}=\frac{1}{3 \varepsilon_{0}} \mathbf{P}$. The near field within a cubic material is generally zero. Thus it is found
$$
\begin{aligned}
\mathbf{E}_{\mathrm{loc}} & =\mathbf{E}+\frac{1}{3 \varepsilon_{0}} \mathbf{P} =  \mathbf{E}+\frac{1}{3} \chi \mathbf{E} \\
&=\frac{2+\varepsilon}{3} \mathbf{E}=\frac{2+n^{2}}{3} \mathbf{E} .
\end{aligned}
$$
Then, we further find
$$
\begin{aligned}
N \alpha           &= \frac{|\mathbf{P}|}{\varepsilon_{0} |\mathbf{E}_{\mathrm{loc}}|} = 3 \frac{\varepsilon - 1}{\varepsilon + 2} \\
\iff \quad \frac{1}{3} N \alpha &= \frac{n^{2} - 1}{n^{2} + 2}.
\end{aligned}
$$
This last equation is known as the **Lorentz-Lorenz-equation** or as the **Clausius-Mosotti-equation**. Therefore, combining both equations, we can write the polarisation as
$$
\begin{aligned}
\mathbf{P}=\varepsilon_{0} N \alpha \mathbf{E}_{\mathrm{loc}} & =\varepsilon_{0} N \alpha \frac{2+n^{2}}{3} \mathbf{E},
\end{aligned}
$$
which allows to find the susceptibility as 
$$
\chi=N \alpha \frac{2+n^2}{3}.
$$

### 4.3.3 Microscopy of the Faraday Effect

We will now build a connection between the microscopy of linear optics and the Faraday effect. We have already [[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3.1.1 The Faraday Effect\|seen]] that the Faraday effect is explained on the macroscopic scale using the harmonic oscillator model. We will see that it is explained based on the electric dipole at the microscopic scale. 

Recall that for the Faraday effect, the normal modes of the fundamental dielectric equation
$$
\begin{aligned}
P_i & =\varepsilon_0 \chi_{i j} E_j \\
\varepsilon_{i j} & =\delta_{i j}+\chi_{i j} \\
D_i & =\varepsilon_0 \varepsilon_{i j}(\omega) E_j .
\end{aligned}
$$
were circularly polarised. These were described by circularly polarised light with a small correction to the dielectric tensor $\delta\varepsilon=g.$ This is generally the case for linear magneto-optical effects:
$$
\begin{aligned}
g & =\delta \varepsilon=\frac{1}{\varepsilon_0 E} \delta P_{\text {loc }}=\frac{1}{\varepsilon_0 E} \varepsilon_0 \delta \chi E_{\text {loc }} = \frac{1}{\varepsilon_0 E} \varepsilon_0 \delta \chi E \frac{n^2+2}{3}\\&=\delta \chi \frac{n^2+2}{3} = N \delta \alpha L,
\end{aligned}
$$
where the Lorentz-Lorenz factor is 
$$
L=\left(\frac{n^2+2}{3}\right)^2.
$$
We have used the fact that the polarisation does not change as a result of a varying external electric field, but due to the magnetic field (Zeeman's effect). As described towards the end of the [[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3.1.1 The Faraday Effect\|earlier chapter]] on the Faraday effect, the complex Faraday rotation is
$$
\tilde{\Phi}_F=\Phi_F+i \Psi_F=-\frac{\omega n}{2 c} Q=-\frac{\omega g}{2 c n}.
$$
The parameter $g$ accounts for the difference in polarisability between left-hand and right-hand circularly polarised. We replace it with the earlier derived form, where this difference in polarisability is shifted into the polarisability parameter
$$
\alpha\left(\sigma_{+}\right)-\alpha\left(\sigma_{-}\right)=(\alpha+\delta \alpha)-(\alpha-\delta \alpha)=2 \delta \alpha.
$$
The polarisability for circular polarisability is further related to the electric dipole in numerator of the equation of $\chi_{ij}(\omega)$ ([[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.3.1 Microscopy for Linear Optics\|here]]). We may write 
$$
\delta \alpha \sim \frac{1}{2}\left(\left|r_{+}\right|^2-\left|r_{-}\right|^2\right) 
$$
and
$$
\left|r_{ \pm}\right|^2=r_{ \pm} r_{ \pm}^* \quad \text{with}\quad r_{ \pm}=\langle n| r_{ \pm}|g\rangle.
$$
From this expression, it becomes clear that $\delta\alpha$ corresponds to the terms in the microscopic expression of $\chi_{ij}(\omega).$ Using the derived form for $g,$ we can write the complex Faraday rotation as 

$$
\begin{aligned}
\tilde{\Phi}_{F} 
&= \Phi_{F} + i \Psi_{F} = -\frac{\omega g}{2 c n} \\
&= \frac{\omega}{2 c n} L \frac{N e^{2}}{\hbar} \cdot \frac{1}{2} \sum_{n \neq g} 
\left[
\frac{\left|r_{+}\right|^{2} - \left|r_{-}\right|^{2}}{\omega_{ng} - \omega - i \Gamma_{ng}} 
+ \frac{\left|r_{+}\right|^{2} - \left|r_{-}\right|^{2}}{\omega_{ng} + \omega + i \Gamma_{ng}}
\right] \rho_{g}^{(0)} \\
&= \frac{L N e^2 \omega}{4 \hbar n c} \sum_{n \neq g} \omega_{ng} 
\cdot \frac{
  \overbrace{(\omega_{ng}^2 - \omega^2 + \Gamma_{ng}^2)}^{\Re(\Phi_F)\text{: rotation}} 
  + \overbrace{(-2 i \omega \Gamma_{ng})}^{\Im(\Phi_F)\text{: dichroism}}
}{
  (\omega_{ng}^2 - \omega^2 + \Gamma_{ng}^2)^2 + 4 \omega^2 \Gamma_{ng}^2
}\cdot
\left( \left|r_{+}\right|^2 - \left|r_{-}\right|^2 \right) \rho_g^{(0)}
\end{aligned}
$$
The real part of this equation is further rewritten using the oscillator strength
$$
f_{ \pm}\left(\omega_{n g}\right) \equiv f_{ \pm}=\frac{1}{4 \pi} \frac{m \omega_{n g}}{\hbar}\left|r_{ \pm}\right|^2,
$$
and defining the spectral shape of the resonance 
$$
\varphi\left(\omega, \omega_{n g}\right)=\omega\frac{\omega_{n g}\left(\omega_{n g}^2-\omega^2+\Gamma_{n g}^2\right)}{\left(\omega_{n g}^2-\omega^2+\Gamma_{n g}^2\right)^2+4 \omega^2 \Gamma_{n g}^2},
$$
we may rewrite the real part (linear rotation) as
$$
\Re\left(\tilde{\Phi}_F\right)=\Phi_F=\frac{\pi N e^2 L}{m c n} \sum_{n \neq g} \frac{f_{+}-f_{-}}{\omega_{n g}} \varphi\left(\omega, \omega_{n g}\right) \rho_{g}^{(0)}.
$$
We will discuss two special cases, naming them depending on the type of magnetised material they are mostly found in.

**Diamagnetic type:** The splitting is assumed to take in the excited $|n\rangle$ state of the atom. It is further assumed that this splitting is symmetric around the degenerate state if no magnetic field is applied. This assumption is motivated by the Zeeman effect, which is observed to be symmetric. The following figure shows the state configuration and corresponding transitions:

![Attachments/Script (Unofficial) 2.webp|700](/img/user/Attachments/Script%20(Unofficial)%202.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=64&rect=156,666,316,760|•]]

The splitting is assumed to be small compared to the linewidth broadening. Further, the rate of spontaneous relaxation is equal for all states, and all electrons are assumed to be in the ground state. Mathematically, these assumptions are expressed as:

- Symmetric splitting: $\omega_{g n_{ \pm}}=\omega_{0} \pm \Delta \quad \text { with } \quad \Delta \ll \Gamma_{0} \ll \omega_{0}.$ 
- Small splitting: $\quad f_{+} \simeq f_{-} \equiv f_{0}.$ 
- Same spontaneous relaxation rate: $\Gamma_{n g}=\Gamma_{0} \quad \forall \Gamma_{n g}.$ 
- All electrons in the ground state: $\rho_{g}^{(0)}=1.$ 

With these assumptions, the rotation is found to be
$$
\begin{aligned}
\Phi_{F}^{(d m)} & =\frac{\pi N e^{2} L}{m c n}\left(\frac{f_{0}}{\omega_{0}-\Delta} \varphi\left(\omega, \omega_{0}-\Delta\right)-\frac{f_{0}}{\omega_{0}+\Delta} \varphi\left(\omega, \omega_{0}+\Delta\right)\right) \\
& \simeq \frac{\pi N e^{2} L \omega \Delta f_{0}}{4 m c n \omega_{0}\left(\left(\omega_{0}-\omega\right)^{2}+\Gamma_{0}\right)}\quad\text{near}\quad\omega\approx\omega_0.
\end{aligned}
$$
This expression is symmetric around $\omega_0,$ and its maximum value is around $\omega_0:$
$$
\Phi_{F, \max }^{(d m)}=\Phi_F^{(d m)}\left(\omega=\omega_0\right)=\frac{\pi N e^2 \Delta f_0 L}{4 m c n \Gamma_0}.
$$
With realistic values, we obtain $\Phi_{F, \max }^{(d m)} \lesssim 10^{6} \frac{\mathrm{deg}}{\mathrm{cm}}$. The chemical compound $\mathrm{Bi}_{2.2} \mathrm{Gd}_{0.8} \mathrm{Fe}_{5} \mathrm{O}_{12}$ introduces $7 \cdot 10^{5} \frac{\mathrm{deg}}{\mathrm{cm}}$ at 370 nm and 300 K .

**Paramagnetic type:** We base our analysis on similar assumptions as the diamagnetic type. The state configuration is shown in the following:

![Attachments/Script (Unofficial) 3.webp|700](/img/user/Attachments/Script%20(Unofficial)%203.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=64&rect=334,667,490,758|•]]

The splitting is considered to be even smaller than in the diamagnetic type, such that the transition frequencies are considered equal, and vanishing in the linewidth broadening. The splitting is now assumed to occur in the ground state, and the difference in population density of the two ground states is proportional to the microscopic magnetisation of the material. The spontaneous relaxation is still considered constant for all states. Mathematically, we write:
- Symmetric splitting: $\omega_{g_{ \pm} n}=\omega_{0}.$
- Small splitting: $f_{+} \simeq f_{-} \equiv f_{0}.$
- Same spontaneous relaxation rate: $\Gamma_{n g}=\Gamma_{0} \quad \forall \Gamma_{n g}.$
- Split ground state: $\rho_{+}^{(0)}-\rho_{-}^{(0)} \sim m(T)=\frac{M(T)}{M(0)}.$ 

Similarly the expression for the angle of rotation is found
$$ \begin{aligned} \Phi_{F}^{(p m)} & =\frac{\pi N e^{2} L}{m c n}\left(\frac{\rho_{+}^{(0)}}{\omega_{0}} f_{0} \varphi\left(\omega, \omega_{0}\right)-\frac{\rho_{-}^{(0)}}{\omega_{0}} f_{0} \varphi\left(\omega, \omega_{0}\right)\right) \\ & =\frac{\pi N e^{2} L f_{0}}{m c n} \underbrace{\varphi\left(\omega, \omega_{0}\right)}_{\substack{\text{antisymmetric} \\ \text{around } \omega=\omega_{0}}} m(T) . \end{aligned} $$
Then, the maximum rotation is found at $\omega_{0} \pm \Gamma_{0}$ with $\Gamma_{0} \ll \omega_{0}:$
$$
\Phi_{F, \max }^{(p m)}=\Phi_{F}^{(p m)}(\omega_0\pm\Gamma_0)=\frac{\pi N e^{2} L}{4 m c n \Gamma_{0}} f_{0} m(T) .
$$
Typically reached values are $\Phi_{F, \max }^{(p m)} \gtrsim 10^{6} \frac{\mathrm{deg}}{\mathrm{cmT}}.$ The ferromagnetic europium-sulfur compound EuS reaches $2 \times 10^{6} \frac{\mathrm{deg}}{\mathrm{cm}}$.

At last, note that the maximally introduced paramagnetic rotation is larger:
$$
\frac{\Phi_{F, \max }^{(d m)}}{\Phi_{F, \max }^{(p m)}}=\frac{\Delta}{\Gamma_{0}} \frac{1}{m(T)}<1.
$$

### 4.3.4 Important Interactions

Lastly, we present the most important interaction terms contributing to the Hamiltonian. Each contribution resolves the degeneracy of the energy states as shown in the following figure:

![Attachments/Script (Unofficial) 4.webp|700](/img/user/Attachments/Script%20(Unofficial)%204.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=65&rect=67,633,471,765|•]]

Note that there are even more contributions as listed below, but that depends on the system under investigation.
- $\hat{\mathrm{H}}_{\mathbf{0}}:$ Hamiltonian of non-interacting particles.
- $\hat{\mathrm{H}}_{\mathrm{ee}^{\prime}}:$ Contributions from electrostatic interactions and Hund's coupling $\left({ }^{2 S+1} L\right).$
- $\hat{\mathrm{H}}_{\text{SO}} \sim \lambda \mathbf{S} \cdot\mathbf{L}:$ Contributions from spin-orbit coupling according to $\mathbf{J}=\mathbf{L}+\mathbf{S}$.
- $\hat{\mathrm{H}}_{\text{CF}}:$ Crystal field splitting contributions. The ion in the crystal field of its environment (ligands).
- $\hat{\mathrm{H}}_{\mathbf{E X}}:$ Exchange interactions according to $\sum_{i j} I_{i j} \mathbf{S}_{i} \cdot\mathbf{S}_{j}$.
- $\hat{\mathrm{H}}_{\text{Zee}}:$ Zeeman interactions with $\mu_{b}(\mathbf{L}+2 \mathbf{S}) \cdot\mathbf{H}.$

---