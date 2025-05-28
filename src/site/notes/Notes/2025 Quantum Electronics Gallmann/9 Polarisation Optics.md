---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics-gallmann/9-polarisation-optics/","hide":"true","updated":"2025-05-27T13:41:24.000+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.1 Poincaré Sphere and Stokes Vector\|9.1 Poincaré Sphere and Stokes Vector]]
- [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.2 Jones Vector Formalism\|9.2 Jones Vector Formalism]]
- [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.3 Anisotropic Materials\|9.3 Anisotropic Materials]]
- [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.4 Optical Activity\|9.4 Optical Activity]]
- [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.5 Magneto-Optics\|9.5 Magneto-Optics]]
- [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.6 Electro-Optics\|9.6 Electro-Optics]]

---
# 9 Polarisation Optics
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=184&selection=1,0,1,19|•]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=2&selection=0,0,0,65|•]]

As described [[Notes/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.7 Polarisation\|earlier]], a basic property of light is polarisation. There are several different ways to describe the polarisation of light. Here we will discuss three of the more common ways: The Poincaré sphere, the Stokes parameters and the Jones vector formalism.

---
## 9.1 Poincaré Sphere and Stokes Vector
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=184&selection=3,0,7,13|•]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=4&selection=0,28,0,28|•]]

Lets assume that we have a plane wave propagating in the $+z$ direction in free space. Using complex notation, the $x$ and $y$ components may be written down separately as a function of time at a specific point, as

$$
\begin{aligned}
\mathcal{E}_x & =a_x e^{i\left(\omega t+\phi_x\right)}, \\
\mathcal{E}_y & =a_y e^{i\left(\omega t+\phi_y\right)},
\end{aligned}
$$
where $a_x,$ $a_y,$ $\phi_x$ and $\phi_y$ are real. The real part of the electric field can be then written as 
$$
\begin{aligned}
& E_x=a_x \cos \left(\omega t+\phi_x\right), \\
& E_y=a_y \cos \left(\omega t+\phi_y\right) .
\end{aligned}
$$
These are parametric equations describing an ellipse:
$$
\frac{E_x^2}{a_x^2}+\frac{E_y^2}{a_y^2}-2 \cos \left(\phi_y-\phi_x\right) \frac{E_x E_y}{a_x a_y}=\sin^2\left(\phi_y-\phi_x\right),
$$
as depicted in the following figure

![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/QE_script.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/QE_script.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=185&rect=151,260,451,540|•]]

The shape of this ellipse can be characterised in several different ways. One convenient way is to define an angle $\psi$ as the angle of the major axis with respect to the $x$-axis. Another angle $\chi$ characterises the width of the ellipse, which is the angle between major axis and the corner of the smallest-area rectangle including the entire ellipse. Thus, we find 

$$
\begin{gathered}
\tan 2 \psi=\frac{2 R}{1-R^2} \cos \phi, \\
\sin 2 \chi=\frac{2 R}{1+R^2} \sin \phi, \\
R=\frac{a_y}{a_x}, \\
\phi=\phi_y-\phi_x.
\end{gathered}
$$
Then it is clear the $\chi$ indicates the rotation of the electric field: Positive $\chi$ indicates clockwise rotation, while negative $\chi$ indicates counter-clockwise rotation. Two angles fully characterise the polarisation. Thus, a common visualisation method is the Poincaré sphere, where each point takes the form 
$$
(r,\theta,\phi)=(1,\pi/2-2\chi,2\psi).
$$

![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/QE_script 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/QE_script%201.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=186&rect=119,541,478,701|•]]
![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/05_Devices_and_applications.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/05_Devices_and_applications.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=7&rect=43,98,403,460|•]]
![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/05_Devices_and_applications 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/05_Devices_and_applications%201.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=8&rect=33,112,440,453|•]]

Linear polarisation are the points on the equator ($\chi=0$), while circular polarisation lies on the poles ($2\chi=\pm\pi/2$) . The Poincaré sphere only gives the polarisation state, however contains no information on the amplitude of the electric field. Another representation are the Stokes parameters, which also specific the magnitude of the electric field:

$$
\begin{aligned}
S_0 & =a_x^2+a_y^2, \\
S_1 & =a_x^2-a_y^2 ,\\
S_2 & =2 a_x a_y \cos \phi, \\
S_3 & =2 a_x a_y \sin \phi.
\end{aligned}
$$
They are not independent, as they fulfil $S_0^2\geq S_1^2+S_2^2+S_3^2.$ Then, the Stokes parameter are equivalent to the Poincaré sphere, but additionally including the amplitude of the field.

---
## 9.2 Jones Vector Formalism
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=187&selection=99,0,101,22|•]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=11&selection=0,39,0,39|•]]

Another way to describe polarisation is using the Jones vector:
$$
\mathbf{J}=\binom{a_x e^{i \phi_x}}{a_y e^{i \phi_y}},
$$
which also completely specifies the state of the light field at a particular point in space. Some examples include
- Linearly polarised light along x:
	$$\mathbf{J}=\binom{1}{0}$$
- Linearly polarised light along y:
	$$\mathbf{J}=\binom{0}{1}$$
- Right circular polarisation:
	$$\mathbf{J}=\frac{1}{\sqrt{2}}\binom{1}{i}$$

- Left circular polarisation:
	$$\mathbf{J}=\frac{1}{\sqrt{2}}\binom{1}{-i}$$
Two states of polarisation are orthogonal if and only if
$$
\left\langle\mathbf{J}_1, \mathbf{J}_2\right\rangle=\left(a_{1 x} e^{i \phi_{1 x}}\right)\left(a_{2 x} e^{-i \phi_{2 x}}\right)+\left(a_{1 y} e^{i \phi_{1 y}}\right)\left(a_{2 y} e^{-i \phi_{2 y}}\right)=0
$$
 holds true. Examples of orthogonal polarisation states are x- and y- linearly polarised light, or right- and left-circularly polarised light. Then, any Jones vector can be represented as a linear combination of two orthogonal Jones vectors. 
This representation is useful because it allows to use simple $2\times2$ matrices to describes the action of devices or materials that alter intensity or polarisation. Generally, if the input is $J_1,$ the output may be written as
$$
J_2=TJ_1,
$$
where $T$ is the matrix of a device or material. Some examples: 
- Linear polarisers: An optical element that only transmits $x$-polarised light is described by
	$$T=\left(\begin{array}{ll}1 & 0 \\0 & 0\end{array}\right)$$

- Wave retarders/plate: Some materials allow to delay light of one linear polarisation relative to another orthogonal polarisation. If the $x$-axis is the faster direction, the matrix representing this is
	$$T=\left(\begin{array}{ll}1 & 0 \\0 & e^{-i \Gamma}\end{array}\right)$$
	Certain values of $\Gamma$ are more common and useful, and so get special names. For $\Gamma=\pi / 2$, the slow-axis light is delayed by one quarter cycle relative to the fast axis, and so this is called a quarter-wave retarder/plate. A device with $\Gamma=\pi$ is a half-wave retarder/plate. Quarter wave retarders can transform linearly polarised light into circularly polarised light and vice versa. Half-wave retarders can rotate the polarisation of linear light, or can change right circularly polarised light into left-circularly polarised light.
- Polarisation rotators that rotate the polarisation of light by an angle $\theta$ :
	$$T=\left(\begin{array}{ll}\cos \theta & -\sin \theta \\\sin \theta & \cos \theta\end{array}\right)$$
The given matrices for the wave retarders above assume that the $x$-axis is the fast axis (axis with lower refractive index). Making an arbitrary axis 'fast' is obtained by rotating the matrix:
$$
T^{\prime}=\left(\begin{array}{ll}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{array}\right)\left(\begin{array}{ll}
1 & 0 \\
0 & e^{-i \Gamma}
\end{array}\right)\left(\begin{array}{ll}
\cos \theta & \sin \theta \\
-\sin \theta & \cos \theta
\end{array}\right).
$$
This then allows to find that a half-wave plate at an angle $\theta$ rotates the linear polarisation by an angle $2\theta.$ Some more examples: 

![Attachments/Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics/05_Devices_and_applications 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/9%20Polarisation%20Optics/05_Devices_and_applications%202.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=20&rect=23,128,599,444|•]]

**Generating arbitrary polarisation states**

Now that we understand half-wave and quarter-wave plates, we have all the tools to generate an arbitrary polarisation state, given a linearly polarised input. The rotating half-wave plate essentially rotates the polarisation state on the equator, while the rotating half-wave plate, followed by a fixed quarter-wave plate rotates the state as shown in the second figure.

![Attachments/05_Devices_and_applications.webp|700](/img/user/Attachments/05_Devices_and_applications.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=21&rect=18,138,435,470|•]]

Therefore, as the next figure shows, an arbitrary polarisation state can be reached by putting another quarter-wave plate in front of the waveplate pair:

![Attachments/05_Devices_and_applications 1.webp|700](/img/user/Attachments/05_Devices_and_applications%201.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=21&rect=516,243,802,365|•]]

This can be seen by considering that each of these three elements has a Jones matrix of the form
$$
J\left(\theta\right)=R\left(-\theta\right) J(0) R\left(\theta\right),
$$
where $J(0)$ is the Jones matrix of either a half-wave or quarter-wave plate aligned along the horizontal axis. The final Jones matrix of the system is a product of three such matrices:
$$
J_{\text{system}} = J_{\text{QWP}}(\theta_3) \cdot J_{\text{HWP}}(\theta_2) \cdot J_{\text{QWP}}(\theta_1).
$$
Each of these is unitary, so their product is unitary as well. A general $2 \times 2$ unitary matrix with determinant 1 (an element of SU(2)) has three independent parameters, which here correspond to the three degrees of freedom $\theta_1$, $\theta_2$, and $\theta_3$. 

The total Jones matrix transforms an arbitrary input polarisation $E_{\text{in}}$ as
$$
E_{\text{out}} = J_{\text{system}} E_{\text{in}}.
$$
Since any SU(2) transformation corresponds to a rotation on the Poincaré sphere, this setup can convert any input polarisation state into any output polarisation state.

Essentially, the first QWP transforms the input polarisation into a general elliptical state. The HWP then rotates this elliptical state on the Poincaré sphere, and the second QWP provides the final adjustment needed to reach any point on the sphere.

---
## 9.3 Anisotropic Materials
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=189&selection=51,0,53,31|•]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=26&selection=0,0,0,45|•]]

Thinking back to the [[Notes/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.4 Macroscopic Approximation\|assumptions]] that we made earlier, we will now get rid of one. Specifically, it is the assumption of an isotropic material that we ditch:

**Isotropy:** $\mathbf{P}$ and $\mathbf{M}$ align with $\mathbf{E}$ and $\mathbf{B}$, either in the same or opposite direction. This implies that the corresponding tensors are identity matrices scaled by a scalar. Since this assumption is violated in crystalline materials, it will be corrected later. 

The reason is that many real materials are not isotropic. This is true for any material that exhibits some kind of order, such as crystalline materials or liquid crystals. In such materials, the properties of light propagation depend both on the propagation direction and the light polarisation. Examples of isotropic materials are amorphous, gaseous and most liquid and poly-crystalline materials:

![Attachments/05_Devices_and_applications 2.webp|700](/img/user/Attachments/05_Devices_and_applications%202.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=26&rect=124,149,721,369|•]]

On a macroscopic scale, isotropic media does not possess a directional dependence of its optical properties. Even cubic crystals with sufficiently high symmetry are optically isotropic. 

We will walk step-by-step through the process of adjusting our previously derived equations to account for anisotropic materials. The first one is the orientation between the electric field and the polarisation, and between the magnetic flux and the magnetic field.

While in an isotropic material, $\mathbf{E}$ and $\mathbf{P}$ are parallel, which also implies that $\mathbf{E}$ and $\mathbf{D}$ are parallel, there is no clear relation between the two in an anisotropic (and non-optically active) material:
$$
\text{Isotropy:}\quad\mathbf{D}=\epsilon_0 \epsilon \mathbf{E}\longrightarrow \text{Anisotropy:}\quad D_j=\epsilon_0 \sum_k \epsilon_{j k} E_k.
$$
The dielectric constant then becomes the dielectric tensor:
$$
\begin{gathered}
\epsilon=\left(\begin{array}{ccc}
\epsilon_{11} & \epsilon_{12} & \epsilon_{13} \\
\epsilon_{21} & \epsilon_{22} & \epsilon_{23} \\
\epsilon_{31} & \epsilon_{32} & \epsilon_{33}
\end{array}\right).
\end{gathered}
$$
Similarly, $\mathbf{H}$ and $\mathbf{M}$ are parallel in an isotropic material, which also implies that $\mathbf{B}$ and $\mathbf{H}$ are parallel but not in an anisotropic material:

$$
\text{Isotropy:}\quad\mathbf{B}=\mu_0 \mu \mathbf{H}\longrightarrow \text{Anisotropy:}\quad B_j=\mu_0 \sum_{j k} \mu_{j k} H_k.

$$
Similarly, the magnetic permeability becomes a tensor:

$$
\begin{gathered}
\mu=\left(\begin{array}{lll}
\mu_{11} & \mu_{12} & \mu_{13} \\
\mu_{21} & \mu_{22} & \mu_{23} \\
\mu_{31} & \mu_{32} & \mu_{33}
\end{array}\right).
\end{gathered}
$$
Usually, symmetries allow for relationships between these 9 numbers, reducing the number of free parameters: ==Tensors of material properties must follow the same symmetries as the materials they describes,== see the [[Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects#Symmetry Principles\|von Neumann principle]]. 
For our purposes, we will assume that $\epsilon_{jk}$ and $\mu_{jk}$ are real and symmetric, $\epsilon_{jk}=\epsilon_{kj}$ respectively $\mu_{j k}=\mu_{k j}$, which is true for most non-absorbing, non-magnetic materials. An important exception are so-called optically active materials, which will be discussed later. One way to visualise the dielectric tensor in the real, symmetric case, is to consider the electric energy density:

$$
\begin{aligned}
w_e&=\frac{1}{2} \vec{E} \cdot \vec{D}=\frac{1}{2} \sum_k E_k D_k\\&=\frac{1}{2} \sum_k E_k \sum_l \epsilon_0 \epsilon_{k l} E_l=\frac{1}{2} \sum_{k l} E_k \epsilon_{k l} \epsilon_0 E_l
\\ \iff \frac{2w_e}{\epsilon_0}&=\sum_{j k} \epsilon_{j k} x_j x_k=\text{const}.
\end{aligned}
$$
This describes the surface of an ellipsoid. Rotating the coordinate axis so that the axes of the ellipsoid coincide with the $x,$ $y$ and $z$ axis the dielectric tensor is diagonal, and the ellipsoid is 
$$
\epsilon_{11} x^2+\epsilon_{22} y^2+\epsilon_{33} z^2=\text { const. }
$$
In this principal coordinate system, we have that 
$$
D_i=\epsilon_0\epsilon_{ii}E_i\quad\text{for}\quad i=1,2,3.
$$
Be careful, this does not mean that $\mathbf{D}$ and $\mathbf{E}$ are parallel! Only if all the $\epsilon_{ii}$ are the same. Otherwise, each of the three $E_i$ components is modified by another number. We will then write $\epsilon_{ii}\equiv\epsilon_i.$ These permittivities correspond to refractive indices $n_i=\sqrt{\epsilon_i},$ which are called principle refractive index of a material. When $n_1=n_2=n_3,$ then the ellipsoid is a sphere and the material is isotropic. Further, we can show that in any non-magnetic, dielectric material, we have that
$$
\begin{aligned}
& \vec{k} \perp \vec{D} \perp \vec{H}, \\
& \vec{S} \perp \vec{E} \perp \vec{H}.
\end{aligned}
$$
This is depicted in the following figure:

![Attachments/05_Devices_and_applications 4.webp|700](/img/user/Attachments/05_Devices_and_applications%204.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=31&rect=409,84,797,417|•]]

Further, the direction of energy $\hat{S} \equiv \frac{\vec{S}}{|\vec{S}|}$ and propagation $\hat{k} \equiv \frac{\vec{k}}{|\vec{k}|}$propagate in different directions. The angle $\alpha$ between them is called walk-off angle. 

### 9.3.1 Index Ellipsoid and Ellipse

Consider again a coordinate system along the principal dielectric axes. Then, as already mentioned, the surface of constant electric energy density is an ellipsoid. In the space of all $\mathbf{D}-$vectors compatible, we can thus define the index ellipsoid through

$$
\frac{x^2}{\epsilon_x}+\frac{y^2}{\epsilon_y}+\frac{z^2}{\epsilon_z}=1 \quad \iff \quad \frac{x^2}{n_x^2}+\frac{y^2}{n_y^2}+\frac{z^2}{n_z^2}=1.
$$

This is depicted in the next figure:

![Attachments/05_Devices_and_applications 5.webp|700](/img/user/Attachments/05_Devices_and_applications%205.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=34&rect=382,97,756,508|•]]

For a given direction of the wave vector $\mathbf{k}$, there exist two orthogonal directions of the electric displacement vector $\mathbf{D}$ that correspond to waves propagating with stationary linear polarisation state, the 'eigenstates'. These two distinguished directions define the principal axes of the polarisation ellipse in the plane perpendicular to $\mathbf{k}$. Any other wave propagating along the same direction $\mathbf{k}$ can be expressed as a linear superposition of these two eigenstates. 

When the light is linearly polarised along some principal axis $j,$ and propagates along another principal axis, the wave behaves exactly as it would in an isotropic material with index of refraction $n_j,$ since $\mathbf{D}$ and $\mathbf{E}$ are parallel. The waves phase velocity is $c/n_j.$ Similarly, the orthogonal polarisation travels with the phase velocity appropriate to that direction. Consider the polarisation of a field along the principle axes of the index ellipsoid. Assuming propagation in $z-$direction, the two eigenstates coincide with the x- and y-axis. 

Suppose now that the polarisation of the wave is **not** along a principal axis, but propagates along a principal axis. Then, we may write the Jones vector at some point as 
$$
J_1=\binom{a_x e^{i \phi_x}}{a_y e^{i \phi_y}}.
$$
As discussed earlier, this is just a linear combination of linearly x- and y-polarised light. Since we are in the linear approximation of the wave equation, we may treat these two polarisations as independent waves and simply sum their contributions. After propagating a distance $d,$ the Jones vector is
$$
J_2=\binom{a_x e^{i\left(\phi_x-k_1 d\right)}}{a_y e^{i\left(\phi_y-k_2 d\right)}},
$$
where $k_1$ and $k_2$ are the wavevectors for x, respectively y-polarised light. The phase retardation, or the phase difference between the two polarisations, induced by the propagation is then 
$$
\Gamma=-2 \pi\left(n_1-n_2\right) d / \lambda_0.
$$
We can see that propagation in an anisotropic medium is a way to implement a wave retarder. In fact, most half- and quarter-wave plates are made using propagation along a principal axis of a uniaxial crystal. 

Let us now consider the most general case: Propagation in an arbitrary direction in an anisotropic medium. As described before, there are two orthogonal directions of the major and minor axes within the plane orthogonal to $\mathbf{k},$ which are called eigenstates or sometimes normal modes. The direction of the electric field for these normal modes is found as 
$$
E_j=\frac{1}{\epsilon_0} \sum_k \eta_{j k} D_k,
$$
or, in the principal coordinate system, simply
$$
E_j=\frac{1}{\epsilon_0} \frac{D_j}{n_j^2} .
$$
The total field of the propagated wave is obtained by propagating its projections onto the eigentates separately. Note that we call the angle between $\mathbf{D}$ and $\mathbf{E}$ the walk-off angle $\rho.$ 

In a uniaxial material, we can take $\theta$ as the angle between $\mathbf{k}$ and the optic (rotation) axis. One of the axes of the index ellipse will have half-length $n_o,$ and it will lie along the direction mutually perpendicular to $\mathbf{k}$ and the optic axis. Then, one can show that 
$$
\frac{1}{n(\theta)^2}=\frac{\cos^2 \theta}{n_o^2}+\frac{\sin^2 \theta}{n_e^2}.
$$
This normal mode is called ordinary wave, and for this wave, the directions of $\mathbf{E}$ and $\mathbf{D}$ are equal. The other normal mode is called extraordinary waves, are for this wave, their directions are not equal. 

![Attachments/05_Devices_and_applications 6.webp|700](/img/user/Attachments/05_Devices_and_applications%206.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=39&rect=47,95,835,372|•]]

### 9.3.2 Dispersion Relation

The dispersion relation of a wave refers to the relationship between the frequency $\omega$ and the wavevector $\mathbf{k}.$ In an isotropic medium, the frequency is independent on the the direction of the wavevector, e.g. $\omega=c|k|.$ However, this is no longer true in an anisotropic medium. 

Assuming plane waves, Maxwell's equation give two important relations:
$$
\mathbf{k} \times \mathbf{H}=-\omega \mathbf{D}\quad\text{and}\quad\mathbf{k} \times \mathbf{E}=\omega \mu_0 \mathbf{H}.
$$
These together imply that
$$
\mathbf{k} \times(\mathbf{k} \times \mathbf{E})+\omega^2 \mu_0 \mathbf{D}=0,
$$

which, expressed in the principal coordinate system, becomes
$$
\left(\begin{array}{ccc}
n_1^2 k_0^2-k_2^2-k_3^2 & k_1 k_2 & k_1 k_3 \\
k_2 k_1 & n_2^2 k_0^2-k_1^2-k_3^2 & k_2 k_3 \\
k_3 k_1 & k_3 k_2 & n_3^2 k_0^2-k_1^2-k_2^2
\end{array}\right)\left(\begin{array}{c}
E_1 \\
E_2 \\
E_3
\end{array}\right)=\left(\begin{array}{c}
0 \\
0 \\
0
\end{array}\right),
$$
with $k_0$ the magnitude of the vector in vacuum. For non-trivial solutions, the determinant of this matrix must be zero. This condition therefore defines a three-dimensional surface in k-space, which is called the dispersion surface, k-surface, or just normal surface. The following figure shows the normal surface for three optical symmetries:

![Attachments/QE_script.webp|700](/img/user/Attachments/QE_script.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=194&rect=111,533,490,673|•]]

Considering a uniaxial crystal, the dispersion surface can be simplified to 
$$
\left(k^2-n_o^2 k_0^2\right)\left(\frac{k_1^2+k_2^2}{n_e^2}+\frac{k_3^2}{n_o^2}-k_0^2\right)=0,
$$
which has two solutions: A spherical shell where $k=k_o\omega_o,$ and an ellipsoid fulfilling 
$$
\frac{k_1^2+k_2^2}{n_e^2}+\frac{k_3^2}{n_o^2}-k_0^2=0.
$$
Since the optic axis is an axis of rotational symmetry, we can represent this as two-dimensional plot without loss of generality, by assuming $k_2=0:$ 

![Attachments/Pasted image 20250512152514.png|700](/img/user/Attachments/Pasted%20image%2020250512152514.png)

The effective refractive index for the extraordinary wave at an angle $\theta$ to the ordinary/optic axis is  
$$
n^2(\theta)\left(\frac{\sin^2 \theta}{n_e^2}+\frac{\cos^2 \theta}{n_o^2}\right)=1.
$$
In both cases, ordinary and extraordinary, the flow of energy and the electric field are related in a different way:

![Attachments/05_Devices_and_applications 7.webp|700](/img/user/Attachments/05_Devices_and_applications%207.webp)
![Attachments/05_Devices_and_applications 8.webp|700](/img/user/Attachments/05_Devices_and_applications%208.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=43&rect=406,117,737,403|•]]

For given $\mathbf{k},$ the electric field $\mathbf{E}$ lies in the tangential plane to the normal surface. The Poynting vector is orthogonal to this plane and thus, in general, not collinear with $\mathbf{k}.$ 

Two examples of uniaxial crystals are calcite and quartz:

![Attachments/05_Devices_and_applications 9.webp|700](/img/user/Attachments/05_Devices_and_applications%209.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=44&rect=84,227,719,438|•]]

### 9.3.3 Refraction at Interfaces

Birefringence, or double refraction, of an unpolarised plane wave at oblique angle of incidence:

![Attachments/05_Devices_and_applications 10.webp|700](/img/user/Attachments/05_Devices_and_applications%2010.webp)
![Attachments/05_Devices_and_applications 11.webp|700](/img/user/Attachments/05_Devices_and_applications%2011.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=45&rect=484,130,761,421|•]]

To determine the polarisation of a refracted wave, consider the index ellipsoid. 

Birefringence with finite beams:

![Attachments/05_Devices_and_applications 12.webp|700](/img/user/Attachments/05_Devices_and_applications%2012.webp)
![Attachments/05_Devices_and_applications 13.webp|700](/img/user/Attachments/05_Devices_and_applications%2013.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=46&rect=333,116,605,424|•]]

To see the effect of birefringence on the refraction at interfaces to anisotropic media, consider the following two cases:

![Attachments/05_Devices_and_applications 14.webp|700](/img/user/Attachments/05_Devices_and_applications%2014.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=47&rect=109,131,439,461|•]]

In this case, there are two solutions for the refracted extraordinary wave that are compatible with the continuity requirement for the parallel component of the $\mathbf{k}$-vector. However, if one considers the direction of energy flow $\mathbf{S},$ only one of them allows for energy to flow into second medium. Therefore, only wave 1 is a physical solution of this problem.

![Attachments/05_Devices_and_applications 15.webp|700](/img/user/Attachments/05_Devices_and_applications%2015.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=48&rect=119,152,425,463|•]]

In this case, only the extraordinary wave is refracted into the second medium, and it is p-polarised. The s-polarised components of the input wave experience total internal reflection in this scenario. This effect can be used to construct a polariser with large extinction ratio.

This is used in polarising beamsplitters, using selective refraction at crystal interfaces. There are many types of setups and prisms:

![Attachments/05_Devices_and_applications 18.webp|700](/img/user/Attachments/05_Devices_and_applications%2018.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=49&rect=79,216,740,419|•]]

We call (a) the Wollaston prism, (b) the Rochon prism, and (c) the Sénarmont prism. The direction and polarisations of the exciting wave differ in the three cases. The crystals in the figure are negative uniaxial. Yet another one is the Nicol prism made of calcite:

![Attachments/05_Devices_and_applications 19.webp|700](/img/user/Attachments/05_Devices_and_applications%2019.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=50&rect=40,238,777,404|•]]

### 9.3.4 Dichroism

Dichroism is the effect where the absorption is polarisation-dependent. The following figure explains this phenomena:

![Attachments/05_Devices_and_applications 20.webp|700](/img/user/Attachments/05_Devices_and_applications%2020.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=52&rect=135,139,742,481|•]]

This can be used in polarisers, using selective absorption:

![Attachments/05_Devices_and_applications 21.webp|700](/img/user/Attachments/05_Devices_and_applications%2021.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=53&rect=93,160,754,427|•]]

---
## 9.4 Optical Activity
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=195&selection=191,0,193,16|•]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=54&selection=0,0,0,16|•]]

Optical activity is the property of some materials to function as polarisation rotators. In these materials, the dielectric tensor is not symmetric anymore: $\varepsilon_{jk}\neq\varepsilon_{kj}.$ Therefore, the treatment in the [[Notes/2025 Quantum Electronics Gallmann/9 Polarisation Optics#9.3 Anisotropic Materials\|earlier chapters]] is no longer valid. In these materials, the normal modes are circularly polarised instead of linearly. This means, the phase velocity of right circularly polarised light differs from that of left circularly polarised light. Some examples include tellurium and quartz, but even solutions of sugar achieve the effect. What they have in common is their spiral-like, 'chiral' atomic structure. 

Consider a linearly polarised state, written as
$$
J_1=\binom{1}{0},
$$
and as we already learned, we can write this as a superposition of a right-circular and left-circular polarised state:
$$
J_1=\frac{1}{2}\left[\binom{1}{i}+\binom{1}{-i}\right].
$$
Suppose now that the wave propagates through a thickness $d$ of an optically active materials with index of refraction $n_+$ for right-circular polarised light, and $n_-$ for left-polarised light. Then, the new polarisation state is 
$$
\begin{gathered}
J_2&=\frac{1}{2}\left[e^{-i 2 \pi d n_{+} / \lambda_0}\binom{1}{i}+e^{-i 2 \pi d n_{-} / \lambda_0}\binom{1}{-i}\right] \\
&=e^{-i \pi d\left(n_{+}+n_{-}\right) / \lambda_0}\binom{\cos d\left(n_{-}-n_{+}\right) / \lambda_0}{\sin d\left(n_{-}-n_{+}\right) / \lambda_0}.
\end{gathered}
$$
Up to an overall phase, this is just a rotation of the polarisation direction by an angle $\phi=\pi(n_--n_+)d/\lambda_0.$ The rotation direction $\phi$ depends on the propagation direction, since the definition of right- and left-circular light also depends on the direction of $\mathbf{k}.$ As the following figure shows, this means that linearly polarised light passing through an optically active medium will rotate its polarisation:

![Attachments/05_Devices_and_applications 22.webp|700](/img/user/Attachments/05_Devices_and_applications%2022.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=55&rect=144,102,677,389|•]]

However, note that this process is symmetric with respect to time-reversal: Reflection back at the end of the medium will rotate the polarisation back to its original state. 

---
## 9.5 Magneto-Optics
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=198&selection=4,0,6,14|•]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=58&selection=0,0,0,14|•]]

We will only shortly discuss magneto-optics, a much more in-depth discussion can be found in the [[Notes/Crystal Optics in Intense Light Fields/3 Magneto-Optics#3 Magneto-Optics\|crystal optics course]]. The key is that optical properties can be controlled by the application of quasi-static external strain, and electric or magnetic fields. This modification of the optical properties at optical frequencies is therefore in the domain of nonlinear optics. 

One effect is the so-called **Faraday effect**: A static magnetic fields causes many, non-optically active materials to behave as polarisation rotators. Phenomenologically, the angle rotation per unit length, or rotary power is
$$
\rho=\mathcal{V}B,
$$
where $B$ is the projection of the magnetic field along the propagation direction, while $\mathcal{V}$ is the Verdet constant. Typical values for this constant are around $3\cdot 10^{-4}$ degrees cm at optical wavelengths. One key difference to before is that there is no symmetry with respect to time anymore:

![Attachments/05_Devices_and_applications 23.webp|700](/img/user/Attachments/05_Devices_and_applications%2023.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=58&rect=409,93,810,484|•]]

A linear polarised beam will be rotated in a specific direction, but reflection back will rotate it even further into that direction. As a result, the polarisation has been rotated by twice the angle compared to a single pass. This rather surprising result is a consequence of the symmetry properties of the magnetic field on time-reversal. Specifically, the magnetic field is an [[Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects#1.3.2 Parity Transformations\|c-type tensor]]: It flips sign upon time inversion. This particular property is used in optical isolators, prevention propagation in one direction, while allowing the opposite direction. 

---
## 9.6 Electro-Optics
[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=61&selection=0,0,0,14|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=198&selection=72,0,74,14|•]]

Another closely related field is electro-optics: Similarly to before, application of a static electric field can change the optical properties of many materials. For material with no inversion symmetry, the Pockels effect describes a linear dependence of the index ellipsoid parameters on an applied electric field. The more general Kerr effect is a nonlinear effect, where this dependence is quadratic. Mathematically, this is described by a so-called impermeability tensor $\eta=\varepsilon^{-1}:$ 

$$
\underbrace{\eta_{jk}(\mathbf{E}^{(0)})}_{\text{Static impermeability under field}} 
= 
\underbrace{\eta_{jk}}_{\text{Static impermeability}} 
+ \sum_l \underbrace{r_{jkl} E_l^{(0)}}_{\substack{\text{Pockels effect} \\ \Delta n \propto \vec{E}_0}} 
+ \sum_{lm} \underbrace{s_{jklm} E_l^{(0)} E_m^{(0)}}_{\substack{\text{Kerr effect} \\ \Delta n \propto \vec{E}_0^2}}
$$
The tensors are called electro-optic coefficients, and individual elements can often by related to each by [[Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects#1.1 Symmetry Principles\|symmetries]]. We will not go into more detail here, but note that these effects can be applied to give rapid control over refractive indices for polarisation devices or phase modulators.

---
