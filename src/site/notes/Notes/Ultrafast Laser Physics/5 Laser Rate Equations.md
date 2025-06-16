---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/5-laser-rate-equations/","hide":"true","updated":"2025-06-08T18:14:54.000+02:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/5 Laser Rate Equations#5.1 Rate Equations for the Ideal Four-Level System\|5.1 Rate Equations for the Ideal Four-Level System]]
[[Notes/Ultrafast Laser Physics/5 Laser Rate Equations#5.2 Relaxation Oscillations\|5.2 Relaxation Oscillations]]

---
# 5 Laser Rate Equations and Relaxation Oscillations
[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=203&selection=0,1,3,18| ]]

This chapter builds on the assumption that the reader is familiar with how [[Notes/2025 Quantum Electronics/8 Laser Fundamentals\|lasers]] operate. Most modern lasers are diode-pumped solid-state lasers, typically pumped by high-power semiconductor diode arrays or bars. Since the individual diodes in such an array are not mutually coupled, the spatial coherence of the emitted pump beam is limited. Nevertheless, they are significantly brighter than flashlamps. More importantly, their much narrower spectral emission allows them to be tuned directly into an absorption line of the solid-state gain medium. This results in more efficient pump absorption and reduced thermal loading, especially when the pump photon energy is close to the upper laser level energy. A primary advantage of diode-pumped solid-state lasers is their ability to convert low-cost, low-beam-quality optical power from high-power diode arrays into a near-diffraction-limited output beam with high efficiency.

As the following figure illustrates, one can distinguish between longitudinally and transversally pumped schemes:

![Attachments/UltraFastLasers_Keller 58.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2058.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=207&rect=162,454,388,609| ]]

Longitudinal pumping generally offers superior pumping efficiency in the low-power regime because the pump volume can be well matched to the laser mode volume within the laser crystal. For the laser crystal itself, a distinction is made by the type of lasing transition. Most often, [[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.3.3 Three-Level Laser Systems\|three-level]] and [[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.3.4 Four-Level System\|four-level]] systems are employed, as shown below:

![Attachments/UltraFastLasers_Keller 59.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2059.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=207&rect=66,357,373,449| ]]
![Attachments/UltraFastLasers_Keller 60.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2060.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=207&rect=139,242,285,345| ]]

The four-level system represents an *ideal* case, although careful design can also yield excellent performance from a three-level laser. The following discussion will focus on the ideal four-level laser system, for which the three-level system requires some modification. This is not discussed further here but is treated in my other notes [[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.3.3 Three-Level Laser Systems\|here]].

---
## 5.1 Rate Equations for the Ideal Four-Level System
 [[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=208&selection=6,0,8,44| ]]

We consider a [[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.2.2 Homogeneous vs Inhomogeneous Broadening\|homogeneously broadened]] laser medium within a [[Notes/2025 Quantum Electronics/7 Optical Resonators#7 Optical Resonators\|linear resonator]], which supports standing waves inside the cavity. The saturated gain coefficient is described by
$$
g=\frac{g_0}{1+2 I / I_{\mathrm{sat}}}
$$
where $g_0$ is the small-signal gain coefficient and $I$ is the intra-cavity intensity. The factor of 2 in the denominator arises from spatial hole burning in a standing-wave cavity. The saturation intensity for a four-level laser material is $I_{\mathrm{sat}}=\frac{h \nu}{\sigma \tau_{\mathrm{L}}}$, with $\sigma$ being the gain cross-section and $\tau_L$ the spontaneous lifetime of the upper laser level. With increasing intensity inside the resonator, $g$ decreases ('saturates') until a steady-state intensity is reached where gain equals loss, $g(t\rightarrow\infty)=l$. Here, $l$ represents the total resonator losses, including output coupling. The steady-state intensity $I_\mathrm{s}$ is found by setting $g=l$:
$$
I_{\mathrm{s}}=\frac{I_{\mathrm{sat}}}{2}\left(\frac{g_0}{l}-1\right)
$$
Unless stated otherwise, we use **amplitude** gain and loss coefficients. The rate equations for the photon number inside the cavity laser mode, $n$, and the population inversion, $N$, are
$$
\begin{aligned}
& \frac{\mathrm{d} n}{\mathrm{~d} t}=K(n+1) N-\gamma_{\mathrm{c}} n \\
& \frac{\mathrm{d} N}{\mathrm{~d} t}=R_{\mathrm{p}}-K n N-\gamma_{\mathrm{L}} N
\end{aligned}
$$
where $K$ is the coupling constant, $R_{\mathrm{p}}$ is the pumping rate into the upper laser level, $\gamma_L=1/\tau_L$ is the spontaneous decay rate of the inversion (atomic decay rate), and $\gamma_c=1/\tau_c$ is the cavity decay rate. Each term corresponds to a specific process:
$$
\begin{aligned}
\text{Stimulated emission:}\quad &KnN\\
\text{Spontaneous emission into the laser mode:}\quad &KN
\end{aligned}
$$
Stimulated emission appears in both equations with opposite signs, signifying that a decrease in inversion leads to an increase in the photon number. The stimulated transition probability $W^{\text {stim }}$ for $N$ inverted atoms is given by
$$
W^{\text {stim }}=N(Kn) =K n N=\frac{I}{h \nu} \sigma N
$$
where $\sigma$ is the gain cross-section of the laser material.

### 5.1.1 Steady-State Solution

Steady-state is defined by a constant photon number $n_s$ and a constant inversion $N_s$:
$$
\frac{\mathrm{d} n_{\mathrm{s}}}{\mathrm{~d} t}=0\quad\text{and} \quad \frac{\mathrm{d} N_{\mathrm{s}}}{\mathrm{~d} t}=0
$$
This simplifies the rate equations to
$$
\begin{aligned}
&K\left(n_{\mathrm{s}}+1\right) N_{\mathrm{s}}-\gamma_{\mathrm{c}} n_{\mathrm{s}}=0\\
&R_{\mathrm{p}}-K n_{\mathrm{s}} N_{\mathrm{s}}-\gamma_{\mathrm{L}} N_{\mathrm{s}}=0
\end{aligned}
$$
From the first equation, we can solve for the steady-state inversion $N_s$ and photon number $n_s$. Introducing the threshold inversion $N_\text{th}=\gamma_c/K$, the inversion required to achieve gain equal to cavity losses, we find
$$
N_{\mathrm{s}} = N_{\mathrm{th}} \frac{n_{\mathrm{s}}}{n_{\mathrm{s}}+1} \quad \text{and} \quad n_{\mathrm{s}}= \frac{N_{\mathrm{s}}}{N_{\mathrm{th}}-N_{\mathrm{s}}}
$$
From the second equation, we find an alternative expression for the inversion:
$$
N_{\mathrm{s}}=\frac{R_{\mathrm{p}}}{K n_{\mathrm{s}}+\gamma_{\mathrm{L}}} = \frac{R_{\mathrm{p}} \tau_{\mathrm{L}}}{1+K \tau_{\mathrm{L}} n_{\mathrm{s}}}
$$
We now define the threshold pumping rate $R_{\mathrm{p, th}}$ as the rate required to reach the threshold inversion $N_\text{th}$ in the absence of laser oscillation ($n_s \to 0$). From the equation above, this gives $N_\text{th} = R_\mathrm{p,th} \tau_L$, so
$$
R_{\mathrm{p}, \mathrm{th}} = \frac{N_{\mathrm{th}}}{\tau_{\mathrm{L}}}
$$
It is convenient to introduce the normalized pumping rate as the ratio of the pump rate to the threshold pump rate:
$$
r \equiv \frac{R_{\mathrm{p}}}{R_{\mathrm{p}, \mathrm{th}}}
$$
For a pump rate below threshold ($r<1$), the photon number $n_s$ is very small. The inversion thus grows linearly with the pump rate:
$$
N_{\mathrm{s}} \approx R_{\mathrm{p}} \tau_{\mathrm{L}} = r R_{\mathrm{p, th}}\tau_L = r N_\text{th} \quad \text{for}\quad n_{\mathrm{s}} \ll 1/(K\tau_L) \quad\text{and}\quad r<1
$$
Above threshold ($r>1$), the steady-state photon number $n_s$ becomes larger by many orders of magnitude, such that $n_s\gg1$. In this regime, the expression $N_{\mathrm{s}} = N_{\mathrm{th}} \frac{n_{\mathrm{s}}}{n_{\mathrm{s}}+1}$ shows that the inversion becomes fixed, or *clamped*, at the threshold value:
$$
N_{\mathrm{s}} \approx N_{\mathrm{th}}\quad\text{for}\quad n_{\mathrm{s}} \gg 1 \quad\text{and} \quad r>1
$$
Therefore, above threshold, the inversion remains constant even if the laser is pumped harder. We can summarise the two distinct behaviours:
$$
\begin{aligned}
\text{Below threshold}\quad r<1:&\left\{\begin{array}{l}
n_{\mathrm{s}}=\frac{r}{1-r} \\
N_{\mathrm{s}} \approx r N_{\mathrm{th}}
\end{array}\right. \\ \quad\\
\text{Above threshold} \quad r>1:&\left\{\begin{array}{l}
n_{\mathrm{s}} \approx \frac{\tau_{\mathrm{c}}}{\tau_{\mathrm{L}}} N_{\mathrm{th}}(r-1)=\frac{\gamma_{\mathrm{L}}}{K}(r-1) \\
N_{\mathrm{s}} \approx N_{\mathrm{th}}=\frac{\gamma_{\mathrm{c}}}{K}
\end{array}\right.
\end{aligned}
$$
This behaviour is illustrated in the following figure:

![Attachments/UltraFastLasers_Keller 61.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2061.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=211&rect=181,306,396,606| ]]


### 5.1.2 Gain-Saturation

The roundtrip amplitude gain in a linear cavity with a gain medium of length $L_g$ is $2g$, where $g = \frac{N_s}{V} \sigma L_g$ is the single-pass amplitude gain. Here, $N_s/V$ is the inversion density for a given mode volume $V$. Substituting the steady-state inversion $N_s$, we get
$$
g=\frac{R_{\mathrm{p}} \tau_{\mathrm{L}} \sigma L_g}{V\left(1+K \tau_{\mathrm{L}} n_{\mathrm{s}}\right)}
$$
Comparing this with the initial expression for saturated gain, $g=\frac{g_0}{1+I/I_{\mathrm{sat}}}$, we can identify the small-signal (single-pass) gain $g_0$ and the saturation term:
$$
g_0=L_{\mathrm{g}} \frac{R_{\mathrm{p}}}{V} \tau_{\mathrm{L}} \sigma\quad\text{and}\quad
\frac{I}{I_{\mathrm{sat}}}=K \tau_{\mathrm{L}} n_{\mathrm{s}}
$$
The small-signal gain coefficient $g_0$ depends on the laser material properties and the pump rate. Stronger pumping leads to a larger small-signal gain. Below the lasing threshold, the intracavity intensity is negligible, so the saturated gain is equal to the small-signal gain. At threshold, the gain exactly balances the losses, $g_0 = l$.
$$
\begin{aligned}
\text{At threshold:}\quad&g_{0, \text{th}} =L_{\mathrm{g}} \frac{R_{\mathrm{p}, \mathrm{th}}}{V} \tau_{\mathrm{L}} \sigma=l\\
\text{Above threshold:}\quad&g_0=\frac{R_{\mathrm{p}}}{R_{\mathrm{p}, \mathrm{th}}} g_{0, \mathrm{th}}=r l
\end{aligned}
$$
This relationship is shown in the following figure:

![Attachments/UltraFastLasers_Keller 62.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2062.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=212&rect=114,448,320,614| ]]

Above threshold, inversion clamping ensures that each additional absorbed pump photon is converted into a photon via stimulated emission. Consequently, the output power increases linearly with pump power.

---
## 5.2 Relaxation Oscillations
 [[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=215&selection=115,0,117,45| ]]

As before, we consider the ideal four-level system. If the laser is briefly disturbed from its steady state, the photon number and inversion will deviate from their equilibrium values. It then takes a characteristic time to return to steady state. We can analyse this by linearising the rate equations for small perturbations, $\delta n(t)$ and $\delta N(t)$, around the steady-state values:
$$
\begin{aligned}
& n(t)=n_{\mathrm{s}}+\delta n(t)&\text{with}\quad &\delta n(t) \ll n_{\mathrm{s}} \\
& N(t)=N_{\mathrm{s}}+\delta N(t)&\text{with}\quad &\delta N(t) \ll N_{\mathrm{s}}
\end{aligned}
$$
We consider small perturbations while the laser operates above threshold ($n_s \gg 1$), allowing us to neglect the spontaneous emission term $KN$ in the photon rate equation. Substituting the perturbed forms into the rate equations yields a set of linear differential equations for the perturbations. For the photon number:
$$
\begin{aligned}
\frac{\mathrm{d} \delta n}{\mathrm{d} t} & =K(N_{\mathrm{s}}+\delta N)(n_{\mathrm{s}}+\delta n)-\gamma_{\mathrm{c}}(n_{\mathrm{s}}+\delta n) \\
& \approx K N_{\mathrm{s}} n_{\mathrm{s}} + K N_{\mathrm{s}} \delta n + K n_{\mathrm{s}} \delta N - \gamma_{\mathrm{c}} n_{\mathrm{s}} - \gamma_{\mathrm{c}} \delta n
\end{aligned}
$$
Using the steady-state conditions $K N_s n_s \approx \gamma_c n_s$ and $K N_s \approx \gamma_c$, the equation simplifies to
$$
\frac{\mathrm{d} \delta n}{\mathrm{d} t} = K n_{\mathrm{s}} \delta N = \gamma_{\mathrm{L}}(r-1) \delta N
$$
Similarly for the inversion:
$$
\begin{aligned}
\frac{\mathrm{d} \delta N}{\mathrm{d} t} &= R_{\mathrm{p}}-K(N_{\mathrm{s}}+\delta N)(n_{\mathrm{s}}+\delta n)-\gamma_{\mathrm{L}}(N_{\mathrm{s}}+\delta N) \\
& \approx (R_{\mathrm{p}} - K N_{\mathrm{s}} n_{\mathrm{s}} - \gamma_{\mathrm{L}}N_{\mathrm{s}}) - K N_{\mathrm{s}}\delta n - K n_{\mathrm{s}}\delta N - \gamma_{\mathrm{L}}\delta N
\end{aligned}
$$
The terms in the parenthesis sum to zero in steady state. This leaves
$$
\frac{\mathrm{d} \delta N}{\mathrm{d} t} = - K N_{\mathrm{s}}\delta n - (K n_{\mathrm{s}} + \gamma_{\mathrm{L}})\delta N
$$
Using the above-threshold relations $K N_s \approx \gamma_c$ and $K n_s + \gamma_L = \gamma_L(r-1) + \gamma_L = r\gamma_L$, we obtain
$$
\frac{\mathrm{d} \delta N}{\mathrm{d} t} = - \gamma_{\mathrm{c}} \delta n - r \gamma_{\mathrm{L}} \delta N
$$

### 5.2.1 Ansatz for Solutions After Perturbations

If the perturbation is short-lived, we expect the system to return to equilibrium. We thus propose an exponential ansatz for the perturbations:
$$
\delta n(t) \sim \mathrm{e}^{s t}\quad\text{and}\quad \delta N(t) \sim \mathrm{e}^{s t}
$$
For a stable laser, the real part of $s$ must be negative. Inserting this ansatz into the linearised rate equations yields a characteristic equation for $s$: $s^2 + r\gamma_L s + \gamma_L\gamma_c(r-1) = 0$. The solutions are
$$
s_{1,2}=-\frac{r \gamma_{\mathrm{L}}}{2} \pm \sqrt{\left(\frac{r \gamma_{\mathrm{L}}}{2}\right)^2-\gamma_{\mathrm{L}} \gamma_{\mathrm{c}}(r-1)}
$$
The nature of the solution depends on the value of the discriminant.

**Over-Critically Damped Laser**
If the discriminant is positive, $s$ is real, and the system returns to steady-state without oscillations. This is typical for gas lasers, where the condition is
$$
\left(\frac{r \gamma_{\mathrm{L}}}{2}\right)^2>\gamma_{\mathrm{L}} \gamma_{\mathrm{c}}(r-1)\implies\frac{r \gamma_{\mathrm{L}}}{4}>\gamma_{\mathrm{c}} \frac{r-1}{r}
$$
In the limit where the stimulated decay rate is much larger than the cavity decay rate ($r\gamma_L\gg\gamma_c$), the two decay rates are approximately
$$
s_1 \approx -r\gamma_L \quad \text{and} \quad s_2 \approx -\gamma_c \frac{r-1}{r}
$$
The system is called *over-critically damped*. After a perturbation, the laser returns to its steady state on timescales governed by the cavity photon lifetime and the stimulated lifetime of the laser level.

**Under-Critically Damped Laser**
If the discriminant is negative, $s$ is complex, leading to damped *relaxation oscillations*. This is typical for solid-state lasers, corresponding to the case
$$
\left(\frac{r \gamma_{\mathrm{L}}}{2}\right)^2<\gamma_{\mathrm{L}} \gamma_{\mathrm{c}}(r-1)\implies\frac{r \gamma_{\mathrm{L}}}{4}<\gamma_{\mathrm{c}} \frac{r-1}{r}
$$
The solution for $s$ is then
$$
s_{1,2}=-\frac{r \gamma_{\mathrm{L}}}{2} \pm i \sqrt{\gamma_{\mathrm{L}} \gamma_{\mathrm{c}}(r-1)-\left(\frac{r \gamma_{\mathrm{L}}}{2}\right)^2}
$$
The solution for the photon number perturbation takes the form of a damped sinusoid:
$$
\delta n(t) = n_1 \mathrm{e}^{-\gamma_{\text {relax }} t} \cos \left(\omega_{\text {relax }} t\right)
$$
The real part of $s$ is the damping rate of the relaxation oscillation,
$$
\gamma_{\text {relax }}=\frac{r \gamma_{\mathrm{L}}}{2}
$$
while the imaginary part of $s$ is the relaxation oscillation angular frequency,
$$
\omega_{\text {relax }} = \sqrt{\gamma_{\mathrm{L}} \gamma_{\mathrm{c}}(r-1)-\left(\frac{r \gamma_{\mathrm{L}}}{2}\right)^2}
$$
For many solid-state lasers, the cavity decay rate is much larger than the stimulated decay rate ($\gamma_{\mathrm{c}} \gg r\gamma_L$). The frequency $f_{\text{relax}}=\omega_{\text{relax}}/2\pi$ can be approximated as
$$
f_{\text {relax }} \approx \frac{1}{2 \pi} \sqrt{\gamma_{\mathrm{L}} \gamma_{\mathrm{c}}(r-1)} = \frac{1}{2 \pi} \sqrt{\frac{r-1}{\tau_{\mathrm{L}}\tau_{\mathrm{c}}}} = \frac{1}{2 \pi} \sqrt{\frac{1}{\tau_{\text {stim }}\tau_{\mathrm{c}}}}
$$
Here, we defined the stimulated lifetime $\tau_{\text {stim }}=\tau_{\mathrm{L}} /(r-1)$. Relaxation oscillations can be measured with a fast photodiode and a microwave spectrum analyser, appearing as a peak in the laser's intensity noise spectrum.

![Attachments/UltraFastLasers_Keller 63.webp|700](/img/user/Attachments/UltraFastLasers_Keller%2063.webp)[[Reading/Books/Lasers and Nonlinear Optics/UltraFastLasers_Keller.pdf#page=219&rect=54,501,385,611| ]]

The relaxation frequency increases with the pump power (since $r$ increases), and the strength of the relative intensity fluctuations decreases with increasing pump power, as
$$
\frac{\Delta P_{\text {relax }}}{P} \sim \frac{1}{\gamma_{\text {relax }}}=\frac{2}{r \gamma_{\mathrm{L}}}
$$
Therefore, the relative noise strength decreases for higher pump powers and shorter upper-state lifetimes.

### 5.2.2 Measurement of the Small-Signal Gain

Relaxation oscillations provide a simple method to determine the small-signal gain $g_0$ of CW solid-state lasers. For lasers with high small-signal gain, such as diode-pumped solid-state lasers, measuring the lasing threshold to infer gain can be inaccurate. The small-signal gain is a fundamental parameter for laser design, influencing the choice of output coupler, predicting Q-switched laser performance, and affecting the dynamics of passively modelocked lasers.

For typical solid-state lasers like Nd:YAG, the upper-state lifetime $\tau_L$ is hundreds of microseconds, much longer than the cavity lifetime $\tau_c$, which is typically tens to hundreds of nanoseconds. The approximation $r\gamma_L\ll\gamma_c$ is therefore valid if the laser is not pumped excessively far above threshold. The relaxation oscillation frequency is then
$$
f_{\text {relax }} \approx \frac{1}{2 \pi} \sqrt{\frac{r-1}{\tau_{\mathrm{L}} \tau_{\mathrm{c}}}}
$$
We can express the parameters in terms of measurable quantities. Using $r=g_0/l$ and the cavity lifetime $\tau_c = T_R/(2l)$, where $T_R$ is the roundtrip time and $2l$ is the roundtrip intensity loss, we get
$$
f_{\text {relax }} \approx \frac{1}{2 \pi} \sqrt{\frac{(g_0/l)-1}{\tau_{\mathrm{L}} (T_{\mathrm{R}}/2l)}} = \frac{1}{2 \pi} \sqrt{\frac{2(g_0-l)}{\tau_{\mathrm{L}} T_{\mathrm{R}}}}
$$
For high-gain lasers where $g_0\gg l$, the relaxation frequency becomes largely independent of the cavity loss and scales with the pump power:
$$
f_\text{relax}\sim\sqrt{g_0}\sim\sqrt{P_\text{pump}}
$$
By rearranging the formula, we can solve for the roundtrip small-signal gain $2g_0$:
$$
2 g_0 \approx 4 \pi^2 \tau_{\mathrm{L}} T_{\mathrm{R}} f_{\text {relax }}^2+2 l
$$
This relation allows for an accurate determination of the small-signal gain by measuring the relaxation oscillation frequency, the cavity roundtrip time, the total losses, and knowing the upper-state lifetime of the gain medium.

---