---
{"dg-publish":true,"permalink":"/teaching/2025-quantum-electronics-gallmann/3-reflection-and-transmission-at-interfaces/","hide":"true","updated":"2025-03-09T20:46:52.211+01:00"}
---

Jump back to ==[[Teaching/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Teaching/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.1 Boundary Conditions for Isotropic Media\|3.1 Boundary Conditions for Isotropic Media]]
- [[Teaching/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.2 Brewster's Angle\|3.2 Brewster's Angle]]
- [[Teaching/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.3 Total Internal Reflection\|3.3 Total Internal Reflection]]
- [[Teaching/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.4 Evanescent Waves\|3.4 Evanescent Waves]]

---
# 3 Reflection and Transmission at Interfaces
## 3.1 Boundary Conditions for Isotropic Media
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=60&selection=4,0,6,39|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=138&selection=0,0,0,54|•]]

So far, we have only considered propagation of electromagnetic waves through uniform media, that is, without boundaries. From daily life, we know that these reflect and transmit at interfaces between media with different electric and magnetic properties. To this end, it is useful to work with the equivalent integral form of the Maxwell equations. The curl equations become
$$
\begin{aligned}
\int \mathbf{E} \cdot \mathbf{d} \mathbf{l} & =-\iint \frac{\partial \mathbf{B}}{\partial t} \cdot \mathbf{d} \mathbf{A}, \\
\int \mathbf{H} \cdot \mathbf{d} \mathbf{l} & =\iint\left(\mathbf{j}_f+\frac{\partial \mathbf{D}}{\partial t}\right) \cdot \mathbf{d A}.
\end{aligned}
$$
Consider an interface as shown in the following figure:

![Attachments/QE_script 4.webp|700](/img/user/Attachments/QE_script%204.webp)[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=61&rect=144,597,460,666|•]]

The integral is performed along the line being the boundary of the red-shaded area. We consider that the distance (vertical in the image) between the upper and lower boundary is infinitesimally small, e.g. $d \rightarrow0.$ This makes the area infinitesimally small as well. Therefore, we find the boundary conditions parallel to the surface to be:
$$
\begin{aligned}
& \left(\mathbf{E}_1\right)_{\|}-\left(\mathbf{E}_2\right)_{\|}=0 \\
& \left(\mathbf{H}_1\right)_{\|}-\left(\mathbf{H}_2\right)_{\|}=0
\end{aligned}
$$
In other words, the parallel components of both electric and magnetic fields are _continuous_ across the interface. More generally, for any partial waves at the interface, the boundary conditions are
$$
\begin{aligned}
\sum_j \mathbf{E}_{\|}^{(1, j)} e^{i\left(\omega^{(1, j)} t-k_{\|}^{(1, j)} \cdot \mathbf{r}_{\|}\right)} & =\sum_j \mathbf{E}_{\|}^{(2, j)} e^{i\left(\omega^{(2, j)} t-k_{\|}^{(2, j)} \cdot \mathbf{r}_{\|}\right)} \\
\sum_j \mathbf{H}_{\|}^{(1, j)} e^{i\left(\omega^{(1, j)} t-k_{\|}^{(1, j)} \cdot \mathbf{r}_{\|}\right)} & =\sum_j \mathbf{H}_{\|}^{(2, j)} e^{i\left(\omega^{(2, j)} t-k_{\|}^{(2, j)} \cdot \mathbf{r}_{\|}\right)}.
\end{aligned}
$$
Here:
- $\mathbf{E}_{\|}^{(1, j)}$ and $\mathbf{H}_{\|}^{(1, j)}$ are the parallel components of the $j$-th partial wave in medium 1 ,
- $\mathbf{E}_{\|}^{(2, j)}$ and $\mathbf{H}_{\|}^{(2, j)}$ are the parallel components of the $j$-th partial wave in medium 2,
- $\omega^{(1, j)}$ and $\omega^{(2, j)}$ are the frequencies of the $j$-th partial wave in medium 1 and 2 , respectively,
- $\mathbf{k}_{\|}^{(1, j)}$ and $\mathbf{k}_{\|}^{(2, j)}$ are the parallel components of the wave vectors of the $j$-th partial wave in medium 1 and 2, respectively,
- $\mathbf{r}_{\|}$is the position vector along the interface.

We have identified the incident wave with $E^{(1,1)}=\mathbf{E}_1$ and $\omega^{(1,1)}=\omega$ and so on. In order to fulfil both equations for all time, generally two additional waves at the same frequency as the incident wave, and at least one of those must be in medium 2. Further, to fulfil both conditions at every point on the interface, the $\mathbf{k}_{\|}$ components must also be the same for all these waves. Since the wavevectors magnitude is determined by the frequency and the refractive index of each medium, the wavevector is defined completely, expect the sign of its perpendicular component. There can only be one such wave in medium 2, transmitted part, and one reflected wave in medium 1. 

Therefore, consider that we consider three waves relevant to our problem.

![Attachments/QE_script 5.webp|700](/img/user/Attachments/QE_script%205.webp)[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=62&rect=143,247,461,373|•]]

From the above arguments, we find that 
$$
\theta_3=\theta_1\quad\text{and}\quad n_2\sin\theta_2=n_1\sin\theta_1.
$$
This is the reflection law, which states that 'angle of incidence is angle of reflection', while the second condition is Snell's law. The angles can be calculated as 
$$
\theta_j=\cos ^{-1}\left(\left|\hat{\mathbf{k}}_j \cdot \hat{\mathbf{n}}\right|\right),
$$
where $\hat{\mathbf{n}}$ is the surface normal of the interface. For convenience, we take the Cartesian coordinate for each wave such that the z-direction is the direction of propagation. Then, we find 
$$
\begin{aligned}
E_{1 x}+E_{3 x} & =E_{2 x}, \\
E_{1 y} \cos \theta_1-E_{3 y} \cos \theta_1 & =E_{2 y} \cos \theta_2, \\
H_{1 x}+H_{3 x} & =H_{2 x}, \\
H_{1 y} \cos \theta_1-H_{3 y} \cos \theta_1 & =H_{2 y} \cos \theta_2. \\
\end{aligned}
$$
Recalling that $\mathbf{H}=\frac{1}{Z} \hat{\mathbf{k}} \times \mathbf{E}$, we may rewrite this as 
$$
\begin{aligned}
\frac{1}{Z_1} E_{1 y}+\frac{1}{Z_1} E_{3 y} & =\frac{1}{Z_2} E_{2 y}, \\
\frac{1}{Z_1} E_{1 x} \cos \theta_1-\frac{1}{Z_1} E_{3 x} \cos \theta_1, & =\frac{1}{Z_2} E_{2 x} \cos \theta_2,
\end{aligned}
$$

which is equivalent to 
$$
\begin{aligned}
& \binom{E_{2 x}}{E_{2 y}}=\left(\begin{array}{cc}
t_s & 0 \\
0 & t_p
\end{array}\right)\binom{E_{1 x}}{E_{1 y}} \\
& \binom{E_{3 x}}{E_{3 y}}=\left(\begin{array}{cc}
r_s & 0 \\
0 & -r_p
\end{array}\right)\binom{E_{1 x}}{E_{1 y}}.
\end{aligned}
$$

The electric field vector propagating towards an interface can always be decomposed into two linearly polarised, orthogonal fields:
- Transverse electric (TE) wave, or s-polarised,
- Transverse magnetic (TM) wave, or p-polarised.

![Attachments/01_Introduction_and_theoretical_foundation 22.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2022.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=148&rect=70,126,733,470|•]]

The next animation shows on the left the total field (incident plus scattered field), and the scattered field (total minus incident field) on the right. The upper right region has higher refractive index than the bottom left. The electric field component out of plane is shown:
![Attachments/refractiveindexcange.gif|700](/img/user/Attachments/refractiveindexcange.gif)

Next, the Poynting vector is shown for both fields.
![Attachments/Pasted image 20250309185847.png|700](/img/user/Attachments/Pasted%20image%2020250309185847.png)

The coefficient $r_p$ is defined in such a way that $r_s=r_p$ for the case that $\theta_1=\theta_2=0$ (normal incidence), in which case there is no distinction between TE or TM wave. The explicit form is not given here, but for the case that $Z_2/Z_1\rightarrow\infty,$ there is complete reflection with different reflection phases. For the case that $Z_1\approx Z_2,$ there is efficient transmission. This is very similar to the usual impedance matching process in electronics, which is why we call $Z$ the impedance. 
For the common case of non-magnetic media, we obtain the well-known Fresnel equations
$$
\begin{aligned}
r_s & =\frac{n_1 \cos \theta_1-n_2 \cos \theta_2}{n_1 \cos \theta_1+n_2 \cos \theta_2}, \\
t_s & =\frac{2 n_1 \cos \theta_1}{n_1 \cos \theta_1+n_2 \cos \theta_2}=1+r_s, \\
r_p & =\frac{n_2 \cos \theta_1-n_1 \cos \theta_2}{n_1 \cos \theta_2+n_2 \cos \theta_1}, \\
t_p & =\frac{2 n_1 \cos \theta_1}{n_1 \cos \theta_2+n_2 \cos \theta_1}=\left(1-r_p\right) \frac{n_1}{n_2}.
\end{aligned}
$$

Since the intensity is proportional to the modulus square of the field, we find the corresponding coefficients for the intensity as 
$$
\begin{aligned}
R_s & =\left|r_s\right|^2, \\
R_p & =\left|r_p\right|^2, \\
T_s & =1-R_s, \\
T_p & =1-R_p .
\end{aligned}
$$

These equations follow from energy conservation, assuming negligible absorption. Generally, $T_s\neq |t_s|^2$ and $T_p\neq|t_p|^2,$ since intensity is power per area, and the effective beam cross-section changes upon transmission into the second medium:

![Attachments/QE_script 6.webp|700](/img/user/Attachments/QE_script%206.webp)[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=65&rect=138,433,467,692|•]]

We then have
$$
T_{s, p}=\frac{n_2 \cos \theta_2}{n_1 \cos \theta_1}\left|t_{s, p}\right|^2.
$$
Note that the phase of $r_{s,p}$ and $t_{s,p}$ represent phase shifts experienced at the interface. 'Phase retardation' is defined as the difference between phase shifts of $s$ and $p$ components. It causes a change in the polarisation state of the reflected and transmitted fields if the incident field is neither fully a TE or TM wave. The next two figures show the magnitude and phase of the reflection coefficient as function of the incident angle, in the case that light hits an optically denser medium (external reflection) for both s- and p-polarised light:

![Attachments/01_Introduction_and_theoretical_foundation 34.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2034.webp)
![Attachments/01_Introduction_and_theoretical_foundation 35.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2035.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=163&rect=213,131,587,264|•]]
Consider the next plot, which shows the power reflectance, transmittance and phase retardation at a glass/air interface. Glass has the higher refractive index. There is a large discrepancy between the case for s- and p-polarised light.

![Attachments/QE_script 7.webp|700](/img/user/Attachments/QE_script%207.webp)[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=66&rect=72,154,527,349|•]]

The phase retardation of the transmitted lights stays at $0^{\circ}$ for any incident angle, while the one for the reflected light is equal to $\pm180^{\circ},$ until _Brewster's angle_ is reached. At angles higher than this angle, there is no phase retardation.
Therefore, if the input light is linearly polarised and contains only s- or p-components, the transmitted and reflected part of the beam stay in the same polarisation state as the incident beam. This is not the case for an incident wave being a mixture of s- and p-components. Then, the polarisation of the reflected and transmitted beam will change with the incident angle. 


Note that the case of zero incident angle $\theta_I=0^\circ,$ we expect TE and TM polarisation to be equivalent. Then, we have $r_p=-r_s,$ and $t_p=t_s,$ which can be explained by the following figure:

![Attachments/QE_script 8.webp|700](/img/user/Attachments/QE_script%208.webp)[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=67&rect=166,196,435,320|•]]

The positive direction of the TM field is defined by the propagation direction through the right-hand rule for vector products. Despite both polarisations being equivalent, their definitions of axes for their respective reflected components differ. For the TM wave, the electric field flips its direction upon reflection. For consistency, there is then a relative sign between the reflection components. 

---
## 3.2 Brewster's Angle
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=68&selection=4,0,6,16|•]] [[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=165&selection=0,0,0,16|•]]

The reflectivity becomes zero for p-polarised light, when 

$$
n_1 \cos \theta_2=n_2 \cos \theta_1.
$$
We assume that $n_1$ and $n_2$ are both real, such that we obtain
$$
\cos
{ #2}
 \theta_2=\left(\frac{n_2 \cos \theta_1}{n_1}\right)^2.
$$
Using Snell's law results in:

$$
\sin
{ #2}
 \theta_2=\left(\frac{n_1 \sin \theta_1}{n_2}\right)^2.
$$
Adding the last two relations yields

$$
\sin
{ #2}
 \theta_2+\cos
{ #2}
 \theta_2=1=\sin
{ #2}
 \theta_1+\cos
{ #2}
 \theta_1=\left(\frac{n_1 \sin \theta_1}{n_2}\right)^2+\left(\frac{n_2 \cos \theta_1}{n_1}\right)^2,
$$
which then can be written
$$
\begin{gathered}
\left(\frac{n_1^2-n_2^2}{n_2^2}\right) \sin
{ #2}
 \theta_1=\left(\frac{n_1^2-n_2^2}{n_1^2}\right) \cos
{ #2}
 \theta_1 .
\end{gathered}
$$
Then, we finally obtain
$$
\theta_1=\theta_B=\tan ^{-1}\left(n_2 / n_1\right),
$$
where $\theta_B$ is called Brewster's angle. Note that no such angle or condition is possible for s-polarised light.

As an example, consider the reflectivity curve for $n=1$ and glass $n=1.55.$ The Brewster's angle is approximately $57^\circ.$ Below, the reflectivity is negative, but positive above it. This indicates a phase jump by $\pi.$ 

![Attachments/01_Introduction_and_theoretical_foundation 23.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2023.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=166&rect=238,198,563,440|•]]

This is often used in laser cavities, where it is important or desirable to only amplify and output a specific polarisation: 

![Attachments/01_Introduction_and_theoretical_foundation 24.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2024.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=167&rect=88,291,730,446|•]]

Further, it reduces optical losses due to reflectivity at material interfaces for p-polarised light, but also to suppress lasing of s-polarisation, which typically has higher losses. 

Although the Brewster's angle by definition is the angle for which the reflectivity becomes zero, it is perhaps better to say that the reflected beam has no power at this angle. We can find that at Brewster's angle, 
$$
\begin{aligned}
n_1 \sin \theta_1 & =n_2 \cos \theta_1 \\
& \Longrightarrow \sin \theta_2=\cos \theta_1 \\
& \Longrightarrow \theta_1+\theta_2=\pi / 2,
\end{aligned}
$$
which implies that the transmitted and (would be) reflected beam form a right angle:

![Attachments/QE_script 9.webp|700](/img/user/Attachments/QE_script%209.webp)[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=69&rect=73,307,295,389|•]]

This is no coincidence: Generally, reflection at an interface can be considered the result of re-emission of radiation from the near-surface region of the refracted ray. At Brewster's angle, the electric field of the transmitted beam points exactly in the direction of the reflection. The polarisation induced by this field also points along that direction. However, the radiation of an oscillating dipole is zero along the axis of the dipole, such that the reflected wave is completely suppressed:

![Attachments/01_Introduction_and_theoretical_foundation 26.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2026.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=171&rect=483,188,678,465|•]]

As side remark, the derivation of the Brewster's angle assumed real refractive indices. For both refractive indices complex, no such angle exist, but there is nevertheless an angle for which the reflectivity becomes minimal:
$$
\tan\theta_1=\mathfrak{Re}\left[\frac{n2}{n1}\right].
$$

---
## 3.3 Total Internal Reflection
[[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=70&selection=6,0,8,25|•]] 

Before considering this concept, let us first clarify what _internal_ refers to:

![Attachments/01_Introduction_and_theoretical_foundation 27.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2027.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=175&rect=44,131,441,479|•]]

Therefore, we are in the case of $n_1>n_2,$ such that the wave hits an interface to an optically less dense medium. Then, we can find that
$$
\cos \theta_2=\sqrt{1-\sin
{ #2}
 \theta_2}=\sqrt{1-\frac{n_1^2}{n_2^2} \sin
{ #2}
 \theta_1}
$$
becomes purely imaginary for angles larger than the critical angle:
$$
\theta_1>\theta_c=\arcsin\left(\frac{n_2}{n_1}\right).
$$
This is the condition for total internal reflection, and makes the reflection coefficients $r_s$ and $r_p$ complex, but with unity magnitude. This phenomenon is known as total internal reflection. Note the phase shifts experienced. The next two figures show the magnitude and phase of the reflection coefficient for internal reflection for s- and p-polarised light:

![Attachments/01_Introduction_and_theoretical_foundation 32.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2032.webp)
![Attachments/01_Introduction_and_theoretical_foundation 33.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2033.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=204&rect=225,162,587,297|•]]

The principle of total internal reflection can very useful for many applications:

![Attachments/01_Introduction_and_theoretical_foundation 28.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2028.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=184&rect=63,107,221,419|•]]

In all these applications, light is 'trapped' in a region of higher refractive index than its surrounding. 

## 3.4 Evanescent Waves
[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=188&selection=0,0,0,25|•]] [[Teaching/2025 Quantum Electronics Gallmann/QE_script.pdf#page=70&selection=170,47,170,86|•]]

Considering the transmission coefficients,
$$
t_s=1+r_s\quad\text{and}\quad t_p=(1+r_p)\frac{n_1}{n_2},
$$
we find that they are not zero, despite the power reflectivity being unity! To understand this behaviour, consider that 
$$
\hat{\mathbf{k}}_2 \cdot \hat{\mathbf{n}}=\cos \theta_2
$$
must hold. Since $\cos\theta_2$ is purely imaginary, the real part of $\mathbf{k}_2$ is therefore parallel to the interface. Thus, the oscillatory, propagating part of the wave has no component travelling into medium 2. The electric field decays exponentially as a function of distance from the interface, despite purely real indices of refraction. This is called an _evanescent field._ 
We find the transmitted wave to be $\vec{E}^{(2)} e^{i\left(\omega t-k_x x-k_y y\right)} e^{-\gamma z}$, with the associated field attenuation factor
$$
\begin{aligned}
& \gamma=-i 2 \pi n_2 \cos \theta_2 / \lambda_v=\frac{2 \pi}{\lambda_v} \sqrt{n_1^2 \sin
{ #2}
 \theta_1-n_2^2}.
\end{aligned}
$$

The best way to illustrate this is by an animation, showing the propagation of the (out-of-plane) electric field components upon hitting a medium of lower refractive index:

![Attachments/total_internal_reflection_z.gif|700](/img/user/Attachments/total_internal_reflection_z.gif)

This clearly shows the evanescent waves (on the upper left half) travelling along the surface. The associated Poynting vector:
![Attachments/total_internal_reflection_poynting.png|700](/img/user/Attachments/total_internal_reflection_poynting.png)

Another very interesting phenomenon occurs when considering placing two higher refractive index media close together:

![Attachments/frustrated_total_internal_reflection_epsilon.png|700](/img/user/Attachments/frustrated_total_internal_reflection_epsilon.png)

Then, a phenomenon called **frustrated total internal reflection** occurs. The distance between the two media should be of the order the penetration length away, which is usually around 50 to 100 nanometres for visible light. Then, there is still propagation across the gap, as the next animation shows:

![Attachments/frustrated_total_internal_reflection_z.gif|700](/img/user/Attachments/frustrated_total_internal_reflection_z.gif)

And the Poynting vector:
![Attachments/frustrated_total_internal_reflection_poynting.png|700](/img/user/Attachments/frustrated_total_internal_reflection_poynting.png)

This effect can be used for sensing, the most prominent of them being the fingerprint scanner. 

![Attachments/01_Introduction_and_theoretical_foundation 30.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2030.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=200&rect=197,169,638,455|•]]

They may also be used for polarisation manipulation in the form of a Fresnel rhomb, which transform linearly polarised light into circularly polarised light. For linearly polarised light, both components are in phase. After one reflection at the appropriate angle, the p-polarised light experiences an $1/8$-cycle phase shift relative to the s-component. After two such reflections, the initially linearly polarised light becomes elliptically polarised. For initial equal magnitude of both electric field components, it becomes circularly polarised. 

![Attachments/01_Introduction_and_theoretical_foundation 31.webp|700](/img/user/Attachments/01_Introduction_and_theoretical_foundation%2031.webp)[[Teaching/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=202&rect=55,124,363,479|•]]

---