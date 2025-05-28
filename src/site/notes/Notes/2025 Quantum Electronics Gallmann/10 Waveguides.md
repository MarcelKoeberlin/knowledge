---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics-gallmann/10-waveguides/","hide":"true","updated":"2025-05-27T13:39:50.000+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/2025 Quantum Electronics Gallmann/10 Waveguides#10.1 Planar Mirror Waveguide\|10.1 Planar Mirror Waveguide]]
- [[Notes/2025 Quantum Electronics Gallmann/10 Waveguides#10.2 Planar Dielectric Waveguide\|10.2 Planar Dielectric Waveguide]]
- [[Notes/2025 Quantum Electronics Gallmann/10 Waveguides#10.3 Optical Fibres\|10.3 Optical Fibres]]

---
# 10 Waveguides
[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=69&selection=0,0,0,10|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=227&selection=0,0,0,10|•]]

Waveguides are devices that transmit and guide light and other electromagnetic radiation along a prescribed path. In contrast to traditional free-space optics, this occurs inside a material, and waveguides have the advantage of alignments robustness. They furthercompared have the ability to circumvent obstructions, especially in the case of optical fibres. They are used in telecommunication over long distances, but also in biomedical applications where light is to be brought into or taken from difficult-to-access places. They are the key component of 'integrated optics'. Waveguides come in many different forms, as the following figure shows:

![Attachments/QE_script 2.webp|700](/img/user/Attachments/QE_script%202.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=227&rect=122,180,479,303|•]]

The difference between the two colours is their refractive index. The figure shows from a to c, a slab waveguide, a strip waveguide, and an [[Notes/2025 Quantum Electronics Gallmann/10 Waveguides#10.3 Optical Fibres\|optical fibre]]. 

---
## 10.1 Planar Mirror Waveguide
[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=70&selection=0,23,0,23|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=228&selection=4,0,6,36|•]]

The following figure shows a planar-mirror waveguide, consisting of two highly reflective mirrors placed a distance $d$ apart. This is of course a rather impractical device to construct. Instead, [[Notes/2025 Quantum Electronics Gallmann/10 Waveguides#10.2 Planar Dielectric Waveguide\|dielectric waveguides]] are used, as discussed later. 

![Attachments/QE_script 3.webp|700](/img/user/Attachments/QE_script%203.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=228&rect=143,434,445,560|•]]

One way to treat electromagnetic radiation within this planar-mirror waveguide is by using ray optics. We can identify modes of the waveguides as waves that self-consistently (so constructively) interfere after a single reflection from each mirror, as shown in the next figure:

![Attachments/QE_script 4.webp|700](/img/user/Attachments/QE_script%204.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=229&rect=67,540,533,688|•]]

This imposes conditions on the wavelength and the angle $\theta$ of the wavevector with respect to the mirror planes. We require that the difference in phases acquired from A to B (see figure), compared to the phase acquired from A to C, has to be an integer multiple of $2\pi.$ Considering this geometry, we obtain 
$$
\frac{2\pi}{\lambda}2d\sin\theta=2\pi m\quad \text{with}\quad m\in\mathbb{Z}.
$$
We index the allowed angle with $m,$ such that we obtain
$$
\sin\theta_m=m\frac{\lambda}{2d}.
$$
Therefore it is clear that only a discrete set of angles can fulfil the conditions required for constructive interference. An alternative way to view the same problem is to find the requirements for two plane waves to satisfy the boundary conditions for the plane mirror surfaces. Then, the discretisation of the allowed angles will also discretise the wavevector component in y-direction:
$$
k_y=|\mathbf{k}|\sin\theta\implies k_{y,m}=m\frac{\pi}{d}.
$$
The only nonzero component of the wavevector is in z-direction, and we call this the propagation constant $\beta=k_z=|\mathbf{k}|\sin\theta.$ Since the magnitude of the wavevector is fixed, only a finite number of indices $m$ exist that allow for a real-valued propagation constant:

$$
\beta_m^2=k^2-\frac{m^2 \pi^2}{d^2}.
$$
Modes of higher order (so modes with larger $m$) form a more oblique angle with respect to the mirrors and thus propagate more slowly through the waveguide (meaning their group velocity along the waveguide axis is lower):

![Attachments/QE_script 6.webp|700](/img/user/Attachments/QE_script%206.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=230&rect=122,546,491,683|•]]

Explicitly writing down the total field as superposition of the upward and downward propagating wave, we have at $y=d/2:$
$$
E_{t o t}=\mathfrak{Re}\left[e^{i \omega t}\left(E_1 e^{-i k_{1 y} d / 2-i k_{1 z} z}+E_2 e^{-i k_{2 y} d / 2-i k_{2 z} z}\right)\right].
$$
We require this to be zero for all times, and all values of $z,$ such that we find $k_{1,z}=k_{2,z}.$ Similarly, for the other mirror boundary at $y=-d/2$ we find together
$$
E_1 e^{-i k_{1 y} d / 2}=-E_2 e^{-i k_{2 y} d / 2}\quad\text{and}\quad E_1 e^{i k_{1 y} d / 2}=-E_2 e^{i k_{2 y} d / 2}.
$$
Division leads to 
$$
e^{i k_{1 y} d}=e^{i k_{2 y} d},
$$
and since both medium and frequency are the same for both waves, also $|\mathbf{k}|$ must be the same for both. This implies $k_{1,y}=\pm k_{2,y}.$ We want two different waves and pick the negative sign. We recover
$$
\sin \theta_m=m \frac{\lambda}{2 d}.
$$
For a relation between the fields, we find 
$$
E_1^2=E_2^2,
$$
which implies $E_1=\pm E_2,$ and the sign depends on the value of $m:$ For odd $m,$ we have $+$, while even $m$ leads to $-$.  

### 10.1.1 TE Modes

Now, we readily investigate the electric field profile of the light for a given mode inside the waveguide. This leads to 
$$
\begin{align}
E_{\text{tot}} &=\mathfrak{Re}\left[e^{i(\omega t-\beta z)} E_1\left(e^{-i m \pi y / d} \pm e^{i m \pi y / d}\right)\right]\\&=
\begin{cases}\text{m odd:} &
\mathfrak{Re}\left[\, 2 E_1 e^{i(\omega t - \beta z)} \cos\left( \dfrac{m \pi y}{d} \right) \, \right]  \\[1em]\text{m even:} &
\mathfrak{Re}\left[\, -2i E_1 e^{i(\omega t - \beta z)} \sin\left( \dfrac{m \pi y}{d} \right) \, \right] .
\end{cases}
\end{align}
$$
Therefore, the electric field amplitude as a function of $y$ differs with each mode, while the amplitude is independent on $z.$ This is shown in the following figure:

![Attachments/QE_script 5.webp|700](/img/user/Attachments/QE_script%205.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=231&rect=138,538,470,693|•]]

Odd modes have a nonzero intensity in the centre, while even modes have a node there. The electric field points along the x-axis, which is why we call is transverse electric (TE) mode. The magnetic field has a nonzero z-component by construction of two superimposed TEM waves. The larger $m$ is, the smaller the propagation constant becomes, meaning that the phase fronts propagate slower. 

Planar mirror waveguides are only able to support a finite number of different modes. The number of modes $M$ is limited to 
$$
M=\left\lfloor \frac{2d}{\lambda}\right\rfloor.
$$
Thus, for sufficiently thin waveguides, only a single mode can exist. However, below a minimum thickness of $d_{min}=\lambda/2,$ no mode can exist. Generally, we may also define a cutoff frequency
$$
f_c=\frac{c}{2nd},
$$
below which the waveguide will not work. 

### 10.1.2 TM Modes

Now consider fields where the magnetic field is oriented in the x-direction. This can be treated in a completely analogous manner as before. The mode spacing and number of modes will be exactly the same. What changes is solely the electric field profile:

For $m$ odd:

$$
\begin{aligned}
E_{\mathrm{tot}, y}^{\mathrm{odd}} & =\mathfrak{Re}\left[2 E_1 e^{i\left(\omega t-\beta_m z\right)} \cos \left(\frac{m \pi y}{d}\right) \cot \theta_m\right], \\
E_{\mathrm{tot}, z}^{\mathrm{odd}} & =\mathfrak{Re}\left[2 E_1 e^{i\left(\omega t-\beta_m z\right)} \cos \left(\frac{m \pi y}{d}\right)\right].
\end{aligned}
$$
For $m$ even:

$$
\begin{aligned}
& E_{\mathrm{tot}, y}^{\mathrm{even}}=\mathfrak{Re}\left[-2 i E_1 e^{i\left(\omega t-\beta_m z\right)} \sin \left(\frac{m \pi y}{d}\right) \cot \theta_m\right],\\
& E_{\mathrm{tot}, z}^{\mathrm{even}}=\mathfrak{Re}\left[-2 i E_1 e^{i\left(\omega t-\beta_m z\right)} \sin \left(\frac{m \pi y}{d}\right)\right].
\end{aligned}
$$
Thus, for each mode number, there exists a TE- and a TM-polarised version. 

### 10.1.3 Dispersion Relation

Another way to write the propagation constant is
$$
\beta_m=k \cos \theta_m=\frac{n \omega}{c} \sqrt{1-m^2 \frac{\omega_c^2}{\omega^2}},
$$
written in terms of the cutoff frequency $\omega_c=2\pi f_c.$ This is known as the dispersion relation. This is shown in the next figure.

![Attachments/QE_script 7.webp|700](/img/user/Attachments/QE_script%207.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=234&rect=77,426,529,589|•]]

We can see in (b) that dispersion diagrams for different modes yield similar curves in the $\omega-\beta$ space. For a fixed $\beta,$ higher order modes require a higher frequency to have the same propagation constant. This is related to the light-confinement properties of the device: Shorter wavelengths are confined better than long ones, implying an increasing propagation constant as it becomes more difficult for light to escape the waveguide. For large values of $\omega$ or $\beta,$ the dispersion approaches light cone of free space, so $\omega\longrightarrow c/n\beta.$ This light line is nothing but the dispersion relation of plane waves in a homogeneous medium with a refractive index equal to that of the guiding region, called the _waveguide core_. If the dispersion was outside the light cone, then the propagation constant would become imaginary, such that the wave would be attenuated rather than propagate undisturbed. This kind of wave would be evanescent. Due to the perfect mirrors in our treatment, no evanescently decaying field is possible however, since they force a zero field at the boundary. However, in practice, these damped fields do exists outside the core. 

We can associate an effective refractive index $n_{eff}$ to the propagation constant. It is the refractive index that would give the same constant for a plane wave travelling in an equivalent homogeneous medium:
$$
n_{m, e f f}=\frac{\beta_m}{k_0},
$$
where $k_0=\omega/c$ is the vacuum wavenumber. 

### 10.1.4 Group and Phase Velocity

The group velocity within a waveguide is the speed of a pulse of light propagating through the waveguide. Analogous to the case of a uniform medium, and assuming negligible dispersion in the waveguide core, we have
$$
v_m=\frac{\mathrm{d}\omega}{\mathrm{d}\beta}=\frac{c \cos \theta_m}{n}=\frac{c}{n} \sqrt{1-m^2 \frac{\omega_c^2}{\omega^2}}.
$$
Geometrically, it can be understood as a pulse bouncing along the waveguide. The z-component of the pulse velocity is just the group velocity of the medium projected onto the z-axis. Then, we can understand that it makes sense for higher order modes to travel slower. The group velocity is then always smaller than $c$ and decreases with the mode number for fixed frequency. The phase velocity is
$$
v_{p, m}=\frac{\omega}{\beta_m}=\frac{c}{n_{m, \mathrm{eff}}}.
$$

### 10.1.5 Multimode Fields

Generally, any field distribution that vanishes at the mirrors will be guided. All these contributions may be written as linear superposition of other modes. The modes are the solutions for which the intensity profile is independent of $z.$ The transverse field profile for an arbitrary guided waveform will evolve with propagation due to the different velocities of the underlying modes. 

![Attachments/05_Devices_and_applications 24.webp|700](/img/user/Attachments/05_Devices_and_applications%2024.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=86&rect=53,117,461,452|•]]

---
## 10.2 Planar Dielectric Waveguide
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=234&selection=44,0,46,27|•]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=90&selection=0,27,0,27|•]]

As already mentioned, planar waveguides are practically implemented using two transparent dielectric materials with generally differing refractive indices $n_1>n_2,$ where $n_1$ is the core's refractive index:

![Attachments/05_Devices_and_applications 25.webp|700](/img/user/Attachments/05_Devices_and_applications%2025.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=90&rect=15,153,588,445|•]]

The outer layer is called _cladding_. Rays with sufficiently small angles with respect to the planer interface will experience total internal reflection at the core-cladding interface, thus being confined to the core. As already shown [[Notes/2025 Quantum Electronics Gallmann/3 Reflection and Transmission at Interfaces#3.3 Total Internal Reflection\|earlier]], the critical angle with respect to the surface is
$$
\theta_c=\arccos\left(n_2 / n_1\right).
$$
Similarly to before, we aim to find those modes and spatial profiles that can be confined. There is however one important difference: For total internal reflection, the phase shift of the reflected beam is not $\pi,$ but a value depending on the angle $\theta$ due to the presence of an evanescent wave inside the outer dielectric. The reason is that the transverse field must not need to have a mode exactly at the interface. For TE modes with electric field along x, the phase shift $\phi_r$ is determined by 
$$
\tan \frac{\phi_r}{2}=\sqrt{\frac{\sin^2 \theta_c}{\sin^2 \theta}-1}.
$$

A wave trapped within the waveguide experiences this phase shift twice before tracing its path. Applying this extra shift yields the relation
$$
\tan \left(\pi \frac{d}{\lambda} \sin \theta-m \frac{\pi}{2}\right)=\sqrt{\frac{\sin^2 \theta_c}{\sin^2 \theta}-1},
$$
which is an equation difficult to treat analitically. Instead, we solve it graphically, where LHS and RHS stand for left- and right-hand side, respectively:

![Attachments/05_Devices_and_applications 26.webp|700](/img/user/Attachments/05_Devices_and_applications%2026.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=94&rect=51,164,612,416|•]]

There is a finite number $M$ of solutions, limited by the condition $\theta_m\leq\theta_c.$ The white circle in the bottom right are the solutions for a planar mirror surface. We find
$$
M=1+\left\lfloor\frac{\sin \theta_c}{\lambda / 2 d}\right\rfloor=1+\left\lfloor\frac{2 d}{\lambda_0} \sqrt{n_1^2-n_2^2}\right\rfloor .
$$
This leads to the cutoff frequency
$$
f_c=\frac{1}{\sqrt{n_1^2-n_2^2}} \frac{c}{2 d},
$$
defining the maximum frequency for a single allowed mode. TM modes obtain identical relations. The following figure shows the dispersion diagram for a dielectric slab waveguide and different TE modes:

![Attachments/QE_script 8.webp|700](/img/user/Attachments/QE_script%208.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=236&rect=74,499,306,681|•]]

There are now two light lines, defined by the core and the surrounding cladding. The dispersion curves for guided modes are always between these two light lines, implying that the effect refractive index must be between $n_1$ and $n_2.$ This can also be understood intuitively: It must be larger than $n_2$ (the cladding) to make total internal reflection possible, but it must be smaller than $n_1$ (the core), since that is the value it would reach for free-space propagation in that medium. However, it approaches the core index for better confinement, but approaches the cladding index for weaker confinement (or a decrease in frequency).

From the dispersion relation, we may again calculate the group velocity $v_g=\frac{\partial \omega}{\partial \beta}:$

![Attachments/QE_script 15.webp|700](/img/user/Attachments/QE_script%2015.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=236&rect=317,501,528,683|•]]

As already mentioned, the waveguide structure does not use perfectly reflecting mirrors, which is why there will be evanescent tails spreading into the cladding, see figure (a). The propagation constant in that region is imaginary. This interesting effect allows coupling fields from different waveguides together by bringing them sufficiently close to each other:

![Attachments/QE_script 11.webp|700](/img/user/Attachments/QE_script%2011.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=237&rect=71,225,513,374|•]]

This is called _evanescent field coupling_, as figure (b) shows. The optical power then oscillates back and forth between the two waveguides:

![Attachments/05_Devices_and_applications 29.webp|700](/img/user/Attachments/05_Devices_and_applications%2029.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=102&rect=340,147,724,290|•]]

Waveguides can be implemented as directional couplers, and those can be used in interferometry. It essentially acts as a beamsplitter. Evanescently coupled waveguide arrays can also be used to show the coherence properties of light: Starting from a single waveguide, it is split into more and more waveguides that each interfere with each other. For incoherent light, there is no interference and the output intensity peaks at the centre waveguide. However, for coherent light, the interference pattern essentially shows up as a sampled version:

![Attachments/05_Devices_and_applications 30.webp|700](/img/user/Attachments/05_Devices_and_applications%2030.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=107&rect=462,145,815,453|•]]

Evanescent fields may also be used for sensing applications:

![Attachments/05_Devices_and_applications 32.webp|700](/img/user/Attachments/05_Devices_and_applications%2032.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=114&rect=82,234,429,441|•]]

Molecular targets are captured by receptor molecules at the waveguide surface. This modulates the waveguide mode effective index, observed as phase shift of the propagating optical mode.

### 10.2.1 Numerical Aperture

A useful concept is that of the numerical aperture, defined as
$$
\mathrm{NA}=n_{\text {out }} \sin \theta_{\text {out }},
$$
where $n_{\text {out }}$ and $\theta_{\text {out }}$ are the index of refraction and angle with respect to the waveguide planes in the medium outside the waveguide. For the planar dielectric waveguide, we have 
$$
\mathrm{NA}=\sqrt{n_1^2-n_2^2}.
$$
The numerical aperture is important since it determines the input coupling efficiency of the waveguide. It can be seen as the set of angle defining a cone from which one can efficiently couple light into the waveguide mode. It also defines the cone into which light will diffract after being coupled out of the waveguide into free space. 

![Attachments/05_Devices_and_applications 27.webp|700](/img/user/Attachments/05_Devices_and_applications%2027.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=99&rect=216,334,499,435|•]]

### 10.2.2 Integrated Waveguides

A rapidly growing field in photonics is that of _integrated optics_, with the aim of making integrated circuits that guide, convert and actively switch light signals on a small footprint, at low cost and with very high signal speeds. The following figure shows some examples:

![Attachments/QE_script 12.webp|700](/img/user/Attachments/QE_script%2012.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=238&rect=76,376,360,465|•]]

The darker colour indicates the region of larger refractive index. Higher refractive index contrast allows for better mode confinement, allowing tighter bendings, such that more compact devices may be realised. The next image shows different modes that can be confined depending on the wavelength for a strip waveguide consisting of $\ce{Si}$ on $\mathrm{SiO_2}:$

![Attachments/05_Devices_and_applications 31.webp|700](/img/user/Attachments/05_Devices_and_applications%2031.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=113&rect=395,167,790,334|•]]

---
## 10.3 Optical Fibres
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=238&selection=35,0,37,14|•]] [[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=116&selection=0,0,0,14|•]]

Optical fibres are an important class of waveguides, since they are essential for telecommunication. Similar to electrical cables, they allow light to travel in a flexible structure. Most optical fibres are step-index fibres, where the refractive index changes abruptly some distance away from the optical axis:

![Attachments/05_Devices_and_applications 33.webp|700](/img/user/Attachments/05_Devices_and_applications%2033.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=120&rect=55,147,762,451|•]]

They represent a cylindrical version of a dielectric planar waveguide, where the core is of higher refractive index than the cladding. Generally, the difference in refractive index is very small, but enough to achieve low-loss waveguiding: For example, often silica ($n_\ce{SiO2}=1.44$) is used in combination with germanium-doped silica ($n_\text{doped}=1.46$)  to increase the index compared to the core slightly. Then, the refractive index difference is only $10^{-2}.$  

The principle of operating is very similar to that of the planar waveguide: At small angles, light is totally internally reflected along the core-cladding interface, confining the wave inside the core. The number of modes varies with the diameter of the core. The smaller the core, the fewer modes are supported within the fibre. Some fibres are made to support only a single mode, hence their name _single-mode fibres_. Other with multiple are called _multi-mode fibres_. The output of a single-mode fibre is in very good approximation Gaussian, such that the fibre itself helps cleaning up the beam spatial profile that would distort the beam in free-space. On the other hand, multi-mode fibres do not guarantee such good quality, but they naturally behave as low-pass filter, cutting off unwanted frequencies:

![Attachments/05_Devices_and_applications 34.webp|700](/img/user/Attachments/05_Devices_and_applications%2034.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=121&rect=115,191,664,483|•]]

The following figure shows the field distributions for the first modes in a step-index optical fibre:

![Attachments/QE_script 14.webp|700](/img/user/Attachments/QE_script%2014.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=240&rect=120,421,484,688|•]]

The linearly polarised modes are obtained in the approximation of weak guiding, which is a good approximation for typically low refractive index contrast. However, in the case of large index contrast, one has to distinguish between TE, TM and hybrid modes - the latter being modes where both electric and magnetic fields have a non-zero longitudinal component. 

One can show that a fibre is single-mode if the V parameter is
$$
V=\frac{2 \pi}{\lambda_0} a \mathrm{NA}<2.405
$$
upper bounded. Here, $a$ is the core radius. Therefore, a small core diameter and small NA help. Sufficiently long wavelengths help as well, however they are often dictated by the source of the light and application.

Analogous to the planar dielectric waveguide, light from the outside is only accepted if the angle with respect to the fibre axis $\theta_\text{out}$ satisfies
$$
n_{\text {out }} \sin \theta_{\text {out }}<\mathrm{NA}=\sqrt{n_1^2-n_2^2},
$$
where $n_{\text {out }}$ is the index of the outside material. The numerical aperture can then be used to estimate the input coupling efficiency. It is typically in the range of $0.1$ to $0.25,$ which corresponds to $5^{\circ}$ to $15^{\circ}$ in air. The following figure shows that only small angles are internally reflected, while others (partially) penetrate the core-cladding interface:

![Attachments/05_Devices_and_applications 36.webp|700](/img/user/Attachments/05_Devices_and_applications%2036.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=123&rect=48,211,780,457|•]]

Then it is clear that a large NA corresponds to a wider acceptance cone. This is of practical implications, since it makes coupling light into the fibre easier. The drawback is that they also generally have higher attenuation than the more standard, low NA fibres.

![Attachments/05_Devices_and_applications 37.webp|700](/img/user/Attachments/05_Devices_and_applications%2037.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=124&rect=42,235,770,443|•]]

By solving the Helmholtz equation in cylindrical coordinates, we can find that the solutions in a fibre with core radius $a$ behave as
$$
\begin{aligned}
u(r) &\sim \left\{\begin{array}{lll}
J_l\left(k_T r\right), & r<\text {(a, core)} \\
K_l(\gamma r), & r>\text {(a, cladding)}
\end{array}\right.\\
&=\left\{\begin{array}{lll}
\text{Bessel function of first kind} \\
\text{Modified Bessel function of second kind.}
\end{array}\right.
\end{aligned}
$$
Here, $k_T^2=n_1^2 k_0^2-\beta^2$ and $\gamma^2=\beta^2-n_2^2 k_0^2.$ 
This is shown in the following figure:

![Attachments/05_Devices_and_applications 38.webp|700](/img/user/Attachments/05_Devices_and_applications%2038.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=125&rect=184,92,662,259|•]]

### 10.3.1 Graded-Index Fibres

Another type of optical fibre are the graded-index fibres (GRIN), made of a material where the refractive index is varied continuously from a larger value in the centre along a parabolic path. They are more difficult to make, but have advantages such as smaller mode dispersion. This is due to the non-abrupt transition between the indices. It is this transition from core to cladding, that with appropriate choice of $n_1(r),$ the light never reach the interface, and all of the modes are guided:

![Attachments/05_Devices_and_applications 39.webp|700](/img/user/Attachments/05_Devices_and_applications%2039.webp)[[Notes/2025 Quantum Electronics Gallmann/05_Devices_and_applications.pdf#page=130&rect=146,245,685,485|•]]

Although rays with greater inclination must travel farther, they travel faster such that the travel times are equal for all modes. Note that this effect of 'bending' the light can be seen when sending a laser into a sugar solution, effectively implementing a refractive index gradient. The index is larger at the bottom, and the beam bends downwards. 

Usually, the cladding is not the out-most layer. There is always a so-called 'jacket' which serves as mechanical protection to the fibre. 

### 10.3.2 Fibre Losses

Since telecommunication requires to transmit signals over distances of many thousand kilometres, it is crucial to keep fibre losses in mind. Typically, a constant instrinsic loss coefficient $\alpha$ is considered, measured in decibels per kilometres, $\mathrm{dB}/\mathrm{km}.$ The equation describing the optical power transmitted through a fibre is simply
$$
\frac{d P}{d z}=-\alpha z \implies P(z)=P(0) \exp \left[-\int_0^z \alpha\left(z^{\prime}\right) d z^{\prime}\right]=P_0e^{-\alpha z}.
$$
Clearly, the attenuation coefficient is frequency-dependent (dispersive). It captures multiple origins of losses:
- Material losses: Absorption in the fibre material.
- Rayleigh scattering: Microscopic fluctuations in the material density.
- Waveguide imperfections / Mie scattering: Imperfections at the core-cladding interface, refractive index variations on a scale larger than the optical wavelength. 
- Bending losses: Bending the waveguides increases losses, but is avoidable. 
- Interface/Coupling losses: At connections or other optical elements.
- Mode mismatch
- Waveguide roughness
- ...

Since losses introduce an exponential power drop, decibels are a useful unit:
$$
\operatorname{Loss}[\mathrm{dB}]=-10 \log _{10} \frac{P_{\text {out }}}{P_{\text {in }}}.
$$
It is worth remembering that a factor of $1/2$ corresponds to $-3$ dB losses, while a factor of $1/10$ corresponds to $-10$ dB losses. Typically, power is also expressed in reference to $1$ mW of power. Then, the unit is dBm:

$$
\text { Power }[\mathrm{dBm}]=10 \log _{10} \frac{P[\mathrm{~mW}]}{1 \mathrm{~mW}}.
$$
Logarithmic units have the advantage of turning multiplication and division of multiple elements into additions, respectively subtractions. 

### 10.3.3 Polarisation-Maintaining Fibre

To maintain the input polarisation throughout the fibre, a controlled optical anisotropy is introduced into the transverse fibre profile. This creates a well defined axis and corresponding polarisation eigenstates. Linear polarisation along a major axis will remain in this polarisation state during propagation. Usually, the slow axis is used, as it is somewhat more robust against perturbations. 

---
