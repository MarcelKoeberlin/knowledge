---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics/4-coherence-and-interference/","hide":"true","updated":"2025-06-04T15:34:01.000+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.1 Young's Double Slit Experiment\|4.1 Young's Double Slit Experiment]]
[[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.2 Coherence Function\|4.2 Coherence Function]]
[[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.3 Coherence Time and Coherence Length\|4.3 Coherence Time and Coherence Length]]
[[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.4 Wiener-Khinchin Theorem\|4.4 Wiener-Khinchin Theorem]]
[[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.5 Interference\|4.5 Interference]]
[[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.6 Fabry-Pérot Interferometer - Etalon\|4.6 Fabry-Pérot Interferometer - Etalon]]
[[Notes/2025 Quantum Electronics/4 Coherence and Interference#4.7 Matrix Methods for Multiple Surfaces\|4.7 Matrix Methods for Multiple Surfaces]]

---
# 4 Coherence and Interference
[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=2&selection=0,0,0,35| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=74&selection=1,0,1,24| ]]

Coherence can be initially understood as the ability of light to exhibit interference phenomena. This will be our starting point, but as we will see, a more precise description is necessary. Additionally, interference, a concept perhaps already familiar, is the superposition of waves that results in a (quasi-)stationary intensity pattern, commonly referred to as a standing wave if the waves are counter-propagating. Fully stationary interference patterns require several conditions to be met by the superposing waves:
- The waves must possess the same polarisation state.
- The waves must oscillate at the same frequency.
- The waves must maintain a constant relative phase difference over the observation time.

The output of typical everyday light sources, such as incandescent bulbs, fluctuates randomly, and their behaviour is only statistically predictable. The electromagnetic waves emanating from a hot thermal source, for instance, radiate with seemingly random phases and amplitudes. This contrasts with coherent waves, such as those from an ideal laser, which are highly correlated in frequency, phase, and polarisation.

---
## 4.1 Young's Double Slit Experiment
[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=5&selection=0,0,0,30| ]]

Let us first consider the famous Young's double-slit experiment, where light from a source is diffracted by two narrow, parallel slits of the same width:

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/02_Fundamental_phenomena.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/02_Fundamental_phenomena.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=5&rect=201,120,670,414| ]]

**Coherent light**
First, the simulation is performed with coherent light, idealised as a Gaussian beam, which is a common approximation for the output of a single-mode laser. For now, consider this light as perfectly coherent because its bandwidth is effectively zero; that is to say, it is perfectly monochromatic light:

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/coherent 1.gif|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/coherent%201.gif)

As we can see, the beam passes through the slits and produces an interference pattern on a screen, which is stationary over typical observation timescales.

**Incoherent Light**
On the other hand, consider the same experiment with spatially incoherent light, such as light with a finite spectral bandwidth and finite spatial extent, observed over three different timescales:

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/simulation-incoherent-femtoseconds.gif|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/simulation-incoherent-femtoseconds.gif)
(Femtosecond timescale)

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/simulation-incoherent-picoseconds.gif|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/simulation-incoherent-picoseconds.gif)
(Picosecond timescale)

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/simulation-incoherent-microseconds.gif|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/simulation-incoherent-microseconds.gif)
(Microsecond timescale)

We observe that the interference pattern fluctuates significantly, particularly evident on the picosecond timescale in this simulation. As we will see later, this timescale is related to the light's coherence time $\tau_c$, which for this example with a given centre wavelength $\lambda_0$ and spectral bandwidth $\Delta\lambda$, can be estimated as:
$$
\tau_c \sim \frac{\lambda_0^2}{c\Delta\lambda}.
$$
For typical parameters used in such simulations (for instance, $\lambda_0 = 800 \, \text{nm}$, $\Delta\lambda = 0.37 \, \text{nm}$), this yields $\tau_c \approx 1.4 \, \text{ps}$.

---
## 4.2 Coherence Function
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=74&selection=18,0,20,22| ]] [[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=12&selection=0,9,0,9| ]]

Let us define coherence—'the ability to interfere'—more precisely. To this end, we introduce the mutual (first-order) coherence function, which correlates an electric field $\mathbf{E}$ with itself at different positions and times:
$$
\Gamma\left(\mathbf{r}_1, t_1 ; \mathbf{r}_2, t_2\right)=\left\langle\mathbf{E}^*\left(\mathbf{r}_1, t_1\right) \cdot \mathbf{E}\left(\mathbf{r}_2, t_2\right)\right\rangle.
$$
The angle brackets $\langle \cdot \rangle$ denote an ensemble average over many realisations of the field, reflecting the statistical properties of the light source, particularly for partially coherent or random light. This averaging accounts for fluctuations in the optical fields. For ergodic fields, this ensemble average can be replaced by a time average. In this context, coherence describes _how reproducible an interference pattern is._

We generally differentiate between two types of coherence:
- Transverse or spatial coherence: Characterised by $\Gamma(\mathbf{r}_1, t; \mathbf{r}_2, t)$, considering correlation at the same time $t$ but different positions.
- Longitudinal or temporal coherence: Characterised by $\Gamma(\mathbf{r}, t_1; \mathbf{r}, t_2)$, considering correlation at the same position $\mathbf{r}$ but different times.

We will often work with statistically stationary fields, meaning fields whose statistical properties (like the mean and autocorrelation) do not change over time. For first-order stationarity, $\langle \mathbf{E}(\mathbf{r}, t)\rangle$ is constant (often zero for optical fields). For second-order stationarity relevant here, the mutual coherence function depends only on the time difference $\tau = t_2 - t_1$, not on absolute times $t_1, t_2$:
$$
\Gamma\left(\mathbf{r}_1, \mathbf{r}_2, \tau\right) = \left\langle\mathbf{E}^*\left(\mathbf{r}_1, t\right) \cdot \mathbf{E}\left(\mathbf{r}_2, t+\tau\right)\right\rangle.
$$
From this, we define the temporal (auto)coherence function (or self-coherence function) at a single point $\mathbf{r}$ as:
$$
G(\mathbf{r}, \tau)=\Gamma(\mathbf{r}, \mathbf{r}, \tau) = \left\langle\mathbf{E}^*\left(\mathbf{r}, t\right) \cdot \mathbf{E}\left(\mathbf{r}, t+\tau\right)\right\rangle.
$$
For simplicity, if position is fixed, we write $G(\tau)$. Perhaps more important is the normalised version, the complex degree of (temporal) coherence:
$$
g(\tau)=\frac{G(\tau)}{G(0)},
$$
where $G(0) = \langle |\mathbf{E}(\mathbf{r},t)|^2 \rangle$ is proportional to the average intensity. The magnitude $|g(\tau)|$ ranges from $0$ (incoherent) to $1$ (perfectly coherent).

We can broadly distinguish two limiting cases:
- High coherence (for instance, an ideal laser): The phase relationship between the field at time $t$ and $t+\tau$ is perfectly deterministic for all $\tau$. Thus, $|g(\mathbf{r},\tau)| = 1$ for all $\tau$.
- Low coherence (for instance, an idealised thermal lightbulb): The phase relationship between $t$ and $t+\tau$ becomes rapidly decorrelated for $\tau \neq 0$. Thus, $|g(\mathbf{r},\tau)|\rightarrow0$ for $\tau \gg \tau_c$ (coherence time).

Let us consider a concrete example: a superposition of monochromatic plane waves, all of the same frequency $\omega$ and amplitude $\mathbf{E}_0$, but each with a random, statistically independent phase $\varphi_j$. If we consider a single such wave train $E_j(t) = \mathbf{E}_0 e^{i(\omega t + \varphi_j)}$, its autocorrelation (if $\varphi_j$ is fixed for this train) would be:
$$
\begin{aligned}
G_j(\tau) & = \left\langle\left(\mathbf{E}_0 e^{i(\omega t + \varphi_j)}\right)^* \cdot \left(\mathbf{E}_0 e^{i(\omega (t+\tau) + \varphi_j)}\right)\right\rangle_{\text{time or fixed phase}} \\
& = \mathbf{E}_0^* \cdot \mathbf{E}_0 e^{i\omega\tau} = |\mathbf{E}_0|^2 e^{i\omega\tau}.
\end{aligned}
$$
For this ideal monochromatic wave, the complex degree of coherence is:
$$
g(\tau)=\frac{G(\tau)}{G(0)}=\frac{|\mathbf{E}_0|^2 e^{i\omega\tau}}{|\mathbf{E}_0|^2}=e^{i \omega \tau} \implies |g(\tau)|=1 \text{ for all } \tau.
$$
Since $|g(\tau)|$ cannot exceed $1$, this represents maximum temporal coherence. Such a signal allows prediction of its phase at any time from knowledge of its phase at any other time.

In comparison, consider light composed of many such wave trains where the phases $\varphi_j$ are random and uncorrelated from one train to the next (a more realistic model for some types of partially coherent light). The ensemble average $\langle e^{i(\varphi_k-\varphi_j)} \rangle$ would be non-zero only if $j=k$. For a truly random (delta-correlated in time or "white noise" like) field, the coherence function approaches a delta function:

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/QE_script 11.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/QE_script%2011.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=76&rect=97,173,507,310| ]]

We find that, for such a highly random field,
$$
|g(\tau)|\rightarrow0,\quad\text{for }|\tau| \gg \tau_c \text{ where } \tau_c \text{ is very small}.
$$
Therefore, $g(\tau)$ is sharply peaked around $\tau=0$, being $1$ at zero time delay and decaying rapidly for non-zero delays.

---
## 4.3 Coherence Time and Coherence Length
[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=18&selection=0,35,0,35| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=75&selection=152,0,154,41| ]]

The concept of coherence allows us to define a characteristic **coherence time** $\tau_c,$ which quantifies the temporal interval over which the field remains significantly correlated with itself. One common definition is:
$$
\tau_c = \int_{-\infty}^{\infty}|g(\tau)|^2 d \tau.
$$
The coherence time is inversely proportional to the spectral bandwidth $\Delta f$ (or $\Delta\nu$) of the light source, a relationship that stems from Fourier theory (specifically, the Wiener-Khinchin theorem discussed next):
$$
\tau_c \sim \frac{1}{\Delta f}.
$$
Therefore, the example of ideal monochromatic plane waves (zero bandwidth) yields an infinite coherence time, while truly random (white noise) fields (infinite bandwidth) would have a zero coherence time.
Similarly, we define the **coherence length** $l_c$ as the distance over which light maintains a significant degree of coherence:
$$
l_c = c\tau_c,
$$
where $c$ is the speed of light in vacuum. For unfiltered sunlight, $\tau_c$ is roughly $1-2 \, \text{fs}$, corresponding to $l_c \approx 300-600 \, \text{nm}$. In contrast, a highly stabilised single-mode laser can have a coherence time of milliseconds or even seconds, implying a coherence length of hundreds to thousands of kilometres.

---
## 4.4 Wiener-Khinchin Theorem
[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=19&selection=0,23,0,23| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=75&selection=154,17,154,41| ]]

First, we define the Power Spectral Density (PSD), denoted $S(\omega)$, of a stationary random process $E(t)$. For a truncated version of the signal $E_T(t)$ (equal to $E(t)$ for $-T/2 \le t \le T/2$ and zero otherwise), let $V_T(\omega)$ be its Fourier transform:
$$
V_T(\omega)=\int_{-T / 2}^{T / 2} E(t) e^{-i \omega t} dt.
$$
The PSD is then defined as:
$$
S(\omega)=\lim _{T \rightarrow \infty} \frac{1}{2 \pi T}\left\langle \left| V_T(\omega)\right|^2\right\rangle.
$$
The PSD describes the distribution of the average power of the signal over frequency, usually specified in units such as milliwatts per terahertz, although "power" here refers to the [[Notes/Signals and Systems/1 Signals and Systems#1.2 Energy and Power\|power of a signal]] in a general sense ($|E|^2$), not necessarily optical power in Watts.
The ==Wiener-Khinchin theorem== then states that the Power Spectral Density $S(\omega)$ of a wide-sense stationary random process is the Fourier transform of its autocorrelation function $G(\tau)$:
$$
S(\omega)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} G(\tau) e^{-i \omega \tau} d \tau.
$$
Conversely, $G(\tau)$ is the inverse Fourier transform of $2\pi S(\omega)$. This theorem provides a fundamental link between the time-domain coherence properties of a signal ($G(\tau)$) and its frequency-domain spectral properties ($S(\omega)$). From this, it is clear that there must also be a relationship between the coherence time $\tau_c$ (related to the width of $G(\tau)$ or $|g(\tau)|$) and the spectral width $\Delta\omega$ (or $\Delta f$, the FWHM of $S(\omega)$).
Next, some examples of coherence properties for various light sources are shown:

| Source                                                                                                 | $\Delta f_c \, (\text{Hz})$ | $\tau_c \approx 1/\Delta f_c$ | $l_c=c \tau_c$  |
| ------------------------------------------------------------------------------------------------------ | -------------------------- | ----------------------------- | --------------- |
| Unfiltered sunlight ($\lambda_0 \approx 0.4-0.8 \, \mu\text{m}$, $\Delta\lambda \approx 0.4 \, \mu\text{m}$) | $\sim 3.75 \times 10^{14}$   | $\sim 2.7 \, \text{fs}$        | $\sim 800 \, \text{nm}$  |
| Light emitting diode ($\lambda_0=1 \, \mu\text{m}, \Delta \lambda_0=50 \, \text{nm}$)                     | $\sim 1.5 \times 10^{13}$    | $\sim 67 \, \text{fs}$         | $\sim 20 \, \mu\text{m}$ |
| Low-pressure sodium lamp                                                                               | $\sim 5 \times 10^{11}$      | $\sim 2 \, \text{ps}$          | $\sim 600 \, \mu\text{m}$ |
| Multi-mode He-Ne laser ($\lambda_0=633 \, \text{nm}$)                                                     | $\sim 1.5 \times 10^9$       | $\sim 0.67 \, \text{ns}$       | $\sim 20 \, \text{cm}$   |
| Single-mode He-Ne laser ($\lambda_0=633 \, \text{nm}$)                                                    | $\sim 1 \times 10^6$         | $\sim 1 \, \mu\text{s}$        | $\sim 300 \, \text{m}$   |

---
## 4.5 Interference
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=79&selection=158,0,160,12| ]] [[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=21&selection=0,0,0,24| ]]

Naturally, the next question is how we measure temporal coherence properties. This is commonly done with interferometric setups. The most common one is the Michelson interferometer. The basic idea of all such two-beam interferometers is to split a light beam into two replicas, guide them along different optical paths (introducing a relative time delay), recombine them, and measure the intensity of the resulting superposed wave, for instance using a photodiode or bolometer. As stated, coherence is often described as the ability of light to interfere; therefore, it is natural to measure light's ability to interfere with a time-delayed version of itself.

### 4.5.1 (Michelson) Interferometer
[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=21&selection=0,24,0,24| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=79&selection=158,0,160,12| ]]

Consider the following Michelson interferometer setup, where incoming light is split into two replicas by a beam splitter. We assume no change in polarisation state occurs.

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/02_Fundamental_phenomena 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%202.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=21&rect=177,212,576,475| ]]

The output electric field at the detector can be written as a superposition of the fields from the two arms:
$$
E_{\text{out}}(t)=C_1 E_{\text{in}}(t-\tau_1)+C_2 E_{\text{in}}(t-\tau_2),
$$
where $C_1, C_2$ are complex constants accounting for reflection/transmission coefficients and propagation losses in each arm, and $\tau_1, \tau_2$ are the respective time delays. The measured average intensity is $I_{\text{out}} = \frac{1}{2Z_0} \langle |E_{\text{out}}(t)|^2 \rangle$ (assuming impedance $Z_0$ and scalar fields for simplicity):
$$
\begin{aligned}
I_{\text{out}} & \sim \left\langle \left|C_1 E_{\text{in}}(t-\tau_1)+C_2 E_{\text{in}}(t-\tau_2)\right|^2 \right\rangle \\
& = \left\langle \left(C_1 E_{\text{in}}(t-\tau_1)+C_2 E_{\text{in}}(t-\tau_2)\right) \cdot \left(C_1^* E_{\text{in}}^*(t-\tau_1)+C_2^* E_{\text{in}}^*(t-\tau_2)\right) \right\rangle \\
& = |C_1|^2 \langle |E_{\text{in}}(t-\tau_1)|^2 \rangle + |C_2|^2 \langle |E_{\text{in}}(t-\tau_2)|^2 \rangle \\
& \quad + C_1 C_2^* \langle E_{\text{in}}(t-\tau_1)E_{\text{in}}^*(t-\tau_2) \rangle + C_1^* C_2 \langle E_{\text{in}}^*(t-\tau_1)E_{\text{in}}(t-\tau_2) \rangle.
\end{aligned}
$$
For stationary fields, $\langle |E_{\text{in}}(t-\tau_1)|^2 \rangle = \langle |E_{\text{in}}(t-\tau_2)|^2 \rangle = G(0) \sim I_{\text{in}}$.
Also, $\langle E_{\text{in}}^*(t-\tau_1)E_{\text{in}}(t-\tau_2) \rangle = G(\tau_2-\tau_1)$. So the cross terms become $C_1 C_2^* G^*(\tau_1-\tau_2) + C_1^* C_2 G(\tau_1-\tau_2) = 2 \mathfrak{Re}\left[C_1^* C_2 G(\tau_1-\tau_2)\right]$.
Thus, letting $\tau = \tau_1-\tau_2$:
$$
I_{\text{out}}(\tau) = I_1 + I_2 + 2 \sqrt{I_1 I_2} \mathfrak{Re}\left[g(\tau) e^{i\alpha_{12}}\right],
$$
where $I_1 \sim |C_1|^2 I_{\text{in}}$, $I_2 \sim |C_2|^2 I_{\text{in}}$, and $e^{i\alpha_{12}}$ accounts for relative phases from $C_1, C_2$. If we normalise, and define $g(\tau) = G(\tau)/G(0)$:
$$
I_{\text{out}}(\tau) \sim |C_1|^2 G(0) + |C_2|^2 G(0) + 2 \mathfrak{Re}\left[C_1^* C_2 G(0) g(\tau)\right].
$$
This shows that we can obtain information about $\mathfrak{Re}\left[g(\tau)\right]$ by measuring the output intensity of an interferometer as a function of the relative delay $\tau = \tau_1-\tau_2$. The interference term is non-zero as long as $|\tau_1-\tau_2|$ is within the coherence time $\tau_c$. For a 50:50 beam splitter where $|C_1|=|C_2|=C$ (assuming equal path losses other than delay), we get:
$$
I_{\text{out}}(\tau) = 2|C|^2 I_{\text{in}} \left(1+\mathfrak{Re}\left[g(\tau)e^{i\phi_{12}}\right]\right),
$$
where $\phi_{12}$ is the phase of $C_1^*C_2$.
This setup allows precise measurement of optical path length differences via fringe counting, as used in gravitational wave detectors like LIGO, capable of detecting angstrom-scale changes in kilometre-long arm lengths. A slight modification allows measurement of the refractive index of a gas:

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/02_Fundamental_phenomena 3.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%203.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=27&rect=205,179,632,451| ]]

Assuming the gas cuvette has length $\Delta x$, the relative time delay introduced by the gas is related to its refractive index $n_{\text{gas}}$ compared to the reference path (perhaps air, $n_{\text{air}}$). If arm 2 contains the cuvette and arm 1 is reference:
$$
\tau = \tau_1-\tau_2 = \frac{2d_1 n_{\text{ref}}}{c} - \frac{2( (d_2-\Delta x)n_{\text{ref}} + \Delta x n_{\text{gas}} )}{c}.
$$
By varying the gas pressure (and thus $n_{\text{gas}}$) and observing the shift in interference fringes, $n_{\text{gas}}$ can be determined.
This interferometric setup, when used to measure $G(\tau)$ or $g(\tau)$ and then applying the Wiener-Khinchin theorem, allows one to obtain the power spectral density $S(\omega)$ without using a traditional spectrometer. This technique is known as **Fourier Transform Spectroscopy (FTS)**, particularly Fourier Transform Infrared Spectroscopy (FTIR) when applied in the infrared.
Regarding the complex nature of $g(\tau)$: $S(\omega)$ must be real and non-negative. Since $G(\tau)$ is an autocorrelation function, $G(-\tau) = G^*(\tau)$, which ensures $S(\omega)$ is real. Both magnitude and phase of $g(\tau)$ are generally needed to fully characterise the coherence. The real part $\mathfrak{Re}[g(\tau)]$ determines the observed fringe pattern in a simple intensity measurement.

---
## 4.6 Fabry-Pérot Interferometer - Etalon
[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=41&selection=0,44,0,44| ]]

Consider a thin film of material of refractive index $n_2$ and thickness $d$, surrounded by media with refractive indices $n_1$ (incident side) and $n_3$ (transmitting side). This forms a Fabry-Pérot etalon.

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/02_Fundamental_phenomena 4.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%204.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=41&rect=12,203,452,471| ]]

Assume a plane light wave $E_0$ is incident from medium 1. It is multiply reflected and transmitted at the interfaces. Summing all transmitted partial waves (taking into account phase shifts from propagation and phase changes upon reflection), we find the total transmitted field $E_t$:
$$
\begin{align}
E_t &= E_0 t_{12} t_{23} e^{i\phi} + E_0 t_{12} r_{23} r_{21} t_{23} e^{i3\phi} + E_0 t_{12} (r_{23} r_{21})^2 t_{23} e^{i5\phi} + \dots \\
&= E_0 t_{12} t_{23} e^{i\phi} \sum_{m=0}^{\infty} (r_{21} r_{23} e^{i2\phi})^m = E_0 \frac{t_{12} t_{23} e^{i\phi}}{1-r_{21} r_{23} e^{i2\phi}}.
\end{align}
$$
Here $t_{ij}$ and $r_{ij}$ are the amplitude transmission and reflection coefficients for a wave incident from medium $i$ towards medium $j$. The single-pass phase accumulation across the layer of thickness $d$ at an internal angle $\theta_2$ is $\phi = k_{2z}d = (n_2\omega/c)\cos\theta_2 d$. The round-trip phase is $2\phi$. Similarly, for the reflected part $E_r$:
$$
r_{\text{FP}} = \frac{E_r}{E_0} = r_{12} + \frac{t_{12} r_{23} t_{21} e^{i2\phi}}{1-r_{21} r_{23} e^{i2\phi}}.
$$
The transmission coefficient for the Fabry-Pérot etalon is $t_{\text{FP}} = E_t/E_0$. Assuming the $e^{i\phi}$ factor for single pass is part of $t_{23}$ or overall definition, then:
$$
t_{\text{FP}}=\frac{t_{12} t_{23}}{1-r_{21} r_{23} e^{i2\phi}}.
$$
The power transmittance $T_{\text{FP}} = |t_{\text{FP}}|^2$ can be written as:
$$
T_{\text{FP}} = \frac{|t_{12}|^2 |t_{23}|^2}{|1-r_{21} r_{23} e^{i2\phi}|^2} = \frac{T_{12} T_{23}}{(1-\sqrt{R_{12}R_{23}})^2 + 4\sqrt{R_{12}R_{23}}\sin^2(\phi + \delta_{21}/2 + \delta_{23}/2)},
$$
where $R_{ij}=|r_{ij}|^2$, $T_{ij}=|t_{ij}|^2,$ and $\delta_{ij}$ are phases of $r_{ij}$. Another common way to write this is
$$
T_{\text{FP}}=\left|t_{\text{FP}}\right|^2=\frac{\left|t_{12} t_{23}\right|^2}{\left|1-r_{23} r_{21} e^{i 2 \phi}\right|^2}=\frac{T_{\mathrm{FPmax}}}{1+\left(\frac{2 F}{\pi}\right)^2 \sin^2 \phi},
$$
where $T_{\mathrm{FPmax}}=\frac{|t_{12} t_{23}|^2}{(1-|r_{23} r_{21}|)^2}$ and $F=\frac{\pi \sqrt{|r_{12} r_{23}|}}{1-|r_{23} r_{21}|}$. The Finesse $F$ relates the free spectral range (FSR) to the resonance linewidth.

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/02_Fundamental_phenomena 5.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/02_Fundamental_phenomena%205.webp)[[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=45&rect=19,205,527,471| ]]

The transmission as a function of optical frequency $f$ (where $2\phi = 2\pi f / f_{\text{FSR}}$, with $f_{\text{FSR}} = c/(2n_2 d \cos\theta_2)$ being the free spectral range):
$$
T_{\text{FP}}(f)=\frac{T_{\mathrm{FPmax}}}{1+\left(\frac{2 F}{\pi}\right)^2 \sin^2\left(\pi \frac{f}{f_{\text{FSR}}}\right)}.
$$
The FSR is determined by the optical path length of the cavity, whereas the finesse $F$ is primarily determined by the reflectivity of the interfaces.

---
## 4.7 Matrix Methods for Multiple Surfaces
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=87&selection=144,0,146,36| ]] [[Notes/2025 Quantum Electronics/02_Fundamental_phenomena.pdf#page=48&selection=0,0,0,42| ]]

Consider an optical system composed of multiple elements or interfaces.

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/QE_script 12.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/QE_script%2012.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=88&rect=183,145,421,252| ]]

Each box represents an optical element modifying the electric field amplitude and phase. We consider light propagating along a single axis and only one polarisation (s- or p-polarised light). The superscripts $(+)$ and $(-)$ indicate whether the wave propagates to the right or the left, respectively, at a reference plane.

![Attachments/Notes/2025 Quantum Electronics/4 Coherence and Interference/QE_script 13.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/4%20Coherence%20and%20Interference/QE_script%2013.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=89&rect=184,619,427,684| ]]

At interface 1 (between medium 0 and 1, fields in medium 1 are $E_1^{(+)}, E_1^{(-)}$), we define a matrix relating fields on one side of an element/interface to the other. The transfer matrix (or ABCD matrix for a system) relates fields at the output plane (say, plane 2) to fields at the input plane (plane 1):
$$
\begin{pmatrix}E_1^{(+)} \\ E_1^{(-)}\end{pmatrix} = \mathbf{M}_{12} \begin{pmatrix}E_2^{(+)} \\ E_2^{(-)}\end{pmatrix} = \begin{pmatrix} A_{12} & B_{12} \\ C_{12} & D_{12} \end{pmatrix} \begin{pmatrix}E_2^{(+)} \\ E_2^{(-)}\end{pmatrix}.
$$
For a cascade of elements from plane 1 to plane $N+1$:
$$
\begin{pmatrix}E_1^{(+)} \\ E_1^{(-)}\end{pmatrix} = \mathbf{M}_{12} \mathbf{M}_{23} \dots \mathbf{M}_{N,N+1} \begin{pmatrix}E_{N+1}^{(+)} \\ E_{N+1}^{(-)}\end{pmatrix} = \mathbf{M}_{\text{total}} \begin{pmatrix}E_{N+1}^{(+)} \\ E_{N+1}^{(-)}\end{pmatrix}.
$$
Then for the system from 1 to 4:
$$
\begin{pmatrix}E_4^{(+)}\\E_4^{(-)}\end{pmatrix} = \mathbf{M}_{34} \mathbf{M}_{23} \mathbf{M}_{12} \begin{pmatrix}E_1^{(+)}\\E_1^{(-)}\end{pmatrix} = \begin{pmatrix} A_{14} & B_{14} \\ C_{14} & D_{14} \end{pmatrix}\begin{pmatrix}E_1^{(+)}\\E_1^{(-)}\end{pmatrix}.
$$
These are wave-propagation (transfer) matrices.

**Propagation in uniform medium** of length $d$:
The matrix relating fields at $z=0$ ($E_1$) to fields at $z=d$ ($E_2$) is:
$$
\begin{pmatrix}E_2^{(+)}\\E_2^{(-)}\end{pmatrix} = \begin{pmatrix} e^{-ikd} & 0 \\ 0 & e^{ikd} \end{pmatrix} \begin{pmatrix}E_1^{(+)}\\E_1^{(-)}\end{pmatrix}.
$$
This means $E_2^{(+)} = E_1^{(+)}e^{-ikd}$ (forward wave accumulates phase) and $E_2^{(-)} = E_1^{(-)}e^{ikd}.$ 

**Scattering matrix (S-matrix)** relates outgoing waves to incoming waves:
$$
\begin{pmatrix}E_1^{(-)} \\ E_2^{(+)}\end{pmatrix} = \begin{pmatrix} r_{12} & t_{21} \\ t_{12} & r_{21} \end{pmatrix} \begin{pmatrix}E_1^{(+)} \\ E_2^{(-)}\end{pmatrix}.
$$
This means $E_1^{(-)} = r_{12} E_1^{(+)} + t_{21} E_2^{(-)}$ (reflection from and transmission into port 1) and $E_2^{(+)} = t_{12} E_1^{(+)} + r_{21} E_2^{(-)}$ (transmission into and reflection from port 2). 

**Relation between Transfer (ABCD) and Scattering (S) matrices:**
If $\mathbf{S} = \begin{pmatrix} s_{11} & s_{12} \\ s_{21} & s_{22} \end{pmatrix}$, then the transfer matrix $\mathbf{M}$ such that $\begin{pmatrix} E_1^{(+)} \\ E_1^{(-)} \end{pmatrix} = \mathbf{M} \begin{pmatrix} E_2^{(+)} \\ E_2^{(-)} \end{pmatrix}$ is often given as $\mathbf{M} = \begin{pmatrix} s_{21}^{-1} & -s_{21}^{-1}s_{22} \\ s_{11}s_{21}^{-1} & s_{12}-s_{11}s_{21}^{-1}s_{22} \end{pmatrix}$.

### 4.7.1 Properties of the Scattering Matrix
- Lossless system: $\mathbf{S}^{\dagger} \mathbf{S}=\mathbf{I}$ (unitary).
- Reciprocal system: $\mathbf{S}=\mathbf{S}^T$ ($S_{12}=S_{21}$).

---