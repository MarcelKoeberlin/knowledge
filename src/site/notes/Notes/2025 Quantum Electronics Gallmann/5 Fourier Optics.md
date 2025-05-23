---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics-gallmann/5-fourier-optics/","hide":"true","updated":"2025-05-04T20:59:27.000+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.1 Plane Waves and the Helmholtz Equation\|5.1 Plane Waves and the Helmholtz Equation]]
- [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.2 Paraxial Approximation\|5.2 Paraxial Approximation]]
- [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.3 Fresnel Approximation\|5.3 Fresnel Approximation]]
- [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.4 The Fraunhofer Limit: Far Field\|5.4 The Fraunhofer Limit: Far Field]]
- [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.5 Diffraction Patterns -  Amplitude Modulation\|5.5 Diffraction Patterns -  Amplitude Modulation]]
- [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.6 Fourier Optics with a Lens\|5.6 Fourier Optics with a Lens]]
- [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.7 Holography\|5.7 Holography]]
- [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.8 Paraxial Ray Optics\|5.8 Paraxial Ray Optics]]

---
# 5 Fourier Optics
[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=58&selection=0,0,0,31|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=95&selection=1,0,1,14|•]]

In this chapter, we will use a plane wave expansion of a monochromatic field to study the light propagation across an optical system. The simplest of these is the free space. It will soon become clear why this chapter specifically has the word 'Fourier' in it. 

---
## 5.1 Plane Waves and the Helmholtz Equation
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=95&selection=14,0,16,37|•]] [[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=59&selection=0,29,0,29|•]]

As we have already seen (actually heard, since it wasn't shown), an arbitrary function may be constructed from a sum of harmonic functions of different frequencies and complex amplitudes. This is no different in two dimensions: An arbitrary function $f(x,y)$ may be constructed as a sum of harmonic functions of different spatial frequencies and complex amplitudes: 

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 6.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%206.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=59&rect=275,173,777,314|•]]

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/QE_script 14.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/QE_script%2014.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=95&rect=191,231,413,383|•]]

In the figure above, we describe the wave with a function $U(x,y,z),$ which could be the i-th component of the electric field for example. The problem at hand is the following: We consider the transmission of an optical wave $U(x,y,z)$ through an optical system, which is considered linear. The input plane is $U(x,y,0),$ while the output plane is $U(x,y,d):$ 

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 7.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%207.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=61&rect=190,206,647,458|•]]

As described in more detail [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2 Linear Time-Invariant Systems\|here]], a linear system is characterised by the impulse response, or by the response to a harmonic function. In other words, either the impulse-response function, or the transfer function is enough to fully characterise a linear system. 

We begin the discussion of Fourier optics by recalling the Helmholtz equation, which is the describing wave equation for the electric field in a sourceless medium:
$$
\nabla^2 \mathbf{E}-\frac{n^2}{c^2} \frac{\partial^2}{\partial t^2} \mathbf{E}=0.
$$
For a monochromatic wave, we may write  
$$
\mathbf{E}(\mathbf{r}, t)=\hat{\mathbf{E}}_0 U(\mathbf{r}) e^{i \omega t},
$$
where $U(\mathbf{r})$ is a scalar function of space. Its magnitude is identical to the magnitude of $\mathbf{E}(\mathbf{r},t).$ It is then easy to show that it fulfils its 'own' Helmholtz equation
$$
\nabla^2 U+k^2 U=0,
$$
with $k=n\omega/c$ being the usual wave number. The intensity is then obtained as $I(\mathbf{r})=\frac{1}{2 Z}|U(\mathbf{r})|^2.$ For the previously discussed [[Notes/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.4 Helmholtz Equation\|monochromatic plane waves]], $|U(\mathbf{r})|$ is independent of $\mathbf{r}.$ However, the Helmholtz equation allows us to extend this to cases where the intensity is not uniform in space. For this, we define the notion of a _wavefront_: The wavefront of a wave that solves the Helmholtz equation is a surface of constant complex phase. That is, if $\phi(r)=\arg [U(r)]$, a wavefront is a 2-D surface on which $\phi(r)$ is constant.

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 8.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%208.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=64&rect=58,155,415,458|•]]

We can see that the wavefronts change curvature upon propagation in a Gaussian beam. In the plane wave, the wavefronts are planes. As we may expect, these wavefronts bend while going through optical components, such as lenses:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 9.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%209.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=65&rect=626,157,790,476|•]]

---
## 5.2 Paraxial Approximation
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=96&selection=129,0,132,21|•]] [[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=67&selection=0,0,0,22|•]]

In the paraxial approximation, the rays (local surface normals of wavefronts) form only small angles with the propagation axis. Therefore, the $x$ and $y$ components now play an important role, since they encode any deviation from propagation straight along the $z$-axis. Therefore, this approximation is valid for beams with small divergence angles, as is the case for the output of a laser. Any non-trivial aspect is encoded in them. 

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 10.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2010.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=67&rect=486,254,723,483|•]]

For a plane wave defined by a fixed value of $z,$ we define a function

$$
V\left(k_x, k_y, z\right)=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} U(x, y, z) e^{i\left(k_x x+k_y y\right)} d x d y,
$$
that is a 2D-Fourier transform in space. The back-transformation is
$$
U(x, y, z)=\frac{1}{(2 \pi)^2} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} V\left(k_x, k_y, z\right) e^{-i\left(k_x x+k_y y\right)} d k_x d k_y.
$$
We consider then 
$$
\vec{k}=k_x \hat{x}+k_y \hat{y}+\hat{z} \sqrt{k^2-k_x^2-k_y^2},
$$
and the paraxial approximation can finally be described as 
$$
k_x^2+k_y^2 \ll k^2.
$$
By applying this transform to the Helmholtz equation, we obtain 
$$
\begin{align}
-\left(k_x^2+k_y^2\right) V+\frac{\partial^2 V}{\partial z^2}+k^2 V=0\iff \frac{\partial^2 V}{\partial z^2}+\left(k^2-k_x^2-k_y^2\right) V=0.
\end{align}
$$
Unsurprisingly, this is solved by 
$$
V\left(k_x, k_y, z\right)=V\left(k_x, k_y, 0\right) e^{-i z \sqrt{k^2-k_x^2-k_y^2}}\equiv V\left(k_x, k_y, 0\right)H(k_x,k_y),
$$
where $H(k_x,k_y)$ is called the _transfer function_. Note that there is not $k_z$ dependence, since it is not an independent variable. It is valid for propagation in any homogeneous isotropic medium. Thus,  knowing $U$ in any plane allows us to find its profile on any other plane, defined by a fixed distance $z$:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 11.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2011.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=71&rect=212,190,624,398|•]]

It is important to remember that we are working with linear systems: Harmonic components (frequencies) can not be created nor destroyed! Any harmonic component existing in the input plane must also be present in the output plane, and vice versa. The procedure to finding the field in the output plane is then
1. Calculate $V\left(k_z, k_y, 0\right)$
2. Multiply $V\left(k_z, k_y, 0\right)$ by $H\left(k_x, k_y\right)$
3. Apply inverse transform on this product to obtain $U(x, y, z).$

---
## 5.3 Fresnel Approximation
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=97&selection=179,0,181,21|•]] [[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=72&selection=0,21,0,21|•]]

In the expression for the transfer function $H(k_x,k_y)$, the component $k_z$ needs to be calculated multiple times in order to derive $U(x,y,z).$ This makes any analytical derivation difficult. In the paraxial approximation, we assume $k_x+k_y\ll k^2,$ such that the angles $\theta_x \approx k_x / k$ and $\theta_y \approx k_y / k$ of the wave vector with respect to the $z$-axis become both very small. We can then re-write the phase of the transfer function

$$
z \sqrt{k^2-k_x^2-k_y^2}=k z \sqrt{1-\frac{k_x^2+k_y^2}{k^2}}=k z\left(1-\frac{k_x^2+k_y^2}{2 k^2}+\frac{1}{8}\left(\frac{k_x^2+k_y^2}{k^2}\right)^2+\ldots\right) .
$$
The _Fresnel approximation_ is then to consider only terms up to second order. We can see that it basically approximates the phase contributions from $k_x$ and $k_y$ as a quadratic function, rather than the more precise spherical function. This then results in the simplified transfer function 
$$
H\left(k_x, k_y\right)=H_0 e^{i z\left(k_x^2+k_y^2\right) / 2 k} \quad\text{with}\quad H_0=e^{-i k z}.
$$
Here, $H_0$ is the transfer function for a plane wave in $z$-direction. The Fresnel approximation means that we are looking at an object from large enough distance:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/QE_script 15.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/QE_script%2015.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=98&rect=204,607,387,684|•]]

Considering the source of the wave to be spherical, the Fresnel approximation approximates the spherical wavefronts with parabolas:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 12.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2012.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=74&rect=55,170,513,302|•]]

Lastly, note that the paraxial approximation is $k_x^2+k_y^2\ll k_z^2,$ while the Fresnel approximation is $\frac{k z}{8}\left(\frac{k_x^2+k_y^2}{k^2}\right)^2 \ll \pi$ and therefore stricter than the paraxial approximation. The higher order terms must not only be small compared to lower order terms, but also compared to $\pi$, since we are concerned with the expansion of $e^{-ikz}.$
The Fresnel condition is satisfied for the $N_F\frac{\theta_m^2}{4}\ll 1,$ where $N_F= \frac{a^2}{\lambda z}$ is the Fresnel number and $\theta_m$ is the larger of the angles $\theta_x$ and $\theta_y.$ It determines the largest spatial frequency that a detector of size $a$ at distance $d$ can resolve. 

Next, we would like to know the response to a point source:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 13.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2013.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=77&rect=75,140,434,297|•]]

Obviously, we have that $U(x, y, 0)=A \delta(x) \delta(y).$ The response to this kind of input, is also called the impulse response function. It is the inverse Fourier transform of the transfer function. 
- Step 1: We find 
	$$V\left(k_x, k_y, 0\right)=A \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \delta(x) \delta(y) e^{i\left(k_x x+k_y y\right)} d x d y=A.$$
- Step 2: Therefore, we have find that 
	$$\begin{aligned}V\left(k_x, k_y, z\right) & =A H\left(k_x, k_y\right)  =A e^{-i k z} e^{i z\left(k_x^2+k_y^2\right) / 2 k}\end{aligned}.$$
- Step 3: We Fourier transform back to obtain
	$$U(x, y, z)=\frac{A i k}{2 \pi z} e^{-i k z} e^{-i k\left(x^2+y^2\right) / 2 z}.$$

We are now done: The impulse response function is 
$$
U(x, y, z)=A h(x, y)
$$
where
$$
\begin{aligned}
h(x, y)  =h_0 e^{-i k \frac{x^2+y^2}{2 z}} \quad\text{with}\quad
h_0  =\frac{i k}{2 \pi z} e^{-i k z}.
\end{aligned}
$$
Why is this useful? Because we are considering [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2.1 The Convolution Sum\|linear systems]] (or [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation#2.2.1 Linear System Theory\|here]]), and therefore knowing the output to the impulse (the impulse reponse) ==is enough to know the output to any input!== Specifically, the connection is made through 

$$
\begin{aligned}
U(x, y, 0) & =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \delta\left(x-x^{\prime}\right) \delta\left(y-y^{\prime}\right) U\left(x^{\prime}, y^{\prime}, 0\right) d x^{\prime} d y^{\prime} \\
U(x, y, z) & =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} h\left(x-x^{\prime}, y-y^{\prime}\right) U\left(x^{\prime}, y^{\prime}, 0\right) d x^{\prime} d y^{\prime}.
\end{aligned}
$$
Then, the closed form expression is
$$
U(x, y, z)=\frac{i k}{2 \pi z} e^{-i k z} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} U\left(x^{\prime}, y^{\prime}, 0\right) e^{-i \frac{k}{2 z}\left[\left(x-x^{\prime}\right)^2+\left(y-y^{\prime}\right)^2\right]} d x^{\prime} d y^{\prime}.
$$

The general steps to find the electric field and intensity at any point $(x,y,z)$ for given input are the following:
1. Find the 2D Fourier transform $V(k_x,k_y,0)$ of $U(x,y,0)$.
2. Multiply by the transfer function $H(k_x,k_y)$ to obtain $V(k_x,k_y,k_z)$.
3. Apply the inverse Fourier transform to obtain $U(x,y,z).$

---
## 5.4 The Fraunhofer Limit: Far Field
[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=85&selection=0,0,0,13|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=101&selection=14,0,16,31|•]]

In practice it is often assumed that detectors, or generally observation points, are placed far away from the light source in the so-called _far field._ This regime requires validity of the Fresnel approximation, plus some even stronger conditions. First, consider the following figure:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 14.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2014.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=85&rect=94,124,747,468|•]]

The two conditions that have to be met are that a small object of dimension $b \times b$ is mapped onto a small image of size $a\times a$ in a far distance $d:$

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/QE_script 16.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/QE_script%2016.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=102&rect=162,552,421,683|•]]

Mathematically, it can be written as 
$$
\begin{aligned}
& N_F \equiv \frac{a^2}{\lambda z} \ll 1 \quad\text{and}\quad N_F^{\prime} \equiv \frac{b^2}{\lambda z} \ll 1.
\end{aligned}
$$
As already mentioned, these are much more stringent conditions that the requirements for the Fresnel approximation. 

Consider light with constant spatial intensity (e.g. roughly from an aperture):

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 15.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2015.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=88&rect=96,143,758,461|•]]

It can be shown that in this limit, where the distance $d$ is large enough, the complex amplitude at point $(x,y)$ is proportional to the complex amplitude of the plane-wave component with angle $\theta_x\approx x/d$ and $\theta_y\approx y/d.$ In other words, we have 
$$
U(x,y,z=d)=h_0V(\frac{x}{\lambda d},\frac{y}{\lambda d},0).
$$
In other words, the Fraunhofer approximation states that all other waves/directions in a point of the output plane cancel out due to destructive interference. This is a powerful statement: If we can apply the Fraunhofer approximation, the output field is just a 2D Fourier transform of the input field!

---
## 5.5 Diffraction Patterns -  Amplitude Modulation
[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=91&selection=0,0,0,20|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=101&selection=169,0,171,32|•]]

When an optical wave passes through an aperture, travels some distance in free space, we call the resulting intensity distribution the diffraction pattern. From the discussion before, it should be clear that expecting the intensity pattern to simply be the (inverse) shadow of the aperture is too simple. This assumption only holds in ray optics, where the wave nature of light is ignored. 
Consider an aperture of arbitrary $p(x,y)$ shape in the input plane. Here, $p(x,y)$ is the aperture function:
$$
p(x, y)=\left\{\begin{array}{l}
1 \text { inside the aperture } \\
0 \text { outside the aperture }.
\end{array}\right.
$$
Then, we have that $U(x,y,0)=U(x,y,-dz)p(x,y)$ where $dz$ indicates the intensity distribution right before the aperture or input plane. From the discussion before, we now know, in principle, how do obtain the intensity distribution $U(x,y,z)$ in some distance $z.$ We will consider two examples:
### 5.5.1 Rectangular Aperture
Consider the rectangular aperture to have width $D_x$ and height $D_y.$ We illuminate the aperture with a wave travelling in the positive $z$ direction. Further, consider $D_x^2 \ll \lambda d$ and $D_u^2 \ll \lambda d.$ Therefore we will apply the Fraunhofer approximation to obtain
$$
U(z, y, d) \approx h_0 V\left(\frac{k x}{d}, \frac{k y}{d}\right),
$$
which allows us to obtain 
$$
\begin{aligned}
V\left(k_x, k_y\right) & =\int_{-D_x / 2}^{D_x / 2} d x \int_{-D_y / 2}^{D_y / 2} d y \sqrt{2 Z I_0} e^{i k_x x} e^{i k_y y} \\
& =\sqrt{2 Z I_0}\left[\frac{1}{i k_x}\left(e^{i k_x D_x / 2}-e^{-i k_x D_x / 2}\right)\right]\left[\frac{1}{i k_y}\left(e^{i k_y D_y / 2}-e^{-i k_y D_y / 2}\right)\right] \\
& =-\sqrt{2 Z I_0} \cdot \frac{1}{k_x k_y} \sin \left(k_x D_x / 2\right) \sin \left(k_y D_y / 2\right).
\end{aligned}
$$
Therefore, we obtain 
$$
\begin{align}
I_{\text {screen }}=\frac{1}{2 Z}|U|^2&=I_0\left(\frac{D_x D_y}{\lambda d}\right)^2\left[\frac{\sin \frac{\pi D_x x}{\lambda d}}{\left(\frac{\pi D_x x}{\lambda d}\right)}\right]^2\left[\frac{\sin \frac{\pi D_y y}{\lambda d}}{\left(\frac{\pi D_y y}{\lambda d}\right)}\right]^2\\&=I_0\left(\frac{D_x D_y}{\lambda d}\right)^2\operatorname{sinc} \left(\frac{\pi D_x x}{\lambda d}\right)\operatorname{sinc} \left(\frac{\pi D_x x}{\lambda d}\right).
\end{align}
$$
This result is not surprising, because we know that the Fourier transform of the top hat function is the **sinc** function. The intensity pattern is shown next:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 17.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2017.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=92&rect=453,133,734,249|•]]

### 5.5.2 Circular Aperture
Consider a round aperture of diameter $D.$ This time, the integration turns out to be more difficult, such that we obtain 
$$
V\left(k_x, k_y\right)=\sqrt{2 Z I_0} \cdot \pi D \cdot \frac{J_1\left(\frac{D}{2} \cdot \sqrt{k_x^2+k_y^2}\right)}{\sqrt{k_x^2+k_y^2}},
$$
where $J_1$ is a Bessel function of first kind. Therefore, the intensity function follows
$$
I_{\text {screen }}=I_0\left(\frac{\pi D^2}{2 \lambda d}\right)^2\left[\frac{J_1(\pi D r / \lambda d)}{\pi D r / \lambda d}\right]^2,
$$
with $r=\sqrt{x^2+y^2}.$ The resulting pattern, which is also called 'Airy disk', is shown here (note that the $d$ in the figure is our $D$):

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 18.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2018.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=92&rect=456,255,733,367|•]]

---
## 5.6 Fourier Optics with a Lens
[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=104&selection=0,0,0,29|•]] 

Consider a lens with focal length $f$. Then, one can show that 
$$
U(x, y, f)=\left(\frac{2 \pi f}{k}\right)^2 h_0 F\left(k_x, k_y\right) e^{-i \frac{f}{2 k}\left(k_x^2+k_y^2\right)} \delta\left(x-x_0\right) \delta\left(y-y_0\right).
$$
This means that all this type of 'mask' focuses all light to a point 
$$
\left(x_0, y_0\right)=(\theta_xf,\theta_yf)=\left(f k_x / k, f k_y / k\right),
$$
where $f$ is the distance away from the lens. This is the defining property of a lens. 

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 19.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2019.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=104&rect=391,338,704,489|•]]

Note that a lens is not an amplitude mask (like an aperture) anymore, but a phase mask. Considering that the wave propagates a distance $f$ through free space before the lens, the output is then 
$$
U(x, y, 2 f)=\frac{i}{\lambda f} e^{-2 i k f} V(k x / f, k y / f, 0),
$$
which implies that the lens simply takes the Fourier transform of the input. This is similar to what happens in the [[Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics#5.4 The Fraunhofer Limit Far Field\|Fraunhofer limit]], .e.g since propagation to the focal plane of a lens is similar to propagation to the far-field. However, with a lens, we need only satisfy the conditions for the Fresnel approximation. These properties of a lens are very useful, for example by using two lenses: The first performs a Fourier transform, while the second lens applies the inverse Fourier transform.

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 20.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2020.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=105&rect=108,241,741,463|•]]

Then, in the Fourier plane, one can place an amplitude mask to filter out particular spatial frequencies to modify the image. This is useful in image processing. The transfer function of such a system is 
$$
H\left(k_x, k_y\right)=p\left(\lambda f k_x, \lambda f k_y\right),
$$
where $p(x,y)$ is the transparency in the Fourier plane (the mask). Consider the following image as an example. A normal spherical aperture implements a low-pass filter. Therefore, slow variation in the brightness of the image are blurred out. On the other hand, taking the inverse of a spherical aperture, we obtain a high-pass filter. Only quick variation in brightness are let through, such that for example the Hair appears white. However, the mans skin has only slow variations in brightness, such that there no signal passes through. The skin appears dark.

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 21.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2021.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=109&rect=127,96,687,483|•]]

Also more exotic shapes are possible. The Fresnel zone plate can be shown to implements a focusing lens of focal length $f$. In contrast to a lens, it uses diffraction!

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 22.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2022.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=110&rect=80,138,284,344|•]]

Its transparency is described through 

$$
t(x, y)= \begin{cases}1, & \text { for } \cos \left(\pi \frac{x^2+y^2}{\lambda f}\right)>0 \\ 0, & \text { otherwise }.\end{cases}
$$

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 23.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2023.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=114&rect=128,157,687,477|•]]

The concentric rings are known as Fresnel zones. Light diffracts around the opaque zones, and their spacing is such that the diffracted light constructively interferes at the desired focus. The same zone plate will focus light of different wavelengths to different foci, meaning that one can filter out unwanted wavelengths. 

---
## 5.7 Holography
[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=111&selection=4,0,6,10|•]] [[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=121&selection=0,20,0,20|•]]

Holograms are objects, usually thin films, that encode in formation required to reconstruct the optical wave from an object, including its amplitude and phase. In principle, this is easy: We implement $t(x,y)$ on a thin film equal to $U(x,y,0).$ Then in the next step, we illuminate the back of the film with a plane wave to reconstruct the light from the object. However, this is not so easy, since all optical detectors are sensitive only to optical intensity, but not to phase. However, phase generally contains more information than amplitude. This is done by interfering a _reference wave_ $U_r$ with the _object wave_ $U_0.$  

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/QE_script 17.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/QE_script%2017.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=112&rect=134,547,244,674|•]]

If they overlap at $z=0,$ the intensity pattern of the resulting interference on a film is 
$$
\begin{aligned}
t & \propto\left|U_0+U_r\right|^2=\left|U_r\right|^2+\left|U_0\right|^2+U_r^* U_0+U_r U_0^* \\
& =I_r+I_0+U_r^* U_0+U_r U_0^* \\
& =I_r+I_0+2 \sqrt{I_r I_0} \cos \left[\arg \left(U_r\right)-\arg \left(U_0\right)\right].
\end{aligned}
$$
Therefore, the film now contains information on the phase. Illuminating the film now with the reference wave again, we obtain
$$
U=t U_r \propto U_r I_r+U_r I_0+I_r U_0+U_r^2 U_0^*.
$$
Assuming the reference wave to be a uniform plane wave moving along the $z$-axis, we obtain 
$$
U(x, y) \propto I_r+I_0(x, y)+\sqrt{I_r} U_0(x, y)+\sqrt{I_r} U_0^*(x, y),
$$
where the important term is the third one. It contains the reconstructed complex wave form the object. The trick is now to find a way to separate these waves. This is usually obtain by a large angular separation between reference and object wave:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/QE_script 18.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/QE_script%2018.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=112&rect=298,545,474,682|•]]

Note that the second term is called _ambiguity wave._ The reference and ambiguity wave both move in $z$-direction, such that they are automatically discarded. The conjugate wave moves as the mirror image of the object wave, so it can be discarded by only looking at the range of angles where the object wave disappears. From the prior discussion, it should be clear that this requires using high-coherence, monochromatic light sources, both for creation and reconstruction. Since this is not always possible, variations are possible, volume and rainbow holography can be used. In the prior, the 'film' now has a significant depth, such that the volume diffraction pattern acts as a wavelength filter and white light can be used to reconstruct the hologram. The latter usually appears on credit cards for anti-counterfeit measures. It is constructed as a transmission hologram but with a narrow horizontal slit placed between object and film plane. If reconstructed with a monochromatic light of same frequency as the original reference, the reconstructed wave looks like seeing the object through a slit. 

Generally, we differentiate two types of hologram:
- Reflection hologram: Recording material is placed such that reference and object beam approach the film from two opposite sides. The interference fringes are usually parallel to the surface of the recording medium. Reconstruction requires both object and reference beam to lie on the same side. 
- Transmission hologram: Reference and object beam approach the film from the same side. The interference fringes are generally perpendicular to the surfaces of the recording material. Reconstruction requires reference and object beam to lie on opposite sides.

An example of a transmission hologram is shown in the next figure ([source](http://hyperphysics.phy-astr.gsu.edu/hbase/optmod/holog2.html#c3)).

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/Pasted image 20250331170450.png|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/Pasted%20image%2020250331170450.png)
![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/Pasted image 20250331170456.png|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/Pasted%20image%2020250331170456.png)

Lastly note that in ordinary photography, only the intensity distribution is stored on a 2D film, such that all phase information is lost. Thus, not 3D information is contained within it. 

---
## 5.8 Paraxial Ray Optics
[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=140&selection=0,0,0,10|•]] [[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=113&selection=40,0,42,19|•]]

Often, it is not necessary to do a full Fourier treatment of simple optical elements, and it suffices to use the ray approximation. This is especially true when effects of diffraction can be neglected, for example when all apertures or beam sizes are much larger than the wavelength of the light. We call the normal to a wavefront a _ray,_ and we will be working in the paraxial approximation, e.g. all rays form small angles with the respect to the $z$-axis. 
A single ray is described as a 2D vector consisting of radial distance $r$ and $\theta$ the angle to that axis. We will also assume beams with cylindrical symmetry around the $z$-axis. For example, it is easy to see that a converging lens with focal lens $f$ implements
$$
\binom{r}{\theta} \rightarrow\binom{r}{\theta-r / f},
$$
where we used $\sin\theta\approx \theta.$ 

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/QE_script 19.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/QE_script%2019.webp)[[Notes/2025 Quantum Electronics Gallmann/QE_script.pdf#page=114&rect=158,560,443,685|•]]

This result is more general: In general, we can relate input $(r_1,\theta_1)$ and output $(r_2,\theta_2)$ through a matrix, called the ABCD- or ray-transfer matrix
$$
\left[\begin{array}{l}
r_2 \\
\theta_2
\end{array}\right]=\left[\begin{array}{ll}
A & B \\
C & D
\end{array}\right]\left[\begin{array}{l}
r_1 \\
\theta_1
\end{array}\right].
$$
For the lens we find
$$
\binom{r_2}{\theta_2}=\left(\begin{array}{cc}
1 & 0 \\
-1 / f & 1
\end{array}\right)\binom{r_1}{\theta_1}.
$$
Similarly, for propagation through a homogeneous medium of length $d,$ we find
$$
\binom{r}{\theta} \rightarrow\binom{r^{\prime}}{\theta^{\prime}}=\binom{r+d \theta}{\theta},
$$
such that the ray-transfer matrix is
$$
M=\left(\begin{array}{ll}
1 & d \\
0 & 1
\end{array}\right).
$$
For a planar interface between homogeneous media, we obtain
$$
M=\left(\begin{array}{cc}
1 & 0 \\
0 & n_1 / n_2
\end{array}\right),
$$
and the effect of a spherical mirror with concave radius of curvature $R$ is
$$
M=\left(\begin{array}{cc}
1 & 0 \\
-2 / R & 1
\end{array}\right).
$$

The advantage is now that we can easily model the ray through an optical system. For example, consider the propagation through a homogeneous medium of length $a$, followed by passing a lens of focal length $f$, followed by another propagation through $b$ of a homogeneous medium:

![Attachments/Notes/2025 Quantum Electronics Gallmann/5 Fourier Optics/02_Fundamental_phenomena 24.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics%20Gallmann/5%20Fourier%20Optics/02_Fundamental_phenomena%2024.webp)[[Notes/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=147&rect=273,247,622,383|•]]

Then, the matrix relating input and output is the ABCD matrix
$$
\binom{r^{\prime}}{\theta^{\prime}}=\left(\begin{array}{ll}
1 & b \\
0 & 1
\end{array}\right)\left(\begin{array}{cc}
1 & 0 \\
-1 / f & 1
\end{array}\right)\left(\begin{array}{ll}
1 & a \\
0 & 1
\end{array}\right)\binom{r}{\theta}.
$$

---