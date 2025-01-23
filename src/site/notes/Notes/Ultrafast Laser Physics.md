---
{"dg-publish":true,"dg-path":"Notes/Ultrafast Laser Physics","permalink":"/notes/ultrafast-laser-physics/","updated":"2025-01-23T11:46:58.000+01:00"}
---

For my notes of 'ultra-fast laser physics' 2023, taught by Prof. Gallmann, please visit the exam collection of the VMP [here](https://exams.vmp.ethz.ch/user/mkoeberlin/document/lecture-notes). The pdf might load for quite a while, since its 182 MBs of size. At the same time, I am working on transcoding these notes to the markdown format used on this website. However this is a quite intense process, so it might take some weeks for it to appear here below. However, be assured that the quality will be even higher!

# 1 Linear Pulse Propagation
The discussion starts a monochromatic wave, which is a superposition of plane waves and is mathematically described by:
$$ \begin{align*}
E(z, t)=E_0 e^{i(\omega t-k z)}=F^{-1}(\tilde{E}(z, w)):=\frac{1}{2 \pi} \int d \omega \cdot \tilde{E}(z, w) e^{i \omega t}.
\end{align*} $$
Its _spectrum_ is defined as
$$S(\omega)=\left|\mathcal{F}(E(z,t))\right|^2=\left|\tilde{E}(\omega)\right|^2,$$
where we will use the tilde notation to express that a quantity is in reciprocal space, instead of real space. The more waves are superimposed, the more and more narrow the wave becomes, until it ultimately looks like a Dirac delta function. 
In a dispersive medium, some quantities change: 
 $$\begin{align}v_p(\lambda)=\frac{c}{n(\lambda)}=\frac{\omega}{k_n} &&\text {and}&& \lambda_n=\frac{\lambda}{n} &&\text {and} &&k_n=\frac{2 \pi}{\lambda_n}=k_n=\frac{\omega}{c} n=\frac{\omega}{v_p}.\end{align}$$
The Kramers-Kronig relation allows us to find the refractive index $n(\lambda)$, given the absorption spectrum. Since $n(\lambda)$ decreases with the wavelength $\lambda$ in the visible spectrum, and $\lambda_{\text {red }}>\lambda_{\text {blue, }}$ we find $n_{\text {blue }}>n_{\text {red }}$.
> [!question] Image

Further using $v_p(\lambda)=\frac{c}{n(\lambda)}$, we see that blue light is slower than red, such that the light pulse spreads over time

## 1.1 Helmholtz Equation

Starting withthe wave equation for a homogeneous dielectric material without free charges and without electric currents, 
$$\nabla^2 E(z, t)-\frac{1}{c^2} \partial_t^2 E(z, t)=\mu_0 \partial_t^2 P(z, t),$$
we may Fourier transform this equation. Since we know that $\partial_t \longleftrightarrow i w$, and $\tilde{P}(z, w)=\chi(w) \cdot \varepsilon_0 \tilde{E}(z, w)=(\varepsilon(w)-1) \varepsilon_0 \tilde{E},$ we find: 
$$\left(\partial_z^2+k_n^2(w)\right) \tilde{E}(z, w)=0,$$
the Helmholtz equation. Here, the refractive index dependent wavevector is $k_n(w)=\frac{w}{c} n(w)=\frac{w}{c} \sqrt{\varepsilon(w)}$. The solutions are found to be counter-propagating plane waves: 
$$\tilde{E}(z, w)=\tilde{E}_0^{\dagger} e^{-i k_n(\omega) z}+ \text{h.c}.$$

## 1.2 Linear System Theory

Note that this topic was covered only very briefly in the course, but for a better, more in-depth discussion, please see my notes on [[Notes/Signals and Systems\|Signals and Systems]]. 

Consider the input $E_{\text {in }}(t)=\delta(t)$ into a system, which leads to an output $E_{\text {out }}(t)=h(t)$. Linear systems have the very powerful property, that knowing the output to the delta function (formally the unit impulse) gives us the ability to actually know the output to _any_ input. For an arbitrary input:
$$ \begin{align*}
E_{\text {out }}(t)=\int d t^{\prime}\cdot h\left(t^{\prime}\right) E_{\text {in}}\left(t-t^{\prime}\right) =h(t) * E_{\text {in}}(t).
\end{align*} $$
Note that the symbol $*$ indicates convolution. This statement is equivalent, by Fourier transforming, to 
$$  \tilde{E}_{\text {out }}(w)=\tilde{h}(w) \cdot \tilde{E}_{\text {in }}(w).$$
This is a very simple equation, and also the reason why $h$ is called the transfer function of the system! From this equation we immediately see an important implication: Linear systems are not able to generate new frequencies, but can only adjust amplitude and phase. Next, we define the spectral power as 
$$P_{\text {in }}(w)=\left|\tilde{E}_{\text {in }}(\omega)\right|^2,$$
which leads to
$$P_{\text {out }}=\left|\tilde{E}_{\text {out }}\right|^2=\underbrace{|\tilde{h}(w)|^2}_{S(w)} \cdot\left|\tilde{E}_{\text {in }}(\omega)\right|^2=S(w) \cdot P_{\text {in }}(w).$$
With this, we can read the transfer function as $\tilde{h}(w)=e^{i k_n(w) z},$ which is a pure phase factor for $k_n \in \mathbb{R}$. This implies that the spectrum is $S(w)=1$ and that the power remains unchanged, $P_{\text {in }}=P_{\text {out }}$. Therefore, a non-absorbing linear medium can not change the power spectrum, but can only broaden the pulse in time domain, as can be seen from $E_\text{out}$.
## 1.3 Laser Pulse

A general light pulse can written as $E(t)=A(t) e^{i w_0 t}$ where $A(t)$ is called the slowly-varying envelope, while $e^{i \omega_0 t}$ contains a fast variation at a fixed position that we call "carrier". 
Then, we may write 
$$A(t)=\frac{1}{2 \pi} \int d \Delta w \cdot \tilde{A}(\Delta w) e^{i \Delta \omega t},$$
such that $A(\Delta w)=\tilde{E}\left(w_0+\Delta w\right)$ is shifted and $\Delta w=w-w_0$.
Next, consider a Gaussian pulse:
$$E_{\text {gaussian }}(t)=e^{-\Gamma t^2} e^{i \omega_0 t}=e^{-\Gamma_1 t^2} e^{i \phi_{\text {tot }}},$$
such that $\omega(t)=\frac{d \phi_{\text {tot }}}{d t}=\omega_0+2 \Gamma_2 t$ and $\tau_p=\sqrt{\frac{2 \ln 2}{\operatorname{Re} \Gamma}}$. We have used the notation $\Gamma=\Gamma_1-i \Gamma_2$ and $T_{\phi_{\text {tot }}}=\omega_0 t+\Gamma_2 t^2$. A time-dependant instantaneous frequency $\omega(t)$ is called a _chirp_, which is the case for $\Gamma_2 \neq 0$. The pulse length/width $\tau_p$ is defined as the full-width-half-maximum (short: **FWHM**) of the intensity $I(t)=|E(t)|^2$. The pulse width defined in this way is not at all a sensitive measure. Therefore, the rms-pulse duration is often also used:
$$\tau_{r m s}^2=\left\langle(t-\langle t\rangle)^2\right\rangle,$$
where 
$$\langle t\rangle=\frac{\int d t \cdot t \cdot I(t)}{\int d t \cdot I}$$
is the 'centre of gravity'. As it turns out, a constant phase (e.g. $\frac{\partial \phi(\omega)}{\partial w}=0$) yields the shortest rms pulse duration $\tau_{\text {rms}}$,  where $\phi(\omega)=\varphi(\omega)-\omega\langle t\rangle$ for 
$$\tilde{E}(\omega)=|\tilde{E}(\omega)| \cdot e^{i \varphi(\omega)}.$$
>[!DANGER] Work in progress from here one


## 1.4 Optical dispersion

Move generally, we define it as $\frac{\partial^2 \varphi}{\partial w^2}>0$ for $\varphi(w)=k_n(w) \cdot z(w)$
We define negativelanomalous dispersion as $\frac{\partial^2 n}{\partial w^2}<0$ and $\frac{\partial^2 n}{\partial \lambda^2}<0$.
Move generally, we define it as $\frac{\partial^2 \varphi}{\partial w^2}<0$ for $\varphi(w)=k_n(w) \cdot z(w)$

The dispersion is positive in the visible spectrum, but negative for large $\lambda$.

Thus, around a wavelength $\lambda \sim 1-2 \mu \mathrm{~m}$, we get no dispersion.
## 1.5 Slowly-varying approximation
Write $E(z, t)=A(z, t) \cdot e^{i\left(w_0 t-k_n\left(w_0\right) z\right)}$ or $\tilde{E}\left(z_1 w_0+\Delta w\right)=\tilde{A}(z, \Delta w) e^{-i k_n\left(w_0\right) z}$, and plug it into the Helmholtz equation.

Approximate $\left|\partial_z A\right| \ll\left|k_n\left(w_0\right) A\right|$ so that the envelope changes little over one wavelength.

Further approximate $\left|\partial_t A\right| \ll\left|w_0 A\right|$ so that the envelope changes little over one field oscillation period.

Together, we can neglect $\partial_z^2 \tilde{A}$ and find $\partial_z \tilde{A}(z, \Delta w)+i \cdot \Delta k_n \tilde{A}(z, \Delta w)=0$ with $\Delta k_n=k_n\left(w_0+\Delta w\right)-k_n\left(w_0\right) \ll k_n$.
The solution is $\tilde{A}(z, \Delta w)=\tilde{A}(0, \Delta w) e^{-i \Delta k_n z}$, implying that each frequency obtains a different phase shift $\Delta k_n z$.
$$ \begin{align*}
\int \Delta w=w-w_0 \ll w_0
\end{align*} $$

Expanding $k_n(w) \approx k_n\left(w_0\right)+k_n^{\prime}\left(w_0\right) \Delta w+\frac{1}{2} k_n^{\prime \prime}\left(w_0\right) \Delta w^2$ allows us to define orders of dispersion.
$1^{\text {st }}$ order dispersion is $k_n^{\prime}=\frac{d k_n}{d w}$ or group delay $G D=\frac{d \phi}{d \omega}$.
$2^{n d}$ order dispersion is $k_n^{\prime \prime}=\frac{d^2 k_n}{d \omega^2}$ or group delay dispersion GDD $=\frac{d^2 \phi}{d \omega^2}$.
The phase velocity is $V_p=c_n=\frac{c}{n}=\frac{\omega}{k_n(w)}$ and the group velocity $V_g(w)=\frac{1}{k_n^{\prime}(\omega)}=\frac{\partial \omega}{\partial k_n}$
They are identical in vacuum. Then, the group delay is $T_g=\frac{z}{v_g}=k_n^{\prime} \cdot z$. neglect the 1 and get $\tau_p(z) \approx \frac{d^2 \phi}{d w^2}$. $\Delta w_p$ where the FWHM of $\tilde{I}(w)$ is $\Delta f_p=2 \pi \cdot \Delta w_p$ and $\phi=k_n z=k n L_d$ is more $C$ LD $=$ long ale
the accumulated phase shift of a plane wave in dispersive medium after $L_d$.

Only second and higher order dispersion contributes to pulse broadening, and a gaussian stays gaussian.
The Sellmeier relation is $n^2-1=\sum_k B_k \frac{\lambda^2}{\lambda^2-C_k}$

The wigner-distribution is $w(t, w)=\int d t^{\prime} \cdot e^{-i w t^{\prime}} \cdot E\left(t+\frac{t^{\prime}}{2}\right) E^x\left(t-\frac{t^{\prime}}{2}\right)=\int d w^{\prime} e^{-i w^{\prime} t} \cdot \tilde{E}\left(w+\frac{w^{\prime}}{2}\right) \tilde{E}^x\left(w-\frac{w^{\prime}}{2}\right)$
Its relation to intensity is $I(t)=\int w(t, w) d w$ and $\tilde{I}(w)=\int w(t, w) d w$, e.g its projection on the time or frequency axis yields $I(t)$ or $\tilde{I}(w)$.

If $\phi(w)=k \cdot n(w) \cdot L$ is of $n-t h$ order, the angular frequency $w(t)$ is of order $n-1$. so, if $\phi(w) \sim\left(w-w_0\right)^2$,
the chirp is linear. Note, that an even dispersion order gives a symmetric pulse distortion in $I(t)$.

For general $\phi(\omega)$, the chirp is almost perfectly linear.

If we expand $\phi(w)=\phi\left(w_0\right)+\frac{\partial \phi}{\partial w}\left(w-w_0\right)+\ldots$, we see that GDD is important if $\frac{\partial^2 \phi}{\partial w^2}>\tau_0^2$ and $70 D$ is important if $\frac{\partial^3 \phi}{\partial \omega^3}>\tau_0^3$, where $\tau_0 \sim \frac{1}{\Delta w}$ is the transform limited pulse duration, and $\Delta w$ the pulse bandwidth.

The condition for TOD to be important is equivalent to $L_D^{\prime}<L_D$.
Defining the dispersion lengths as $L_D=\frac{\tau_0^2}{\left|k_n^{\prime \prime}\right|}$ and $L_D^{\prime}=\frac{\tau_0^3}{\left|k_n^{\prime \prime \prime}\right|}$, we find $\frac{\tau_p(z)}{\tau_p(0)} \approx z \sqrt{1+\frac{1}{L_D^2}+\left(\frac{1}{2 L_D^{\prime}}\right)^2}$ for $z>L_D$.
# 2 Dispersion compensation
- pulses become upchirped

Most materials have positive dispersion in the visible range, and to undo it, we need to create negative dispersion.
We need to find a way to make blue faster.
## 2.1 Prism pairs (refraction)

Reflection losses are minimized if the angle of incident is the Brewster's angle.

Further, we choose the apex angle $\alpha$ such that the beam path is symmetric, and the deviation angle $\delta$ minimal.

Then, $\theta_1\left(\lambda_0\right)=\theta_2\left(\lambda_0\right)=\theta_B$.

Then, we have $\tan \theta_B=n\left(\lambda_0\right)=\frac{n_2}{n_1}$ and $\alpha=\pi-2 \theta_B$

Placing a prism on a rotating table, one can measure $\delta_{\min }$ and $\alpha\left(\delta_{\min }\right)$, angle of incidence one finds $n=n\left(\delta_{\min } \alpha\left(\delta_{\min }\right)\right)$ and thus $\theta_2(\lambda)$.

The optical path length $P=2 \overline{C D E}=2 \overline{A B}=2 L \cos \beta$.

We can see that a prism pair defines a horizon wavelength $\lambda_n$, so that all wavelengths $\lambda_n$ miss the second prism.

Neglecting dispersion of air, we have the phase shift $\phi_p(\lambda)=k_n(\lambda) z=k \cdot p(\lambda)$ with $n=1$.
Through $P=P\left(\beta(n(\lambda))\right.$ ), we find $\frac{d^2 \phi_P}{d \lambda^2} \sim \frac{d^2 P}{d \lambda^2} \approx-8 \cdot\left(\frac{d n}{d \lambda}\right)^2 L<0$ for $\beta \approx 0$, implying negative $G D D$.
By continously moving the second prism vertically, we can adjust the GDD.

To adjust the GDD, we move the second prism continously vertically. The trade off is a larger horizon wavelength $\lambda_h$, and wavelengthes $\lambda<\lambda_h$ are lost.

More negative dispersion $\longleftrightarrow$ Larger $\lambda_h$.
## 2.2 Grating compressor (diffraction)
The angular dispersion is $V_{x, m}=\frac{m}{\Lambda}$ or $\theta_{x, m}=m \cdot \frac{\lambda}{\Lambda}$ the diffraction angle and 1 the grating angle.

Thus, red is more strongly diffracted.

The first grating does not contribute to the grating phase, since all spectral components diffract at the same position. However, the second grating contributes.

Zooming in on the grating:

Each groove is an emitter of a spherical wave.

The grating phase is $\phi_g(x)=\pi-m \frac{x}{\Lambda} 2 \pi$ for $m$ the diffraction order. and $x$ the position on the second grating.

The $\pi$ phase shift is from reflection.

Again neglecting dispersion between the gratings, the phase at the end is $\phi=k L+\phi_g(x)$ and we find $\frac{d^2 \phi}{d w^2}<0$ and $\frac{d^2 \phi}{d w^2} \sim L_g$.

Grating compressors can produce much more negative dispersion than the prism pair so that we are now in the order $(p s)^2$ instead of $(f s)^2$. However, it produces move higher-order dispersion.

## 2.3 Grating-based stretcher/compressor

Another way to produce dispersion is to use lenses. We note that lenses makes a Fourier transform.
If $L<f$, we get positive dispersion, and we call it "stretcher".

For $L>f$, it produces negative dispersion, and call it "compressor".

In the case of $L=f(4-f$ system $)$, we get no dispersion. Placing an element at * allows to modify each wavelength seperably and mimic any transfer function $\tilde{h}(w)$. An example is the spatial light modulator.

## 2.4 Chirped pulse amplification

## 2.5 Spatial light modulator

It is equivalent to a $4-f$-system, and allows us to pulse shape on a broad band.
A possible variation is the liquid crystal SLM:
We control polar molecules by tuning a voltage. The birefringence allows us to tune the refractive index in $x$-direction for each molecule. This can be used as pulse shaper.

We get no shaping for $V=V_{\text {max }}$, and the transfer function $\tilde{h}(\omega)$ is a simple linear phase, thus leaving the pulse shape unchanged.
for $0<V<V_{\text {max }}$, we get $\tilde{h}(\omega)=e^{i \frac{2 \pi}{\lambda_i} h_l\left(\theta\left(v_i\right)\right) d L_c}$ which changes the pulse s
linear phase. We find $E_{\text {out }}=E_{\text {in }} \cdot \underbrace{e^{i \varphi} e_{\text {lin }}} \cdot e^{i \Delta \varphi}$ where $\Delta \varphi=\frac{2 \pi}{\lambda_i}\left\{n_e\left(\theta\left(v_i\right)\right)-n_e\right\}$.
simple delay
pixel index
Its also possible to change the amplitude by staching two liquid crystals with $90^{\circ}$ rotation.
molecules
A problem of this seep is that we use pixels to sample a continous phase. This limits the maximum slope of the phase. The phase should not change by move than $\pi$ between pixels, as the phase is defined mod. $2 \pi$.

The discrete structure acts as a diffraction grating in the frequency domain, thus the sampling
creates satellite pulses in time at $t_{\text {sat }}= \pm \frac{2 \pi}{\Delta w_{\text {avg }}} \approx \pm \frac{\lambda^2}{c \Delta \lambda}$ with $\Delta w_{\text {avg }}$ the average bandwidth per pixel.
To circumvent the problem of pixelation, we can use a deformable mirror SLM. However, it is only able to change the phase. The maximum slope of the phase is limited by the minimal radius of the mirror membrane.

Phase-shaping is generally more important, as phase contains more information than amplitude.
We can further use SLM to fine-correct dispersion compensation and higher-order dispersion.
## 2.6 Fabry-Perot interferometer

Two highly reflective mirror with small transmission ane spaced by a distance $d$.

We have fresnel reflection due the refractive index difference

These can interfere and create transmission fringes in the
$r_{F p}(\lambda)$ diagram. At those transmission resonances, we get full transmission.

## 2.7 Gives - Tournois interferometer

The two mirrors form a Fabry-Perot interferometer, but with a
wavelength-dependant phase shift due to multibeam interference.
egg no loss
Neglecting material dispersion, we have $\mathbb{R}_{a T I} \mid=1$ and $R_{G T I}=e^{i 2 \phi_{a T I}}$ where $\phi_{a T 1}$ is strongly frequency-
dependant. The phase shift is $\varphi=k_n \cdot z=n k d=\frac{w t_0}{2}$ with round-hrip time $t_0$. Then $\frac{d \varphi}{d w} \approx \frac{t_0}{2}$
The second-order dispersion is $\frac{d T_a}{d w}=\frac{d^2 \phi_{a T 1}}{d w^2} \sim d^2$ while its bandwidth is $\sim \frac{1}{d}$
This is a clear trade-off between GDD bandwidth and strength. The GDD is periodic in wavelength.
high refractive index low refractive index $\quad{ }_{\text {constructive interference: phase difference is }} 2 k \frac{\lambda_B}{2}=2 \pi$
By using many layers, the reflectivity comes close to unity at $\lambda_{B_1}$ and stays high in the "stop band".
Its fractional width $\frac{\Delta w}{\omega_b}=\frac{4}{\pi} \arcsin (r)$ depends only on the refractive index contrast $r=\frac{n_n-n_l}{n_n+n_l}$.
In the stop band, we get a linear phase shift and therefore no second-order dispersion. So, a pulse will be reflected without distortion inside the stopband, the highly reflective region. There is GDD outside the stop band.

To achieve shout pulses, dispersion compensation over a large spectral bandwidth is required.
## 2.8 Chirped mirrors

The penetration depth is wavelength-dependant, and red travels longer than blue, due to the change in $\lambda_B$.
To the left, $\lambda_B \sim d \cdot n$ increases.
Substrate

This allows for a controlled GDD and an expanded high-reflectance region. However, the obtained dispersion
is low, making them useful only for <1ofs pulses. Further, the abrupt change of the refractive index between the layers act as impedance mismatch, causing dispersion osullations.

## 2.9 Double-chirped mirrors

To avoid strong GDD oscillations, we reduce the initial partial reflection in an impedance-matching approach.

Requires $n_h d_n \gg n_l d_l$.

We end up with two chirps; one in the Bragg wavelength, and one in the ratio of the high-low
refractive index layer thickness, slowly increasing the strength of reflection and acting as impedance matching.
A broadband AR coating resolve the impedance-matching problem for the first interface lager.
The $A R$ coating requires a reflection below $10^{-4}$, which limits the bandwidth on the blue side.

## 2.10 Backside-coated chirped mirror
If the residual reflections do not interfere, the requirement for very low reflectivity of the $A R$ is relaxed.

To achieve perfect impedance matching in the $D C M$, we want $n_{\text {sub }}=n_{\text {firstlager }}$. The $A R$ coating is only needed to reduce losses of the substrate. This results in a big bandwidth and low oscillations, however also in more positive dispersion due to the substrate. To compensate this, a larger number of
layers is used. A big problem is that the beams are no longer spatially coherent, requiring another impedance matching process. A current limitation is the fabrication, as layer deposition errors bring back dispersion oscillations.

## 2.11 Acousto-optic programmable dispersive filter or "Dazzler"

The dazzler does not require high-quality optical elements, is compact and easy to implement into systems.

The acoustic wave is much slower than the light wave and effectively causes a transmission grating inside the birefringent material. It will diffract radiation from the fast to the slow axis, but only if phase-matched.

Travel distance depends on frequency.

The polarization of the incoming beam determines the axis it will travel along.
The coupling is efficient if phase-matching is fulfilled: $\left\{ \begin{array}{l}\text { Energy conservation } w_0+w_A=w_e \approx w_0 \\ \text { Momenta conservation } \quad k_0+k_A=k_e \text { gives } k\left(n_e-n_0\right)=k_A=\frac{n_A}{v_A} .\end{array}\right.$

Since these are fulfilled at different points in the material, every frequency is diffracted at a different time.
This allows to create arbitrary GDD curves by properly choosing the acoustic wave.
## 2.12 White-light interferometry
The reference arm contains optics with known dispersion.
Output signal: $S(\Delta t)=\operatorname{Re}\left(\int d t \cdot E_s(t) E_R^*(t-\Delta t)\right)$ sample $\uparrow$ reference
This allows to measure the GDD.

Fourier transforming yields $\tilde{S}(w)=\tilde{E}_s(w) \tilde{E}_R(w)$, with its argument being the phase $\varphi(w)$.
Then, we find $G D D=\frac{d^2 \varphi}{d w^2}$.

To calibrate the path length, we use a HeNe lasers with long coherence length.

For a spectral domain implementation, we do not need a FT. A tillable mirror changes the path length, and two
slits give spectral resolution. Relies on plane waves entering.
# 3 Non-linear pulse propagation
The optical kerr-effect is $n(I)=n+n_2 I$ in lowest order and $n_2 \sim 10^{-16} \frac{\mathrm{~cm}^2}{\mathrm{~W}}$.

The non-linear phase shift is then $\varphi(t)=-k_n \cdot z=-k \cdot n(I) L_k=-k n L_k-\underbrace{\delta I(t)}_{\varphi_2(t)}$ with $\delta=k n_2 L_k$ the self-phase modulation coefficient.

The instantaneous frequency is $\omega(t)=\frac{d \varphi}{d t}=-\delta \frac{d I}{d t}$, so SPM broadens the bandwidth of the pulse:

The maximum non-linear phase shift depends on the number of peaks in the SPM-broadened spectrum:
leading edge
$\frac{d I}{d t}>0$
$\underset{\text { SPM: blue }}{\text { trailing edge }} \frac{d I}{d t}<0$
$$ \begin{align*}
\left|\varphi_2^{\max }\right|=k n_2 I_p L_k \approx\left(M-\frac{1}{2}\right) \pi .
\end{align*} $$
frequencies
$\qquad$

A gaussian pulse remains gaussian in time, while its spectrum broadens. Then, specific frequencies appear at two different times in the Wigner trace.

Negative GDD can compensate linear chirp in the center of SPM-broadened pulse.

## 3.1 Fiber grating pulse compressor

Then the grating pair provides negative dispersion to compress the new frequency components in time.

There exists an optimal optical fiber length $z_{\text {opt }}$.

For large $z_1$ there is more SPM, but the GDD is hard to compensate.

For small $z_1$ the chirp is not linear, and the grating compressor can only compress linear parts.
For $z=z_{\text {opt }}$, the output is a short pulse with high intensity.

For short pulses and high average power at the same time, one can combine the laser with a non-linear compression scheme. This will increase the peak power, thus a large mode area fiber is $\uparrow$ fiber with air pockets needed, as otherwise the material is damaged quickly.

## 3.2 Non-linear pulse compression
Generally, we use SPM to spectrally broaden the pulse, while a grating or compressor does the dispersion compensation. If we reach high powers, a large mode area with single-mode operation is needed.

We can use a gas-filled hollow fiber where the gas provides the non-linearity. The capillary acts as a spatial Ne or Ar
filter, which provides homogeneous output and cleans the pulse.
The input parameters determine the best medium for pulse compression
$$ \begin{tabular}{|l|l|l|l|l|}
\hline Pulse energy & pJ-nJ & multi-nJ & $\boldsymbol{\mu J}$ & mJ \\
\hline Peak power & <MW & MW & 10s-100s of MW & GD \\
\hline Nonlinearity & few $10^{-16} \mathrm{~cm}^2 / \mathrm{W}$ & few $10^{-16} \mathrm{~cm}^2 / \mathrm{W}$ & few $10^{-19} \mathrm{~cm}^2 / \mathrm{W}$ & few $10^{-19} \mathrm{~cm}^2 / \mathrm{W}$ \\
\hline Mode size & $\sim \mu \mathrm{m}$ & $\sim 10 \mu \mathrm{~m}$ & 10s of $\mu \mathrm{m}$ & 100 s of $\mu \mathrm{m}$ \\
\hline Medium & $$ \begin{tabular}{l} 
Microstructure \\
fiber
\end{tabular} & Standard fiber & $$ \begin{tabular}{l} 
Hollow micro- \\
structure fiber
\end{tabular} & $$ $$\begin{tabular}{l} 
Hollow-core fiber \\
(capillary)
\end{tabular} \\
\hline
\end{tabular}$$

Non-linear optics can create frequencies, but also destroy them. We can use this to clean pulses, by using
non-linear birefringence with $n_e=n_e(I)$ and $n_0=n_0(I)$. So, the polarization rotation at the out pat
will be intensity-independant. The input polarization is different from the birefringent principal axis.
## 3.3 Self-focussing

The Kerr-effect causes the laser beam to produce a focussing lens effect.
The variation of the refractive index corresponds to a lens with focus strength $f=a \cdot \frac{\omega^2}{4 \cdot \Delta n_p \cdot L_k}$ where
we defined $\Delta n_p=n_2 I_p$ and $w$ is the beam radius.
Defining the $B$-integral as $B=\frac{2 \pi}{\lambda} \int_0^l n_2 I(z) d z$, material damage through self-focussing is prevented if $B<3-5$.

## 3.4 Filamentation

While the Kerr effect increases the refractive index, self-induced ionization decreases it.
The critical power $P_{c r} \sim \frac{\lambda_0^2}{n_0 n_2}$ is associated to shang self-focussing, resulting in material damage or multiphoton ionization, which will counteract self-focussing again.

Above $P_{c r}$, the kerr effect is so strong that self-focussing dominates, and ultimately collapses the beam.

However, during this process, the large intensity causes multi-photon ionization to counteract this
effect. These two effects balance and filamentation occurs, so that the beam keeps its narrow beam diameter over long distance.

The high intensity broadens the spectrum via SPM, causing white light to be emitted, slowly turning the
laser white. This is robust to beam pointing fluctuations at the output, but not at the output.

Filamentation allows to compress pulses, even in the few cycle regime.
## 3.5 Solitons

The effects of SPM and negative GDD cancancle out, creating a pulse that can propagate T since normally $n_2$.
without pulse broadening in a dispersive material.

Solitous automatically find the right shape, making them robust. They show particle-like behavior, as they can collide.
in linear optics: no new frequency

Remark. In linear pulse propagation, we have $G D D \neq 0$ and $S P M=0$ and broadening only in time.
The spectral domain is not broadened, but the spectral phase changes.

SDM without GDD causes a broadening or narrowing in frequency.

## 3.6 Non-linear Schrodinger equation

Expanding the dispersion as $k_n(w) \approx k_n\left(w_0\right)+k_n^{\prime} \cdot \Delta w+\frac{1}{2} k_n^{\prime \prime} \cdot \Delta w^2$ which we plug into the slowly varying envelope
$$ \begin{align*}
\tilde{A}\left(L_d, \Delta w\right)=e^{-i \Delta k_n\left(w_0\right) L_d} \tilde{A}(0, \Delta w) \approx \exp \left(-i\left\{k_n^{\prime} \cdot \Delta w+\frac{1}{2} k_n^{\prime \prime} \cdot \Delta w^2\right\} L_d\right) \tilde{A}(0, \Delta w) .
\end{align*} $$

First, consider $k_n^{\prime} \Delta w L_d \ll 1$ and $k_n^{\prime \prime}=0: \tilde{A}\left(L_d \Delta w\right) \approx\left(1-i k_n^{\prime} \Delta w L_d\right) \tilde{A}(0, \Delta w) \Leftrightarrow A\left(L_d, t\right) \approx\left(1-i k_n^{\prime} L_d \cdot \partial_t\right) A(0, t)$.
Thus, we get a temporal shift $T_g=k_n^{\prime} L_d=\frac{L_d}{V_g}$, the group delay.

Next, consider $k_n^{\prime}=0$ and $k_n^{\prime \prime} \Delta w^2 L_d \ll 1: \quad \tilde{A}\left(L_d, \Delta w\right) \approx\left(1-\frac{i}{2} k_n^{\prime \prime} \Delta w^2 L_d\right) \tilde{A}(0, \Delta w) \Leftrightarrow A\left(l_d, t\right) \approx\left(1+i D \cdot \partial_t^2\right) A(0, t)$
where $D=\frac{1}{2} k_n^{\prime \prime} L_d=\frac{1}{2}$.GDD is the dispersion parameter.

Now, we apply the slowly-varying envelope approximation, and further introduce a retarded time $t^{\prime}=t-\frac{z}{v g}$ This yields $\partial_z A\left(z, t^{\prime}\right)=i \frac{k_u^{\prime \prime}}{2} \partial_{t^{\prime}}^2 A\left(z, t^{\prime}\right)$

To include $S P M_1$ we consider $E\left(L_k, t\right)=A(0, t) e^{i m_0 t} e^{i \varphi(t)}$ for $\varphi(t)$ the non-linear phase shift.
To linearise $A\left(L_u, t\right)$, we assume $\delta|A(t)|^2 \ll 1$ and find again the linearised SPM operator $\left(1-i \delta|A(t)|^2\right)$.
We finally arrive at the non-linear Schrodinger equation:
$$ \begin{align*}
\partial_2 A\left(z, t^{\prime}\right)=i \frac{k_n^{\prime \prime}}{2} \partial_{t^{\prime}}^2 A\left(z, t^{\prime}\right)-i k n_2\left|A\left(z, t^{\prime}\right)\right|^2 A\left(z, t^{\prime}\right)
\end{align*} $$
coney up to $k_n^{\prime \prime}$
We approximated dispersion as a parabola and therefore neglect higher than second order terms.

The solution $A_s\left(z, t^{\prime}\right)=A_0 \operatorname{sech}\left(\frac{t^{\prime}}{\tau}\right) e^{-i \phi_0(z)}$ is the soliton with $\phi_0(z)=\frac{\varphi_2^{\max }}{2}=\frac{1}{2} k n_2 I_p z=\frac{|D|}{\tau^2}$.
Its pulse length is $\tau_p \sim \frac{|D|}{\delta F_p} \sim \frac{\left|k_n{ }^{\prime \prime}\right|}{k n_2 F_p} \sim \tau$ with $F_p$ the pulse fluence or pulse energy density.
Tindependant of material length
We have $\tau_p \sim \frac{1}{f_p}$ for constant material parameters, and $\tau_p \sim|D|$ for constant pulse finence.

The group velocity $V_g=\frac{1}{k_n^{\prime}}$ depends on the carrier frequency, while the GDD does not. Thus, a blue soliton moves faster than a red soliton. They can collide, but both pulses leave the interaction undamaged, but the faster pulse is shifted ahead in time. Further, their respective phase changes during collision.

Higher-order solitons are also solutions with periodicity $z_0=\frac{\pi}{2} \cdot \frac{\tau^2}{\left|k_n^{\prime \prime}\right|}$, defined through $\phi\left(z_0\right)=\frac{\pi}{4}$ phase change.
So, $z_0$ is short for a short pulse and strong dispersion.
A second-order soliton is the superposition of two solitons. A soliton of order $N$ requires $N^2$ times Tot simply linear!
the energy of a fundamental soliton.
After a distance $\frac{z_0}{2}$, a bandwidth-limited pulse becomes a second-order soliton with minimal pulse duration. After the whole period $z_0$, it retrieves its original form.

A soliton pulse compressor is achieved by choosing the fiber length as $\frac{z_0}{2}$.
## 3.7 Optical communication with solitons

In conventional linear transmission, the signal needs to be completely regenerated every $50-100 \mathrm{~km}$, due
class of intensity through medium
to dispersion, non-linear effects and attenuation. Otherwise, the signal is lost in the noise of the amplifiers.

The idea with solitons is that we avoid signal blurring, since they keep their shape. We only reed amplifiers to compensate fiber losses, but no repeaters.

However, the Gordon-Hans effect makes them practically useless for that:

Any amplifier will add noise to the soliton, so that the soliton center frequency will slightly shift due spontaneous emission
to its self-reinforcing nature. They will experience a different amount of group delay, depend ding on the center frequency. Equidistant soliton pulses will not be equidistant anymore and cause a bit error.

To fix this, filters can be used to predefine the carrier frequency and pull it back

However, some narrowband noise will be amplified more than the actual soliton. This can be fixed again by using the robustness of the solitons: The filter sweeps the center frequency along the communication fiber slowly, thus not amplifying narrowband noise.

Tsuch that soliton can adapt.
## 3.8 Periodic pertubations of solitons
Within a laser, a soliton pulse is repeatedly perturbed through amplification and output coupler.
The NSE is modified: $\partial_2 A\left(z, t^{\prime}\right)=i \frac{k_n^{\prime \prime}}{2} \partial_t^2 A\left(z, t^{\prime}\right)$-ikn, $\mid A\left(z,\left.t^{\prime}\right|^2 A\left(z, t^{\prime}\right)+i \varepsilon \sum_n \delta\left(z-n z_a\right) A\left(z, t^{\prime}\right)\right.$ with $\varepsilon \ll 1$.
Consequently, the Ansatz is $A\left(z, t^{\prime}\right)=A_s\left(z, t^{\prime}\right)+u\left(z, t^{\prime}\right)$ with $\left|u\left(z, t^{\prime}\right)\right| \ll\left|A_s\left(z, t^{\prime}\right)\right|$.

We find a new equation for $u\left(z, t^{\prime}\right)$, where SPM is now irrelevant due to the low pertubation intensity.
Thus, dispersion quickly broadens the pertubation in time. At resonance, $\tilde{u}(z, w)$ is no longer a perturbation.
This is prevented if $\left|\tilde{u}\left(z_1 w\right)\right|<\left|\tilde{A}_s(z, w)\right| \Leftrightarrow z_a \ll 8 z_0$, so that the perturbation can be treated as continous.
Since $z_0 \sim \tau^2$, the pertubation period should be small for shout pulses. Longer pulses mean lower bitrate.

## 3.9 Delayed non-linear pulses
The kerr non-linearity comes from the electronic contribution with nearly instantaneous (<ifs)
response time. Another contribution is from the lattice, where phonous can se excited. This contributes
a non-instantaneous response. For optical phonous, positive and negative charges oscillate in anti-phase, giving rise to the Raman effect. For acoustic phonous, positive and negative charges oscillate in phase, causing the Brillouin effect. Phonous are excited through a beating between different optical frequency Sonly relevant for long pulses (close 10 cw ).
components. They can couple light waves with different propagation directions and frequencies.
The pump photon can split into a Stokes photon and a phonon.
T backward or for ward
We only care about optical phonons and the Raman effect. The Raman gain maximum depends on the pump wavelength. It is linear to the wavelength for small offset.

This allows to shift the (solition) wavelength to higher wavelength due to the splitting of the photon into a Stokes photon plus phonon.

## 3.10 Generalized non-linear Schrodinger equation
For ultrashort pulses with $\tau_p \approx 100 f s$, higher-order dispersion and non-linear effects need to be considered.

Now, the spectival width $\Delta W$ is comparable to the carrier frequency, so that we modify the NSE by further adding TOD, self-steepening and Raman gain.

The Raman term originates from the delayed Raman response and causes a self-frequency shift.

Together with self-steepening, these two effects lead to an asymmetry in the SPM broadened spechum.

## 3.11 Self-steepening
It is a higher-order non-linear effect resulting from an intensity-dependant group velocity $V_g=V_g(I)$.

Then, the peak moves at lower speed than the wings, eventually causing a shock for an instantaneous intensity drop, e.g infinite slope. However, this does not occur in reality, as a steep pulse implies a more broadband pulse, thus dispersion prevents it.
power
## 3.12 Saturable gain and absorber
For an ideal 2-level, the non linear gain coefficient of the amplitude is $g=\frac{g_0}{1+\frac{I}{I_{s a t}, 2}}$ with the saturation intensity $I_{\text {sat ,L }}=\frac{h f}{\sigma \tau_L}$ and the small signal gain $g_0$.

Here, $\sigma$ is the gain cross section and $\tau_L$ the excited atom lifetime.
The amplitude gain per length is $g(z)=\frac{N}{V} \sigma$ with $\frac{N}{V}$ the number of inverted atoms in a volume $V$.

Atoms that are not inverted, contribute as saturable absorber, e.g the light absorption of the material decreases with light intensity. At high intensity, the absorption is saturated.

The amplitude absorption coefficient is $\alpha=\frac{\alpha_0}{1+\frac{I}{I_{s a t A}}}$ with $\alpha_0$ the unsaturated absorption coefficient.

We have $\sigma_A=\sigma_L=\sigma$ or $I_{S a l, A}=I_{\text {Sati }}$ if both absorber and amplifier rely on the same material.

The absorption of a semiconductor after a short pulse has saturated the transition of valence to conduction band:

In the idealized system with homogeneous absorption saturation, we use the absorption equation $\frac{d I}{d z}=-2 \alpha(I) I(z)$ and integrate it.
# 4 Second-order non-linear effects
In non-linear optics, the polarization is $P_i=\varepsilon_0 \chi_{i j}^{(1)} E_j+\underbrace{\varepsilon_0 \chi_{i j k}^{(2)} E_j E_k+\ldots}_h$
We have $E_{\text {out }}(t)=E_{\text {in }}(t) \underbrace{e^{-\delta I(t)}}_{\text {SPA }} \underbrace{e^{-i k_k L_k}}_{\text {linear }}$ where $I=|E|^2$ so that SPM is a third-order non-linearity.
Third-ordes non-linearitios occur everywhere, even in isotropic materials. However, second order NLs only
appear in non-centrosymmetric systems, like ferroelectric materials.

As example, consider interaction of two monochromatic waves $E_1=E_{10} \cos \left(\omega_1 t-k_1 z\right)$ and $E_2=E_{20} \cos \left(\omega_2 t-k_2 z\right)$.
double frequency
$$ \begin{align*}
P_{N L}=\epsilon_0 \chi^{(2)} E^2 \sim \underbrace{\left(E_{10}^2+E_{20}^2\right)}+\underbrace{E_{10}^2 \cos \left(2 \omega_1 t\right)+(1 \leftrightarrow 2)}_{10}+E_{10} E_{20} \cos \left(\left(\omega_1+w_2\right) t\right)+\underbrace{}_{10} E_{20} \cos \left(\left(\omega_1-\omega_2\right) t\right) \text { when e }
\end{align*} $$
optical rectification $\quad 2^{\text {nd }}$ harmonic sum frequency gervation difference frequency generation
we ignored prefactors.

## 4.1 Non-linear susceptibility tensor $d_{i j k}$
The non-linear optical polarization is $P_i^{N L}=\epsilon_0 d_{i j k}^{\prime} E_j E_k$.
It should follow $d_{i j k}=d_{i k j}$, since the order of $E_j, E_k$ doesn't matter. So, $d_{i j k}$ is reduced to 18 elements $d_{i j k}=d_{i k n}$
Crystal symmetries further reduce it, since a material tensor is invariant under crystal point symmetry.
In an orthorhombic crystal, it has 3 or 5 entries.

Only one entry $d_{\text {eff }}$ is achieved for collinear beams with one interaction and no dispersion, no absorption and an uniaxial crystal.

Microscopically, all wave-mixing processes with $d_{i j} \neq 0$ actually occur.
However, macroscopically for a signal to be observable, the microscopic waves have to add up coushuctively in the crystal. This requires phase -matching
## 4.2 Phase-matching
The second harmonic $E_{2 w}$ has to constructivelly interfere with $E_{2 w}^{\prime}$ generated at $z_0$ for any crystal length $z_0$.
$$ \begin{align*}
\stackrel{z_0:}{\substack{ \\z}}
\end{align*} $$

The fundamental is $E_w(z, t)=E_0 e^{i \omega t} e^{i k_w z}$ and the second harmonic is $E_{2 \omega}(z, t)=E_{2 \omega, 0} e^{i 2 \omega t} e^{i k_{2 w} z}$.

For fixed $t=0$, we get $E_{2 w}^{\prime}\left(z_0\right) \sim E_w\left(z_0\right)^2$.

To constructively interference at $z_0, E_{2 w}$ and $E_{2 w}^{\prime}$ have to have the same phase $\varphi_{2 w}\left(z_0\right)=\varphi_{2 w}^{\prime}\left(z_0\right)$ which is equivalent to $n_{2 \omega}=n_\omega$. This is generally not possible due to dispersion.

## 4.3 Birefringent phase matching

Birefringent materials have a polarization- and propagation-dinection-dependant refractive index.

We choose the fundamental polarization along the e-axis and angle $\theta$ such that indices match.

We want $n_0(2 \omega)=n_e(\omega)$, and call $\theta$ the phase matching angle and it is unique for a pair of frequencies.

Usually this condition is typically only met a one set of frequencies.
## 4.4 Conversion efficiency
The coupled wave equation for $E_w$ and $E_{2 w}$, with phase mismatch $\Delta K=K(2 \omega)-2 K(w)$ yield a conversion
efficiency $\eta=\frac{I_{2 w}}{I_w} \sim L^2 \operatorname{sinc}^2\left(\Delta k \cdot \frac{L}{2}\right)$. We assumed no depletion of the fundamental, e.g $I_{2 w}(z=0)=0$ and $I_w(t)=$ cons.
instead of monochromatic light
## 4.5 Second harmonic generation with pulses
With perfect $P M$, we have $P_{N L}(t) \sim E_w^2(t)$ or $\tilde{P}_{N L}(\omega) \sim \tilde{E}_w(w) * \tilde{E}_w(w) \sim \tilde{E}_{2 w}(w)$ since $E_{2 w}^2(t) \sim P_{M L}(t)$.

Every frequency of the fundamental is mixed, which broadens or shortens the pulse.
output) input photons
Sum frequency mixing: $w_3>w_1, w_2$ with $w_1+w_2=w_3$ and $k_1+k_2=k_3$ so $\Delta k=k_3-\left(k_1+k_2\right)$
input output
Difference frequencymixing: $w_1>w_2, w_3$ with $w_1=w_2+w_3$ and $k_1=k_2+k_3$ so $\Delta k=k_1-\left(k_2+k_3\right)$
Again we retrive $\eta \sim d_{\text {eff }}^2 L^2 \operatorname{sinc}^2\left(\Delta k \frac{L}{2}\right)$. This means for a very thick crystal, we have $\eta \approx 1$.
but very small bandwidth. So, the trade-off is between efficiency and bandwidth.

Different crystal thicknesses

Different crystal materials
## 4.6 Group velocity matching

We have group-velocity matching if $v_g\left(w_0\right)=v_g\left(2 w_0\right)$

Further, $\Delta K$ varies slowly around phase-matched frequency, if group velocities match too.

For ultrabroadband PM, we need small crystal, which implies low efficiency. However, it might come close to the coherence length of other unwanted conversion processes.

Higher symmetry crystals avoid possible signal background or interference effects.

## 4.7 Walk-off effects with real beams

Pognting vector differs Finite overlap region Left

## 4.8 Quasi phase-matching

Every $L_{e,}$ we will reverse the orientation of the ferroelectric domain, which will change sign of deft. effective NL" This turns destructive interference constmetive. This comes from the term $e^{i \Delta k z}$ in the coupled waveequation.
## 4.9 Chirped quasi phase matching

To increase the reflection bandwidth, we introduce a chirp. We will need a high energy photon wp that splits into lower energy photons the "signal" and "idler".

The bandwidth can be increased by making the crystal longer. Limited by transparency range of material.

## 4.10 Chirped QPM-SHG pulse compression

A group velocity mismatch plus a spatial localization of conversion leads to a frequency-dependant delay.

There is group-velocity mismatch $V_q(w) \neq V_g(2 w)$, and it can transform positive to negatively chirped fundamental.

## 4.11 Optical parametric amplification

It can provide gain at "unusual" wavelength, and large single-pass gain. The pulses need to temporally coincide and need to have similar phase duration. No energy is stored in the crystal, thus no heat is sent there.
To convert back, we can use SFG.
## 4.12 Optical parametric oscillator

We place the OPA inside a cavity. The oscillation pulse in the cavity and the pump pulse have to
coincide, since the gain process is instantaneous. So, they need to be synchronized. Their advantage is
that they are not limited to existing laser transitions, so they are widely tunable, from $U V$ to $\mathbb{R}$.

## 4.13 Cascaded quadratic non-linearities
In normal SHG, we have $\Delta k=0$ and energy is Lansfered from the fundamental to the SH.

For a large phase mismatch, there is a periodic transfer of energy.
Since their phase velocities differ, the fundamental and the SH pick up different phases.

This implies that not only energy is trausfered back, but also phase. This is SPM for the
fundamental with $n_2<0$. So if we have positive $G D D_1$ we can fund solitous and self-defocussing.

This method allows to compensate for air-non linearities in high-power thin-disk lasers.
# 5 Relaxation oscillations

In a diode-pumped solid-state laser, we can pump longitudinal where the beam is collinear with the laser mode. This is very efficient for low powers and yields good quality.

Transversal pumping is used for high power applications. They are efficient since their absorption peaks are close to the absorption line of interest. However, their beam quality is not that good.

## 5.1 Laser rate equation
Consider 4-level-system. Note that 3-level-systems are very efficient, as the laser transition is comparable to the pump.

The cavity decay rate is $\gamma_C=2 \frac{l}{T_R}$ and the spontaneous decay rate of level 2 is $\gamma_L$.
Then, $\frac{d n}{d t}=k N+k N_n-\gamma_c n$ and $\frac{d N}{d t}=R_p-k N_n-\gamma_L N$ with $k$ the coupling constant.
spout. emission rate shim. emission rate

Defining the pump rate $r=\frac{g_0}{l}$, we find steady-state solutions $\frac{d n}{d t}=0=\frac{d N}{d t}$ :

away from steady-state
Considering small perturbations $n(t)=n_s+n_1(t)$ and $N(t)=N_s+N_1(t)$ for $n_1<n_s$ and $N_1 \ll N_s$, we still
have $\frac{d n_s}{d t}=\frac{d N_s}{d t}=0$, however both the photon number and inversion need time to reach equillibnum again.
The Ausatz is $n_1 \sim e^{s t}$ and $N_1 \sim e^{s t}$ so that $s=-r \frac{\gamma_L}{2} \pm \sqrt{\left(r \frac{\gamma_L}{2}\right)^2-\gamma_L \gamma_c(r-1)}$.
## 5.2 Over-critically damped regime
If $S$ is real, there are no relaxation oscillations. It requires $S<0$ for a stable solution.

Further assuming the stimulated decay rate to be much langer than the cavity decay rate, ie. $r \gamma_L \gg \gamma_c$, we get two over-critically damped relaxation constants $s_1 \sim \gamma_2$ and $s_2 \sim \gamma_c$ describing stimulated decay rate of excited atoms and photon decay rate inside the laser cavity.

No osullations occur, and the laser will go back to steady state.
## 5.3 Under-critically damped regime
If $s$ is complex, there are relaxation oscillations of the form $n(t)=n_s+n_1 e^{-\gamma_{\text {relax }} t} \cdot \cos \left(w_{\text {relax }} t\right)$ for $\gamma_{\text {relax }}=r \frac{\gamma_L}{2}$ the attenuation rate. We have frelax $=\frac{1}{2 \pi} \sqrt{\gamma_c \gamma_c(r-1)} \approx \frac{1}{2 \pi} \sqrt{\frac{1}{\tau_{\text {sines }} \tau_c}}$ for $\gamma_c \gg r \gamma_c$.

Then, we get $g_0 \sim\left(\tau_L T_R f_{r e l a x}^2+l\right)$ so that a measurement of the relaxation frequency reveals $g_0$.
material property

# 6 $Q$-switching
First to active Q-switching, where we actively remove an intracacity block, such as an AOM.
1) The block is present, so stimulated emission does not occur. A pump pulse creates large inversion, and thus increasing the gain.
2) The block is removed, thus reducing the losses. A large inversion causes stimulated emission to start quickly, thus slowly increasing the intracavity power.
3) The intracarity power increases, while gainlinversion depletes until we reach the power maximum when gain equals losses. The inversion is depleted and we have less gain than losses. The power increases again.

The result is a short (~ $\mu s-n s$ ) pulse with large energy.

Q-switched microchip lasers can achieve pulses with $\sim n s$ pulse duration, and high $f_{\text {rep }} \sim 100 \mathrm{kHz}$.

Q-switched pulses are asymmetric with fast rise time and slow decay time. The initial intensity increases with $g_0$ inversion, and decays with rate $\gamma_c=\frac{1}{\tau_c}=\frac{l}{T_R}$. A large $r=\frac{g_0}{l}$ implies faster rise time, corresponding to large initial inversion, large initial $g_0$, and shorter $\tau_c$. A large $\gamma_c$ makes "right" side short, but elongates the "left" side. Therefore, there exists an optimum $\gamma_c$ for short pulse duration.

To get a short pulse, we want larger. A short cavity is always derivable to get small $T_R$.

Therefore, active $Q$-switching works well with microchip lasers.
## 6.1 Acousto-optic modulators
The acoustic carrier frequency is $10 \mathrm{MHz}-2 \mathrm{GHz}$, with wavelength $\Lambda=\frac{c_{\text {sound }}}{f_{\text {canner }}}$. The sound writes
transmission grating into the crystal.

For constructive interference, we want the Bragg condition fulfilled $\sin \theta_m=m \cdot \frac{\lambda}{2 n \Lambda}$
In the presence of an acoustic wave, the losses are high due to diffraction into the $1^{\text {st }}$ order. We switch
~ kHz
this wave on and off at desired Q-suituhed pulse repertion rate frep< facoushc.

## 6.2 Seeded Q-switching

Ideally, a $Q$-switched pulse is single-mode.

In an unseeded laser, several modes lase at the same time due to spontenous emission, causing a gain competition.

The laser starts by amplifying a seeded signal instead of quantum fluctuations.

## 6.3 Microchip laser
and short pulses

To achieve single-mode operation", we can make the lasercrgstal length $L$ short $1100 \mathrm{\mu m}$. This maker the axial mode spacing large. For very small $L_1$, the spacing is larger than the gain bandwidth of the material.
To actively Q-switch, we can find a way to odjust $L$, shifting the resonance frequency in and out of the axial mode. Effectively, this controls the reflectivity, so the losses.

## 6.4 Theory of active $Q$-switching
1) $R_p \approx$ cost., $n=0 . \quad N(t)=N_{\text {max }}\left(1-e^{-t / \tau_L}\right)$.
2) $N=N_i=$ oust., $n(t)=n_i e^{\left(g_0-l\right) \frac{t}{T_R}}$.
3) $\gamma_L N, R_p$ negligible, $n(t) \approx N_i-N(t)-\frac{N_i}{r} \ln \left(\frac{N_i}{N(t)}\right)$.
4) Losses > gain, $n(t)=n_{\text {max }} e^{-t / \tau_c}$.

The equations for an ideal 4 -levelsystem are $\frac{d n}{d t}=k N_n-\gamma_c n$ and $\frac{d N}{d t}=-k N_n-\gamma_L N+R_p$, where we will neglect spontaneous emission $\gamma_2 N$ above threshold, and $K$ is the coupling constant for stimulated emission.
1) Inversion build-up phase:

The losses are so high, that the threshold condition is not reached, and we keep $\gamma_2 N$. Further, $n(t) \approx 0$ and $R_p \approx$ const. Then, $\frac{d N}{d t} \approx R_p-\gamma_L N$ with $\gamma_L=\frac{1}{\tau_L}$ the inverse upper state lifetime. This yields $N(t) \approx R_p \tau_L\left(1-e^{-t / \tau_L}\right)$
with $R_p \tau_L=N_{\max }$ roughly maximal at $t=3 \tau_L$. Pumping longer does not increase the inversion much, Tin principle $t \rightarrow \infty$
implying worse efficiency.
We have $E_p=$ const $\Leftrightarrow T_{r_p} 乞 3 \tau_L \Leftrightarrow f_{\text {app }} \check{<} \frac{1}{3 \tau_L}$, e.g the highest pulse energies are reached for long $\tau_L$.
2) Pulse build-up phase, leading edge:

We assume instant reduction of losses at $t=0, s_0 N(t=0)=N_i$ and $n(t)=n_i \approx 1$ from quanta fluctuations.

We assume $N(t) \approx N_i \approx$ const, since the photon number is still small.
Then, we have $\frac{d n}{d t} \approx\left(k N-\gamma_c\right) n=k\left(N_i-N_{t n}\right) n=\frac{r-1}{\tau_c} n$ implying $n(t) \approx n_i e^{\frac{r-1}{\tau_c} t}=n_i e^{\left(g_0-l\right)^{\frac{t}{T_R}}}$, where $N_{t n}=\frac{\gamma_c}{k}$.
$$ \begin{align*}
1 N_i=r N_{t h}
\end{align*} $$

We can see that we want small $T_R$ and large $r$ for a short "left" side of the pulse.
3) During the pulse:

The $Q$-switched pulse is so intense that the pumping rate $R_p$ and the spontaneous decay rate $\gamma_L N$ can be neglected, by $R_p-\gamma_L N \ll K_n N$ the stimulated emission rate.

Then $\frac{d n}{d t}=k\left(N-N_{t n}\right) n$ and $\frac{d N}{d t} \approx-k_n N$ or equivalently $d n \approx \frac{N_{t n}-N}{N} d N$.
The solution is $\quad n(t) \approx N_i-N(t)-\frac{N_i}{r} \ln \left(\frac{N_i}{N(t)}\right)_{\text {, reaching }} u_{\text {max }}$ if gain equals losses $\Leftrightarrow N(t)=N_{t n}$.
We finally find $n_{\max }=\frac{r-1-\ln r}{r} N_i$ and $E_{p_{\text {pout }}} \approx E_p=\left(N_i-N_f\right) h f$.
This implies a pumping efficiency $\eta=\frac{Q \text {-switched pulse energy }}{\text { stored energy }}=\frac{N_i-N_f}{N_i}$ increasing with $r$.
The pulse duration is $\tau_p \approx \frac{E_{p, \text { ont }}}{p_{\text {pout }}}$ decreasing with $r$.
4) Pulse depletion phase:

After the pulse maximum, losses exceed the gain. We find $n(t)=n_{\max } e^{-t / \tau_c}$.

## 6.5 Effects of slow Q-switching
gain

## 6.6 Passive $Q$-switching
SSM

In passive $Q$-switching, a saturable absorber is used to modulate the $Q$-factor, so high absorption for
low intensities and vice versa. It is used for compact lasers by integrating the SA into the mirror.

For relaxation oscillations to become destabilized and stable $Q$-switching to be possible
we require $\left.\left|\frac{d R}{d I}\right| \cdot I\right\rangle \frac{T_R}{\tau_{\text {shim }}} \approx r \frac{T_R}{\tau_L}$.
This condition is easily satisfied for large $\tau_L$, so that solid-state lasers are a good fit.

A passively Q-switched microchip laser has a short cavity, thus producing short pulses. We obtain high pulse energy and good beam quality, as well as a short pulse in a single longitudinal mode.

## 6.7 Theory of passive $Q$-switching
The rate equations are now enhanced to $\frac{d n}{d t} \frac{d N_L}{d t}$ and $\frac{d N_A}{d t}$, where $N_A$ is the number of absorbing atoms in the resonator and $N_L$ the number of inverted atoms in the gain medium.

We assume that changes per cavity roundtrip are small, e.g $q, g, l$ 《 1 , and we neglect spontaneous emission into the lasing mode above threshold and the effects of inhomogeneous amplification due to spatial hole burning. The saturable absorber is described as two-level system.
$$ \begin{tabular}{|c|c|c|}
\multicolumn{2}{c|}{ gain } & \multicolumn{2}{c|}{$$ \begin{tabular}{c} 
Saturable \\
absorber
\end{tabular}} \\
\hline & $$ \begin{tabular}{c}
$g$ \\
$\tau_L, E_L$
\end{tabular} & $$ \begin{tabular}{c}
$q$ \\
$\tau_A, E_A$
\end{tabular} \\
\hline$A_L$ & $A_A$ & \\
\hline
\end{tabular}
We consider a time-dependant roundtrip intensity gain coefficient $g(t)$, and a saturable loss coefficient $q(t)$.

Labsouber g gain $^{\text {gin }}$
For a SESAM, we have $E_{\text {Sat, } A} \ll E_{S a t, L}$ and we neglect spatial hole burning.

Phase 1:
- absorber unbleached
- power grows when gain reaches loss
- $E_A \ll E_L \Rightarrow$ absorber is saturated before power grows significantly

Phase 2:
- absorber fully bleached $q=0$
- power grows quickly until gain is depleted to the loss level
Phase 3:
- power decays
- energy is still extracted, and gain decays further

Phase 4:
- absorber recovers more quickly than gain
- next Phase 1 starts when gain reaches the unsaturated losses

The gain reduction is $\Delta g \approx 2 \Delta R$ since $g(t)$ is almost symmetric around $t=0$. So, the pulse is almost symmetric.
$$ \begin{align*}
I_{\Delta R}=q_0
\end{align*} $$

Further, $E_p=\frac{h f_L}{\sigma_L} A \Delta R \cdot \eta_{\text {out }}$ and the pulse duration $\tau_p \sim \frac{T_R}{\Delta R}$ are both independant on pump power.
The repetition rate is $f_{r e p} \approx \frac{g_0}{2 \Delta R \tau_L} \sim(r-1)$ far above threshold. Therefore, pumping harder implies more pulses of same shape and energy.

A large $\Delta R$ is also good for large $P_{\text {peak }} \sim \frac{E_p}{\tau_p} \sim \Delta R^2$, but makes frep lower.

On the timescale of the repetition period, we obtain:
# 7 Modelocking

Multiple axial modes satisfy the boundary condition to oscillate in the cavity.

Forcing all modes to operate phase-locked, the output turns into an ulhashort pulse.

## 7.1 Frequency comb
Modeloching yields $\tilde{E}_T(w)=\tilde{E}(w) e^{i \tilde{\phi}(w)} \sum_n \delta\left(w-n \cdot \Delta w_{a x}\right)$ or $E_T(t)=\sum_n E\left(t-n T_R\right)$ with $\Delta w_{a x}=\frac{2 \pi}{T_R}=2 \pi \cdot f_{\text {rep }}$
A comb can be described by $f_n=f_{C E_0}+n f_{\text {rep }}$ with $f_{c E_0}$ the carrier-envelope offset.

Generally, $\Delta \phi_0 \neq 0$ since $V_g \neq v_p$ and $\Delta \phi_0$ different for each pulse.

Relevant for few optical cycle regime.

The stability condition for an axial mode in a laser resonator is that the complex amplitude remains unchanged offer a single cound-trip, e.g $e^{g-l} e^{i \phi}=1$. Eventually, we find $\Delta w_{a x}=\pi \cdot \frac{V_g}{L}$ and $f_{\text {rep }}=\Delta f_{a x}=\frac{V_g\left(\lambda_0\right)}{2 L}$.

The different modes of operation are:
-Q-switching: Multi-mode would not be phase-locked. Thus, we require $\tau_p 》 T_R$ and $f_{\text {rep }}<\frac{1}{T_k}$
- Fundamental modelocking: One pulse per cavity vound-trip $\tau_p \ll T_R$ and $f_{\text {rep }}=\frac{1}{T_R}$. Phase-locked, multimode.
- Harmonic modelocking: $f_{r e p}=n \cdot \frac{1}{T_R}$ for $n \geqslant 2$, where every $n^{\text {th }}$ mode is locked together. Gives $n$ equidistant pulses at given time.
## 7.2 Active modelocking

Inside the laser resonator is a gain medium amplifying the laser light, and an optical modulator varying losses periodically.

Switching on the loss modulator on at the roundtrip frequency of the pulse, it is energetically favorable for the pulses passing it when the lowest losses are generated. The losses per round trip are balanced by the gain to not shorten the pulse farther. The gain bandwidth will balance the pulse shortening, by spectrally narrowing the pulse. This yields a stable pulse and a steady-state.

An AOM without soundabsorber can be an active loss-modulator. We will get a large impedance mismatch or big refractive index contrast. The acoustic wave is basically $100 \%$ reflected, creating a standing wave, and thus a spatially modulated refractive index. This acts as diffraction grating.

It results in sinusoidal losses $l(t) \sim\left(1+\cos \left(2 w_a t\right)\right)$ with $w_a$ the acoustic frequency.
standing wave frequency
A typical AOM is operated under Bragg condition.

## 7.3 Active modeloching without SPM or GDD
To describe theory, assume produced pulses are gaussian: $E(t)=e^{-r t^2+i w_0 t}$
In the steady-state, the pulse envelope doesn't change after one round trip of passing the gain and loss modulator. $$$ \begin{aligned} \text { This implies } \Gamma^{\prime \prime}=\Gamma & $$ \begin{array}{l}\text { changed twice, after gain and loss } \\ \text { and } \\ \text { FWHM pulse duration }\end{array} \tau_{p, s} \sim \sqrt{\frac{1}{R e(P)}} \sim \sqrt[4]{\frac{g}{M}} \sqrt{\frac{1}{f_m \cdot \Delta f_g}} \text { for } f_{\text {mod }} \text { the gain modulation frequency. }\end{aligned}$

The gain causes $E^{\prime}(w)=e^{g(w)} E(w)$ and we assume $g \ll 1$, e.g the pulse doesn't change much in a
single passage. Approximating the gain os parabola, we find $\Gamma^{\prime}-\Gamma \sim-\frac{g}{\Delta w_g} \Gamma^2<0$ so that the pulse gets broadened after passing the gain medium.
Two loss modulators exist, the amplimde loss modulator $m_{A H}(t)=e^{-l(t)}=e^{\left.-M\left(1-\cos / \omega_m t\right)\right)}$ and the phase modulator $m_{p h}(t)=e^{-i M \cos \left(\omega_\mu t\right)}$, however AM is more common since it can generate bandwidtn-limited pulses.

After the amplitude loss modulator, we find $\Gamma^{\prime \prime}-\Gamma^{\prime} \approx M \frac{\omega_m^2}{2}>0$ so that the pulse shortens.
In steady-state the shortening and broadening caucle.

We will now see that the gaussian ansate is correct.

## 7.4 Hans Master equation
We have $T_R \frac{\partial A(T, t)}{\partial T}=\sum \Delta A_i=0$ at steady-state for timescale $T$ over many round-hips.
The linearized operators $\Delta A_i$ represent changes due to gain, loss and constant loss for $i=1$ to 3 :
Gain $\Delta A_1=g\left(1+\frac{1}{\Omega_g^2} \frac{d^2}{d t^2}\right) A(T, t)$
Loss $\Delta A_2 \approx-M\left(1-\cos \left(\omega_m t\right)\right) A(T, t)$

Constant loss $\Delta A_3 \approx-l \cdot A(T, t)$

This linearized equation is only valid for small changes per roundtrip e.g not for ultrashort pulses, but modelocked lasers.

With the parabolic approximation for the loss modulator, we get the Schrodinger equation for a
harmonic oscillator. For a periodic potential, there are bound states.

For a deep, cosine shaped potential, we make a parabolic approximation for $m_{A M}(t)$.

The solution are the Hermite polynomials $A_n(T, t) \sim H_n$.
We find the same form for $\tau_p$. Then, $A_n(T, t)=A_n(t) e^{\lambda_n \frac{T}{T_k}}$

A stable solution follows from $g=\ell+\frac{1}{2} M \omega_m^2 \tau^2$, which is modified compared to CW operation. $T_{\text {static loss }}$
This allows several modes to reach threshold and lase.

The steady-state condition is $g=l$.

A modulator reshuffles the energy, and additional modes start to lase.

A single mode at frequency $f$ gets sidebands at $f \pm f_m$ with weigh $\frac{M}{2}$ for $M \ll 1$. The main part has weight $1-M$.

## 7.5 Active modeloching with SPM, but no GDD
The linearized $S P M$ operator is $\Delta A_{S P M} \approx-i \delta\left|A\left(T_1 t\right)\right|^2$.

To obtain a self-consistent solution, we need a phase shift, the carrier-offset envelope phase $\Delta A_5 \approx i \psi A(T, t)$.

This is valid, since the optical phase is a degree of freedom. The full spectre experiences a constant phase shift.

The solution is a chirped gaussian pulse with chirp parameter $\beta$.

SPM shortens the pulse as expected. formula 6.96

## 7.6 Active modeloching with SPM and GDD<0: Soliton modelocking

An additional term appears which resembles the NSE. The NSE terms SPM and GDD dominate, while active modeloching terms as gain, loss and loss modulation are small for short pulses.

Therefore, we treat them as pertubation, however they preserve solitonic shape and compensate inevitable losses.

The initial pulse energy that could not be trausfered to the soliton, forms the continuum with much smaller intensity. Thus, the SPM for the continuum is much weaker than the dispersion, which temporally broadens the pulse.

Sufficiently broadened, it experiences increased loss due to the modulator. It decreases over time.
The steady-state solution ausalz is $A(T, t)=\underbrace{A \cdot \operatorname{sech}\left(\frac{t}{T}\right) e^{i \phi_0 \frac{T}{T_k}}+\text { perturbation }}$
soliton "continuum"
The gain is saturated by the soliton, however the continuum is narrow in frequency and increases due to
it seeing a higher gain. What prevents it from increasing is that it experiences more loss from the modulator.

In the beginning, we see oscillations due to interference between the soliton and the continuum. After many roundtrips, the continuum decays away and only the soliton remains.

For weak GDD, this modeloching process can become unstable: The continuum is not spread enough in tine, thus getting low loss, and therefore slowly grows
# 8 Passive modelocking
A saturable absorber is used to obtain SAM inside the cavity, by inducing high losses for low intensity
light, but low losses for short pulses with high intensity. The result is a loss modulation, since the peak
saturates the absorber more strongly than its wings. Then, we have a loss modulation with fast initial reduction of the loss, and a usually slower recovery. Circulating low-intensity light thus disappears over time, due to higher loss than gain. Further, they have small modulation depth and absorb over big wavelength range.

## 8.1 Semiconductor saturable absorber: SESAM

A SESAM gives self-starting modelocking of diode-pumped ultrofast solid-state lasers.
$$ \begin{align*}
\begin{aligned}
& 80 \mathrm{JJ} \text { al freq MHz } \\
& \text { lie energy and the pulse repetition rate. }
\end{aligned}
\end{align*} $$

They solved the Q-suitch instability problem, they pushed the pulse energy and the pulse repetition rate.
Relevant parameters depend not only on material properties, but also the specify device structure, giving freedom.

Reflectivity decreasing with incident optical intensity.

The modulation depth is $\Delta R=1-e^{-2 q_0} \approx 2 q_0$. for small losses and $q_0$ unsaturated loss.

Lattice mismatch causes strain-inducing defects lowering some optical qualities.
For the bottom Bragg mirror we want two lattice matched materials, while the absorber should have a lower bandgap than the laser. The red horizontal line needs to be lower.

Thus, for Gads we need In content, and lower Ga content.

## 8.2 Theory of saturable absorber
incoming pulse

The saturable loss coefficient is $\frac{d q}{d t}=-\frac{q(t)-q_0}{\tau_A}-q(t) \cdot \frac{P(t)}{E_{\text {sati, }}}$ where $\tau_A$ is the recovery time of the saturable absorber. The recovery time $\tau_A$ tells how long until the losses are high again.

## 8.3 Slow saturable absorber
For slow absorbers $\tau_p<\tau_A$, we neglect the recovery within pulse duration, so we neglect $\frac{q(t)-q_0}{\tau_A}$.
Then $P(t)=E_p \cdot f(t)$ with $\int_0^{T_R} f(t) d t=1$ so that $q_{\text {in te integral since repetitive signal }}(t)=q_0 \exp \left(-\frac{E_p}{E_{\text {sat, } A}} \int_0^t f\left(t^{\prime}\right) d t^{\prime}\right)$ and $q(t)$ is independent on the pulse length.
The total loss of a pulse passing through the absorber is $q_p\left(E_p\right)=\int_0^{T_R} q(t) \cdot f(t) d t$, independant on pulse shape.
Then the absorbed energy is $E_{a b s}=2 q_p\left(E_p\right) E_{p_1}$ since part of the pulse has to be absorbed to saturate the absorber.

## 8.4 Fast saturable absorber
For fast absorbers $\tau_p » \tau_A$, the absorption adjusts immediately to the incoming power $P$. Therefore, we can set $\frac{d q}{d t}=0$. Using $P_{\text {sat, } 1}=\frac{E_{\text {sati }}}{\tau_A}$ where $I_A$ is the pulse intensity at the absorber, we get $q(t)=\frac{q_0}{1+\frac{I_A(t)}{I_{s a t}}}$, and to get the loss through the absorber, we assume solitonic shape and a
fully saturated "ideally fast" saturable absorber. We find $q_p=\frac{q_0}{3}$ which depends on pulse shape.
For an ideally fast saturable absorber, we always assume $I_A<I_{\text {sat, } A}$ so that $q(t)=\underbrace{q_0-\gamma_A I_A(t)}_{\text {see figure }}$ where $\gamma_A=\frac{q_0}{I_{\text {sati }}}$.

## 8.5 History of SESAM

Semiconductors have high absorber losses, so place them in cavity.)

RPM - Dec 1, 1990 External cavity needs to be interferometrically resonant passive modeloching

Saturable absorber Mirror

A-FPSA - April 1, 1992 antiresonant Fabry-Perot saturable absorber

Scaling A-FPSA - Feb. 15, 1995 Single quantum well absorber

High $R_{\text {top }}$ reduces losses )
$R_{t_0} \rightarrow 0$ increases the coupling of the laser mode to the absorber.

SESAM - May 19, 1995
Absorber embedded inside a mirror
Absorber directly integrated into mirror.
## 8.6 High vs low finesse

The top reflector is adjustable, determining the effective macroscopic saturation fluence.

Bottom reflector absorber layer- $\frac{1}{2} \mathrm{Hm}$ Top reflector Auti-resonant low -finesse SESAM multiple periods: higher $F_{\text {sat }}$ and I
Bottom reflector

The low-finesse is limited by the bandwidth of the lower Braggmirror, and potentially higher insertion losses.

By choosing the position of the absorber, we decide how easy it is to saturate the absorber. The antiresonant design allows for broadband design with minimal GDD. We write the bottom reflectivity as $R_b e^{-i \varphi_b}$ and the top reflectivity as $R_t e^{-i \varphi_t}$.

## 8.7 Resonant vs Anti-resouant SESAM

Antiresonant SESAM: $\varphi_{r t}=\varphi_b+\varphi_r+2 k n \bar{n}=(2 m+1) \pi$
The dip is not narrow, as the Fabry-Perot comes with absorbing spacing layer. This broadens its resonance.

The resonant design is strongly wavelength dependant, and difficult to grow. However, we can tune $\Delta R$ with wavelength. Due to its higher intensity, the resonant design is more susceptible to damage.

Since $\Delta R \sim \varepsilon$ and $F_{\text {sat }} \sim \frac{1}{\varepsilon}$ so $\Delta R \cdot F_{\text {sat }}=$ const. with $\varepsilon$ the field-enhancement factor, it has a higher saturable absorption, and lower $F_{\text {sat }}$.

Placing the saturable absorber close to a node reduces losses, thus getting rid of the dip despite the resonant design. However, that makes it hard to saturate.

The antiresouant design is good for modelocking of short pulses, and less suscep tible to damage.

## 8.8 Dispersive SESAM

We can obtain SAM and negative GDD, that however would require many mirrors. Negative dispersion is obtained with a GTI-type SESAM. The position of the saturable absorber layer is an important parameter. Placing it at high intensity reduces the effective $F_{\text {sat }} \sim \frac{1}{\varepsilon}$, but that causes a resonance dip at resonance wavelength and pushes the device to positive GDD. The device then operates at a field minimum.

## 8.9 Ultrabroadband SESAM

The reflectivity bandwidth increases with the refractive index contrast.
Silver is used to replace the Bragg mirror, since it is broadband, it is however quite lossy like any metal.
We get large reflectivity over large bandwidth. It works well with lattice mismatch.
## 8.10 Theory of passive modelocking

We consider three combinations of gain and saturable absorber.
## 8.11 Passive modelocking with slow saturable absorber with dynamic gain saturation
This method is relevant for colliding pulse modeloching, dye lasers and SESAM.

CPM is able to achieve <30fs pulses, however this is only possible in a harrow wavelength band.

Its modernisation is the CPM VECSEL.

The conditions for stable modelocking are:
1) Higher losses than gain at the beginning, $l_0>g_0$. Canty mode area
2) The absorber saturates faster than the gain, $E_{\text {sati }}<E_{\text {sati }}$ or $\frac{A_A}{\sigma_A}<\frac{A_L}{\sigma_L}$. " "loss drops quicker"
3) The absorber recovers faster than the gain, $\tau_A<\tau_L$. time
slow saturable absorber
We find $q(t)=\sigma_A^{\sigma_A d_A} \exp \left(-\frac{E_p(t)}{E_{s a l, A}}\right)$ and since $\tau_L \sim n s \gg \tau_{p,} g(t)=\sigma_L N_L d_L \exp \left(-\frac{E_p(t)}{E_{s a l, L}}\right)$ for $d$ the thickness.
The net gain window is $g_T(t)=g(t)-q(t)-\ell_R=g_T(E)<0$ at beginning and end required.
total losses
The net gain window is a polynomial of second order in $E=\frac{E_p(t)}{E_{\text {sat iA }}}$, and $l_R=l_0-q_A$ is the loss in the resonator without absorber. Beginning and end refer to $E=0$ and $E=\frac{E_D}{E_{\text {sot iA }}}$, respectively.

The larges $g_T^{\max }=g_T\left(E_{\max }\right)$, the shorter the pulses becomes. We find that $g_T^{\text {max }}(s)$ increases asymptotically to $\frac{l_0}{2}$ with $s=\frac{E_{s a t, L}}{E_{\text {sat, } A}}=\frac{\sigma_A A_L}{\sigma_L A_A}$, usually around 3-12. Therefore, we want $A_L>A_A$.

Since the cross section is fixed by the material, we can tune $s$ only by the mode area.

We consider the master equation with gain, SAM and a time shift through the saturable absorber.
First neglecting $S P M$ and $G D D$, the ansatz is a soliton $A(t)=A_0 \cdot \operatorname{sech}\left(\frac{t}{\tau}\right)$ with $\tau \leqslant \frac{4}{\pi} \frac{1}{\Delta f_g}$. Including SPM halves the pulse duration
## 8.12 Passive modelocking with a fast saturable absorber for solid-state lasers

Compared to active modelocking, we expect much shorter pulses due to the large curvature with SAM.
loss The gain cross-section $\sigma_L$ in solid-state lasers is much smaller than in dye lasers.
Thus, $E_{\text {sati }} \sim \frac{1}{\sigma_L}$ will be much higher, and a dynamic gain saturation will be negligible.
The saturable absorber is assumed to be ideally fast, thus $q(t)=q_0-\bar{\gamma}_A|A(t)|^2$.

The master equations contains gain and loss, SPM, GDD, TOD and a phase shift,
$r^{g / \Omega_g^2}$ from gain and lois operator
Without SPM and GDD, the soliton $A(t)=A_0 \operatorname{sech}\left(\frac{t}{\tau}\right)$ with $\tau=4 \frac{\left|D_g\right|}{\bar{\gamma}_A E_p}$ full| $f \cdot 1 / s l_0=g+\frac{1}{2} \bar{\gamma}_A\left|A_0\right|^2 \rightarrow g$ for CW laser.
Thus, a net gain window is only formed within the short time window of the optical pulse.

In passive modelocking with a saturable absorber, the loss modulation is induced through the pulse itself, hence SAM.

The master equation with SDM and GDD results in a chirped soliton $A(t)=A_0 \operatorname{sech}\left(\frac{t}{\tau}\right)^{1+i \beta}$ where $\tau$ takes
the same form as before if $\beta=0$, eg an unchirped soliton. Then also the ratio of gain dispersion and SAM balancer with the ratio of SPM and GDD,e.g. $\frac{|D|}{\bar{\delta}}=\frac{D_g}{\bar{\gamma}_A}$.

We see, solitons are never stable without SAM.
The solution is stable if the loss of $C W$ pertubations satisfies law $<\frac{1}{T_R} \int_0^{T_R} d t \cdot l(t)$.
## 8.13 Kerr lens modelocking

KLM is an example of passive modeloching with a fast saturable absorber.

The kerr-effect and an aperture form an artificial fast saturable absorber, by reducing the laser mode area for
high intensities. Low intensity light experiences no SPM and gets blocked, effectively surpressing CW operation due to its low peak intensity. This is the principle of self-focussing.

It creates shortest pulses ~1fs, but is not self-starting, and the SA is coupled to the cavity design

## 8.14 Passive modelocking with slow saturable absorber and no dynamic gain saturation: Soliton modelocking

This case is relevant for modelocked solid-state lasers with constant gain saturation, or a SESAM. balance of SPM and GDD
The process is self-starting and pulse shaping is solely done by soliton formation.

The net gain window is open much longer, and $g_T \leqslant 0$ is no longer needed.

The continuum does not experience SPM due to its low intensity, so that GDD spreads it out. The continuum
is spectrallynarrow, therefore experiencing higher gain. The slow $S A$ is still fast enough to ensure that the continuum experiences enhanced loss, and never reaches threshold. This stabilizes the soliton.
The absorber recovery time is $w \sim \sqrt{\frac{1}{|D|}}$.
larger dispersion IDI
absorber recovery time

In the unstable regime, the soliton losses are larges than the contiunum losses.
fan below absorber recovery time
In the ps-regime, dispersion and solitons are irrelevant. However, another mechanism can stabilize the pulse "back in time
formation. The "center of gravity" of the pulse moves to the right, since it is depleted left.

The pulse is moving backwards and can swallow up noise behind it.

## 8.15 Starting passive modelocking
Passive modelocking ideally starts from noise fluctuations of the laser, where one noise spike is amplified move than others until it reaches steady-state. Initially, there pulses are very long

A KLM Ti: Sapphire laser usually does not start on its own, and additional methods have to be used.
For an ideally fast saturable absorber, SAM scales as $q(t)=q_0-\bar{\gamma}_A|A(t)|^2$, and is weak for long pulses, so that the driving force is small and self-starting is challenging

In a slow saturable absorber, $S A M$ is independent on the pulse duration, but on pulse energy as $q_p=q_p\left(E_p\right)$.
Therefore, the force is constant.

Active modelocking is independant on SAM, and the sinusoidal loss results in large losses for long pulses.
Optimal self-starting conditions are obtained for $I<I_{\text {sati }}$ or $\frac{d T}{d I}$ maximal with the non-tinear transmission.
## 8.16 Passive modelocking - Q -switching instabilities
Q-switching instabilities of the saturable absorber can drive the laser to the QML regime and even make modeloching impossible. In general, it is undesirable as noise is increased
The condition to avoid $Q$-switching is $\left(\frac{P_{\text {entrap }}}{f_{\text {rep }}}\right)^2=E_\rho^2>E_{\text {sat, },} E_{\text {sat }, A} \Delta R$ or $F_{p, A}^2>F_{\text {sat }, L} F_{\text {sat }, A} \Delta R \cdot \frac{A_{\text {eff }} / L}{A_{\text {eff }, A}}$.
Since $F_{\text {sati }} \sim \frac{1}{\sigma_A}$ and $\sigma_A$ is large in semiconductors (SESAM), this condition is easily fulfilled.

At high pulse fluences, the inverse saturation absorption causes a roll-over, lowering $\Delta R$.
Therefore, rollovers gives stability against $Q$-switching instabilities.

The Q-switching condition before was valid for no roll-over, e.g $F_2 \rightarrow \infty$.
Modifying it we find $F_P^2>\frac{F_{\text {sati } A} \cdot \Delta R}{\frac{1}{A_L F_{\text {sat, L }}}+\frac{1}{A_A F_2}}$, so that $A_L$ does not need to be so small anymore.
# 9 Pulse measurement
The cable connector type decides the frequency range. Most often, BNC and SMA is used. Kirchhoff law is $\sum J=0$ and yields $\frac{d V}{d t}+\frac{V}{R_L C}=\frac{J}{C}$ with $J=\eta \cdot \frac{P_{\text {op }}+q}{h f}$
Photodiode
Measurement device
\& firt-oxder linearsyytem
This differential equation has the form $\tau \dot{y}+y=x$ or in frequency domain $\tau i w \tilde{y}+\tilde{y}=\tilde{x}$, where $x(t)=R_2 J(t)$ is the input and $y(t)=v(t)$ the output.
The transfer function is $\tilde{h}(w)=\frac{\tilde{y}}{\tilde{x}}=\frac{1}{1+i \omega \tau}$ or $h(t)=\frac{1}{\tau} e^{-t / \tau}$ where $\tau=R_L C$.
Further, from $\tilde{H}\left(\omega_{3 d B}\right) \equiv\left|\tilde{h}\left(\omega_{3 a B}\right)\right|^2=\frac{1}{2} \operatorname{Max}(\tilde{H}(w))_{\text {, we find }} \omega_{3 d 0}=\frac{1}{2}$. Note $3 d B \cong 10^{-3 / 10} \approx \frac{1}{2}$.
For a general pulse, $V(t)=h(t) * J(t)=\int h\left(t^{\prime}\right) J\left(t-t^{\prime}\right) d t^{\prime}$.
Signal

Step response

For a step function input, the response is $V(t) \sim\left(1-e^{-t / \tau}\right)$, with the rise time $\Delta t$ defined as the time to $g 0$ from $10 \%$ to $90 \%$ input. We find $\Delta t=\ln g \cdot \tau[p s] \approx \frac{350 \mathrm{GHz}}{f_{3 d B}[\mathrm{GHz}]}[\rho s]$.

For a gaussian response, we find $h(t)=e^{-(t / t)^2}$ and $\tilde{h}_{\text {bot }}(\omega)=e^{-\left(\frac{\omega \tau_{\text {bt }}}{2}\right)^2}$ where we defined $\tau_{\text {hot }}=\sqrt{\tau_1^2+\tau_2^2+\ldots}$ which is valid in a linear system, such as photodiode + amplifier + oscilloscope.

Further, $\left.\tau_{\text {fwHM }} \approx \frac{312 G \mathrm{~Hz}_z}{f_{\text {sass }}[(\mathrm{Hzz})}[p]\right]$
## 9.1 Fast photodiode

Usually, we have $R_L=50 \Omega$. For lower $R_L$, we get faster response $\tau=R_L C_1$, but suffer higher ohmic resistance of cables. Yields a small voltage drop, so less sensitive measurement.

A fast photodiode should have low transit time to get fast response time
They need a small active area $A$ and large $d_{\text {, }}$ through $\tau=R_L C=R_L \frac{\epsilon \epsilon_0 A}{d} \sim A$.

## 9.2 Sampling Oscilloscope
For repeating signal, we can measure with delay $\Delta t$ compared to the signal periodicity.

Can have response and resolution of $\sim p s$.

## 9.3 Equivalent time sampling

A periodic signal at frequency $f$ is sampled by an ultrafast pulse.

Periodic sampling pulse train (rmeasuremert pulse)

Real time $t$
Chose at frequency $f-\Delta f$, longer period

Superimpose signal at beatnote $\Delta f$.

Frequency $\Delta f$

Oscilloscope time $\tau \propto 1 / \Delta f$
## 9.4 Real-time oscilloscopes

They can measure non-repeating signals, and are usually "digital storage oscilloscopes". To specify their speed, we use samples per second, so how often a waveform is sampled per time.

The analog bandwidth in GHz should be smaller than samples per second.

## 9.5 Intensity autocorrelation

For pulses <ops, we can't use the mentioned methods.
which becomes $I_{2 w}(\tau) \sim \int_{-\infty}|E(t) E(t-\tau)|^2 d t=\int_{-\infty}^{\infty} I(t) I(t-\tau) d t$ for $E_1=E_2=E_1$ "back ground-free.".
It can't reveal antisymm. signals, since $I_{2 \omega}(\tau)=I_{2 \omega}(-\tau)$. Also, $I_{2 w}$ is minimal at no temporal overlap.

Further, we can extract the pulse duration, but we must assume a pulse shape. It contains no information about pulse or shape. To calibrate, we measure $\Delta \tau$ and compare to known true time $\Delta t_{\text {true }}=2 \cdot \frac{\Delta z_0}{c}$.

## 9.6 Interferometric autocorrelation
The measured output is $I_{2 w}^{1 A C}(\tau) \sim \int_{-\infty}^{\infty}\left|(E(t)+E(t-\tau))^2\right|^{2 E} d t$ fromphotodetector which is also symmetric in $\tau$.
Then, for a monochromatic wave $I_{\text {int }}=2 I+2 I \cos (\Delta \phi)$ for $\Delta \phi=k \Delta z=\omega_0 \tau$, so phase information is revealed. / or pulse duration
The SHG is required, as otherwise no phase information is revealed without a non-linear in tevaction.
We can show, that we get the same information as a power spectrum.
with SHG, we have phase information, as the normalized $I_{1 A C}(\tau)=\frac{I_{2 N}^{1 A C}(\tau)}{I_{2 \omega}^{1 A C}(\infty)}$ contains complex terms.
$I_{\text {AC }}$ is again symmetric, so an asymmetry will not show in the IAC.
We find $I_{\mid A C}(\tau \rightarrow \pm \infty)=1$, $I_{1 A C}^{\max }=I_{1 A C}(\tau=0)=8$ and $I_{1 A C}^{\text {min }}=0$. Further, the non-bachground-free intensity autocorrelation ratio is $\frac{I_{2 w}(\tau=0)}{I_{2 w}(\tau \rightarrow \infty)}=3$.

Information about chirp is revealed, as the chirped pulse envelope is complex. The spechal bandwidth becomes larges than that of a transform-limited pulse with same pulse duration. Therefore, the coherence time over which interferences are resolved becomes smaller than the pulse duration, egg $\Delta f<\Delta f_{T B} \Rightarrow \tau_{\text {con }}<\tau_p$.

One reason for the sensitivity of IAC is that fields enter to the fourth-order.
## 9.7 Autocorrelation geometries

Nou-collinear: Background-free, but limits time resolution.

Collinear, type I: No geometrical limits in the time resolution, and results in I Ac.

Collinear, type II: Has group-velocity mismatch resulting in asymmetric IAC, which is not
so good. There is no interference due to different polarizations.

Again no geometrical limits in the time resolution, see next page.
## 9.8 Temporal resolution

A spatially integrating detector measures pulse duration $\tau_m^2=\tau_p^2+\delta t^2$ with $\delta t=\vartheta_0 \cdot \frac{\omega_0}{c}$ and $\omega_0$ the beam waist of the light.

This is a limitation of non-collinear crossing, as it can't be used with spatially integrating detector for few-fs pulses.

## 9.9 FROG: Frequency-resolved optical grating
- other order possible too
thigh-pass filter removes any fundamental rignal.

Beamsplitter
The fourier-transformed output of the spectrometer is $I_{F R_{0 G} G}^{s H 1 a}(w, \tau)=\left|F\left(E_{\text {sig }}(t, \tau)\right)\right|^2=\left|\int_{-\infty}^{\infty} d t \cdot E(t) E(t-\tau) e^{-i \omega t}\right|^2$.
The aperture and filter can be replaced by prism too.
We define the signal field as $E_{\text {sig }}^{S H G}(t, \tau)=E(t) E(t-\tau)$. Since $S_{\text {Proa }}^{s H 1 a}$ is real, is contains no phase information alone.
The goal of FROG algorithm is to find the phase by solving $\sqrt{I_{f R_0 a}^{S H}(\omega, \tau)} \cdot \phi(\omega, \tau)=\int E_{\text {sig }}(t, \tau) e^{-i \omega t} d t=\tilde{E}_{\text {sig }}(\omega, \tau)$ $\uparrow$ complex, unit valued
Through an iterative fitting procedure, where we try to satisfy two containts, we find the original input pulse.
Time domain
AFT
$$ \begin{align*}
 \begin{gathered}
\tilde{E}_{\text {sig }}^{\prime}(\omega, \tau) \longleftarrow \text { Apply data } \longleftarrow \longleftarrow \tilde{E}_{\text {sig }}(\omega, \tau) \\
\uparrow \text { satisfy 2) }
\end{gathered}
\end{align*} $$
1) Physical constraint: $E_{\text {sig }}=E(t) E(t-\tau)$
$\qquad$ 2) Intensity constraint $\sqrt{I_{\text {PRoa }}} \phi=\int E_{\text {sig }}(t, \tau) e^{\text {int }} d t$ $I_{\mathrm{FROG}}^{\mathrm{meas}}(\omega, \tau)$
Frequency domain
The SHG-FROG trace $I_{\text {FROG }}^{S H 1 G}(\omega, \tau)$ is symmetric in $\tau$, implying that the pulse could be time reversed.
## 9.10 SPIDER: Spectral phase interferometry for direct electric-field reconshuction
we rn weed $T \ggg \tau_{p_1}$ implying quasi-monochvomatic

We produce two delayed pulses $E(w)$ and $E(w+\delta w)$, where the spectral shear $\delta w$ is obtained in SFG, by upconversion with a strongly-linear chirped pulse that came from yet another copy passing a
glass block with GDD. The time delay ensures that each replica is upconverted with a different portion of the chirped pulse containing different instantaneous frequencies, thus creaking the spectral shear.

The output is $I_{\text {SPIDER }}(\omega)=|E(\omega)+E(\omega+\delta \omega)|^2=|E(\omega)|^2+|E(\omega+\delta \omega)|^2+2|E(\omega) E(\omega+\delta \omega)| \cdot \cos (\varphi(\omega+\delta \omega)-\varphi(\omega)+\omega \tau)$,
with spectral phase $\varphi(w)$, so it contains phase information, that can be extracted with the Takeda algorithm:
careful
Writing $I_{\text {spider }}(w)=a(w)+b(w) \cos (\alpha(w)+\omega \tau)=a(w)+c(w) e^{i \omega \tau}+h . c$ for $c(w)=\frac{1}{2} b(w) e^{i \alpha(w)}$ and $\alpha(w), b(w)$ real.
Then $F T$ to time, so that $I_{\text {spider }}(t)=F(g(w))=A(t)+C(t-\tau)+C^*(t+\tau)$ with, $A(t)$ and $C(t)$ the $F T$ of a(w)
and $c(w)$. Thus, $I_{\text {spider }}(t)$ contains peaks at $t=-\tau_1,+\tau$, so we filter one peak and $F T$ back. contain same phase information
What we get is $F(C(t-\tau))=c(w) e^{i \omega t}$ which allows us to extract $\operatorname{Im}\left[\log \left(c(\omega) e^{i \omega t}\right)\right]=\alpha(\omega)+\omega t$.
(characteristic to setup; needs to be done once
From the interferogram created by the second harmonic, $\omega \tau$ is obtained and we find $\alpha(w)=\varphi(\omega+\delta w)-\varphi(w)$.
Start at arbitrary $w_0$, and define $w_i=w_0+i \cdot \Delta w$ with $\Delta w<\delta w$ and $i=1, \ldots, n$.
Then, $\alpha\left(w_n\right)=\varphi\left(w_{n+1}\right)-\varphi\left(w_n\right)$ or $\varphi\left(w_{n+1}\right)=\varphi\left(w_n\right)+\alpha\left(w_n\right)=\varphi\left(w_{n-1}\right)+\alpha\left(w_{n-1}\right)+\alpha\left(w_n\right)=\ldots=\varphi\left(w_1\right)+\sum_{i=1}^n \alpha\left(w_i\right)$.
Since $\varphi\left(w_1\right)$ is only an offset, we set it to zero. Since $\alpha(\omega)$ is a known quantity, we know $\varphi\left(\omega_{n+1}\right)$. By another trivial spectral power density measurement, we can reconstruct $E(w)=\sqrt{I(w)} e^{i \varphi(w)}$.

We don't need constant non-linear conversion efficiency as in FROG, as we work with interferograms, not amplitude.
These two pulses can interfere despite their delay, since they are superpositions of plane waves, so infinitely long in time.

Another explanation is that the spectrometer uses a narrowband pass, so only long pulses pass. The two pulses become narrowband and long, thus making it possible for them to interfere.
# 10 Noise

A light intensity $I(t)$ produces an electric current $J(t) \sim I(t)$ in a photodetector, while a microwave spectrum analyzer measures $S_I(\omega) \sim|I(\omega)|^2=F(\operatorname{corr}(I(t) I(t)))=F(R(\tau))$ for $R(\tau)=\int d t \cdot I(t) I(t-\tau)$ the autocorrelation.
$\uparrow_{-\infty}$ to $\infty$ instead of single pulse
It can therefore detect intensity noise, that originates from shot-noise, Johnson (thermal) noise and excess
laser noise. Any fluctuation in the optical path length results in timing jitter, since frep depends on $T_R$.
A modelocked pulse train with no noise can be described by a simple $\delta$-comb, since the usual duration of $1 p s$ is much below the electronic response time. Thus, we can write
$I^{\text {ideal }}(t)=I_0 \cdot T \sum_n \delta(t-n T)$ or $\tilde{I}^{\text {ideal }}(\omega)=2 \pi \cdot I_0 \sum_n \delta\left(\omega-n \omega_T\right)$ with $\omega_T=\frac{2 \pi}{T}$ for $T$ the pulse repetition period. This results in a spectral power density $S^{\text {ideal }}(\omega)=\left|\tilde{I}^{\text {deal }}(\omega)\right|^2=\left(2 \pi \cdot I_0\right)^2 \sum_n \delta\left(\omega-n \omega_T\right)$.

Including normalized intensity noise $N(t)$ and timing jitter $\Delta T(t)$ changes the intensity to $I^{\text {noise }}(t)=I_0 T \cdot(1+N(t)) \sum_n \delta(t-n T-\Delta T(t))$ for $\langle\Delta T\rangle=0$.

Intensity noise alone results in $S^N(w)=\left(2 \pi I_0\right)^2 \sum_n\left\{\delta\left(w-n w_T\right)+\tilde{N}\left(w-n w_T\right)^2\right\}$, e.g. noise sidebands.
Timing jitter alone results in $S^{\Delta T}(w)=\left(2 \pi I_0\right)^2 \sum_n\left\{\left(w-n w_T\right)+\left(\frac{n w_T}{2 \pi}\right)^2 \Delta \tilde{T}\left(w-n w_T\right)^2\right\}$, e.g noise sidebands that scale with a factor of $n^2$ for low $n$.

For large $n$, timing starts to dominate, which allows us to seperate the two contributions by comparing high harmonics with the first harmonic.

In reality, we see two additional sidepeaks, corresponding to relaxation oscillation.
The rms intensities noise is $\sigma_N\left[w_1, w_2\right]=\sqrt{\left\langle N^2(t)\right\rangle}=\sqrt{\frac{1}{\pi} \int_{w_1}^{w_2} d w \cdot S_N(w)}=\sqrt{\frac{P_{s b}\left[f_1, f_2\right]}{P_c}}$ where $S_N(w)=\left|\tilde{N}\left(w-w_\tau\right)\right|^2$ and $\frac{P_{s b}\left[f_1, f_2\right]}{P_c}=\frac{2}{B} \int_{n f_T+f_1}^{n f_T+f_2} d f \cdot \frac{P_{s b}(f)}{P_c}$ with $B=f_2-f_1$ the measure excludes the harmonic =signal
The bounds are required, as a measurement only acquires intensity noise within a region $w_1$ to $w_2$.

The lower bound $w_1$ is given by the measurement time, while $w_2$ is determined by the measurement
bandwidth.
The rus timing jitter is $\sigma_{\Delta T}\left[f_1 f_2\right]=\sqrt{\left\langle\Delta T(t)^2\right\rangle}=\frac{1}{f_T} \sqrt{2 \int_{f_1}^{f_2} d f \cdot L_1(f)}=\frac{1}{n f_T} \sqrt{2 \int_{f_1}^{f_2} d f \cdot L_n(f)}$ where
$L_n(f)=\frac{1}{n^2} L_1(f)=\frac{P_{s b}^{(n)}}{p_c^{(n)}}$ is the normalized power spectral density of the $n^{\text {th }}$ harmonic.
We need the index $n$ since timing jitter scales as $n^2$, while intensity noise is constant.

## 10.1 Units of noise
We define $d B=10 \cdot \log \left(\frac{P_2}{P_1}\right)$ and $d B m=10 \cdot \log \left(\frac{P}{1 \mathrm{~mW}}\right)$ for $P$ the power.
Another unit $d B_c=10 \cdot \log \left(\frac{P}{P_c}\right)$ describes how many $d B$ below the carrier.
# 11 Ultrafast measurement

We want to measure a slow process with a fast process. However, every detector is time-integrating.
Therefore, we map the dynamics to a static observable, so time to a translation in space, $S(\Delta x) \Leftrightarrow S(\tau)$.

We do not break Heisenberg's uncertainty principle, since the conjugate of energy is time, not delay $z$.

The pump triggers a process in the DUT (Saturate SESAM) that the probe measures (the absorption).

The delay is equivalent to time, if the probe pulse duration is negligible and the process is reproducable.

The chopper upshifts the signal to a frequency with low noise-backgronnd.
Placing it in the probe pulse would chop scattered light. A lock-in amplifier is a narrowband pass, and blocks far-away noise, increasing signal-to-noise ratio.

We call it degenerate, if pump and probe have the same center wavelength.

Collinear degenerate

In the latter setup, all power hits the detector, and simply
adding an attenuator might make the signal disappear.

Non-collinvar degenerate pump probe

Non-collinear is good for SNR because
the pump is not on the detector.
## 11.1 Degenerate four-wave mixing

The pump and probe will cause a local refractive index modulation, which can diffract light.

We have four waves, one pump wave, one probe wave, one photon that diffracts (input), producing the fourth wave, the signal (output). It is a third-order non-linear process, since three waves are the source to produce a single one.

## 11.2 Optical gating
We want to sample the time-dependant pulse. If the pump pulse is short enough, we can scan the signal pulse in SHG crystal.
We get a cross-corvelation at the output $I(\tau)=\int_{-\infty}^{\infty} I_{\text {sig }}(t) I_{\text {probe }}(t-\tau) d \tau=I_{\text {sig }}(\tau)$ since $I_{\text {probe }}(t)=\delta(t)$.

We can use optical gating in time-of-flight imaging, where we send a scan pulse onto a sample.
Some parts will scatter, and have a longer travel. Thus, only the photons that went through the tissue, and thus are the fastest. Only the "front" side of the pulse will be important in the optical gating process, where the transmitted pulse takes the role of the signal pulse.
For time-resolved four-wave mixing, we combine normal FWM with optical gating. The $2 k_2-k_1$ photon
becomes the signal pulse in optical gating.

In photoconductive switching, we use pulses to allow short connection between gates. They do so by exciting carries in the semiconductor.
# 12 Frequency combs
In the few cycle regime, the peak electric field might vary aloft compared to the peak envelope value. The CEO phase therefore leads to a lower measured value. We write $E(t)=A(t) \cdot e^{i w_c t} e^{i \varphi(t)}$

To create a stable comb, we need a modelocked laser with intensity and low timing jitter, as that determines the comb spacing $f_{r e p}$. This makes SESAM Er: Yb:glass a good choice, due to their suppressed relaxation oscillations.

The frequency comb is $f_n=f_{C E O}+n \cdot f_{\text {rep }}$ with $f_{C E O}=f_{r e p} \cdot \frac{\Delta \phi_0}{2 \pi}=\frac{\Delta \phi_0}{2 \pi T_R}$ and $f_{c E 0}=0$ for $v_p=V_g$.
Both free and $n$ can easily be measured in the GHz regime, by an RF counter and wave-meter.
## 12.1 $f-$ to- $2 f$ interferometer

Measuring $f_{c E 0}$ is not trivial, due to its low power density, so that we can't use FROG or SPIDER.
We use SHG to produce a SH-OFC, that we overlap with the fundamental. This requires the fundamental to span atleast one comb. Since SHG is a coherent process, it provider a phase-stable link.
$$ \begin{align*}
S H-O F C:
\end{align*} $$

Second-harmonic optical frequency comb

We pick $f_1=f_{C E O}+2 n f_{\text {rep }}$ in the OFC, and $f_2=2 f_{C E O}+2 n f_{\text {rep }}$ in the SH-OFC.
still integer
Then, the beatnote is at $f_2-f_1=f_{c E 0}$.
The SHG rarely spans one octave, however we really only need its low frequency part. Thur, many
comb lines contribute to the signal.

For a sufficiently strong CEO beat signal, a minimum photon flux permode is required. However, to avoid cycle slips, the number of detected photons needs to be 100 timer larger.

## 12.2 Feed-forward scheme for $f_{C E_0}=0$

For $f_{C E_0}=0$, there is no beatnote between the two pulses. Further to be really sure $f_{c E_0=}=0$, one would
have to wait infinitely long. Then, every pulse has same CEO phase $\Delta \phi_{\text {cEO }}$.
If we take a phase-stabilized pulse train, the overlap of fundamental and SH will create interference fringes.

In a free-running pulse train, the CEO will be random.

## 12.3 Applications

A clock is a very stable oscillator. The higher the oscillation frequency, the more accurate the clock can be.

To measure time, one heeds to count the number of oscillations. We are not able to count optical frequencies, so instead a beating is measured.
Combs allow to measure unknown frequencies $f_{\text {unknown }}=f_{c \in 0}+n f_{r e p}+\Delta f_1$ since we do know all the quantities on the right. Since we need n, we "count" the lines on our ruler, the comb.

This allows to link the new standard of time to the new one.

## 12.4 Dual comb spectroscopy

We overlap two combs with different $f_{\text {rep }}$, so that one moves across the other in time. This is equivalent as moving the arm in conventional spectroscopy. If pulses in the comb overlap, we detect a large beat signal.
This way, we down-converted to RF so that a standard microwave analyzer can be used.

It is a fast and precise measurement, but complex and expensive.

To map absorption to the RF domain, we add a gas cell before the detector.

With a dual-comb semiconductor disc laser (MIXJEL), we only need one laser.

Since the path lengths are different, their repetition frequency is different.
# 13 High-harmonic generation and attosecond science

Aftoseconds are interesting, because they are the timescale of atoms.
High-harmonic generation is spatially and temporally coherent, this makes it attractive to Xuv radiation ( $10-120 \mathrm{um}$ ), aswell as sub-fs pulses due to its large bandwidth.

For high intensities $\left(\sim 10^{14}-10^{15} \frac{\mathrm{~W}}{\mathrm{~cm}^2}\right)$ we can no longer omit higher-order terms in the polarization, and ionization occurs.

Only odd-order harmonics survive, by considering the interaction of a single atom with the cycles of the laser field (no proof here). Even-order harmonics vanish due to symmetry of the gas, and the periodicity of the driving field. For the cut-off we find $h f_c=I_p+3.17 U_p \approx I_L \lambda_L^2$ where $I_p$ is the ionization potential of the gas that is used for the HHG and $U_p=\frac{e^2 E_0^2}{4 m_e \omega_0^2}$ the ponderomotive energy from the laser field. We see that a laser operating at $\lambda_L=1 \mu \mathrm{~m}$ or $3 \mu \mathrm{~m}$ can go up to 90 or 100 harmonic order. 
## 13.1 Simple man's model

Coulomb potential of atom bends due to $E(t)$
e-thnuels out, and accelerates
1) Tunneling ionization
2) Acceleration in continuum
3) Recombination

The light needs to be linearly polarized, as the election will not return if the light exhibits ellipticity.
Thus, the pulses in an as-pulse train are separated by half the period of the driving electric field.

The emitted energy corresponds to kinetic plus ionization energy

The model predicts the existence of two classes of trajectories.

In a semi-classical approach, we consider $E(t)=E_0 \cos \left(\omega_0 t\right)$ and $\left(x_0, v_0\right)=(0,0)$.
Electric field ( $10^{10} \mathrm{~V} / \mathrm{m}$ )
$\qquad$

In the single active election approximation, only the least bound electron participates in the
process; generally a good approximation. Due to the large excursion, the influence of the parent ion can be neglected. At the cut-off, the long and short trajectory coincide, equivalent to the maximum achievable kinetic energy.

We could drive with a long wavelength laser, thus accelerating the electron longer, and moving the , $h_f f_C \approx I_L \lambda_L^2$
cut-off to higher energy. However, this gives the electron move time to disperse, and it also decreases the recombination probability, which moves the cut-off again to lower energies.

In reality, only one type (short or long) of trajectory predominantly contributes, which indicates phase-matching. The radiation emitted at different positions must be in phase, so we have $\Delta k=q k_0-k_q$ with $k_q$ the wavenumber of the $q^{t n}$ harmonic order.

To achieve $P M_1$ we look at two terms in $\Delta k_1$ the Guy phase and the accumulated phase of the elechon $\uparrow$ phase shift along focus
in the continuum. The first is always positive and the second is negative after the focus.

PM for long trajectories is harder to achieve due to the intensity-dependant phase, causing it to be much move specific to the focusing conditions. It can be explained with quantum path interference.

At high intensities, short driving pulses, high pressure or long media, the effects of ionization ave not negligible anymore. Thus, the PM condition is modified with a term for a linear dispersion coming from mental atoms, and other term from free electrons generated by ionization.

Ionisation only when field strong enough.
Therefore, PM is only possible at a spenfic time. Further, the material is absorbing and not birefringent,
resulting in a low efficiency of $\sim 10^{-6}-10^{-7}$. The efficiency is generally low, since $x u v$ is absorbed offer.

For quasi PM, we periodically modulate the waveguide size, which modulates the intensity.

At narrow spots, HHG is turned on, since intensity is directly coupled to HH efficiency.

Another way to achieve QPM is by colliding X-ray pulses. The created standing wave pattern achieves the same.

## 13.2 Temporal vs amplitude gating

Both methods can be used to produce or extract a single as-pulse

Amplitude gating:

Temporal gating:

## 13.3 Amplitude gating

In this approach, the harmonic emission is spectrally filtered. The as -pulse generated by the most intense
half-cycle is selected, and that pulse corresponds to the cut-off portion of the spectrum, with the broadest spectrum. reached with highest field strength
right of red $=$ left of black = short trajectories. Cutoff changes with time, called half-cycle cutoffs.

Using a high-pass filter yields single as-pulse, since only radiation from single half-cycle comes through.

A high-pass filter cuts off under specific HO. We need short pulse <5fs and CEO phase control.

## 13.4 Temporal gating - Polarization gating
Linear polarization has a high HHG efficiency, while circular polarization has a low efficiency.

Now, the trailing and leading edge of the driving pulse are elliptically polarized, while HHG only happens in a short time frame, due to that parts linear polarization. It requires o short driving pulse <6fs, since $\tau_g$ should be shorter than the separation between two XUV emission events. The window time $I_g$ scales with pulse bandwidth, and we further require CEO phase control to be able to select one pulse in the gate window.

## 13.5 Temporal gating - Double optical gating

To relax the requirement on pulse duration, we place a non-linear crystal for SHE. Adding the second harmonic of the driving field to the fundamental doubles its periodicity, consequently doubling the "allowed" pulse duration. This method allows to use higher laser intensities.

## 13.6 Temporal gating - louization gating

We use a driving pulse above saturation intensity, thus ionizing the material within the leading edge, and

HHG isn't possible anymore, due to the phase mismatch between generating pulse and XUV.

To filter out a single path, we must choose the right CEO phase. To remove off-axis contributions, we add a spatial filter. Ionization gating is highly efficient.

## 13.7 Spatial gating

We can spatially seperate single as-pulses generated from different half-cycles, by tilting the phase front of the generating pulse. We angular disperse the beam before letting it do HHG.

## 13.8 Attosecond streak camera

The photons generated from HH can ionize most gases due to their energies of $\sim 10-100 \mathrm{e} V$.

An as-pulse and an intense, short $\mathbb{R}$ pulse are overlapped. Further, they can be delayed with respect to each other. The as-pulse ionizes the gas and produces an election distribution, that the vector potential of the

IR pulse will shift as a function of its delay.

The effect doesn't cancle, as every electron sees the rest of the $\mathbb{R}$ pulse. This technique allows us to directly measure $E(t)$ and $A(t)$, and not just the envelope.
## 13.9 FROC-CRAB

To describe the streaking trace (electron energy vs delay), we use the stiong-field approximation, where we neglect the ion potential after the election left.
In the end, we can reduce it to a FROG spectrogram $S_{F_{R O Q}}\left(w, t_d\right)=\left|\int_{-\infty}^{\infty} d t \cdot e^{i \omega t} P\left(t-t_d\right) G(t)\right|^2$, which allows us to deduce the pulse shape with the FROG algorithm.

For an attosecond-pulse train:
For a single atlosecond pulse:

## 13.10 RABBITT: Reconstruction of attosecond beating by interference of two-photon transition

The phase of each sideband contains information about the XUV chirp, and also on the photoemission process.

Two "paths" lead to the same state, thus interfering.


