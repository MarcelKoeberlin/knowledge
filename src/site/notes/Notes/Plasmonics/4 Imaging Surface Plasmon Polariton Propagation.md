---
{"dg-publish":true,"permalink":"/notes/plasmonics/4-imaging-surface-plasmon-polariton-propagation/","hide":"true","updated":"2025-02-07T10:57:49.000+01:00"}
---

Jump back to ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Plasmonics/4 Imaging Surface Plasmon Polariton Propagation#4.1 Near-Field Microscopy\|4.1 Near-Field Microscopy]]
- [[Notes/Plasmonics/4 Imaging Surface Plasmon Polariton Propagation#4.2 Fluorescence Imaging\|4.2 Fluorescence Imaging]]
- [[Notes/Plasmonics/4 Imaging Surface Plasmon Polariton Propagation#4.3 Leakage Radiation\|4.3 Leakage Radiation]]
- [[Notes/Plasmonics/4 Imaging Surface Plasmon Polariton Propagation#4.4 Scattered Light Imaging\|4.4 Scattered Light Imaging]]

---
# 4 Imaging Surface Plasmon Polariton Propagation 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=70&selection=2,0,3,21&color=important|•]]

While the successful excitation of surface plasmon polaritons (SPPs) using optical techniques can be deduced from a decrease in reflectivity, visualizing the propagation of SPPs away from their excitation region is highly desirable. This visualization allows the determination of the propagation length $L$ and provides insights into the out-of-plane confinement, enabling the assessment of $\hat{z}$, the extent to which the fields penetrate into the dielectric side of the interface.

---
## 4.1 Near-Field Microscopy 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=70&selection=43,0,45,21|•]]

Using near-field optical microscopy in collection mode, also called photon scanning tunneling microscopy, allows for the investigation of SPP propagation with sub-wavelength resolution. A sharp tip is brought close to the surface under study. The tip collects photons by coupling the near field above the surface to propagating modes inside a tapered optical fiber. The resolution of this technique is limited by the size of the tip's aperture, which can reach dimensions of only 50 nm or even less. To study the confinement and propagation of SPPs using this scheme, the tip has to be brought within a distance $\hat{z}$ of the surface. For silver and gold films, this typically requires a gap of about 100 nm.

![Attachments/Plasmonics - Fundamentals and Applications 16.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2016.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=71&rect=142,120,291,249|•]]

To avoid interference with the detection scheme, optical excitation of SPPs usually takes place via prism coupling or tightly focused beams. In figure (a), the near-field image of the uncoated prism face is shown, and in (b), the image at an angle greater than the critical angle is presented. The exponentially decaying tail is due to SPP propagation away from the excitation region.

![Attachments/Plasmonics - Fundamentals and Applications 17.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2017.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=72&rect=94,505,340,613|•]]

---
## 4.2 Fluorescence Imaging 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=74&selection=4,0,6,20|•]]

Instead of locally collecting the optical near field of SPPs using an apertured fiber tip, emitters such as quantum dots can be directly placed in the tail of the SPP field. If the frequency of the propagating SPP lies within the spectral absorption range of the emitter, excitation via SPPs is possible. The intensity of the emitted fluorescence radiation is proportional to the local field intensity at the emitter's position. Therefore, SPP propagation can be mapped by coating the surface with a dielectric film doped with emitters. An example of this is shown for (a) a silver nanoparticle and (b) a silver nanowire.

![Attachments/Plasmonics - Fundamentals and Applications 18.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2018.webp)
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=75&rect=128,131,310,347|•]]

---
## 4.3 Leakage Radiation 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=76&selection=4,0,6,17|•]]

The dispersion curve of SPPs excited at the metal/air interface lies outside the light cone, and the mode does not suffer radiation loss into the air region—assuming a perfectly flat interface with negligible roughness. However, energy can be lost into a supporting substrate with a higher index $n_s$, which occurs at all points on the dispersion curve that lie to the left of the substrate's light line $k_s = n_s\omega/c$. This condition ensures leakage radiation of the SPP into the substrate:
$$
k_0b < \beta < k_0n_s
$$
This provides a second loss channel, in addition to the inherent absorptive losses.

![Attachments/Plasmonics - Fundamentals and Applications 19.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2019.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=76&rect=114,109,332,253|•]]

Apart from observing SPP propagation, this technique can also directly visualize the SPP dispersion relation. The SPPs at the air interface were excited by a focused light beam, using scattering from random surface roughness for phase-matching. Leakage radiation into the silica substrate was imaged using a CCD camera. Image (a) shows a flat film where the radiation is emitted within a cone at the surface plasmon angle $\theta_{SPP}$, defined by $n_sk_0\sin\theta_{SPP} = \beta$, which intersects the plane of the CCD in a circular pattern.

![Attachments/Plasmonics - Fundamentals and Applications 20.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2020.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=78&rect=93,130,350,330|•]]

For light of varying frequencies, the resulting wave vector can be determined by computing the SPP angle of leakage radiation. This allows access to the complex dispersion relation of a structured metal surface.

---
## 4.4 Scattered Light Imaging 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=79&selection=63,0,65,23|•]]

The propagation of SPPs at a metal/air interface can often be imaged by collecting the light lost to radiation due to scattering at random surface protrusions. Scattering at these surface irregularities allows SPPs with wave vector $\beta$ larger than $k_0$ to acquire a momentum component $\Delta k_x$, which can lower $\beta$ into the air light cone region, leading to coupling to the radiation continuum and thus photon emission. For increasingly flat films with good surface quality, the amount of scattering is reduced, making detailed determinations, such as the propagation length, more difficult. This technique also enables the determination of the dispersion relation of SPPs on modulated surfaces.

---