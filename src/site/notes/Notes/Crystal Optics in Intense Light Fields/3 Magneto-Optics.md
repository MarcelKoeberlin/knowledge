---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/3-magneto-optics/","hide":"true","updated":"2025-05-27T15:52:04.000+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3.1 Survey of Magneto-Optic Effects\|#3.1 Survey of Magneto-Optic Effects]]
---
# 3 Magneto-Optics
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=47&selection=0,0,0,15|•[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=61&selection=0,0,0,14|•]]]]

All effects discussed up to now only include an electric field and are based on the interaction with the electric dipole moment of the particles or molecules. In a simplified manner, the dipole moments within the material may be understood to have an excited and a ground state. The electric field allows effects to take place between these two levels.

However, due to the orbital momentum, each charged particle possesses an intrinsic magnetic moment. Without an external magnetic field the energy levels of particles with the same dipole moment but different magnetic moments are degenerate, meaning one is not able to separate these two levels. Application of a magnetic field $\mathbf{H}$ resolves the degeneracy. The interaction between the magnetic field and the magnetic dipole moments causes splitting of the formerly degenerate states. This is the so called Zeeman effect. The Zeeman splitting of the excited energy levels in matter generally modifies the optical properties of the material.

magneto-optic effects were first discovered in 1845 when Michael Faraday observed the rotation of the polarisation of light in a glass sample exposed to strong magnetic fields. With this experiment he proved that light and magnetism are two closely related physical phenomena. There are two major geometries under which magneto-optic effects are investigated:

- Faraday Geometry: The wave vector is parallel to the applied magnetic field, $\mathbf{k} \| \mathbf{H}$.
- Voigt Geometry: The magnetic field is perpendicular to the wave vector, $\mathbf{k} \perp \mathbf{H}$.

---
## 3.1 Survey of Magneto-Optic Effects
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=47&selection=57,0,57,33|•]]

In analogy to effects introduced by intrinsic strain or by an electric field, there are magnetically introduced linear and circular effects which lead to birefringence or dichroism. The description of these effects is based on the harmonic oscillator model. The equation of motion of an electron in an electric potential is most generally written
$$
\ddot{\mathbf{r}}+\frac{G}{m} \mathbf{r}=\frac{\mathbf{F}(\mathbf{r}, t)}{m}=-\frac{e}{m}(\mathbf{E}(\mathbf{r}, t)+\mathbf{v} \times \mathbf{B}(\mathbf{r}, t)),
$$
where we assume that the external force applied to the oscillator is the Lorentz force. For further analysis, we assume that the magnetic field is applied in the $z$-direction, and that the electrons oscillate with the same frequency as the electric field:
$$
\mathbf{E}(\omega)=\mathbf{E}_{0} e^{-i \omega t} \implies \mathbf{P}(\omega)=\mathbf{P}_{0} e^{-i \omega t}.
$$

We can then write the polarisation as
$$
\mathbf{P}(\mathbf{r})=N q \mathbf{r}=-N e \mathbf{r} \implies \mathbf{r}=-\frac{\mathbf{P}(\mathbf{r})}{N e}.
$$
We then again Fourier transform the equation, such that we can substitute
$$
\ddot{r} \implies-\omega^{2} \mathbf{r} \quad\text{and}\quad \mathbf{v}=\dot{\mathbf{r}} \implies-i \omega \mathbf{r}.
$$
We end up with the following equation:
$$
\left(\begin{array}{ccc}
-\omega^{2} m+G & i \omega e B_{z} & 0 \\
-i \omega e B_{z} & -\omega^{2} m+G & 0 \\
0 & 0 & -\omega^{2} m+G
\end{array}\right)\left(\begin{array}{l}
P_{x} \\
P_{y} \\
P_{z}
\end{array}\right)=N e^{2}\left(\begin{array}{l}
E_{x} \\
E_{y} \\
E_{z}
\end{array}\right).
$$

In this last equation the electric field and polarisation are functions of the frequency $\mathbf{E}=\mathbf{E}(\omega)$ and $\mathbf{P}=\mathbf{P}(\omega)$. The general relation between electric field and polarisation is governed by three equations, which are obtained by inverting the matrix:
$$
\begin{aligned}
P_{i} & =\varepsilon_{0} \chi_{i j} E_{j}, \\
\varepsilon_{i j} & =\delta_{i j}+\chi_{i j}, \\
D_{i} & =\varepsilon_{0} \varepsilon_{i j}(\omega) E_{j} .
\end{aligned}
$$
Explicitly, we find that 
$$
\varepsilon(\omega)=\mathbb{1}+\frac{\Omega_{p}^{2}}{\left(\omega_{0}^{2}-\omega^{2}\right)^{2}-\left(\omega \omega_{C}\right)^{2}}\left(\begin{array}{ccc}
\omega_{0}^{2}-\omega^{2} & -i \omega \omega_{C} & 0 \\
i \omega \omega_{C} & \omega_{0}^{2}-\omega^{2} & 0 \\
0 & 0 & \frac{\left(\omega_{0}^{2}-\omega^{2}\right)^{2}-\left(\omega \omega_{C}\right)^{2}}{\omega_{0}^{2}-\omega^{2}}
\end{array}\right),
$$
with
- $\omega_{0}^{2}=\frac{G}{m}$ is the resonance frequency of an electron in the Coulomb potential.
- $\omega_{C}=\frac{e B}{m}$ is the cyclotron frequency. This can be understood as the frequency of the circular current of the electron generating the magnetic field.
- $\Omega_{p}^{2}=\frac{N e^{2}}{\varepsilon_{0} m}$ is the plasma frequency of the resonating electron gas.

By separating $\varepsilon_{i j}(\omega)$ into the dielectric tensor and a rotation tensor it simplifies to
$$
\varepsilon(\omega)=\underbrace{\left(\begin{array}{ccc}
\varepsilon_{1} & 0 & 0 \\
0 & \varepsilon_{1} & 0 \\
0 & 0 & \varepsilon_{2}
\end{array}\right)}_{\text {uniaxial tensor }}+\underbrace{\left(\begin{array}{ccc}
0 & -i g & 0 \\
i g & 0 & 0 \\
0 & 0 & 0
\end{array}\right)}_{\text {rotation }},
$$
where $g$ is called the gyrotropic factor, which describes a rotation introduced by the Lorentz force, so the circular motion of electrons. It is non-zero for magnetised materials, and follows $g\sim\omega_c\sim|\mathbf{B}|.$ The same way, $\varepsilon_1$ depends on the cyclotron frequency. However, $\varepsilon_2=1+\frac{\Omega_p^2}{\omega_0^2-\omega^2}$ does not depend on the cyclotron frequency, and thus not on the magnetic field. The dielectric tensor is uniaxial $\varepsilon_{1} \neq \varepsilon_{2}$ and shows optical activity $g \neq 0$ due to the applied magnetic field. We thus rotate the plane of linear polarisation by an angle $\theta\sim|\mathbf{H}|.$ The magneto-optical Voigt parameter, sometimes referred to as the relative rotation, is defined as 
$$
Q=g/\varepsilon_1.
$$

### 3.1.1 The Faraday Effect

We have shown that the normal magnetic field induces a rotation in the dielectric tensor. This leads to circular [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.3.3 Refraction at Interfaces\|birefringence]]. The polarisation is rotated by an angle $\theta$ in transmission through a longitudinally magnetised medium (Faraday geometry). This effect is called the Faraday effect. The angle of rotation depends on the strength of the magnetic field $H$ and the propagation length $d$
$$
\theta=\mathcal{V} B d=\mathcal{V} \mu_{0} H d,
$$
where the Verdet constant $\mathcal{V}$ describes the proportionality between the strength of the magnetic field and the angle of rotation. The Verdet constant for glass is approximately $\mathcal{V}_{\text {Glass }} \approx 1^{\circ} / \mathrm{cmT}$, while for cadmium manganese telluride $\left(\mathrm{Cd}_{0.95} \mathrm{Mn}_{0.05} \mathrm{Te}\right)$ it is $\mathcal{V} \approx 10^{3 \ldots 4} / \mathrm{cmT}$.

If we include the effects of absorption, all parameters ($\varepsilon,$ $g$ and $Q$) considered have to be complex. In general, the real part relates to the stored energy, while the imaginary part accounts for material losses. Considering the specific Faraday rotation $\phi_{F}$ as a complex parameter introduces ellipticity
$$
\tilde{\phi}_{F}=\underbrace{\phi_{F}}_{\text {rotation of lin. pol. }}+\underbrace{i \Psi_{F}}_{\text {ellipticity }}=-\frac{\omega n_{0}}{2 c}\left(Q^{\prime}+i Q^{\prime \prime}\right),
$$
where $n_0$ is the refractive index in the absence of the magnetic field.

### 3.1.2 Voigt Effect

The Voigt effect is a magneto-optic effect similar to the Faraday effect. However, the geometry is now chosen such that the magnetic field is perpendicular to the beam path $\mathbf{H} \perp \mathbf{k}$ as the following figure shows:

![Attachments/Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics/Script (Unofficial) 2.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/3%20Magneto-Optics/Script%20(Unofficial)%202.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=52&rect=239,675,412,758|•]]

The result is not a rotation of the polarisation but linear birefringence (dichroism). The Voigt effect scales quadratically with the magnetic field $\sim H^{2}$.

### 3.1.3 Magneto-Optic Kerr Effect

The magneto-optic Kerr effect (MOKE) describes the rotation of polarisation and ellipticity by reflection of a magnetised surface. As this effect takes place in reflection, it corresponds to a fixed value and is independent on propagation length. The angle of rotation is linearly related of the magnetic field $\mathbf{H}$ and the magnetisation $\mathbf{M}.$ The angle of rotation is usually lower than $0.1^\circ.$ Three different geometries exist:

![Attachments/Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics/Script (Unofficial) 3.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/3%20Magneto-Optics/Script%20(Unofficial)%203.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=52&rect=156,567,498,646|•]]
For all three geometries, symmetry considerations allow to investigate the transfer of energy from one polarisation to another. Let us denote the plane of incidence $\mathcal{P}:$ 

- Polar MOKE: The magnetisation is parallel to the normal vector of the surface of reflection $\mathbf{M} \| \hat{n}$. Mirroring on $\mathcal{P}$ inverts the magnetisation, since magnetisation is the result of a circular current and mirroring on a surface inverts the direction of the current, and thus is not a symmetry operation. Therefore, energy transfer between s- and p-polarised light is allowed. 
- Longitudinal MOKE: The magnetisation lies in the plane of reflection and is parallel to the plane of incidence $\mathbf{M} \perp \hat{n}, \mathbf{M} \| \mathcal{P}$. Again, mirroring is not a symmetry operation,  thus energy transfer between s- and p-polarised light is allowed.
- Transverse MOKE: The magnetisation lies in the plane of reflection and is orthogonal to the plane of incidence $\mathbf{M} \perp \hat{n}, \mathbf{M} \perp \mathcal{P}$. Now, mirroring on $\mathcal{P}$ does **not** invert the magnetisation. It is therefore a symmetry operation, which must reflect in the physical results (see [[Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects#1.1 Symmetry Principles\|von Neumann principle]]). The polarisation states are not mixed in transverse MOKE.

The magneto-optic Kerr effect is mostly observed in ferromagnetic metals. These usually have a large refractive index $n_2$ compared to the environment $n_1$. Calling the ratio $\eta=n_2/n_1,$ we find  

- Polar: $\phi_K=\frac{i Q}{\eta} \sim \frac{1}{\eta}$ large.
- Longitudinal: $\phi_K=\frac{i Q}{\eta^2} \sim \frac{1}{\eta^2}$ small.
- Transversal: $\frac{\Delta I_p}{I_p}=\frac{4 Q}{\eta^2} \sim \frac{1}{\eta^2}$ small, and no rotation.

In transversal MOKE, the variation in intensity is investigated, as no phase shift is acquired, due to no polarisation mixing. The amplitude of the polar geometry is large compared to the others, making it the preferred setup.

---