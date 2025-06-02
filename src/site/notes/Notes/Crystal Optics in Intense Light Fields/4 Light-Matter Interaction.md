---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/4-light-matter-interaction/","hide":"true","updated":"2025-06-02T15:52:06.000+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.1 Describing the Light Field\|4.1 Describing the Light Field]]
[[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.2 Multipole Expansion of the Light Field\|4.2 Multipole Expansion of the Light Field]]
[[Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction#4.3 Microscopic Approach to Magneto-Optics\|4.3 Microscopic Approach to Magneto-Optics]]

---
# 4 Light Matter Interaction
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=53&selection=157,0,157,28| ]]

To investigate light-matter interaction rigorously, a quantum mechanical treatment is necessary. We describe an undisturbed physical system (such as an atom or a unit cell in a crystal) by a Hilbert space spanned by a set of mutually orthogonal eigenstates $|n\rangle$ of the unperturbed Hamiltonian $\hat{H}_0$. The energy eigenvalues are given by:
$$
\hat{H}_{0}|n\rangle=\epsilon_{n}|n\rangle.
$$
The eigenstates form an orthonormal basis:
$$
\int \Psi_{n}^{*}(\mathbf{r}) \Psi_{n^{\prime}}(\mathbf{r}) d^{3}\mathbf{r} \equiv \langle n|n^{\prime}\rangle=\delta_{n, n^{\prime}}.
$$
The matrix elements of the unperturbed Hamiltonian in this basis are diagonal:
$$
\langle n| \hat{H}_{0}\left|n^{\prime}\right\rangle=\epsilon_{n} \delta_{n, n^{\prime}}.
$$
This orthogonality implies that transitions between different eigenstates, for instance from a ground state $|g\rangle$ to a final state $|f\rangle$ (where $f \neq g$), are not possible in an unperturbed, time-independent system due to energy conservation and the absence of a coupling mechanism. However, if the system experiences an external perturbation, such as an incident light field, this perturbation is added to the Hamiltonian as an interaction term $\hat{H}_{\text{int}}$:
$$
\hat{H}=\hat{H}_{0}+\hat{H}_{\text{int}}.
$$
For an electron in an atom, $\hat{H}_0 = \frac{\mathbf{p}^2}{2m} + V(\mathbf{r})$. The interaction term $\hat{H}_{\text{int}}$ mixes the eigenstates of $\hat{H}_0$, creating new perturbed eigenstates of $\hat{H}$. This mixing, which can also be viewed as inducing transitions between the states $|n\rangle$, is described by the off-diagonal matrix elements of $\hat{H}_{\text{int}}$:
$$
\langle n| \hat{H}_{\text{int}}\left|n^{\prime}\right\rangle \quad (\text{generally non-diagonal for } n \neq n').
$$
Now, a transition $|g\rangle \to |f\rangle$ becomes possible, mediated by $\hat{H}_{\text{int}}$.

## 4.1 Describing the Light Field

So far, much of the physics was treated classically, where perturbations lead to forces, described by equations of motion. We will continue the description in terms of generalised position $r_i$ and momentum $p_i$ coordinates, using Hamiltonian mechanics. This approach maintains the formal structure of classical mechanics while providing a pathway to quantum mechanics. Hamilton's equations of motion are:
$$
\dot{r}_{i}=\frac{\partial \hat{H}}{\partial p_{i}} \quad\text{and}\quad \dot{p}_{i}=-\frac{\partial \hat{H}}{\partial r_{i}},
$$
for $i=x,y,z$. The potential term $V(\mathbf{r})$ in $\hat{H}=\hat{H}_{\text{kin}}+\hat{V}(\mathbf{r})$ is defined up to an arbitrary constant; a common gauge choice is $\lim_{r \rightarrow \infty} V(\mathbf{r})=0$.

Let us consider charged particles moving in an electromagnetic field described by the scalar potential $\Phi(\mathbf{r},t)$ and the vector potential $\mathbf{A}(\mathbf{r},t)$. The Hamiltonian for a particle of charge $q$ (for an electron, $q=-e$) and mass $m$ is given by:
$$
\hat{H}=\frac{(\mathbf{p}-q\mathbf{A})^{2}}{2m}+q\Phi.
$$
The potentials $\Phi$ and $\mathbf{A}$ are related to the electric field $\mathbf{E}$ and magnetic induction $\mathbf{B}$ by:
$$
\begin{aligned}
 \mathbf{B} &= \nabla \times \mathbf{A} &\text{and}\quad& \mathbf{E} &= -\nabla \Phi-\frac{\partial \mathbf{A}}{\partial t}.
\end{aligned}
$$
These definitions automatically satisfy two of Maxwell's equations: $\nabla\cdot \mathbf{B}=0$ and $\nabla \times \mathbf{E}=-\frac{\partial \mathbf{B}}{\partial t}$.
The potentials are not unique; they can be changed by a gauge transformation:
$$
\mathbf{A} \rightarrow \mathbf{A}' = \mathbf{A}+\nabla \chi \quad\text{and}\quad \Phi \rightarrow \Phi' = \Phi-\frac{\partial \chi}{\partial t},
$$
where $\chi(\mathbf{r},t)$ is an arbitrary scalar function. This transformation does not change the physical fields $\mathbf{E}$ and $\mathbf{B}$. The equations of motion derived from this Hamiltonian are:
$$
\begin{aligned}
\dot{r}_{i} & = \frac{\partial \hat{H}}{\partial p_{i}} = \frac{1}{m}\left(p_{i}-q A_{i}\right), \\
\dot{p}_{i} & = -\frac{\partial \hat{H}}{\partial r_{i}} = \frac{q}{m}\sum_{j}(p_{j}-q A_{j}) \frac{\partial A_{j}}{\partial r_{i}} - q \frac{\partial \Phi}{\partial r_{i}} \\
  & = q \sum_{j} \dot{r}_{j} \frac{\partial A_{j}}{\partial r_{i}} - q \frac{\partial \Phi}{\partial r_{i}}.
\end{aligned}
$$
Taking the time derivative of $m\dot{r}_i = p_i - qA_i$:
$$
m \ddot{r}_{i} = \dot{p}_{i}-q \frac{dA_i}{dt} = \dot{p}_{i}-q \left(\frac{\partial A_{i}}{\partial t} + \sum_{j} \dot{r}_{j} \frac{\partial A_{i}}{\partial r_{j}}\right).
$$
Substituting $\dot{p}_i$:
$$
\begin{aligned}
m \ddot{r}_{i} & = q \sum_{j} \dot{r}_{j} \frac{\partial A_{j}}{\partial r_{i}} - q \frac{\partial \Phi}{\partial r_{i}} - q \frac{\partial A_{i}}{\partial t} - q \sum_{j} \dot{r}_{j} \frac{\partial A_{i}}{\partial r_{j}} \\
& = q\left(-\frac{\partial \Phi}{\partial r_{i}}-\frac{\partial A_{i}}{\partial t}\right)+q \sum_{j} \dot{r}_{j}\left(\frac{\partial A_{j}}{\partial r_{i}}-\frac{\partial A_{i}}{\partial r_{j}}\right).
\end{aligned}
$$
Recognising $E_i = -\frac{\partial\Phi}{\partial r_i} - \frac{\partial A_i}{\partial t}$ and
$$
(\dot{\mathbf{r}}\times(\nabla\times\mathbf{A}))_i = \sum_j \dot{r}_j (\partial_i A_j - \partial_j A_i) = \sum_j \dot{r}_j (\partial A_j/\partial r_i - \partial A_i/\partial r_j)
$$
using Levi-Civita notation for cross product, we arrive at the Lorentz force law:
$$
m \ddot{\mathbf{r}}=q \mathbf{E}+q(\dot{\mathbf{r}} \times \mathbf{B}).
$$
Thus, the Hamiltonian form correctly describes the motion and implies the "minimal substitution" principle for introducing electromagnetic interactions: replace the canonical momentum $\mathbf{p}$ with the kinetic momentum $\mathbf{p}-q\mathbf{A}$ (or $\mathbf{p}+e\mathbf{A}$ for electrons, $q=-e$) in the kinetic energy term of the field-free Hamiltonian.
Summing over all crystal electrons and adding the energy of the electromagnetic field itself yields the complete Hamiltonian function:
$$
\begin{aligned}
 H =& \sum_{\text{electrons}} \left[ \frac{(\mathbf{p}_k - q_k \mathbf{A}(\mathbf{r}_k,t))^{2}}{2 m_k} + q_k \Phi(\mathbf{r}_k,t) \right] \\&+ \frac{1}{2} \int \left( \varepsilon_0 \mathbf{E}^{2} + \frac{1}{\mu_0} \mathbf{B}^{2} \right) d^{3}r \\
  =& \sum_{\text{electrons}} \left[ \underbrace{\left(\frac{\mathbf{p}_k^{2}}{2 m_k} + q_k \Phi\right)}_{\text{Matter } (\hat{H}_0)} + \underbrace{\left(-\frac{q_k}{m_k} \mathbf{A} \cdot \mathbf{p}_k + \frac{q_k^{2}}{2 m_k} \mathbf{A}^{2}\right)}_{\text{Light-Matter Interaction } (\hat{H}_{\text{int}})} \right] \\&+ \underbrace{\frac{1}{2} \int \left( \varepsilon_0 \mathbf{E}^{2} + \frac{1}{\mu_0} \mathbf{B}^{2} \right) d^{3}r}_{\text{EM Field Energy}}.
\end{aligned}
$$
(Assuming Coulomb gauge $\nabla\cdot\mathbf{A}=0$, so $\mathbf{A}\cdot\mathbf{p} = \mathbf{p}\cdot\mathbf{A}$).

## 4.2 Multipole Expansion of the Light Field

The complete analysis of this Hamiltonian is quite tedious. In many optical phenomena, a less complex approach based on a multipole expansion of the interaction term yields meaningful results. We are primarily interested in the light-matter interaction terms. For typical light intensities encountered in linear optics and many nonlinear optics scenarios (but not strong-field physics), the term quadratic in $\mathbf{A}$ ($\sim \mathbf{A}^2$) is often much smaller than the term linear in $\mathbf{A}$ ($\sim \mathbf{A}\cdot\mathbf{p}$) and can be neglected. Therefore, the dominant interaction term is often taken as:
$$
\hat{H}_{\text{int}} \approx -\sum_k \frac{q_k}{m_k} \mathbf{A}(\mathbf{r}_k,t) \cdot \mathbf{p}_k.
$$
Consider a single electron ($q=-e, m=m_e$). We describe the vector potential of the light field as a monochromatic plane wave with angular frequency $\omega_L$, wavevector $\mathbf{k}_L$, and polarisation vector $\hat{\mathbf{e}}$:
$$
\mathbf{A}(\mathbf{r},t) = A_0 \hat{\mathbf{e}} \cos(\mathbf{k}_L \cdot \mathbf{r} - \omega_L t) = \frac{A_0 \hat{\mathbf{e}}}{2} \left( e^{i(\mathbf{k}_L \cdot \mathbf{r} - \omega_L t)} + e^{-i(\mathbf{k}_L \cdot \mathbf{r} - \omega_L t)} \right).
$$
We omit the explicit time dependence when calculating matrix elements for transitions induced by absorption or emission of a photon $\hbar\omega_L$. The interaction Hamiltonian (considering one Fourier component) is effectively $\hat{H}_{\text{int}} \sim \mathbf{p} \cdot \hat{\mathbf{e}} e^{i\mathbf{k}_L \cdot \mathbf{r}}$.
The transition matrix element between an initial state $|g\rangle$ and a final state $|f\rangle$ is:
$$
\langle f| \hat{H}_{\text {int }}|g\rangle \sim \langle f| \hat{\mathbf{e}} \cdot \mathbf{p} e^{i \mathbf{k}_L \cdot \mathbf{r}}|g\rangle.
$$
For many light-matter interactions at optical or lower frequencies, the wavelength of light $\lambda_L = 2\pi/|\mathbf{k}_L|$ is much larger than the spatial extent $a_0$ of the relevant electronic wavefunctions (such as atomic or molecular dimensions). This means $\mathbf{k}_L \cdot \mathbf{r} \sim a_0/\lambda_L \ll 1$ over the region where $\Psi_f^* \Psi_g$ is significant. This allows for a Taylor expansion of the exponential term, known as the multipole expansion:
$$
e^{i \mathbf{k}_L \cdot \mathbf{r}}=1+i \mathbf{k}_L \cdot \mathbf{r} - \frac{1}{2}(\mathbf{k}_L \cdot \mathbf{r})^2 + \ldots.
$$
As a starting point, we consider the **zeroth-order** term (electric dipole approximation): $e^{i \mathbf{k}_L \cdot \mathbf{r}}\approx1$. The matrix element becomes:
$$
\langle f| \hat{H}_{\text {int }}^{(0)}|g\rangle \sim \langle f| \hat{\mathbf{e}} \cdot \mathbf{p}|g\rangle.
$$
Using the commutation relation $[\hat{H}_0, \mathbf{r}] = -i\hbar\mathbf{p}/m_e$, we have $\mathbf{p} = \frac{im_e}{\hbar}[\hat{H}_0, \mathbf{r}]$.
Thus, $\langle f|\mathbf{p}|g\rangle = \frac{im_e}{\hbar}(E_f-E_g)\langle f|\mathbf{r}|g\rangle = im_e\omega_{fg}\langle f|\mathbf{r}|g\rangle$.
The matrix element becomes proportional to $\hat{\mathbf{e}} \cdot \langle f|(-e\mathbf{r})|g\rangle \frac{m_e\omega_{fg}}{-e} \sim \hat{\mathbf{e}} \cdot \mathbf{d}_{fg}$, where $\mathbf{d}_{fg} = \langle f|(-e\mathbf{r})|g\rangle$ is the electric dipole transition moment. The interaction Hamiltonian in this approximation is effectively $\hat{H}_{\text{ED}} = -\mathbf{d} \cdot \mathbf{E}_{\text{opt}}$, where $\mathbf{E}_{\text{opt}} = -\partial\mathbf{A}/\partial t = i\omega_L \mathbf{A}$ for the relevant Fourier component.

Now let us consider the **first-order** term in the expansion, $i\mathbf{k}_L \cdot \mathbf{r}$. The interaction matrix element is:
$$
\langle f| \hat{H}_{\text {int }}^{(1)}|g\rangle \sim \langle f|(\hat{\mathbf{e}}\cdot \mathbf{p})(i\mathbf{k}_L \cdot\mathbf{r})|g\rangle.
$$
The operator $(\hat{\mathbf{e}}\cdot \mathbf{p})(\mathbf{k}_L \cdot\mathbf{r})$ can be decomposed into terms corresponding to magnetic dipole (MD) and electric quadrupole (EQ) interactions:
$$
\begin{aligned}
(\hat{\mathbf{e}}\cdot \mathbf{p})(\mathbf{k}_L \cdot\mathbf{r}) =& \frac{1}{2} \left( (\hat{\mathbf{e}}\cdot \mathbf{p})(\mathbf{k}_L \cdot\mathbf{r}) - (\mathbf{k}_L \cdot \mathbf{p})(\hat{\mathbf{e}} \cdot\mathbf{r}) \right) \\&+ \frac{1}{2} \left( (\hat{\mathbf{e}}\cdot \mathbf{p})(\mathbf{k}_L \cdot\mathbf{r}) + (\mathbf{k}_L \cdot \mathbf{p})(\hat{\mathbf{e}} \cdot\mathbf{r}) \right).
\end{aligned}
$$
The first part (antisymmetric) is related to the magnetic dipole interaction $\sim (\mathbf{k}_L \times \hat{\mathbf{e}}) \cdot (\mathbf{r} \times \mathbf{p}) = (\mathbf{k}_L \times \hat{\mathbf{e}}) \cdot \mathbf{L}$. Since $\mathbf{B}_{\text{opt}} \sim \mathbf{k}_L \times \mathbf{E}_{\text{opt}} \sim \mathbf{k}_L \times \hat{\mathbf{e}}$, this term gives rise to $\hat{H}_{\text{MD}} = -\boldsymbol{\mu} \cdot \mathbf{B}_{\text{opt}}$.
The second part (symmetric) is related to the electric quadrupole interaction $\hat{H}_{\text{EQ}} \sim -\sum_{ij} Q_{ij} \nabla_i E_j$.
With correct factors and including electron spin $\mathbf{S}$, the interaction Hamiltonians are approximately:
- **Electric Dipole (ED) (zeroth order)**: $\hat{H}_{\text{ED}} = -(-e\mathbf{r}) \cdot \mathbf{E}_{\text{opt}} = -\mathbf{d} \cdot \mathbf{E}_{\text{opt}}$.
- **Magnetic Dipole (MD) (first order)**: Including orbital angular momentum $\mathbf{L}$ and spin $\mathbf{S}$ (with $g_s \approx 2$), the magnetic dipole moment is $\boldsymbol{\mu} = -\frac{e}{2m_e}(\mathbf{L}+2\mathbf{S})$. The interaction Hamiltonian is $\hat{H}_{\text{MD}} = -\boldsymbol{\mu} \cdot \mathbf{B}_{\text{opt}}$.
- **Electric Quadrupole (EQ) (first order)**: $\hat{H}_{\text{EQ}} = -\frac{1}{2} \sum_{ij} Q_{ij} \frac{\partial E_j}{\partial r_i}$, where $Q_{ij} = -e(r_i r_j - \frac{1}{3}\delta_{ij}r^2)$ is the electric quadrupole moment tensor. A simplified interaction form often used is $\hat{H}_{\text{EQ}} \sim -e (\mathbf{k}_L \cdot \mathbf{r})(\mathbf{E}_{\text{opt}} \cdot \mathbf{r})$.

The effective "light fields" in this multipole interaction picture are $\mathbf{E}_{\text{opt}}$ and $\mathbf{B}_{\text{opt}}$ (and field gradients for EQ), while the "matter moments" are the electric dipole $\mathbf{P}$ (from $\mathbf{d}$), magnetisation $\mathbf{M}$ (from $\boldsymbol{\mu}$), and electric quadrupole density $\mathbf{Q}$ (from $Q_{ij}$). Both magnetic dipole and electric quadrupole interactions arise from the first-order term in the $e^{i\mathbf{k}_L\cdot\mathbf{r}}$ expansion and are typically much weaker than electric dipole interactions at optical frequencies unless ED transitions are forbidden by selection rules.

---
## 4.3 Microscopic Approach to Magneto-Optics
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=57&selection=305,0,305,41| ]]

In [[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3.1 Survey of Magneto-Optic Effects\|the earlier chapter]], we described magneto-optic effects using a classical harmonic oscillator model, which led to a dielectric tensor of the form:
$$
\boldsymbol{\varepsilon}_r(\omega)=\begin{pmatrix} \varepsilon_1 & -ig & 0 \\ ig & \varepsilon_1 & 0 \\ 0 & 0 & \varepsilon_2 \end{pmatrix}.
$$
However, this macroscopic approach does not explain the origin or magnitude of the tensor components, particularly the gyrotropic factor $g$. This requires a microscopic, quantum mechanical approach. The harmonic oscillator model provides an intuition that resonances are dominant factors. The microscopic details are usually derived using quantum mechanical perturbation theory.

We distinguish three regimes of light intensity for light-matter interaction:
1.  **Small light intensities (Linear Optics):** First-order perturbation theory is sufficient. Only single light-matter interaction processes (absorption/emission of single photons) are significant. This gives rise to linear optical phenomena, described by linear susceptibilities. The interaction matrix element is $\sim \langle f| \hat{H}_{\text{int}}|g\rangle$.
2.  **Intense light fields (Nonlinear Optics):** Higher-order perturbation theory is required. Multiple light-matter interactions become important, leading to nonlinear effects such as frequency conversion (second harmonic generation, sum/difference frequency generation). Mathematically, such interactions involve sequences of matrix elements, for instance, $\sim \sum_{n_2} \frac{\langle n_1| \hat{H}_{\text{int}}|n_2\rangle\langle n_2| \hat{H}_{\text{int}}|n_3\rangle}{\dots}$.
3.  **Very intense light fields (Strong-Field Physics):** The perturbative expansion breaks down. This regime gives rise to phenomena like [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1 Fundamentals of High-Order Harmonic Generation\|high-order harmonic generation]] and above-threshold ionisation.

### 4.3.1 Microscopy for Linear Optics

In linear optics, the induced polarisation $\mathbf{P}(\omega)$ is linearly related to the electric field $\mathbf{E}(\omega)$ via the electric susceptibility tensor $\boldsymbol{\chi}_e(\omega)$:
$$
P_i(\omega)=\varepsilon_0 \sum_j (\chi_e)_{ij}(\omega) E_j(\omega) \quad \text{with} \quad (\varepsilon_r)_{ij}(\omega)=\delta_{ij}+(\chi_e)_{ij}(\omega).
$$
(Nonlinear optics considers terms in $\mathbf{E}^2, \mathbf{E}^3$, etc.).
A quantum mechanical expression for the linear susceptibility (derived from first-order time-dependent perturbation theory, considering electric dipole transitions) is:
$$
(\chi_e)_{ij}(\omega) = \frac{N}{\varepsilon_0\hbar} \sum_{n \neq g} \left( \rho_g^{(0)} - \rho_n^{(0)} \right) \left[ \frac{(d_i)_{gn}(d_j)_{ng}}{\omega_{ng}-\omega-i\Gamma_{ng}} + \frac{(d_j)_{gn}(d_i)_{ng}}{\omega_{ng}+\omega+i\Gamma_{ng}} \right].
$$
Here:
- $N$ is the density of active atoms/molecules.
- $\rho_g^{(0)}$ and $\rho_n^{(0)}$ are the initial populations of the ground state $|g\rangle$ and excited state $|n\rangle$. For absorption from ground state, $\rho_g^{(0)} \approx 1, \rho_n^{(0)} \approx 0$. The term $(\rho_g^{(0)} - \rho_n^{(0)})$ accounts for population differences.
- $\hbar\omega_{ng} = E_n-E_g$ is the transition energy.
- $\Gamma_{ng}$ is a phenomenological damping constant (half-linewidth) for the transition $|g\rangle \to |n\rangle$, related to spontaneous relaxation and dephasing.
- $(d_i)_{gn} \equiv \langle g|(-er_i)|n\rangle$ is the $i$-component of the electric dipole transition moment between states $|g\rangle$ and $|n\rangle$.
- The first term in the sum is resonant near $\omega \approx \omega_{ng}$ (absorption).
- The second term is non-resonant at positive $\omega$ (if $\omega_{ng}>0$) and arises from considering both $e^{-i\omega t}$ and $e^{i\omega t}$ parts of a real field.

A real excitation involves transfer of population to state $|n\rangle$, requiring energy conservation $\omega \approx \omega_{ng}$. A virtual excitation does not change the population of $|n\rangle$; the system briefly enters state $|n\rangle$ and returns to $|g\rangle$, allowed by the energy-time uncertainty principle $\Delta E \Delta t \sim \hbar$.
- The first term can be interpreted as absorption of a photon $\hbar\omega$ exciting $|g\rangle \to |n\rangle$, followed by re-emission or relaxation.
- The second term, sometimes called the "anti-resonant" term, is often smaller at optical frequencies if $\omega \approx \omega_{ng}$.

### 4.3.2 Local Field Corrections

In condensed matter, the electric field experienced by a single atom/molecule (the _local field_ $\mathbf{E}_{\text{loc}}$) is not generally the same as the macroscopic average electric field $\mathbf{E}$ (or an externally applied field $\mathbf{E}_{\text{ext}}$). This difference arises from the polarisation of the surrounding medium, which creates depolarisation fields.
$$
\mathbf{E}_{\text{loc}}(\omega) \neq \mathbf{E}_{\text{macro}}(\omega).
$$
The macroscopic polarisation $\mathbf{P}$ is related to $\mathbf{E}_{\text{macro}}$ via the macroscopic susceptibility $\chi_e$: $\mathbf{P}=\varepsilon_0 \chi_e \mathbf{E}_{\text{macro}}$.
Microscopically, $\mathbf{P}$ is related to the average induced dipole moment per unit volume, which depends on the atomic/molecular polarisability $\alpha_{\text{mol}}$ and the local field: $\mathbf{P}=N \alpha_{\text{mol}} \mathbf{E}_{\text{loc}}$.
For a dense medium, particularly for a spherical or ellipsoidal sample in a uniform external field, or atoms in a cubic lattice site, the local field can be related to the macroscopic field by the Lorentz local field correction (for isotropic media or cubic symmetry):

![Attachments/Notes/Crystal Optics in Intense Light Fields/4 Light-Matter Interaction/Script (Unofficial) 4.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/4%20Light-Matter%20Interaction/Script%20(Unofficial)%204.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=60&rect=127,618,524,763| ]]

$$
\mathbf{E}_{\text{loc}} = \mathbf{E}_{\text{macro}} + \frac{\mathbf{P}}{3\varepsilon_0}.
$$
Using $\mathbf{P} = \varepsilon_0 (\varepsilon_r-1)\mathbf{E}_{\text{macro}}$:
$$
\mathbf{E}_{\text{loc}} = \mathbf{E}_{\text{macro}} + \frac{\varepsilon_r-1}{3}\mathbf{E}_{\text{macro}} = \frac{\varepsilon_r+2}{3}\mathbf{E}_{\text{macro}}.
$$
Combining $\mathbf{P}=N\alpha_{\text{mol}}\mathbf{E}_{\text{loc}}$ and $\mathbf{P}=\varepsilon_0(\varepsilon_r-1)\mathbf{E}_{\text{macro}}$, we get:
$$
\varepsilon_0(\varepsilon_r-1)\mathbf{E}_{\text{macro}} = N\alpha_{\text{mol}} \frac{\varepsilon_r+2}{3}\mathbf{E}_{\text{macro}}.
$$
This leads to the Clausius-Mossotti relation (or Lorentz-Lorenz equation if using refractive index $n^2=\varepsilon_r$):
$$
\frac{N\alpha_{\text{mol}}}{3\varepsilon_0} = \frac{\varepsilon_r-1}{\varepsilon_r+2} \quad \text{or} \quad \frac{N\alpha_{\text{mol}}}{3\varepsilon_0} = \frac{n^2-1}{n^2+2}.
$$
The macroscopic susceptibility is then related to the molecular polarisability by:
$$
\chi_e = \varepsilon_r-1 = \frac{N\alpha_{\text{mol}}/\varepsilon_0}{1 - N\alpha_{\text{mol}}/(3\varepsilon_0)}.
$$
Or, the polarisation expressed using $\mathbf{E}_{macro}$:
$$
\mathbf{P} = \varepsilon_0 N \alpha_{\text{mol}} \mathbf{E}_{\text{loc}} = \varepsilon_0 N \alpha_{\text{mol}} \frac{\varepsilon_r+2}{3} \mathbf{E}_{\text{macro}},
$$
which allows finding the macroscopic susceptibility $\chi_e = N\alpha_{\text{mol}} \frac{\varepsilon_r+2}{3}$.

### 4.3.3 Microscopy of the Faraday Effect

We can now connect the macroscopic description of the Faraday effect (characterised by the gyrotropic factor $g$ in the dielectric tensor) to the microscopic polarisability.
Recall $\mathbf{D}_i = \varepsilon_0 \sum_j (\varepsilon_r)_{ij} E_j$. The off-diagonal elements of $\boldsymbol{\varepsilon}_r$ induced by the magnetic field, $\pm ig$, are responsible for Faraday rotation. This $g$ is related to a change in macroscopic susceptibility $\delta\chi_e$ due to the magnetic field, modified by local field factors.
The complex Faraday rotation per unit length $\tilde{\Phi}_F$ (containing rotation $\Phi_F'$ and ellipticity/dichroism $\Phi_F''$) is:
$$
\tilde{\Phi}_F = \Phi_F' + i\Phi_F'' = -\frac{\omega g}{2cn_0},
$$
where $n_0$ is the refractive index in absence of $\mathbf{B}_{ext}$, and $g$ is the off-diagonal element of $\boldsymbol{\varepsilon}_r$.
The parameter $g$ reflects the difference in the material's response to LCP ($\sigma_-$) and RCP ($\sigma_+$) light, induced by the magnetic field. This difference arises from Zeeman splitting of energy levels. Microscopically, $g$ is related to the difference in atomic/molecular polarisability for LCP and RCP light, $\delta\alpha = \alpha(\sigma_+) - \alpha(\sigma_-)$.
$$
g \approx N (\delta\alpha) L_{\text{LF}},
$$
where $L_{\text{LF}}$ is a Lorentz local field factor, such as $\left(\frac{n_0^2+2}{3}\right)^2$ if $\delta\alpha$ relates to microscopic fields.
The difference $\delta\alpha$ can be calculated from the quantum mechanical expression for $\chi_{ij}(\omega)$ by considering transitions allowed by $\sigma_+$ and $\sigma_-$ light (which have different selection rules for $\Delta m_J$) between Zeeman-split levels. The relevant part of the transition matrix elements will be $|(d_+)_{ng}|^2 - |(d_-)_{ng}|^2$, where $d_{\pm} = d_x \pm i d_y$ are dipole operators for circular polarisations.
The complex Faraday rotation $\tilde{\Phi}_F$ can then be written as a sum over transitions:
$$
\tilde{\Phi}_F = \frac{N \omega L_{\text{LF}}}{4\varepsilon_0 \hbar cn_0} \sum_{n \neq g} (\rho_g^{(0)}-\rho_n^{(0)}) \left( \frac{|(d_+)_{gn}|^2 - |(d_-)_{gn}|^2}{\omega_{ng}-\omega-i\Gamma_{ng}} + \text{non-resonant} \right).
$$
This expression can be separated into real and imaginary parts. The real part ($\Phi_F'$), describing rotation, is often expressed using oscillator strengths $f_{\pm}$ for $\sigma_{\pm}$ transitions and a dispersive line shape function $\varphi_D(\omega, \omega_{ng})$:
$$
\Phi_F' \sim \sum_{n \neq g} (f_{+,ng} - f_{-,ng}) \varphi_D(\omega, \omega_{ng}).
$$
The imaginary part ($\Phi_F''$), describing magnetic circular dichroism (MCD), is related to an absorptive line shape function.
Two limiting cases are often discussed:

**Diamagnetic type:** The ground state $|g\rangle$ is non-degenerate (e.g., singlet), and the magnetic field splits the excited states $|n\rangle$. The splitting $\Delta E_n = \pm \mu_B g_n B_z$ is often symmetric ($\omega_{ng\pm} = \omega_{n0} \pm \Delta_n$). If the oscillator strengths $f_{+,ng} \approx f_{-,ng} \equiv f_{n0}$ are nearly equal, the Faraday rotation arises from the difference of two oppositely shifted dispersive profiles. Near resonance $\omega \approx \omega_{n0}$, and for small splitting $\Delta_n \ll \Gamma_{n0}$:
$$
\Phi_F^{(\text{dia})} \sim \frac{\omega \Delta_n f_{n0}}{(\omega_{n0}-\omega)^2+\Gamma_{n0}^2}.
$$
This lineshape is symmetric (dispersive-looking) around $\omega_{n0}$.

![Attachments/Script (Unofficial) 2.webp|700](/img/user/Attachments/Script%20(Unofficial)%202.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=64&rect=156,666,316,760| ]]

**Paramagnetic type:** The ground state $|g\rangle$ is degenerate and split by the magnetic field. The populations of these split ground sub-levels, $\rho_{g\pm}^{(0)}$, become unequal due to thermal Boltzmann distribution, proportional to magnetisation $M(T)$. Transitions from these sub-levels to an excited state $|n\rangle$ (which may also be split) have different strengths for $\sigma_+$ and $\sigma_-$ light, or the same oscillator strength but different populations. If the excited state splitting is negligible compared to linewidth:
$$
\Phi_F^{(\text{para})} \sim (\rho_{g+}^{(0)} - \rho_{g-}^{(0)}) f_{n0} \varphi_A(\omega, \omega_{n0}) \sim M(T) \varphi_A(\omega, \omega_{n0}),
$$
where $\varphi_A(\omega, \omega_{n0})$ is an absorptive-looking (antisymmetric if $\chi'$ is taken) lineshape function peaked near $\omega_{n0}$.

![Attachments/Script (Unofficial) 3.webp|700](/img/user/Attachments/Script%20(Unofficial)%203.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=64&rect=334,667,490,758| ]]

Typically, paramagnetic rotation is larger than diamagnetic rotation, especially at low temperatures where $M(T)$ is large. The ratio scales as $\Phi_{F, \text{max}}^{(\text{dia})}/\Phi_{F, \text{max}}^{(\text{para})} \sim \Delta_n/\Gamma_{n0} \cdot (1/m(T))$, which is often less than 1.

### 4.3.4 Important Interactions

The energy levels $|n\rangle$ and transition frequencies $\omega_{ng}$ are determined by a hierarchy of interactions in an atom/ion within a crystal:

![Attachments/Script (Unofficial) 4.webp|700](/img/user/Attachments/Script%20(Unofficial)%204.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=65&rect=67,633,471,765| ]]

- $\hat{H}_0$: Hamiltonian of the free ion (non-interacting electrons, central potential).
- $\hat{H}_{\text{ee}}$: Electrostatic interactions between electrons (Coulomb repulsion, exchange interaction), leading to Russell-Saunders terms $^{2S+1}L$.
- $\hat{H}_{\text{SO}}$: Spin-orbit coupling ($\sim \lambda_{SO} \mathbf{L} \cdot \mathbf{S}$), leading to fine structure levels $J$.
- $\hat{H}_{\text{CF}}$: Crystal field interaction (electrostatic field from surrounding ligand ions splitting the $J$ or $L,S$ manifolds).
- $\hat{H}_{\text{EX}}$: Exchange interactions between magnetic ions in magnetically ordered materials.
- $\hat{H}_{\text{Zee}}$: Zeeman interaction with an external magnetic field ($\sim \mu_B(\mathbf{L}+2\mathbf{S}) \cdot \mathbf{B}_{\text{ext}}$).
Other interactions, such as hyperfine coupling, may also be present but are usually smaller.

---