"use client";

import { useState } from "react";
import {
  TIME_SAVING_TASKS,
  DEFAULT_HOURLY_COST,
} from "@/data/timeSavingTasks";
import { SimulatorResults } from "@/types/components";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradientText } from "@/components/ui/GradientText";
import { Slider } from "@/components/ui/slider";
import {
  TrendingUp,
  Euro,
  Clock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface TaskSettings {
  [key: string]: {
    frequency: number;
    estimatedTime: number;
  };
}

export const TimeSavingSimulator = () => {
  const [hourlyRate, setHourlyRate] = useState(DEFAULT_HOURLY_COST);
  const [taskSettings, setTaskSettings] = useState<TaskSettings>(
    TIME_SAVING_TASKS.reduce(
      (acc, task) => ({
        ...acc,
        [task.id]: {
          frequency: task.frequency,
          estimatedTime: task.estimatedTime,
        },
      }),
      {}
    )
  );

  // Calcul des résultats
  const calculateResults = (): SimulatorResults => {
    let totalMinutesPerDay = 0;

    TIME_SAVING_TASKS.forEach((task) => {
      const settings = taskSettings[task.id];
      if (settings) {
        totalMinutesPerDay += settings.frequency * settings.estimatedTime;
      }
    });

    const totalHoursPerWeek = (totalMinutesPerDay / 60) * 5; // 5 jours ouvrables
    const totalDaysPerYear = (totalMinutesPerDay / 60 / 8) * 250; // 250 jours ouvrables
    const costPerDay = (totalMinutesPerDay / 60) * hourlyRate;
    const costPerMonth = costPerDay * 22; // 22 jours ouvrables par mois
    const costPerYear = costPerDay * 250; // 250 jours ouvrables par an

    return {
      totalMinutesPerDay,
      totalHoursPerWeek,
      totalDaysPerYear,
      costPerDay,
      costPerMonth,
      costPerYear,
    };
  };

  const results = calculateResults();

  const handleFrequencyChange = (
    taskId: string,
    newFrequency: number[]
  ) => {
    setTaskSettings((prev) => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        frequency: newFrequency[0],
      },
    }));
  };

  const handleTimeChange = (
    taskId: string,
    newTime: number[]
  ) => {
    setTaskSettings((prev) => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        estimatedTime: newTime[0],
      },
    }));
  };

  return (
    <div className="w-full space-y-8">
      {/* Section Paramètres */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Coût horaire */}
        <Card className="p-6 glass">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Euro className="w-5 h-5 text-primary" />
              <Label className="text-base font-semibold">Coût horaire</Label>
            </div>
            <Input
              type="number"
              min="0"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="text-lg font-bold"
            />
            <p className="text-sm text-muted-foreground">
              Ajustez votre coût horaire pour un calcul précis
            </p>
          </div>
        </Card>

        {/* Résumé rapide */}
        <Card className="p-6 glass lg:col-span-2">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Temps perdu/jour
              </p>
              <p className="text-2xl font-bold">
                {Math.round(results.totalMinutesPerDay)} min
              </p>
              <p className="text-xs text-muted-foreground">
                {(results.totalMinutesPerDay / 60).toFixed(1)}h
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Coût/jour
              </p>
              <p className="text-2xl font-bold">
                {results.costPerDay.toFixed(0)}€
              </p>
              <p className="text-xs text-muted-foreground">
                ~{(results.costPerMonth / 1000).toFixed(0)}k€/an
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Coût/an
              </p>
              <p className="text-2xl font-bold text-red-500">
                {(results.costPerYear / 1000).toFixed(0)}k€
              </p>
              <p className="text-xs text-muted-foreground">
                {results.totalDaysPerYear.toFixed(1)} jours
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Section Paramétrage des tâches */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          Paramétrez vos <GradientText>tâches</GradientText>
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {TIME_SAVING_TASKS.map((task) => {
            const IconComponent = task.icon;
            const settings = taskSettings[task.id];

            return (
              <Card key={task.id} className="p-6 space-y-6 glass hover:border-primary/50 transition-colors">
                {/* En-tête */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{task.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {task.description}
                    </p>
                  </div>
                </div>

                {/* Sliders */}
                <div className="space-y-4">
                  {/* Fréquence */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-sm font-medium">Fréquence</Label>
                      <span className="text-lg font-bold text-primary">
                        {settings.frequency}x/jour
                      </span>
                    </div>
                    <Slider
                      value={[settings.frequency]}
                      onValueChange={(value) =>
                        handleFrequencyChange(task.id, value)
                      }
                      min={1}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Nombre de fois par jour
                    </p>
                  </div>

                  {/* Temps estimé */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-sm font-medium">
                        Temps estimé
                      </Label>
                      <span className="text-lg font-bold text-primary">
                        {settings.estimatedTime} min
                      </span>
                    </div>
                    <Slider
                      value={[settings.estimatedTime]}
                      onValueChange={(value) =>
                        handleTimeChange(task.id, value)
                      }
                      min={1}
                      max={120}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Temps moyen par tâche
                    </p>
                  </div>

                  {/* Résumé de la tâche */}
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-medium text-foreground">
                      Temps par jour :{" "}
                      <span className="text-primary font-bold">
                        {Math.round(
                          settings.frequency * settings.estimatedTime
                        )}{" "}
                        min
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Soit{" "}
                      {(
                        (settings.frequency * settings.estimatedTime) / 60
                      ).toFixed(2)}{" "}
                      h/jour • ~
                      {(
                        ((settings.frequency * settings.estimatedTime) / 60) *
                        hourlyRate
                      ).toFixed(0)}
                      €/jour
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Section Résultats détaillés */}
      <Card className="p-8 space-y-6 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold">Économies potentielles</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Temps/jour
            </p>
            <p className="text-3xl font-bold">
              {(results.totalMinutesPerDay / 60).toFixed(1)}h
            </p>
            <p className="text-xs text-muted-foreground">
              {Math.round(results.totalMinutesPerDay)} minutes
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Temps/semaine
            </p>
            <p className="text-3xl font-bold">
              {results.totalHoursPerWeek.toFixed(1)}h
            </p>
            <p className="text-xs text-muted-foreground">
              ~{(results.totalHoursPerWeek * hourlyRate).toFixed(0)}€/semaine
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Temps/an
            </p>
            <p className="text-3xl font-bold">
              {results.totalDaysPerYear.toFixed(0)} j
            </p>
            <p className="text-xs text-muted-foreground">
              ~{(results.totalDaysPerYear * 8).toFixed(0)} heures
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Coût économisé/an
            </p>
            <p className="text-3xl font-bold text-red-500">
              {(results.costPerYear / 1000).toFixed(1)}k€
            </p>
            <p className="text-xs text-muted-foreground">
              ~{(results.costPerMonth / 1000).toFixed(1)}k€/mois
            </p>
          </div>
        </div>

        {/* Breakdown détaillé */}
        <div className="pt-6 border-t border-primary/20">
          <h4 className="font-semibold mb-4">Détail des économies</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-background/50 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-1">
                Coût par jour
              </p>
              <p className="text-2xl font-bold text-primary">
                {results.costPerDay.toFixed(0)}€
              </p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-1">
                Coût par mois
              </p>
              <p className="text-2xl font-bold text-primary">
                {(results.costPerMonth / 1000).toFixed(1)}k€
              </p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-1">
                Coût par an
              </p>
              <p className="text-2xl font-bold text-red-500">
                {(results.costPerYear / 1000).toFixed(1)}k€
              </p>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 space-y-2">
          <p className="text-sm font-medium text-primary">
            💡 Automatisez ces tâches avec l'IA
          </p>
          <p className="text-sm text-muted-foreground">
            Notre plateforme peut gérer automatiquement les réponses aux
            messages et avis, vous permettant d'économiser{" "}
            <span className="font-bold text-primary">
              {(results.costPerYear / 1000).toFixed(1)}k€
            </span>{" "}
            par an.
          </p>
        </div>
      </Card>
    </div>
  );
};
