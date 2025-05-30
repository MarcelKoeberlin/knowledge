---
{"dg-publish":true,"permalink":"/notes/plasmonics/4-imaging-surface-plasmon-polariton-propagation/","hide":"true","updated":"2025-05-30T15:22:11.929+02:00"}
---

Jump back to ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Plasmonics/4 Imaging Surface Plasmon Polariton Propagation#4.1 Near-Field Microscopy\|4.1 Near-Field Microscopy]]
[[Notes/Plasmonics/4 Imaging Surface Plasmon Polariton Propagation#4.2 Fluorescence Imaging\|4.2 Fluorescence Imaging]]
[[Notes/Plasmonics/4 Imaging Surface Plasmon Polariton Propagation#4.3 Leakage Radiation\|4.3 Leakage Radiation]]
[[Notes/Plasmonics/4 Imaging Surface Plasmon Polariton Propagation#4.4 Scattered Light Imaging\|4.4 Scattered Light Imaging]]

---
# 4 Imaging Surface Plasmon Polariton Propagation
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=70&selection=2,0,3,21&color=important| ]]

While the successful excitation of surface plasmon polaritons (SPPs) using optical techniques can be deduced from a decrease in reflectivity (as discussed in [[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces\|Chapter 3]]), visualising the propagation of SPPs away from their excitation region is highly desirable. This visualisation allows for the direct determination of key SPP parameters such as the propagation length $L$ (related to $\mathfrak{Im}\left[\beta\right]$) and provides insights into the out-of-plane confinement, for instance, by assessing $\hat{z} = 1/\mathfrak{Re}\left[\kappa_d\right]$, the characteristic decay length of the SPP fields into the dielectric side of the interface.

---
## 4.1 Near-Field Microscopy
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=70&selection=43,0,45,21| ]]

Using near-field optical microscopy in collection mode, often referred to as Photon Scanning Tunnelling Microscopy (PSTM), allows for the investigation of SPP propagation with sub-wavelength spatial resolution. In this technique, a sharp, often metal-coated, tapered optical fibre tip is brought into close proximity (the near-field region) of the surface under study. The tip acts as a local scatterer or collector, coupling the evanescent near-field components of the SPP above the surface to propagating modes inside the optical fibre, which are then guided to a detector. The spatial resolution of this technique is primarily limited by the size of the tip's aperture or the tip's effective interaction area, which can be as small as $50 \, \text{nm}$ or even less.

To effectively study the confinement and propagation of SPPs using this scheme, the tip must be positioned within the evanescent decay length of the SPP field in the dielectric, that is, within a distance comparable to $\hat{z}$ from the surface. For SPPs on silver and gold films in the visible range, interfacing with air, this typically requires maintaining a tip-surface gap of about $50-200 \, \text{nm}$.

![Attachments/Plasmonics - Fundamentals and Applications 16.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2016.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=71&rect=142,120,291,249| ]]

The figure illustrates the PSTM setup where a fibre tip scans the surface to map the SPP field intensity.

To avoid the excitation light directly interfering with the detection scheme, optical excitation of SPPs is usually performed using prism coupling (for instance, Kretschmann configuration) or tightly focused beams from the substrate side. The figures below illustrate PSTM imaging: figure (a) shows a control scan, for example, the near-field image of the uncoated prism face where no SPPs are excited or a region away from SPP excitation, while (b) shows an image where SPPs are excited (for example, on a metal film on the prism, at an angle of incidence greater than the critical angle for total internal reflection). The exponentially decaying intensity pattern observed in (b) as the tip moves away from the SPP excitation line is characteristic of SPP propagation and damping.

![Attachments/Plasmonics - Fundamentals and Applications 17.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2017.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=72&rect=94,505,340,613| ]]

---
## 4.2 Fluorescence Imaging
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=74&selection=4,0,6,20| ]]

Instead of locally collecting the optical near field of SPPs with an apertured fibre tip, an alternative imaging approach involves placing fluorescent emitters (such as organic dye molecules, quantum dots, or nitrogen-vacancy centres) directly within the evanescent tail of the SPP field. If the frequency of the propagating SPP lies within the spectral absorption range of these emitters, they can be excited by the SPP field. The subsequent emitted fluorescence radiation can then be collected using far-field optics (for instance, a microscope objective and camera).

The intensity of the emitted fluorescence is, under non-saturating conditions, proportional to the local excitation rate, which in turn is proportional to the local electric field intensity of the SPP at the emitter's position. Therefore, SPP propagation can be mapped by coating the metal surface (or an adjacent dielectric layer) with a thin film doped with such emitters. An example of this is shown for SPPs excited by (a) a silver nanoparticle and (b) a silver nanowire, which act as local launchers for SPPs. The fluorescence pattern reveals the spatial distribution of the SPP fields.

![Attachments/Plasmonics - Fundamentals and Applications 18.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2018.webp)
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=75&rect=128,131,310,347| ]]

---
## 4.3 Leakage Radiation
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=76&selection=4,0,6,17| ]]

As discussed previously, the dispersion curve of SPPs at a metal/dielectric interface (such as metal/air, with dielectric constant $\varepsilon_d$) lies to the right of the light line of that dielectric ($k_0\sqrt{\varepsilon_d}$). This means $\beta > k_0\sqrt{\varepsilon_d}$, so the SPP is a non-radiative mode with respect to the superstrate dielectric, assuming a perfectly flat interface and a semi-infinite metal.

However, if the metal film supporting the SPP is thin and situated on a substrate with a higher refractive index $n_s$ (dielectric constant $\varepsilon_s = n_s^2 > \varepsilon_d$), energy can be lost by leakage radiation into this substrate. This occurs for SPP modes whose propagation constant $\beta$ satisfies the condition:
$$
k_0\sqrt{\varepsilon_d} < \beta < k_0 n_s.
$$
The left inequality ensures the mode is bound to the metal/superstrate interface (evanescent in the superstrate, where $\varepsilon_d$ is the dielectric constant of the superstrate, often air so $\varepsilon_d \approx 1$), while the right inequality indicates that the SPP wave vector is smaller than that of light propagating in the substrate, allowing for phase-matched radiation into the substrate. This leakage radiation provides an additional loss channel for the SPP, complementing the inherent absorptive losses within the metal.

![Attachments/Plasmonics - Fundamentals and Applications 19.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2019.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=76&rect=114,109,332,253| ]]

The figure illustrates the SPP dispersion curve relative to the light lines of the superstrate, for example air, and a higher-index substrate. Leakage radiation occurs in the region where $\beta$ is between the two light lines.

Apart from being a loss mechanism, leakage radiation microscopy can be used to image SPP propagation and even to directly map parts of the SPP dispersion relation. In a typical setup, SPPs are excited at the metal/superstrate (for example, metal/air) interface, for instance, by a focused light beam using surface roughness or a local scatterer for phase-matching. The leakage radiation emitted into the substrate (such as glass) is then collected by a microscope objective and imaged onto a CCD camera.

Image (a) below shows a real-space image where SPPs are launched from a point and propagate outwards, with their paths visualised by the leakage radiation. Image (b) could be a Fourier-plane (or back-focal-plane) image. For a flat film, if SPPs are excited over a range of in-plane directions, the leakage radiation is emitted into the substrate within a cone at a specific angle $\theta_{\text{SPP}}$ relative to the interface normal. This angle is defined by the phase-matching condition $n_s k_0 \sin\theta_{\text{SPP}} = \mathfrak{Re}\left[\beta\right]$. This cone intersects the detection plane (for instance, a CCD in the Fourier plane of the objective) as a ring pattern.

![Attachments/Plasmonics - Fundamentals and Applications 20.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2020.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=78&rect=93,130,350,330| ]]

By analysing the radius of this ring (which corresponds to $\sin\theta_{\text{SPP}}$) for light of varying frequencies $\omega$, the propagation constant $\mathfrak{Re}\left[\beta(\omega)\right]$ can be determined. This technique allows access to the complex dispersion relation of SPPs on both smooth and structured metal surfaces.

---
## 4.4 Scattered Light Imaging
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=79&selection=63,0,65,23| ]]

The propagation of SPPs at a metal/air (or metal/dielectric) interface can often be imaged by collecting light that is scattered out of the SPP mode due to surface roughness or engineered scatterers. SPPs are bound modes with an in-plane wave vector $\beta > k_0\sqrt{\varepsilon_d}$ (where $\varepsilon_d$ is the permittivity of the dielectric). For these SPPs to convert into photons radiating into the dielectric, their momentum must be altered to match that of radiative modes (whose in-plane wave vector components $k_x'$ satisfy $|k_x'| \le k_0\sqrt{\varepsilon_d}$).

Surface irregularities (such as protrusions, defects, or grain boundaries) can provide the necessary in-plane momentum change, $\Delta \mathbf{k}_{\text{surface}}$. When an SPP with wave vector $\mathbf{\beta}$ interacts with such a feature, it can scatter into various directions. If the in-plane component of the wave vector of a scattered photon, $\mathbf{k}_{\text{photon, in-plane}} = \mathbf{\beta} + \Delta \mathbf{k}_{\text{surface}}$ (vector sum), satisfies $|\mathbf{k}_{\text{photon, in-plane}}| \le k_0\sqrt{\varepsilon_d}$, the SPP energy can be converted into emitted photons. This scattered light can then be collected by conventional far-field microscopy.

For increasingly flat films with high surface quality, the amount of scattering is significantly reduced, making this technique less efficient and detailed determinations (such as the propagation length $L$) more challenging. However, this method is versatile and can also be applied to determine the dispersion relation of SPPs on intentionally modulated surfaces (gratings) or to study the interaction of SPPs with localised nanostructures.

---