---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics/7-optical-resonators/","hide":"true","updated":"2025-06-04T15:33:59.572+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/2025 Quantum Electronics/7 Optical Resonators#7.1 Spherical Mirror Resonator\|7.1 Spherical Mirror Resonator]]
[[Notes/2025 Quantum Electronics/7 Optical Resonators#7.2 Resonance Frequencies\|7.2 Resonance Frequencies]]
[[Notes/2025 Quantum Electronics/7 Optical Resonators#7.3 Resonator Losses\|7.3 Resonator Losses]]

---
# 7 Optical Resonators
[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=28&selection=0,0,0,29| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=129&selection=1,0,1,18| ]]

An optical resonator, or optical cavity, is a device designed to confine light, effectively storing electromagnetic energy within a defined volume for a certain duration. This is generally achieved by guiding the propagation of light along a path that self-reproduces after periodic round trips. One example of an optical resonator that we have already encountered is the [[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.6 Fabry-Pérot Interferometer - Etalon\|Fabry-Pérot cavity]].

Optical resonators only allow discrete frequencies of light to be sustained and stored within them; these specific frequencies correspond to the _longitudinal modes_ (or axial modes) of the resonator. Associated with these longitudinal modes are specific transverse intensity patterns, known as _transverse modes_. Most laser resonators are designed to support a specific fundamental transverse spatial beam shape, commonly a Gaussian beam:

![Attachments/Notes/2025 Quantum Electronics/7 Optical Resonators/03_Beams_and_resonators 4.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/7%20Optical%20Resonators/03_Beams_and_resonators%204.webp)[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=33&rect=119,115,736,440| ]]

A very important concept is that of an _optical mode_, which, in broad terms, is a self-consistent electromagnetic field configuration that reproduces itself after one round trip within the resonator (apart from a possible constant phase shift and amplitude reduction due to losses). Modes are therefore eigensolutions of the wave equation subject to the boundary conditions imposed by the resonator geometry. In the following sections, we will mostly focus on linear cavities (formed by two mirrors). Ring resonators, which employ three or more mirrors to form a closed loop path, will also be mentioned, but their detailed treatment is more involved:

![Attachments/Notes/2025 Quantum Electronics/7 Optical Resonators/03_Beams_and_resonators 5.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/7%20Optical%20Resonators/03_Beams_and_resonators%205.webp)[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=34&rect=71,156,612,450| ]]

---
## 7.1 Spherical Mirror Resonator
[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=35&selection=0,0,0,27| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=133&selection=45,0,47,27| ]]

A spherical mirror resonator consists of two mirrors, both of which typically have spherically curved surfaces. As we will see later, this type of resonator generally offers much higher _stability_ against misalignment compared to planar-mirror resonators (which are a special case of spherical mirrors with infinite radius of curvature). The following figure shows an example of a spherical mirror resonator with two concave mirrors:

![Attachments/Notes/2025 Quantum Electronics/7 Optical Resonators/QE_script 4.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/7%20Optical%20Resonators/QE_script%204.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=134&rect=161,559,449,685| ]]

In this context, "spherical" means that the mirror surface is a segment of a sphere with a radius of curvature $R$. The convention used here is that a positive $R$ denotes a concave mirror (curved towards the cavity interior), while a negative $R$ denotes a convex mirror. Some sources use the opposite sign convention, which is something one should always be aware of. We are interested in answering the question: "Under what conditions is the resonator stable?"

What does stability mean in this context? For an optical resonator, stability implies that the geometry allows a light beam (specifically, a paraxial Gaussian beam) to be confined and to replicate its transverse profile after each round trip, ignoring losses for now. A resonator is called stable if a paraxial ray, initially close to and slightly inclined to the optical axis, remains confined near the axis after an infinite number of round trips. Alternatively, using Gaussian beam optics, a resonator is stable if it supports a self-consistent Gaussian beam mode whose parameters (waist size and position) are physically realisable. From our discussion on [[Notes/2025 Quantum Electronics/5 Fourier Optics#5.8 Paraxial Ray Optics\|paraxial ray optics]] and [[Notes/2025 Quantum Electronics/6 Beam Types#6.1 Gaussian Beam Optics\|Gaussian beam optics]], it should be clear that these two approaches (ray optics and Gaussian beam q-parameter transformation) are equivalent, as both use the same ABCD ray-transfer matrices.

The ray-transfer matrix for one complete round trip through the resonator, starting just after mirror 1, propagating a distance $d$ to mirror 2, reflecting from mirror 2, propagating distance $d$ back to mirror 1, and reflecting from mirror 1, is given by the product:
$$
\mathbf{M}_{\text{RT}} = \left(\begin{array}{ll}
A & B \\
C & D
\end{array}\right)=\left(\begin{array}{cc}
1 & 0 \\
-1/f_1 & 1
\end{array}\right)\left(\begin{array}{cc}
1 & d \\
0 & 1
\end{array}\right)\left(\begin{array}{cc}
1 & 0 \\
-1/f_2 & 1
\end{array}\right)\left(\begin{array}{ll}
1 & d \\
0 & 1
\end{array}\right),
$$
where $f_i = R_i/2$ is the focal length of mirror $i$. Substituting $-1/f_i = -2/R_i$:
$$
\mathbf{M}_{\text{RT}} = \left(\begin{array}{cc}
1-\frac{2 d}{R_2} & 2 d\left(1-\frac{d}{R_2}\right) \\
-2\left(\frac{1}{R_1}+\frac{1}{R_2}-\frac{2 d}{R_1 R_2}\right) & \left(1-\frac{2d}{R_1}\right)\left(1-\frac{2d}{R_2}\right) - \frac{2d}{R_1}
\end{array}\right).
$$
The condition for a stable resonator is that a Gaussian beam can replicate its complex q-parameter after one round trip: $q_2 = (Aq_1+B)/(Cq_1+D)$ must yield $q_2=q_1 \equiv q$. This leads to a quadratic equation for $q$: $Cq^2 + (D-A)q - B = 0$.
For a physically meaningful Gaussian beam, $q$ must be complex ($q = (z-z_w) + iz_R$ with $z_R > 0$). This requires the discriminant of the quadratic equation for $q$ to be such that $q$ is complex, or more directly, the stability criterion derived from the ABCD matrix elements is:
$$
-1 < \frac{A+D}{2} < 1.
$$
Using the elements of $\mathbf{M}_{\text{RT}}$, $(A+D)/2 = 2(1-d/R_1)(1-d/R_2)-1 = 2g_1g_2-1$.
The stability criterion then becomes $-1 < 2g_1g_2-1 < 1$, which simplifies to:
$$
0 < g_1 g_2 < 1,
$$
where $g_i = 1-d/R_i$ is the g-parameter for mirror $i$. Note that configurations where $g_1g_2=0$ or $g_1g_2=1$ are on the boundary of stability and are termed _conditionally stable_. In practice, these are difficult to achieve perfectly due to alignment tolerances and mirror imperfections. For instance, a Fabry-Pérot etalon with two perfectly plane mirrors ($R_1, R_2 \to \infty \implies g_1=g_2=1$) is conditionally stable; only an ideally collimated on-axis beam would be confined, which is unrealistic. Such cavities are less efficient at storing light over many round trips than truly stable cavities.
The stability map shows regions of stability (blue) based on $g_1$ and $g_2$:

![Attachments/Notes/2025 Quantum Electronics/7 Optical Resonators/QE_script 5.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/7%20Optical%20Resonators/QE_script%205.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=136&rect=131,381,471,691| ]]

The dashed diagonal red line indicates symmetric configurations where $R_1=R_2$ (so $g_1=g_2$). Some typical stable configurations for spherical resonators are shown below:

![Attachments/Notes/2025 Quantum Electronics/7 Optical Resonators/QE_script 6.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/7%20Optical%20Resonators/QE_script%206.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=137&rect=79,602,530,693| ]]

A resonator is symmetric if $R_1=R_2$. A symmetric confocal resonator has $R_1=R_2=d$ (focal points of mirrors coincide at cavity centre). A symmetric concentric resonator has $R_1=R_2=d/2$ (centres of curvature coincide), which is conditionally stable ($g_1g_2=1$).

A useful geometric stability test (attributed to Boyd and Kogelnik) relates to the overlap of the regions "covered" by each mirror as seen from the focal point of the other mirror. A more common statement is that a cavity is stable if the mirrors "see" each other through their focal points, meaning the focal point of one mirror lies within the cavity as seen from the other, and vice versa for certain configurations. 

For a stable resonator, the self-consistent q-parameter implies that the wavefront curvature $R(z)$ of the Gaussian beam matches the curvature of the mirror at each mirror surface. For mirror 1 (the reference plane for the round trip), $1/R(z_1) = 1/R_1$. The q-parameter solution gives $1/R = (D-A)/(2B)$. The position of the beam waist $z_w$ (relative to mirror 1, say) and the Rayleigh range $z_R = \mathfrak{Im}\left[q\right]$ can also be determined:
$$
z_{w1} = \mathfrak{Re}\left[q_1\right] = \frac{d(R_2-d)}{R_1+R_2-2d}, \quad (\text{distance of waist from mirror 1})
$$
$$
z_R^2 = (\mathfrak{Im}\left[q_1\right])^2 = \frac{d(R_1-d)(R_2-d)(R_1+R_2-d)}{(R_1+R_2-2d)^2}.
$$

### 7.1.1 Symmetric Spherical Mirror Resonators

Consider the important case of a symmetric resonator where $R_1=R_2 \equiv R$. The stability criterion $0<g_1g_2<1$ becomes $0<(1-d/R)^2<1$. Since $(1-d/R)^2 \ge 0$, this simplifies to $(1-d/R)^2 < 1$, which means $-1 < 1-d/R < 1$ (and $1-d/R \neq 0$). This implies $0 < d/R < 2$.
For this symmetric case, the beam waist is at the centre of the cavity ($z_w = d/2$ from either mirror). We additionally obtain:
$$
\begin{gathered}
z_R=\frac{d}{2} \sqrt{\frac{2R}{d}-1}, \\
W_0^2=\frac{\lambda_0 d}{2 \pi n} \sqrt{\frac{2R}{d}-1}, \\
W_1^2=W_2^2=W(d/2)^2 = W_0^2\left(1+\left(\frac{d/2}{z_R}\right)^2\right) = \frac{\lambda_0 d}{\pi n} \frac{R/d}{\sqrt{\frac{2R}{d}-1}}. 
\end{gathered}
$$
The beam radius is minimal ($W_0$) at the centre. It is largest on the mirrors for $d \to 0$ or $d \to 2R$. For the confocal case ($d=R$):
$$
\begin{gathered}
z_R=d/2 = R/2, \\
W_0=\sqrt{\lambda_0 R / (2 \pi n)}, \\
W_1=W_2=\sqrt{2} W_0 = \sqrt{\lambda_0 R / (\pi n)}.
\end{gathered}
$$

![Attachments/Notes/2025 Quantum Electronics/7 Optical Resonators/QE_script 7.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/7%20Optical%20Resonators/QE_script%207.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=140&rect=105,517,503,680| ]]

---
## 7.2 Resonance Frequencies
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=140&selection=47,0,49,21| ]] [[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=57&selection=0,0,0,41| ]]

So far, we have considered the condition that the spatial envelope $A(\mathbf{r})$ of a Gaussian beam must be self-replicating after one round trip. This extends to the full electric field, including its rapidly oscillating phase. Recall the phase of a Gaussian beam (propagating along $z$, waist at $z_w=0$) is $\phi(x,y,z) = kz - \zeta(z) + k(x^2+y^2)/(2R(z))$, where $\zeta(z) = \arctan(z/z_R)$ is the Gouy phase.
For a self-consistent mode, the total phase change accumulated by the beam over one complete round trip must be an integer multiple of $2\pi$.
The phase change for propagation from mirror 1 (at $z_1$) to mirror 2 (at $z_2=z_1+d$) on-axis ($x=y=0$) is $\Delta\phi_{1 \to 2} = k(z_2-z_1) - (\zeta(z_2)-\zeta(z_1)) = kd - \Delta\zeta_{1\to 2}$.
The round-trip phase change $\Delta\Phi_{\text{RT}}$ (from mirror 1, to mirror 2, back to mirror 1, without considering reflection phases at mirrors for now) is:
$$
\Delta\Phi_{\text{RT}} = 2kd - 2\Delta\zeta_{\text{round trip}},
$$
where $\Delta\zeta_{\text{round trip}} = (\zeta(z_2)-\zeta(z_1)) + (\zeta(z_1)-\zeta(z_2))_{\text{return path, can be complex}}$. More simply, $\Delta\zeta_{\text{round trip}}$ is the total accumulated Gouy phase shift over one round trip. For a stable cavity supporting Hermite-Gaussian modes $TEM_{l,m,q}$ or Laguerre-Gaussian modes $LG_{p,l,q}$, the resonance condition is:
$$
k(2d) - (l+m+1)_{\text{HG}} \Delta\zeta_0 = q 2\pi \quad \text{or} \quad k(2d) - (2p+|l|+1)_{\text{LG}} \Delta\zeta_0 = q 2\pi,
$$
where $q$ is the longitudinal mode integer, and $\Delta\zeta_0 = \zeta(z_2)-\zeta(z_1)$ is the single-pass Gouy phase difference between the mirrors (the values depend on waist position). 

The resonance condition is $2kd - (N_t+1)\Delta\zeta_{\text{RT}} = 2\pi q$, where $N_t=l+m$ or $2p+|l|$ and $\Delta\zeta_{\text{RT}}$ is the round-trip Gouy phase.
Assuming $k=2\pi f n/c$, the resonance frequencies $f_{q,l,m}$ are:
$$
f_{q,l,m} = \frac{c}{2nd} \left(q + (l+m+1)\frac{\Delta\zeta_{\text{RT}}}{2\pi}\right).
$$
The free spectral range (FSR) for longitudinal modes ($l,m$ fixed) is $f_F = c/(2nd)$. The frequencies are approximately equally spaced by $f_F$, with a small shift dependent on the transverse mode orders $(l,m)$ due to the Gouy phase. This means different transverse modes generally have slightly different resonance frequencies.

---
## 7.3 Resonator Losses
[[Notes/2025 Quantum Electronics/03_Beams_and_resonators.pdf#page=62&selection=0,0,0,18| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=141&selection=110,0,112,14| ]]

Up until now, we have treated resonators as perfect, implying, for instance, that mirrors have 100% reflectivity and there are no diffraction losses. In reality, losses are always present. Imperfect reflectivity is often the dominant loss mechanism and is, in fact, desired for one mirror to act as an output coupler. Losses broaden the resonance lines.

Consider an initial on-axis electric field amplitude $U_0$ inside the cavity just after a reference plane. After $j$ round trips, the field amplitude becomes:
$$
U_j=r_{\text{RT}}^j U_0 e^{ij\Delta\Phi_{\text{RT}}},
$$
where $r_{\text{RT}}$ is the net amplitude reflectivity per round trip ($0 < r_{\text{RT}} < 1$), and $\Delta\Phi_{\text{RT}}$ is the round-trip phase change (excluding the $2\pi q$ part). If the cavity is continuously excited (or contains a gain medium), the total stored electric field $U$ is the sum of contributions from all preceding round trips:
$$
U = U_0 + r_{\text{RT}} U_0 e^{i \Delta\Phi_{\text{RT}}} + r_{\text{RT}}^2 U_0 e^{i2 \Delta\Phi_{\text{RT}}}+\ldots = U_0 \sum_{j=0}^{\infty}\left(r_{\text{RT}} e^{i \Delta\Phi_{\text{RT}}}\right)^j.
$$
Using the formula for a geometric series, this sums to:
$$
U = \frac{U_0}{1-r_{\text{RT}} e^{i \Delta\Phi_{\text{RT}}}}.
$$
The intracavity intensity $I \sim |U|^2$. This can be rewritten (using $\Delta\Phi_{\text{RT}} \approx 2\pi (f/f_F) - \text{Gouy term}$) as the Airy function, similar to the [[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.6 Fabry-Pérot Interferometer - Etalon\|Fabry-Pérot interferometer]] transmittance:
$$
I(f) = \frac{I_{\text{circ,max}}}{1+\left(\frac{2 \mathcal{F}}{\pi}\right)^2 \sin^2(\Delta\Phi_{\text{RT}}(f) / 2)},
$$
where $I_{\text{circ,max}}=\frac{I_0}{(1-r_{\text{RT}})^2}$ (if $I_0$ is related to input power coupled in per round trip), and the **finesse** $\mathcal{F}$ is:
$$
\mathcal{F}=\frac{\pi \sqrt{r_{\text{RT}}}}{1-r_{\text{RT}}}.
$$
The next figure shows the normalised intensity spectrum of an optical resonator:

![Attachments/Notes/2025 Quantum Electronics/7 Optical Resonators/QE_script 4-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/7%20Optical%20Resonators/QE_script%204-1.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=143&rect=91,438,509,675| ]]

The finesse $\mathcal{F}$ controls the sharpness (linewidth) of the resonance peaks. Higher reflectivity $r_{\text{RT}}$ (lower loss) leads to higher finesse and sharper peaks. The Full Width at Half Maximum (FWHM) linewidth $\delta f$ of each resonance is related to the free spectral range $f_F$ and the finesse by:
$$
\delta f =\frac{f_F}{\mathcal{F}}.
$$
Losses in a resonator can be characterised by an effective distributed loss coefficient $\alpha_{\text{loss}}$ per unit length. If $L_c$ is the round-trip path length, the round-trip power reflectivity $R_{\text{RT}} = r_{\text{RT}}^2$ might be modelled as $R_1 R_2 e^{-2\alpha_{\text{loss}}L_c}$ (where $R_1, R_2$ are mirror power reflectivities). 
The finesse can then be expressed in terms of total round-trip losses. If round-trip power loss is small ($1-r_{\text{RT}}^2 \ll 1$), then $1-r_{\text{RT}} \approx (1-r_{\text{RT}}^2)/2$. For instance, if losses are primarily due to mirror transmission $T_m \approx 1-r_{\text{RT}}$, then $\mathcal{F} \approx \pi/T_m$ (for high $r_{\text{RT}}$).
Then $\mathcal{F} \approx \pi(1-\alpha_r d/2)/(\alpha_r d) \approx \pi/(\alpha_r d)$. This factor depends on whether $d$ is single path or round trip in $\alpha_r d$.

The **quality factor** $Q$ of a resonator mode is defined as $2\pi$ times the ratio of stored energy to energy lost per optical cycle of the mode frequency $f_q$:
$$
Q = 2\pi f_q \frac{\text{Stored Energy}}{\text{Power Loss}} = \frac{f_q}{\delta f}.
$$
Using $\delta f = f_F/\mathcal{F}$, we obtain:
$$
Q = \mathcal{F} \frac{f_q}{f_F}.
$$
Since $f_q \approx q f_F$ (where $q$ is a large integer for optical frequencies), the ratio $f_q/f_F \approx q$ is typically very large. Thus, the quality factor $Q$ is generally much larger than the finesse $\mathcal{F}$ for optical resonators.

---