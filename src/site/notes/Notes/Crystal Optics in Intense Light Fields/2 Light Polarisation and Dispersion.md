---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/2-light-polarisation-and-dispersion/","hide":"true","updated":"2025-06-04T15:33:55.611+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Crystal Optics in Intense Light Fields/2 Light Polarisation and Dispersion#2.1 Jones Vector Formalism\|2.1 Jones Vector Formalism]]
[[Notes/Crystal Optics in Intense Light Fields/2 Light Polarisation and Dispersion#2.2 Dispersion of Light in Matter\|2.2 Dispersion of Light in Matter]]
[[Notes/Crystal Optics in Intense Light Fields/2 Light Polarisation and Dispersion#2.3 Classes of Electronic Transitions\|2.3 Classes of Electronic Transitions]]

---
# 2 Light Polarisation and Dispersion
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=19&selection=0,20,0,20| ]]

Light is an electromagnetic wave. Unlike sound waves, which are longitudinal, light is a transverse wave. This means that the direction of the electric (and magnetic) field oscillation is perpendicular to the direction of propagation (the wavevector $\mathbf{k}$). This is covered in more detail in my notes on [[Notes/2025 Quantum Electronics/1 Electromagnetic Theory of Light#1 Electromagnetic Theory of Light\|quantum electronics]]. We start by considering the simplest electromagnetic wave, the plane wave, described by its electric field:
$$
\mathbf{E}(\mathbf{r}, t)=\mathbf{E}_{0} e^{i(\omega t-\mathbf{k} \cdot \mathbf{r})}
$$
where the complex amplitude vector $\mathbf{E}_{0}$ is orthogonal to $\mathbf{k}$ (so $\mathbf{E}_0 \cdot \mathbf{k} = 0$), assuming propagation in an isotropic medium. The magnetic field is also important but for describing polarisation, we primarily focus on the electric field vector. A fundamental property of transverse waves is polarisation, which refers to the orientation and evolution of the electric field vector in the plane perpendicular to the direction of propagation. There are several ways to describe the polarisation of light. First, we will discuss the Jones vector formalism. Later, reference will be made to the Poincaré sphere formalism. This topic is also treated in [[Notes/2025 Quantum Electronics/9 Polarisation Optics#9 Polarisation Optics\|polarisation optics]].

For a plane wave propagating along the $z$-axis, the electric field vector has components only in the $x$ and $y$ directions: $\mathbf{E}(\mathbf{r}, t) = (E_x \hat{\mathbf{x}} + E_y \hat{\mathbf{y}}) e^{i(\omega t-kz)}$. The complex amplitudes of these components can be written as:
$$
\begin{aligned}
& \mathcal{E}_x = a_{x} e^{i \phi_{x}} \\
& \mathcal{E}_y = a_{y} e^{i \phi_{y}}
\end{aligned}
$$
where $a_x, a_y$ are real amplitudes and $\phi_x, \phi_y$ are initial phases. The physical fields are $E_x(z,t) = a_x \cos(\omega t - kz + \phi_x)$ and $E_y(z,t) = a_y \cos(\omega t - kz + \phi_y)$. Defining a relative phase $\delta = \phi_y - \phi_x$, we can write the complex amplitudes (omitting the common propagation factor $e^{i(\omega t - kz)}$ and overall phase $e^{i\phi_x}$) as representing the state of polarisation.

---
## 2.1 Jones Vector Formalism
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=19&selection=51,0,51,26| ]]

In the Jones vector formalism, the polarisation state of a completely polarised light wave is described by a two-component complex vector, the Jones vector $\mathbf{J}$. Using the complex amplitudes of the $x$ and $y$ components of the electric field:
$$
\mathbf{J} = \begin{pmatrix} \mathcal{E}_x \\ \mathcal{E}_y \end{pmatrix} = \begin{pmatrix} a_x e^{i \phi_x} \\ a_y e^{i \phi_y} \end{pmatrix} = e^{i \phi_x} \begin{pmatrix} a_x \\ a_y e^{i \delta} \end{pmatrix},
$$
where $\delta = \phi_y - \phi_x$ is the relative phase. It becomes clear that the polarisation state depends only on the relative amplitude $a_y/a_x$ and the relative phase $\delta$, not on the absolute overall phase $\phi_x$ or total intensity (unless normalised). This vector completely specifies the polarisation state.

Two polarisation states represented by Jones vectors $\mathbf{J}_1$ and $\mathbf{J}_2$ are orthogonal if their inner product is zero:
$$
\mathbf{J}_1^\dagger \mathbf{J}_2 = J_{1x}^* J_{2x} + J_{1y}^* J_{2y} = 0.
$$
This means $(a_{1x} e^{-i\phi_{1x}})(a_{2x} e^{i\phi_{2x}}) + (a_{1y} e^{-i\phi_{1y}})(a_{2y} e^{i\phi_{2y}}) = 0$.
Two orthogonal Jones vectors form a basis for the polarisation space, such that any polarisation state can be described as a linear combination of these two basis vectors.

Some common basis vectors and examples of normalised Jones vectors are:
- Linearly polarised light along the $x$-axis and $y$-axis:
    $$\mathbf{J}_{x}=\begin{pmatrix} 1 \\ 0 \end{pmatrix} \quad \text{and} \quad \mathbf{J}_{y}=\begin{pmatrix} 0 \\ 1 \end{pmatrix}.$$
- Left-circularly polarised (LCP) and right-circularly polarised (RCP) light (convention: looking towards the source, LCP E-field rotates counter-clockwise, RCP clockwise):
    $$\mathbf{J}_{\text{LCP}}=\frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ i \end{pmatrix} \quad \text{and} \quad \mathbf{J}_{\text{RCP}}=\frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -i \end{pmatrix}.$$
    (Note: definitions of LCP/RCP can vary; here $E_y$ leads $E_x$ by $\pi/2$ for LCP, and lags for RCP).

The Jones vector formalism is particularly useful because the action of deterministic optical devices or materials that alter the polarisation state of light can be described by $2 \times 2$ complex matrices, known as Jones matrices. If $\mathbf{J}_{\text{in}}$ is the input polarisation state, then the output state $\mathbf{J}_{\text{out}}$ after passing through an element with Jones matrix $\mathbf{M}$ is:
$$
\mathbf{J}_{\text{out}}=\mathbf{M} \mathbf{J}_{\text{in}} \quad \text{ with } \quad \mathbf{M}=\begin{pmatrix} M_{11} & M_{12} \\ M_{21} & M_{22} \end{pmatrix}.
$$
Each optical element is represented by its own Jones matrix. Some examples:

**Linear polariser** passing light polarised along the $x$-axis:
$$
\mathbf{M}_{\text{LP,x}}=\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}.
$$
A general **linear polariser** with its transmission axis at an angle $\varphi$ to the $x$-axis can be found by rotating this basic matrix. If $\mathbf{R}(\varphi) = \begin{pmatrix} \cos\varphi & -\sin\varphi \\ \sin\varphi & \cos\varphi \end{pmatrix}$ is the matrix for rotating the coordinate system by $-\varphi$ (or a vector by $+\varphi$), then a polariser whose transmission axis is along $x'$ (where $x'$ is rotated by $\varphi$ from $x$) is given by $\mathbf{M}_{\text{LP}}^{\varphi} = \mathbf{R}(\varphi) \mathbf{M}_{\text{LP,x}} \mathbf{R}(-\varphi)$:
$$
\begin{aligned}
\mathbf{M}_{\text{LP}}^{\varphi} & = \begin{pmatrix} \cos\varphi & -\sin\varphi \\ \sin\varphi & \cos\varphi \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} \cos\varphi & \sin\varphi \\ -\sin\varphi & \cos\varphi \end{pmatrix} \\
& = \begin{pmatrix} \cos^2\varphi & \sin\varphi\cos\varphi \\ \sin\varphi\cos\varphi & \sin^2\varphi \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1+\cos(2\varphi) & \sin(2\varphi) \\ \sin(2\varphi) & 1-\cos(2\varphi) \end{pmatrix}.
\end{aligned}
$$

**Wave plates (retarders)** introduce a relative phase shift $\Gamma$ between two orthogonal linear polarisation components. If the $x$-axis is the fast axis (lower refractive index) and the $y$-axis is the slow axis (higher refractive index, thus experiencing more phase delay), the Jones matrix is:
$$
\mathbf{M}_{\text{WP}}(\Gamma)=\begin{pmatrix} 1 & 0 \\ 0 & e^{-i\Gamma} \end{pmatrix}.
$$
- A **half-wave plate** ($\lambda/2$ plate) introduces $\Gamma=\pi$:
  $$\mathbf{M}_{\lambda/2}^0=\begin{pmatrix} 1 & 0 \\ 0 & e^{-i\pi} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.$$
- A **quarter-wave plate** ($\lambda/4$ plate) introduces $\Gamma=\pi/2$:
  $$\mathbf{M}_{\lambda/4}^0=\begin{pmatrix} 1 & 0 \\ 0 & e^{-i\pi/2} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -i \end{pmatrix}.$$
If a half-wave plate is aligned with its fast axis along $x$ (so $\varphi=0^\circ$), incident x-polarised light $\begin{pmatrix}1\\0\end{pmatrix}$ remains unchanged:
$$
\mathbf{J}_{\text{out}} = \mathbf{M}_{\lambda/2}^0 \mathbf{J}_{\text{in}} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 1 \\ 0 \end{pmatrix}=\begin{pmatrix} 1 \\ 0 \end{pmatrix}.
$$
However, if this half-wave plate is rotated such that its fast axis is at an angle of $45^{\circ}$ to the x-axis, its Jones matrix becomes $\mathbf{M}' = \mathbf{R}(45^\circ) \mathbf{M}_{\lambda/2}^0 \mathbf{R}(-45^\circ) = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Then, x-polarised input light is transformed to y-polarised light:
$$
\mathbf{J}_{\text{out}} = \mathbf{M}' \mathbf{J}_{\text{in}}=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 0 \end{pmatrix}=\begin{pmatrix} 0 \\ 1 \end{pmatrix}.
$$
A key property of a half-wave plate is that if the input is linearly polarised and the HWP's fast axis is at an angle $\varphi$ to this input polarisation, the output polarisation is rotated by $2\varphi$. Thus, a HWP acts as a linear polarisation rotator.

---
## 2.2 Dispersion of Light in Matter
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=35&selection=33,0,33,14| ]]

We now slightly shift the topic to the dispersion of light in matter. The amplitude and phase response of an electromagnetic wave interacting with a material is generally a function of wavelength or frequency. We will treat a crystal lattice (or more generally, a dielectric material) as a collection of bound charges that can be modelled as harmonic oscillators. This is the **Lorentz model**. For more details on this approach, see [[Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media#2.1 Origin of Dispersion\|this chapter]]. These charge oscillations lead to a macroscopic polarisation $\mathbf{P}(\omega)$. The driving force in the following model is the electric field $\mathbf{E}$ of the light wave:
$$
\frac{\partial^2 P_x}{\partial t^2}+\Gamma \frac{\partial P_x}{\partial t}+\omega_0^2 P_x=\frac{N e^2}{m_e} E_x,
$$
where $P_x$ is one component of the polarisation density, $\Gamma$ is a damping constant, $\omega_0$ is the resonant angular frequency of the oscillators, $N$ is the number of oscillators per unit volume, $e$ is the elementary charge, $m_e$ is the effective mass of the oscillating charge, and $E_x$ is the $x$-component of the local electric field.
By Fourier transforming (assuming $E_x(t) \leftrightarrow E_x(\omega)$, $P_x(t) \leftrightarrow P_x(\omega)$, and $\partial/\partial t \leftrightarrow i\omega$ for $e^{i\omega t}$ time dependence), we obtain:
$$
(-\omega^2 + i\Gamma\omega + \omega_0^2)P_x(\omega) = \frac{N e^2}{m_e} E_x(\omega).
$$
Using the definition $P_x(\omega)=\varepsilon_0\chi_e(\omega) E_x(\omega)$, where $\chi_e(\omega)$ is the complex electric susceptibility, we find:
$$
\chi_e(\omega) = \frac{N e^2}{\varepsilon_0 m_e} \frac{1}{\omega_0^2-\omega^2+i \Gamma \omega}.
$$
The relative permittivity (or dielectric function) is $\varepsilon_r(\omega) = 1 + \chi_e(\omega)$.
In the case of multiple optical resonances (indexed by $j$) with different resonant frequencies $\omega_{0,j}$, damping constants $\Gamma_j$, and oscillator strengths $f_j \sim N_j q_j^2/m_j$, and including a background permittivity $\varepsilon_b$ to account for contributions from far-off resonances (such as higher-energy electronic transitions), the total dielectric function becomes:
$$
\varepsilon_r(\omega)=\varepsilon_b+\sum_j \frac{N_j q_j^2}{\varepsilon_0 m_j} \frac{1}{\omega_{0,j}^2-\omega^2+i \Gamma_j \omega}.
$$
Introducing the plasma frequency for each oscillator type as $\omega_{p,j}^2=\frac{N_j q_j^2}{\varepsilon_0 m_j}$, and neglecting damping ($\Gamma_j \approx 0$) for transparent regions far from resonance, we may write:
$$
\varepsilon_r(\omega) \approx \varepsilon_b + \sum_j \frac{\omega_{p,j}^2}{\omega_{0,j}^2-\omega^2} \quad (\text{Sellmeier-like form}).
$$
For a single resonance, this is $\varepsilon_r(\omega) = \varepsilon_b + \frac{\omega_p^2}{\omega_0^2-\omega^2}$. This can be rewritten in the Kurosawa form (if $\varepsilon_b$ represents $\varepsilon_\infty$, the high-frequency permittivity limit):
$$
\varepsilon_r(\omega) = \varepsilon_b \frac{\omega_L^2-\omega^2}{\omega_0^2-\omega^2}, \quad \text{with} \quad \omega_L^2=\omega_0^2+\frac{\omega_p^2}{\varepsilon_b}.
$$
Here, $\omega_0$ is the transverse resonance frequency ($\omega_{TO}$ or $\omega_\perp$) where $\varepsilon_r(\omega) \to \infty$ (for $\Gamma=0$), and $\omega_L$ is the longitudinal resonance frequency ($\omega_{LO}$ or $\omega_\parallel$) where $\varepsilon_r(\omega_L)=0$. This form is particularly relevant for describing the dispersion of optical phonons in ionic crystals or excitons in semiconductors. The Lyddane-Sachs-Teller (LST) relation connects these frequencies to the static ($\varepsilon_s = \varepsilon_r(0)$) and high-frequency ($\varepsilon_\infty = \varepsilon_b$) dielectric constants: $\frac{\varepsilon_s}{\varepsilon_\infty} = \frac{\omega_L^2}{\omega_0^2}$.

The dispersion relation $k(\omega) = \omega\sqrt{\varepsilon_r(\omega)}/c$ exhibits characteristic features due to this resonant dielectric function:

![Attachments/Script (Unofficial) 1.webp|700](/img/user/Attachments/Script%20(Unofficial)%201.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=37&rect=272,394,433,649| ]]
Figure shows uncoupled photon dispersion $k=\omega\sqrt{\varepsilon_\infty}/c$ and $k=\omega\sqrt{\varepsilon_s}/c$ as dashed lines, the transverse oscillator resonance at $\omega_\perp=\omega_0$, and the longitudinal mode at $\omega_\parallel=\omega_L$. The solid red curves are the upper and lower polariton branches.

When light interacts with such resonant matter, it induces a polarisation which couples to the electromagnetic wave. This coupled excitation of light and matter (such as an optical phonon or exciton) is called a **polariton**. In the figure, the horizontal line at $\omega_\parallel$ represents a purely longitudinal excitation (where $\varepsilon_r=0$), while the resonance at $\omega_\perp=\omega_0$ is for a transverse excitation. The interaction (coupling) leads to an avoided crossing behaviour, forming the upper and lower polariton branches.

---
## 2.3 Classes of Electronic Transitions
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=38&selection=2,0,2,39| ]]

To understand the origin of different $\omega_{0,j}$ and oscillator strengths in the dielectric function of materials, we consider three major classes of electronic transitions relevant for crystal optics. These excitations lead to characteristic features in the optical spectra:
- In **ionic crystals** (like NaCl) or covalent **semiconductors** (like Si, GaAs) with occupied valence (often p-like) and empty conduction (often s-like) bands, charge excitations correspond to interband transitions. These typically occur at energies of $1-10 \, \text{eV}$. These crystals have extended electronic wave functions (Bloch states), and the crystal field (periodic potential) determines the band structure. For example, in ZnO, transitions like $\mathrm{O}^{2-}(2\text{p}) \rightarrow \mathrm{Zn}^{2+}(4\text{s})$ contribute to the optical response.
- **Transition metal compounds** (containing elements with partially filled d-shells, $3d^N, 4d^N, 5d^N$) are often magnetic or strongly correlated. Their optical spectra in the visible and near-UV are frequently dominated by d-d transitions, typically at energies $\lesssim 10 \, \text{eV}$. The d-electron wave functions are relatively localised. The local crystal field exerted by the nearest neighbour anions ('ligands') splits the d-orbital degeneracy. For instance, in an octahedral ligand field (common for $\text{Cr}^{3+}$ in $\text{Al}_2\text{O}_3$ (ruby) or $\text{Mn}^{3+}$ in $\text{LaMnO}_3$), the five d-orbitals split into a lower energy $t_{2g}$ set (three orbitals, with lobes pointing between ligands) and a higher energy $e_g$ set (two orbitals, with lobes pointing towards ligands).
- In **rare earth compounds** (containing elements with partially filled 4f or 5f shells), the f-orbitals are very close to the nucleus, well-shielded by outer electrons. Consequently, the $f$-electron wave functions are only weakly perturbed by the ligand and crystal fields. This results in very sharp, atom-like absorption and emission lines corresponding to f-f transitions, which can occur across the UV, visible, and infrared spectrum.

---