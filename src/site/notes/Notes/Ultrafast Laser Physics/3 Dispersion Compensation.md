---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/3-dispersion-compensation/","hide":"true","updated":"2025-05-30T12:19:43.000+02:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.1 Prism Compressor\|3.1 Prism Compressor]]
[[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.2 Grating Compressor and Pulse Shaper\|3.2 Grating Compressor and Pulse Shaper]]
[[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.3 Gires-Tournois Interferometer (GTI)\|3.3 Gires-Tournois Interferometer (GTI)]]
[[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.4 Mirrors with Controlled Phase Properties\|3.4 Mirrors with Controlled Phase Properties]]
[[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.5 Dazzlers\|3.5 Dazzlers]]
[[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.6 Dispersion Measurement\|3.6 Dispersion Measurement]]

---
# 3 Dispersion Compensation

Historically, researchers who first gained access to cutting-edge laser technology have often achieved groundbreaking results in science and technology, contributing crucially to several Nobel Prizes. Ultrashort pulses, particularly those below a few tens of femtoseconds (and especially sub-$10$ fs pulses), possess a very broad spectral bandwidth. Consequently, they experience significant dispersive broadening during propagation through most optical materials. In such cases, we may use the approximation of [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.4.4 Pulse Broadening\|strong pulse-broadening]]:

If the accumulated Group Delay Dispersion (GDD), $\frac{d^2 \Phi}{d \omega^2}$, is much larger than the square of the initial pulse duration, $\tau_{\mathrm{p}}^2(0)$ (scaled by appropriate numerical factors), so,
$$
\left|\frac{d^2 \Phi}{d \omega^2}\right| \gg \tau_{\mathrm{p}}^2(0), \quad \text{then} \quad \tau_{\mathrm{p}}(L_{\mathrm{d}}) \approx \left|\frac{d^2 \Phi}{d \omega^2}\right| \Delta \omega_{\mathrm{p}}.
$$
Here $\Delta\omega_p$ is the FWHM spectral bandwidth of the initial pulse.

To estimate this strong broadening, consider an initially transform-limited Gaussian pulse with a duration of $5$ fs:
The time-bandwidth product is $\Delta \nu_{\mathrm{p}} \tau_{\mathrm{p}} \approx 0.4413$, so $\Delta f_p = 0.4413 / (5 \, \text{fs}) \approx 0.08826 \, \text{fs}^{-1}$.
The angular frequency bandwidth is $\Delta \omega_{\mathrm{p}} = 2\pi \Delta f_p \approx 0.5545 \, \text{rad/fs}$.
For fused quartz, the GVD parameter at $800 \, \text{nm}$ is approximately:
$$
k_n'' = \left.\frac{\partial^2 k_n}{\partial \omega^2}\right|_{800 \text{ nm}} \approx 36.1 \, \frac{\text{fs}^2}{\text{mm}}.
$$
The GDD for $1 \, \text{mm}$ of fused quartz is $\frac{d^2\Phi}{d\omega^2} = k_n'' \cdot (1 \, \text{mm}) = 36.1 \, \text{fs}^2$.
This implies that just $1 \, \text{mm}$ of fused quartz broadens an initially $5 \, \text{fs}$ pulse to approximately $\tau_p(1\,\text{mm}) \approx (36.1 \, \text{fs}^2) \cdot (0.5545 \, \text{fs}^{-1}) \approx 20 \, \text{fs}$.
However, because the accumulation of dispersion (spectral phase) is a linear process (in terms of field propagation through different elements), this effect can, in principle, be reversed or compensated by propagating the pulse through another optical system that introduces the opposite dispersion. The shifted frequency components need to be delayed appropriately to realign them in time. Most transparent optical materials exhibit positive GDD (normal dispersion) in the visible and near-infrared regions. To achieve net negative GDD for pulse compression, often required to compensate for positive material GDD, and to do so without incurring large losses, alternative methods are necessary.

---
## 3.1 Prism Compressor
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=96&selection=14,0,16,16| ]]

The prism compressor utilises the angular dispersion of refractive prisms. A common configuration consists of two pairs of prisms (four prisms in total), or a single pair with a retroreflector:

![Attachments/UltraFastLasers_Keller 19.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2019.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=97&rect=112,443,323,523| ]]

After the first prism, different wavelength components of the pulse travel in slightly different directions due to the prism's material dispersion ($dn/d\lambda$). Typically, for normal dispersion, blue light (shorter wavelength) is refracted more strongly than red light (longer wavelength). After the second prism (oriented to reverse the angular dispersion of the first), these different wavelength components travel parallel to each other again but are spatially separated in the transverse direction. This spatial separation of colours means that different wavelengths will travel different path lengths to a reference plane. By arranging the prisms appropriately, the red components can be made to travel a longer optical path than the blue components. This configuration introduces negative GDD, such that 'blue is faster than red' in terms of group delay. The spatial separation can be reversed by a second identical pair of prisms (or by retro-reflecting the beam through the same pair), which also realigns the different wavelength components collinearly.

The prisms are often set up such that light enters and exits at Brewster's angle to minimise reflection losses for p-polarised light. For this to coincide with the condition of minimum deviation (where the ray path through the prism is symmetric), specific constraints are placed on the prism's refractive index and its apex angle $\alpha$. The total GDD introduced by a prism pair can be adjusted continuously by translating one of the prisms into or out of the beam path along an axis perpendicular to its base, without causing a net displacement or angular deviation of the output beam if done correctly with a pair.

![Attachments/UltraFastLasers_Keller 21.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2021.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=98&rect=108,397,334,514| ]]

By moving a prism into the beam (increasing the material path length), positive material dispersion is continuously added. It can be shown that the overall GDD from a pair of prisms separated by a distance $L$ (between apexes or corresponding faces) has two main contributions: one from the material dispersion of the prisms themselves (positive GDD) and one from the geometry of the path length differences for different wavelengths (angular dispersion contribution, which is negative GDD). The geometric contribution to the second derivative of the optical path length $P$ with respect to wavelength is approximately:
$$
\left(\frac{d^2 P}{d\lambda^2}\right)_{\text{geom}} = -2L \left(\frac{dn}{d\lambda}\right)^2 \left(\frac{\partial \theta_{\text{exit}}}{\partial n}\right)^2 \approx - C \cdot L \left(\frac{dn}{d\lambda}\right)^2 < 0,
$$
where $C$ is a positive constant depending on the prism geometry and incidence angles (for minimum deviation and Brewster's angle, a common approximation is $C \approx 8$ if $L$ is apex-to-apex distance, but the exact factor varies). Thus, the **geometric contribution** to the GDD is negative and its magnitude increases with the prism separation $L$. It is independent of the sign of the material dispersion $dn/d\lambda$. However, the **total** GDD of the prism compressor is the sum of this negative geometric GDD and the positive material GDD from the path length through the prism material itself. To achieve net negative GDD, the geometric contribution must outweigh the material contribution.
Additionally, such a configuration defines a horizon wavelength $\lambda_h$: wavelengths shorter than $\lambda_h$ may be refracted so strongly by the first prism that they miss the apex of the second prism and are lost.

A significant advantage of prism compressors is that the GDD can be adjusted continuously, often by translating one prism, without introducing a significant spatial offset or angular deviation of the output beam if using a four-prism or two-prism-plus-reflector setup.

![Attachments/UltraFastLasers_Keller 22.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2022.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=108&rect=169,497,387,609| ]]

Moving one of the prisms in the sequence to increase the amount of glass the beam traverses adds positive material GDD. While this also slightly changes the effective separation $L$ between prisms, this change to the geometric GDD can often be neglected for small adjustments if the initial separation is large (typically tens of centimetres) and the prism translation is only a few millimetres.
Next, consider the GDD of a fused silica prism pair as a function of wavelength:

![Attachments/UltraFastLasers_Keller 23.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2023.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=110&rect=75,415,362,608| ]]

Any wavelength $\lambda < \lambda_h$ will not pass through the second prism correctly and will be lost. There is a trade-off: larger insertion of prism material (for fine-tuning GDD towards more positive values) can lead to shorter horizon wavelengths.

A prism pair is typically designed to compensate for second-order dispersion (GDD). However, it also introduces third-order dispersion (TOD) and higher-order terms, which may not match those of the material being compensated. For the generation of very short pulses (few-cycle regime), uncompensated higher-order dispersion can become a dominant factor limiting the achievable pulse duration.

---
## 3.2 Grating Compressor and Pulse Shaper
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=111&selection=37,0,39,47| ]]

Diffraction gratings also introduce angular dispersion, separating different wavelength components spatially. Consider the simplest grating compressor configuration, typically involving two parallel gratings. When a pulse is incident on the first grating, its different wavelength components are diffracted at different angles according to the grating equation. For a positive diffraction order ($m>0$), longer wavelengths (red) are typically diffracted more strongly (at a larger angle) than shorter wavelengths (blue). By arranging a second grating parallel to the first, the path length for the red light component between the gratings can be made longer than that for blue light. This introduces negative second-order dispersion (negative GDD): again, blue effectively travels "faster" than red through the compressor in terms of group delay. The magnitude of this GDD is easily tuned by changing the perpendicular distance between the gratings.

![Attachments/UltraFastLasers_Keller 24.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2024.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=112&rect=55,491,385,609| ]]

The angular dispersion from a grating is given by the grating equation:
$$
\sin\theta_m(\lambda) = \sin\theta_i + m \frac{\lambda}{\Lambda},
$$
where $\Lambda$ is the grating period (groove spacing), $\lambda$ is the wavelength, $m$ is the diffraction order (typically $m=-1$ is used in compressors to achieve high efficiency with blazed gratings), $\theta_i$ is the angle of incidence, and $\theta_m(\lambda)$ is the wavelength-dependent diffraction angle for order $m$. For small angles and normal incidence, $\theta_m \approx m\lambda/\Lambda$.

When a short pulse with a tilted pulse front propagates through an angularly dispersive element like a grating, the pulse front itself (contour of constant peak intensity) can remain tilted or have its tilt modified. The phase fronts, however, are still perpendicular to the local wavevector of each spectral component.

A grating compressor has an additional position-dependent phase contribution from the grating surface itself. For the first grating, if the incident beam is collimated and not spectrally dispersed, all frequency components see effectively the same grating structure, so this phase contribution is common and does not contribute to GDD. However, after the first grating, the beam is angularly dispersed. When these spectrally separated components hit the second grating at different positions, they can experience different phase shifts from the grating structure itself, which can influence the overall GDD. This can be understood using Huygens' principle: each point on an advancing wavefront is a source of secondary wavelets. The first-order diffracted wavefront results from constructive interference of wavelets from each grating groove, which occurs when the path difference between waves from adjacent grooves results in a $2\pi m$ phase shift relative to the phase evolution from the grating periodicity itself. This "grating phase" must be considered in a detailed phase analysis.

![Attachments/UltraFastLasers_Keller 25.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2025.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=113&rect=89,446,350,610| ]]

Grating compressors are often used in a near-Littrow configuration ($\theta_m \approx -\theta_i$), where the diffracted beam of a specific order (commonly $m=-1$) is sent back close to the incident direction. Blazed gratings are designed to maximise diffraction efficiency into a particular order for such configurations. Low diffraction loss is essential because in many practical compressor designs (like the Treacy compressor), the light is diffracted four times (two gratings, double pass, or four separate gratings) to obtain an output beam that is spatially coherent (all frequency components are collinear and have no residual spatial chirp or pulse front tilt):

![Attachments/UltraFastLasers_Keller 27.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2027.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=115&rect=208,536,345,605| ]]
(Two-grating, double-pass configuration)

Alternatively, a four-grating configuration can be used:

![Attachments/UltraFastLasers_Keller 26.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2026.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=115&rect=175,435,382,508| ]]
(Four-grating transmissive or reflective configuration)

For a parallel grating pair compressor (typically used in reflection, $m=-1$), the second-order dispersion (GDD) is given by:
$$
\frac{d^2 \Phi}{d \omega^2}=-\frac{m^2 \lambda^3 L_g}{2 \pi c^2 \Lambda^2 \cos^3\theta_m},
$$
where $L_g$ is the perpendicular distance between the gratings (if in a double-pass configuration like Treacy, $L_g$ is effectively twice the path length between the gratings for a single pass). If the pulse has been positively chirped by propagating through a dispersive material, the negative GDD of the grating compressor can compress the pulse. The GDD is continuously adjustable by changing the grating separation $L_g$:
$$
\frac{d^2 \Phi}{d \omega^2} \sim -L_g.
$$
Thus, the GDD is negative for any positive grating separation $L_g$.

### 3.2.1 Grating Stretcher

A grating compressor configuration run in reverse, or a specifically designed grating setup involving a telescope (two lenses or curved mirrors), can produce positive GDD and act as a pulse stretcher. Consider a configuration with two gratings and two focusing elements (lenses of focal lengths $f_1, f_2$) forming a telescope, where $L$ is the distance between the gratings along the optical axis if the telescope were not present:

![Attachments/UltraFastLasers_Keller 28.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2028.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=122&rect=89,102,349,213| ]]

If the telescope is placed between the gratings, the GDD for such a grating stretcher setup can be approximated by:
$$
\frac{d^2 \Phi}{d \omega^2}=+\frac{m^2 \lambda^3 L_{\text{eff}}}{2 \pi c^2 \Lambda^2 \cos^3\theta_m},
$$
where $L_{\text{eff}}$ is an effective length that depends on the telescope magnification $M=f_2/f_1$ (if $f_1$ is first lens, $f_2$ second) and the positions of the gratings relative to the focal planes of the telescope. The sign of the GDD can be flipped from negative (compressor-like) to positive (stretcher-like) by adjusting the telescope configuration. For example, in a Martinez stretcher using a telescope between two gratings, an effective positive $L_{\text{eff}}$ gives positive GDD.

When such a grating-telescope setup is arranged in a "4f" configuration (input at front focal plane of first lens, mask at common focal plane, output at back focal plane of second lens), it can be used as a **pulse shaper**.

![Attachments/UltraFastLasers_Keller 29.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2029.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=125&rect=90,436,348,608| ]]

The first grating and lens perform a spatial Fourier transform of the input pulse's spectrum, dispersing the different frequency components to different transverse positions in the focal plane between the two lenses. An amplitude and/or phase mask placed in this Fourier plane can then independently modify the amplitude and phase of each spectral component. The second lens and grating recombine the spectral components, performing an inverse Fourier transform to reconstruct the pulse in the time domain, now with its shape and phase modified by the mask.

![Attachments/UltraFastLasers_Keller 30.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2030.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=126&rect=75,215,361,609| ]]

The figure illustrates:
* a: A symmetric $4f$ pulse shaper (zero path length difference between gratings and Fourier plane) ideally does not affect transform-limited pulses passing through if no mask is present (or a flat phase/unity amplitude mask).
* b: A linear phase shift introduced by the mask (a prism or tilted glass plate in the Fourier plane) results in a temporal shift of the output pulse without affecting its shape.
* c: A quadratic spectral phase shift (concave down) generates a pulse with positive chirp (lower frequencies arrive before higher frequencies).
* d: An opposite quadratic spectral phase shift (concave up) generates a pulse with negative chirp (higher frequencies arrive before lower frequencies).

---
## 3.3 Gires-Tournois Interferometer (GTI)
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=128&selection=6,0,8,35| ]]

A Gires-Tournois Interferometer (GTI), also known as a Gires-Tournois etalon, is an optical element designed to introduce a frequency-dependent phase shift upon reflection, while ideally having unity reflectivity across its operational bandwidth. It consists of two parallel reflecting surfaces: a front surface that is partially reflective and a back surface that has very high (ideally 100%) reflectivity. These two surfaces form a [[Notes/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.6 Fabry-Pérot Interferometer - Etalon\|Fabry-Pérot cavity]]. Light incident on the GTI undergoes multiple reflections within the cavity.

![Attachments/UltraFastLasers_Keller 31.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2031.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=128&rect=213,65,386,177| ]]

If the GTI is lossless (no absorption in the cavity material or mirrors, and the back mirror is perfectly reflecting), its power reflectivity is $|R_{\text{GTI}}|^2=1$. The complex amplitude reflection coefficient is then $R_{\text{GTI}}(\omega) = e^{i\Phi_{\text{GTI}}(\omega)}$.
The key feature is that the phase $\Phi_{\text{GTI}}(\omega)$ is a strongly non-linear function of frequency due to the resonant nature of the Fabry-Pérot structure. This strong frequency dependence of the phase leads to significant group delay dispersion (GDD). The material dispersion of the layer (of thickness $d$) itself can often be neglected if the layer is thin or an air gap is used, compared to the resonant phase effects. The single-pass phase accumulation inside the etalon (layer index $n$, thickness $d$, angle of incidence $\theta_t$ inside) is $\varphi(\omega) = n(\omega) (\omega/c) d \cos\theta_t$. The total reflected phase $\Phi_{\text{GTI}}(\omega)$ is a more complex function involving $\varphi(\omega)$ and the reflectivities of the front and back surfaces.

The Fabry-Pérot structure generates a periodic variation of the group delay ($T_g = d\Phi_{\text{GTI}}/d\omega$) and GDD ($d^2\Phi_{\text{GTI}}/d\omega^2$) with frequency, exhibiting alternating regions of positive and negative GDD. Neglecting material dispersion, the magnitude of the GDD achievable scales approximately with $d^2$:
$$
\frac{d^2\Phi_{\text{GTI}}}{d\omega^2} \sim \pm d^2.
$$
However, there is a trade-off: the bandwidth over which a certain GDD value can be obtained decreases as the layer thickness $d$ (and thus the magnitude of GDD) increases:
$$
\text{Effective Bandwidth of GDD feature} \sim \frac{1}{d}.
$$
For providing large negative dispersion, $d$ must be chosen sufficiently large, but this constricts the usable bandwidth so much that very short pulses (with broad spectra) cannot be fully compensated. Air-spaced GTIs, adjustable with piezo motors, are sometimes used, but typically not for pulses shorter than approximately $100 \, \text{fs}$ due to bandwidth limitations and the oscillatory nature of their GDD.
The next figures compare the group delay and GDD for a GTI with $d=80 \, \mu\text{m}$:

![Attachments/UltraFastLasers_Keller 34.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2034.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=130&rect=223,523,382,608| ]]

and for $d=2.25 \, \mu\text{m}$:

![Attachments/UltraFastLasers_Keller 35.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2035.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=130&rect=223,398,383,483| ]]

---
## 3.4 Mirrors with Controlled Phase Properties
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=132&selection=14,0,16,40| ]]

### 3.4.1 Bragg Mirror
A standard high-reflectance laser mirror is a Bragg mirror. It consists of a stack of alternating layers of high refractive index ($n_H$) and low refractive index ($n_L$) materials. Each layer typically has an optical thickness of a quarter-wavelength ($\lambda_B/4n_H$ or $\lambda_B/4n_L$) at the design centre wavelength $\lambda_B$.

![Attachments/UltraFastLasers_Keller 36.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2036.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=132&rect=111,103,328,163| ]]

A Bragg mirror exhibits maximum reflectivity over a spectral range called the stopband, centred around $\lambda_B$.

![Attachments/UltraFastLasers_Keller 37.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2037.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=133&rect=194,475,385,605| ]]

The fractional width of the stopband $\Delta\omega/\omega_B$ depends on the refractive index contrast $r=(n_H-n_L)/(n_H+n_L)$:
$$
\frac{\Delta \omega}{\omega_B}=\frac{4}{\pi} \arcsin\left|\frac{n_H-n_L}{n_H+n_L}\right|.
$$
Within the centre of its stopband, an ideal, infinitely thick Bragg mirror introduces a spectral phase that is approximately linear with frequency. This implies a constant group delay and therefore nearly zero second-order dispersion (GDD). Thus, a pulse whose spectrum lies entirely within this central region would be reflected without significant temporal distortion. However, this changes drastically as the bandwidth of an ultrashort pulse approaches or extends beyond the edges of the stopband, or even within the stopband if the mirror is not ideal, where the phase response becomes non-linear, introducing GDD and higher-order dispersion.

### 3.4.2 Chirped Mirrors
While prism pairs provide a convenient way to introduce adjustable GDD, their uncompensated higher-order dispersion can be a disadvantage, especially for very short pulses where a broad bandwidth needs to be managed. **Chirped mirrors** are designed to provide negative GDD over a broad bandwidth to overcome this limitation. In a chirped mirror, the optical thickness of the layers (or the local Bragg wavelength) is gradually varied (chirped) with penetration depth into the coating. This design allows longer wavelengths (redder components) to penetrate deeper into the mirror stack before being reflected, while shorter wavelengths (bluer components) are reflected from shallower layers. This increased path length for longer wavelengths results in a larger group delay for red light compared to blue light, effectively creating negative GDD. Additionally, this chirping of the layer thicknesses broadens the high-reflectance region of the mirror. However, the amount of GDD achievable from a single reflection on a chirped mirror is typically modest (tens to a few hundreds of $\text{fs}^2$), so multiple bounces are often required. These mirrors are crucial in generating and maintaining pulses in the sub-$10 \, \text{fs}$ regime in the visible and near-IR.

A common issue with early chirped mirrors was unwanted oscillations in their GDD response as a function of frequency. It was found that these oscillations can be significantly suppressed by using **double-chirped mirror (DCM)** designs. This approach involves not only chirping the Bragg wavelength (layer thicknesses) but also chirping the duty cycle of the high- and low-index layers (their relative thicknesses within a period). This second chirp acts as an impedance-matching mechanism, gradually tapering the effective refractive index from the incident medium to the bulk of the mirror stack and from the stack to the substrate, thereby reducing parasitic reflections from internal interfaces that cause the GDD oscillations. Often, an additional broadband anti-reflection (AR) coating is applied to the top surface of the mirror to minimise reflections at the air-mirror interface.

![Attachments/UltraFastLasers_Keller 38.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2038.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=136&rect=91,419,347,608| ]]

The figure shows: (a) a standard Bragg mirror, (b) a single-chirped mirror (chirped layer thicknesses), and (c) a double-chirped mirror with an additional AR coating (chirped layer thicknesses and chirped duty cycle).

![Attachments/UltraFastLasers_Keller 39.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2039.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=137&rect=112,135,327,237| ]]

A further refinement to broaden the bandwidth and smooth the GDD of DCMs is the **back-side coated double-chirped mirror (BASIC DCM)**. The idea is to eliminate residual reflections from the front surface of the substrate by applying the mirror coating to the back side of a wedged substrate and having the light enter through the substrate. If the refractive index of the substrate matches that of the first layer of the DCM stack, internal impedance matching is improved. The AR coating is then applied to the front (entrance) surface of the wedged substrate. The wedge ensures that any residual reflection from this front surface is angularly separated from the main beam.

![Attachments/UltraFastLasers_Keller 40.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2040.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=139&rect=169,67,385,122| ]]

Comparing a BASIC DCM to a standard front-side coated DCM:

![Attachments/UltraFastLasers_Keller 41.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2041.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=140&rect=55,537,383,608| ]]

The BASIC DCM can achieve a broader reflectivity bandwidth while maintaining low residual dispersion oscillations. However, this design introduces additional positive material dispersion because the pulse propagates through the substrate material. This typically requires more bounces on chirped mirrors to compensate. A more significant practical challenge can be the angular dispersion introduced by the wavelength-dependent refraction at the entrance and exit faces of the wedged substrate, which may require careful management or an additional matched wedge for compensation.

Currently, a primary limitation in achieving ideal dispersion compensation with chirped mirrors lies in the precision of fabricating such complex multilayer structures. Small errors in layer deposition during fabrication can reintroduce unwanted GDD oscillations.

---
## 3.5 Dazzlers
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=143&selection=52,0,54,8| ]]

A 'Dazzler' is a commercial name for a type of Acousto-Optic Programmable Dispersive Filter (AOPDF). In contrast to spatial light modulators (SLMs) used in $4f$ pulse shapers or deformable mirrors, AOPDFs generally do not require high-quality external dispersive optical elements (like gratings or prisms for spectral separation) and can be relatively compact and easy to implement. Consider the following schematic:

![Attachments/UltraFastLasers_Keller 42.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2042.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=144&rect=55,396,385,608| ]]

An acoustic wave, generated by a radio-frequency (RF) transducer, is launched into an acousto-optic crystal (such as TeO$_2$). The incident optical pulse co-propagates (or nearly co-propagates) with this acoustic wave, which travels at a much slower velocity $v_a$ along the crystal. The acoustic wave creates a travelling refractive index grating. Efficient coupling (diffraction) of the optical wave from an input polarisation mode to an output polarisation mode (for instance, from an ordinary to an extraordinary axis in a birefringent crystal) occurs via the acousto-optic interaction only when a phase-matching condition between the optical waves and the acoustic wave is met.

If the launched acoustic wave is a _chirped_ RF signal, the acoustic frequency $\Omega_a(z)$ varies along the crystal length $z$ at any given time $t$. Therefore, a specific optical frequency $\omega$ from the input pulse will only satisfy the phase-matching condition at a particular position $z(\omega)$ along the crystal where the local acoustic wavevector $K_a(z(\omega)) = \Omega_a(z(\omega))/v_a$ has the correct value. At this position, part of the energy of the optical frequency component $\omega$ is diffracted into the orthogonally polarised mode. Since these two optical modes (ordinary and extraordinary) have different propagation velocities (due to birefringence), each frequency component $\omega$ effectively travels a different optical path length before being diffracted and after diffraction, or experiences a different cumulative phase. The total delay experienced by each frequency component thus depends on the position $z(\omega)$ where it was diffracted, which is programmed by the shape of the acoustic waveform $\Omega_a(z)$.

Therefore, an almost arbitrary group-delay distribution (and thus spectral phase) can be imposed on the optical pulse by appropriately shaping the acoustic waveform $S_a(t)$ (whose instantaneous frequency determines $\Omega_a(z)$ at a given time). This allows for fine control over the dispersion experienced by the pulse.

---
## 3.6 Dispersion Measurement
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=145&selection=9,0,11,23| ]]

Lastly, we briefly discuss methods to measure dispersion reliably. A standard technique for characterising the Group Delay Dispersion (GDD) of optical components or systems is **white-light interferometry**. The output of a broadband light source (a "white-light" source, such as a supercontinuum source or a femtosecond laser) is fed into an interferometer, typically of the Michelson type. The Device Under Test (DUT), whose dispersion is to be measured, is placed in one arm (the sample arm) of the interferometer. The other arm (the reference arm) contains optics with known or negligible dispersion, and often includes a variable delay line. The interference pattern formed by recombining the light from both arms is monitored. This can be done either by measuring the total intensity as a function of delay with a photodiode (yielding an interferogram, whose envelope width can be related to dispersion differences) or, more commonly and powerfully, by using spectral interferometry, where the spectrum of the interfering output is measured with a spectrometer for different (or a fixed) path length difference. From the spectral interferogram, the phase difference between the two arms as a function of frequency, $\Delta\Phi(\omega)$, can be extracted, and from this, the GDD of the DUT ($\frac{d^2\Delta\Phi(\omega)}{d\omega^2}$) can be determined.

---