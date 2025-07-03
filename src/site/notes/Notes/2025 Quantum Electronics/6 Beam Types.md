---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics/6-beam-types/","hide":"true","updated":"2025-06-04T15:34:03.000+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#6.1 Gaussian Beam Optics|6.1 Gaussian Beam Optics]]
[[#6.2 Paraxial Helmholtz Equation and Slowly-Varying Envelope Approximation|6.2 Paraxial Helmholtz Equation and Slowly-Varying Envelope Approximation]]
[[#6.3 Hermite-Gaussian Beams|6.3 Hermite-Gaussian Beams]]
[[#6.4 Laguerre-Gaussian Beams|6.4 Laguerre-Gaussian Beams]]
[[#6.5 Bessel Beams|6.5 Bessel Beams]]
[[#6.6 Summary|6.6 Summary]]

---
# 6 Beam Types
[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=2&selection=0,35,0,35| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=118&selection=0,9,1,24| ]]
In this chapter, we return to the treatment of optical beams and will discuss different types of beams encountered in optics. The most important of these, particularly in laser applications, is the Gaussian beam.

## 6.1 Gaussian Beam Optics
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=115&selection=4,0,6,20| ]] [[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=148&selection=0,0,0,14| ]]

Gaussian beams are highly relevant in optical laboratories as they accurately describe the spatial profile of light produced by most lasers operating in the fundamental transverse mode, and they are the characteristic modes of stable optical resonators and cavities. A fundamental Gaussian beam with its waist (narrowest point) located at $z=0$ and propagating along the $z$-axis is described by the complex amplitude $U(\mathbf{r})$:
$$
U(\mathbf{r})=A_0 \frac{W_0}{W(z)} \exp\left(-\frac{\rho^2}{W^2(z)}\right) \exp\left(-i k z - i k \frac{\rho^2}{2 R(z)} + i \zeta(z)\right),
$$
where $\rho^2 = x^2+y^2$ is the transverse radial distance from the beam axis. The beam is characterised by the following parameters:

$$
\begin{aligned}
&\text{Beam Radius at distance } z:&W(z) & =W_0 \sqrt{1+\left(\frac{z}{z_R}\right)^2}, \\
&\text{Radius of Curvature of wavefronts at } z:&R(z) & =z\left[1+\left(\frac{z_R}{z}\right)^2\right], \\
&\text{Gouy Phase Shift at } z:&\zeta(z) & =\arctan\left(\frac{z}{z_R}\right), \\
&\text{Beam Waist Radius (at } z=0):&W_0 & \quad (\text{a fundamental parameter}), \\
&\text{Rayleigh Range:}&z_R & =\frac{\pi W_0^2 n}{\lambda_0} = \frac{k W_0^2}{2}, \\
&\text{Far-field Half-Angle of Divergence:}&\theta_0 & \approx \frac{W_0}{z_R} = \frac{\lambda_0}{\pi W_0 n}.
\end{aligned}
$$
Here, $\lambda_0$ is the vacuum wavelength, $n$ is the refractive index of the medium, and $k=2\pi n/\lambda_0$ is the wave number in the medium. 

These parameters are explained further in the following subsections.

### 6.1.1 Gaussian Beams as Solution to the Helmholtz Equation

The Gaussian beam form $U(\mathbf{r})=A(\mathbf{r}) e^{-i k z}$ (where $A(\mathbf{r})$ is a slowly varying complex envelope) is a solution to the paraxial Helmholtz equation. Starting with the Helmholtz equation for a scalar field $U(\mathbf{r})$:
$$
\nabla^2 U+k^2 U=0.
$$
Substituting $U(\mathbf{r})=A(x,y,z) e^{-i k z}$ and applying the slowly varying envelope approximation (SVEA), specifically neglecting $\frac{\partial^2 A}{\partial z^2}$ compared to $k\frac{\partial A}{\partial z}$ (i.e., $\left|\frac{\partial^2 A}{\partial z^2}\right| \ll \left|2k \frac{\partial A}{\partial z}\right|$), transforms the Helmholtz equation into the _paraxial Helmholtz equation_:
$$
\nabla_T^2 A-2 i k \frac{\partial A}{\partial z}=0,
$$
where $\nabla_T^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}$ is the transverse Laplacian. A fundamental solution to this equation has the form:
$$
A(x,y,z)=\frac{A_1}{q(z)} \exp\left(-i k\frac{x^2+y^2}{2 q(z)}\right)\quad\text{with}\quad q(z)=(z-z_w)+i z_R.
$$
Here, $z_w$ is the position of the beam waist (if $z_w=0$, then $q(z)=z+iz_R$), and $A_1$ is a constant. This solution directly yields the Gaussian beam parameters.

$W(z)$ is the beam radius, defined as the radial distance where the beam intensity falls to $1/e^2$ (approx. 13.5%) of its on-axis maximum value in a transverse plane at position $z$. Twice the beam radius, $2W(z)$, is sometimes called the spot size. The transverse intensity profile of a Gaussian beam is circularly symmetric (for the fundamental mode).

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/02_Fundamental_phenomena 25.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/02_Fundamental_phenomena%2025.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=153&rect=108,178,437,435| ]]

Here, the minimal beam radius (waist) $W_0$ occurs at the waist position (e.g., $z=0$ if $z_w=0$). From the waist, the radius $W(z)$ increases hyperbolically in both directions. Wavefronts are planar at the beam waist ($R(z_w) \to \infty$) but become increasingly curved (approximately spherical) far from the waist. For a fixed Rayleigh range $z_R$, the waist radius $W_0 = \sqrt{2z_R/k} = \sqrt{\lambda_0 z_R/(\pi n)}$ is smaller for shorter wavelengths $\lambda_0$.

### 6.1.2 Rayleigh Length

The Rayleigh range (or Rayleigh length) $z_R$ is a crucial parameter characterising the longitudinal extent of the beam waist region. It is defined as the distance from the waist ($z=z_w$) at which the beam radius has increased to $W(z_w \pm z_R) = W_0\sqrt{2}$, meaning the cross-sectional area of the beam, $\pi W^2(z)$, has doubled compared to its area at the waist, $\pi W_0^2$.

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/02_Fundamental_phenomena 26.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/02_Fundamental_phenomena%2026.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=155&rect=183,254,683,443| ]]

The depth of focus of a Gaussian beam is often considered to be $2z_R$. We deduce the following behaviour:
- For a fixed beam waist $W_0$: The shorter the wavelength $\lambda_0$ (or larger $n$), the longer the Rayleigh range $z_R = \pi W_0^2 n / \lambda_0$, and thus the longer the depth of focus.
- For a fixed wavelength $\lambda_0$: The larger the beam waist $W_0$, the longer the Rayleigh range $z_R$ and depth of focus.

### 6.1.3 Beam Divergence

The beam divergence describes how quickly the beam width $W(z)$ increases for $|z| \gg z_R$ (in the far field). The half-angle of divergence $\theta_0$ is defined as the angle of the asymptote of $W(z)$ with respect to the $z$-axis:
$$ \theta_0 = \lim_{z\to\infty} \frac{W(z)}{|z-z_w|} \approx \frac{W_0}{z_R} = \frac{\lambda_0}{\pi W_0 n}. $$

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/02_Fundamental_phenomena 27.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/02_Fundamental_phenomena%2027.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=157&rect=180,260,668,427| ]]

Again, we deduce the following behaviour:
- For a fixed beam waist $W_0$: The shorter the wavelength $\lambda_0$, the smaller the divergence angle $\theta_0$.
- For a fixed wavelength $\lambda_0$: The larger the beam waist $W_0$, the smaller the divergence angle $\theta_0$. This is a manifestation of diffraction: a more spatially confined beam (smaller $W_0$) diffracts more rapidly (larger $\theta_0$).

### 6.1.4 Wavefront of Gaussian Beams

The radius of curvature $R(z)$ of the wavefronts of a Gaussian beam is given by:
$$
R(z) = (z-z_w)\left[1+\left(\frac{z_R}{z-z_w}\right)^2\right].
$$
Near the beam waist ($z \approx z_w$), $R(z_w) \to \infty$, indicating planar wavefronts. Far from the waist ($|z-z_w| \gg z_R$), $R(z) \approx z-z_w$, meaning the wavefronts become approximately spherical, appearing to originate from a point source located at the waist position $z_w$.

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/02_Fundamental_phenomena 28.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/02_Fundamental_phenomena%2028.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=158&rect=161,207,655,416| ]]

### 6.1.5 Gouy Phase

The term $\zeta(z) = \arctan\left(\frac{z-z_w}{z_R}\right)$ in the phase of the Gaussian beam is the **Gouy phase shift** ([figure source](https://www.rp-photonics.com/gouy_phase_shift.html)):

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/Pasted image 20250331190810.png|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/Pasted%20image%2020250331190810.png)

The Gouy phase varies from $-\pi/2$ for $z \ll -z_R$ (relative to $z_w$) through $0$ at the waist $z=z_w$, to $+\pi/2$ for $z \gg z_R$. The limits are:
$$
\begin{aligned}
(z-z_w) \rightarrow\infty & \Longrightarrow \zeta(z) \rightarrow \pi / 2 \\
(z-z_w) \rightarrow -\infty & \Longrightarrow \zeta(z) \rightarrow -\pi / 2.
\end{aligned}
$$
The Gouy phase represents an additional axial phase shift experienced by a focused Gaussian beam compared to an ideal plane wave (or a spherical wave originating from a point focus). This phase shift is a consequence of the transverse confinement of the beam; as the beam passes through its focus, it accumulates this extra phase. It is significant only in the region around the beam waist, over a range of approximately $\pm z_R$.

### 6.1.6 Shifting the Gaussian Beam (Transformation by a Thin Lens)

We can define the Gaussian beam with its waist at an arbitrary position $z=z_w$. When such a beam passes through a thin lens of focal length $f$ located at, say, $z=z_L$, the lens transforms the beam parameters. The radius of curvature of the wavefront changes according to the lensmaker's formula for wavefronts (assuming the lens is at $z=0$ for simplicity of this formula, and input $R_{in}$ gives output $R_{out}$):
$$
\frac{1}{R_{\text{out}}} = \frac{1}{R_{\text{in}}} - \frac{1}{f}.
$$
The beam waist radius $W$ is unchanged immediately after passing through an ideal thin lens: $W_{\text{out}}(z_L) = W_{\text{in}}(z_L)$.

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/02_Fundamental_phenomena 30.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/02_Fundamental_phenomena%2030.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=164&rect=554,133,828,281| ]]
*(Figure shows transformation of $W(z)$ and $R(z)$ by a lens)*

If a Gaussian beam with waist $W_0$ at $z_w$ (input parameters $z_R, W_0$) is incident on a thin lens of focal length $f$, the output beam will be a new Gaussian beam with a new waist $W_0'$ at a new position $z_w'$, and a new Rayleigh range $z_R'$. These new parameters can be found using the ABCD matrix formalism for the q-parameter. The magnification $M = W_0'/W_0$ and the new waist position can be expressed in terms of $f$, $z_w$ (distance of input waist from lens), and $z_R$. For a lens at $z=0$, and input waist at $z_1$ (so $z_w=z_1$ in prior notation), the output waist is at $z_2$ and has radius $W_{02}$:
- New Rayleigh range: $z_{R2} = M^2 z_{R1}$.
- New waist radius: $W_{02} = M W_{01}$.
- Magnification: $M = \frac{|f|}{\sqrt{(z_1+f)^2+z_{R1}^2}}$.
- New waist position: $z_2-f = -M^2(z_1+f)$.

The new waist radius is $M W_{01}$, and the new Rayleigh range changes by $M^2$.

### 6.1.7 ABCD Law for Gaussian Beams

The propagation of Gaussian beams through paraxial optical systems can be conveniently described using the complex beam parameter (q-parameter), defined as:
$$
q(z) = (z-z_w) + i z_R.
$$
Alternatively, its inverse is related to the radius of curvature $R(z)$ and beam radius $W(z)$:
$$
\frac{1}{q(z)}=\frac{1}{R(z)}-i \frac{\lambda_0}{\pi n W^2(z)}.
$$
If an optical system is described by an ABCD ray-transfer matrix for paraxial rays, the q-parameter of an input Gaussian beam $q_1$ transforms to an output $q_2$ according to Kogelnik's ABCD law:

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/02_Fundamental_phenomena 31.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/02_Fundamental_phenomena%2031.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=169&rect=187,240,646,394| ]]

$$
q_2=\frac{A q_1+B}{C q_1+D}.
$$
This powerful result allows us to use the same ABCD matrices derived for [[Notes/2025 Quantum Electronics/5 Fourier Optics#5.8 Paraxial Ray Optics\|paraxial ray optics]] to transform Gaussian beams. For example:
- Propagation through free space of length $d$: $\mathbf{M} = \begin{pmatrix} 1 & d \\ 0 & 1 \end{pmatrix}$.
  $q_2 = \frac{1 \cdot q_1 + d}{0 \cdot q_1 + 1} = q_1+d$.
- Passage through a thin lens of focal length $f$: $\mathbf{M} = \begin{pmatrix} 1 & 0 \\ -1/f & 1 \end{pmatrix}$.
  $q_2=\frac{1 \cdot q_1 + 0}{(-1/f) q_1 + 1} = \frac{q_1}{1-q_1/f}$.
This connection between ray optics (via ABCD matrices) and Gaussian beam optics (via the q-parameter) is not coincidental. In the limit $\lambda_0 \to 0$, the imaginary part of $1/q(z)$ vanishes, and $1/q(z) \to 1/R(z)$. For paraxial rays, $R(z) \approx r(z)/\theta(z)$ (where $r$ is ray height, $\theta$ is ray angle). The ABCD law for $q$ then becomes consistent with the ray transformation $\binom{r_2}{\theta_2}=\mathbf{M}\binom{r_1}{\theta_1}$.

## 6.2 Paraxial Helmholtz Equation and Slowly-Varying Envelope Approximation
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=118&selection=3,0,5,37| ]] [[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=3&selection=0,67,0,67| ]]

Let us return once more to the Helmholtz equation, introduced in [[#6.1.1 Gaussian Beams as Solution to the Helmholtz Equation|section 6.1.1]]:
$$
\nabla^2 U+k^2 U=0.
$$
We seek solutions of the form $U(x,y,z)=A(x, y, z) e^{-i k z}$, where $A(x,y,z)$ is a slowly varying complex envelope representing the deviation from a simple plane wave propagating along $z$. Substituting this into the Helmholtz equation, we obtain:
$$
\left(\nabla_T^2 A + \frac{\partial^2 A}{\partial z^2}\right) e^{-ikz} - 2ik \frac{\partial A}{\partial z} e^{-ikz} -k^2 A e^{-ikz} + k^2 A e^{-ikz} = 0.
$$
This simplifies to:
$$
\nabla_T^2 A + \frac{\partial^2 A}{\partial z^2} - 2ik \frac{\partial A}{\partial z} = 0.
$$
We now apply the paraxial approximation, which is a form of the [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.4.1 Slowly-Varying-Envelope Approximation\|slowly-varying envelope approximation (SVEA)]] with respect to $z$. We assume that the envelope $A$ changes much more slowly along $z$ than the fast phase oscillation $e^{-ikz}$, and also that its transverse variations are slow. Specifically, we assume that the second derivative with respect to $z$ is much smaller than the term involving the first derivative:
$$
\left|\frac{\partial^2 A}{\partial z^2}\right| \ll \left|k \frac{\partial A}{\partial z}\right|.
$$
Under this condition, we can neglect the $\frac{\partial^2 A}{\partial z^2}$ term, yielding the paraxial Helmholtz equation (or paraxial wave equation):
$$
\nabla_T^2 A - 2ik \frac{\partial A}{\partial z}=0, \quad\text{where}\quad \nabla_T^2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}.
$$
The next figure schematically sketches the field (fast oscillations) and its slowly varying envelope.

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/03_Beams_and_resonators.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/03_Beams_and_resonators.webp)[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=3&rect=553,227,828,401| ]]

Consider now the 2D spatial Fourier transform of the paraxial Helmholtz equation with respect to $x$ and $y$. Let $B(k_x,k_y,z)=\mathcal{F}_{xy}\{A(x,y,z)\}$. Then $\mathcal{F}_{xy}\{\nabla_T^2 A\} = -(k_x^2+k_y^2)B$. This yields:
$$
-(k_x^2+k_y^2)B - 2ik \frac{\partial B}{\partial z}=0.
$$
This is a first-order ordinary differential equation for $B$ with respect to $z$:
$$
\frac{\partial B}{\partial z} = \frac{i(k_x^2+k_y^2)}{2k} B.
$$
The solution is:
$$
B(k_x, k_y, z)=B(k_x, k_y, 0) \exp\left(i z\frac{k_x^2+k_y^2}{2k}\right).
$$
This exactly retrieves the phase factor $e^{-i z (k_x^2+k_y^2)/(2k)}$ found in the transfer function for Fresnel propagation (section 5.3) if we recall that $A$ is the envelope relative to $e^{-ikz}$. The transfer function for $U$ was $H_{Fresnel} \approx e^{ikz} e^{-iz(k_x^2+k_y^2)/(2k)}$. The factor $e^{-iz(k_x^2+k_y^2)/(2k)}$ here is the transfer function for the envelope $A$. 

At this point, it is good to recall the hierarchy of approximations we have used:

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/03_Beams_and_resonators 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/03_Beams_and_resonators%201.webp)[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=5&rect=131,90,704,481| ]]

---
## 6.3 Hermite-Gaussian Beams
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=119&selection=171,0,173,22| ]] [[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=6&selection=0,0,0,22| ]]

This subsection and the remainder of this chapter will be kept rather concise, as it serves mainly to introduce these beam types rather than delve into exhaustive detail.

The fundamental Gaussian beam ($TEM_{00}$) is not the only non-plane wave solution of the paraxial Helmholtz equation. Recall that the complex envelope of the fundamental Gaussian beam can be written as:
$$
A_G(x, y, z)=\frac{A_1}{q(z)} \exp\left(-i k\frac{x^2+y^2}{2 q(z)}\right),
$$
with $q(z)=(z-z_w)+iz_R$. Higher-order solutions can be constructed by multiplying $A_G(x,y,z)$ by polynomials in $x$ and $y$ and an additional $z$-dependent phase factor. We consider solutions of the form:
$$
A(x, y, z)=\mathcal{X}\left(\frac{\sqrt{2} x}{W(z)}\right) \mathcal{Y}\left(\frac{\sqrt{2} y}{W(z)}\right) e^{i \mathcal{Z}(z)} A_G(x, y, z),
$$
where $\mathcal{X}$ and $\mathcal{Y}$ are real functions of scaled transverse coordinates, and $\mathcal{Z}(z)$ is a real, slowly-varying phase function. Since $\mathcal{X}$ and $\mathcal{Y}$ are real, the phase fronts of these higher-order beams have approximately the same radius of curvature $R(z)$ as the fundamental Gaussian beam. This implies they behave similarly when incident on thin lenses and curved mirrors (within the paraxial approximation).

The solutions obtained in Cartesian coordinates are the Hermite-Gaussian beams, $U_{l,m}(x,y,z)$. Their complex amplitude is given by:
$$
\begin{aligned}
U_{l, m}(x, y, z)= & C_{l, m} \frac{W_0}{W(z)} H_l\left(\frac{\sqrt{2} x}{W(z)}\right) H_m\left(\frac{\sqrt{2} y}{W(z)}\right) \exp\left(-\frac{x^2+y^2}{W^2(z)}\right) \\
& \times \exp\left[-i k z - i k \frac{x^2+y^2}{2 R(z)} + i(l+m+1) \arctan\left(\frac{z-z_w}{z_R}\right)\right],
\end{aligned}
$$
where $C_{l,m}$ is a normalisation constant, $H_l(u)$ and $H_m(v)$ are Hermite polynomials of order $l$ and $m$ respectively. The term $G_p(u) = H_p(u)e^{-u^2/2}$  is the Hermite-Gaussian function. The Gouy phase is now $(l+m+1)\arctan((z-z_w)/z_R)$.
The integers $l,m \ge 0$ are mode indices. The fundamental Gaussian beam corresponds to $l=m=0$.
Low-order Hermite-Gaussian beam intensity profiles at the waist ($z=z_w$) are shown below:

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/QE_script.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/QE_script.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=122&rect=124,460,496,673| ]]

Higher-order solutions ($l>0$ or $m>0$) exhibit nodes (lines of zero intensity) in the transverse plane; $l$ nodes in the $x$-direction and $m$ nodes in the $y$-direction. Hermite-Gaussian beams form a complete orthogonal set of solutions and are often used as a basis to describe laser beams in optical resonators, particularly those with rectangular symmetry defined by astigmatic components or apertures. In many laser applications, however, operation in the fundamental $TEM_{00}$ mode is desired to achieve the best beam quality, and contributions from higher-order modes are suppressed.

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/QE_script 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/QE_script%201.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=123&rect=127,394,533,663| ]]

---
## 6.4 Laguerre-Gaussian Beams
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=122&selection=27,0,29,23| ]] [[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=14&selection=0,0,0,23| ]]

If the paraxial Helmholtz equation is solved in cylindrical coordinates $(\rho,\phi,z)$, another complete orthogonal set of solutions is found: the Laguerre-Gaussian beams. The complex amplitude of such a beam (mode $LG_{p,l}$) is:
$$
\begin{aligned}
U_{p, l}(\rho, \phi, z)= & C_{p,l} \frac{W_0}{W(z)}\left(\frac{\sqrt{2}\rho}{W(z)}\right)^{|l|} L_p^{|l|}\left(\frac{2 \rho^2}{W^2(z)}\right) \exp\left(-\frac{\rho^2}{W^2(z)}\right) \\
& \times \exp\left[-i k z - i k \frac{\rho^2}{2 R(z)} - i l \phi + i(2p+|l|+1) \arctan\left(\frac{z-z_w}{z_R}\right)\right],
\end{aligned}
$$
where $L_p^{|l|}(x)$ are the generalised Laguerre polynomials, $p \ge 0$ is the radial mode index (number of radial nodes excluding the one at $\rho=\infty$), and $l$ is the azimuthal mode index or topological charge (an integer). The fundamental Gaussian beam is $LG_{0,0}$ ($p=0, l=0$).
The intensity profiles of Laguerre-Gaussian beams typically exhibit cylindrical symmetry for $l=0$ (donut shape for $p>0, l=0$) or more complex ringed structures with azimuthal phase variation $e^{-il\phi}$ for $l \neq 0$. Beams with $l\neq0$ have zero intensity on the beam axis ($\rho=0$) and possess a helical wavefront. This helical phase means these beams carry orbital angular momentum (OAM) of $l\hbar$ per photon. This OAM can impart a torque on microscopic objects, making Laguerre-Gaussian beams useful for optical tweezers, particle manipulation (rotation), and in quantum information. The following figure shows intensity profiles for some low-order Laguerre-Gaussian beams:

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/QE_script 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/QE_script%202.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=124&rect=126,389,537,665| ]]

The sign of $l$ determines the handedness (direction of rotation) of the helical phase front. The magnitude of $|l|$ indicates how many $2\pi$ phase twists occur around the circumference.

---
## 6.5 Bessel Beams
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=124&selection=45,0,47,12| ]] [[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=20&selection=0,12,0,12| ]]

Yet another approach to finding beam solutions involves seeking beams that are "diffraction-free" or "non-diffracting," meaning their transverse intensity profile ideally does not change upon propagation. These are distinct from Gaussian beams, which inherently diverge. An ideal Bessel beam has a field profile of the form:
$$
U(x, y, z)=A(x, y) e^{-i k_z z},
$$
where $k_z$ is the longitudinal wave number. Substituting this into the Helmholtz equation $\nabla^2 U + k^2 U = 0$ gives for the transverse amplitude $A(x,y)$:
$$
\nabla_T^2 A(x,y) + (k^2-k_z^2) A(x,y) = 0 \implies \nabla_T^2 A(x,y) + k_T^2 A(x,y) = 0,
$$
where $k_T = \sqrt{k^2-k_z^2}$ is the transverse wave number. In polar coordinates $(\rho, \phi)$, solutions are of the form:
$$
A(\rho, \phi)=A_m J_m(k_T \rho) e^{im \phi}.
$$
Here, $J_m(x)$ are Bessel functions of the first kind of order $m$. For the fundamental Bessel beam ($m=0$), $A(\rho) = A_0 J_0(k_T \rho)$, which is real (for real $A_0$) and cylindrically symmetric. The wavefronts $e^{-ik_z z}$ are planar. The transverse intensity profile $|J_0(k_T\rho)|^2$ consists of a central bright spot surrounded by concentric rings, and this profile ideally propagates indefinitely without spreading:

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/QE_script 3.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/QE_script%203.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=126&rect=72,567,532,688| ]]

Bessel beams are exact solutions to the full Helmholtz equation (not just the paraxial one, though they can also be paraxial if $k_T \ll k_z$). This non-diffracting property is remarkable. Such beams are also, for instance, solutions to the wave equation in an optical fibre (as guided modes).

However, an ideal Bessel beam (extending infinitely in the transverse plane) carries infinite power, which is not physically realisable. In practice, Bessel beams can only be approximated over a finite transverse region and for a finite propagation distance. They can be generated experimentally using, for instance, an axicon lens, a conical lens that transforms an incident plane wave or Gaussian beam into an approximation of a Bessel beam over a certain range, or by using spatial light modulators (SLMs) to shape the wavefront.

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/03_Beams_and_resonators 3.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/03_Beams_and_resonators%203.webp)[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=25&rect=173,163,610,415| ]]

---
## 6.6 Summary

To summarise the transverse intensity profiles of these three (excluding the fundamental Gaussian beam, which is $TEM_{00}$ or $LG_{00}$) beam types:

![Attachments/Notes/2025 Quantum Electronics/6 Beam Types/03_Beams_and_resonators 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/6%20Beam%20Types/03_Beams_and_resonators%202.webp)[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=27&rect=40,100,809,465| ]]

---