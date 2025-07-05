---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/plasmonics/3-excitation-of-surface-plasmon-polaritons-at-planar-interfaces/","updated":"2025-06-28T23:27:56.949+02:00"}
---


Jump back to ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces#3.1 Prism Coupling\|3.1 Prism Coupling]]
[[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces#3.2 Grating Coupling\|3.2 Grating Coupling]]
[[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces#3.3 Excitation Using Highly Focused Optical Beams\|3.3 Excitation Using Highly Focused Optical Beams]]

---
# 3 Excitation of Surface Plasmon Polaritons at Planar Interfaces
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=56&selection=2,0,3,31| ]]

Surface plasmon polaritons (SPPs) propagating at the flat interface between a conductor and a dielectric are essentially two-dimensional electromagnetic waves. Their confinement is a consequence of their propagation constant $\beta$ being greater than the wave number $k = k_0 \sqrt{\varepsilon_d}$ of light in the adjacent dielectric medium (where $\varepsilon_d$ is the dielectric permittivity of the dielectric), or $\beta > k_0 \sqrt{\varepsilon_d}$. This condition leads to evanescent decay of the SPP fields on both sides of the interface. Therefore, direct excitation of SPPs by three-dimensional light beams incident from the dielectric onto a smooth metal surface is not possible, as the in-plane wave vector component of the incident light ($k_x = k_0 \sqrt{\varepsilon_d} \sin\theta$) is always smaller than $\beta$. Special techniques for phase-matching are required to overcome this momentum mismatch.

---
## 3.1 Prism Coupling
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=59&selection=22,0,24,14| ]]

Direct illumination of a smooth metal/dielectric (for example metal/air) interface from the dielectric side cannot excite SPPs because the maximum in-plane momentum provided by the incident light, $k_x = k_0 \sqrt{\varepsilon_{\text{incident}}} \sin\theta$, is limited by $k_0 \sqrt{\varepsilon_{\text{incident}}}$ (at grazing incidence $\theta=90^\circ$), which is smaller than the SPP propagation constant $\beta$. However, phase-matching can be achieved by introducing a third medium with a higher refractive index, typically a prism, to increase the incident wave vector.

Consider a prism (material P, dielectric constant $\varepsilon_P$) adjacent to a thin metal film (M, $\varepsilon_M$), which is in contact with a lower-index dielectric (D, $\varepsilon_D$, often air where $\varepsilon_D \approx 1$). Light incident through the prism onto the prism/metal interface at an angle $\theta$ has an in-plane wave vector component $k_x = k_0 \sqrt{\varepsilon_P} \sin\theta$. If $\varepsilon_P > \varepsilon_D$, this $k_x$ can be made large enough to match the SPP propagation constant $\beta$ at the metal/dielectric (M/D) interface on the other side of the metal film. Two common configurations are:

![Attachments/Plasmonics - Fundamentals and Applications 11.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2011.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=59&rect=89,107,347,182| ]]

This enhanced momentum $k_x$ can match $\beta_{\text{SPP}}$ for SPPs at the interface between the metal and the lower-index dielectric (D). This allows excitation of SPPs that propagate with $\beta$ values lying between the light lines of the lower-index dielectric (D) and the higher-index dielectric (prism, P). This excitation manifests as a minimum in the intensity of the light reflected from the prism base, a phenomenon known as **Attenuated Total Reflection (ATR)**. The coupling involves the tunnelling of the evanescent fields (created by total internal reflection at the prism/metal interface if the metal is thin enough, or at the prism/gap interface in Otto) to the metal/dielectric (M/D) interface.

The two configurations shown are:
1.  **Kretschmann configuration** (left): Light is incident through a prism onto a thin metal film deposited directly on the prism base. SPPs are excited at the outer metal/dielectric interface.
2.  **Otto configuration** (right): Light is incident through a prism, which is separated from a bulk metal surface by a small gap filled with a low-index dielectric (typically air). SPPs are excited at the metal/gap interface.

Note that direct phase-matching to excite SPPs at the prism/metal (P/M) interface itself is generally not possible because the SPP dispersion curve for that interface (if it were to exist and be relevant) would typically lie outside the light cone of the prism material (so $\beta_{SPP, P/M} > k_0 \sqrt{\varepsilon_P}$), meaning no real angle $\theta$ could provide matching. The focus is on exciting SPPs at the M/D interface.

![Attachments/Plasmonics - Fundamentals and Applications 12.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2012.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=60&rect=111,470,333,611| ]]

The figure illustrates how the SPP dispersion curve at the metal/air interface can be reached by the light line from the prism, while an SPP at a prism/metal interface would be inaccessible.

SPPs excited via prism coupling are inherently "leaky" if the metal film is thin enough (Kretschmann) or the gap is appropriate (Otto), meaning they can re-radiate energy back into the prism. The minimum in reflected intensity occurs due to destructive interference between the directly reflected light and this leakage radiation. An optimal metal film thickness (Kretschmann) or gap distance (Otto) can lead to near-zero reflection. This occurs under **critical coupling**, where the radiative damping rate (leakage back into the prism, $\Gamma_{\text{rad}}$) equals the intrinsic damping rate of the SPP due to absorption in the metal ($\Gamma_{\text{abs}}$).
If $\beta_0$ is the complex propagation constant of the SPP at the M/D interface in the absence of the prism, $\Gamma_{\text{abs}} = \operatorname{Im}\{\beta_0\}$. Critical coupling implies $\Gamma_{\text{rad}} \approx \operatorname{Im}\{\beta_0\}$.

---
## 3.2 Grating Coupling
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=61&selection=149,0,151,16| ]]

Phase-matching to excite SPPs can also be achieved by patterning the metal surface (or an adjacent dielectric surface) with a periodic structure, such as a grating of grooves or holes with a lattice constant $a$. For a simple one-dimensional grating, incident light with an in-plane wave vector component $k_x = k_0 \sqrt{\varepsilon_d} \sin\theta$ can couple to an SPP if its momentum is augmented by integer multiples of the grating vector $g = 2\pi/a$. Phase-matching occurs when:

$$
\beta = k_0 \sqrt{\varepsilon_d} \sin\theta \pm \nu g,
$$

where $\nu = 1, 2, 3, \dots$ is an integer representing the diffraction order. The excitation of SPPs is typically observed as a minimum in the reflectivity of the incident light at specific angles or wavelengths satisfying this condition.

![Attachments/Plasmonics - Fundamentals and Applications 13.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2013.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=61&rect=121,88,310,217| ]]

The reverse process is also important: SPPs propagating along a periodically modulated surface can scatter and radiate into free-space light. By designing the grating geometry (shape, period, depth), the direction and polarisation of the out-coupled light can be controlled, and even focusing of light can be achieved.

More generally, SPPs can also be excited on metal films with random surface roughness or by using localized scatterers (like nanoparticles or defects). In these cases, the scatterers provide a broad range of momentum components $\Delta k_x$. The phase-matching condition can be written as:

$$
\beta = k_0 \sqrt{\varepsilon_d} \sin\theta \pm \Delta k_x,
$$

allowing for coupling over a wider range of incident angles and frequencies, albeit typically with lower efficiency than optimized periodic structures.

---
## 3.3 Excitation Using Highly Focused Optical Beams
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=64&selection=39,0,41,45| ]]

Another method to excite SPPs involves using a high numerical aperture (NA) microscope objective to tightly focus the incident light beam onto the metal surface, typically through a glass substrate (similar to an immersion lens scenario). A high NA objective produces a focused spot containing a broad angular spectrum of incident plane waves. Some of these plane waves will have angles of incidence $\theta$ (inside the glass, numerical aperture $n \sin\theta$) greater than the critical angle $\theta_c = \arcsin(\sqrt{\varepsilon_{\text{air}}/\varepsilon_{\text{glass}}})$ for total internal reflection at the glass/air interface (if the metal film is on the air side).

![Attachments/Plasmonics - Fundamentals and Applications 14.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2014.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=64&rect=112,119,331,244| ]]

The evanescent fields generated by these components undergoing total internal reflection at the substrate/metal interface can provide the necessary momentum to phase-match SPPs at the outer metal/air interface. The in-plane wave vector available from the focused beam within the substrate (refractive index $n_{\text{sub}}$) is $k_x = n_{\text{sub}} k_0 \sin\theta$. For SPP excitation at the metal/air interface, phase matching occurs for components at an angle $\theta_{\text{SPP}}$ such that:

$$
\beta = n_{\text{sub}} k_0 \sin\theta_{\text{SPP}}.
$$

Since $\beta > k_{0,\text{air}}$, this requires $n_{\text{sub}} \sin\theta_{\text{SPP}} > 1$, meaning $\theta_{\text{SPP}}$ must be greater than the critical angle for the substrate/air interface ($\theta_c = \arcsin(1/n_{\text{sub}})$).

The excited SPPs propagate along the metal/air interface and can subsequently leak radiation back into the substrate at this same angle $\theta_{\text{SPP}}$, due to the reciprocity of the coupling mechanism. This leakage radiation can be collected by the same objective. The images below illustrate the path of excited SPPs and their leakage radiation for p-polarised (TM) and s-polarised (TE) incident light.

![Attachments/Plasmonics - Fundamentals and Applications 15.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2015.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=65&rect=145,529,292,612| ]]

As established in [[Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces#2.2 Surface Plasmon Polaritons at a Single Interface\|Chapter 2]], SPPs are TM modes. Consequently, efficient excitation and subsequent leakage radiation are observed for p-polarised incident light, while s-polarised light does not couple to SPPs at a simple planar interface, resulting in no SPP trace in the corresponding image.

---