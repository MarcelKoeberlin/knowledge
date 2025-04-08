---
{"dg-publish":true,"permalink":"/courses/2025-quantum-electronics-gallmann/4-coherence-and-interference/","hide":"true","updated":"2025-04-05T17:29:44.000+02:00"}
---

Jump back to ==[[Courses/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.1 Young's Double Slit Experiment\|4.1 Young's Double Slit Experiment]]
- [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.2 Coherence Function\|4.2 Coherence Function]]
- [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.3 Coherence Time and Coherence Length\|4.3 Coherence Time and Coherence Length]]
- [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.4 Wiehner-Khinchin Theorem\|4.4 Wiehner-Khinchin Theorem]]
- [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.5 Interference\|4.5 Interference]]
- [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.6 Fabry-Pérot Interferometer - Etalon\|4.6 Fabry-Pérot Interferometer - Etalon]]
- [[Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference#4.7 Matrix Methods for Multiple Surfaces\|4.7 Matrix Methods for Multiple Surfaces]]

---
# 4 Coherence and Interference
[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=2&selection=0,0,0,35|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=74&selection=1,0,1,24|•]]

Coherence can be defined as light's ability to interfere. This is our starting point to understand coherence, but as we will see soon, this definition is too simple of a definition, and we will later describe it further. Additionally, and perhaps already familiar to us is interference, which is the superposition of waves forming a (quasi)stationary intensity pattern, or standing wave. A fully stationary interference patterns requires
- Waves with same polarisation,
- waves oscillating with the same frequency,
- and waves with constant relative phase.

The output of typical everyday light sources fluctuate randomly and their behaviour is only deterministic to some extent. The electromagnetic waves coming from a hot plate radiate seemingly random. That is the difference to coherent waves, which are correlated in frequency, phase and polarisation. 

---
## 4.1 Young's Double Slit Experiment
[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=5&selection=0,0,0,30|•]] 

Let us consider first the famous double slit experiment, where a monochromatic light source is diffracted on two slits of same width:

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/02_Fundamental_phenomena.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/02_Fundamental_phenomena.webp)[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=5&rect=201,120,670,414|•]]

**Coherent light**
First, the simulation is done with coherent light as a Gaussian beam, which is typically the output of a laser. For now, consider it as coherent because its bandwidth is 0 nm, e.g. perfectly monochromatic light:

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/coherent 1.gif|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/coherent%201.gif)

As we can see, the beam passes through the slits and produces an interference pattern, that is stationary over many timescales.

**Incoherent Light**
On the other hand, consider the same experiment with spatially incoherent light, so light with finite spectral bandwidth and finite spatial extent, over three timescales:

![[simulation-incoherent-femtoseconds.gif\|700]]

![[simulation-incoherent-picoseconds.gif\|700]]

![[simulation-incoherent-microseconds.gif\|700]]

We can see that the interference pattern fluctuates on the picosecond timescale. As we will see later, this is not by chance, but its coherence time $\tau$ can be estimated as
$$
\tau\approx\frac{\lambda^2}{c\Delta\lambda}\approx 1.4\text{ps}.
$$

---
## 4.2 Coherence Function
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=74&selection=18,0,20,22|•]] [[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=12&selection=0,9,0,9|•]]

Let us define coherence, 'the ability to interfere', more precisely. To this end, we introduce a mutual (first order) coherence function, that relates a field with itself at another time and space:
$$
\Gamma\left(\mathbf{r}_1, t_1 ; \mathbf{r}_2, t_2\right)=\left\langle\mathbf{E}^*\left(\mathbf{r}_1, t_1\right) \cdot \mathbf{E}\left(\mathbf{r}_2, t_2\right)\right\rangle.
$$
The average is to be understood as an ensemble average, implying a certain statistical property of the field, so a probability distribution for the phase or frequency. It accounts for the statistical properties of fluctuating optical fields, particularly in partially coherent or random light sources. Another reason for this average is that we can not measure the instantaneous electric field, and instead always average of an ensemble of samples. In this context, coherence represents _how reproducible an interference pattern is._ 

We generally differentiate between two types of coherence function:
- Transversal or spatial coherence: Considering $t_1=t_2,$
- Longitudinal or temporal coherence: Considering $\mathbf{r}_1=\mathbf{r}_2.$

We will solely work with stationary fields, meaning fields whose statistical properties do not change over time, such as first-order stationarity:
$$
\langle E(\mathbf{r}, t)\rangle=\mathrm{constant}.
$$
This allows us to only consider time differences, and not absolute times, such that we can replace $\tau=t_2-t_1$ and obtain
$$
\Gamma\left(\mathbf{r}_1, \mathbf{r}_2, \tau\right)=\Gamma\left(\mathbf{r}_1, t_1, \mathbf{r}_2, t_1+\tau\right),
$$
from which we immediately define the temporal/longitudinal coherence function as
$$
G(\mathbf{r}, \tau)=\Gamma(\mathbf{r}, \mathbf{r}, \tau).
$$
Perhaps more important is then the complex degree of coherence
$$
g(\tau)=\frac{G(\tau)}{G(0)}.
$$

We can broadly make out two cases:
- High coherence  (a laser): The phase difference between $t$ and $t+\tau$ is always the same, such that 
	$$ |g(\mathbf{r},\tau)|\rightarrow 1,$$
- Low coherence (a lightbulb): The phase difference between $t$ and $t+\tau$ is random, such that
	$$|g(\mathbf{r},\tau)|\rightarrow0.$$

Let us consider a concrete example. Consider multiple monochromatic plane waves, all of same wavelength and amplitude, but with random phase:

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/02_Fundamental_phenomena 1.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%201.webp)[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=16&rect=74,152,349,370|•]]

We can then calculate
$$
\begin{aligned}
G(\tau) & =\left\langle\vec{E}^*(t) \cdot \vec{E}(t+\tau)\right\rangle \\
& =\left\langle\vec{E}_0^* e^{-i\left(\omega t+\varphi_j\right)} \cdot \vec{E}_0 e^{i\left(\omega(t+\tau)+\varphi_j\right)}\right\rangle \\
& =\left\langle\vec{E}_0^* \cdot \vec{E}_0 e^{i \omega \tau}\right\rangle \\
& =\left|\vec{E}_0\right|^2 e^{i \omega \tau},
\end{aligned}
$$
such that we obtain for the coherence function
$$
g(\tau)=\frac{G(\tau)}{G(0)}=e^{i \omega \tau} \Rightarrow|g(\tau)|=1.
$$

Since the complex degree of coherence can not go above $1,$ we have maximum coherence such that $g(\tau)$ is infinitely broad and $1$ at all times. This allows us to predict the phase of this sinusoidal function at any time from knowledge of any other time. In comparison, consider light of random wavelength, amplitude and phase. On the right side, the coherence function is shown:

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/QE_script 11.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/QE_script%2011.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=76&rect=97,173,507,310|•]]

We find that, for a truly random field, 
$$
|g(\tau)|\rightarrow0,\quad\text{for}\quad\tau\neq0.
$$
Therefore, the $g(\tau)$ is similar to a delta 'function', e.g. $1$ at zero time delay, and zero everywhere else.  

---
## 4.3 Coherence Time and Coherence Length
[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=18&selection=0,35,0,35|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=75&selection=152,0,154,41|•]]

The concept of coherence allows us to define a coherence time as
$$
\tau_{\text{coh}}=\int_{-\infty}^{\infty}|g(\tau)|^2 d \tau\sim\frac{1}{\Delta f},
$$
where the last term is a result of Fourier theory, and $\Delta f$ is the FWHM of the power spectral density (see next chapter). Therefore, the first example of monochromatic plane waves that only differ from a random phase offset have infinite coherence time, while the random electric fields have zero coherence time. Similarly, we can define the coherence length as
$$ 
l_{\text{coh}}=c\tau_{\text{coh}},
$$
telling us over which distance light stays coherent. Unfiltered sun light has a coherence time of $1$ fs (coherent over 300 nm), while a single-mode laser has a coherence length of 100 $\mu$s, which implies a coherence length of 30 km!

---
## 4.4 Wiehner-Khinchin Theorem
[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=19&selection=0,23,0,23|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=75&selection=154,17,154,41|•]]

First, we define the power spectral density (PSD) as
$$
S(\omega)=\lim _{T \rightarrow \infty} \frac{1}{2 \pi T}\left\langle \left| V_T(\omega)\right|^2\right\rangle\quad\text{where}\quad V_T(\omega)=\int_{-T / 2}^{T / 2} E(t) e^{-i \omega t} d t.
$$
The PSD essentially provides us the optical power per optical frequency, usually specified in milliwatts per terahertz. However, note that the word 'power' here does not always relate to power in watts, but in general to the [[Notes/Signals and Systems/1 Signals and Systems#1.2 Energy and Power\|power of a signal]]. Then, the ==Wiehner-Khinchin theorem== relates the power spectral density to the coherence function via
$$
S(\omega)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} G(\tau) e^{-i \omega \tau} d \tau,
$$
allowing us to obtain the spectrum by measuring the coherence. From this, it is clear that there must also be a relation between the FWHM of the PSD, and the coherence time. We also call $\Delta f$ the spectral width. Next, some examples are shown:

| Source                                                                                            | $\Delta f_c(H z)$  | $\tau_c=1 \Delta \tau_c$ | $l_c=c \tau_c$ |
| ------------------------------------------------------------------------------------------------- | -------------------- | ------------------------ | -------------- |
| Filtered sunlight $\left(\lambda_0=0.4-0.8 \mu \mathrm{~m}\right)$                                | $3.74 \cdot 10^{14}$ | 2.67 fs                  | 800 nm         |
| Light emitting diode $\left(\lambda_0=1 \mu \mathrm{~m}, \Delta \lambda_0=50 \mathrm{~nm}\right)$ | $1.5 \cdot 10^{13}$  | 67 fs                    | 20 $\mu$m      |
| Low-pressure sodium lamp                                                                          | $5 \cdot 10^{11}$    | 2 ps                     | 600 $\mu$m     |
| Multi-mode He-Ne laser $\left(\lambda_0=633 \mathrm{~nm}\right)$                                  | $1.5 \cdot 10^9$     | 0.67 ns                  | 20 cm          |
| Single-mode He-Ne laser $\left(\lambda_0=633 \mathrm{~nm}\right)$                                 | $1 \cdot 10^6$       | $1 \mu \mathrm{~s}$      | 300 m          |

---
## 4.5 Interference 
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=79&selection=158,0,160,12|•]] [[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=21&selection=0,0,0,24|•]]


Naturally, the next question to ask is, how do we measure the temporal coherence properties. This is done with interferometric setups. The most common one is the Michelson interferometer. The basic idea of all interferometers is to split light into replicas of itself, guide them along different optical paths, and recombine them, and measuring the resulting wave using a photodiode or bolometer. As already stated, coherence is often just said to be the ability of light to interfere, and therefore it is natural to measure light's ability to interfere with itself.
### 4.5.1 (Michelson) Interferometer
[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=21&selection=0,24,0,24|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=79&selection=158,0,160,12|•]]

Consider the following setup, where incoming light is split into two replicas using a beam splitter. We assume no change in polarisation. 

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/02_Fundamental_phenomena 2.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%202.webp)[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=21&rect=177,212,576,475|•]]

The output can then be written as 
$$
E_{\text {out }}(t)=C_1 E_{\text {in }}\left(t-\tau_1\right)+C_2 E_{\text {in }}\left(t-\tau_2\right),
$$
where both paths towards mirror 1 or 2 result in different delays $\tau_1$ and $\tau_2.$ Calculating the ensemble average intensity results in 
$$
\begin{aligned}
I_{\text {out }} & =\frac{1}{2 Z}\left\langle\left(C_1-E_{\text {in }}\left(t-\tau_1\right)+C_2 E_{\text {in }}\left(t-\tau_2\right)\right) \cdot\left(C_1^*-E_{\text {in }}^*\left(t-\tau_1\right)+C_2^* E_{\text {in }}^*\left(t-\tau_2\right)\right)\right\rangle \\
& \left.=\frac{1}{2 Z}\left(\left.\left|C_1\right|^2\langle | E_{\text {in }}\left(t-\tau_1\right)\right|^2\right\rangle+\left.\left|C_2\right|^2\langle | E_{\text {in }}\left(t-\tau_2\right)\right|^2\right\rangle+2 \mathfrak{Re}[C_1^* C_2 {\left\langle E_{\text {in }}^*\left(t-\tau_1\right) E_{\text {in }}\left(t-\tau_2\right)\right\rangle}\rangle) \\
& =I_{\text {in }}\left(\left|C_1\right|^2+\left|C_2\right|^2+2 \mathfrak{Re}\left[C_1^* C_2 g\left(\tau_1-\tau_2\right)\right]\right).
\end{aligned}
$$

This tells us that we can obtain the real part of the (autocorrelation function) $g(\tau)$ simply by measuring the output of an interferometer. Varying the path length will vary $\tau_1$ and $\tau_2,$ such that we can map its properties for various delays. We can further deduce that the interference term is non-zero as long a $|\tau_1-\tau_2|<\tau_\text{coh}.$ A non-zero interference term modulates the output intensity. In the symmetric case where a 50:50 beam splitter is used, or equivalently $C_1=C_2,$ we obtain
$$
I_{\text {out }}=2\left|C_1\right|^2 I_{\text {in }}\left\{1+\mathfrak{Re}\left[g\left(\tau_1-\tau_2\right)\right]\right\}.
$$
This setup allows to measure the optical path length via fringe counting. This is for example used in the gravitational wave detector, allowing to detect angstrom changes in kilometre long arm length. A slight modification allows us to measure the refractive index of a gas:

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/02_Fundamental_phenomena 3.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%203.webp)[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=27&rect=205,179,632,451|•]]

Assuming the gas casket has a length $\Delta x,$ we find that the time delay is 
$$
\tau=\tau_1-\tau_2=2 n_{\mathrm{air}} d_1 / c-2\left[n_{\mathrm{air}}\left(d_2-\Delta x\right)+n_{\mathrm{cell}} \Delta x\right] / c.
$$

Starting with a pumped gas casket, we slowly fill in gas and observe the change of the intensity fringes as function of the time delay. This allows determining the refractive index of the gas. 
This setup additionally has the advantage that it allows us to obtain the power spectral density without using a spectrometer, simply by using the Wiehner-Khinchin theorem. It essentially allows us obtaining the PSD by measuring the correlation function as function of time delay. Therefore, we collect a simple time trace, Fourier transform and obtain the power spectrum. This is generally called **Fourier transform spectroscopy**. 
Lastly, to answer the question about the _complex_ part of the coherence function: We can show that since the electric field must be real, it also follows that $\left[S(\omega)\right]^\star=S(\omega),$ such that the complex part of the coherence function is irrelevant. This is also because we only care about positive frequencies.  

---
## 4.6 Fabry-Pérot Interferometer - Etalon
[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=41&selection=0,44,0,44|•]] 

Consider a thin film of material of refractive index $n_2$ between two media of refractive index $n_1$ and $n_3:$

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/02_Fundamental_phenomena 4.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%204.webp)[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=41&rect=12,203,452,471|•]]

Assume a light wave comes from the left, and is reflected and transmitted at the first point $A.$ Then, we can recursively calculate the reflected and transmitted part each time the field hits an interface. Writing the first few terms, we find 
$$
\begin{align}
E_t &=E_0 t_{12} t_{23}+E_0 t_{12} t_{23} r_{23} r_{21} e^{i 2 \phi} 
+E_0 t_{12} t_{23}\left(r_{23} r_{21}\right)^2 e^{i 4 \phi} \cdots \\ &=E_0 \frac{t_{12} t_{23}}{1-r_{23} r_{21} e^{i 2 \phi}} ,
\end{align}
$$
where we used the geometric series for the last part. Each roundtrip inside the $n_2$ material result in the accumulation of a phase 
$$
2\phi=2|k_z|n_2d=2|\mathbf{k}|\cos\theta n_2d.
$$
Similarly, we can do this calculation for the reflected part and therefore find
$$
t_{F P}=\frac{t_{12} t_{23}}{1-r_{23} r_{21} e^{i 2 \phi}}\quad\text{and}\quad r_{F P}=r_{12}+\frac{t_{12} t_{21} r_{23}}{1-r_{21} r_{23} e^{i 2 \phi}}.
$$

Considering the phase change during reflection, we can calculate the power transmittance as 
$$
\begin{aligned}
& T_{F P}=\left|t_{F P}\right|^2=\frac{\left|t_{12} t_{23}\right|^2}{\left|1-r_{23} r_{21} e^{i 2 \phi}\right|^2}=\frac{T_{\mathrm{FPmax}}}{1+\left(\frac{2 F}{\pi}\right)^2 \sin^2 \phi_r},
\end{aligned}
$$
where 
$$
T_{\mathrm{FPmax}}=\frac{\left|t_{12} t_{23}\right|^2}{\left(1-\left|r_{23} r_{21}\right|\right)^2}.
$$
We define a new parameter, the finesse as 
$$
F=\frac{\pi \sqrt{\left|r_{12} r_{23}\right|}}{1-\left|r_{23} r_{21}\right|},
$$
which relates the spectral width and the free-spectral range:

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/02_Fundamental_phenomena 5.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%205.webp)[[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=45&rect=19,205,527,471|•]]

Finally, the transmission as function of frequency is
$$
T_{\mathrm{FP}}(f)=\frac{T_{\mathrm{FPmax}}}{1+\left(\frac{2 F}{\pi}\right)^2 \sin^2\left(\pi \frac{f}{f_F}\right)}.
$$
The free spectral range is determined by the optical path length of the Fabry-Pérot cavity, whereas the finesse is determined by the interface reflectivity. 

---
## 4.7 Matrix Methods for Multiple Surfaces
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=87&selection=144,0,146,36|•]] [[Courses/2025 Quantum Electronics Gallmann/02_Fundamental_phenomena.pdf#page=48&selection=0,0,0,42|•]]

Let us consider an optical system composed of multiple elements as shown here:

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/QE_script 12.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/QE_script%2012.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=88&rect=183,145,421,252|•]]

Each box represents an optical elements modifying the electric field amplitude and phase. We consider only the case where we use only either s- or p-polarised light. The superscript $(+)$ and $(-)$ indicate whether the wave propagates to the right or the left, respectively:

![Attachments/Courses/2025 Quantum Electronics Gallmann/4 Coherence and Interference/QE_script 13.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/4%20Coherence%20and%20Interference/QE_script%2013.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=89&rect=184,619,427,684|•]]

Then, at interface $1$, we have 
$$
\begin{aligned}
\binom{E_2^{(+)}}{E_2^{(-)}}=\left(\begin{array}{ll}
A_{12} & B_{12} \\
C_{12} & D_{12}
\end{array}\right)\binom{E_1^{(+)}}{E_1^{(-)}}.
\end{aligned}
$$
Continuing this until the last interface $4:$
$$
\begin{align}
\binom{E_4^{(+)}}{E_4^{(-)}}&=\left(\begin{array}{ll}
A_{34} & B_{34} \\
C_{34} & D_{34}
\end{array}\right)\left(\begin{array}{ll}
A_{23} & B_{23} \\
C_{23} & D_{23}
\end{array}\right)\left(\begin{array}{ll}
A_{12} & B_{12} \\
C_{12} & D_{12}
\end{array}\right)\binom{E_1^{(+)}}{E_1^{(-)}}\\ &=\left(\begin{array}{ll}
A_{14} & B_{14} \\
C_{14} & D_{14}
\end{array}\right)\binom{E_1^{(+)}}{E_1^{(-)}}.
\end{align}
$$

Generally, we call these matrices _wave-propagation_ matrices. To relate the electric field at the ends of the setup, we simply multiply the fields by matrices, where each matrix corresponds to a different optical component in the setup. 

**Propagation in uniform medium**
The simplest example is propagation in a uniform medium of length $d$, where the matrix is given by 
$$
\left(\begin{array}{cc}
A & B \\
C & D
\end{array}\right)=\left(\begin{array}{cc}
e^{-i k d} & 0 \\
0 & e^{i k d}
\end{array}\right).
$$
To check this, we multiply the initial vectors and obtain

$$
\binom{E_2^{(+)}}{E_2^{(-)}}=\left(\begin{array}{cc}
e^{-i k d} & 0 \\
0 & e^{i k d}
\end{array}\right)\binom{E_1^{(+)}}{E_1^{(-)}}\implies \left\{\begin{aligned}
& E_2^{(+)}=E_1^{(+)} e^{-i k d} \\
& E_2^{(-)}=E_1^{(-)} e^{i k d}
\end{aligned}\right.
$$

**Scattering matrix**
To consider the effect of an interface, we find
$$
\binom{E_2^{(+)}}{E_1^{(-)}}=\left(\begin{array}{ll}
t_{12} & r_{21} \\
r_{12} & t_{21}
\end{array}\right)\binom{E_1^{(+)}}{E_2^{(-)}}\implies\left\{\begin{aligned}
& E_2^{(+)}=t_{12} E_1^{(+)}+r_{21} E_2^{(-)} \\
& E_1^{(-)}=r_{12} E_1^{(+)}+t_{21} E_2^{(-)}
\end{aligned}\right.
$$

**Relation**
We can relate the scattering matrix and the wave-propagation matrix by:
$$
\begin{align}
\left(\begin{array}{ll}
A & B \\
C & D
\end{array}\right)=\frac{1}{d}\left(\begin{array}{cc}
a d-b c & b \\
-c & 1
\end{array}\right) \iff
\left(\begin{array}{ll}
a & b \\
c & d
\end{array}\right)=\frac{1}{D}\left(\begin{array}{cc}
A D-B C & B \\
-C & 1
\end{array}\right)
\end{align},
$$
where the lower case letters correspond to the scattering matrix, and the upper case matrix corresponds to the wave-propagation matrix. 

### 4.7.1 Properties of the Scattering Matrix
The scattering matrix has some mathematical properties originating from the physical aspects that it represents:
- Lossless system: Total power is conserved, implying non-absorbing elements, such that 
	$$\left|\mathbf{E}_\text{in}\right|^2=\left|\mathbf{E}_\text{out}\right|^2$$
	The scattering matrix $\mathbf{S}$ of such a system must be unitary, e.g. $\mathbf{S}^{\dagger} \cdot \mathbf{S}=\mathbf{I}$ or $\mathbf{S}^{-1}=\mathbf{S}^{\dagger}$.
- Reciprocal system: The input and output can be exchanged without affecting the system's behaviour. This is the case when dielectric and magnetic properties of the device are constant scalar quantities. Then, the scattering matrix is symmetrical, $\mathbf{S}=\mathbf{S}^T,$ meaning that the transmission coefficient is the same in both directions. An associated theorem states that if a set of rays can propagate from $A$ to $B$, they can also propagate in the reverse direction, indicating time-reversal symmetry. 

Therefore, one can show that the scattering matrix takes the form
$$
\mathbf{S}=\left(\begin{array}{ll}
t & r \\
r & t
\end{array}\right),
$$
with $|t|^2+|r|^2=1.$ 

---