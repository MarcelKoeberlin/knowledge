---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/7-saturable-absorbers-for-solid-state-lasers/","hide":"true","updated":"2026-06-07T20:14:09.236+02:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/7 Saturable Absorbers for Solid-State Lasers#7.1 Why Saturable Absorbers Matter\|7.1 Why Saturable Absorbers Matter]]
[[Notes/Ultrafast Laser Physics/7 Saturable Absorbers for Solid-State Lasers#7.2 Slow and Fast Saturable Absorbers\|7.2 Slow and Fast Saturable Absorbers]]
[[Notes/Ultrafast Laser Physics/7 Saturable Absorbers for Solid-State Lasers#7.3 Nonlinear Reflectivity Models\|7.3 Nonlinear Reflectivity Models]]
[[Notes/Ultrafast Laser Physics/7 Saturable Absorbers for Solid-State Lasers#7.4 Semiconductor Saturable Absorbers\|7.4 Semiconductor Saturable Absorbers]]
[[Notes/Ultrafast Laser Physics/7 Saturable Absorbers for Solid-State Lasers#7.5 SESAMs\|7.5 SESAMs]]
[[Notes/Ultrafast Laser Physics/7 Saturable Absorbers for Solid-State Lasers#7.6 Damage, Measurement, and Design Parameters\|7.6 Damage, Measurement, and Design Parameters]]

---
# 7 Saturable Absorbers for Solid-State Lasers
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

A saturable absorber is an optical element whose loss decreases when the optical intensity or fluence becomes large. In a laser cavity this creates an intensity-dependent discrimination: weak continuous-wave light sees high loss, while a short intense pulse sees lower loss. This mechanism is central to passive Q-switching and passive modelocking.

For solid-state lasers the most important modern implementation is the semiconductor saturable absorber mirror (SESAM). A SESAM combines a saturable semiconductor absorber with a mirror structure, so it can be inserted into a standing-wave resonator like an ordinary end mirror or folding mirror.

---
## 7.1 Why Saturable Absorbers Matter
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

The microscopic picture is simple. At low intensity, photons are absorbed by exciting carriers from a lower to an upper state. At high intensity, the available absorbing states are depleted or filled, so fewer photons can be absorbed. The absorber becomes more transparent.

For a two-level-like absorber with absorption cross-section $\sigma_A$, the saturation fluence is
$$
F_{\mathrm{sat},A}=\frac{h\nu}{\sigma_A}.
$$
If the absorber recovery time is $\tau_A$, the corresponding saturation intensity is
$$
I_{\mathrm{sat},A}=\frac{F_{\mathrm{sat},A}}{\tau_A}.
$$
The distinction between fluence and intensity is important:

- Fluence $F$ is energy per area and is the natural quantity for a slow absorber excited by a pulse much shorter than its recovery time.
- Intensity $I$ is power per area and is the natural quantity for a fast absorber that follows the instantaneous pulse shape.

For a saturable absorber mirror, the reflectivity increases with pulse fluence. It is common to define:
$$
\Delta R=R_{\mathrm{ns}}-R_0,
$$
where $R_0$ is the low-fluence reflectivity and $R_{\mathrm{ns}}$ is the saturated reflectivity before damage or inverse saturable absorption become relevant. The nonsaturable loss is
$$
\Delta R_{\mathrm{ns}}=1-R_{\mathrm{ns}}.
$$
Thus a useful absorber should have enough modulation depth $\Delta R$ to start and stabilise the desired pulsed operation, but low nonsaturable loss so that the laser remains efficient.

The absorber saturation fluence must be compared with the laser mode area:
$$
E_{\mathrm{sat},A}=F_{\mathrm{sat},A}A_{\mathrm{eff}}.
$$
Changing the spot size on the absorber is therefore a direct way of changing the pulse energy required to bleach it. A smaller mode saturates the absorber more easily but increases fluence and damage risk. A larger mode increases the damage margin but can make self-starting harder.

---
## 7.2 Slow and Fast Saturable Absorbers
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

The absorber recovery time $\tau_A$ should always be compared with the pulse duration $\tau_p$ and the cavity roundtrip time $T_R$.

A **slow saturable absorber** satisfies
$$
\tau_A\gg \tau_p.
$$
During the pulse, the absorber cannot recover. The leading edge of the pulse saturates the absorber, and the trailing edge sees reduced loss. The absorber response depends mainly on pulse fluence. This is the most relevant limit for many SESAM-based solid-state lasers with femtosecond or picosecond pulses.

A **fast saturable absorber** satisfies
$$
\tau_A\ll \tau_p.
$$
The absorber follows the instantaneous intensity. The loss is lowest at the peak of the pulse and larger in the wings. This produces direct pulse shortening. Kerr-lens modelocking behaves like an artificial fast saturable absorber, even though the underlying mechanism is not absorption.

If the absorber is too slow compared with the roundtrip time, it remains bleached for the next pulse. Then it no longer discriminates effectively between pulses and cw light. If it is too fast and too strong, it can introduce excessive nonlinear loss or destabilise the cavity. In practice, the absorber recovery dynamics are therefore design parameters, not details.

The absorber loss can be described by a time-dependent loss variable $q(t)$:
$$
\frac{dq}{dt}=\frac{q_0-q}{\tau_A}-\frac{qP(t)}{E_{\mathrm{sat},A}}.
$$
Here $q_0$ is the unsaturated loss, $P(t)$ is the incident power, and $E_{\mathrm{sat},A}$ is the absorber saturation energy for the optical mode area. The first term describes recovery, and the second term describes bleaching by the pulse.

For a short pulse in the slow-absorber limit, recovery during the pulse can be neglected. Then the absorber is driven mainly by the integrated pulse energy. This is why slow SESAMs can still support femtosecond soliton modelocking: they do not have to follow the femtosecond intensity profile point by point; they only have to discriminate the pulse fluence from the cw background.

---
## 7.3 Nonlinear Reflectivity Models
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

For a mirror-type absorber it is often more useful to describe the nonlinear response directly by a fluence-dependent reflectivity. In the slow-absorber limit, a simple pulse-averaged model is
$$
R(F_p)\approx R_{\mathrm{ns}}-\Delta R\frac{1-\exp(-S)}{S},
\qquad S=\frac{F_p}{F_{\mathrm{sat},A}}.
$$
This has the correct limiting behaviour:
$$
\begin{aligned}
S\ll 1&:\quad R(F_p)\approx R_{\mathrm{ns}}-\Delta R=R_0,\\
S\gg 1&:\quad R(F_p)\rightarrow R_{\mathrm{ns}}.
\end{aligned}
$$
For a fast absorber one often writes an intensity-dependent form,
$$
R(I)\approx R_{\mathrm{ns}}-\frac{\Delta R}{1+I/I_{\mathrm{sat},A}}.
$$
This again approaches $R_0$ at low intensity and $R_{\mathrm{ns}}$ at high intensity.

At very high fluence an absorber can become worse again because of two-photon absorption, free-carrier absorption, heating, or other damage-related channels. This is commonly represented by an inverse-saturable-absorption contribution. A qualitative reflectivity curve therefore has three regions:

1. low fluence: unsaturated reflectivity $R_0$;
2. useful operating fluence: increasing reflectivity with fluence;
3. excessive fluence: rollover, heating, or damage.

The relevant absorber parameters are therefore not just $\Delta R$ and $F_{\mathrm{sat},A}$, but also $\Delta R_{\mathrm{ns}}$, recovery time, damage fluence, optical bandwidth, dispersion, and thermal handling.

---
## 7.4 Semiconductor Saturable Absorbers
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

In a semiconductor absorber, photons with energy near or above the bandgap create electron-hole pairs. Absorption decreases when the relevant electronic states are filled, so further transitions are blocked. This is the physical origin of saturation.

The absorber wavelength is mainly set by the semiconductor bandgap. Quantum wells are especially useful because their transition energies can be engineered by material composition and well thickness. They can also provide stronger absorption in a thin layer, which is helpful when the absorber must be integrated into a mirror stack.

The recovery is not a single universal time constant. It can contain several processes:

- carrier-carrier scattering, which thermalises the carrier distribution;
- carrier-phonon scattering, which cools hot carriers;
- trapping or defect-assisted recombination, which can accelerate recovery;
- radiative or non-radiative recombination, which removes carriers.

Fast recovery is useful for high repetition rates and short pulses, but deliberately introducing defects to speed up recombination can increase nonsaturable loss. SESAM design is therefore a compromise between modulation depth, recovery time, loss, bandwidth, and damage threshold.

---
## 7.5 SESAMs
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

A semiconductor saturable absorber mirror consists of at least two functional parts:

- a high-reflectivity mirror, usually a semiconductor distributed Bragg reflector (DBR);
- one or more semiconductor absorber layers placed in the optical field.

The DBR is a stack of alternating high- and low-index layers with optical thickness close to $\lambda/4$. Reflections from the interfaces add constructively, giving high reflectivity over a stop band. The absorber layers are placed such that the intracavity standing-wave field has the desired strength at the absorber.

The field enhancement at the absorber strongly affects the device parameters. If the absorber is placed near a field maximum, the saturation fluence is reduced and the modulation depth is increased. If it is placed near a field minimum, the device becomes harder to saturate but can tolerate larger incident fluence.

SESAMs can be designed as:

- **resonant devices**, where a microcavity enhances the field and gives low saturation fluence, but narrower bandwidth and stronger dispersion;
- **anti-resonant devices**, where the response is broader and often better suited for femtosecond modelocking;
- **low-finesse devices**, which trade peak field enhancement for broader and more robust behaviour.

For ultrafast lasers, SESAM dispersion can be as important as its nonlinear reflectivity. A mirror that introduces excessive group-delay dispersion can prevent short pulses even if the modulation depth is suitable. Thus the SESAM must be designed together with the rest of the cavity dispersion.

---
## 7.6 Damage, Measurement, and Design Parameters
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

The absorber must survive the intracavity fluence. Damage can be caused by optical breakdown, local heating, defect absorption, or excessive carrier density. The damage threshold is usually specified as a fluence, because pulsed operation deposits energy over a small area in a short time.

The basic nonlinear reflectivity measurement is conceptually straightforward. One sends pulses of known fluence onto the SESAM and measures the reflected pulse energy. Fitting $R(F_p)$ then gives $\Delta R$, $F_{\mathrm{sat},A}$, and $\Delta R_{\mathrm{ns}}$. A pump-probe measurement is used when the recovery dynamics are needed. The pump bleaches the absorber, and a delayed probe measures how the reflectivity recovers as a function of delay.

The most important SESAM design parameters are:

- modulation depth $\Delta R$;
- saturation fluence $F_{\mathrm{sat},A}$;
- nonsaturable loss $\Delta R_{\mathrm{ns}}$;
- recovery time $\tau_A$;
- damage fluence;
- operation wavelength and bandwidth;
- group-delay dispersion;
- thermal impedance and heat removal.

For passive modelocking, the absorber should saturate at the pulse fluence but not at the cw intracavity intensity. For passive Q-switching, the absorber should allow the gain to build up before it bleaches. The same physical device can therefore behave very differently depending on the cavity, pump level, beam size, and gain medium.

For few-cycle oscillators that later seed [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses\|single-attosecond-pulse generation]], absorber design is usually indirect but still important. A noisy or Q-switched modelocked oscillator makes downstream amplification and CEP stabilisation harder. A robust SESAM can provide reliable self-starting, while Kerr-lens or soliton dynamics provide the strongest pulse shortening.
