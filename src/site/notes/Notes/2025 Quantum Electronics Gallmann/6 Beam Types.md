---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics-gallmann/6-beam-types/","hide":"true","updated":"2025-05-04T20:59:26.624+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/2025 Quantum Electronics Gallmann/6 Beam Types#6.1 Gaussian Beam Optics\|6.1 Gaussian Beam Optics]]
- [[Notes/2025 Quantum Electronics Gallmann/6 Beam Types#6.2 Paraxial Helmholtz Equation and Slowly-Varying Envelope Approximation\|6.2 Paraxial Helmholtz Equation and Slowly-Varying Envelope Approximation]]
- [[Notes/2025 Quantum Electronics Gallmann/6 Beam Types#6.3 Hermite-Gaussian Beams\|6.3 Hermite-Gaussian Beams]]
- [[Notes/2025 Quantum Electronics Gallmann/6 Beam Types#6.4 Laguerre-Gaussian Beams\|6.4 Laguerre-Gaussian Beams]]
- [[Notes/2025 Quantum Electronics Gallmann/6 Beam Types#6.5 Bessel Beams\|6.5 Bessel Beams]]
- [[Notes/2025 Quantum Electronics Gallmann/6 Beam Types#6.6 Summary\|6.6 Summary]]

---
# 6 Beam Types
[[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=2&selection=0,35,0,35|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=118&selection=0,9,1,24|•]]
 In this chapter, we return to the treatment of beams, and will discuss different types of beams. The most important of these being the Gaussian beam.
## 6.1 Gaussian Beam Optics
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=115&selection=4,0,6,20|•]] [[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=148&selection=0,0,0,14|•]]

Gaussian beams are the most relevant beam type in optical laboratories, since they are the ones describing the optics of optical resonators and cavities. A Gaussian beam with waist at $z=0$ is described by

$$
U(\mathbf{r})=A_0 \frac{W_0}{W(z)} e^{-\frac{\rho^2}{W^2(z)}} e^{-i k z-i k \frac{\rho^2}{2 R(z)}-i \zeta(z)}
$$

with beam parameters

$$
\begin{aligned}
&\text{Beam Radius:}&W(z) & =W_0 \sqrt{1+\left(\frac{z}{z_0}\right)^2}, \\
&\text{Radius of Curvature:}&R(z) & =z\left[1+\left(\frac{z_0}{z}\right)^2\right], \\
&\text{Gouy Phase}&\zeta(z) & =-\arctan \frac{z}{z_0}, \\
&\text{Beam Waist:}&W_0 & =\sqrt{\frac{\lambda z_0}{\pi}}, \\
&\text{Half-Angle of Divergence:}&\theta_0 & =\frac{\lambda}{\pi W_0}.
\end{aligned}
$$
These parameters are explained more in the following subchapters.
### 6.1.1 Gaussian Beams as Solution to the Helmholtz Equation

This form is also found when considering a beam as
$$
U(\mathbf{r})=A(\mathbf{r}) e^{-i k z},
$$
with $A$ slowly changing in $\mathbf{r}$ over the length of one wavelenght. Then, the Helmholtz equation 
$$
\nabla^2 U+k^2 U=0
$$
can be transformed into the _Paraxial Helmholtz_ equation
$$
\nabla_T^2 A-i 2 k \frac{\partial A}{\partial z}=0,
$$
where we use that $\frac{\partial^2}{\partial z^2} A\rightarrow 0.$ A general solution has the form 
$$
A(\mathbf{r})=\frac{A_1}{q(z)} e^{-i k\left(x^2+y^2\right) / 2 q(z)}\quad\text{with}\quad q(z)=z+i z_0.
$$

We call $W(z)$ the beam radius, as it tells us the radial distance where the intensity falls off to $1/e^2$ of its maximum value in that plane. Twice the beam radius is also sometimes called the spot size. The projection of a Gaussian beam onto (for example) the $x$- and $z$-axis looks like

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/02_Fundamental_phenomena 25.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/02_Fundamental_phenomena%2025.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=153&rect=108,178,437,435|•]]

Here, the minimal beam radius (waist) $W_0$ is at a distance $z=100.$ From the form of the Gaussian beam, it becomes apparent that most of the beam power is concentrated in a small around the beam axis. Then, the intensity distribution in any transverse plane is a circular symmetric Gaussian function, with its centre being the beam axis. The width of that function $W(z)$ has its minimum $W_0$ at the beam waist $z=100.$ From there, the radius increases in both directions. Wavefronts are approximately planar near the beam waist, but gradually curve and become approximately spherical far from the waist. For a fixed $z_0,$ the waist becomes smaller the shorter the wavelength $\lambda$ is. 

### 6.1.2 Rayleigh Length

The Rayleigh range is defined as $z_0$ and it is the distance over which the beam gets twice as big in area compared to the waist:

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/02_Fundamental_phenomena 26.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/02_Fundamental_phenomena%2026.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=155&rect=183,254,683,443|•]]

Then we deduce the following behaviour:
- For fixed beam waist $W_0:$ The shorter the wavelength, the longer the depth of focus $2z_0.$
- For fixed wavelength $\lambda:$ The larger the beam waist, the longer the depth of focus.

### 6.1.3 Beam Divergence

Next up, we may want a measure of how **quickly** the beam width increases. This leads to the notion of beam divergence :

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/02_Fundamental_phenomena 27.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/02_Fundamental_phenomena%2027.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=157&rect=180,260,668,427|•]]

Again, we deduce the following behaviour:
- For fixed beam waist $W_0:$ The shorter the wavelength, the smaller the divergence.
- For fixed wavelength $\lambda:$ The larger the beam waist, the smaller the divergence.

### 6.1.4 Wavefront of Gaussian Beams

In the Fresnel approximation, near the beam waist ($z\approx 0$), the radius of curvature  diverges $R\rightarrow \infty$, indicating nearly planar wavefronts. Far from the waist ($|z|\rightarrow\infty$), radius of curvature approaches $z$, meaning the wavefronts become approximately spherical, appearing to originate from a spherical wave emitted at the waist location.

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/02_Fundamental_phenomena 28.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/02_Fundamental_phenomena%2028.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=158&rect=161,207,655,416|•]]

Here, $R(z)$ is the radius of the wavefront curvature:
$$
R(z)=z\left[1+\left(\frac{z_0}{z}\right)^2\right]
$$

### 6.1.5 Gouy Phase

The term $\zeta(z)$ is the Gouy phase ([source](https://www.rp-photonics.com/gouy_phase_shift.html)):

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/Pasted image 20250331190810.png|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/Pasted%20image%2020250331190810.png)

Further, the limits are
$$
\begin{aligned}
z \rightarrow\infty & \Longrightarrow \zeta(z) \rightarrow-\pi / 2 \\
z \rightarrow -\infty & \Longrightarrow \zeta(z) \rightarrow \pi / 2.
\end{aligned}
$$
The Gouy phase is a phase retardation of the Gaussian beam relative to a plane wave at points on the beam axis, with zero retardation at the waist. It is necessary since the phase front of a Gaussian beam transition from a spherical front a minus infinity to a plane at the waist, and back to a spherical phase front but with opposite curvature at plus infinity. It becomes obvious that this phase shift is significant only around the waist of the beam. 

### 6.1.6 Shifting the Gaussian Beam

We may also define the Gaussian beam with its waist at $z=z_w,$ rather than $z=0.$ Then, we must simply shift all formulas by $-z_w.$ This makes the treatment of some optical elements simpler. Consider a thin lens at $z=0.$ We can show that
$$
\frac{1}{R^{\prime}}=\frac{1}{R}-\frac{1}{f}
$$
and 
$$
W(0)=W^{\prime}(0),
$$
such that the intensity profile at $z=0$ is unchanged. 

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/02_Fundamental_phenomena 30.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/02_Fundamental_phenomena%2030.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=164&rect=554,133,828,281|•]]

Summarised, we can show that the effect of a thin lens on a Gaussian beam are:
- New Rayleigh range: $z_0^{\prime}=M^2 z_0$.
- New waist radius: $W_0^{\prime}=M W_0$.
- Magnification: $M=\left|\frac{f}{\sqrt{\left(z_w+f\right)^2+z_0^2}}\right|$.
- New position of the waist: $\left(z_w^{\prime}-f\right)=-M^2\left(z_w+f\right)$.

We can see that the Waist increases by a factor $M,$ while the Rayleigh range increases by $M^2.$ 

### 6.1.7 ABCD Law for Gaussian Beams

As before, we are lucky that the ray-transfer matrix formalism can still be used, although slightly adjusted. The idea is the following: Instead of relying on $r$ and $\theta$, we introduce a new parameter - the q-parameter - which contains information about the Rayleigh length and the waist position:

$$
q(z)=\left(z-z_w\right)+i z_0 \iff \frac{1}{q(z)}=\frac{1}{R(z)}-i \frac{\lambda}{\pi W^2(z)}.
$$
Similar to before, we wonder, how does the q-parameter change through an optical system described by a given ray-transfer matrix?

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/02_Fundamental_phenomena 31.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/02_Fundamental_phenomena%2031.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=169&rect=187,240,646,394|•]]

It can be shown that, for a linear, cylindrically symmetric paraxial beam, the q-parameter transform as
$$
q_2=\frac{A q_1+B}{C q_1+D}.
$$
We are lucky again, because it turns out that we can use the same matrices as described for [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.8 Paraxial Ray Optics\|ray optics]]! For example, for propagation through free space of length $d$, the q-parameter changes as $q\rightarrow q+d.$ For a thin lens of focal length $f,$ the parameter changes as
$$
q_2=\frac{q_1}{1-q_1 / f}.
$$
Similar to before, passing two consecutive optical elements simply means that we multiply the two ray-transfer matrices. The connection between ray optics and the Gaussian beam is no coincidence: Considering the limit $\lambda\rightarrow 0,$ we find that $q(z)=R$ simply describes the curvature of the wavefront. Then, in the paraxial approximation, we find $R=r/\theta,$ or $q=r/\theta.$ Thus, we have that
$$
q^{\prime}=\frac{r^{\prime}}{\theta^{\prime}}=\frac{A r+B \theta}{C r+D \theta},
$$
which is the same as before:
$$
\binom{r^{\prime}}{\theta^{\prime}}=\left(\begin{array}{ll}
A & B \\
C & D
\end{array}\right)\binom{r}{\theta}=\binom{A r+B \theta}{C r+D \theta}.
$$

## 6.2 Paraxial Helmholtz Equation and Slowly-Varying Envelope Approximation
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=118&selection=3,0,5,37|•]] [[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=3&selection=0,67,0,67|•]]

Let us return once more to the Helmholtz equation already introduced in [[Notes/2025 Quantum Electronics Gallmann/6 Beam Types#6.1.1 Gaussian Beams as Solution to the Helmholtz Equation\|chapter 6.1.1]]:
$$
\nabla^2 U+k^2 U=0,
$$

where we now write 
$$
U=A(x, y, z) e^{-i k z}.
$$
Substituting this term into the Helmholtz equation, we obtain 
$$
\begin{gathered}
\left(\nabla^2 A\right) e^{-i k z}-k^2 A e^{-i k z}-2 i k \frac{\partial A}{\partial z} e^{-i k z}+k^2 A e^{-i k z}=\nabla^2 A-2 i k \frac{\partial A}{\partial z}=0.
\end{gathered}
$$
We now apply again the paraxial approximation, however in different wording: We assume that $A$ does not change significantly over scales of one wavelength, such that rays are paraxial (since only the first order term parallel to $\mathbf{k}$ survives) and hence the angle they form with the propagation axis is small. This may be written as
$$
\frac{\partial A}{\partial z}\lambda \ll A,
$$
and additionally
$$
\frac{\partial A}{\partial z}\ll\frac{kA}{2\pi}<kA.
$$
Similarly, the derivative $\partial_zA$ varies slowly over one wavelength, such that 
$$
\frac{\partial^2 A}{\partial z^2} \ll k \frac{\partial A}{\partial z}.
$$
Therefore, we can discard the second derivative of $A$ with respect to $z$ from the Helmholtz equation and obtain the paraxial Helmholtz equation
$$
\nabla_T^2 A-2 i k \frac{\partial A}{\partial z}=0 \quad\text{with}\quad \nabla_T^2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}.
$$
The approximations used are also known as [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.4.1 Slowly-Varying-Envelope Approximation\|slowly-varying envelope approximation]]. The next figure schematically sketches the field and its envelope.

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/03_Beams_and_resonators.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/03_Beams_and_resonators.webp)[[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=3&rect=553,227,828,401|•]]

Consider now the Fourier transform of the paraxial Helmholtz equation with respect to $x$ and $y:$

$$
-\left(k_x^2+k_y^2\right) B-2 i k \frac{\partial B}{\partial z}=0,
$$
where $B(k_x,k_y,z)=\mathcal{F}(A)$ is the Fourier transform of $A.$ The solution of this equation is 
$$
B\left(k_x, k_y, z\right)=B\left(k_x, k_y, 0\right) e^{i z\left(k_x^2+k_y^2\right) / 2 k},
$$
which exactly retrieves the result derived earlier from the [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.3 Fresnel Approximation\|Fresnel approximmation]] in Fourier optics.

Now, at this point the reader might be slightly confused about all the approxmations that have been used, so it is good to recall what we've learned so far:

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/03_Beams_and_resonators 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/03_Beams_and_resonators%201.webp)[[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=5&rect=131,90,704,481|•]]

---
## 6.3 Hermite-Gaussian Beams
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=119&selection=171,0,173,22|•]] [[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=6&selection=0,0,0,22|•]] 

This subchapter and the rest of this chapter will be kept rather short, as it serves not much purpose to delve into great details. 

The Gaussian beam is not the only non-plane wave solution of the Helmholtz equation in the paraxial approximation. Recall that the complex envelope of the Gaussian beam can be written as 
$$
A_G(x, y, z)=\frac{A_1}{q(z)} e^{-i k\left(x^2+y^2\right) / 2 q(z)},
$$
with $q(z)=z+iz_0.$ We may now construct a modified version of such a beam by considering 
$$
A(x, y, z)=\mathcal{X}[\sqrt{2} x / W(z)] \mathcal{Y}[\sqrt{2} y / W(z)] e^{i \mathcal{Z}(z)} A_G(x, y, z),
$$
where $\mathcal{X}, \mathcal{Y}$ and $\mathcal{Z}$ are all real functions. Further, we will assume that $\mathcal{Z}(z)$ is a slowly-varying function of $z,$ e.g. that $d \mathcal{Z} / d z \ll \mathcal{Z}.$ Since both $\mathcal{X}$ and $\mathcal{Y}$ are real, the phase of this beam is the same as for the Gaussian beam, however with an extra phase given by $\mathcal{Z}(z)$ depending only slowly on $z.$ Therefore, both beams have approximately the same radius of curvature. Again, this implies they behave similarly being incident on thin lenses and curved mirrors.

The reader should focus on the resulting beam shapes rather than the detailed mathematical derivation, keeping in mind this is an experimental course after all. The result is simply shown for completeness. The full complex electric field amplitude $A(x,y,z)e^{-ikz}$ associated with particular eigenvalues $(l,m)$ is
$$
\begin{aligned}
U_{l, m}(x, y, z)= & A_{l, m} \frac{W_0}{W(z)} G_l\left[\frac{\sqrt{2} x}{W(z)}\right] G_m\left[\frac{\sqrt{2} y}{W(z)}\right] \\
& \cdot \exp \left[-i k z-i k \frac{x^2+y^2}{2 R(z)}+i(l+m+1) \arctan\left(z / z_0\right)\right],
\end{aligned}
$$
where $u=\sqrt{2} x / W(z)$ and $v=\sqrt{2} y / W(z)$ are scaled distances. The term 
$$
G_l(u)=H_l(u)e^{-u^2/2}
$$
is called the Hermite-Gaussian function with $H_l(u)$ being Hermite polynomials.  What really matters now is how these beams look like. Consider the low-order Hermite-Gaussian beams at $z=0:$

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/QE_script.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/QE_script.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=122&rect=124,460,496,673|•]]

Considering even more orders, you can see a pattern, that is that higher order solutions all have nodes in either the horizontal or vertical direction. Hermite-Gaussian beams are often used as a basis to describe laser beams in resonators, since these devices are typically built with components that define two orthogonal transverse directions, making these beams an appropriate basis. However, in practice it is desirable to suppress contributions from higher-order modes.

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/QE_script 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/QE_script%201.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=123&rect=127,394,533,663|•]]

This is a general result: The Hermite-Gaussian beams make a complete set, and their superposition can therefore describe any propagating beam. Note that the lowest-order Hermite-Gaussian beam is simply a Gaussian beam (the image might be stretched).

---
## 6.4 Laguerre-Gaussian Beams
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=122&selection=27,0,29,23|•]] [[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=14&selection=0,0,0,23|•]]

Nothing prevents us from considering the whole problem of beam propagation in cylindrical coordinates $(\rho,\phi,z)$, where then the complex amplitude of such a beam is 
$$
\begin{aligned}
U_{l, m}(\rho, \phi, z)= & A_{l, m} \frac{W_0}{W(z)}\left(\frac{\rho}{W(z)}\right)^{|l|} L_m^{|l|}\left(\frac{2 \rho^2}{W^2(z)}\right) e^{-\rho^2 / W^2(z)} \\
& \times \exp \left[-i k z-i k \frac{\rho^2}{2 R(z)}-i l \phi+i(|l|+2 m+1) \arctan\left(z / z_0\right)\right],
\end{aligned}
$$

with $L^{|l|}_m(x)$ the generalised Laguerre polynomial. We call $l$ the topological charge, while $m$ is the mode order. Again, $l=m=0$ is simply a Gaussian beam again. The intensity of Laguerre-Gaussian beam have cylindrical symmetry, their phase however has a dependence on $\phi$ allowing for linear combinations of such beams to not be cylindrically symmetric. Beams with $l\neq0$ have zero intensity in the centre, and a helical wavefront, allowing them to carry orbital angular momentum: Each photon carries $L=l\hbar,$ thus imparting a torque which may be used to manipulating micro- or even nano objects by rotating them, or by using the beam as optical tweezer. The following figure shows the lowest-order Laguerre-Gaussian beams:

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/QE_script 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/QE_script%202.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=124&rect=126,389,537,665|•]]

The sign of $l$ determines the handedness of the spiral trajectory, which is also followed by the Poynting vector of the propagating mode. The magnitude of $l$ determines how many rotations the spiral undergoes over the distance of one wavelength along the propagation direction. 

---
## 6.5 Bessel Beams
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=124&selection=45,0,47,12|•]] [[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=20&selection=0,12,0,12|•]]

Yet another, approach to finding beam-solution is trying to find beams that are similar to plane waves in terms of flat wavefront, however with a non-uniform intensity profile in the transverse direction. The form of such a beam is 
$$
U(x, y, z)=A(x, y) e^{-i \beta z},
$$
which as input to the paraxial Helmholtz equation, is solved in polar coordininates
$$
A(\rho, \phi)=A_m J_m\left(k_T \rho\right) e^{i m \phi}.
$$
Here, $J_m(x)$ are Bessel functions of the first kind of $m$-th order. For $m=0,$ we have that $A(\rho,\phi)$ purely real such that the wavefront is planar. The intensity is circularly symmetric and does not depend on $z:$

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/QE_script 3.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/QE_script%203.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=126&rect=72,567,532,688|•]]

The observation that the intensity is independent of $z$ is important: It implies that Bessel beams do not diffract! This is not unusual, and it turns out they are for example also the solution to the wave equation inn an optical fibre. In comparison to Gaussian beams, they are exact solutions to the Helmholtz equation, and they are less constrained by the limits of the paraxial approximation. 

Further note that Bessel beams carry infinite power, which is not surprising since we we were looking for plane wave-like solutions. This also implies that Bessel can not be exactly realised physically. However, they may be approximately obtained in the lab by using an axicon lens or spatial light modulator to create such a beam over a finite range:

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/03_Beams_and_resonators 3.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/03_Beams_and_resonators%203.webp)[[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=25&rect=173,163,610,415|•]]

---
## 6.6 Summary

To summarise the three (excluding the Gaussian beam) beams:

![Attachments/Notes/2025 Quantum Electronics Gallmann/6 Beam Types/03_Beams_and_resonators 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/6%20Beam%20Types/03_Beams_and_resonators%202.webp)[[Notes/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=27&rect=40,100,809,465|•]]

---