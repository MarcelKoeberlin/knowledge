---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/3-magneto-optics/","hide":"true","updated":"2025-06-01T18:58:28.000+02:00"}
---

	 Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3.1 Survey of Magneto-Optic Effects\|3.1 Survey of Magneto-Optic Effects]]

---
# 3 Magneto-Optics
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=47&selection=8,60,9,39| ]]

All effects discussed up to the [[Notes/Crystal Optics in Intense Light Fields/2 Light Polarisation and Dispersion#2 Light Polarisation and Dispersion\|previous chapter]] primarily involved the interaction of the electric field of light with the electric dipole moments within materials. In a simplified manner, these dipole moments arise from the displacement of charges, and their interaction with light can be understood by considering transitions between electronic ground and excited states.

However, charged particles, due to their orbital motion and intrinsic spin, also possess magnetic dipole moments. In the absence of an external magnetic field, energy levels of particles that might differ only in the orientation of their magnetic moments are often degenerate (possess the same energy). The application of an external magnetic field $\mathbf{H}$ (or $\mathbf{B}$) lifts this degeneracy, splitting the energy levels. This is known as the **Zeeman effect**. This Zeeman splitting of electronic energy levels in matter generally modifies the optical properties of the material, giving rise to magneto-optic effects.

Magneto-optic effects were first discovered in 1845 when Michael Faraday observed the rotation of the plane of polarisation of linearly polarised light propagating through a glass sample subjected to a strong magnetic field. With this experiment, he demonstrated a fundamental link between light and magnetism. There are two principal geometries under which magneto-optic effects are typically investigated:

- **Faraday Geometry:** The light propagation wavevector $\mathbf{k}$ is parallel to the applied static magnetic field $\mathbf{H}$ (so $\mathbf{k} \parallel \mathbf{H}$).
- **Voigt Geometry:** The light propagation wavevector $\mathbf{k}$ is perpendicular to the applied static magnetic field $\mathbf{H}$ (so $\mathbf{k} \perp \mathbf{H}$).

---
## 3.1 Survey of Magneto-Optic Effects
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=47&selection=57,0,57,33| ]]

In analogy to opto-elastic or electro-optic effects (where strain or an electric field induces optical anisotropy), magnetically induced effects can lead to linear and circular birefringence or dichroism. The description of these effects can often be based on a modified harmonic oscillator model (Lorentz model) for electrons, now including the Lorentz force due to the external static magnetic field.
The equation of motion for an electron of mass $m$ and charge $-e$, bound by a harmonic restoring force (spring constant $G = m\omega_0^2$), in the presence of an optical electric field $\mathbf{E}(\mathbf{r},t)$ and a static magnetic field $\mathbf{B}_{\text{ext}}(\mathbf{r})$ is:
$$
m\ddot{\mathbf{r}} + m\Gamma_d \dot{\mathbf{r}} + G \mathbf{r} = -e(\mathbf{E}(\mathbf{r}, t) + \dot{\mathbf{r}} \times \mathbf{B}_{\text{ext}}(\mathbf{r})),
$$
where we have also included a phenomenological damping term $m\Gamma_d \dot{\mathbf{r}}$. For further analysis, let us assume the static magnetic field is uniform and applied along the $z$-direction, $\mathbf{B}_{\text{ext}} = B_z \hat{\mathbf{z}}$. We consider the response to a time-harmonic optical electric field $\mathbf{E}(\omega) = \mathbf{E}_{0} e^{-i \omega t}$, which induces a time-harmonic polarisation $\mathbf{P}(\omega) = \mathbf{P}_{0} e^{-i \omega t}$.
The polarisation is related to the electron displacement $\mathbf{r}$ by $\mathbf{P} = -Ne\mathbf{r}$, where $N$ is the density of responding electrons. Thus, $\mathbf{r} = -\mathbf{P}/(Ne)$.
Substituting this into the equation of motion and Fourier transforming (with $\partial/\partial t \rightarrow -i\omega$ for $e^{-i\omega t}$ convention, or $i\omega$ for $e^{i\omega t}$ convention; let us assume $e^{-i\omega t}$ for consistency with many classical optics texts when $P(\omega)$ is related to $E(\omega)$ by $\chi(\omega)$ directly), we find:
$(-\omega^2 m - i\omega m\Gamma_d + G) \mathbf{P}(\omega) = Ne^2 \mathbf{E}(\omega) - i\omega e (\mathbf{P}(\omega) \times \mathbf{B}_{\text{ext}})$.
This leads to a matrix equation for the components of $\mathbf{P}(\omega)$:
$$
\begin{pmatrix}
(G - \omega^2 m - i\omega m\Gamma_d) & -i\omega e B_z & 0 \\
i\omega e B_z & (G - \omega^2 m - i\omega m\Gamma_d) & 0 \\
0 & 0 & (G - \omega^2 m - i\omega m\Gamma_d)
\end{pmatrix}
\begin{pmatrix} P_x \\ P_y \\ P_z \end{pmatrix}
= Ne^2 \begin{pmatrix} E_x \\ E_y \\ E_z \end{pmatrix}.
$$
In this equation, $\mathbf{E}=\mathbf{E}(\omega)$ and $\mathbf{P}=\mathbf{P}(\omega)$. The general relation between the electric field and polarisation is $\mathbf{P}(\omega) = \varepsilon_0 \boldsymbol{\chi}_e(\omega) \mathbf{E}(\omega)$, and the relative permittivity tensor is $\boldsymbol{\varepsilon}_r(\omega) = \mathbf{I} + \boldsymbol{\chi}_e(\omega)$. Thus, $\mathbf{D}(\omega) = \varepsilon_0 \boldsymbol{\varepsilon}_r(\omega) \mathbf{E}(\omega)$.
Inverting the matrix and identifying terms, the relative permittivity tensor $\boldsymbol{\varepsilon}_r(\omega)$ takes the form:
$$
\boldsymbol{\varepsilon}_r(\omega)=\mathbf{I}+\frac{\Omega_p^2}{D(\omega)}\begin{pmatrix}
\omega_0^2-\omega^2-i\omega\Gamma_d & -i \omega \omega_C & 0 \\
i \omega \omega_C & \omega_0^2-\omega^2-i\omega\Gamma_d & 0 \\
0 & 0 & D(\omega)/(\omega_0^2-\omega^2-i\omega\Gamma_d)
\end{pmatrix},
$$
where $D(\omega) = (\omega_0^2-\omega^2-i\omega\Gamma_d)^2 - (\omega\omega_C)^2$, and:
- $\omega_0^2 = G/m$ is the square of the resonance frequency of an electron in the binding potential (without magnetic field).
- $\omega_C = eB_z/m$ is the cyclotron frequency (sign depends on charge sign convention for $e$).
- $\Omega_p^2 = Ne^2/(\varepsilon_0 m)$ is the square of a characteristic plasma frequency for the responding electrons.

For negligible damping ($\Gamma_d \to 0$), this simplifies to:
$$
\boldsymbol{\varepsilon}_r(\omega) = \mathbf{I} + \frac{\Omega_p^2}{(\omega_0^2-\omega^2)^2 - (\omega\omega_C)^2} \begin{pmatrix}
\omega_0^2-\omega^2 & -i \omega \omega_C & 0 \\
i \omega \omega_C & \omega_0^2-\omega^2 & 0 \\
0 & 0 & \frac{(\omega_0^2-\omega^2)^2-(\omega\omega_C)^2}{\omega_0^2-\omega^2}
\end{pmatrix}.
$$
The $zz$-component simplifies to $\varepsilon_{zz}(\omega) = 1 + \frac{\Omega_p^2}{\omega_0^2-\omega^2}$, which is independent of the magnetic field $B_z$.
The tensor can be separated into a part representing a uniaxial material and a part representing gyrotropic rotation:
$$
\boldsymbol{\varepsilon}_r(\omega)=\begin{pmatrix} \varepsilon_1 & -ig & 0 \\ ig & \varepsilon_1 & 0 \\ 0 & 0 & \varepsilon_2 \end{pmatrix},
$$
where
$\varepsilon_1 = 1 + \frac{\Omega_p^2(\omega_0^2-\omega^2)}{(\omega_0^2-\omega^2)^2 - (\omega\omega_C)^2}$,
$\varepsilon_2 = 1 + \frac{\Omega_p^2}{\omega_0^2-\omega^2}$ (independent of $\omega_C$), and
$g = \frac{\Omega_p^2 \omega\omega_C}{(\omega_0^2-\omega^2)^2 - (\omega\omega_C)^2}$ is the gyration constant or gyrotropic factor.
This factor $g$ describes the rotation induced by the Lorentz force and is non-zero for magnetised materials, satisfying $g \sim \omega_C \sim |\mathbf{B}|$. The diagonal elements $\varepsilon_1$ also depend on $\omega_C$. The dielectric tensor describes a material that is effectively uniaxial (since $\varepsilon_1 \neq \varepsilon_2$ generally, with optic axis along $z$) and exhibits optical activity (due to $g \neq 0$) induced by the magnetic field. The magneto-optical Voigt parameter is sometimes defined as $Q \approx g/\varepsilon_1$ for small $g$.

### 3.1.1 The Faraday Effect
In the Faraday geometry ($\mathbf{k} \parallel \mathbf{B}_{\text{ext}}$, so light propagates along the $z$-axis), the off-diagonal terms in $\boldsymbol{\varepsilon}_r(\omega)$ lead to circular birefringence: right-circularly polarised (RCP) and left-circularly polarised (LCP) light experience different refractive indices, $n_+$ and $n_-$. This causes the plane of polarisation of incident linearly polarised light to rotate as it propagates through the medium. This is the **Faraday effect**. The angle of rotation $\theta_F$ is proportional to the magnetic field component $B_z$ along the propagation direction and the path length $d$:
$$
\theta_F = \mathcal{V} B_z d,
$$
where $\mathcal{V}$ is the Verdet constant, a material- and wavelength-dependent property. For example, $\mathcal{V}_{\text{Glass}} \approx 1 \, \text{rad}/(\text{T}\cdot\text{m})$. Cadmium manganese telluride ($\text{Cd}_{1-x}\text{Mn}_x\text{Te}$) exhibits a very large Verdet constant.

If absorption is included, all parameters ($\varepsilon_1, \varepsilon_2, g$) become complex. The specific Faraday rotation $\tilde{\phi}_F$ (rotation per unit length) becomes a complex quantity, where the real part describes the rotation of linear polarisation and the imaginary part describes the induced ellipticity (magnetic circular dichroism):
$$
\tilde{\phi}_F = \phi_F' + i\phi_F'' = \frac{\omega}{2cn_0}(n_- - n_+) \approx -\frac{\omega n_0}{2c} Q,
$$
where $n_0$ is the average refractive index in the absence of the magnetic field, and $Q$ is related to the gyrotropic factor $g$.

### 3.1.2 Voigt Effect
The Voigt effect (or Cotton-Mouton effect in liquids/gases) occurs in the Voigt geometry, where the static magnetic field $\mathbf{H}$ (or $\mathbf{B}_{\text{ext}}$) is perpendicular to the light propagation direction $\mathbf{k}$. This configuration induces linear birefringence (different refractive indices for light polarised parallel and perpendicular to $\mathbf{H}$) and/or linear dichroism. The Voigt effect typically scales quadratically with the magnetic field strength, $\Delta n \sim H^2$.

![Attachments/Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics/Script (Unofficial) 2.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/3%20Magneto-Optics/Script%20(Unofficial)%202.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=52&rect=239,675,412,758| ]]

### 3.1.3 Magneto-Optic Kerr Effect
The magneto-optic Kerr effect (MOKE) describes changes in the polarisation state (rotation and ellipticity) of light upon reflection from a magnetised surface. Since it is a reflection effect, the change is fixed for a given material and geometry, independent of a propagation length within the sample. The Kerr rotation and ellipticity are generally linearly related to the magnetisation $\mathbf{M}$ of the material (and thus to an applied field $\mathbf{H}$ for non-saturated ferromagnets or paramagnets). The angle of rotation is typically small, often less than $0.1^\circ$. Three main MOKE geometries are distinguished based on the orientation of the magnetisation vector $\mathbf{M}$ relative to the surface and the plane of incidence:

![Attachments/Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics/Script (Unofficial) 3.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/3%20Magneto-Optics/Script%20(Unofficial)%203.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=52&rect=156,567,498,646| ]]

Let $\mathcal{P}$ be the plane of incidence.
- **Polar MOKE (P-MOKE):** Magnetisation $\mathbf{M}$ is perpendicular to the reflection surface and parallel to the plane of incidence (if plane of incidence contains surface normal). Effectively $\mathbf{M} \perp \text{surface}$. Symmetry arguments considering reflection on $\mathcal{P}$ show that conversion between s- and p-polarised light (i.e., $r_{sp}$ and $r_{ps}$ components of reflection matrix are non-zero) is allowed.
- **Longitudinal MOKE (L-MOKE):** Magnetisation $\mathbf{M}$ is parallel to the reflection surface and parallel to the plane of incidence ($\mathbf{M} \perp \hat{\mathbf{n}}_{\text{surface}}, \mathbf{M} \parallel \mathcal{P}$). Similar to Polar MOKE, $s \leftrightarrow p$ conversion is allowed.
- **Transverse MOKE (T-MOKE):** Magnetisation $\mathbf{M}$ is parallel to the reflection surface but perpendicular to the plane of incidence ($\mathbf{M} \perp \hat{\mathbf{n}}_{\text{surface}}, \mathbf{M} \perp \mathcal{P}$). In this geometry, reflection on $\mathcal{P}$ is a symmetry operation if $\mathbf{M}$ is along $y$ and $\mathcal{P}$ is $xz$. This forbids $s \leftrightarrow p$ conversion. Instead, T-MOKE manifests as a change in the reflectivity ($|r_{pp}|^2$ and $|r_{ss}|^2$) and phase of s- and p-polarised light upon reversing $\mathbf{M}$, but no rotation of initially pure s- or p-polarised light.

The MOKE is mostly observed in ferromagnetic materials. For a material with complex refractive index $n_2$ in an environment $n_1$, let $\eta = n_2/n_1$. The magnitude of the Kerr rotation $\phi_K$ (or ellipticity) often shows these qualitative dependencies:
- Polar MOKE: $\phi_K \sim Q_M / (\eta^2-1)$ or similar, can be relatively large.
- Longitudinal MOKE: $\phi_K \sim Q_M \sin(2\theta_{inc}) / (\eta (\eta^2-1)(\eta^2\sin^2\theta_{inc}-1))$ or similar, often smaller than Polar.
- Transverse MOKE: $\Delta I_p/I_p \sim \mathfrak{Im}\{Q_M \varepsilon_{diag} / (\eta^2-1)\dots \}$, no rotation, only intensity/phase changes.
Here $Q_M$ is a magneto-optical constant related to the off-diagonal elements of $\boldsymbol{\varepsilon}_r$ induced by $\mathbf{M}$. The polar geometry often yields the largest signal and is frequently preferred for applications like magneto-optical data storage.

---