---
{"dg-publish":true,"permalink":"/notes/plasmonics/3-excitation-of-surface-plasmon-polaritons-at-planar-interfaces/","hide":"true","updated":"2025-01-28T22:09:03.533+01:00"}
---

Jump back to [[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]].

---
**Table of Contents**

- [[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces#3 Excitation of Surface Plasmon Polaritons at Planar Interfaces\|3 Excitation of Surface Plasmon Polaritons at Planar Interfaces]]
	- [[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces#3 Excitation of Surface Plasmon Polaritons at Planar Interfaces\|3.1 Prism Coupling]]
	- [[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces#3 Excitation of Surface Plasmon Polaritons at Planar Interfaces\|3.2 Grating Coupling]]
	- [[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces#3 Excitation of Surface Plasmon Polaritons at Planar Interfaces\|3.3 Excitation Using Highly Focused Optical Beams]]

---
# 3 Excitation of Surface Plasmon Polaritons at Planar Interfaces 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=56&selection=2,0,3,31|•]]

Surface plasmon polaritons propagating at the flat interface between a conductor and a dielectric are essentially two-dimensional electromagnetic waves. Confinement is achieved since the propagation constant is greater than the wave vector in the dielectric, $\beta > k$, leading to decay on both sides of the interface. Therefore, excitation by three-dimensional light beams is not possible unless special techniques for phase-matching are employed. Alternatively, different geometries may be used.

---
## 3.1 Prism Coupling 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=59&selection=22,0,24,14|•]]

The projection along the interface of the momentum $k_x = k \sin\theta$ is smaller than the SPP propagation constant $\beta$ even at grazing incidence, prohibiting phase-matching. However, phase-matching can still be achieved in a three-layer system with different dielectric constants. Consider one of the materials to be air ($\varepsilon = 1$), such that the beam being reflected at the insulator-metal interface has an in-plane momentum of $k_x = k\sqrt{\varepsilon}\sin\theta$. The insulator in this case would be a prism. Two configurations are possible:

![Attachments/Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces/IMG-0128220903289.webp|700](/img/user/Attachments/Notes/Plasmonics/3%20Excitation%20of%20Surface%20Plasmon%20Polaritons%20at%20Planar%20Interfaces/IMG-0128220903289.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=59&rect=89,106,346,186|•]]

This momentum is sufficient to excite SPPs at the interface between the metal and the lower-index dielectric, air in this case. In this way, SPPs propagating between the light lines of air and the higher-index dielectric (prism) can be excited. This excitation manifests as a minimum in the reflected beam intensity. Note that this phase-matching is impossible at the prism/metal interface since the respective SPP dispersion lies outside the prism light cone (there is no crossing of the curves):

![Attachments/Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces/IMG-0128220903331.webp|700](/img/user/Attachments/Notes/Plasmonics/3%20Excitation%20of%20Surface%20Plasmon%20Polaritons%20at%20Planar%20Interfaces/IMG-0128220903331.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=60&rect=111,470,332,616|•]]

This coupling scheme is also known as **attenuated total internal reflection** and involves tunneling of the fields of the excitation beam to the metal/air interface. The two configurations are called the **Kretschmann method** (left) and the **Otto configuration** (right). 

SPPs excited via phase-matching with $\beta = k\sqrt{\varepsilon}\sin\theta$ are inherently leaky waves, meaning they lose energy not only due to absorption in the metal but also due to leakage radiation in the prism. The minimum in reflected intensity is due to destructive interference between this leakage radiation and the reflected part of the excitation beam. This minimum can be zero for an optimal metal film thickness. This is the case when the damping due to leakage equals the damping due to absorption (critical coupling):

$$
\Gamma_{\text{LR}} = \Gamma_{\text{abs}} = \mathfrak{Im}(\beta_0),
$$

where:

$$
\beta_0 = k_0\sqrt{\frac{\varepsilon_1\varepsilon_2}{\varepsilon_1 + \varepsilon_2}}.
$$

---
## 3.2 Grating Coupling 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=61&selection=149,0,151,16|•]]

Phase-matching can also be achieved by patterning the metal surface with a shallow grating of grooves or holes with lattice constant $a$. In the simple one-dimensional grating of grooves, phase-matching occurs whenever the condition:

$$
\beta = k\sin\theta \pm \nu g,
$$

is fulfilled, where $g = 2\pi/a$ is the reciprocal grating vector, and $\nu = 1, 2, 3, \dots$. The excitation of SPPs is again indicated by a reflection minimum.

![Attachments/Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces/IMG-0128220903382.webp|700](/img/user/Attachments/Notes/Plasmonics/3%20Excitation%20of%20Surface%20Plasmon%20Polaritons%20at%20Planar%20Interfaces/IMG-0128220903382.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=61&rect=126,88,310,221|•]]

The reverse process is also possible: SPPs propagating along a surface modulated with a grating can couple to light and radiate. The grating need not be milled directly into the metal surface; it can also consist of dielectric material. By designing the grating shape, the propagation direction can be influenced, and even focusing can be achieved.

More generally, SPPs can also be excited on films with random surface roughness or manufactured localized scatterers. The phase-matching condition:

$$
\beta = k\sin\theta \pm \Delta k_x,
$$

with the momentum components $\Delta k_x$ provided by scattering, can also be fulfilled.

---
## 3.3 Excitation Using Highly Focused Optical Beams 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=64&selection=39,0,41,45|•]]

Another approach uses a microscopic objective of high numerical aperture, which ensures a large angular spread of the focused excitation beam, including angles $\theta > \theta_c$ greater than the critical angle of total internal reflection at a glass/air interface:

![Attachments/Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces/IMG-0128220903459.webp|500](/img/user/Attachments/Notes/Plasmonics/3%20Excitation%20of%20Surface%20Plasmon%20Polaritons%20at%20Planar%20Interfaces/IMG-0128220903459.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=64&rect=112,117,331,239|•]]

In this way, wave vectors $k_x = \beta$ are available for phase-matching for SPPs at the metal/air interface at the corresponding angle:

$$
\theta_{\text{SPP}} = \arcsin\left(\frac{\beta}{nk_0}\right) > \theta_c.
$$

The excited SPPs will radiate back into the glass substrate as leakage radiation at an angle $\theta_{\text{SPP}} > \theta_c$. The traced path of the excited SPPs for s- and p-polarisation is shown below:

![Attachments/Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces/IMG-0128220903512.webp|500](/img/user/Attachments/Notes/Plasmonics/3%20Excitation%20of%20Surface%20Plasmon%20Polaritons%20at%20Planar%20Interfaces/IMG-0128220903512.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=65&rect=143,528,291,613|•]]

As shown earlier, the second image (s-polarisation) has no trace since there are no surface plasmon polaritons for this polarisation.

---