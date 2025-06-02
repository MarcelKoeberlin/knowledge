---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics-gallmann/9-polarisation-optics/","hide":"true","updated":"2025-05-30T12:53:01.000+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.1 Poincaré Sphere and Stokes Vector\|9.1 Poincaré Sphere and Stokes Vector]]
[[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.2 Jones Vector Formalism\|9.2 Jones Vector Formalism]]
[[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.3 Anisotropic Materials\|9.3 Anisotropic Materials]]
[[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.4 Optical Activity\|9.4 Optical Activity]]
[[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.5 Magneto-Optics\|9.5 Magneto-Optics]]
[[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.6 Electro-Optics\|9.6 Electro-Optics]]

---
# 9 Polarisation Optics
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=184&selection=1,0,1,19| ]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=2&selection=0,0,0,65| ]]

As described [[Notes/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.7 Polarisation\|earlier]], a basic property of light is its polarisation. There are several different ways to describe the polarisation state of light. Here we will discuss three of the more common formalisms: the Poincaré sphere, the Stokes parameters, and the Jones vector formalism.

---
## 9.1 Poincaré Sphere and Stokes Vector
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=184&selection=3,0,7,13| ]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=4&selection=0,28,0,28| ]]

Let us assume that we have a plane wave propagating in the $+z$ direction in free space. Using complex notation, the transverse electric field components $\mathcal{E}_x$ and $\mathcal{E}_y$ can be written at a specific point (say, $z=0$) as a function of time:
$$
\begin{aligned}
\mathcal{E}_x(t) & =a_x e^{i(\omega t+\phi_x)}, \\
\mathcal{E}_y(t) & =a_y e^{i(\omega t+\phi_y)},
\end{aligned}
$$
where $a_x, a_y, \phi_x,$ and $\phi_y$ are real constants representing the amplitudes and initial phases of the $x$ and $y$ components, respectively. The real, physical electric field components are then:
$$
\begin{aligned}
E_x(t) & = \mathfrak{Re}\left[\mathcal{E}_x(t)\right] = a_x \cos(\omega t+\phi_x), \\
E_y(t) & = \mathfrak{Re}\left[\mathcal{E}_y(t)\right] = a_y \cos(\omega t+\phi_y).
\end{aligned}
$$
These are parametric equations describing an ellipse in the $xy$-plane as time evolves, known as the polarisation ellipse:
$$
\left(\frac{E_x}{a_x}\right)^2 + \left(\frac{E_y}{a_y}\right)^2 - 2 \frac{E_x E_y}{a_x a_y} \cos(\phi) = \sin^2(\phi),
$$
where $\phi = \phi_y - \phi_x$ is the relative phase difference. This is depicted in the following figure:

![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/QE_script.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/QE_script.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=185&rect=151,260,451,540| ]]

The shape and orientation of this ellipse can be characterised by two angles: an orientation angle $\psi$ (the angle of the major axis of the ellipse with respect to the $x$-axis) and an ellipticity angle $\chi$ (where $\tan|\chi|$ is the ratio of the semi-minor to semi-major axes). These are given by:
$$
\begin{gathered}
\tan(2\psi)=\frac{2 (a_y/a_x)}{1-(a_y/a_x)^2} \cos\phi = \frac{2 R}{1-R^2} \cos\phi, \\
\sin(2\chi)=\frac{2 (a_y/a_x)}{1+(a_y/a_x)^2} \sin\phi = \frac{2 R}{1+R^2} \sin\phi, \\
\text{where } R=\frac{a_y}{a_x} \text{ and } \phi=\phi_y-\phi_x.
\end{gathered}
$$
The sign of $\chi$ indicates the handedness of the polarisation: positive $\chi$ for right-handed elliptical polarisation (clockwise rotation of $\mathbf{E}$ when looking towards the source, by one convention) and negative $\chi$ for left-handed. These two angles, $2\psi$ (longitude, ranging from $0$ to $2\pi$) and $2\chi$ (latitude, ranging from $-\pi/2$ to $\pi/2$), uniquely define a point on the surface of a sphere of unit radius, known as the **Poincaré sphere**. Each point on the sphere represents a distinct polarisation state.

![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/QE_script 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/QE_script%201.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=186&rect=119,541,478,701| ]]
![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/05_Devices_and_applications.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/05_Devices_and_applications.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=7&rect=43,98,403,460| ]]
![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/05_Devices_and_applications 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/05_Devices_and_applications%201.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=8&rect=33,112,440,453| ]]

Linear polarisations lie on the equator of the Poincaré sphere ($2\chi=0$). Right-circular polarisation corresponds to the north pole ($2\chi=\pi/2$), and left-circular polarisation to the south pole ($2\chi=-\pi/2$). The Poincaré sphere describes only the polarisation state, not the overall intensity of the light.
Another representation, which includes intensity information, is the set of **Stokes parameters**:
$$
\begin{aligned}
S_0 & =a_x^2+a_y^2 && (\text{Total intensity}), \\
S_1 & =a_x^2-a_y^2 && (\text{Difference between x- and y-linear polarisation intensity}),\\
S_2 & =2 a_x a_y \cos\phi && (\text{Difference between +45° and -45° linear polarisation intensity}), \\
S_3 & =2 a_x a_y \sin\phi && (\text{Difference between right- and left-circular polarisation intensity}).
\end{aligned}
$$
These parameters are not all independent. For fully polarised light, $S_0^2 = S_1^2+S_2^2+S_3^2$. For partially polarised light, $S_0^2 \ge S_1^2+S_2^2+S_3^2$. The Stokes parameters $S_1, S_2, S_3$ can be viewed as Cartesian coordinates of a point on or inside the Poincaré sphere (if normalised by $S_0$), thus providing an equivalent description of polarisation state, while $S_0$ gives the total intensity.

---
## 9.2 Jones Vector Formalism
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=187&selection=99,0,101,22| ]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=11&selection=0,39,0,39| ]]

Another powerful way to describe fully polarised light is using the Jones vector, a two-component complex vector representing the amplitudes and phases of the $x$ and $y$ components of the electric field:
$$
\mathbf{J}=\begin{pmatrix} \mathcal{E}_x(0) \\ \mathcal{E}_y(0) \end{pmatrix} = \begin{pmatrix} a_x e^{i \phi_x} \\ a_y e^{i \phi_y} \end{pmatrix},
$$
where the common $e^{i\omega t}$ factor is omitted. This vector completely specifies the polarisation state and amplitude of the light field at a particular point. Some examples include:
- Linearly polarised light along x: $\mathbf{J}=\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (amplitude normalised)
- Linearly polarised light along y: $\mathbf{J}=\begin{pmatrix} 0 \\ 1 \end{pmatrix}$
- Right-circularly polarised light: $\mathbf{J}=\frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ i \end{pmatrix}$ (by one convention, where $E_y$ leads $E_x$ by $\pi/2$)
- Left-circularly polarised light: $\mathbf{J}=\frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -i \end{pmatrix}$

Two states of polarisation represented by Jones vectors $\mathbf{J}_1$ and $\mathbf{J}_2$ are orthogonal if their inner product is zero:
$$
\mathbf{J}_1^\dagger \mathbf{J}_2 = J_{1x}^* J_{2x} + J_{1y}^* J_{2y} = a_{1x}a_{2x} e^{i(\phi_{2x}-\phi_{1x})} + a_{1y}a_{2y} e^{i(\phi_{2y}-\phi_{1y})} = 0.
$$

Examples of orthogonal polarisation states are x- and y-linearly polarised light, or right- and left-circularly polarised light. Any Jones vector can be represented as a linear combination of two orthogonal Jones vectors (which form a basis).

The utility of this formalism lies in describing the action of optical devices that alter the polarisation state or intensity of light using $2\times2$ complex matrices, known as Jones matrices. If the input polarisation is described by $\mathbf{J}_{\text{in}}$, the output polarisation $\mathbf{J}_{\text{out}}$ after passing through an optical element with Jones matrix $\mathbf{T}$ is:
$$
\mathbf{J}_{\text{out}}=\mathbf{T}\mathbf{J}_{\text{in}}.
$$
Some examples of Jones matrices for common optical elements:
- Linear polariser passing $x$-polarised light (and blocking $y$-polarised light):
    $$\mathbf{T}_{\text{LP,x}}=\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$$
- Wave retarder (wave plate): Introduces a phase shift $\Gamma$ between two orthogonal linear polarisation components. If the $x$-axis is the fast axis (lower refractive index) and the $y$-axis is the slow axis (higher refractive index), the matrix is:
    $$\mathbf{T}_{\text{ret}}=\begin{pmatrix} 1 & 0 \\ 0 & e^{-i \Gamma} \end{pmatrix}$$
    where $\Gamma = (n_s-n_f)k_0 d$ is the retardance ($n_s, n_f$ are slow/fast refractive indices, $d$ is thickness).
    - For $\Gamma=\pi/2$, it is a quarter-wave plate. It can convert linearly polarised light (at $45^\circ$ to its axes) to circularly polarised light, and vice versa.
    - For $\Gamma=\pi$, it is a half-wave plate. It can rotate the plane of linearly polarised light or convert right-circularly polarised light into left-circularly polarised light, and vice versa.
- Ideal polarisation rotator that rotates the plane of linear polarisation by an angle $\theta$ counter-clockwise:
    $$\mathbf{T}_{\text{rot}}(\theta)=\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$
The Jones matrices for wave retarders given above assume their principal axes (fast/slow) are aligned with the $x$ and $y$ coordinate axes. If a wave retarder (whose fast axis is, say, along its own $x'$-axis) is rotated by an angle $\theta$ with respect to the laboratory $x$-axis, its Jones matrix $\mathbf{T}'$ in the lab frame is obtained by a similarity transformation:
$$
\mathbf{T}'(\theta) = \mathbf{R}(-\theta) \mathbf{T}_{\text{ret,axes}} \mathbf{R}(\theta),
$$
where $\mathbf{R}(\theta) = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix}$ is the coordinate rotation matrix from lab to retarder frame (and $\mathbf{R}(-\theta)$ is its inverse, from retarder to lab frame).
This transformation shows, for instance, that a half-wave plate with its fast axis at an angle $\theta$ to an incident linear polarisation will rotate that linear polarisation by an angle $2\theta$. Some more examples:

![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/05_Devices_and_applications 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/05_Devices_and_applications%202.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=20&rect=23,128,599,444| ]]

**Generating arbitrary polarisation states**
Using a sequence of wave plates, it is possible to transform any given input polarisation state into any desired output polarisation state. For instance, starting with linearly polarised light, an arbitrary polarisation state can be generated using a combination of a quarter-wave plate (QWP) and a half-wave plate (HWP), often followed by another QWP for full generality.
A common setup is QWP($\theta_1$) - HWP($\theta_2$) - QWP($\theta_3$), where $\theta_i$ are the orientation angles of the fast axes.

![Attachments/05_Devices_and_applications.webp|700](/img/user/Attachments/05_Devices_and_applications.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=21&rect=18,138,435,470| ]]
Figure illustrates how HWP rotates states on the equator, and QWP+HWP can move states off the equator.

![Attachments/05_Devices_and_applications 1.webp|700](/img/user/Attachments/05_Devices_and_applications%201.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=21&rect=516,243,802,365| ]]

The Jones matrix for an element (like a QWP or HWP, whose standard matrix is $\mathbf{J}(0)$ when aligned with axes) rotated by an angle $\theta$ is $\mathbf{J}_{\text{element}}(\theta)=\mathbf{R}(-\theta) \mathbf{J}_{\text{element}}(0) \mathbf{R}(\theta)$. The final Jones matrix of the system is a product of three such matrices:
$$
\mathbf{J}_{\text{system}} = \mathbf{J}_{\text{QWP}}(\theta_3) \cdot \mathbf{J}_{\text{HWP}}(\theta_2) \cdot \mathbf{J}_{\text{QWP}}(\theta_1).
$$
Since each Jones matrix for an ideal (lossless) wave plate is unitary, their product is also unitary. A general $2 \times 2$ unitary matrix with determinant 1 (an element of SU(2)) has three independent parameters, which can be mapped to the three rotation angles $\theta_1, \theta_2, \theta_3$.
The total Jones matrix transforms an arbitrary input polarisation $\mathbf{E}_{\text{in}}$ (represented as a Jones vector) as:
$$
\mathbf{E}_{\text{out}} = \mathbf{J}_{\text{system}} \mathbf{E}_{\text{in}}.
$$
Since any SU(2) transformation corresponds to a rotation on the Poincaré sphere, this setup can convert any input polarisation state into any other output polarisation state. Essentially, the first QWP can transform an initial linear polarisation into a general elliptical state. The HWP can then rotate this elliptical state on the Poincaré sphere (effectively changing its orientation $\psi$ and ellipticity $\chi$ magnitude). The second QWP provides the final adjustment needed to reach any arbitrary point on the sphere.

---
## 9.3 Anisotropic Materials
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=189&selection=51,0,53,31| ]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=26&selection=0,0,0,45| ]]

Thinking back to the [[Notes/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.4 Macroscopic Approximation\|assumptions]] made in [[Notes/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1 Electromagnetic Theory of Light\|chapter 1]], we will now relax one of them: the assumption of an isotropic material.

The isotropy assumption stated: $\mathbf{P}$ and $\mathbf{M}$ align with $\mathbf{E}$ and $\mathbf{B}$ (or $\mathbf{H}$), respectively, either in the same or opposite direction. This implies that the susceptibility, permittivity, and permeability are scalar quantities. This assumption is violated in many crystalline materials and other ordered media.

Many real materials are not isotropic. This is true for any material that exhibits some form of structural order over scales comparable to or larger than molecular dimensions, such as single crystals or liquid crystals. In such anisotropic materials, the optical properties (like refractive index) depend on both the direction of light propagation and its polarisation state. Examples of isotropic materials include amorphous solids (like glass), gases, most liquids, and polycrystalline materials if the crystallites are randomly oriented and much smaller than the wavelength.

![Attachments/05_Devices_and_applications 2.webp|700](/img/user/Attachments/05_Devices_and_applications%202.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=26&rect=124,149,721,369| ]]

On a macroscopic scale, isotropic media do not possess a directional dependence of their optical properties. Even cubic crystals, due to their high degree of symmetry, are optically isotropic.

We will now adjust our previously derived equations to account for anisotropic materials. The primary change is that the scalar electric susceptibility $\chi_e$ (and thus relative permittivity $\varepsilon_r$) becomes a second-rank tensor $\boldsymbol{\chi}_e$ (or $\boldsymbol{\varepsilon}_r$).
In an isotropic material, $\mathbf{D}$ is parallel to $\mathbf{E}$ ($\mathbf{D}=\varepsilon_0 \varepsilon_r \mathbf{E}$). In an anisotropic material (assuming linearity but no optical activity for now), this relationship becomes tensorial:
$$
D_j=\varepsilon_0 \sum_k (\varepsilon_r)_{jk} E_k \quad \text{or} \quad \mathbf{D}=\varepsilon_0 \boldsymbol{\varepsilon}_r \mathbf{E}.
$$
The relative permittivity (dielectric constant) becomes the dielectric tensor $\boldsymbol{\varepsilon}_r$:
$$
\boldsymbol{\varepsilon}_r = \begin{pmatrix} \varepsilon_{xx} & \varepsilon_{xy} & \varepsilon_{xz} \\ \varepsilon_{yx} & \varepsilon_{yy} & \varepsilon_{yz} \\ \varepsilon_{zx} & \varepsilon_{zy} & \varepsilon_{zz} \end{pmatrix}.
$$
Similarly, for non-magnetic or weakly magnetic materials at optical frequencies, we typically still assume $\mu_r \approx 1$ (so $\mathbf{M} \approx 0$ and $\mathbf{B} \approx \mu_0 \mathbf{H}$). If magnetism were significant and anisotropic, the relative permeability $\mu_r$ would also be a tensor: $B_j=\mu_0 \sum_k (\mu_r)_{jk} H_k$.

Symmetries in the material's crystal structure impose symmetries on these tensors, reducing the number of independent components ([[Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects#1.1 Symmetry Principles\|Neumann's Principle]]: material property tensors must possess at least the symmetry of the point group of the crystal). For non-absorbing, non-optically active media, the dielectric tensor $\boldsymbol{\varepsilon}_r$ is real and symmetric ($\varepsilon_{jk}=\varepsilon_{kj}$). A real symmetric tensor can always be diagonalised by a suitable rotation of the coordinate system to its principal axes.
One way to visualise the dielectric tensor in the real, symmetric case is to consider the electric energy density $w_e$:
$$
w_e = \frac{1}{2} \mathbf{E} \cdot \mathbf{D} = \frac{1}{2} \sum_j E_j D_j = \frac{1}{2} \varepsilon_0 \sum_{j,k} E_j (\varepsilon_r)_{jk} E_k.
$$
The equation $\sum_{j,k} (\varepsilon_r)_{jk} E_j E_k = \text{constant}$ defines an ellipsoid in $\mathbf{E}$-space. Alternatively, considering $\sum_{j,k} (\varepsilon_r^{-1})_{jk} D_j D_k = \text{constant}$ defines the index ellipsoid (or optical indicatrix) in $\mathbf{D}$-space, which is more commonly used. In the principal axis system $(x', y', z')$, the dielectric tensor is diagonal:
$$
\boldsymbol{\varepsilon}_r = \begin{pmatrix} \varepsilon_{x'} & 0 & 0 \\ 0 & \varepsilon_{y'} & 0 \\ 0 & 0 & \varepsilon_{z'} \end{pmatrix}.
$$
In this system, $D_{x'} = \varepsilon_0 \varepsilon_{x'} E_{x'}$, $D_{y'} = \varepsilon_0 \varepsilon_{y'} E_{y'}$, $D_{z'} = \varepsilon_0 \varepsilon_{z'} E_{z'}$.
Note that even in the principal axis system, $\mathbf{D}$ and $\mathbf{E}$ are generally not parallel unless the field is aligned along one of the principal axes or unless $\varepsilon_{x'}=\varepsilon_{y'}=\varepsilon_{z'}$ (isotropic case).
The quantities $n_{x'} = \sqrt{\varepsilon_{x'}}$, $n_{y'} = \sqrt{\varepsilon_{y'}}$, $n_{z'} = \sqrt{\varepsilon_{z'}}$ are the principal refractive indices.
-   Isotropic: $n_{x'}=n_{y'}=n_{z'}$.
-   Uniaxial: Two principal indices are equal (e.g., $n_{x'}=n_{y'} = n_o \neq n_{z'} = n_e$). The $z'$-axis is then the optic axis.
-   Biaxial: All three principal indices are different.

For plane waves in non-magnetic, anisotropic media, the vectors $(\mathbf{D}, \mathbf{H}, \mathbf{k})$ form an orthogonal triad, and $(\mathbf{E}, \mathbf{H}, \mathbf{S})$ form another orthogonal triad. Crucially, $\mathbf{E}$ is not generally parallel to $\mathbf{D}$, and the Poynting vector $\mathbf{S}$ (direction of energy flow) is not generally parallel to the wavevector $\mathbf{k}$ (direction of phase propagation). The angle $\alpha$ between $\mathbf{S}$ and $\mathbf{k}$ is the walk-off angle.

![Attachments/05_Devices_and_applications 4.webp|700](/img/user/Attachments/05_Devices_and_applications%204.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=31&rect=409,84,797,417| ]]

### 9.3.1 Index Ellipsoid and Ellipse

In the principal coordinate system $(x,y,z)$, the index ellipsoid (optical indicatrix) is defined by the equation:
$$
\frac{x^2}{n_x^2}+\frac{y^2}{n_y^2}+\frac{z^2}{n_z^2}=1,
$$
where $n_x, n_y, n_z$ are the principal refractive indices.

![Attachments/05_Devices_and_applications 5.webp|700](/img/user/Attachments/05_Devices_and_applications%205.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=34&rect=382,97,756,508| ]]

For a given direction of wave propagation $\mathbf{k}$, the allowed polarisations (directions of $\mathbf{D}$) and corresponding refractive indices can be found by considering the intersection of a plane normal to $\mathbf{k}$ (passing through the origin) with the index ellipsoid. This intersection is an ellipse (the "index ellipse"). The semi-axes of this index ellipse give the two allowed refractive indices for waves propagating along $\mathbf{k}$, and their directions correspond to the two allowed orthogonal directions of $\mathbf{D}$ for these eigenpolarisations (normal modes). These two waves propagate with different phase velocities $c/n_1'$ and $c/n_2'$, where $n_1'$ and $n_2'$ are the lengths of the semi-axes.

If light is linearly polarised along one of the principal axes (say, $\mathbf{E}$ along $x$) and propagates along another principal axis (say, $z$), then $\mathbf{D}$ is parallel to $\mathbf{E}$, and the wave behaves as in an isotropic medium with refractive index $n_x$, propagating with phase velocity $c/n_x$.
If incident light propagates along a principal axis (say, $z$) but its polarisation is not aligned with another principal axis ($x$ or $y$), it can be decomposed into components along $x$ and $y$. These components travel with phase velocities $c/n_x$ and $c/n_y$, respectively. After propagating a distance $d$, the Jones vector changes from $\begin{pmatrix} A_x e^{i\phi_x} \\ A_y e^{i\phi_y} \end{pmatrix}$ to $\begin{pmatrix} A_x e^{i(\phi_x - k_x d)} \\ A_y e^{i(\phi_y - k_y d)} \end{pmatrix}$, where $k_x = n_x \omega/c$ and $k_y = n_y \omega/c$. The phase retardation $\Gamma$ introduced between the two components is:
$$
\Gamma = (k_y - k_x)d = \frac{\omega d}{c}(n_y-n_x) = \frac{2\pi d}{\lambda_0}(n_y-n_x).
$$
This is the principle of wave plates.

In a uniaxial crystal (with optic axis along $z$, so $n_x=n_y=n_o$ (ordinary index) and $n_z=n_e$ (extraordinary index)), if $\mathbf{k}$ makes an angle $\theta$ with the optic axis (z-axis):
-   One normal mode is the ordinary wave (o-wave), polarised with its $\mathbf{D}$ vector (and $\mathbf{E}$) perpendicular to the plane containing $\mathbf{k}$ and the optic axis. It always experiences refractive index $n_o$. $\mathbf{S}$ is parallel to $\mathbf{k}$.
-   The other normal mode is the extraordinary wave (e-wave), polarised with its $\mathbf{D}$ vector in the plane containing $\mathbf{k}$ and the optic axis (and $\mathbf{D} \perp \mathbf{k}$). Its refractive index $n_e(\theta)$ depends on $\theta$:
    $$
    \frac{1}{n_e(\theta)^2}=\frac{\cos^2 \theta}{n_o^2}+\frac{\sin^2 \theta}{n_e^2}.
    $$
For the e-wave, $\mathbf{E}$ is not generally parallel to $\mathbf{D}$, and $\mathbf{S}$ is not generally parallel to $\mathbf{k}$ (walk-off occurs).

![Attachments/05_Devices_and_applications 6.webp|700](/img/user/Attachments/05_Devices_and_applications%206.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=39&rect=47,95,835,372| ]]

### 9.3.2 Dispersion Relation

The dispersion relation $\omega(\mathbf{k})$ in an anisotropic medium is more complex than $\omega = c|\mathbf{k}|/n$. The relation $\mathbf{k} \times(\mathbf{k} \times \mathbf{E})+\omega^2 \mu_0 \mathbf{D}=0$ leads to a matrix equation for the components of $\mathbf{E}$ (or $\mathbf{D}$) in the principal axis system:
$$
\begin{pmatrix} n_x^2 k_0^2-k_y^2-k_z^2 & k_x k_y & k_x k_z \\ k_y k_x & n_y^2 k_0^2-k_x^2-k_z^2 & k_y k_z \\ k_z k_x & k_z k_y & n_z^2 k_0^2-k_x^2-k_y^2 \end{pmatrix} \begin{pmatrix} E_x \\ E_y \\ E_z \end{pmatrix} = \mathbf{0},
$$
where $k_0 = \omega/c$. For non-trivial solutions, the determinant of this matrix must be zero. This condition defines a 3D surface in k-space for a given $\omega$, known as the normal surface or k-surface. It generally consists of two sheets, corresponding to the two allowed eigenpolarisations.

![Attachments/QE_script.webp|700](/img/user/Attachments/QE_script.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=194&rect=111,533,490,673| ]]

For a uniaxial crystal with optic axis along $z$ ($n_x=n_y=n_o, n_z=n_e$), the determinant condition simplifies to:
$$
(k_x^2+k_y^2+k_z^2 - n_o^2 k_0^2)\left(\frac{k_x^2+k_y^2}{n_e^2}+\frac{k_z^2}{n_o^2}-k_0^2\right)=0.
$$
This yields two solutions for $|\mathbf{k}|^2 = k_x^2+k_y^2+k_z^2$:
1.  A sphere: $k_x^2+k_y^2+k_z^2 = n_o^2 k_0^2$ (ordinary wave).
2.  An ellipsoid of revolution: $\frac{k_x^2+k_y^2}{n_e^2}+\frac{k_z^2}{n_o^2}=k_0^2$ (extraordinary wave).

In a 2D plot (assuming $k_y=0$ without loss of generality due to rotational symmetry around optic axis):

![Attachments/Pasted image 20250512152514.png|700](/img/user/Attachments/Pasted%20image%2020250512152514.png)

The effective refractive index for the extraordinary wave whose wavevector $\mathbf{k}$ makes an angle $\theta$ with the optic axis (z-axis) is $n_e(\theta)$, given by $\frac{1}{n_e(\theta)^2}=\frac{\sin^2 \theta}{n_e^2}+\frac{\cos^2 \theta}{n_o^2}$.

The directions of $\mathbf{E}$, $\mathbf{D}$, $\mathbf{S}$, and $\mathbf{k}$ for ordinary and extraordinary waves are shown:

![Attachments/05_Devices_and_applications 7.webp|700](/img/user/Attachments/05_Devices_and_applications%207.webp)
![Attachments/05_Devices_and_applications 8.webp|700](/img/user/Attachments/05_Devices_and_applications%208.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=43&rect=406,117,737,403| ]]
For the o-wave, $\mathbf{S} \parallel \mathbf{k}$. For the e-wave, $\mathbf{S}$ is generally not parallel to $\mathbf{k}$ (walk-off). $\mathbf{E}$ is tangential to the normal surface at point $\mathbf{k}/k_0$.

Examples of uniaxial crystals are calcite ($n_e < n_o$, negative uniaxial) and quartz ($n_e > n_o$, positive uniaxial).

![Attachments/05_Devices_and_applications 9.webp|700](/img/user/Attachments/05_Devices_and_applications%209.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=44&rect=84,227,719,438| ]]

### 9.3.3 Refraction at Interfaces

Birefringence (double refraction) occurs when an unpolarised or generally polarised light beam is incident obliquely on the surface of an anisotropic crystal. The incident wave generally splits into two refracted waves (o-wave and e-wave) that travel in different directions with different polarisations and speeds.

![Attachments/05_Devices_and_applications 10.webp|700](/img/user/Attachments/05_Devices_and_applications%2010.webp)
![Attachments/05_Devices_and_applications 11.webp|700](/img/user/Attachments/05_Devices_and_applications%2011.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=45&rect=484,130,761,421| ]]

The directions of the refracted waves are determined by applying the boundary condition that the tangential component of $\mathbf{k}$ must be conserved across the interface, separately for the o-wave and e-wave using their respective k-surfaces.

![Attachments/05_Devices_and_applications 14.webp|700](/img/user/Attachments/05_Devices_and_applications%2014.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=47&rect=109,131,439,461| ]]
Figure showing that for a given incident $k_{\|}$, two $k$-vectors might satisfy the e-wave normal surface condition, but only one has energy flow (Poynting vector $\mathbf{S}$) directed into the second medium.

![Attachments/05_Devices_and_applications 15.webp|700](/img/user/Attachments/05_Devices_and_applications%2015.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=48&rect=119,152,425,463| ]]
Figure showing a scenario where s-polarised light might undergo TIR while p-polarised light (as an e-wave) is refracted, or vice-versa, used in polarisers.

This effect is used in polarising beamsplitters like the Wollaston, Rochon, and Sénarmont prisms, which use birefringent crystals to spatially separate the two orthogonal polarisation components.

![Attachments/05_Devices_and_applications 18.webp|700](/img/user/Attachments/05_Devices_and_applications%2018.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=49&rect=79,216,740,419| ]]

The Nicol prism is another classic polariser based on birefringence and TIR in calcite.

![Attachments/05_Devices_and_applications 19.webp|700](/img/user/Attachments/05_Devices_and_applications%2019.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=50&rect=40,238,777,404| ]]

### 9.3.4 Dichroism

Dichroism is the property of some anisotropic materials to exhibit polarisation-dependent absorption. One polarisation component is absorbed much more strongly than the orthogonal component.

![Attachments/05_Devices_and_applications 20.webp|700](/img/user/Attachments/05_Devices_and_applications%2020.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=52&rect=135,139,742,481| ]]

This is used in dichroic sheet polarisers (like Polaroid film), which consist of aligned absorbing molecules or crystals that preferentially absorb light polarised along one direction.

![Attachments/05_Devices_and_applications 21.webp|700](/img/user/Attachments/05_Devices_and_applications%2021.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=53&rect=93,160,754,427| ]]

---
## 9.4 Optical Activity
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=195&selection=191,0,193,16| ]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=54&selection=0,0,0,16| ]]

Optical activity is the property of certain materials to rotate the plane of polarisation of linearly polarised light as it propagates through them. This occurs in materials that are chiral (lacking mirror symmetry in their molecular or crystal structure), such as quartz, sugar solutions, and some organic molecules.
In these materials, the dielectric tensor $\boldsymbol{\varepsilon}_r$ is not symmetric ($\varepsilon_{jk} \neq \varepsilon_{kj}$); it possesses an antisymmetric part, or more generally, the material equations include terms coupling $\mathbf{E}$ to $\nabla \times \mathbf{E}$ (spatial dispersion of a particular kind). The normal modes of propagation in an optically active material are right-circularly polarised (RCP) and left-circularly polarised (LCP) light, which travel with different phase velocities (i.e., experience different refractive indices $n_+$ and $n_-$).

Consider linearly polarised light incident on such a medium. It can be decomposed into a sum of RCP and LCP components of equal amplitude:
A Jones vector for x-polarised light is $\mathbf{J}_{\text{in}}=\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \frac{1}{2}\left[\begin{pmatrix} 1 \\ -i \end{pmatrix}_{\text{LCP}} + \begin{pmatrix} 1 \\ i \end{pmatrix}_{\text{RCP}}\right].$
After propagating a distance $d$ through an optically active material with refractive indices $n_+$ for RCP and $n_-$ for LCP light, the output Jones vector (ignoring a common phase factor) is:
$$
\mathbf{J}_{\text{out}} \sim \frac{1}{2}\left[e^{-i k_0 n_- d}\begin{pmatrix} 1 \\ -i \end{pmatrix} + e^{-i k_0 n_+ d}\begin{pmatrix} 1 \\ i \end{pmatrix}\right].
$$
This simplifies to (up to an overall phase):
$$
\mathbf{J}_{\text{out}} \sim e^{-i\frac{\pi d(n_+ + n_-)}{\lambda_0}} \begin{pmatrix} \cos\left(\frac{\pi d(n_+ - n_-)}{\lambda_0}\right) \\ \sin\left(\frac{\pi d(n_+ - n_-)}{\lambda_0}\right) \end{pmatrix}.
$$
This is still linearly polarised light, but its plane of polarisation has been rotated by an angle $\Delta\theta = \frac{\pi d}{\lambda_0}(n_- - n_+)$. The direction of rotation depends on which circular component travels faster.

![Attachments/05_Devices_and_applications 22.webp|700](/img/user/Attachments/05_Devices_and_applications%2022.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=55&rect=144,102,677,389| ]]

Optical activity is a reciprocal effect: if light passes through the medium, is reflected by a mirror, and passes back through the medium, the rotation induced on the return trip cancels the initial rotation. The polarisation returns to its original state.

---
## 9.5 Magneto-Optics
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=198&selection=4,0,6,14| ]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=58&selection=0,0,0,14| ]]

Magneto-optics deals with phenomena where the optical properties of a medium are altered by the presence of a quasi-static external magnetic field. This modification of optical properties is a form of nonlinear optics, though often treated within a linear response framework for the light fields once the magnetic field's influence on material parameters is established. A more in-depth discussion can be found in the [[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3 Magneto-Optics\|crystal optics course]].

One prominent magneto-optic effect is the **Faraday effect**: when linearly polarised light propagates through certain materials subjected to a static magnetic field parallel to the light's propagation direction, the plane of polarisation rotates. The angle of rotation $\Delta\theta_F$ is proportional to the magnetic field strength component $B_z$ along the propagation direction and the path length $d$:
$$
\Delta\theta_F = \mathcal{V} B_z d,
$$
where $\mathcal{V}$ is the Verdet constant, a material- and wavelength-dependent parameter. Typical values for $\mathcal{V}$ are around $3 \times 10^{-4} \, \text{degrees} / (\text{Gauss} \cdot \text{cm})$ (or $\sim 0.03 \, \text{rad} / (\text{T} \cdot \text{m})$) at optical wavelengths for glasses.
A key difference between the Faraday effect and natural optical activity is that the Faraday effect is non-reciprocal; it breaks time-reversal symmetry due to the axial nature of the magnetic field (which is a c-type tensor, odd under time reversal).

![Attachments/05_Devices_and_applications 23.webp|700](/img/user/Attachments/05_Devices_and_applications%2023.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=58&rect=409,93,810,484| ]]

If linearly polarised light passes through a Faraday rotator, its polarisation rotates by $\Delta\theta_F$. If it is then reflected and passes back through the rotator in the opposite direction, the magnetic field direction relative to the light's new propagation direction is unchanged (if $\mathbf{B}$ is fixed in space). Consequently, the rotation adds further, resulting in a total rotation of $2\Delta\theta_F$ relative to the input polarisation upon exiting. This non-reciprocal property is utilised in optical isolators (Faraday isolators), which allow light to pass in one direction but block or attenuate it in the reverse direction.

---
## 9.6 Electro-Optics
[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=61&selection=0,0,0,14| ]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=198&selection=72,0,74,14| ]]

Electro-optics concerns the modification of a material's optical properties by an applied quasi-static or low-frequency external electric field $\mathbf{E}^{(0)}$.
-   The **Pockels effect** (or linear electro-optic effect) describes a change in the refractive index (or, more generally, the impermeability tensor) that is linearly proportional to the applied electric field. It occurs only in non-centrosymmetric crystals.
-   The **Kerr effect** (or quadratic electro-optic effect) describes a change in the refractive index proportional to the square of the applied electric field. It can occur in all materials (gases, liquids, solids, including centrosymmetric ones).

Mathematically, these effects are described by changes to the impermeability tensor $\boldsymbol{\eta} = \boldsymbol{\varepsilon}_r^{-1}$ (where $\boldsymbol{\varepsilon}_r$ is the relative permittivity tensor):
$$
\eta_{jk}(\mathbf{E}^{(0)}) = \eta_{jk}(0) + \sum_l r_{jkl} E_l^{(0)} + \sum_{lm} s_{jklm} E_l^{(0)} E_m^{(0)} + \dots
$$
Here:
-   $\eta_{jk}(0)$ is the impermeability tensor element in the absence of the external field $\mathbf{E}^{(0)}$.
-   $r_{jkl}$ is the linear electro-optic (Pockels) coefficient (a third-rank tensor).
-   $s_{jklm}$ is the quadratic electro-optic (Kerr) coefficient (a fourth-rank tensor).
The specific non-zero elements of these tensors are determined by the crystal symmetry of the material, as per [[Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects#1.1 Symmetry Principles\|Neumann's principle]].
These effects are widely used to create devices that rapidly control the phase, polarisation, or intensity of light, such as Pockels cells (used as fast optical switches or modulators) and Kerr cells.

---