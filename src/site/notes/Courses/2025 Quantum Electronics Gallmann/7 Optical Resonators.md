---
{"dg-publish":true,"permalink":"/courses/2025-quantum-electronics-gallmann/7-optical-resonators/","hide":"true","updated":"2025-04-08T17:15:32.000+02:00"}
---

Jump back to ==[[Courses/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators#7.1 Spherical Mirror Resonator\|7.1 Spherical Mirror Resonator]]
- [[Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators#7.2 Resonance Frequencies\|7.2 Resonance Frequencies]]
- [[Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators#7.3 Resonator Losses\|7.3 Resonator Losses]]

---
# 7 Optical Resonators
[[Courses/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=28&selection=0,0,0,29|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=129&selection=1,0,1,18|•]] 

An optical resonator, or cavity, is a device that confines and stores light, respectively in space and time. This is generally achieved by guiding the propagation of light along a path that self-reproduces periodically. One example of an optical resonator that we have already seen is the [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.6 Fabry-Pérot Interferometer - Etalon\|Fabry-Pérot cavity]]. 

Optical resonators only allows discrete frequencies of light to be confined and stored within, and we call these frequencies the _longitudinal modes_ of the resonator. Obviously then, there is also a _transversal mode_, but most resonators support only a specific spatial beam shape:

![Attachments/Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators/03_Beams_and_resonators 4.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/7%20Optical%20Resonators/03_Beams_and_resonators%204.webp)[[Courses/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=33&rect=119,115,736,440|•]]

A very important concept is that of the _optical mode_, which is in broad terms is a standing wave solution under given boundary conditions. They are therefore, eigensolutions of the wave equations under these boundary conditions. In the following chapters we will mostly focus on linear cavities, however ring resonators will also be mentioned, but note that their treatment is much more involved:

![Attachments/Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators/03_Beams_and_resonators 5.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/7%20Optical%20Resonators/03_Beams_and_resonators%205.webp)[[Courses/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=34&rect=71,156,612,450|•]]

---
## 7.1 Spherical Mirror Resonator
[[Courses/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=35&selection=0,0,0,27|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=133&selection=45,0,47,27|•]]

A spherical mirror resonator consists of two mirrors, of which both a spherical. As we will see later, this provides a much higher _stability_ to misalignment, in comparison to planar-mirror resonators. The following figure shows an example of a spherical mirror resonator with two concave mirrors:

![Attachments/Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators/QE_script 4.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/7%20Optical%20Resonators/QE_script%204.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=134&rect=161,559,449,685|•]]

In this context, spherical means that the mirror has spherical shape with radius $R.$ The convention used here is that positive $R$ is a concave mirror, while negative $R$ is called convex mirror. Some sources use the flipped notation, which is something you should always be aware of. We are interested to answer the question "is the resonator stable?". 

What does stability mean? From our definition of optical resonators, it simply means that the geometry of the resonator allows to confine a real beam of light indefinitely, ignored losses. A resonator is then called stable if a paraxial ray remains confined in the limit of infinite _round trips_. Alternatively, Gaussian beam analysis may be used. From our discussion on [[Courses/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.8 Paraxial Ray Optics\|paraxial ray optics]] and [[Courses/2025 Quantum Electronics Gallmann/6 Beam Types#6.1 Gaussian Beam Optics\|Gaussian beam optics]], it should however be clear that the approach is equivalent - both use the same ray-transfer matrices.

The ray-transfer matrix for one round-trip through the resonator is given by
$$
\begin{aligned}
\left(\begin{array}{ll}
A & B \\
C & D
\end{array}\right)&=\left(\begin{array}{cc}
1 & 0 \\
-\frac{2}{R_1} & 1
\end{array}\right)\left(\begin{array}{cc}
1 & d \\
0 & 1
\end{array}\right)\left(\begin{array}{cc}
1 & 0 \\
-\frac{2}{R_2} & 1
\end{array}\right)\left(\begin{array}{ll}
1 & d \\
0 & 1
\end{array}\right) \\
& =\left(\begin{array}{cc}
1-\frac{2 d}{R_2} & 2 d\left(1-\frac{d}{R_2}\right) \\
2\left(\frac{2 d}{R_1 R_2}-\frac{1}{R_1}-\frac{1}{R_2}\right) & \frac{4 d^2}{R_1 R_2}-\frac{4 d}{R_1}-\frac{2 d}{R_2}+1
\end{array}\right),
\end{aligned}
$$

where $d$ is the mirror separation, and $R_i$ is the mirror curvature of both mirrors. The condition for confinement can be translated that waist position and spot size remain exactly the same for one round-trip through the cavity. Then, they will also remain stationary after an infinite number of round trips. Therefore, the condition may be formulated as 
$$
q=\frac{Aq+B}{Cq+D}=\frac{(A-D) \pm \sqrt{D^2+A^2-2 A D+4 B C}}{2 C}.
$$
We assume $C\neq0,$ such that for $A, B, C, D$ real, we have
$$
q\quad\text{is complex}\iff\frac{D^2+A^2-2 A D+4 B C}{4 C^2}<0.
$$
The requirement for $q$ to not be real comes from the fact that $q=z-z_w+iz_0,$ and thus real $q$ would imply zero Rayleigh range $z_0$. Therefore, this would imply infinite divergence of the beam. No mirror would be big enough to confine the beam. The stability criterion may be rewritten as
$$
0<\left(1-\frac{d}{R_1}\right)\left(1-\frac{d}{R_2}\right)<1,
$$
or, as is more common,
$$
0<g_1 g_2<1,
$$
with $g=1-d/R.$ Note that it does not contain 'equal' since those cases are only conditionally stable. In reality, these cases can never be perfectly achieved, as we can never obtain perfect precision in producing these mirrors and getting the spacing right. For cavities where $g_1g_2$ approaches 0 or 1, we call it _conditionally stable_. The Fabry-Pérot etalon is an example of this: For two perfectly reflecting plane mirrors, it is obvious that only the on-axis component can be confined indefinitely. A real beam will never be perfect, making this only worse. However, this does not make the etalon useless, as it just means _eventually_ the light will escape, after many round-trips. They are thus less efficient in storing light than a truly stable cavity. 
The next figure shows a stability map, where blue corresponds to stable configurations, while the boundary corresponds to conditionally stable:

![Attachments/Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators/QE_script 5.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/7%20Optical%20Resonators/QE_script%205.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=136&rect=131,381,471,691|•]]

The dashed diagonal red line indicates symmetric configurations where $R_1=R_2.$ The next figure shows some more typical configurations for spherical resonators:

![Attachments/Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators/QE_script 6.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/7%20Optical%20Resonators/QE_script%206.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=137&rect=79,602,530,693|•]]

We call a resonator symmetric if both mirrors have the same curvature $R_1=R_2.$ A resonator is called symmetric confocal, if additionally $R_1=d=R_2,$ such that the centre of the resonator is also the focal point (a concave mirror of radius $R$ focuses light to $R/2$ in front of itself). A symmetric concentric resonator has $R_1=R_2=d/2,$ making it conditionally stable. 

There is a useful geometric test based on ray optics to assess cavity stability:

1. Let $M_i$ denote the focal point of mirror $i$.
2. For each mirror, draw a straight line from $M_i$ to an arbitrary point $S_i$ on the surface of mirror $i$.
3. Now compare the lines $\overline{M_1S_1}$ and $\overline{M_2S_2}$ under different cavity configurations.

Then, we find that:
If the lines $\overline{M_1S_1}$ and $\overline{M_2S_2}$ either fully coincide in some configuration, or never overlap at all, the cavity is unstable. In other words, partial and continuous overlap of these lines as the configuration changes indicates potential stability, while complete or no overlap suggests instability.

Some examples are shown in the next figure. For the unstable ones, try to find two connections that fully overlap, or think why they can never overlap at all:

![Attachments/Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators/03_Beams_and_resonators 6.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/7%20Optical%20Resonators/03_Beams_and_resonators%206.webp)[[Courses/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=47&rect=378,114,814,459|•]]

Consider again the derived stability equation from before. We can rewrite it in terms of $q$, such that it is solved by
$$
\frac{1}{R}=\frac{D-A}{2 B}=-\frac{1}{R_1}.
$$
Therefore, the curvature of the beam wavefront matches the curvature of the mirror. This makes sense considering that the beam must be self-replicating after each round-trip. The position of the waist is obtained as
$$
\mathfrak{Re}[q]=z-z_w=\frac{-d\left(d-R_2\right)}{2 d-R_1-R_2},
$$
where a negative number indicates the waist lies to the right of mirror $1.$ The Rayleigh length is obtained from the imaginary part: 
$$
z_0=\mathfrak{Im}[q]=\sqrt{\frac{-d\left(d-R_1\right)\left(d-R_2\right)\left(d-R_1-R_2\right)}{\left(2 d-R_1-R_2\right)^2}}.
$$

### 7.1.1 Symmetric Spherical Mirror Resonators

Consider the important case of a symmetric resonator where $R_1=R_2\equiv R.$ The stability simply reduces to 
$$
0<\frac{d}{R}<2,
$$
and we additionally obtain
$$
\begin{gathered}
z_0=\frac{d}{2} \sqrt{2 \frac{R}{d}-1} \\
W_0^2=\frac{\lambda d}{2 \pi} \sqrt{2 \frac{R}{d}-1} \\
W_1^2=W_2^2=\frac{\lambda d / \pi}{\sqrt{\frac{d}{R}\left(2-\frac{d}{R}\right)}}.
\end{gathered}
$$
Here, $W_i$ are the beam sizes on the respective mirror. The beam width is minimal on the mirror for the confocal case of $d=R.$ In this case, we have that 
$$
\begin{gathered}
z_0=d / 2 \\
W_0=\sqrt{\lambda d / 2 \pi} \\
W_1=W_2=\sqrt{2} W_0 .
\end{gathered}
$$

![Attachments/Courses/2025 Quantum Electronics Gallmann/7 Optical Resonators/QE_script 7.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/7%20Optical%20Resonators/QE_script%207.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=140&rect=105,517,503,680|•]]

---
## 7.2 Resonance Frequencies
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=140&selection=47,0,49,21|•]] [[Courses/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=57&selection=0,0,0,41|•]]

So far, we only consider that the spatial envelope $A(r)$ must be self-replicating. However, this requirement extends to the full electric field, including the rapidly oscillating phase. Recall the phase of a Gaussian beam is 

$$
\phi(x, y, z)=k z-\arctan\left(z / z_0\right)+\frac{k\left(x^2+y^2\right)}{2 R(z)}.
$$

Then, in the centre of mirror $1,$ respectively $2$ of the resonator, the phase is 
$$
\begin{align}
&\phi\left(0,0, z_1\right)=k z_1-\arctan\left(z_1 / z_0\right)\quad\text{and}\\ &\phi\left(0,0, z_2\right)=k z_2-\arctan\left(z_2 / z_0\right).
\end{align}
$$
The phase change propagating from mirror $1$ to mirror $2$ is 
$$
\Delta\phi=kd-\Delta\zeta,
$$
where 
$$
\Delta \zeta=\tan ^{-1}\left(z_2 / z_0\right)-\tan ^{-1}\left(z_1 / z_0\right).
$$
For one round-trip, we require 
$$
2 k d-2 \Delta \zeta=2 \pi m\quad m\in \mathbb{Z}.
$$
Therefore, the resonance frequencies $f_m$ are those satisfying 
$$
f_m=mf_F+\frac{\Delta\zeta}{\pi}f_F,
$$
with $f_F=c/2d.$ Since the wavefronts match the mirror curvature, this additionally ensures that the off-axis phase of the beam is self-replicating. The equation dictates that all allowed frequencies are equally spaced, depending only on the length of the oscillator (through $f_F$). The curvature of the mirrors has no effect but to shift the frequencies by a constant. 

---
## 7.3 Resonator Losses
[[Courses/2025 Quantum Electronics Gallmann/03_Beams_and_resonators.pdf#page=62&selection=0,0,0,18|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=141&selection=110,0,112,14|•]]

Up until now, we have treated resonators that are in a sense perfect, that is the mirrors involved have perfect reflectivity. Further, we neglected any diffraction losses. The prior effect is usually the more important one, and luckily, it actually relaxes some of the conditions for allowed modes. However note, that for an output coupler, imperfect reflectivity is actually desired.

Consider that an initial on-axis electric field of a Gaussian beam after the first mirror is given by $U_0.$ After $j$ round-trips, the field is 
$$
U_j=r^jU_0e^{ij\Delta\phi},
$$
where $0<r<1$ is the loss factor per round-trip and $\Delta\phi$ is the round-trip phase change. Therefore, the total electric field $U$ is 
$$
\begin{align}
U&=U_0+r U_0 e^{i \Delta \phi}+r^2 U_0 e^{2 i \Delta \phi}+\ldots=U_0 \sum_j\left(r e^{i \Delta \phi}\right)^j\\
&=\frac{U_0}{1-r e^{i \Delta \phi}}.
\end{align}
$$
In the last step we simply used the geometric series. The intensity is the electric field squared which may be rewritten as 
$$
I=\frac{I_{\max }}{1+(2 \mathcal{F} / \pi)^2 \sin^2(\Delta \phi / 2)}=\frac{I_{\max }}{1+(2 \mathcal{F} / \pi)^2 \sin^2\left(\pi \nu / \nu_F-\Delta \zeta\right)},
$$
where the maximum intensity and the finesse is
$$
I_{\max }=\frac{I_0}{(1-r)^2}
$$
and
$$
\mathcal{F}=\frac{\pi \sqrt{r}}{1-r}.
$$
This is of course very similar to the earlier discussed [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.6 Fabry-Pérot Interferometer - Etalon\|Fabry-Pérot interferometer]]. The next figure shows the normalised intensity of an optical resonator:

![Attachments/QE_script 4.webp|700](/img/user/Attachments/QE_script%204.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=143&rect=91,438,509,675|•]]

The finesse controls the sharpness of the lines, where increasing reflectivity makes the intensity converge to discrete allowed frequencies. The width of the lines is given by
$$
\delta f =\frac{f_F}{\mathcal{F}}.
$$
Often, losses in a resonator are characterised by an effective distributed loss coefficient $\alpha_r$ defined through
$$
r^2=e^{-2\alpha_rd},
$$
where distributed means that the losses may not solely come from imperfect mirrors, but from anywhere in the cavity. If all losses are evenly distributed over the beam path, we would retrieve the intensity attenuation coefficient of the light. The finesse may then be expressed
$$
\mathcal{F}=\frac{\pi e^{-\alpha_r d / 2}}{1-e^{-\alpha_r d}}\approx\frac{\pi}{\alpha_rd},
$$
for the usual case that $\alpha_rd\ll1.$ The finesse is roughly equal (within a factor of $2\pi$) to the amount of round-trips a beam can undergo before experiencing significant attenuation. Additionally, we may define a quality factor $Q$ as the ratio between stored energy and energy loss per cycle (times $2\pi$). Here, 'cycle' refers to the oscillation period of the optical field $1/\nu_0.$ Therefore, we obtain
$$
Q=\frac{2\pi\nu_0}{\alpha_rc}\approx\frac{\nu_0}{\nu_F}\mathcal{F}.
$$
Usually, the latter ratio is extremely large for optical resonators, such that the quality factor is much larger than the finesse.

---