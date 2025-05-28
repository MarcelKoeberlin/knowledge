---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/3-dispersion-compensation/","hide":"true","updated":"2025-02-08T18:15:59.000+01:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.1 Prism Compressor\|3.1 Prism Compressor]]
- [[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.2 Grating Compressor and Pulse Shaper\|3.2 Grating Compressor and Pulse Shaper]]
- [[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.3 Gires-Tournois Interferometer (GTI)\|3.3 Gires-Tournois Interferometer (GTI)]]
- [[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.4 Mirrors with Controlled Phase Properties\|3.4 Mirrors with Controlled Phase Properties]]
- [[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.5 Dazzlers\|3.5 Dazzlers]]
- [[Notes/Ultrafast Laser Physics/3 Dispersion Compensation#3.6 Dispersion Measurement\|3.6 Dispersion Measurement]]

---
# 3 Dispersion Compensation

Historically, those who first gained access to cutting-edge laser technology have often achieved groundbreaking results in science and technology, contributing crucially to several Nobel Prizes. Ultrashort pulses below 3 fs have a very broad spectral bandwidth and experience strong dispersive broadening during propagation. In this case, we may use the [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.4.4 Pulse Broadening\|strong broadening approximation]]:

$$
\frac{\mathrm{d}^2 \phi}{\mathrm{d} \omega^2} \gg \tau_{\mathrm{p}}^2(0) \Longrightarrow \tau_{\mathrm{p}}(L_{\mathrm{d}}) \approx \frac{\mathrm{d}^2 \phi}{\mathrm{d} \omega^2} \Delta \omega_{\mathrm{p}}.
$$

To estimate this strong broadening, consider a Gaussian bandwidth-limited pulse with a pulse duration of 5 fs:

$$
\Delta \nu_{\mathrm{p}} \tau_{\mathrm{p}}=0.4413 \Longrightarrow \Delta \omega_{\mathrm{p}}=0.554 \mathrm{fs}^{-1}.
$$

Considering fused quartz, we find that

$$
\left.\frac{\partial^2 k_n}{\partial \omega^2}\right|_{800 \mathrm{~nm}}=36.1 \frac{\mathrm{fs}^2}{\mathrm{~mm}},
$$

implying that just 1 mm of fused quartz broadens a 5 fs pulse to approximately 20 fs. However, because pulse broadening is linear, this effect can be reversed by propagating through a 'material' that compensates for the corresponding dispersion: the shifted frequency components need to be shifted back by the correct time delay. However, most materials have positive dispersion in the transparent region. To avoid large losses, we must find other ways to obtain negative dispersion.

---
## 3.1 Prism Compressor
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=96&selection=14,0,16,16|•]]

The prism compressor is a geometrical configuration that uses so-called 'geometric' or 'angular dispersion'. One usually uses a configuration consisting of two prism pairs:

![Attachments/UltraFastLasers_Keller 19.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2019.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=97&rect=112,443,323,523|•]]

After the first prism, different wavelengths travel in different directions. The blue part is refracted more strongly than the red part. After the second prism, these beams travel parallel again but are spatially separated in the transverse direction. This spatial separation can be reversed by retro-reflecting the beams or simply inserting a second prism pair. This configuration allows us to obtain negative dispersion, such that 'blue is faster than red'.
The prisms are cut so that the angle of incidence is the Brewster angle $\theta_B$ for the centre wavelength of the laser pulse. Therefore, reflection losses are minimised for p-polarised light. Additionally, the apex angle $\alpha$ is chosen for a symmetric beam path with equal incidence angle $\theta_1$ and exit angle $\theta_2$. The total GDD can be adjusted continuously by vertically moving the prism without shifting the beam:

![Attachments/UltraFastLasers_Keller 21.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2021.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=98&rect=108,397,334,514|•]]

By moving the prism into the beam, positive dispersion is continuously added because the beam has to propagate through a longer stretch of material with positive dispersion. It can be shown that the negative dispersion is determined by the distance between the two prisms:

$$
\frac{\mathrm{d}^2 P}{\mathrm{d} \lambda^2}=-2\left(\frac{\partial \theta_2}{\partial n} \frac{\partial n}{\partial \lambda}\right)^2 L \approx-8\left(\frac{\mathrm{d} n}{\mathrm{d} \lambda}\right)^2 L<0,
$$

where $P$ is the distance from the first prism's apex to the exit of the second prism. Thus, we obtain negative dispersion, and it is, in fact, independent of the sign of the material dispersion. Additionally, this configuration defines a horizon wavelength $\lambda_h$. It defines the shortest wavelength that can pass through the prism sequence without missing the second prism. Note that the derivation is rather tedious and no interesting physics is involved.
One big advantage of prism compressors is that the dispersion can be adjusted continuously and without introducing a spatial offset of the beam after the prism pair:

![Attachments/UltraFastLasers_Keller 22.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2022.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=108&rect=169,497,387,609|•]]

Moving the second pair 'downwards' (in the figure) adds a certain amount of positive material dispersion. In doing so, the distance between the prisms is also changed; however, this can usually be neglected because the separation is typically greater than 10 cm, and the prisms are only moved by millimetres. Next, consider the GDD of a fused silica prism pair:

![Attachments/UltraFastLasers_Keller 23.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2023.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=110&rect=75,415,362,608|•]]

Any wavelength $\lambda < \lambda_h$ will not be refracted by the second prism and will be lost during propagation. The trade-off for larger insertion is shorter horizon wavelengths.

One can usually only compensate for one order of dispersion, e.g. the second order. For the generation of very short pulses, this limits the possible pulse length because the uncompensated higher-order dispersion contributes dominantly to pulse broadening.

---
## 3.2 Grating Compressor and Pulse Shaper
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=111&selection=37,0,39,47|•]]

Diffraction gratings also introduce angular dispersion. Consider the simplest grating configuration, where blue travels a greater distance than red, thus introducing negative GDD. The dispersion is easily tuned by changing the distance between the gratings.

![Attachments/UltraFastLasers_Keller 24.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2024.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=112&rect=55,491,385,609|•]]

The angular dispersion in diffraction from gratings is

$$
\nu_{x, m}=m \frac{1}{\Lambda} \Longleftrightarrow \theta_{x, m} \approx m \frac{\lambda}{\Lambda},
$$

where $\Lambda$ is the grating period, $\lambda$ the wavelength, $m$ the diffraction order, $\nu_{x, m}$ the spatial frequency, and $\theta_{x, m}$ the diffraction angle. The red wavelength part is more strongly diffracted than the blue wavelength part. Therefore, the path length for long wavelengths can be increased such that negative second-order dispersion is generated: again, blue is faster than red.

When a short pulse propagates through an angular-dispersive element, a tilt is also introduced in the pulse front. Therefore, the pulse front, rather than the phase front, is the contour of constant intensity at the peak of the pulse. Note that the phase front is still perpendicular to the pulse propagation direction.

A grating compressor has an additional position-dependent contribution to the phase; however, it can be neglected on the first grating because, here, the beams are not yet spectrally dispersed: all frequency components experience the same phase shift, which can thus be neglected regarding GDD. This situation is different for the second grating. Different Fourier components are now diffracted at different positions of the grating, which results in a position-dependent grating phase and, therefore, frequency-dependent phase, thereby influencing GDD. The easiest way to understand this is by considering Huygens' principle, which assumes that each point of an advancing wavefront is the centre of a fresh disturbance. All these waves interfere constructively. Next, we show the simplest case where the incoming wavefronts arrive parallel to the grating surface: the first-order wavefront results from constructive interference of all secondary waves coming from each grating line. We obtain constructive interference with a grating line distance that results in a $2\pi$-shifted secondary wavefront compared to the neighbouring grating lines. This grating phase must be taken into account when the two-grating configuration is evaluated in the phase picture:

![Attachments/UltraFastLasers_Keller 25.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2025.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=113&rect=89,446,350,610|•]]

The incoming beam has an angle of incidence $\theta_i$ and is diffracted by the grating with a grating period $\Lambda$. The resulting reflected and diffracted beam of order $m$ is determined by the angle $\theta_m$:

$$
\sin \theta_m=m \frac{\lambda}{\Lambda}+\sin \theta_{\mathrm{i}}, \quad \text { where } m=0, \pm 1, \pm 2, \ldots
$$

Grating compressors are usually used in a near-Littrow configuration, where the beam is diffracted back in the direction it came from. In this way, very efficient grating compressors can be made, and, in general, blazed gratings are optimised precisely for this case. Low diffraction loss is essential because the light has to be diffracted four times to obtain a wave-independent beam profile, e.g., a spatially coherent beam:

![Attachments/UltraFastLasers_Keller 27.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2027.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=115&rect=208,536,345,605|•]]

Of course, we can also use it in a four-grating configuration:

![Attachments/UltraFastLasers_Keller 26.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2026.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=115&rect=175,435,382,508|•]]

One may derive that for the second-order dispersion:

$$
\frac{\mathrm{d}^2 \phi}{\mathrm{d} \omega^2}=-\frac{\lambda^3 L_{\mathrm{g}}}{\pi c^2 \Lambda^2}\left[1-\left(\frac{\lambda}{\Lambda}-\sin \theta_{\mathrm{i}}\right)^2\right]^{-3 / 2}.
$$

If the pulse has originally been broadened by a dispersive material (positive GDD), the four-grating compressor can compress the pulse again. The dispersion can be adjusted continuously through the distance $L_g$ between the two parallel gratings:

$$
\frac{\mathrm{d}^2 \phi}{\mathrm{d} \omega^2} \propto L_{\mathrm{g}}.
$$

Therefore, the GDD is positive for any *positive* grating separation $L_g$, but negative for any *negative* grating separation. Therefore, we can flip the sign of the GDD, which is especially important for chirped-pulse amplification.

### 3.2.1 Grating Stretcher

Consider another grating configuration with two focusing elements, e.g., lenses:

![Attachments/UltraFastLasers_Keller 28.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2028.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=122&rect=89,102,349,213|•]]

If $L<f$, it acts as a positive-dispersion stretcher, and if $L\>f$, the setup is a negative-dispersion stretcher. When $L=f$, the configuration may be used as a pulse shaper. The GDD for the grating stretcher setup depicted in the figure is given by

$$
\frac{\mathrm{d}^2 \phi}{\mathrm{d} \omega^2}=-\frac{m^2 \lambda^3 M^2 L_{\mathrm{eff}}}{2 \pi c^2 \Lambda^2}\left[1-\left(-m \frac{\lambda}{\Lambda}-\sin \theta_{\mathrm{i}}\right)^2\right]^{-3 / 2},
$$

where $M=f_1/f_2$ is the angular magnification of the telescope, and $L_\text{eff}=L-2(f_1+f_2)$ is the corrected effective path length. With this length, we now have a parameter allowing us to flip the sign of the GDD. By choosing the distance $L$ smaller than the distance between the input and output focal planes of the telescope, we obtain a positive GDD. This is the case shown in the previous figure. In practice, the magnification factor is chosen to be 1.

To understand how this can be used as a grating-based pulse stretcher, it is important to realise that a lens performs a Fourier transform of the incoming wave in the focal plane:

![Attachments/UltraFastLasers_Keller 29.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2029.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=125&rect=90,436,348,608|•]]

The grating introduces angular dispersion, such that every spectral component is diffracted into a fixed direction in space. A lens images each incoming plane wave with a specific angle of incidence to a fixed position in its focal plane separated by a distance $f$ from the lens. Therefore, each frequency component may be addressed individually with a special phase and amplitude mask in the focal plane of the lens:

![Attachments/UltraFastLasers_Keller 30.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2030.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=126&rect=75,215,361,609|•]]

The figure shows:
* a: Pulse shaper in $4f$ design. Does not affect the pulses passing through.
* b: Pulse shaper with linear phase shift. Changes the transit time of the pulse but does not affect the pulse shape.
* c: Pulse shaper with a quadratic phase shift, generating a pulse with positive chirp, e.g., red comes before blue.
* d: Pulse shaper with a quadratic phase shift, generating a pulse with negative chirp, e.g., blue comes before red.

---

## 3.3 Gires-Tournois Interferometer (GTI)
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=128&selection=6,0,8,35|•]]

A Gires-Tournois etalon or interferometer is a non-absorbing reflector with two reflecting surfaces, one of which has very high, ideally 1, reflectivity. The two reflecting surfaces form a Fabry-Pérot interferometer, which ideally reflects 100% of the incoming light but introduces a wavelength-dependent phase shift due to multi-beam interference. Normally, we can neglect all material dispersion:

![Attachments/UltraFastLasers_Keller 31.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2031.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=128&rect=213,65,386,177|•]]

The full intensity is reflected if the left mirror has perfect reflectivity and there is no absorption in the GTI. Then, the GTI reflects everything and introduces no losses:

$$
|R_{\mathrm{GTI}}|=1, \quad \text{and}\quad R_{\mathrm{GTI}}=\exp (i 2 \phi_{\mathrm{GTI}}).
$$

The only parameter that changes is the phase $\Phi_{GTI}$, which becomes strongly frequency-dependent due to the Fabry-Pérot structure. This dependence is much stronger than the material dispersion of the layer thickness $d$, e.g., if no air gap is used, or of the substrate. Tuning the distance with piezos, the GTI can also be used to tune the dispersion. The phase shift is given by

$$
\varphi=nkd,
$$

while the group delay of the GTI is given by (without proof)

$$
T_G=\frac{\mathrm{d}\Phi_{GTI}}{\mathrm{d}\omega}\propto d^2.
$$

The group delay and the GDD increase quadratically with increasing layer thickness $d$. However, the trade-off is that the bandwidth of the GTI decreases with increasing layer thickness:

$$
\text { bandwidth of } \frac{\mathrm{d} T_{\mathrm{g}}}{\mathrm{d} \omega} \propto \frac{1}{d}.
$$

For large negative dispersion, $d$ must be chosen sufficiently large, but this constricts the usable bandwidth so much that short pulses cannot be supported. Usually, air-spaced GTIs are not used for pulses shorter than approximately 100 fs.
The next two figures compare the group delay and GDD for $d=80$ $\mu$m:

![Attachments/UltraFastLasers_Keller 34.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2034.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=130&rect=223,523,382,608|•]]

and $d=2.25$ $\mu$m:

![Attachments/UltraFastLasers_Keller 35.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2035.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=130&rect=223,398,383,483|•]]

---
## 3.4 Mirrors with Controlled Phase Properties
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=132&selection=14,0,16,40|•]]

### 3.4.1 Bragg Mirror
A standard high-reflectance laser mirror is a Bragg mirror, consisting of a stack of quarter-wave ($\lambda/4$) layers with alternating high and low refractive index $n_H$ and $n_L$:

![Attachments/UltraFastLasers_Keller 36.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2036.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=132&rect=111,103,328,163|•]]

A Bragg mirror shows maximum reflectivity at the Bragg wavelength $\lambda_B$. Each individual layer has a thickness $\lambda_B/4$. This is shown as an example for a Bragg mirror with a Bragg wavelength of 630 nm:

![Attachments/UltraFastLasers_Keller 37.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2037.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=133&rect=194,475,385,605|•]]

The fractional width of the stopband (the high reflectance part) depends only on the index ratio between the high- and low-index material:

$$
\frac{\Delta \omega}{\omega_{\mathrm{B}}}=\frac{4}{\pi} \arcsin r.
$$

Within the stopband, there is a linear phase shift and therefore no second-order dispersion. Thus, a pulse will be reflected without distortion within the stopband. This changes drastically as soon as the bandwidth of an ultrashort pulse extends beyond the stopband range.

### 3.4.2 Chirped Mirrors
While the prism pair provides an easy way to compensate for some dispersion, the higher-order dispersion is a huge disadvantage, especially since it starts to become more important for ultrashort pulses. Chirped mirrors overcome this limitation. They gradually decrease the Bragg wavelength, such that longer wavelengths can penetrate deeper into the coating. This broadens the high-reflectance range compared to standard Bragg mirrors and introduces negative GDD. However, the total dispersion that can be obtained from one reflection is not very large, such that these mirrors are only used in the sub-10 fs regime in the near-IR.

Chirped mirrors have one important disadvantage: the dispersion shows unwanted oscillations. It turned out that these can be overcome by using a double-chirped mirror (DCM) setup. This is based on the fact that, in addition to the chirp of the local Bragg wavelength, the initial partial reflection at the beginning of the mirror has to be reduced to avoid the strong GDD-type oscillations. This can be solved with an impedance-matching approach, where a chirp in the thickness of the high-index layer slowly tapers the impedance and therefore reduces the partial reflection. The chirp is in the Bragg wavelength and in the ratio of the high- to low-index layer thickness. Usually, an additional broadband anti-reflection (AR) coating resolves the impedance for the first interface coming from air into the chirped mirror structure:

![Attachments/UltraFastLasers_Keller 38.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2038.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=136&rect=91,419,347,608|•]]

The figure (a) shows a Bragg mirror, (b) shows a single-chirped mirror, and (c) shows a double-chirped mirror with an additional AR coating.

![Attachments/UltraFastLasers_Keller 39.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2039.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=137&rect=112,135,327,237|•]]

A new disadvantage is that the AR coating needs to have a residual reflectivity of below $10^{-4}$, which limits the bandwidth obtainable by a DCM. However, even for this new problem, a solution exists: when the residual reflection does not interfere with the multi-layer DCM stack, these restrictions are lifted. This is obtained by a wedged structure, where the front reflection from the substrate does not interfere with the rest of the mirror stack. The impedance matching from within the substrate into the DCM structure can be made perfect by choosing the refractive index of the substrate to be equal to the refractive index of the first layer. Then, the AR coating only needs to reduce the loss. This concept is called a back-side coated double-chirped mirror, or simply BASIC DCM:

![Attachments/UltraFastLasers_Keller 40.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2040.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=139&rect=169,67,385,122|•]]

Comparing the BASIC DCM to a standard DCM:

![Attachments/UltraFastLasers_Keller 41.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2041.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=140&rect=55,537,383,608|•]]

Clearly, the BASIC DCM extends the reflectivity bandwidth while keeping the residual dispersion oscillations low. However, this design comes at a cost: we introduce additional positive dispersion because the pulse has to propagate through the substrate. This can be compensated for with a higher number of reflections for the chirped mirrors. A more serious disadvantage is that the beams are not spatially coherent because of the angular dispersion introduced by the wavelength-dependent refraction at the wedged substrate. This requires another matched reflection.

Currently, the main limitation in chirped mirror dispersion compensation is the fabrication of such mirrors. Layer deposition errors during fabrication are normally too large and introduce GDD oscillations again.

---
## 3.5 Dazzlers
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=143&selection=52,0,54,8|•]]

A 'dazzler' is just the name for acousto-optic programmable dispersive filters (AOPDFs). In contrast to both SLMs and deformable mirrors, the dazzler does not require high-quality optical elements. It is compact and easy to implement. Consider the following schematic:

![Attachments/UltraFastLasers_Keller 42.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2042.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=144&rect=55,396,385,608|•]]

An acoustic wave is launched into an acousto-optic device, travelling at velocity $v$ along the z-axis. Two optical modes can only be coupled efficiently by acousto-optic interaction if the two optical modes (a fast ordinary axis and a slow extraordinary axis) and the acoustic waves are phase-matched. Since locally, there is only one spatial frequency in the acoustic grating, only one optical frequency can be diffracted at a position z. Every frequency $\omega$ travels a certain distance before it encounters a phase-matched spatial frequency in the acoustic grating. At this position $z(\omega)$, part of the energy is diffracted into the slow extraordinary axis and subsequently travels on that mode. Since the velocities of these two modes are different, each frequency will experience a different time delay. This is usually accomplished by propagating both the acoustic wave and the optical pulse through a birefringent crystal (e.g., a crystal with a direction-dependent refractive index).

Therefore, an almost arbitrary group-delay distribution can be created by properly choosing the spatial shape of the acoustic wave.

---
## 3.6 Dispersion Measurement
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=145&selection=9,0,11,23|•]]

Lastly, we want to discuss how to measure dispersion reliably. The standard way to measure GDD is via white-light interferometry. The output of a broadband light source is fed into the interferometer, typically of the Michelson type. The device under test (DUT) is placed in the sample arm, whereas the reference arm contains optics with known dispersion. The resulting interference pattern is monitored either with a photodiode or using spectral interferometry.

---