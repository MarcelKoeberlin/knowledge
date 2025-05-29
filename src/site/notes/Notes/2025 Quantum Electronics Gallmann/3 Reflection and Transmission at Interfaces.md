---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics-gallmann/3-reflection-and-transmission-at-interfaces/","hide":"true","updated":"2025-05-29T18:46:52.977+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.1 Boundary Conditions for Isotropic Media\|3.1 Boundary Conditions for Isotropic Media]]
- [[Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.2 Brewster's Angle\|3.2 Brewster's Angle]]
- [[Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.3 Total Internal Reflection\|3.3 Total Internal Reflection]]
- [[Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.4 Evanescent Waves\|3.4 Evanescent Waves]]

---
# 3 Reflection and Transmission at Interfaces
## 3.1 Boundary Conditions for Isotropic Media
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=60&selection=4,0,6,39|•]] [[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=138&selection=0,0,0,54|•]]

So far, we have primarily considered the propagation of electromagnetic waves through uniform media, without encountering boundaries. From daily life, we know that waves are reflected and transmitted at interfaces between media possessing different electric and magnetic properties. To describe these phenomena, we derive boundary conditions from the integral form of Maxwell's equations. The relevant curl equations are:
$$
\begin{aligned}
\oint_C \mathbf{E} \cdot d\mathbf{l} & = -\iint_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{A}, && \text{(Faraday's Law)} \\
\oint_C \mathbf{H} \cdot d\mathbf{l} & = \iint_S \left(\mathbf{j}_f+\frac{\partial \mathbf{D}}{\partial t}\right) \cdot d\mathbf{A}. && \text{(Ampère-Maxwell Law)}
\end{aligned}
$$
Consider an interface between medium 1 and medium 2, as shown in the following figure. We apply these integral laws to an infinitesimally thin rectangular loop $C$ that straddles the interface, with its longer sides parallel to the interface and its shorter sides (of height $h$) perpendicular to it.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/QE_script 4.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/QE_script%204.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=61&rect=144,597,460,666|•]]

In the limit as the height $h \to 0$, the area $S$ enclosed by the loop also approaches zero. If the fields $\partial\mathbf{B}/\partial t$ and $\partial\mathbf{D}/\partial t$ as well as $\mathbf{j}_f$ are finite (no surface current sheets for $\mathbf{j}_f$ assumed here for simplicity in the Ampère-Maxwell law case), the flux integrals on the right-hand side of both equations vanish. This leads to the boundary conditions for the components of $\mathbf{E}$ and $\mathbf{H}$ parallel (tangential) to the interface:
$$
\begin{aligned}
& (\mathbf{E}_1)_{\|} - (\mathbf{E}_2)_{\|} = 0 \quad \implies \quad \mathbf{E}_{1,\|} = \mathbf{E}_{2,\|} \\
& (\mathbf{H}_1)_{\|} - (\mathbf{H}_2)_{\|} = 0 \quad \implies \quad \mathbf{H}_{1,\|} = \mathbf{H}_{2,\|} \quad \text{(if no surface free current } \mathbf{K}_f \text{ exists)}
\end{aligned}
$$
In other words, the tangential components of both the electric field $\mathbf{E}$ and the magnetic field $\mathbf{H}$ are continuous across an interface, provided there are no surface free currents. (Similarly, $\mathbf{D}_{1,\perp} - \mathbf{D}_{2,\perp} = \sigma_f$ and $\mathbf{B}_{1,\perp} - \mathbf{B}_{2,\perp} = 0$, where $\sigma_f$ is a surface free charge density).

For any collection of plane waves (incident, reflected, transmitted – denoted by superscript $j$) at the interface, these boundary conditions must hold at all points $\mathbf{r}_{\|}$ on the interface and for all times $t$.
$$
\begin{aligned}
\sum_j \mathbf{E}_{\|}^{(1, j)}(\mathbf{r}_{\|},t) & =\sum_j \mathbf{E}_{\|}^{(2, j)}(\mathbf{r}_{\|},t) \\
\sum_j \mathbf{H}_{\|}^{(1, j)}(\mathbf{r}_{\|},t) & =\sum_j \mathbf{H}_{\|}^{(2, j)}(\mathbf{r}_{\|},t)
\end{aligned}
$$
For this to be true, the phase factors $e^{i(\mathbf{k}_{\|} \cdot \mathbf{r}_{\|} - \omega t)}$ must be identical for all waves involved at the interface. This implies two crucial conditions:
1.  All waves must have the same frequency: $\omega_i = \omega_r = \omega_t = \omega$.
2.  The tangential components of their wavevectors must be conserved across the interface: $\mathbf{k}_{i,\|} = \mathbf{k}_{r,\|} = \mathbf{k}_{t,\|}$.

Consider three plane waves: incident (subscript 1 or $i$), reflected (subscript 3 or $r$), and transmitted (subscript 2 or $t$).

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/QE_script 5.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/QE_script%205.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=62&rect=143,247,461,373|•]]

From the conservation of the tangential component of $\mathbf{k}$ ($k_x$ if the interface is the $xy$-plane and propagation is in $xz$-plane), and given that $k_i = k_r = k_1 = n_1\omega/c$ and $k_t = k_2 = n_2\omega/c$:
-  The **Law of Reflection**: the angle of incidence equals the angle of reflection:
	$$k_{i,x} = k_{r,x} \implies k_1 \sin\theta_1 = k_1 \sin\theta_3 \implies \sin\theta_1 = \sin\theta_3 \implies \theta_1 = \theta_3.$$ 
-   **Snell's Law** of refraction: 
	$$k_{i,x} = k_{t,x} \implies k_1 \sin\theta_1 = k_2 \sin\theta_2 \implies n_1 \frac{\omega}{c} \sin\theta_1 = n_2 \frac{\omega}{c} \sin\theta_2 \implies n_1\sin\theta_1 = n_2\sin\theta_2.$$
The angles $\theta_j$ are typically defined with respect to the surface normal $\hat{\mathbf{n}}$: $\theta_j=\arccos\left(\frac{|\mathbf{k}_j \cdot \hat{\mathbf{n}}|}{|\mathbf{k}_j|}\right)$.

To find the amplitudes of the reflected and transmitted waves, we decompose the incident electric field into components perpendicular (s-polarisation or TE) and parallel (p-polarisation or TM) to the plane of incidence (the plane containing $\mathbf{k}_i$ and $\hat{\mathbf{n}}$).

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 22.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2022.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=148&rect=70,126,733,470|•]]

Applying the boundary conditions for these polarisations separately (assuming non-magnetic media, $\mu_1=\mu_2=\mu_0$, so $Z_j = Z_0/n_j = \sqrt{\mu_0/\varepsilon_0}/n_j$) yields the Fresnel equations for the amplitude reflection ($r_s, r_p$) and transmission ($t_s, t_p$) coefficients:
$$
\begin{aligned}
r_s & =\frac{n_1 \cos\theta_1-n_2 \cos\theta_2}{n_1 \cos\theta_1+n_2 \cos\theta_2}, \\
t_s & =\frac{2 n_1 \cos\theta_1}{n_1 \cos\theta_1+n_2 \cos\theta_2} = 1+r_s, \\
r_p & =\frac{n_2 \cos\theta_1-n_1 \cos\theta_2}{n_2 \cos\theta_1+n_1 \cos\theta_2}, \\
t_p & =\frac{2 n_1 \cos\theta_1}{n_2 \cos\theta_1+n_1 \cos\theta_2}.
\end{aligned}
$$
The power reflectance $R$ and transmittance $T$ are given by the square of the magnitudes of these coefficients, with an additional factor for transmittance to account for the change in impedance and beam area projection:
$$
\begin{aligned}
R_s & =|r_s|^2, \quad R_p =|r_p|^2, \\
T_s & =\frac{n_2 \cos\theta_2}{n_1 \cos\theta_1}|t_s|^2, \quad T_p =\frac{n_2 \cos\theta_2}{n_1 \cos\theta_1}|t_p|^2.
\end{aligned}
$$
For non-absorbing media, energy conservation requires $R_s+T_s=1$ and $R_p+T_p=1$.

The phases of $r_{s,p}$ and $t_{s,p}$ represent phase shifts experienced by the waves upon reflection and transmission. The 'phase retardation' is the difference between the phase shifts of the s- and p-components, which can alter the polarisation state of the light if it is not purely s- or p-polarised.

The next two figures show the magnitude of the reflection coefficient and its phase as a function of the incident angle, for light incident from a rarer medium to an optically denser medium (external reflection, $n_1 < n_2$) for both s- and p-polarised light:

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 34.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2034.webp)
![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 36.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2036.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=164&rect=207,132,579,275|•]]

Consider the next plot, which shows the power reflectance $R$, transmittance $T$, and phase retardation for reflection at a glass/air interface ($n_1 > n_2$, internal reflection). There is a notable difference between s- and p-polarised light.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/QE_script 7.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/QE_script%207.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=66&rect=72,154,527,349|•]]

For internal reflection, the phase retardation for reflected light changes continuously for angles of incidence greater than the critical angle (see [[Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.3 Total Internal Reflection\|total internal reflection]]). The phase of transmitted light (if any) typically does not change or changes by $\pi$ if coefficients become negative. 

At normal incidence ($\theta_1=0^\circ$), TE and TM polarisations are indistinguishable. The Fresnel equations give $r_p = -r_s = \frac{n_2-n_1}{n_2+n_1}$ and $t_p=t_s=\frac{2n_1}{n_1+n_2}$. The sign difference $r_p=-r_s$ arises from the conventional choice of positive directions for the electric field components in p-polarisation for the incident and reflected waves, as illustrated here:

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/QE_script 8.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/QE_script%208.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=67&rect=166,196,435,320|•]]

For TM (p-polarised) waves, if the component of $\mathbf{E}$ parallel to the plane of incidence is defined relative to the respective $\mathbf{k}$ vectors, the reflection can result in an apparent field flip relative to the coordinate system fixed to the interface.

---
## 3.2 Brewster's Angle
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=68&selection=4,0,6,16|•]] [[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=165&selection=0,0,0,16|•]]

For p-polarised light, the reflectivity $|r_p|^2$ becomes zero at a specific angle of incidence called Brewster's angle, $\theta_B$. This occurs when $r_p=0$, so from the Fresnel equation for $r_p$:
$$
n_2 \cos \theta_1 - n_1 \cos \theta_2 = 0 \implies n_2 \cos\theta_B = n_1 \cos\theta_t,
$$
where $\theta_1 = \theta_B$ and $\theta_2 = \theta_t$ is the angle of transmission.
Using Snell's Law, $n_1 \sin\theta_B = n_2 \sin\theta_t$, we can solve for $\theta_B$.
Square both equations:
$n_2^2 \cos^2\theta_B = n_1^2 \cos^2\theta_t = n_1^2 (1-\sin^2\theta_t)$
$n_1^2 \sin^2\theta_B = n_2^2 \sin^2\theta_t \implies \sin^2\theta_t = (n_1/n_2)^2 \sin^2\theta_B$.
Substituting $\sin^2\theta_t$:
$n_2^2 \cos^2\theta_B = n_1^2 (1 - (n_1/n_2)^2 \sin^2\theta_B) = n_1^2 - (n_1^4/n_2^2)\sin^2\theta_B$.
$n_2^2 (1-\sin^2\theta_B) = n_1^2 - (n_1^4/n_2^2)\sin^2\theta_B$.
$n_2^2 - n_2^2\sin^2\theta_B = n_1^2 - (n_1^4/n_2^2)\sin^2\theta_B$.
$n_2^2 - n_1^2 = (n_2^2 - n_1^4/n_2^2)\sin^2\theta_B = \frac{n_2^4-n_1^4}{n_2^2}\sin^2\theta_B = \frac{(n_2^2-n_1^2)(n_2^2+n_1^2)}{n_2^2}\sin^2\theta_B$.
If $n_1 \neq n_2$, we can divide by $(n_2^2-n_1^2)$:
$1 = \frac{n_1^2+n_2^2}{n_2^2}\sin^2\theta_B \implies \sin^2\theta_B = \frac{n_2^2}{n_1^2+n_2^2}$.
Then $\tan^2\theta_B = \frac{\sin^2\theta_B}{\cos^2\theta_B} = \frac{\sin^2\theta_B}{1-\sin^2\theta_B} = \frac{n_2^2/(n_1^2+n_2^2)}{1 - n_2^2/(n_1^2+n_2^2)} = \frac{n_2^2/(n_1^2+n_2^2)}{n_1^2/(n_1^2+n_2^2)} = \left(\frac{n_2}{n_1}\right)^2$.
Thus, Brewster's angle is given by:
$$
\tan\theta_B = \frac{n_2}{n_1}.
$$
Note that no such angle exists for s-polarised light where $r_s=0$ (unless $n_1=n_2$).

As an example, for light incident from air ($n_1 \approx 1$) onto glass ($n_2 \approx 1.5$), Brewster's angle is $\theta_B = \tan^{-1}(1.5/1) \approx 56.3^\circ$. The plot shows $r_p$ passing through zero (reflectivity $R_p=0$) at this angle. The sign change in $r_p$ indicates a phase jump of $\pi$ upon reflection for angles passing through $\theta_B$.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 23.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2023.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=166&rect=238,198,563,440|•]]

This phenomenon is used in laser cavities to select a specific polarisation (p-polarised light experiences minimal loss at Brewster-angled windows) or in polarisers.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 24.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2024.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=167&rect=88,291,730,446|•]]

At Brewster's angle, it can be shown that the reflected ray (if it existed) and the transmitted (refracted) ray would be perpendicular to each other, i.e., $\theta_B + \theta_t = \pi/2$.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/QE_script 9.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/QE_script%209.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=69&rect=73,307,295,389|•]]

The physical explanation for $r_p=0$ is that the oscillating dipoles induced in the transmitting medium by the refracted ray are oriented such that they do not radiate in the direction required for a reflected p-polarised wave. For p-polarised light, the electric field (and thus the induced dipoles) lies in the plane of incidence. If $\theta_B + \theta_t = \pi/2$, these dipoles oscillate parallel to the direction where the reflected ray would propagate, and dipoles do not radiate along their axis of oscillation.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 26.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2026.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=171&rect=483,188,678,465|•]]

If both refractive indices $n_1$ and $n_2$ are complex (absorbing media), a true Brewster's angle where $r_p=0$ generally does not exist. However, a pseudo-Brewster angle corresponding to a minimum in $|r_p|$ can still be found.

---
## 3.3 Total Internal Reflection
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=70&selection=6,0,8,25|•]]

Total Internal Reflection (TIR) occurs when light is incident from a denser medium ($n_1$) onto an interface with a rarer medium ($n_2$), so $n_1 > n_2$.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 27.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2027.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=175&rect=44,131,441,479|•]]

From Snell's Law, $\sin\theta_2 = (n_1/n_2)\sin\theta_1$. Since $n_1/n_2 > 1$, there exists a critical angle of incidence $\theta_c$ for which $\sin\theta_2 = 1$ (i.e., $\theta_2 = \pi/2$). This critical angle is:
$$
\theta_c=\arcsin\left(\frac{n_2}{n_1}\right).
$$
For angles of incidence $\theta_1 > \theta_c$, $\sin\theta_2 > 1$, which means $\theta_2$ is not a real angle, and $\cos\theta_2 = \sqrt{1-\sin^2\theta_2}$ becomes purely imaginary: $\cos\theta_2 = i\sqrt{(n_1/n_2)^2 \sin^2\theta_1 - 1}$.
In this regime, the reflection coefficients $r_s$ and $r_p$ become complex but their magnitudes become unity ($|r_s|^2 = R_s = 1$ and $|r_p|^2 = R_p = 1$). All incident power is reflected, hence the term total internal reflection. The complex nature of $r_s$ and $r_p$ signifies phase shifts upon reflection. The next figures show the magnitude and phase of the reflection coefficients for internal reflection (for example glass to air) for s- and p-polarised light.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 32.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2032.webp)
![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 33.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2033.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=204&rect=225,162,587,297|•]]

The principle of total internal reflection is useful for many applications, such as [[Notes/2025 Quantum Electronics Gallmann/10 Waveguides#10.3 Optical Fibres\|optical fibres]], beam steering prisms, and some types of sensors.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 28.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2028.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=184&rect=63,107,221,419|•]]

In these applications, light is effectively 'trapped' in a region of higher refractive index than its surroundings by TIR.

## 3.4 Evanescent Waves
[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=188&selection=0,0,0,25|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=70&selection=170,47,170,86|•]]

Considering the transmission coefficients for angles $\theta_1 > \theta_c$:
$$
t_s=1+r_s\quad\text{and}\quad t_p=\frac{n_1}{n_2}(1+r_p)\frac{\cos\theta_1}{\cos\theta_2}.
$$
These coefficients are generally not zero, despite the power reflectivity being unity ($R_s=R_p=1 \implies T_s=T_p=0$). This apparent contradiction is resolved by understanding the nature of the field in the rarer medium (medium 2).
Since $\cos\theta_2$ is purely imaginary for $\theta_1 > \theta_c$, let $\cos\theta_2 = i \gamma'$, where $\gamma' = \sqrt{(n_1/n_2)^2\sin^2\theta_1 - 1}$. The $z$-component of the wavevector in medium 2, $k_{2z} = k_2 \cos\theta_2 = (n_2\omega/c) (i\gamma')$, becomes purely imaginary.
The electric field in medium 2 takes the form $\mathbf{E}^{(2)}(\mathbf{r},t) = \mathbf{E}_{0}^{(2)} e^{i(k_{2x}x - \omega t)} e^{-k_0 n_2 \gamma' z} = \mathbf{E}_{0}^{(2)} e^{i(n_1 k_0 \sin\theta_1 x - \omega t)} e^{-\gamma z}$, where the attenuation constant $\gamma = k_0 n_2 \gamma'$ is:
$$
\gamma = k_0 \sqrt{n_1^2 \sin^2\theta_1 - n_2^2} = \frac{2\pi}{\lambda_0} \sqrt{n_1^2 \sin^2\theta_1 - n_2^2}.
$$
The field in medium 2 thus propagates parallel to the interface (in the $x$-direction, with $k_{2x} = n_1 k_0 \sin\theta_1$) but decays exponentially with distance $z$ from the interface into medium 2. This non-propagating, exponentially decaying field is called an **evanescent wave**. No net energy is transmitted into medium 2 on average over time; the energy associated with the evanescent field is "borrowed" and returned.

The best way to illustrate this is by an animation, showing the propagation of the (out-of-plane, s-polarised) electric field component upon hitting an interface to a medium of lower refractive index at an angle greater than $\theta_c$:

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/total_internal_reflection_z.gif|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/total_internal_reflection_z.gif)

This clearly shows the evanescent wave (on the upper half, in medium 2) penetrating a short distance into medium 2 and travelling along the surface, phase-locked with the incident and reflected waves. The associated time-averaged Poynting vector component normal to the surface is zero, indicating no net power flow into medium 2.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/total_internal_reflection_poynting.png|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/total_internal_reflection_poynting.png)

If a third medium (also with $n_3 \ge n_2$) is brought close to the first interface (within a distance comparable to the penetration depth $1/\gamma$ of the evanescent wave in medium 2), the evanescent wave can couple into propagating modes in the third medium. This phenomenon is called **Frustrated Total Internal Reflection (FTIR)** or optical tunnelling.

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/frustrated_total_internal_reflection_epsilon.png|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/frustrated_total_internal_reflection_epsilon.png)

The distance between the two interfaces (medium 1/medium 2 and medium 2/medium 3) should typically be on the order of the evanescent wave penetration depth, which for visible light can range from tens of nanometres to a few hundred nanometres, depending on the angle of incidence relative to the critical angle and the refractive indices. When FTIR occurs, there is net power transmission across the gap into the third medium, as shown below:

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/frustrated_total_internal_reflection_z.gif|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/frustrated_total_internal_reflection_z.gif)
And the Poynting vector:
![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/frustrated_total_internal_reflection_poynting.png|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/frustrated_total_internal_reflection_poynting.png)

This effect is used in various applications, such as beamsplitters, optical couplers, and fingerprint scanners, where the presence of fingerprint ridges frustrates TIR from a prism surface.

Evanescent waves are also used for polarisation manipulation, for example in a **Fresnel rhomb**. This device uses two total internal reflections to introduce a specific phase shift between s- and p-polarised components. For linearly polarised light incident at $45^\circ$ to the principal axes of the rhomb, if each TIR introduces a relative phase shift of $\pi/4$ between the s- and p-components, then after two such reflections, the total relative phase shift is $\pi/2$. If the amplitudes of the s- and p-components were initially equal, the output light becomes circularly polarised. The specific angle for a $\pi/4$ relative phase shift per reflection depends on the refractive index of the rhomb material (for instance, angles around $50.2^\circ$ and $53.3^\circ$ are mentioned for $n=1.5$, often a specific angle is chosen, like $54.6^\circ$ for BK7 glass for a single reflection to give $\approx 45^\circ$ phase shift difference).

![Attachments/Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces/01_Introduction_and_theoretical_foundation 31.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/3%20Reflection%20and%20Transmission%20at%20Interfaces/01_Introduction_and_theoretical_foundation%2031.webp)[[Notes/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=202&rect=55,124,363,479|•]]

---